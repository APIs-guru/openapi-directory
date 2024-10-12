# ListVmwareClustersResponse

Response message for listing VMware Clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 
**vmware_clusters** | [**List[VmwareCluster]**](VmwareCluster.md) | The list of VMware Cluster. | [optional] 

## Example

```python
from openapi_client.models.list_vmware_clusters_response import ListVmwareClustersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVmwareClustersResponse from a JSON string
list_vmware_clusters_response_instance = ListVmwareClustersResponse.from_json(json)
# print the JSON string representation of the object
print(ListVmwareClustersResponse.to_json())

# convert the object into a dict
list_vmware_clusters_response_dict = list_vmware_clusters_response_instance.to_dict()
# create an instance of ListVmwareClustersResponse from a dict
list_vmware_clusters_response_from_dict = ListVmwareClustersResponse.from_dict(list_vmware_clusters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


