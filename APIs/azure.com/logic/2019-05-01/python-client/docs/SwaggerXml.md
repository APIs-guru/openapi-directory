# SwaggerXml

The Swagger XML.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **bool** | Indicates whether the property should be an attribute instead of an element. | [optional] 
**extensions** | **Dict[str, object]** | The vendor extensions. | [optional] 
**name** | **str** | The xml element or attribute name. | [optional] 
**namespace** | **str** | The xml namespace. | [optional] 
**prefix** | **str** | The name prefix. | [optional] 
**wrapped** | **bool** | Indicates whether the array elements are wrapped in a container element. | [optional] 

## Example

```python
from openapi_client.models.swagger_xml import SwaggerXml

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerXml from a JSON string
swagger_xml_instance = SwaggerXml.from_json(json)
# print the JSON string representation of the object
print(SwaggerXml.to_json())

# convert the object into a dict
swagger_xml_dict = swagger_xml_instance.to_dict()
# create an instance of SwaggerXml from a dict
swagger_xml_from_dict = SwaggerXml.from_dict(swagger_xml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


