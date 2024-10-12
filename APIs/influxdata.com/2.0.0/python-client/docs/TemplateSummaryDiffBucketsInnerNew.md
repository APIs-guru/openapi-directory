# TemplateSummaryDiffBucketsInnerNew


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**retention_rules** | [**List[RetentionRule]**](RetentionRule.md) | Rules to expire or retain data.  No rules means data never expires. | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff_buckets_inner_new import TemplateSummaryDiffBucketsInnerNew

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiffBucketsInnerNew from a JSON string
template_summary_diff_buckets_inner_new_instance = TemplateSummaryDiffBucketsInnerNew.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiffBucketsInnerNew.to_json())

# convert the object into a dict
template_summary_diff_buckets_inner_new_dict = template_summary_diff_buckets_inner_new_instance.to_dict()
# create an instance of TemplateSummaryDiffBucketsInnerNew from a dict
template_summary_diff_buckets_inner_new_from_dict = TemplateSummaryDiffBucketsInnerNew.from_dict(template_summary_diff_buckets_inner_new_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


