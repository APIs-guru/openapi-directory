# GoogleAdsHomeservicesLocalservicesV1MessageLead

Container for message lead specific information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_phone_number** | **str** | Consumer phone number associated with the message lead. | [optional] 
**customer_name** | **str** | Name of the customer who created the lead. | [optional] 
**job_type** | **str** | The job type of the specified lead. | [optional] 
**postal_code** | **str** | The postal code of the customer who created the lead. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_message_lead import GoogleAdsHomeservicesLocalservicesV1MessageLead

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1MessageLead from a JSON string
google_ads_homeservices_localservices_v1_message_lead_instance = GoogleAdsHomeservicesLocalservicesV1MessageLead.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1MessageLead.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_message_lead_dict = google_ads_homeservices_localservices_v1_message_lead_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1MessageLead from a dict
google_ads_homeservices_localservices_v1_message_lead_from_dict = GoogleAdsHomeservicesLocalservicesV1MessageLead.from_dict(google_ads_homeservices_localservices_v1_message_lead_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


