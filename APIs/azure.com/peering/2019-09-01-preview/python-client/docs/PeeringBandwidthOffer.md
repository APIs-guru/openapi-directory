# PeeringBandwidthOffer

The properties that define a peering bandwidth offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_name** | **str** | The name of the bandwidth offer. | [optional] 
**value_in_mbps** | **int** | The value of the bandwidth offer in Mbps. | [optional] 

## Example

```python
from openapi_client.models.peering_bandwidth_offer import PeeringBandwidthOffer

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringBandwidthOffer from a JSON string
peering_bandwidth_offer_instance = PeeringBandwidthOffer.from_json(json)
# print the JSON string representation of the object
print(PeeringBandwidthOffer.to_json())

# convert the object into a dict
peering_bandwidth_offer_dict = peering_bandwidth_offer_instance.to_dict()
# create an instance of PeeringBandwidthOffer from a dict
peering_bandwidth_offer_from_dict = PeeringBandwidthOffer.from_dict(peering_bandwidth_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


