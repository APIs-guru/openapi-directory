# MeSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**email_verified** | **bool** |  | [optional] 
**notifications** | **str** |  | [optional] 
**timezone** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.me_settings import MeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MeSettings from a JSON string
me_settings_instance = MeSettings.from_json(json)
# print the JSON string representation of the object
print(MeSettings.to_json())

# convert the object into a dict
me_settings_dict = me_settings_instance.to_dict()
# create an instance of MeSettings from a dict
me_settings_from_dict = MeSettings.from_dict(me_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


