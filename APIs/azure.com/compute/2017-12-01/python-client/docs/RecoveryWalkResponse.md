# RecoveryWalkResponse

Response after calling a manual recovery walk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_platform_update_domain** | **int** | The next update domain that needs to be walked. Null means walk spanning all update domains has been completed | [optional] [readonly] 
**walk_performed** | **bool** | Whether the recovery walk was performed | [optional] [readonly] 

## Example

```python
from openapi_client.models.recovery_walk_response import RecoveryWalkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryWalkResponse from a JSON string
recovery_walk_response_instance = RecoveryWalkResponse.from_json(json)
# print the JSON string representation of the object
print(RecoveryWalkResponse.to_json())

# convert the object into a dict
recovery_walk_response_dict = recovery_walk_response_instance.to_dict()
# create an instance of RecoveryWalkResponse from a dict
recovery_walk_response_from_dict = RecoveryWalkResponse.from_dict(recovery_walk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


