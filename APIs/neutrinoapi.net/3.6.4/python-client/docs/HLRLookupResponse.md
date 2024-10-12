# HLRLookupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The phone number country | 
**country_code** | **str** | The number location as an ISO 2-letter country code | 
**country_code3** | **str** | The number location as an ISO 3-letter country code | 
**currency_code** | **str** | ISO 4217 currency code associated with the country | 
**current_network** | **str** | The currently used network/carrier name | 
**hlr_status** | **str** | The HLR lookup status, possible values are: &lt;br&gt; &lt;ul&gt; &lt;li&gt;ok - the HLR lookup was successful and the device is connected&lt;/li&gt; &lt;li&gt;absent - the number was once registered but the device has been switched off or out of network range for some time&lt;/li&gt; &lt;li&gt;unknown - the number is not known by the mobile network&lt;/li&gt; &lt;li&gt;invalid - the number is not a valid mobile MSISDN number&lt;/li&gt; &lt;li&gt;fixed-line - the number is a registered fixed-line not mobile&lt;/li&gt; &lt;li&gt;voip - the number has been detected as a VOIP line&lt;/li&gt; &lt;li&gt;failed - the HLR lookup has failed, we could not determine the real status of this number&lt;/li&gt; &lt;/ul&gt; | 
**hlr_valid** | **bool** | Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered) | 
**imsi** | **str** | The mobile IMSI number (International Mobile Subscriber Identity) | 
**international_calling_code** | **str** | The international calling code | 
**international_number** | **str** | The number represented in full international format | 
**is_mobile** | **bool** | True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false) | 
**is_ported** | **bool** | Has this number been ported to another network | 
**is_roaming** | **bool** | Is this number currently roaming from its origin country | 
**local_number** | **str** | The number represented in local dialing format | 
**location** | **str** | The number location. Could be a city, region or country depending on the type of number | 
**mcc** | **str** | The mobile MCC number (Mobile Country Code) | 
**mnc** | **str** | The mobile MNC number (Mobile Network Code) | 
**msc** | **str** | The mobile MSC number (Mobile Switching Center) | 
**msin** | **str** | The mobile MSIN number (Mobile Subscription Identification Number) | 
**number_type** | **str** | The number type, possible values are: &lt;br&gt; &lt;ul&gt; &lt;li&gt;mobile&lt;/li&gt; &lt;li&gt;fixed-line&lt;/li&gt; &lt;li&gt;premium-rate&lt;/li&gt; &lt;li&gt;toll-free&lt;/li&gt; &lt;li&gt;voip&lt;/li&gt; &lt;li&gt;unknown&lt;/li&gt; &lt;/ul&gt; | 
**number_valid** | **bool** | True if this a valid phone number | 
**origin_network** | **str** | The origin network/carrier name | 
**ported_network** | **str** | The ported to network/carrier name (only set if the number has been ported) | 
**roaming_country_code** | **str** | If the number is currently roaming, the ISO 2-letter country code of the roaming in country | 

## Example

```python
from openapi_client.models.hlr_lookup_response import HLRLookupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HLRLookupResponse from a JSON string
hlr_lookup_response_instance = HLRLookupResponse.from_json(json)
# print the JSON string representation of the object
print(HLRLookupResponse.to_json())

# convert the object into a dict
hlr_lookup_response_dict = hlr_lookup_response_instance.to_dict()
# create an instance of HLRLookupResponse from a dict
hlr_lookup_response_from_dict = HLRLookupResponse.from_dict(hlr_lookup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


