# ClusterCreateParameters

Cluster creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ClusterBaseProperties**](ClusterBaseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_create_parameters import ClusterCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCreateParameters from a JSON string
cluster_create_parameters_instance = ClusterCreateParameters.from_json(json)
# print the JSON string representation of the object
print(ClusterCreateParameters.to_json())

# convert the object into a dict
cluster_create_parameters_dict = cluster_create_parameters_instance.to_dict()
# create an instance of ClusterCreateParameters from a dict
cluster_create_parameters_from_dict = ClusterCreateParameters.from_dict(cluster_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


