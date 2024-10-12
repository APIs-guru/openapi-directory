# ListClustersResponse

Response message for BigtableInstanceAdmin.ListClusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[Cluster]**](Cluster.md) | The list of requested clusters. | [optional] 
**failed_locations** | **List[str]** | Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from &#x60;clusters&#x60;, or may only have partial information returned. Values are of the form &#x60;projects//locations/&#x60; | [optional] 
**next_page_token** | **str** | DEPRECATED: This field is unused and ignored. | [optional] 

## Example

```python
from openapi_client.models.list_clusters_response import ListClustersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClustersResponse from a JSON string
list_clusters_response_instance = ListClustersResponse.from_json(json)
# print the JSON string representation of the object
print(ListClustersResponse.to_json())

# convert the object into a dict
list_clusters_response_dict = list_clusters_response_instance.to_dict()
# create an instance of ListClustersResponse from a dict
list_clusters_response_from_dict = ListClustersResponse.from_dict(list_clusters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


