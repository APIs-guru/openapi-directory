# AppProperties

The properties of an IoT Central application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The ID of the application. | [optional] [readonly] 
**display_name** | **str** | The display name of the application. | [optional] 
**subdomain** | **str** | The subdomain of the application. | [optional] 
**template** | **str** | The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. | [optional] 

## Example

```python
from openapi_client.models.app_properties import AppProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppProperties from a JSON string
app_properties_instance = AppProperties.from_json(json)
# print the JSON string representation of the object
print(AppProperties.to_json())

# convert the object into a dict
app_properties_dict = app_properties_instance.to_dict()
# create an instance of AppProperties from a dict
app_properties_from_dict = AppProperties.from_dict(app_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


