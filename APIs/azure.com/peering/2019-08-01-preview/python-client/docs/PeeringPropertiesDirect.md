# PeeringPropertiesDirect

The properties that define a direct peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[DirectConnection]**](DirectConnection.md) | The set of connections that constitute a direct peering. | [optional] 
**direct_peering_type** | **str** | The type of direct peering. | [optional] 
**peer_asn** | [**SubResource**](SubResource.md) |  | [optional] 
**use_for_peering_service** | **bool** | The flag that indicates whether or not the peering is used for peering service. | [optional] 

## Example

```python
from openapi_client.models.peering_properties_direct import PeeringPropertiesDirect

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringPropertiesDirect from a JSON string
peering_properties_direct_instance = PeeringPropertiesDirect.from_json(json)
# print the JSON string representation of the object
print(PeeringPropertiesDirect.to_json())

# convert the object into a dict
peering_properties_direct_dict = peering_properties_direct_instance.to_dict()
# create an instance of PeeringPropertiesDirect from a dict
peering_properties_direct_from_dict = PeeringPropertiesDirect.from_dict(peering_properties_direct_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


