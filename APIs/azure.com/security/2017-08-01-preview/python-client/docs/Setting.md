# Setting

Represents a security setting in Azure Security Center.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | the kind of the settings string (DataExportSetting) | 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.setting import Setting

# TODO update the JSON string below
json = "{}"
# create an instance of Setting from a JSON string
setting_instance = Setting.from_json(json)
# print the JSON string representation of the object
print(Setting.to_json())

# convert the object into a dict
setting_dict = setting_instance.to_dict()
# create an instance of Setting from a dict
setting_from_dict = Setting.from_dict(setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


