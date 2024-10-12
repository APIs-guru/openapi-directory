# ClusterConfigurationRouting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_meter** | **float** | Cost per meter (travel distance) | [optional] 
**cost_per_second** | **float** | Cost per second (travel time) | [optional] 
**profile** | **str** | The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) | [optional] 

## Example

```python
from openapi_client.models.cluster_configuration_routing import ClusterConfigurationRouting

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfigurationRouting from a JSON string
cluster_configuration_routing_instance = ClusterConfigurationRouting.from_json(json)
# print the JSON string representation of the object
print(ClusterConfigurationRouting.to_json())

# convert the object into a dict
cluster_configuration_routing_dict = cluster_configuration_routing_instance.to_dict()
# create an instance of ClusterConfigurationRouting from a dict
cluster_configuration_routing_from_dict = ClusterConfigurationRouting.from_dict(cluster_configuration_routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


