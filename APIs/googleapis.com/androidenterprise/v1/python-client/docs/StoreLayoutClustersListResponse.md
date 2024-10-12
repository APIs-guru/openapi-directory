# StoreLayoutClustersListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | [**List[StoreCluster]**](StoreCluster.md) | A store cluster of an enterprise. | [optional] 

## Example

```python
from openapi_client.models.store_layout_clusters_list_response import StoreLayoutClustersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StoreLayoutClustersListResponse from a JSON string
store_layout_clusters_list_response_instance = StoreLayoutClustersListResponse.from_json(json)
# print the JSON string representation of the object
print(StoreLayoutClustersListResponse.to_json())

# convert the object into a dict
store_layout_clusters_list_response_dict = store_layout_clusters_list_response_instance.to_dict()
# create an instance of StoreLayoutClustersListResponse from a dict
store_layout_clusters_list_response_from_dict = StoreLayoutClustersListResponse.from_dict(store_layout_clusters_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


