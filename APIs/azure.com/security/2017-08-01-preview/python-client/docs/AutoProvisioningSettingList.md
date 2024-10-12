# AutoProvisioningSettingList

List of all the auto provisioning settings response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[AutoProvisioningSetting]**](AutoProvisioningSetting.md) | List of all the auto provisioning settings | [optional] 

## Example

```python
from openapi_client.models.auto_provisioning_setting_list import AutoProvisioningSettingList

# TODO update the JSON string below
json = "{}"
# create an instance of AutoProvisioningSettingList from a JSON string
auto_provisioning_setting_list_instance = AutoProvisioningSettingList.from_json(json)
# print the JSON string representation of the object
print(AutoProvisioningSettingList.to_json())

# convert the object into a dict
auto_provisioning_setting_list_dict = auto_provisioning_setting_list_instance.to_dict()
# create an instance of AutoProvisioningSettingList from a dict
auto_provisioning_setting_list_from_dict = AutoProvisioningSettingList.from_dict(auto_provisioning_setting_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


