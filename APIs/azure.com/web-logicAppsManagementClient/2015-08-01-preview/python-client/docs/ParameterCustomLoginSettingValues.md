# ParameterCustomLoginSettingValues

Custom logging setting values

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
from openapi_client.models.parameter_custom_login_setting_values import ParameterCustomLoginSettingValues

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterCustomLoginSettingValues from a JSON string
parameter_custom_login_setting_values_instance = ParameterCustomLoginSettingValues.from_json(json)
# print the JSON string representation of the object
print(ParameterCustomLoginSettingValues.to_json())

# convert the object into a dict
parameter_custom_login_setting_values_dict = parameter_custom_login_setting_values_instance.to_dict()
# create an instance of ParameterCustomLoginSettingValues from a dict
parameter_custom_login_setting_values_from_dict = ParameterCustomLoginSettingValues.from_dict(parameter_custom_login_setting_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


