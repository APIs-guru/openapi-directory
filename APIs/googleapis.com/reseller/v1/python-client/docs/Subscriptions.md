# Subscriptions

A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions | [optional] [default to 'reseller#subscriptions']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**subscriptions** | [**List[Subscription]**](Subscription.md) | The subscriptions in this page of results. | [optional] 

## Example

```python
from openapi_client.models.subscriptions import Subscriptions

# TODO update the JSON string below
json = "{}"
# create an instance of Subscriptions from a JSON string
subscriptions_instance = Subscriptions.from_json(json)
# print the JSON string representation of the object
print(Subscriptions.to_json())

# convert the object into a dict
subscriptions_dict = subscriptions_instance.to_dict()
# create an instance of Subscriptions from a dict
subscriptions_from_dict = Subscriptions.from_dict(subscriptions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


