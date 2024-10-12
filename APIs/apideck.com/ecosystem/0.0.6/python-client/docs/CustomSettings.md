# CustomSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css** | **str** |  | [optional] 
**css_link** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**html_footer** | **str** |  | [optional] 
**html_nav** | **str** |  | [optional] 
**java_script_link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.custom_settings import CustomSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CustomSettings from a JSON string
custom_settings_instance = CustomSettings.from_json(json)
# print the JSON string representation of the object
print(CustomSettings.to_json())

# convert the object into a dict
custom_settings_dict = custom_settings_instance.to_dict()
# create an instance of CustomSettings from a dict
custom_settings_from_dict = CustomSettings.from_dict(custom_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


