# TransportSpotHitGet

The TransportSpotHit resource is a collection of transports that carry dispatched alerts to the external Spot-Hit service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**spot_hit_from** | **str** | The sender (3-11 letters, default is a 5 digits phone number) for the Spot-Hit service. | 
**spot_hit_token** | **str** | The API token for the Spot-Hit service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_spot_hit_get import TransportSpotHitGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSpotHitGet from a JSON string
transport_spot_hit_get_instance = TransportSpotHitGet.from_json(json)
# print the JSON string representation of the object
print(TransportSpotHitGet.to_json())

# convert the object into a dict
transport_spot_hit_get_dict = transport_spot_hit_get_instance.to_dict()
# create an instance of TransportSpotHitGet from a dict
transport_spot_hit_get_from_dict = TransportSpotHitGet.from_dict(transport_spot_hit_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


