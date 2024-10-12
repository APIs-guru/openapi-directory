# AdTechnologyProviders

The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_gvl_ids** | **List[str]** | The detected IAB Global Vendor List (GVL) IDs for this creative. See the IAB Global Vendor List at https://vendor-list.consensu.org/v2/vendor-list.json for details about the vendors. | [optional] 
**detected_provider_ids** | **List[str]** | The detected [Google Ad Tech Providers (ATP)](https://support.google.com/admanager/answer/9012903) for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. | [optional] 
**unidentified_provider_domains** | **List[str]** | Domains of detected unidentified ad technology providers (if any). You must ensure that the creatives used in bids placed for inventory that will serve to EEA or UK users does not contain unidentified ad technology providers. Google reserves the right to filter non-compliant bids. | [optional] 

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


