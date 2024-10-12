# ClusterResourceProperties

Service properties payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_server_properties** | [**ConfigServerProperties**](ConfigServerProperties.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the Service | [optional] [readonly] 
**service_id** | **str** | ServiceInstanceEntity GUID which uniquely identifies a created resource | [optional] [readonly] 
**trace** | [**TraceProperties**](TraceProperties.md) |  | [optional] 
**version** | **int** | Version of the Service | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_resource_properties import ClusterResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterResourceProperties from a JSON string
cluster_resource_properties_instance = ClusterResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterResourceProperties.to_json())

# convert the object into a dict
cluster_resource_properties_dict = cluster_resource_properties_instance.to_dict()
# create an instance of ClusterResourceProperties from a dict
cluster_resource_properties_from_dict = ClusterResourceProperties.from_dict(cluster_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


