# ClusterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[Cluster]**](Cluster.md) |  | [optional] 
**copyrights** | **List[str]** |  | [optional] 
**processing_time** | **float** |  | [optional] 
**status** | **str** | Indicates the current status of the job | [optional] 
**waiting_time_in_queue** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.cluster_response import ClusterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterResponse from a JSON string
cluster_response_instance = ClusterResponse.from_json(json)
# print the JSON string representation of the object
print(ClusterResponse.to_json())

# convert the object into a dict
cluster_response_dict = cluster_response_instance.to_dict()
# create an instance of ClusterResponse from a dict
cluster_response_from_dict = ClusterResponse.from_dict(cluster_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


