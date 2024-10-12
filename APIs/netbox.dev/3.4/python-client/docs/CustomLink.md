# CustomLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**button_class** | **str** | The class of the first link in a group will be used for the dropdown button | [optional] 
**content_types** | **List[str]** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**group_name** | **str** | Links with the same group will appear as a dropdown menu | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_text** | **str** | Jinja2 template code for link text | 
**link_url** | **str** | Jinja2 template code for link URL | 
**name** | **str** |  | 
**new_window** | **bool** | Force link to open in a new window | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.custom_link import CustomLink

# TODO update the JSON string below
json = "{}"
# create an instance of CustomLink from a JSON string
custom_link_instance = CustomLink.from_json(json)
# print the JSON string representation of the object
print(CustomLink.to_json())

# convert the object into a dict
custom_link_dict = custom_link_instance.to_dict()
# create an instance of CustomLink from a dict
custom_link_from_dict = CustomLink.from_dict(custom_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


