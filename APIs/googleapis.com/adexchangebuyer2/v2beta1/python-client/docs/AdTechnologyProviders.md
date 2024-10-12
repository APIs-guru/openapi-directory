# AdTechnologyProviders

Detected ad technology provider information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_provider_ids** | **List[str]** | The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If the creative contains provider IDs that are outside of those listed in the &#x60;BidRequest.adslot.consented_providers_settings.consented_providers&#x60; field on the (Google bid protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto] and the &#x60;BidRequest.user.ext.consented_providers_settings.consented_providers&#x60; field on the (OpenRTB protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto], and a bid is submitted with that creative for an impression that will serve to an EEA user, the bid will be filtered before the auction. | [optional] 
**has_unidentified_provider** | **bool** | Whether the creative contains an unidentified ad technology provider. If true for a given creative, any bid submitted with that creative for an impression that will serve to an EEA user will be filtered before the auction. | [optional] 

## Example

```python
from openapi_client.models.ad_technology_providers import AdTechnologyProviders

# TODO update the JSON string below
json = "{}"
# create an instance of AdTechnologyProviders from a JSON string
ad_technology_providers_instance = AdTechnologyProviders.from_json(json)
# print the JSON string representation of the object
print(AdTechnologyProviders.to_json())

# convert the object into a dict
ad_technology_providers_dict = ad_technology_providers_instance.to_dict()
# create an instance of AdTechnologyProviders from a dict
ad_technology_providers_from_dict = AdTechnologyProviders.from_dict(ad_technology_providers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


