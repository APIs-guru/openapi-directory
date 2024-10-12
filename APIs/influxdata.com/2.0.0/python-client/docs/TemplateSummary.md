# TemplateSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diff** | [**TemplateSummaryDiff**](TemplateSummaryDiff.md) |  | [optional] 
**errors** | [**List[TemplateSummaryErrorsInner]**](TemplateSummaryErrorsInner.md) |  | [optional] 
**sources** | **List[str]** |  | [optional] 
**stack_id** | **str** |  | [optional] 
**summary** | [**TemplateSummarySummary**](TemplateSummarySummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_summary import TemplateSummary

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummary from a JSON string
template_summary_instance = TemplateSummary.from_json(json)
# print the JSON string representation of the object
print(TemplateSummary.to_json())

# convert the object into a dict
template_summary_dict = template_summary_instance.to_dict()
# create an instance of TemplateSummary from a dict
template_summary_from_dict = TemplateSummary.from_dict(template_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


