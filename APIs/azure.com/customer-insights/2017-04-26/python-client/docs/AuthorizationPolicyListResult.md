# AuthorizationPolicyListResult

The response of list authorization policy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[AuthorizationPolicyResourceFormat]**](AuthorizationPolicyResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.authorization_policy_list_result import AuthorizationPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPolicyListResult from a JSON string
authorization_policy_list_result_instance = AuthorizationPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPolicyListResult.to_json())

# convert the object into a dict
authorization_policy_list_result_dict = authorization_policy_list_result_instance.to_dict()
# create an instance of AuthorizationPolicyListResult from a dict
authorization_policy_list_result_from_dict = AuthorizationPolicyListResult.from_dict(authorization_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


