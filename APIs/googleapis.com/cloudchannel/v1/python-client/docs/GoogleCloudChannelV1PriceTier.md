# GoogleCloudChannelV1PriceTier

Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_resource** | **int** | First resource for which the tier price applies. | [optional] 
**last_resource** | **int** | Last resource for which the tier price applies. | [optional] 
**price** | [**GoogleCloudChannelV1Price**](GoogleCloudChannelV1Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_price_tier import GoogleCloudChannelV1PriceTier

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1PriceTier from a JSON string
google_cloud_channel_v1_price_tier_instance = GoogleCloudChannelV1PriceTier.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1PriceTier.to_json())

# convert the object into a dict
google_cloud_channel_v1_price_tier_dict = google_cloud_channel_v1_price_tier_instance.to_dict()
# create an instance of GoogleCloudChannelV1PriceTier from a dict
google_cloud_channel_v1_price_tier_from_dict = GoogleCloudChannelV1PriceTier.from_dict(google_cloud_channel_v1_price_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


