# ExplainQueryStep

An operation within a stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Machine-readable operation type. | [optional] 
**substeps** | **List[str]** | Human-readable description of the step(s). | [optional] 

## Example

```python
from openapi_client.models.explain_query_step import ExplainQueryStep

# TODO update the JSON string below
json = "{}"
# create an instance of ExplainQueryStep from a JSON string
explain_query_step_instance = ExplainQueryStep.from_json(json)
# print the JSON string representation of the object
print(ExplainQueryStep.to_json())

# convert the object into a dict
explain_query_step_dict = explain_query_step_instance.to_dict()
# create an instance of ExplainQueryStep from a dict
explain_query_step_from_dict = ExplainQueryStep.from_dict(explain_query_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


