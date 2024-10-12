# Summary

Summary results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_context** | **str** | OData context string; used by OData clients to resolve type information based on metadata. | [optional] 
**odata_id** | **str** | OData entity ID; always set to null since summaries do not have an entity ID. | [optional] 
**policy_assignments** | [**List[PolicyAssignmentSummary]**](PolicyAssignmentSummary.md) | Policy assignments summary. | [optional] 
**results** | [**SummaryResults**](SummaryResults.md) |  | [optional] 

## Example

```python
from openapi_client.models.summary import Summary

# TODO update the JSON string below
json = "{}"
# create an instance of Summary from a JSON string
summary_instance = Summary.from_json(json)
# print the JSON string representation of the object
print(Summary.to_json())

# convert the object into a dict
summary_dict = summary_instance.to_dict()
# create an instance of Summary from a dict
summary_from_dict = Summary.from_dict(summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


