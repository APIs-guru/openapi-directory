# ClusterResizeParameters

The Resize Cluster request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_instance_count** | **int** | The target instance count for the operation. | [optional] 

## Example

```python
from openapi_client.models.cluster_resize_parameters import ClusterResizeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterResizeParameters from a JSON string
cluster_resize_parameters_instance = ClusterResizeParameters.from_json(json)
# print the JSON string representation of the object
print(ClusterResizeParameters.to_json())

# convert the object into a dict
cluster_resize_parameters_dict = cluster_resize_parameters_instance.to_dict()
# create an instance of ClusterResizeParameters from a dict
cluster_resize_parameters_from_dict = ClusterResizeParameters.from_dict(cluster_resize_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


