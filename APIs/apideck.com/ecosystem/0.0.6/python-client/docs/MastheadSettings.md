# MastheadSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background** | **str** |  | [optional] 
**background_color** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**columns** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.masthead_settings import MastheadSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MastheadSettings from a JSON string
masthead_settings_instance = MastheadSettings.from_json(json)
# print the JSON string representation of the object
print(MastheadSettings.to_json())

# convert the object into a dict
masthead_settings_dict = masthead_settings_instance.to_dict()
# create an instance of MastheadSettings from a dict
masthead_settings_from_dict = MastheadSettings.from_dict(masthead_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


