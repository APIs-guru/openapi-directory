# InputJsonConversionXML


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** | JSON array object | 
**root** | **str** | Name of root node | 

## Example

```python
from openapi_client.models.input_json_conversion_xml import InputJsonConversionXML

# TODO update the JSON string below
json = "{}"
# create an instance of InputJsonConversionXML from a JSON string
input_json_conversion_xml_instance = InputJsonConversionXML.from_json(json)
# print the JSON string representation of the object
print(InputJsonConversionXML.to_json())

# convert the object into a dict
input_json_conversion_xml_dict = input_json_conversion_xml_instance.to_dict()
# create an instance of InputJsonConversionXML from a dict
input_json_conversion_xml_from_dict = InputJsonConversionXML.from_dict(input_json_conversion_xml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


