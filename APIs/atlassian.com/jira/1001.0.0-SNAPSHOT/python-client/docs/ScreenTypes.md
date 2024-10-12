# ScreenTypes

The IDs of the screens for the screen types of the screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create** | **int** | The ID of the create screen. | [optional] 
**default** | **int** | The ID of the default screen. Required when creating a screen scheme. | [optional] 
**edit** | **int** | The ID of the edit screen. | [optional] 
**view** | **int** | The ID of the view screen. | [optional] 

## Example

```python
from openapi_client.models.screen_types import ScreenTypes

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenTypes from a JSON string
screen_types_instance = ScreenTypes.from_json(json)
# print the JSON string representation of the object
print(ScreenTypes.to_json())

# convert the object into a dict
screen_types_dict = screen_types_instance.to_dict()
# create an instance of ScreenTypes from a dict
screen_types_from_dict = ScreenTypes.from_dict(screen_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


