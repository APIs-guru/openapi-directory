# TemplateSummaryDiffDashboardsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**new** | [**TemplateSummaryDiffDashboardsInnerNew**](TemplateSummaryDiffDashboardsInnerNew.md) |  | [optional] 
**old** | [**TemplateSummaryDiffDashboardsInnerNew**](TemplateSummaryDiffDashboardsInnerNew.md) |  | [optional] 
**state_status** | **str** |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff_dashboards_inner import TemplateSummaryDiffDashboardsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiffDashboardsInner from a JSON string
template_summary_diff_dashboards_inner_instance = TemplateSummaryDiffDashboardsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiffDashboardsInner.to_json())

# convert the object into a dict
template_summary_diff_dashboards_inner_dict = template_summary_diff_dashboards_inner_instance.to_dict()
# create an instance of TemplateSummaryDiffDashboardsInner from a dict
template_summary_diff_dashboards_inner_from_dict = TemplateSummaryDiffDashboardsInner.from_dict(template_summary_diff_dashboards_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


