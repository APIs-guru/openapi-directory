# RoutingTwinProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desired_properties** | **object** | Twin desired properties | [optional] 
**reported_properties** | **object** | Twin desired properties | [optional] 

## Example

```python
from openapi_client.models.routing_twin_properties import RoutingTwinProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingTwinProperties from a JSON string
routing_twin_properties_instance = RoutingTwinProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingTwinProperties.to_json())

# convert the object into a dict
routing_twin_properties_dict = routing_twin_properties_instance.to_dict()
# create an instance of RoutingTwinProperties from a dict
routing_twin_properties_from_dict = RoutingTwinProperties.from_dict(routing_twin_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


