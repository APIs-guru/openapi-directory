# BINLookupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_number** | **str** | The BIN or IIN number | 
**card_brand** | **str** | The card brand (e.g. Visa or Mastercard) | 
**card_category** | **str** | The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID | 
**card_type** | **str** | The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD | 
**country** | **str** | The full country name of the issuer | 
**country_code** | **str** | The ISO 2-letter country code of the issuer | 
**country_code3** | **str** | The ISO 3-letter country code of the issuer | 
**currency_code** | **str** | ISO 4217 currency code associated with the country of the issuer | 
**ip_blocklisted** | **bool** | True if the customers IP is listed on one of our blocklists, see the &lt;a href&#x3D;\&quot;http://www.neutrinoapi.com/api/ip-blocklist/\&quot;&gt;IP Blocklist API&lt;/a&gt; | 
**ip_blocklists** | **List[str]** | An array of strings indicating which blocklists this IP is listed on | 
**ip_city** | **str** | The city of the customers IP (if detectable) | 
**ip_country** | **str** | The country of the customers IP | 
**ip_country_code** | **str** | The ISO 2-letter country code of the customers IP | 
**ip_country_code3** | **str** | The ISO 3-letter country code of the customers IP | 
**ip_matches_bin** | **bool** | True if the customers IP country matches the BIN country | 
**ip_region** | **str** | The region of the customers IP (if detectable) | 
**is_commercial** | **bool** | Is this a commercial/business use card | 
**is_prepaid** | **bool** | Is this a prepaid or prepaid reloadable card | 
**issuer** | **str** | The card issuer | 
**issuer_phone** | **str** | The card issuers phone number | 
**issuer_website** | **str** | The card issuers website | 
**valid** | **bool** | Is this a valid BIN or IIN number | 

## Example

```python
from openapi_client.models.bin_lookup_response import BINLookupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BINLookupResponse from a JSON string
bin_lookup_response_instance = BINLookupResponse.from_json(json)
# print the JSON string representation of the object
print(BINLookupResponse.to_json())

# convert the object into a dict
bin_lookup_response_dict = bin_lookup_response_instance.to_dict()
# create an instance of BINLookupResponse from a dict
bin_lookup_response_from_dict = BINLookupResponse.from_dict(bin_lookup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


