# TemplateSummarySummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[TemplateSummarySummaryBucketsInner]**](TemplateSummarySummaryBucketsInner.md) |  | [optional] 
**checks** | [**List[TemplateSummarySummaryChecksInner]**](TemplateSummarySummaryChecksInner.md) |  | [optional] 
**dashboards** | [**List[TemplateSummarySummaryDashboardsInner]**](TemplateSummarySummaryDashboardsInner.md) |  | [optional] 
**label_mappings** | [**List[TemplateSummaryDiffLabelMappingsInner]**](TemplateSummaryDiffLabelMappingsInner.md) |  | [optional] 
**labels** | [**List[TemplateSummaryLabel]**](TemplateSummaryLabel.md) |  | [optional] 
**missing_env_refs** | **List[str]** |  | [optional] 
**missing_secrets** | **List[str]** |  | [optional] 
**notification_endpoints** | [**List[TemplateSummarySummaryNotificationEndpointsInner]**](TemplateSummarySummaryNotificationEndpointsInner.md) |  | [optional] 
**notification_rules** | [**List[TemplateSummarySummaryNotificationRulesInner]**](TemplateSummarySummaryNotificationRulesInner.md) |  | [optional] 
**tasks** | [**List[TemplateSummarySummaryTasksInner]**](TemplateSummarySummaryTasksInner.md) |  | [optional] 
**telegraf_configs** | [**List[TemplateSummarySummaryTelegrafConfigsInner]**](TemplateSummarySummaryTelegrafConfigsInner.md) |  | [optional] 
**variables** | [**List[TemplateSummarySummaryVariablesInner]**](TemplateSummarySummaryVariablesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_summary import TemplateSummarySummary

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummarySummary from a JSON string
template_summary_summary_instance = TemplateSummarySummary.from_json(json)
# print the JSON string representation of the object
print(TemplateSummarySummary.to_json())

# convert the object into a dict
template_summary_summary_dict = template_summary_summary_instance.to_dict()
# create an instance of TemplateSummarySummary from a dict
template_summary_summary_from_dict = TemplateSummarySummary.from_dict(template_summary_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


