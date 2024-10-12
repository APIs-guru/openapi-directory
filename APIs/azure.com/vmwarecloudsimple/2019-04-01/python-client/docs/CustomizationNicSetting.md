# CustomizationNicSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter** | [**CustomizationIPSettings**](CustomizationIPSettings.md) |  | [optional] 
**mac_address** | **str** | NIC mac address | [optional] 

## Example

```python
from openapi_client.models.customization_nic_setting import CustomizationNicSetting

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationNicSetting from a JSON string
customization_nic_setting_instance = CustomizationNicSetting.from_json(json)
# print the JSON string representation of the object
print(CustomizationNicSetting.to_json())

# convert the object into a dict
customization_nic_setting_dict = customization_nic_setting_instance.to_dict()
# create an instance of CustomizationNicSetting from a dict
customization_nic_setting_from_dict = CustomizationNicSetting.from_dict(customization_nic_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


