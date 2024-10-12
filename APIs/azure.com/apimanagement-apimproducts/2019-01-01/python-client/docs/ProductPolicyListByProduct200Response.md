# ProductPolicyListByProduct200Response

The response of the list policy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductPolicyListByProduct200ResponseValueInner]**](ProductPolicyListByProduct200ResponseValueInner.md) | Policy Contract value. | [optional] 

## Example

```python
from openapi_client.models.product_policy_list_by_product200_response import ProductPolicyListByProduct200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPolicyListByProduct200Response from a JSON string
product_policy_list_by_product200_response_instance = ProductPolicyListByProduct200Response.from_json(json)
# print the JSON string representation of the object
print(ProductPolicyListByProduct200Response.to_json())

# convert the object into a dict
product_policy_list_by_product200_response_dict = product_policy_list_by_product200_response_instance.to_dict()
# create an instance of ProductPolicyListByProduct200Response from a dict
product_policy_list_by_product200_response_from_dict = ProductPolicyListByProduct200Response.from_dict(product_policy_list_by_product200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


