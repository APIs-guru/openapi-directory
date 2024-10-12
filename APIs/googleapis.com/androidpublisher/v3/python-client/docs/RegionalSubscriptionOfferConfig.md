# RegionalSubscriptionOfferConfig

Configuration for a subscription offer in a single region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_subscriber_availability** | **bool** | Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false. | [optional] 
**region_code** | **str** | Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. \&quot;US\&quot;. | [optional] 

## Example

```python
from openapi_client.models.regional_subscription_offer_config import RegionalSubscriptionOfferConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalSubscriptionOfferConfig from a JSON string
regional_subscription_offer_config_instance = RegionalSubscriptionOfferConfig.from_json(json)
# print the JSON string representation of the object
print(RegionalSubscriptionOfferConfig.to_json())

# convert the object into a dict
regional_subscription_offer_config_dict = regional_subscription_offer_config_instance.to_dict()
# create an instance of RegionalSubscriptionOfferConfig from a dict
regional_subscription_offer_config_from_dict = RegionalSubscriptionOfferConfig.from_dict(regional_subscription_offer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


