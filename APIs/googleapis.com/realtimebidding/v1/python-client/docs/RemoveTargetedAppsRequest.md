# RemoveTargetedAppsRequest

A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_ids** | **List[str]** | A list of app IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values. | [optional] 

## Example

```python
from openapi_client.models.remove_targeted_apps_request import RemoveTargetedAppsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveTargetedAppsRequest from a JSON string
remove_targeted_apps_request_instance = RemoveTargetedAppsRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveTargetedAppsRequest.to_json())

# convert the object into a dict
remove_targeted_apps_request_dict = remove_targeted_apps_request_instance.to_dict()
# create an instance of RemoveTargetedAppsRequest from a dict
remove_targeted_apps_request_from_dict = RemoveTargetedAppsRequest.from_dict(remove_targeted_apps_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


