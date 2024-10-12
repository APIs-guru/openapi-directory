# PartialUpdateClusterRequest

Request message for BigtableInstanceAdmin.PartialUpdateCluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | [**Cluster**](Cluster.md) |  | [optional] 
**update_mask** | **str** | Required. The subset of Cluster fields which should be replaced. | [optional] 

## Example

```python
from openapi_client.models.partial_update_cluster_request import PartialUpdateClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PartialUpdateClusterRequest from a JSON string
partial_update_cluster_request_instance = PartialUpdateClusterRequest.from_json(json)
# print the JSON string representation of the object
print(PartialUpdateClusterRequest.to_json())

# convert the object into a dict
partial_update_cluster_request_dict = partial_update_cluster_request_instance.to_dict()
# create an instance of PartialUpdateClusterRequest from a dict
partial_update_cluster_request_from_dict = PartialUpdateClusterRequest.from_dict(partial_update_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


