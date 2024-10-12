# ListClustersResponse

Response for ListClusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[Cluster]**](Cluster.md) | A list of Redis clusters in the project in the specified location, or across all locations. If the &#x60;location_id&#x60; in the parent field of the request is \&quot;-\&quot;, all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the &#x60;name&#x60; field set to a value of the form &#x60;projects/{project_id}/locations/{location_id}/clusters/&#x60;- and the &#x60;status&#x60; field set to ERROR and &#x60;status_message&#x60; field set to \&quot;location not available for ListClusters\&quot;. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

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


