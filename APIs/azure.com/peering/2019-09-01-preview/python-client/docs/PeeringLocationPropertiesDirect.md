# PeeringLocationPropertiesDirect

The properties that define a direct peering location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_offers** | [**List[PeeringBandwidthOffer]**](PeeringBandwidthOffer.md) | The list of bandwidth offers available at the peering location. | [optional] 
**peering_facilities** | [**List[DirectPeeringFacility]**](DirectPeeringFacility.md) | The list of direct peering facilities at the peering location. | [optional] 

## Example

```python
from openapi_client.models.peering_location_properties_direct import PeeringLocationPropertiesDirect

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringLocationPropertiesDirect from a JSON string
peering_location_properties_direct_instance = PeeringLocationPropertiesDirect.from_json(json)
# print the JSON string representation of the object
print(PeeringLocationPropertiesDirect.to_json())

# convert the object into a dict
peering_location_properties_direct_dict = peering_location_properties_direct_instance.to_dict()
# create an instance of PeeringLocationPropertiesDirect from a dict
peering_location_properties_direct_from_dict = PeeringLocationPropertiesDirect.from_dict(peering_location_properties_direct_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


