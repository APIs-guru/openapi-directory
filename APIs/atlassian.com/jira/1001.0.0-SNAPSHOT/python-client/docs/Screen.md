# Screen

A screen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the screen. | [optional] [readonly] 
**id** | **int** | The ID of the screen. | [optional] [readonly] 
**name** | **str** | The name of the screen. | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) | The scope of the screen. | [optional] 

## Example

```python
from openapi_client.models.screen import Screen

# TODO update the JSON string below
json = "{}"
# create an instance of Screen from a JSON string
screen_instance = Screen.from_json(json)
# print the JSON string representation of the object
print(Screen.to_json())

# convert the object into a dict
screen_dict = screen_instance.to_dict()
# create an instance of Screen from a dict
screen_from_dict = Screen.from_dict(screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


