# ClusterCheckNameRequest

The result returned from a cluster check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Cluster name. | 
**type** | **str** | The type of resource, Microsoft.Kusto/clusters. | 

## Example

```python
from openapi_client.models.cluster_check_name_request import ClusterCheckNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCheckNameRequest from a JSON string
cluster_check_name_request_instance = ClusterCheckNameRequest.from_json(json)
# print the JSON string representation of the object
print(ClusterCheckNameRequest.to_json())

# convert the object into a dict
cluster_check_name_request_dict = cluster_check_name_request_instance.to_dict()
# create an instance of ClusterCheckNameRequest from a dict
cluster_check_name_request_from_dict = ClusterCheckNameRequest.from_dict(cluster_check_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


