# StragglerSummary

Summarized straggler identification details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recent_stragglers** | [**List[Straggler]**](Straggler.md) | The most recent stragglers. | [optional] 
**straggler_cause_count** | **Dict[str, str]** | Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum. | [optional] 
**total_straggler_count** | **str** | The total count of stragglers. | [optional] 

## Example

```python
from openapi_client.models.straggler_summary import StragglerSummary

# TODO update the JSON string below
json = "{}"
# create an instance of StragglerSummary from a JSON string
straggler_summary_instance = StragglerSummary.from_json(json)
# print the JSON string representation of the object
print(StragglerSummary.to_json())

# convert the object into a dict
straggler_summary_dict = straggler_summary_instance.to_dict()
# create an instance of StragglerSummary from a dict
straggler_summary_from_dict = StragglerSummary.from_dict(straggler_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


