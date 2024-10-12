# ApiOperationPolicyGet200Response

Policy Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiOperationPolicyListByOperation200ResponseValueInnerProperties**](ApiOperationPolicyListByOperation200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_operation_policy_get200_response import ApiOperationPolicyGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationPolicyGet200Response from a JSON string
api_operation_policy_get200_response_instance = ApiOperationPolicyGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiOperationPolicyGet200Response.to_json())

# convert the object into a dict
api_operation_policy_get200_response_dict = api_operation_policy_get200_response_instance.to_dict()
# create an instance of ApiOperationPolicyGet200Response from a dict
api_operation_policy_get200_response_from_dict = ApiOperationPolicyGet200Response.from_dict(api_operation_policy_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


