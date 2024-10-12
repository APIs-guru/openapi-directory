# TemplateSummaryDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[TemplateSummaryDiffBucketsInner]**](TemplateSummaryDiffBucketsInner.md) |  | [optional] 
**checks** | [**List[TemplateSummaryDiffChecksInner]**](TemplateSummaryDiffChecksInner.md) |  | [optional] 
**dashboards** | [**List[TemplateSummaryDiffDashboardsInner]**](TemplateSummaryDiffDashboardsInner.md) |  | [optional] 
**label_mappings** | [**List[TemplateSummaryDiffLabelMappingsInner]**](TemplateSummaryDiffLabelMappingsInner.md) |  | [optional] 
**labels** | [**List[TemplateSummaryDiffLabelsInner]**](TemplateSummaryDiffLabelsInner.md) |  | [optional] 
**notification_endpoints** | [**List[TemplateSummaryDiffNotificationEndpointsInner]**](TemplateSummaryDiffNotificationEndpointsInner.md) |  | [optional] 
**notification_rules** | [**List[TemplateSummaryDiffNotificationRulesInner]**](TemplateSummaryDiffNotificationRulesInner.md) |  | [optional] 
**tasks** | [**List[TemplateSummaryDiffTasksInner]**](TemplateSummaryDiffTasksInner.md) |  | [optional] 
**telegraf_configs** | [**List[TemplateSummaryDiffTelegrafConfigsInner]**](TemplateSummaryDiffTelegrafConfigsInner.md) |  | [optional] 
**variables** | [**List[TemplateSummaryDiffVariablesInner]**](TemplateSummaryDiffVariablesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff import TemplateSummaryDiff

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiff from a JSON string
template_summary_diff_instance = TemplateSummaryDiff.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiff.to_json())

# convert the object into a dict
template_summary_diff_dict = template_summary_diff_instance.to_dict()
# create an instance of TemplateSummaryDiff from a dict
template_summary_diff_from_dict = TemplateSummaryDiff.from_dict(template_summary_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


