# GoogleCloudChannelV1PricePhase

Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_period** | **int** | Defines first period for the phase. | [optional] 
**last_period** | **int** | Defines first period for the phase. | [optional] 
**period_type** | **str** | Defines the phase period type. | [optional] 
**price** | [**GoogleCloudChannelV1Price**](GoogleCloudChannelV1Price.md) |  | [optional] 
**price_tiers** | [**List[GoogleCloudChannelV1PriceTier]**](GoogleCloudChannelV1PriceTier.md) | Price by the resource tiers. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_price_phase import GoogleCloudChannelV1PricePhase

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1PricePhase from a JSON string
google_cloud_channel_v1_price_phase_instance = GoogleCloudChannelV1PricePhase.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1PricePhase.to_json())

# convert the object into a dict
google_cloud_channel_v1_price_phase_dict = google_cloud_channel_v1_price_phase_instance.to_dict()
# create an instance of GoogleCloudChannelV1PricePhase from a dict
google_cloud_channel_v1_price_phase_from_dict = GoogleCloudChannelV1PricePhase.from_dict(google_cloud_channel_v1_price_phase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


