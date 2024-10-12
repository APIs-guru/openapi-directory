# TemplateSummarySummaryTelegrafConfigsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**metadata** | [**TelegrafRequestMetadata**](TelegrafRequestMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**env_references** | [**List[TemplateEnvReferencesInner]**](TemplateEnvReferencesInner.md) |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**label_associations** | [**List[TemplateSummaryLabel]**](TemplateSummaryLabel.md) |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_summary_telegraf_configs_inner import TemplateSummarySummaryTelegrafConfigsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummarySummaryTelegrafConfigsInner from a JSON string
template_summary_summary_telegraf_configs_inner_instance = TemplateSummarySummaryTelegrafConfigsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummarySummaryTelegrafConfigsInner.to_json())

# convert the object into a dict
template_summary_summary_telegraf_configs_inner_dict = template_summary_summary_telegraf_configs_inner_instance.to_dict()
# create an instance of TemplateSummarySummaryTelegrafConfigsInner from a dict
template_summary_summary_telegraf_configs_inner_from_dict = TemplateSummarySummaryTelegrafConfigsInner.from_dict(template_summary_summary_telegraf_configs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


