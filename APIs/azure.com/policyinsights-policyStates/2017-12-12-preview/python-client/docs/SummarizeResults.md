# SummarizeResults

Summarize action results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_context** | **str** | OData context string; used by OData clients to resolve type information based on metadata. | [optional] 
**odata_count** | **int** | OData entity count; represents the number of summaries returned; always set to 1. | [optional] 
**value** | [**List[Summary]**](Summary.md) | Summarize action results. | [optional] 

## Example

```python
from openapi_client.models.summarize_results import SummarizeResults

# TODO update the JSON string below
json = "{}"
# create an instance of SummarizeResults from a JSON string
summarize_results_instance = SummarizeResults.from_json(json)
# print the JSON string representation of the object
print(SummarizeResults.to_json())

# convert the object into a dict
summarize_results_dict = summarize_results_instance.to_dict()
# create an instance of SummarizeResults from a dict
summarize_results_from_dict = SummarizeResults.from_dict(summarize_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


