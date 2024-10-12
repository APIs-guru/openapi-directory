# TopologyResourceProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_date_time** | **datetime** | The UTC time on which the topology was calculated | [optional] [readonly] 
**topology_resources** | [**List[TopologySingleResource]**](TopologySingleResource.md) | Azure resources which are part of this topology resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.topology_resource_properties import TopologyResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyResourceProperties from a JSON string
topology_resource_properties_instance = TopologyResourceProperties.from_json(json)
# print the JSON string representation of the object
print(TopologyResourceProperties.to_json())

# convert the object into a dict
topology_resource_properties_dict = topology_resource_properties_instance.to_dict()
# create an instance of TopologyResourceProperties from a dict
topology_resource_properties_from_dict = TopologyResourceProperties.from_dict(topology_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


