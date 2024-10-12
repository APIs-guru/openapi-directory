# RollbackTargetResponse

The response object from `RollbackTarget`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollback_config** | [**RollbackTargetConfig**](RollbackTargetConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.rollback_target_response import RollbackTargetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackTargetResponse from a JSON string
rollback_target_response_instance = RollbackTargetResponse.from_json(json)
# print the JSON string representation of the object
print(RollbackTargetResponse.to_json())

# convert the object into a dict
rollback_target_response_dict = rollback_target_response_instance.to_dict()
# create an instance of RollbackTargetResponse from a dict
rollback_target_response_from_dict = RollbackTargetResponse.from_dict(rollback_target_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


