# PolicyTrackedResourcesQueryResults

Query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[PolicyTrackedResource]**](PolicyTrackedResource.md) | Query results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_tracked_resources_query_results import PolicyTrackedResourcesQueryResults

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyTrackedResourcesQueryResults from a JSON string
policy_tracked_resources_query_results_instance = PolicyTrackedResourcesQueryResults.from_json(json)
# print the JSON string representation of the object
print(PolicyTrackedResourcesQueryResults.to_json())

# convert the object into a dict
policy_tracked_resources_query_results_dict = policy_tracked_resources_query_results_instance.to_dict()
# create an instance of PolicyTrackedResourcesQueryResults from a dict
policy_tracked_resources_query_results_from_dict = PolicyTrackedResourcesQueryResults.from_dict(policy_tracked_resources_query_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


