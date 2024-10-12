# TransportSpotHitPut

The TransportSpotHit resource is a collection of transports that carry dispatched alerts to the external Spot-Hit service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**spot_hit_from** | **str** | The sender (3-11 letters, default is a 5 digits phone number) for the Spot-Hit service. | 
**spot_hit_token** | **str** | The API token for the Spot-Hit service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_spot_hit_put import TransportSpotHitPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSpotHitPut from a JSON string
transport_spot_hit_put_instance = TransportSpotHitPut.from_json(json)
# print the JSON string representation of the object
print(TransportSpotHitPut.to_json())

# convert the object into a dict
transport_spot_hit_put_dict = transport_spot_hit_put_instance.to_dict()
# create an instance of TransportSpotHitPut from a dict
transport_spot_hit_put_from_dict = TransportSpotHitPut.from_dict(transport_spot_hit_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


