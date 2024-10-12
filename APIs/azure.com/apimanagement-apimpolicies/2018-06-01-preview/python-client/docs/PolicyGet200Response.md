# PolicyGet200Response

Policy Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PolicyListByService200ResponseValueInnerProperties**](PolicyListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_get200_response import PolicyGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyGet200Response from a JSON string
policy_get200_response_instance = PolicyGet200Response.from_json(json)
# print the JSON string representation of the object
print(PolicyGet200Response.to_json())

# convert the object into a dict
policy_get200_response_dict = policy_get200_response_instance.to_dict()
# create an instance of PolicyGet200Response from a dict
policy_get200_response_from_dict = PolicyGet200Response.from_dict(policy_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


