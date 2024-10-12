# TemplateSummaryLabel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env_references** | [**List[TemplateEnvReferencesInner]**](TemplateEnvReferencesInner.md) |  | [optional] 
**id** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**properties** | [**TemplateSummaryLabelProperties**](TemplateSummaryLabelProperties.md) |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_label import TemplateSummaryLabel

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryLabel from a JSON string
template_summary_label_instance = TemplateSummaryLabel.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryLabel.to_json())

# convert the object into a dict
template_summary_label_dict = template_summary_label_instance.to_dict()
# create an instance of TemplateSummaryLabel from a dict
template_summary_label_from_dict = TemplateSummaryLabel.from_dict(template_summary_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


