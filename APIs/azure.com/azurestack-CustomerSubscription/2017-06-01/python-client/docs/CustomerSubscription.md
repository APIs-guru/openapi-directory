# CustomerSubscription

Customer subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CustomerSubscriptionProperties**](CustomerSubscriptionProperties.md) |  | [optional] 
**etag** | **str** | The entity tag used for optimistic concurrency when modifying the resource. | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.customer_subscription import CustomerSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSubscription from a JSON string
customer_subscription_instance = CustomerSubscription.from_json(json)
# print the JSON string representation of the object
print(CustomerSubscription.to_json())

# convert the object into a dict
customer_subscription_dict = customer_subscription_instance.to_dict()
# create an instance of CustomerSubscription from a dict
customer_subscription_from_dict = CustomerSubscription.from_dict(customer_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


