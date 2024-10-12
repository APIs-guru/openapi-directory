# ListStepAccessibilityClustersResponse

Response message for AccessibilityService.ListStepAccessibilityClusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[SuggestionClusterProto]**](SuggestionClusterProto.md) | A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster. | [optional] 
**name** | **str** | A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents. | [optional] 

## Example

```python
from openapi_client.models.list_step_accessibility_clusters_response import ListStepAccessibilityClustersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStepAccessibilityClustersResponse from a JSON string
list_step_accessibility_clusters_response_instance = ListStepAccessibilityClustersResponse.from_json(json)
# print the JSON string representation of the object
print(ListStepAccessibilityClustersResponse.to_json())

# convert the object into a dict
list_step_accessibility_clusters_response_dict = list_step_accessibility_clusters_response_instance.to_dict()
# create an instance of ListStepAccessibilityClustersResponse from a dict
list_step_accessibility_clusters_response_from_dict = ListStepAccessibilityClustersResponse.from_dict(list_step_accessibility_clusters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


