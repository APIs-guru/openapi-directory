# NiResponseXmlStandardPorted

If the user has changed carrier for number. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ported_message** | **str** | If the user has changed carrier for &#x60;number&#x60;. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_standard_ported import NiResponseXmlStandardPorted

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlStandardPorted from a JSON string
ni_response_xml_standard_ported_instance = NiResponseXmlStandardPorted.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlStandardPorted.to_json())

# convert the object into a dict
ni_response_xml_standard_ported_dict = ni_response_xml_standard_ported_instance.to_dict()
# create an instance of NiResponseXmlStandardPorted from a dict
ni_response_xml_standard_ported_from_dict = NiResponseXmlStandardPorted.from_dict(ni_response_xml_standard_ported_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


