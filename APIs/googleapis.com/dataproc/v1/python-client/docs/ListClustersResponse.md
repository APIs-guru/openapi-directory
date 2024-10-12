# ListClustersResponse

The list of all clusters in a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[Cluster]**](Cluster.md) | Output only. The clusters in the project. | [optional] [readonly] 
**next_page_token** | **str** | Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest. | [optional] [readonly] 

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


