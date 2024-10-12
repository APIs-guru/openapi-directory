# GoogleAdsHomeservicesLocalservicesV1AggregatorInfo

Conatiner for aggregator specific information if lead is for an aggregator GLS account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregator_provider_id** | **str** | Provider id (listed in aggregator system) which maps to a account id in GLS system. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_aggregator_info import GoogleAdsHomeservicesLocalservicesV1AggregatorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1AggregatorInfo from a JSON string
google_ads_homeservices_localservices_v1_aggregator_info_instance = GoogleAdsHomeservicesLocalservicesV1AggregatorInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1AggregatorInfo.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_aggregator_info_dict = google_ads_homeservices_localservices_v1_aggregator_info_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1AggregatorInfo from a dict
google_ads_homeservices_localservices_v1_aggregator_info_from_dict = GoogleAdsHomeservicesLocalservicesV1AggregatorInfo.from_dict(google_ads_homeservices_localservices_v1_aggregator_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


