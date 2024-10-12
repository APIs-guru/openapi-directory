# PeeringRegisteredAsn

The customer's ASN that is registered by the peering service provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PeeringRegisteredAsnProperties**](PeeringRegisteredAsnProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_registered_asn import PeeringRegisteredAsn

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRegisteredAsn from a JSON string
peering_registered_asn_instance = PeeringRegisteredAsn.from_json(json)
# print the JSON string representation of the object
print(PeeringRegisteredAsn.to_json())

# convert the object into a dict
peering_registered_asn_dict = peering_registered_asn_instance.to_dict()
# create an instance of PeeringRegisteredAsn from a dict
peering_registered_asn_from_dict = PeeringRegisteredAsn.from_dict(peering_registered_asn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


