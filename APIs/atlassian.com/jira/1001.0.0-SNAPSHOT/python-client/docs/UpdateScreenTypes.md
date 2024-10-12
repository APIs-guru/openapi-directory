# UpdateScreenTypes

The IDs of the screens for the screen types of the screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create** | **str** | The ID of the create screen. To remove the screen association, pass a null. | [optional] 
**default** | **str** | The ID of the default screen. When specified, must include a screen ID as a default screen is required. | [optional] 
**edit** | **str** | The ID of the edit screen. To remove the screen association, pass a null. | [optional] 
**view** | **str** | The ID of the view screen. To remove the screen association, pass a null. | [optional] 

## Example

```python
from openapi_client.models.update_screen_types import UpdateScreenTypes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateScreenTypes from a JSON string
update_screen_types_instance = UpdateScreenTypes.from_json(json)
# print the JSON string representation of the object
print(UpdateScreenTypes.to_json())

# convert the object into a dict
update_screen_types_dict = update_screen_types_instance.to_dict()
# create an instance of UpdateScreenTypes from a dict
update_screen_types_from_dict = UpdateScreenTypes.from_dict(update_screen_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


