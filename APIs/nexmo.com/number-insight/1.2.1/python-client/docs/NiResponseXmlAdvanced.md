# NiResponseXmlAdvanced

Advanced

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_identity** | [**NiResponseXmlAdvancedCallerIdentity**](NiResponseXmlAdvancedCallerIdentity.md) |  | [optional] 
**caller_name** | **str** | Full name of the person or business who owns the phone number. &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**caller_type** | **str** | The value will be &#x60;business&#x60; if the owner of a phone number is a business. If the owner is an individual the value will be &#x60;consumer&#x60;. The value will be &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**current_carrier** | [**NiCurrentCarrierProperties**](NiCurrentCarrierProperties.md) |  | [optional] 
**error** | [**NiResponseXmlAdvancedError**](NiResponseXmlAdvancedError.md) |  | [optional] 
**firs_name** | **str** | First name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**international_format_number** | **str** | The &#x60;number&#x60; in your request in international format. | [optional] 
**ip_warnings** | **str** | This property is deprecated and can safely be ignored. | [optional] 
**last_name** | **str** | Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**local_number** | [**NiResponseXmlAdvancedLocalNumber**](NiResponseXmlAdvancedLocalNumber.md) |  | [optional] 
**lookup_outcome** | [**NiResponseXmlAdvancedLookupOutcome**](NiResponseXmlAdvancedLookupOutcome.md) |  | [optional] 
**original_carrier** | [**NiInitialCarrierProperties**](NiInitialCarrierProperties.md) |  | [optional] 
**ported** | [**NiResponseXmlAdvancedPorted**](NiResponseXmlAdvancedPorted.md) |  | [optional] 
**reachable** | **str** | Can you call &#x60;number&#x60; now. This is applicable to mobile numbers only. | [optional] 
**remaining_balance** | **str** | Your account balance in EUR after this request. | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | [optional] 
**request_price** | **str** | If there is an internal lookup error, the &#x60;refund_price&#x60; will reflect the lookup price. If &#x60;cnam&#x60; is requested for a non-US number the &#x60;refund_price&#x60; will reflect the &#x60;cnam&#x60; price. If both of these conditions occur, &#x60;refund_price&#x60; is the sum of the lookup price and &#x60;cnam&#x60; price. | [optional] 
**roaming** | [**NiRoaming**](NiRoaming.md) |  | [optional] 
**valid_number** | **str** | Does &#x60;number&#x60; exist. &#x60;unknown&#x60; means the number could not be validated. &#x60;valid&#x60; means the number is valid. &#x60;not_valid&#x60; means the number is not valid. &#x60;inferred_not_valid&#x60; means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_advanced import NiResponseXmlAdvanced

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlAdvanced from a JSON string
ni_response_xml_advanced_instance = NiResponseXmlAdvanced.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlAdvanced.to_json())

# convert the object into a dict
ni_response_xml_advanced_dict = ni_response_xml_advanced_instance.to_dict()
# create an instance of NiResponseXmlAdvanced from a dict
ni_response_xml_advanced_from_dict = NiResponseXmlAdvanced.from_dict(ni_response_xml_advanced_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


