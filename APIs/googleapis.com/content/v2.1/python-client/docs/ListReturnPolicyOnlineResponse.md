# ListReturnPolicyOnlineResponse

Response message for the `ListReturnPolicyOnline` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_policies** | [**List[ReturnPolicyOnline]**](ReturnPolicyOnline.md) | The retrieved return policies. | [optional] 

## Example

```python
from openapi_client.models.list_return_policy_online_response import ListReturnPolicyOnlineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReturnPolicyOnlineResponse from a JSON string
list_return_policy_online_response_instance = ListReturnPolicyOnlineResponse.from_json(json)
# print the JSON string representation of the object
print(ListReturnPolicyOnlineResponse.to_json())

# convert the object into a dict
list_return_policy_online_response_dict = list_return_policy_online_response_instance.to_dict()
# create an instance of ListReturnPolicyOnlineResponse from a dict
list_return_policy_online_response_from_dict = ListReturnPolicyOnlineResponse.from_dict(list_return_policy_online_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


