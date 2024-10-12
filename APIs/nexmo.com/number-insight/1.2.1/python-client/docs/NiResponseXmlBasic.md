# NiResponseXmlBasic

Basic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**NiResponseXmlBasicError**](NiResponseXmlBasicError.md) |  | [optional] 
**international_format_number** | **str** | The &#x60;number&#x60; in your request in international format. | [optional] 
**local_number** | [**NiResponseXmlBasicLocalNumber**](NiResponseXmlBasicLocalNumber.md) |  | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_basic import NiResponseXmlBasic

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlBasic from a JSON string
ni_response_xml_basic_instance = NiResponseXmlBasic.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlBasic.to_json())

# convert the object into a dict
ni_response_xml_basic_dict = ni_response_xml_basic_instance.to_dict()
# create an instance of NiResponseXmlBasic from a dict
ni_response_xml_basic_from_dict = NiResponseXmlBasic.from_dict(ni_response_xml_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


