# ApiOperationPolicyListByOperation200Response

The response of the list policy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiOperationPolicyListByOperation200ResponseValueInner]**](ApiOperationPolicyListByOperation200ResponseValueInner.md) | Policy Contract value. | [optional] 

## Example

```python
from openapi_client.models.api_operation_policy_list_by_operation200_response import ApiOperationPolicyListByOperation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationPolicyListByOperation200Response from a JSON string
api_operation_policy_list_by_operation200_response_instance = ApiOperationPolicyListByOperation200Response.from_json(json)
# print the JSON string representation of the object
print(ApiOperationPolicyListByOperation200Response.to_json())

# convert the object into a dict
api_operation_policy_list_by_operation200_response_dict = api_operation_policy_list_by_operation200_response_instance.to_dict()
# create an instance of ApiOperationPolicyListByOperation200Response from a dict
api_operation_policy_list_by_operation200_response_from_dict = ApiOperationPolicyListByOperation200Response.from_dict(api_operation_policy_list_by_operation200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


