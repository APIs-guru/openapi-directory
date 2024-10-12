# PolicyListByService200Response

The response of the list policy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[PolicyListByService200ResponseValueInner]**](PolicyListByService200ResponseValueInner.md) | Policy Contract value. | [optional] 

## Example

```python
from openapi_client.models.policy_list_by_service200_response import PolicyListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyListByService200Response from a JSON string
policy_list_by_service200_response_instance = PolicyListByService200Response.from_json(json)
# print the JSON string representation of the object
print(PolicyListByService200Response.to_json())

# convert the object into a dict
policy_list_by_service200_response_dict = policy_list_by_service200_response_instance.to_dict()
# create an instance of PolicyListByService200Response from a dict
policy_list_by_service200_response_from_dict = PolicyListByService200Response.from_dict(policy_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


