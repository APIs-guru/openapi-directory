# TemplateSummaryErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** |  | [optional] 
**indexes** | **List[int]** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_errors_inner import TemplateSummaryErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryErrorsInner from a JSON string
template_summary_errors_inner_instance = TemplateSummaryErrorsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryErrorsInner.to_json())

# convert the object into a dict
template_summary_errors_inner_dict = template_summary_errors_inner_instance.to_dict()
# create an instance of TemplateSummaryErrorsInner from a dict
template_summary_errors_inner_from_dict = TemplateSummaryErrorsInner.from_dict(template_summary_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


