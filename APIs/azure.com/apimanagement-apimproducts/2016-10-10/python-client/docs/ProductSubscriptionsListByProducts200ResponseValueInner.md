# ProductSubscriptionsListByProducts200ResponseValueInner

Subscription details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | Subscription creation date. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] [readonly] 
**end_date** | **datetime** | Date when subscription was cancelled or expired. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**expiration_date** | **datetime** | Subscription expiration date. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**id** | **str** | Uniquely identifies the subscription within the current API Management service instance. The value is a valid relative URL in the format of /subscriptions/{sid} where {sid} is a subscription identifier. | [optional] [readonly] 
**name** | **str** | The name of the subscription, or null if the subscription has no name. | [optional] 
**notification_date** | **datetime** | Upcoming subscription expiration notification date. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**primary_key** | **str** | Subscription primary key. | [optional] 
**product_id** | **str** | The product resource identifier of the subscribed product. The value is a valid relative URL in the format of /products/{productId} where {productId} is a product identifier. | [optional] 
**secondary_key** | **str** | Subscription secondary key. | [optional] 
**start_date** | **datetime** | Subscription activation date. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**state** | **str** | Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated. | [optional] 
**state_comment** | **str** | Optional subscription comment added by an administrator. | [optional] 
**user_id** | **str** | The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{uid} where {uid} is a user identifier. | [optional] 

## Example

```python
from openapi_client.models.product_subscriptions_list_by_products200_response_value_inner import ProductSubscriptionsListByProducts200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSubscriptionsListByProducts200ResponseValueInner from a JSON string
product_subscriptions_list_by_products200_response_value_inner_instance = ProductSubscriptionsListByProducts200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ProductSubscriptionsListByProducts200ResponseValueInner.to_json())

# convert the object into a dict
product_subscriptions_list_by_products200_response_value_inner_dict = product_subscriptions_list_by_products200_response_value_inner_instance.to_dict()
# create an instance of ProductSubscriptionsListByProducts200ResponseValueInner from a dict
product_subscriptions_list_by_products200_response_value_inner_from_dict = ProductSubscriptionsListByProducts200ResponseValueInner.from_dict(product_subscriptions_list_by_products200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


