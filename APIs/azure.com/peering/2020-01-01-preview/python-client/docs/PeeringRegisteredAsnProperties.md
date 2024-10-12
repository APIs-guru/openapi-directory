# PeeringRegisteredAsnProperties

The properties that define a registered ASN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **int** | The customer&#39;s ASN from which traffic originates. | [optional] 
**peering_service_prefix_key** | **str** | The peering service prefix key that is to be shared with the customer. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_registered_asn_properties import PeeringRegisteredAsnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRegisteredAsnProperties from a JSON string
peering_registered_asn_properties_instance = PeeringRegisteredAsnProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringRegisteredAsnProperties.to_json())

# convert the object into a dict
peering_registered_asn_properties_dict = peering_registered_asn_properties_instance.to_dict()
# create an instance of PeeringRegisteredAsnProperties from a dict
peering_registered_asn_properties_from_dict = PeeringRegisteredAsnProperties.from_dict(peering_registered_asn_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


