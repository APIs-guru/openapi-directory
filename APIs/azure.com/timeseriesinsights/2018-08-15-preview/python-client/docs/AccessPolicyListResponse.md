# AccessPolicyListResponse

The response of the List access policies operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AccessPolicyResource]**](AccessPolicyResource.md) | Result of the List access policies operation. | [optional] 

## Example

```python
from openapi_client.models.access_policy_list_response import AccessPolicyListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyListResponse from a JSON string
access_policy_list_response_instance = AccessPolicyListResponse.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyListResponse.to_json())

# convert the object into a dict
access_policy_list_response_dict = access_policy_list_response_instance.to_dict()
# create an instance of AccessPolicyListResponse from a dict
access_policy_list_response_from_dict = AccessPolicyListResponse.from_dict(access_policy_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


