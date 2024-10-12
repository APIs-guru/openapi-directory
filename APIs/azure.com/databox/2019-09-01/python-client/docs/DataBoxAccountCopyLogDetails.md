# DataBoxAccountCopyLogDetails

Copy log details for a storage account of a DataBox job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Destination account name. | [optional] [readonly] 
**copy_log_link** | **str** | Link for copy logs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_account_copy_log_details import DataBoxAccountCopyLogDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxAccountCopyLogDetails from a JSON string
data_box_account_copy_log_details_instance = DataBoxAccountCopyLogDetails.from_json(json)
# print the JSON string representation of the object
print(DataBoxAccountCopyLogDetails.to_json())

# convert the object into a dict
data_box_account_copy_log_details_dict = data_box_account_copy_log_details_instance.to_dict()
# create an instance of DataBoxAccountCopyLogDetails from a dict
data_box_account_copy_log_details_from_dict = DataBoxAccountCopyLogDetails.from_dict(data_box_account_copy_log_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


