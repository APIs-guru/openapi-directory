# StorageDescriptor

Stores physical storage information of the data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_format** | **str** | The fully qualified Java class name of the input format. | [optional] 
**location_uri** | **str** | Cloud Storage folder URI where the table data is stored, starting with \&quot;gs://\&quot;. | [optional] 
**output_format** | **str** | The fully qualified Java class name of the output format. | [optional] 
**serde_info** | [**SerDeInfo**](SerDeInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_descriptor import StorageDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDescriptor from a JSON string
storage_descriptor_instance = StorageDescriptor.from_json(json)
# print the JSON string representation of the object
print(StorageDescriptor.to_json())

# convert the object into a dict
storage_descriptor_dict = storage_descriptor_instance.to_dict()
# create an instance of StorageDescriptor from a dict
storage_descriptor_from_dict = StorageDescriptor.from_dict(storage_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


