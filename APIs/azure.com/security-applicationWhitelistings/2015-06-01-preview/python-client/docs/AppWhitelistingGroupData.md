# AppWhitelistingGroupData

Represents a VM/server group and set of rules that are Recommended by Azure Security Center to be allowed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_status** | [**ConfigurationStatus**](ConfigurationStatus.md) |  | [optional] 
**enforcement_mode** | [**EnforcementMode**](EnforcementMode.md) |  | [optional] 
**issues** | [**List[AppWhitelistingIssueSummary]**](AppWhitelistingIssueSummary.md) |  | [optional] 
**path_recommendations** | [**List[PathRecommendation]**](PathRecommendation.md) |  | [optional] 
**protection_mode** | [**ProtectionMode**](ProtectionMode.md) |  | [optional] 
**recommendation_status** | [**RecommendationStatus**](RecommendationStatus.md) |  | [optional] 
**source_system** | [**SourceSystem**](SourceSystem.md) |  | [optional] 
**vm_recommendations** | [**List[VmRecommendation]**](VmRecommendation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_whitelisting_group_data import AppWhitelistingGroupData

# TODO update the JSON string below
json = "{}"
# create an instance of AppWhitelistingGroupData from a JSON string
app_whitelisting_group_data_instance = AppWhitelistingGroupData.from_json(json)
# print the JSON string representation of the object
print(AppWhitelistingGroupData.to_json())

# convert the object into a dict
app_whitelisting_group_data_dict = app_whitelisting_group_data_instance.to_dict()
# create an instance of AppWhitelistingGroupData from a dict
app_whitelisting_group_data_from_dict = AppWhitelistingGroupData.from_dict(app_whitelisting_group_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


