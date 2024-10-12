# PhoneValidateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The phone number country | 
**country_code** | **str** | The phone number country as an ISO 2-letter country code | 
**country_code3** | **str** | The phone number country as an ISO 3-letter country code | 
**currency_code** | **str** | ISO 4217 currency code associated with the country | 
**international_calling_code** | **str** | The international calling code | 
**international_number** | **str** | The number represented in full international format (E.164) | 
**is_mobile** | **bool** | True if this is a mobile number. If the number type is unknown this value will be false | 
**local_number** | **str** | The number represented in local dialing format | 
**location** | **str** | The phone number location. Could be the city, region or country depending on the type of number | 
**prefix_network** | **str** | The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection) | 
**type** | **str** | The number type based on the number prefix. &lt;br&gt;Possible values are: &lt;br&gt; &lt;ul&gt; &lt;li&gt;mobile&lt;/li&gt; &lt;li&gt;fixed-line&lt;/li&gt; &lt;li&gt;premium-rate&lt;/li&gt; &lt;li&gt;toll-free&lt;/li&gt; &lt;li&gt;voip&lt;/li&gt; &lt;li&gt;unknown (use HLR lookup)&lt;/li&gt; &lt;/ul&gt; | 
**valid** | **bool** | Is this a valid phone number | 

## Example

```python
from openapi_client.models.phone_validate_response import PhoneValidateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneValidateResponse from a JSON string
phone_validate_response_instance = PhoneValidateResponse.from_json(json)
# print the JSON string representation of the object
print(PhoneValidateResponse.to_json())

# convert the object into a dict
phone_validate_response_dict = phone_validate_response_instance.to_dict()
# create an instance of PhoneValidateResponse from a dict
phone_validate_response_from_dict = PhoneValidateResponse.from_dict(phone_validate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


