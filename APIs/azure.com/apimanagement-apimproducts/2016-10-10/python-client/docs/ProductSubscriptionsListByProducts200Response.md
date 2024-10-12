# ProductSubscriptionsListByProducts200Response

Paged Subscriptions list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductSubscriptionsListByProducts200ResponseValueInner]**](ProductSubscriptionsListByProducts200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_subscriptions_list_by_products200_response import ProductSubscriptionsListByProducts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSubscriptionsListByProducts200Response from a JSON string
product_subscriptions_list_by_products200_response_instance = ProductSubscriptionsListByProducts200Response.from_json(json)
# print the JSON string representation of the object
print(ProductSubscriptionsListByProducts200Response.to_json())

# convert the object into a dict
product_subscriptions_list_by_products200_response_dict = product_subscriptions_list_by_products200_response_instance.to_dict()
# create an instance of ProductSubscriptionsListByProducts200Response from a dict
product_subscriptions_list_by_products200_response_from_dict = ProductSubscriptionsListByProducts200Response.from_dict(product_subscriptions_list_by_products200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


