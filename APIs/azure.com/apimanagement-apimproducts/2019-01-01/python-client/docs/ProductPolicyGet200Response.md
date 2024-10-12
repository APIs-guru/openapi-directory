# ProductPolicyGet200Response

Policy Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductPolicyListByProduct200ResponseValueInnerProperties**](ProductPolicyListByProduct200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_policy_get200_response import ProductPolicyGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPolicyGet200Response from a JSON string
product_policy_get200_response_instance = ProductPolicyGet200Response.from_json(json)
# print the JSON string representation of the object
print(ProductPolicyGet200Response.to_json())

# convert the object into a dict
product_policy_get200_response_dict = product_policy_get200_response_instance.to_dict()
# create an instance of ProductPolicyGet200Response from a dict
product_policy_get200_response_from_dict = ProductPolicyGet200Response.from_dict(product_policy_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


