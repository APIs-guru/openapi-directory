# ClusterCreateParametersExtended

The CreateCluster request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ClusterIdentity**](ClusterIdentity.md) |  | [optional] 
**location** | **str** | The location of the cluster. | [optional] 
**properties** | [**ClusterCreateProperties**](ClusterCreateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.cluster_create_parameters_extended import ClusterCreateParametersExtended

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCreateParametersExtended from a JSON string
cluster_create_parameters_extended_instance = ClusterCreateParametersExtended.from_json(json)
# print the JSON string representation of the object
print(ClusterCreateParametersExtended.to_json())

# convert the object into a dict
cluster_create_parameters_extended_dict = cluster_create_parameters_extended_instance.to_dict()
# create an instance of ClusterCreateParametersExtended from a dict
cluster_create_parameters_extended_from_dict = ClusterCreateParametersExtended.from_dict(cluster_create_parameters_extended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


