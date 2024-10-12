# JsonSchemaAnnotations

Additional information about this property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **List[str]** | A list of methods for which this property is required on requests. | [optional] 

## Example

```python
from openapi_client.models.json_schema_annotations import JsonSchemaAnnotations

# TODO update the JSON string below
json = "{}"
# create an instance of JsonSchemaAnnotations from a JSON string
json_schema_annotations_instance = JsonSchemaAnnotations.from_json(json)
# print the JSON string representation of the object
print(JsonSchemaAnnotations.to_json())

# convert the object into a dict
json_schema_annotations_dict = json_schema_annotations_instance.to_dict()
# create an instance of JsonSchemaAnnotations from a dict
json_schema_annotations_from_dict = JsonSchemaAnnotations.from_dict(json_schema_annotations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


