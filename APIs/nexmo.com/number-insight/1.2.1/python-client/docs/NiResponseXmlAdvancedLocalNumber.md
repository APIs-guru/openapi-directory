# NiResponseXmlAdvancedLocalNumber

An object containing the `number` in your request in the format used by the country the number belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Two character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. | [optional] 
**country_code_iso3** | **str** | Three character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. | [optional] 
**country_name** | **str** | The full name of the country that &#x60;number&#x60; is registered in. | [optional] 
**country_prefix** | **str** | The numeric prefix for the country that &#x60;number&#x60; is registered in. | [optional] 
**number** | **str** | The &#x60;number&#x60; in your request in the format used by the country the number belongs to. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_advanced_local_number import NiResponseXmlAdvancedLocalNumber

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlAdvancedLocalNumber from a JSON string
ni_response_xml_advanced_local_number_instance = NiResponseXmlAdvancedLocalNumber.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlAdvancedLocalNumber.to_json())

# convert the object into a dict
ni_response_xml_advanced_local_number_dict = ni_response_xml_advanced_local_number_instance.to_dict()
# create an instance of NiResponseXmlAdvancedLocalNumber from a dict
ni_response_xml_advanced_local_number_from_dict = NiResponseXmlAdvancedLocalNumber.from_dict(ni_response_xml_advanced_local_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


