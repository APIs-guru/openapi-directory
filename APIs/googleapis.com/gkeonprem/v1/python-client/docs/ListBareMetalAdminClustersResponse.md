# ListBareMetalAdminClustersResponse

Response message for listing bare metal admin clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bare_metal_admin_clusters** | [**List[BareMetalAdminCluster]**](BareMetalAdminCluster.md) | The list of bare metal admin cluster. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_bare_metal_admin_clusters_response import ListBareMetalAdminClustersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBareMetalAdminClustersResponse from a JSON string
list_bare_metal_admin_clusters_response_instance = ListBareMetalAdminClustersResponse.from_json(json)
# print the JSON string representation of the object
print(ListBareMetalAdminClustersResponse.to_json())

# convert the object into a dict
list_bare_metal_admin_clusters_response_dict = list_bare_metal_admin_clusters_response_instance.to_dict()
# create an instance of ListBareMetalAdminClustersResponse from a dict
list_bare_metal_admin_clusters_response_from_dict = ListBareMetalAdminClustersResponse.from_dict(list_bare_metal_admin_clusters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


