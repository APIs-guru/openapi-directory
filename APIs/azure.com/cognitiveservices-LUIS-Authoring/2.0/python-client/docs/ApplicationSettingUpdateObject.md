# ApplicationSettingUpdateObject

Object model for updating an application's settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public** | **bool** | Setting your application as public allows other people to use your application&#39;s endpoint using their own keys. | [optional] 

## Example

```python
from openapi_client.models.application_setting_update_object import ApplicationSettingUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSettingUpdateObject from a JSON string
application_setting_update_object_instance = ApplicationSettingUpdateObject.from_json(json)
# print the JSON string representation of the object
print(ApplicationSettingUpdateObject.to_json())

# convert the object into a dict
application_setting_update_object_dict = application_setting_update_object_instance.to_dict()
# create an instance of ApplicationSettingUpdateObject from a dict
application_setting_update_object_from_dict = ApplicationSettingUpdateObject.from_dict(application_setting_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


