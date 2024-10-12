# NiResponseXmlStandard

Standard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_identity** | [**NiResponseXmlStandardCallerIdentity**](NiResponseXmlStandardCallerIdentity.md) |  | [optional] 
**current_carrier** | [**NiCurrentCarrierProperties**](NiCurrentCarrierProperties.md) |  | [optional] 
**error** | [**NiResponseXmlBasicError**](NiResponseXmlBasicError.md) |  | [optional] 
**international_format_number** | **str** | The &#x60;number&#x60; in your request in international format. | [optional] 
**local_number** | [**NiResponseXmlBasicLocalNumber**](NiResponseXmlBasicLocalNumber.md) |  | [optional] 
**original_carrier** | [**NiInitialCarrierProperties**](NiInitialCarrierProperties.md) |  | [optional] 
**ported** | [**NiResponseXmlStandardPorted**](NiResponseXmlStandardPorted.md) |  | [optional] 
**remaining_balance** | **str** | Your account balance in EUR after this request. | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | [optional] 
**request_price** | **str** | If there is an internal lookup error, the &#x60;refund_price&#x60; will reflect the lookup price. If &#x60;cnam&#x60; is requested for a non-US number the &#x60;refund_price&#x60; will reflect the &#x60;cnam&#x60; price. If both of these conditions occur, &#x60;refund_price&#x60; is the sum of the lookup price and &#x60;cnam&#x60; price. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_standard import NiResponseXmlStandard

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlStandard from a JSON string
ni_response_xml_standard_instance = NiResponseXmlStandard.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlStandard.to_json())

# convert the object into a dict
ni_response_xml_standard_dict = ni_response_xml_standard_instance.to_dict()
# create an instance of NiResponseXmlStandard from a dict
ni_response_xml_standard_from_dict = NiResponseXmlStandard.from_dict(ni_response_xml_standard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


