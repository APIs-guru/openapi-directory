# PolicyListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PolicyListByServiceDefaultResponseError**](PolicyListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_list_by_service_default_response import PolicyListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyListByServiceDefaultResponse from a JSON string
policy_list_by_service_default_response_instance = PolicyListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PolicyListByServiceDefaultResponse.to_json())

# convert the object into a dict
policy_list_by_service_default_response_dict = policy_list_by_service_default_response_instance.to_dict()
# create an instance of PolicyListByServiceDefaultResponse from a dict
policy_list_by_service_default_response_from_dict = PolicyListByServiceDefaultResponse.from_dict(policy_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


