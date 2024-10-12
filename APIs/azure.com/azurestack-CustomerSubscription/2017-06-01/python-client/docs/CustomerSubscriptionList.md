# CustomerSubscriptionList

Pageable list of customer subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[CustomerSubscription]**](CustomerSubscription.md) | List of customer subscriptions. | [optional] 

## Example

```python
from openapi_client.models.customer_subscription_list import CustomerSubscriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSubscriptionList from a JSON string
customer_subscription_list_instance = CustomerSubscriptionList.from_json(json)
# print the JSON string representation of the object
print(CustomerSubscriptionList.to_json())

# convert the object into a dict
customer_subscription_list_dict = customer_subscription_list_instance.to_dict()
# create an instance of CustomerSubscriptionList from a dict
customer_subscription_list_from_dict = CustomerSubscriptionList.from_dict(customer_subscription_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


