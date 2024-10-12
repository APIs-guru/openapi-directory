# TemplateSummaryDiffNotificationRulesInnerNew


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**endpoint_id** | **str** |  | [optional] 
**endpoint_name** | **str** |  | [optional] 
**endpoint_type** | **str** |  | [optional] 
**every** | **str** |  | [optional] 
**message_template** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**offset** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**status_rules** | [**List[TemplateSummaryDiffNotificationRulesInnerNewStatusRulesInner]**](TemplateSummaryDiffNotificationRulesInnerNewStatusRulesInner.md) |  | [optional] 
**tag_rules** | [**List[TemplateSummaryDiffNotificationRulesInnerNewTagRulesInner]**](TemplateSummaryDiffNotificationRulesInnerNewTagRulesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff_notification_rules_inner_new import TemplateSummaryDiffNotificationRulesInnerNew

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiffNotificationRulesInnerNew from a JSON string
template_summary_diff_notification_rules_inner_new_instance = TemplateSummaryDiffNotificationRulesInnerNew.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiffNotificationRulesInnerNew.to_json())

# convert the object into a dict
template_summary_diff_notification_rules_inner_new_dict = template_summary_diff_notification_rules_inner_new_instance.to_dict()
# create an instance of TemplateSummaryDiffNotificationRulesInnerNew from a dict
template_summary_diff_notification_rules_inner_new_from_dict = TemplateSummaryDiffNotificationRulesInnerNew.from_dict(template_summary_diff_notification_rules_inner_new_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


