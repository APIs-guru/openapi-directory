# ScreenScheme

A screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the screen scheme. | [optional] 
**id** | **int** | The ID of the screen scheme. | [optional] 
**issue_type_screen_schemes** | [**PageBeanIssueTypeScreenScheme**](PageBeanIssueTypeScreenScheme.md) | Details of the issue type screen schemes associated with the screen scheme. | [optional] 
**name** | **str** | The name of the screen scheme. | [optional] 
**screens** | [**ScreenTypes**](ScreenTypes.md) | The IDs of the screens for the screen types of the screen scheme. | [optional] 

## Example

```python
from openapi_client.models.screen_scheme import ScreenScheme

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenScheme from a JSON string
screen_scheme_instance = ScreenScheme.from_json(json)
# print the JSON string representation of the object
print(ScreenScheme.to_json())

# convert the object into a dict
screen_scheme_dict = screen_scheme_instance.to_dict()
# create an instance of ScreenScheme from a dict
screen_scheme_from_dict = ScreenScheme.from_dict(screen_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


