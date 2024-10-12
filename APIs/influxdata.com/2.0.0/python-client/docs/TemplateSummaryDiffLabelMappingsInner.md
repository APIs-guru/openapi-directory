# TemplateSummaryDiffLabelMappingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_id** | **str** |  | [optional] 
**label_name** | **str** |  | [optional] 
**label_template_meta_name** | **str** |  | [optional] 
**resource_id** | **str** |  | [optional] 
**resource_name** | **str** |  | [optional] 
**resource_template_meta_name** | **str** |  | [optional] 
**resource_type** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff_label_mappings_inner import TemplateSummaryDiffLabelMappingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiffLabelMappingsInner from a JSON string
template_summary_diff_label_mappings_inner_instance = TemplateSummaryDiffLabelMappingsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiffLabelMappingsInner.to_json())

# convert the object into a dict
template_summary_diff_label_mappings_inner_dict = template_summary_diff_label_mappings_inner_instance.to_dict()
# create an instance of TemplateSummaryDiffLabelMappingsInner from a dict
template_summary_diff_label_mappings_inner_from_dict = TemplateSummaryDiffLabelMappingsInner.from_dict(template_summary_diff_label_mappings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


