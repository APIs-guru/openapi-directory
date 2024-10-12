# ListWorkstationClustersResponse

Response message for ListWorkstationClusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | Unreachable resources. | [optional] 
**workstation_clusters** | [**List[WorkstationCluster]**](WorkstationCluster.md) | The requested workstation clusters. | [optional] 

## Example

```python
from openapi_client.models.list_workstation_clusters_response import ListWorkstationClustersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkstationClustersResponse from a JSON string
list_workstation_clusters_response_instance = ListWorkstationClustersResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkstationClustersResponse.to_json())

# convert the object into a dict
list_workstation_clusters_response_dict = list_workstation_clusters_response_instance.to_dict()
# create an instance of ListWorkstationClustersResponse from a dict
list_workstation_clusters_response_from_dict = ListWorkstationClustersResponse.from_dict(list_workstation_clusters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


