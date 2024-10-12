# OtherRegionsSubscriptionOfferConfig

Configuration for any new locations Play may launch in specified on a subscription offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**other_regions_new_subscriber_availability** | **bool** | Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false. | [optional] 

## Example

```python
from openapi_client.models.other_regions_subscription_offer_config import OtherRegionsSubscriptionOfferConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OtherRegionsSubscriptionOfferConfig from a JSON string
other_regions_subscription_offer_config_instance = OtherRegionsSubscriptionOfferConfig.from_json(json)
# print the JSON string representation of the object
print(OtherRegionsSubscriptionOfferConfig.to_json())

# convert the object into a dict
other_regions_subscription_offer_config_dict = other_regions_subscription_offer_config_instance.to_dict()
# create an instance of OtherRegionsSubscriptionOfferConfig from a dict
other_regions_subscription_offer_config_from_dict = OtherRegionsSubscriptionOfferConfig.from_dict(other_regions_subscription_offer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


