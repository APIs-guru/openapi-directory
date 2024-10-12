# AppWhitelistingPutGroupData

The altered data of the recommended VM/server group policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforcement_mode** | [**EnforcementMode**](EnforcementMode.md) |  | [optional] 
**path_recommendations** | [**List[PathRecommendation]**](PathRecommendation.md) |  | [optional] 
**protection_mode** | [**ProtectionMode**](ProtectionMode.md) |  | [optional] 
**vm_recommendations** | [**List[VmRecommendation]**](VmRecommendation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_whitelisting_put_group_data import AppWhitelistingPutGroupData

# TODO update the JSON string below
json = "{}"
# create an instance of AppWhitelistingPutGroupData from a JSON string
app_whitelisting_put_group_data_instance = AppWhitelistingPutGroupData.from_json(json)
# print the JSON string representation of the object
print(AppWhitelistingPutGroupData.to_json())

# convert the object into a dict
app_whitelisting_put_group_data_dict = app_whitelisting_put_group_data_instance.to_dict()
# create an instance of AppWhitelistingPutGroupData from a dict
app_whitelisting_put_group_data_from_dict = AppWhitelistingPutGroupData.from_dict(app_whitelisting_put_group_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


