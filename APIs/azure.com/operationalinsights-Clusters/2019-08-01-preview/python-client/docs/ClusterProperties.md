# ClusterProperties

Cluster properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | The ID associated with the cluster. | [optional] [readonly] 
**encryption_key_uri** | **str** | The Key Vault key or certificate path associated with the Log Analytics cluster. | [optional] 
**next_link** | **str** | The link used to get the next page of recommendations. | [optional] 
**provisioning_state** | **str** | The provisioning state of the cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_properties import ClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterProperties from a JSON string
cluster_properties_instance = ClusterProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterProperties.to_json())

# convert the object into a dict
cluster_properties_dict = cluster_properties_instance.to_dict()
# create an instance of ClusterProperties from a dict
cluster_properties_from_dict = ClusterProperties.from_dict(cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


