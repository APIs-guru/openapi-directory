# SchematizedData

The content of an HL7v2 message in a structured format as specified by a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | JSON output of the parser. | [optional] 
**error** | **str** | The error output of the parser. | [optional] 

## Example

```python
from openapi_client.models.schematized_data import SchematizedData

# TODO update the JSON string below
json = "{}"
# create an instance of SchematizedData from a JSON string
schematized_data_instance = SchematizedData.from_json(json)
# print the JSON string representation of the object
print(SchematizedData.to_json())

# convert the object into a dict
schematized_data_dict = schematized_data_instance.to_dict()
# create an instance of SchematizedData from a dict
schematized_data_from_dict = SchematizedData.from_dict(schematized_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


