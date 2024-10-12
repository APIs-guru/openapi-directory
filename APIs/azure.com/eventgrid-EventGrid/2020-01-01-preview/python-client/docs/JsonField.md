# JsonField

This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_field** | **str** | Name of a field in the input event schema that&#39;s to be used as the source of a mapping. | [optional] 

## Example

```python
from openapi_client.models.json_field import JsonField

# TODO update the JSON string below
json = "{}"
# create an instance of JsonField from a JSON string
json_field_instance = JsonField.from_json(json)
# print the JSON string representation of the object
print(JsonField.to_json())

# convert the object into a dict
json_field_dict = json_field_instance.to_dict()
# create an instance of JsonField from a dict
json_field_from_dict = JsonField.from_dict(json_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


