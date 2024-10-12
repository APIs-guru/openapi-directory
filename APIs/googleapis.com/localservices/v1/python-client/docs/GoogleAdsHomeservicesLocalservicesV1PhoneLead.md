# GoogleAdsHomeservicesLocalservicesV1PhoneLead

Container for phone lead specific information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charged_call_timestamp** | **str** | Timestamp of the phone call which resulted in a charged phone lead. | [optional] 
**charged_connected_call_duration_seconds** | **str** | Duration of the charged phone call in seconds. | [optional] 
**consumer_phone_number** | **str** | Consumer phone number associated with the phone lead. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_phone_lead import GoogleAdsHomeservicesLocalservicesV1PhoneLead

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1PhoneLead from a JSON string
google_ads_homeservices_localservices_v1_phone_lead_instance = GoogleAdsHomeservicesLocalservicesV1PhoneLead.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1PhoneLead.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_phone_lead_dict = google_ads_homeservices_localservices_v1_phone_lead_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1PhoneLead from a dict
google_ads_homeservices_localservices_v1_phone_lead_from_dict = GoogleAdsHomeservicesLocalservicesV1PhoneLead.from_dict(google_ads_homeservices_localservices_v1_phone_lead_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


