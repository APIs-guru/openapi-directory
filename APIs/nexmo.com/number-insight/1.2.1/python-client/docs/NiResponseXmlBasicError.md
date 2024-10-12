# NiResponseXmlBasicError

The error code and status of your request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The status code | [optional] 
**status_text** | **str** | The status description of your request. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_basic_error import NiResponseXmlBasicError

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlBasicError from a JSON string
ni_response_xml_basic_error_instance = NiResponseXmlBasicError.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlBasicError.to_json())

# convert the object into a dict
ni_response_xml_basic_error_dict = ni_response_xml_basic_error_instance.to_dict()
# create an instance of NiResponseXmlBasicError from a dict
ni_response_xml_basic_error_from_dict = NiResponseXmlBasicError.from_dict(ni_response_xml_basic_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


