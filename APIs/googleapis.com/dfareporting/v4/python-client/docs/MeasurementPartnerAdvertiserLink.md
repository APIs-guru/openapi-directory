# MeasurementPartnerAdvertiserLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_status** | **str** | Status of the partner link. | [optional] 
**measurement_partner** | **str** | Measurement partner used for tag wrapping. | [optional] 
**partner_advertiser_id** | **str** | partner Advertiser Id. | [optional] 

## Example

```python
from openapi_client.models.measurement_partner_advertiser_link import MeasurementPartnerAdvertiserLink

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementPartnerAdvertiserLink from a JSON string
measurement_partner_advertiser_link_instance = MeasurementPartnerAdvertiserLink.from_json(json)
# print the JSON string representation of the object
print(MeasurementPartnerAdvertiserLink.to_json())

# convert the object into a dict
measurement_partner_advertiser_link_dict = measurement_partner_advertiser_link_instance.to_dict()
# create an instance of MeasurementPartnerAdvertiserLink from a dict
measurement_partner_advertiser_link_from_dict = MeasurementPartnerAdvertiserLink.from_dict(measurement_partner_advertiser_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


