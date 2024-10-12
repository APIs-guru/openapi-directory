# ProductSet

A set of products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **List[str]** | The list of product IDs making up the set of products. | [optional] 
**product_set_behavior** | **str** | The interpretation of this product set. \&quot;unknown\&quot; should never be sent and is ignored if received. \&quot;whitelist\&quot; means that the user is entitled to access the product set. \&quot;includeAll\&quot; means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. \&quot;allApproved\&quot; means that the user is entitled to access all products that are approved for the enterprise. If the value is \&quot;allApproved\&quot; or \&quot;includeAll\&quot;, the productId field is ignored. If no value is provided, it is interpreted as \&quot;whitelist\&quot; for backwards compatibility. Further \&quot;allApproved\&quot; or \&quot;includeAll\&quot; does not enable automatic visibility of \&quot;alpha\&quot; or \&quot;beta\&quot; tracks for Android app. Use ProductVisibility to enable \&quot;alpha\&quot; or \&quot;beta\&quot; tracks per user. | [optional] 
**product_visibility** | [**List[ProductVisibility]**](ProductVisibility.md) | Additional list of product IDs making up the product set. Unlike the productID array, in this list It&#39;s possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error. | [optional] 

## Example

```python
from openapi_client.models.product_set import ProductSet

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSet from a JSON string
product_set_instance = ProductSet.from_json(json)
# print the JSON string representation of the object
print(ProductSet.to_json())

# convert the object into a dict
product_set_dict = product_set_instance.to_dict()
# create an instance of ProductSet from a dict
product_set_from_dict = ProductSet.from_dict(product_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


