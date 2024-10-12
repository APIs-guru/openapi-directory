# TemplateSummarySummaryNotificationRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**endpoint_id** | **str** |  | [optional] 
**endpoint_template_meta_name** | **str** |  | [optional] 
**endpoint_type** | **str** |  | [optional] 
**env_references** | [**List[TemplateEnvReferencesInner]**](TemplateEnvReferencesInner.md) |  | [optional] 
**every** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**label_associations** | [**List[TemplateSummaryLabel]**](TemplateSummaryLabel.md) |  | [optional] 
**message_template** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**offset** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**status_rules** | [**List[TemplateSummaryDiffNotificationRulesInnerNewStatusRulesInner]**](TemplateSummaryDiffNotificationRulesInnerNewStatusRulesInner.md) |  | [optional] 
**tag_rules** | [**List[TemplateSummaryDiffNotificationRulesInnerNewTagRulesInner]**](TemplateSummaryDiffNotificationRulesInnerNewTagRulesInner.md) |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_summary_notification_rules_inner import TemplateSummarySummaryNotificationRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummarySummaryNotificationRulesInner from a JSON string
template_summary_summary_notification_rules_inner_instance = TemplateSummarySummaryNotificationRulesInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummarySummaryNotificationRulesInner.to_json())

# convert the object into a dict
template_summary_summary_notification_rules_inner_dict = template_summary_summary_notification_rules_inner_instance.to_dict()
# create an instance of TemplateSummarySummaryNotificationRulesInner from a dict
template_summary_summary_notification_rules_inner_from_dict = TemplateSummarySummaryNotificationRulesInner.from_dict(template_summary_summary_notification_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


