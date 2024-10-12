# ClusterConfiguration

Information about the standalone cluster configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_configuration** | **str** | The contents of the cluster configuration file. | [optional] 

## Example

```python
from openapi_client.models.cluster_configuration import ClusterConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfiguration from a JSON string
cluster_configuration_instance = ClusterConfiguration.from_json(json)
# print the JSON string representation of the object
print(ClusterConfiguration.to_json())

# convert the object into a dict
cluster_configuration_dict = cluster_configuration_instance.to_dict()
# create an instance of ClusterConfiguration from a dict
cluster_configuration_from_dict = ClusterConfiguration.from_dict(cluster_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


