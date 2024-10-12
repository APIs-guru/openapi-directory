# GoogleAdsHomeservicesLocalservicesV1BookingLead

Container for booking lead specific information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_appointment_timestamp** | **str** | Timestamp of when service is provided by advertiser. | [optional] 
**consumer_email** | **str** | Consumer email associated with the booking lead. | [optional] 
**consumer_phone_number** | **str** | Consumer phone number associated with the booking lead. | [optional] 
**customer_name** | **str** | Name of the customer who created the lead. | [optional] 
**job_type** | **str** | The job type of the specified lead. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_booking_lead import GoogleAdsHomeservicesLocalservicesV1BookingLead

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1BookingLead from a JSON string
google_ads_homeservices_localservices_v1_booking_lead_instance = GoogleAdsHomeservicesLocalservicesV1BookingLead.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1BookingLead.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_booking_lead_dict = google_ads_homeservices_localservices_v1_booking_lead_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1BookingLead from a dict
google_ads_homeservices_localservices_v1_booking_lead_from_dict = GoogleAdsHomeservicesLocalservicesV1BookingLead.from_dict(google_ads_homeservices_localservices_v1_booking_lead_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


