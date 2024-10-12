# Display

Device display information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**density** | **int** | Display density expressed as dots-per-inch. | [optional] 
**display_id** | **int** | Unique display id. | [optional] 
**height** | **int** | Display height in pixels. | [optional] 
**name** | **str** | Name of the display. | [optional] 
**refresh_rate** | **int** | Refresh rate of the display in frames per second. | [optional] 
**state** | **str** | State of the display. | [optional] 
**width** | **int** | Display width in pixels. | [optional] 

## Example

```python
from openapi_client.models.display import Display

# TODO update the JSON string below
json = "{}"
# create an instance of Display from a JSON string
display_instance = Display.from_json(json)
# print the JSON string representation of the object
print(Display.to_json())

# convert the object into a dict
display_dict = display_instance.to_dict()
# create an instance of Display from a dict
display_from_dict = Display.from_dict(display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


