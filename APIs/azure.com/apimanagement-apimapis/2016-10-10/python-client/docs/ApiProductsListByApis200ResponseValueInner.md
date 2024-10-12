# ApiProductsListByApis200ResponseValueInner

Product profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true. | [optional] 
**description** | **str** | Product description. May include HTML formatting tags. | [optional] 
**id** | **str** | Uniquely identifies the product within the current API Management service instance. The value is a valid relative URL in the format of /products/{productId} where {productId} is a product identifier. | [optional] [readonly] 
**name** | **str** | Product name. | 
**state** | **str** | whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is NotPublished. | [optional] [default to 'NotPublished']
**subscription_required** | **bool** | Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as \&quot;protected\&quot; and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as \&quot;open\&quot; and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it&#39;s value is assumed to be true. | [optional] [default to True]
**subscriptions_limit** | **int** | Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true. | [optional] 
**terms** | **str** | Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. | [optional] 

## Example

```python
from openapi_client.models.api_products_list_by_apis200_response_value_inner import ApiProductsListByApis200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiProductsListByApis200ResponseValueInner from a JSON string
api_products_list_by_apis200_response_value_inner_instance = ApiProductsListByApis200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ApiProductsListByApis200ResponseValueInner.to_json())

# convert the object into a dict
api_products_list_by_apis200_response_value_inner_dict = api_products_list_by_apis200_response_value_inner_instance.to_dict()
# create an instance of ApiProductsListByApis200ResponseValueInner from a dict
api_products_list_by_apis200_response_value_inner_from_dict = ApiProductsListByApis200ResponseValueInner.from_dict(api_products_list_by_apis200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


