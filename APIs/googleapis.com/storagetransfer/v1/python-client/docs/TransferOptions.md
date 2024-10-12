# TransferOptions

TransferOptions define the actions to be performed on objects in a transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_objects_from_source_after_transfer** | **bool** | Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive. | [optional] 
**delete_objects_unique_in_sink** | **bool** | Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive. | [optional] 
**metadata_options** | [**MetadataOptions**](MetadataOptions.md) |  | [optional] 
**overwrite_objects_already_existing_in_sink** | **bool** | When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object. | [optional] 
**overwrite_when** | **str** | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink. | [optional] 

## Example

```python
from openapi_client.models.transfer_options import TransferOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TransferOptions from a JSON string
transfer_options_instance = TransferOptions.from_json(json)
# print the JSON string representation of the object
print(TransferOptions.to_json())

# convert the object into a dict
transfer_options_dict = transfer_options_instance.to_dict()
# create an instance of TransferOptions from a dict
transfer_options_from_dict = TransferOptions.from_dict(transfer_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


