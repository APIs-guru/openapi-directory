# CampaignFlight

Settings that track the planned spend and duration of a campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planned_dates** | [**DateRange**](DateRange.md) |  | [optional] 
**planned_spend_amount_micros** | **str** | The amount the campaign is expected to spend for its given planned_dates. This will not limit serving, but will be used for tracking spend in the DV360 UI. The amount is in micros. Must be greater than or equal to 0. For example, 500000000 represents 500 standard units of the currency. | [optional] 

## Example

```python
from openapi_client.models.campaign_flight import CampaignFlight

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignFlight from a JSON string
campaign_flight_instance = CampaignFlight.from_json(json)
# print the JSON string representation of the object
print(CampaignFlight.to_json())

# convert the object into a dict
campaign_flight_dict = campaign_flight_instance.to_dict()
# create an instance of CampaignFlight from a dict
campaign_flight_from_dict = CampaignFlight.from_dict(campaign_flight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


