# ProductUpdateProperties

Parameters supplied to the Update Product operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Product name. | [optional] 
**approval_required** | **bool** | whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true. | [optional] 
**description** | **str** | Product description. May include HTML formatting tags. | [optional] 
**state** | **str** | whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. | [optional] 
**subscription_required** | **bool** | Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as \&quot;protected\&quot; and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as \&quot;open\&quot; and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it&#39;s value is assumed to be true. | [optional] 
**subscriptions_limit** | **int** | Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true. | [optional] 
**terms** | **str** | Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. | [optional] 

## Example

```python
from openapi_client.models.product_update_properties import ProductUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdateProperties from a JSON string
product_update_properties_instance = ProductUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ProductUpdateProperties.to_json())

# convert the object into a dict
product_update_properties_dict = product_update_properties_instance.to_dict()
# create an instance of ProductUpdateProperties from a dict
product_update_properties_from_dict = ProductUpdateProperties.from_dict(product_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


