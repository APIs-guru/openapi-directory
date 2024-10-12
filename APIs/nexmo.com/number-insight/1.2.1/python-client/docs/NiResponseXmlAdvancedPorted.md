# NiResponseXmlAdvancedPorted

If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ported_message** | **str** | If the user has changed carrier for &#x60;number&#x60;. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_advanced_ported import NiResponseXmlAdvancedPorted

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlAdvancedPorted from a JSON string
ni_response_xml_advanced_ported_instance = NiResponseXmlAdvancedPorted.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlAdvancedPorted.to_json())

# convert the object into a dict
ni_response_xml_advanced_ported_dict = ni_response_xml_advanced_ported_instance.to_dict()
# create an instance of NiResponseXmlAdvancedPorted from a dict
ni_response_xml_advanced_ported_from_dict = NiResponseXmlAdvancedPorted.from_dict(ni_response_xml_advanced_ported_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


