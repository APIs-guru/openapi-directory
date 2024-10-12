# TemplateSummaryDiffNotificationEndpointsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**new** | [**NotificationEndpointDiscriminator**](NotificationEndpointDiscriminator.md) |  | [optional] 
**old** | [**NotificationEndpointDiscriminator**](NotificationEndpointDiscriminator.md) |  | [optional] 
**state_status** | **str** |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff_notification_endpoints_inner import TemplateSummaryDiffNotificationEndpointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiffNotificationEndpointsInner from a JSON string
template_summary_diff_notification_endpoints_inner_instance = TemplateSummaryDiffNotificationEndpointsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiffNotificationEndpointsInner.to_json())

# convert the object into a dict
template_summary_diff_notification_endpoints_inner_dict = template_summary_diff_notification_endpoints_inner_instance.to_dict()
# create an instance of TemplateSummaryDiffNotificationEndpointsInner from a dict
template_summary_diff_notification_endpoints_inner_from_dict = TemplateSummaryDiffNotificationEndpointsInner.from_dict(template_summary_diff_notification_endpoints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


