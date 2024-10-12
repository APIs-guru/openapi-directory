# CustomLoginSettingValue

Custom logging setting value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.custom_login_setting_value import CustomLoginSettingValue

# TODO update the JSON string below
json = "{}"
# create an instance of CustomLoginSettingValue from a JSON string
custom_login_setting_value_instance = CustomLoginSettingValue.from_json(json)
# print the JSON string representation of the object
print(CustomLoginSettingValue.to_json())

# convert the object into a dict
custom_login_setting_value_dict = custom_login_setting_value_instance.to_dict()
# create an instance of CustomLoginSettingValue from a dict
custom_login_setting_value_from_dict = CustomLoginSettingValue.from_dict(custom_login_setting_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


