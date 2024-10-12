# CreateClusterRequest

Request message for BigtableInstanceAdmin.CreateCluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | [**Cluster**](Cluster.md) |  | [optional] 
**cluster_id** | **str** | Required. The ID to be used when referring to the new cluster within its instance, e.g., just &#x60;mycluster&#x60; rather than &#x60;projects/myproject/instances/myinstance/clusters/mycluster&#x60;. | [optional] 
**parent** | **str** | Required. The unique name of the instance in which to create the new cluster. Values are of the form &#x60;projects/{project}/instances/{instance}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.create_cluster_request import CreateClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClusterRequest from a JSON string
create_cluster_request_instance = CreateClusterRequest.from_json(json)
# print the JSON string representation of the object
print(CreateClusterRequest.to_json())

# convert the object into a dict
create_cluster_request_dict = create_cluster_request_instance.to_dict()
# create an instance of CreateClusterRequest from a dict
create_cluster_request_from_dict = CreateClusterRequest.from_dict(create_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


