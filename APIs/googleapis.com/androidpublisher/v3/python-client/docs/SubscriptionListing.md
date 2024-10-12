# SubscriptionListing

The consumer-visible metadata of a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | **List[str]** | A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits. | [optional] 
**description** | **str** | The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text. | [optional] 
**language_code** | **str** | Required. The language of this listing, as defined by BCP-47, e.g. \&quot;en-US\&quot;. | [optional] 
**title** | **str** | Required. The title of this subscription in the language of this listing. Plain text. | [optional] 

## Example

```python
from openapi_client.models.subscription_listing import SubscriptionListing

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListing from a JSON string
subscription_listing_instance = SubscriptionListing.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListing.to_json())

# convert the object into a dict
subscription_listing_dict = subscription_listing_instance.to_dict()
# create an instance of SubscriptionListing from a dict
subscription_listing_from_dict = SubscriptionListing.from_dict(subscription_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


