# MeasurementPartnerCampaignLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_status** | **str** | . | [optional] 
**measurement_partner** | **str** | Measurement partner used for tag wrapping. | [optional] 
**partner_campaign_id** | **str** | Partner campaign ID needed for establishing linking with Measurement partner. | [optional] 

## Example

```python
from openapi_client.models.measurement_partner_campaign_link import MeasurementPartnerCampaignLink

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementPartnerCampaignLink from a JSON string
measurement_partner_campaign_link_instance = MeasurementPartnerCampaignLink.from_json(json)
# print the JSON string representation of the object
print(MeasurementPartnerCampaignLink.to_json())

# convert the object into a dict
measurement_partner_campaign_link_dict = measurement_partner_campaign_link_instance.to_dict()
# create an instance of MeasurementPartnerCampaignLink from a dict
measurement_partner_campaign_link_from_dict = MeasurementPartnerCampaignLink.from_dict(measurement_partner_campaign_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


