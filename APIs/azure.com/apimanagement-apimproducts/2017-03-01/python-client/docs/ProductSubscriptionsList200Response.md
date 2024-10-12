# ProductSubscriptionsList200Response

Paged Subscriptions list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of entities | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductSubscriptionsList200ResponseValueInner]**](ProductSubscriptionsList200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_subscriptions_list200_response import ProductSubscriptionsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSubscriptionsList200Response from a JSON string
product_subscriptions_list200_response_instance = ProductSubscriptionsList200Response.from_json(json)
# print the JSON string representation of the object
print(ProductSubscriptionsList200Response.to_json())

# convert the object into a dict
product_subscriptions_list200_response_dict = product_subscriptions_list200_response_instance.to_dict()
# create an instance of ProductSubscriptionsList200Response from a dict
product_subscriptions_list200_response_from_dict = ProductSubscriptionsList200Response.from_dict(product_subscriptions_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


