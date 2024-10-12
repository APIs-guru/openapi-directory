# DataBoxHeavyAccountCopyLogDetails

Copy log details for a storage account for Databox heavy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Destination account name. | [optional] [readonly] 
**copy_log_link** | **List[str]** | Link for copy logs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_heavy_account_copy_log_details import DataBoxHeavyAccountCopyLogDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxHeavyAccountCopyLogDetails from a JSON string
data_box_heavy_account_copy_log_details_instance = DataBoxHeavyAccountCopyLogDetails.from_json(json)
# print the JSON string representation of the object
print(DataBoxHeavyAccountCopyLogDetails.to_json())

# convert the object into a dict
data_box_heavy_account_copy_log_details_dict = data_box_heavy_account_copy_log_details_instance.to_dict()
# create an instance of DataBoxHeavyAccountCopyLogDetails from a dict
data_box_heavy_account_copy_log_details_from_dict = DataBoxHeavyAccountCopyLogDetails.from_dict(data_box_heavy_account_copy_log_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


