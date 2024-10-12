# CustomFieldFinder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | More information about the custom field | [optional] 
**finder** | **str** | JSONPath finder for retrieving this value when mapping a response payload from downstream | [optional] [readonly] 
**id** | **str** | Custom Field ID | [optional] [readonly] 
**name** | **str** | Custom Field name to use as a label if provided | [optional] [readonly] 
**value** | **object** | Custom Field value | [optional] 

## Example

```python
from openapi_client.models.custom_field_finder import CustomFieldFinder

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldFinder from a JSON string
custom_field_finder_instance = CustomFieldFinder.from_json(json)
# print the JSON string representation of the object
print(CustomFieldFinder.to_json())

# convert the object into a dict
custom_field_finder_dict = custom_field_finder_instance.to_dict()
# create an instance of CustomFieldFinder from a dict
custom_field_finder_from_dict = CustomFieldFinder.from_dict(custom_field_finder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


