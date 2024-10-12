# CreativeAdTechnologyProviders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_provider_ids** | **List[str]** | The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the &#x60;BidRequest.adslot.consented_providers_settings.consented_providers&#x60; field on the  Authorized Buyers Real-Time Bidding protocol or the &#x60;BidRequest.user.ext.consented_providers_settings.consented_providers&#x60; field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the \&quot;Third-party Ad Technology Vendors\&quot; section of Authorized Buyers Program Guidelines. | [optional] 
**has_unidentified_provider** | **bool** | Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the \&quot;Third-party Ad Technology Vendors\&quot; section of Authorized Buyers Program Guidelines. | [optional] 

## Example

```python
from openapi_client.models.creative_ad_technology_providers import CreativeAdTechnologyProviders

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeAdTechnologyProviders from a JSON string
creative_ad_technology_providers_instance = CreativeAdTechnologyProviders.from_json(json)
# print the JSON string representation of the object
print(CreativeAdTechnologyProviders.to_json())

# convert the object into a dict
creative_ad_technology_providers_dict = creative_ad_technology_providers_instance.to_dict()
# create an instance of CreativeAdTechnologyProviders from a dict
creative_ad_technology_providers_from_dict = CreativeAdTechnologyProviders.from_dict(creative_ad_technology_providers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


