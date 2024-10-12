# NiResponseXmlAdvancedError

The error code and status of your request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The status code | [optional] 
**status_text** | **str** | The status description of your request. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_advanced_error import NiResponseXmlAdvancedError

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlAdvancedError from a JSON string
ni_response_xml_advanced_error_instance = NiResponseXmlAdvancedError.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlAdvancedError.to_json())

# convert the object into a dict
ni_response_xml_advanced_error_dict = ni_response_xml_advanced_error_instance.to_dict()
# create an instance of NiResponseXmlAdvancedError from a dict
ni_response_xml_advanced_error_from_dict = NiResponseXmlAdvancedError.from_dict(ni_response_xml_advanced_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


