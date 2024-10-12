# ActivityLogAlertResourcePatch

An activity log alert resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ActivityLogAlertPatch**](ActivityLogAlertPatch.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.activity_log_alert_resource_patch import ActivityLogAlertResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertResourcePatch from a JSON string
activity_log_alert_resource_patch_instance = ActivityLogAlertResourcePatch.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertResourcePatch.to_json())

# convert the object into a dict
activity_log_alert_resource_patch_dict = activity_log_alert_resource_patch_instance.to_dict()
# create an instance of ActivityLogAlertResourcePatch from a dict
activity_log_alert_resource_patch_from_dict = ActivityLogAlertResourcePatch.from_dict(activity_log_alert_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


