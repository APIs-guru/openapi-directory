# ClusterDefinition

The cluster definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blueprint** | **str** | The link to the blueprint. | [optional] 
**component_version** | **Dict[str, str]** | The versions of different services in the cluster. | [optional] 
**configurations** | **object** | The cluster configurations. | [optional] 
**kind** | **str** | The type of cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_definition import ClusterDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterDefinition from a JSON string
cluster_definition_instance = ClusterDefinition.from_json(json)
# print the JSON string representation of the object
print(ClusterDefinition.to_json())

# convert the object into a dict
cluster_definition_dict = cluster_definition_instance.to_dict()
# create an instance of ClusterDefinition from a dict
cluster_definition_from_dict = ClusterDefinition.from_dict(cluster_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


