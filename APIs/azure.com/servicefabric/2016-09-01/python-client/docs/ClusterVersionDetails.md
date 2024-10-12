# ClusterVersionDetails

The detail of the ServiceFabric runtime version result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** | The ServiceFabric runtime version of the cluster | [optional] 
**environment** | [**ClusterEnvironment**](ClusterEnvironment.md) |  | [optional] 
**support_expiry_utc** | **str** | The date of expiry of support of the version | [optional] 

## Example

```python
from openapi_client.models.cluster_version_details import ClusterVersionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterVersionDetails from a JSON string
cluster_version_details_instance = ClusterVersionDetails.from_json(json)
# print the JSON string representation of the object
print(ClusterVersionDetails.to_json())

# convert the object into a dict
cluster_version_details_dict = cluster_version_details_instance.to_dict()
# create an instance of ClusterVersionDetails from a dict
cluster_version_details_from_dict = ClusterVersionDetails.from_dict(cluster_version_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


