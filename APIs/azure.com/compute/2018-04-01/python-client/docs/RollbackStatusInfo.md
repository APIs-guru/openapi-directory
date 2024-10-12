# RollbackStatusInfo

Information about rollback on failed VM instances after a OS Upgrade operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_rolledback_instance_count** | **int** | The number of instances which failed to rollback. | [optional] [readonly] 
**rollback_error** | [**ApiError**](ApiError.md) |  | [optional] 
**successfully_rolledback_instance_count** | **int** | The number of instances which have been successfully rolled back. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rollback_status_info import RollbackStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackStatusInfo from a JSON string
rollback_status_info_instance = RollbackStatusInfo.from_json(json)
# print the JSON string representation of the object
print(RollbackStatusInfo.to_json())

# convert the object into a dict
rollback_status_info_dict = rollback_status_info_instance.to_dict()
# create an instance of RollbackStatusInfo from a dict
rollback_status_info_from_dict = RollbackStatusInfo.from_dict(rollback_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


