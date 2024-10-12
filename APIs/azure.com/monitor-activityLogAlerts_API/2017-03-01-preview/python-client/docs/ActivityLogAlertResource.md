# ActivityLogAlertResource

An activity log alert resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ActivityLogAlert**](ActivityLogAlert.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.activity_log_alert_resource import ActivityLogAlertResource

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertResource from a JSON string
activity_log_alert_resource_instance = ActivityLogAlertResource.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertResource.to_json())

# convert the object into a dict
activity_log_alert_resource_dict = activity_log_alert_resource_instance.to_dict()
# create an instance of ActivityLogAlertResource from a dict
activity_log_alert_resource_from_dict = ActivityLogAlertResource.from_dict(activity_log_alert_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


