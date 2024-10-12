# ManagedDatabaseRestoreDetailsResult

A managed database restore details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedDatabaseRestoreDetailsProperties**](ManagedDatabaseRestoreDetailsProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_database_restore_details_result import ManagedDatabaseRestoreDetailsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDatabaseRestoreDetailsResult from a JSON string
managed_database_restore_details_result_instance = ManagedDatabaseRestoreDetailsResult.from_json(json)
# print the JSON string representation of the object
print(ManagedDatabaseRestoreDetailsResult.to_json())

# convert the object into a dict
managed_database_restore_details_result_dict = managed_database_restore_details_result_instance.to_dict()
# create an instance of ManagedDatabaseRestoreDetailsResult from a dict
managed_database_restore_details_result_from_dict = ManagedDatabaseRestoreDetailsResult.from_dict(managed_database_restore_details_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


