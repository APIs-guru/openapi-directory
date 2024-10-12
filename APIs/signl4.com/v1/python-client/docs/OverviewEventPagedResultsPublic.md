# OverviewEventPagedResultsPublic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | [**PagedResultsPublicContinuationToken**](PagedResultsPublicContinuationToken.md) |  | [optional] 
**has_more** | **bool** |  | [optional] [readonly] 
**results** | [**List[OverviewEvent]**](OverviewEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.overview_event_paged_results_public import OverviewEventPagedResultsPublic

# TODO update the JSON string below
json = "{}"
# create an instance of OverviewEventPagedResultsPublic from a JSON string
overview_event_paged_results_public_instance = OverviewEventPagedResultsPublic.from_json(json)
# print the JSON string representation of the object
print(OverviewEventPagedResultsPublic.to_json())

# convert the object into a dict
overview_event_paged_results_public_dict = overview_event_paged_results_public_instance.to_dict()
# create an instance of OverviewEventPagedResultsPublic from a dict
overview_event_paged_results_public_from_dict = OverviewEventPagedResultsPublic.from_dict(overview_event_paged_results_public_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


