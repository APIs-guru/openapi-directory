# ObaIcon

Online Behavioral Advertiser icon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_click_through_url** | **str** | URL to redirect to when an OBA icon is clicked. | [optional] 
**icon_click_tracking_url** | **str** | URL to track click when an OBA icon is clicked. | [optional] 
**icon_view_tracking_url** | **str** | URL to track view when an OBA icon is clicked. | [optional] 
**program** | **str** | Identifies the industry initiative that the icon supports. For example, AdChoices. | [optional] 
**resource_url** | **str** | OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**x_position** | **str** | OBA icon x coordinate position. Accepted values are left or right. | [optional] 
**y_position** | **str** | OBA icon y coordinate position. Accepted values are top or bottom. | [optional] 

## Example

```python
from openapi_client.models.oba_icon import ObaIcon

# TODO update the JSON string below
json = "{}"
# create an instance of ObaIcon from a JSON string
oba_icon_instance = ObaIcon.from_json(json)
# print the JSON string representation of the object
print(ObaIcon.to_json())

# convert the object into a dict
oba_icon_dict = oba_icon_instance.to_dict()
# create an instance of ObaIcon from a dict
oba_icon_from_dict = ObaIcon.from_dict(oba_icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


