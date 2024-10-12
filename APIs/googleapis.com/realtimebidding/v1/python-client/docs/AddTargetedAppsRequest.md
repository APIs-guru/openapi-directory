# AddTargetedAppsRequest

A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_ids** | **List[str]** | A list of app IDs to target in the pretargeting configuration. These values will be added to the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values. | [optional] 
**targeting_mode** | **str** | Required. The targeting mode that should be applied to the list of app IDs. If there are existing targeted app IDs, must be equal to the existing PretargetingConfig.appTargeting.mobileAppTargeting.targetingMode or a 400 bad request error will be returned. | [optional] 

## Example

```python
from openapi_client.models.add_targeted_apps_request import AddTargetedAppsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTargetedAppsRequest from a JSON string
add_targeted_apps_request_instance = AddTargetedAppsRequest.from_json(json)
# print the JSON string representation of the object
print(AddTargetedAppsRequest.to_json())

# convert the object into a dict
add_targeted_apps_request_dict = add_targeted_apps_request_instance.to_dict()
# create an instance of AddTargetedAppsRequest from a dict
add_targeted_apps_request_from_dict = AddTargetedAppsRequest.from_dict(add_targeted_apps_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


