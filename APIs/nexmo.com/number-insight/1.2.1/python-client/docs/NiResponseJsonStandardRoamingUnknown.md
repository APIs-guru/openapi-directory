# NiResponseJsonStandardRoamingUnknown

Unknown Roaming

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Two character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. | [optional] 
**country_code_iso3** | **str** | Three character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. | [optional] 
**country_name** | **str** | The full name of the country that &#x60;number&#x60; is registered in. | [optional] 
**country_prefix** | **str** | The numeric prefix for the country that &#x60;number&#x60; is registered in. | [optional] 
**international_format_number** | **str** | The &#x60;number&#x60; in your request in international format. | [optional] 
**national_format_number** | **str** | The &#x60;number&#x60; in your request in the format used by the country the number belongs to. | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | [optional] 
**status** | [**NiBasicStatus**](NiBasicStatus.md) |  | [optional] 
**status_message** | **str** | The status description of your request. | [optional] 
**caller_identity** | [**NiCallerIdentity**](NiCallerIdentity.md) |  | [optional] 
**caller_name** | **str** | Full name of the person or business who owns the phone number. &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**caller_type** | **str** | The value will be &#x60;business&#x60; if the owner of a phone number is a business. If the owner is an individual the value will be &#x60;consumer&#x60;. The value will be &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**current_carrier** | [**NiCurrentCarrierProperties**](NiCurrentCarrierProperties.md) |  | [optional] 
**first_name** | **str** | First name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**last_name** | **str** | Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**original_carrier** | [**NiInitialCarrierProperties**](NiInitialCarrierProperties.md) |  | [optional] 
**ported** | **str** | If the user has changed carrier for &#x60;number&#x60;. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported. | [optional] 
**refund_price** | **str** | If there is an internal lookup error, the &#x60;refund_price&#x60; will reflect the lookup price. If &#x60;cnam&#x60; is requested for a non-US number the &#x60;refund_price&#x60; will reflect the &#x60;cnam&#x60; price. If both of these conditions occur, &#x60;refund_price&#x60; is the sum of the lookup price and &#x60;cnam&#x60; price. | [optional] 
**remaining_balance** | **str** | Your account balance in EUR after this request. | [optional] 
**request_price** | **str** | The amount in EUR charged to your account. | [optional] 

## Example

```python
from openapi_client.models.ni_response_json_standard_roaming_unknown import NiResponseJsonStandardRoamingUnknown

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseJsonStandardRoamingUnknown from a JSON string
ni_response_json_standard_roaming_unknown_instance = NiResponseJsonStandardRoamingUnknown.from_json(json)
# print the JSON string representation of the object
print(NiResponseJsonStandardRoamingUnknown.to_json())

# convert the object into a dict
ni_response_json_standard_roaming_unknown_dict = ni_response_json_standard_roaming_unknown_instance.to_dict()
# create an instance of NiResponseJsonStandardRoamingUnknown from a dict
ni_response_json_standard_roaming_unknown_from_dict = NiResponseJsonStandardRoamingUnknown.from_dict(ni_response_json_standard_roaming_unknown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


