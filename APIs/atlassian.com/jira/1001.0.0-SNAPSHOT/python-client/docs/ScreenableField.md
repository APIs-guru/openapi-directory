# ScreenableField

A screen tab field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the screen tab field. | [optional] [readonly] 
**name** | **str** | The name of the screen tab field. Required on create and update. The maximum length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.screenable_field import ScreenableField

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenableField from a JSON string
screenable_field_instance = ScreenableField.from_json(json)
# print the JSON string representation of the object
print(ScreenableField.to_json())

# convert the object into a dict
screenable_field_dict = screenable_field_instance.to_dict()
# create an instance of ScreenableField from a dict
screenable_field_from_dict = ScreenableField.from_dict(screenable_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


