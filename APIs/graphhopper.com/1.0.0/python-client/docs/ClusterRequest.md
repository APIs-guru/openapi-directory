# ClusterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**ClusterConfiguration**](ClusterConfiguration.md) |  | [optional] 
**customers** | [**List[ClusterCustomer]**](ClusterCustomer.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_request import ClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterRequest from a JSON string
cluster_request_instance = ClusterRequest.from_json(json)
# print the JSON string representation of the object
print(ClusterRequest.to_json())

# convert the object into a dict
cluster_request_dict = cluster_request_instance.to_dict()
# create an instance of ClusterRequest from a dict
cluster_request_from_dict = ClusterRequest.from_dict(cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


