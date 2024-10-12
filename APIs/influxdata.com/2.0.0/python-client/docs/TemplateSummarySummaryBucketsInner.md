# TemplateSummarySummaryBucketsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**env_references** | [**List[TemplateEnvReferencesInner]**](TemplateEnvReferencesInner.md) |  | [optional] 
**id** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**label_associations** | [**List[TemplateSummaryLabel]**](TemplateSummaryLabel.md) |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**retention_period** | **int** |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_summary_buckets_inner import TemplateSummarySummaryBucketsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummarySummaryBucketsInner from a JSON string
template_summary_summary_buckets_inner_instance = TemplateSummarySummaryBucketsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummarySummaryBucketsInner.to_json())

# convert the object into a dict
template_summary_summary_buckets_inner_dict = template_summary_summary_buckets_inner_instance.to_dict()
# create an instance of TemplateSummarySummaryBucketsInner from a dict
template_summary_summary_buckets_inner_from_dict = TemplateSummarySummaryBucketsInner.from_dict(template_summary_summary_buckets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


