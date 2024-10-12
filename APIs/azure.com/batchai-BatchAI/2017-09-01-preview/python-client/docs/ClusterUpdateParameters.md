# ClusterUpdateParameters

Parameters supplied to the Update operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ClusterUpdateProperties**](ClusterUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The user specified tags associated with the Cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_update_parameters import ClusterUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpdateParameters from a JSON string
cluster_update_parameters_instance = ClusterUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ClusterUpdateParameters.to_json())

# convert the object into a dict
cluster_update_parameters_dict = cluster_update_parameters_instance.to_dict()
# create an instance of ClusterUpdateParameters from a dict
cluster_update_parameters_from_dict = ClusterUpdateParameters.from_dict(cluster_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


