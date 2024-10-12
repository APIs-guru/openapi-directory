# AppTemplate

IoT Central Application Template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_template_name** | **str** | The name of the template. | [optional] [readonly] 
**description** | **str** | The description of the template. | [optional] [readonly] 
**manifest_id** | **str** | The ID of the template. | [optional] [readonly] 
**manifest_version** | **str** | The version of the template. | [optional] [readonly] 
**order** | **float** | The order of the template in the templates list. | [optional] [readonly] 
**title** | **str** | The title of the template. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_template import AppTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of AppTemplate from a JSON string
app_template_instance = AppTemplate.from_json(json)
# print the JSON string representation of the object
print(AppTemplate.to_json())

# convert the object into a dict
app_template_dict = app_template_instance.to_dict()
# create an instance of AppTemplate from a dict
app_template_from_dict = AppTemplate.from_dict(app_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


