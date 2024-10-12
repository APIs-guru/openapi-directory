# ClusterConfigurations

The configuration object for the specified cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | **Dict[str, Dict[str, str]]** | The configuration object for the specified configuration for the specified cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_configurations import ClusterConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfigurations from a JSON string
cluster_configurations_instance = ClusterConfigurations.from_json(json)
# print the JSON string representation of the object
print(ClusterConfigurations.to_json())

# convert the object into a dict
cluster_configurations_dict = cluster_configurations_instance.to_dict()
# create an instance of ClusterConfigurations from a dict
cluster_configurations_from_dict = ClusterConfigurations.from_dict(cluster_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


