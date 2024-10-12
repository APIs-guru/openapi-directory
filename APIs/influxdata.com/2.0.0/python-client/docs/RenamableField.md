# RenamableField

Describes a field that can be renamed and made visible or invisible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name that a field is renamed to by the user. | [optional] 
**internal_name** | **str** | The calculated name of a field. | [optional] [readonly] 
**visible** | **bool** | Indicates whether this field should be visible on the table. | [optional] 

## Example

```python
from openapi_client.models.renamable_field import RenamableField

# TODO update the JSON string below
json = "{}"
# create an instance of RenamableField from a JSON string
renamable_field_instance = RenamableField.from_json(json)
# print the JSON string representation of the object
print(RenamableField.to_json())

# convert the object into a dict
renamable_field_dict = renamable_field_instance.to_dict()
# create an instance of RenamableField from a dict
renamable_field_from_dict = RenamableField.from_dict(renamable_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


