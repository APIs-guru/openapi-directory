# ProductPolicyListByProduct200ResponseValueInner

Policy contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Policy identifier. | [optional] 
**policy_content** | **str** | Json escaped Xml Encoded contents of the Policy. | 

## Example

```python
from openapi_client.models.product_policy_list_by_product200_response_value_inner import ProductPolicyListByProduct200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPolicyListByProduct200ResponseValueInner from a JSON string
product_policy_list_by_product200_response_value_inner_instance = ProductPolicyListByProduct200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ProductPolicyListByProduct200ResponseValueInner.to_json())

# convert the object into a dict
product_policy_list_by_product200_response_value_inner_dict = product_policy_list_by_product200_response_value_inner_instance.to_dict()
# create an instance of ProductPolicyListByProduct200ResponseValueInner from a dict
product_policy_list_by_product200_response_value_inner_from_dict = ProductPolicyListByProduct200ResponseValueInner.from_dict(product_policy_list_by_product200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


