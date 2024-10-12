# JsonFieldWithDefault

This is used to express the source of an input schema mapping for a single target field  in the Event Grid Event schema. This is currently used in the mappings for the 'subject',  'eventtype' and 'dataversion' properties. This represents a field in the input event schema  along with a default value to be used, and at least one of these two properties should be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | The default value to be used for mapping when a SourceField is not provided or if there&#39;s no property with the specified name in the published JSON event payload. | [optional] 
**source_field** | **str** | Name of a field in the input event schema that&#39;s to be used as the source of a mapping. | [optional] 

## Example

```python
from openapi_client.models.json_field_with_default import JsonFieldWithDefault

# TODO update the JSON string below
json = "{}"
# create an instance of JsonFieldWithDefault from a JSON string
json_field_with_default_instance = JsonFieldWithDefault.from_json(json)
# print the JSON string representation of the object
print(JsonFieldWithDefault.to_json())

# convert the object into a dict
json_field_with_default_dict = json_field_with_default_instance.to_dict()
# create an instance of JsonFieldWithDefault from a dict
json_field_with_default_from_dict = JsonFieldWithDefault.from_dict(json_field_with_default_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


