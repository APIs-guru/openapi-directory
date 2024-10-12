# InputCollectionConversionXML


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child** | **str** | Name of child XML node(s) | 
**input** | **List[str]** | Collection containing strings to convert | 
**root** | **str** | Name of root XML node | 

## Example

```python
from openapi_client.models.input_collection_conversion_xml import InputCollectionConversionXML

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionConversionXML from a JSON string
input_collection_conversion_xml_instance = InputCollectionConversionXML.from_json(json)
# print the JSON string representation of the object
print(InputCollectionConversionXML.to_json())

# convert the object into a dict
input_collection_conversion_xml_dict = input_collection_conversion_xml_instance.to_dict()
# create an instance of InputCollectionConversionXML from a dict
input_collection_conversion_xml_from_dict = InputCollectionConversionXML.from_dict(input_collection_conversion_xml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


