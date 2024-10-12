# TransportSpotHitPost

The TransportSpotHit resource is a collection of transports that carry dispatched alerts to the external Spot-Hit service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**spot_hit_from** | **str** | The sender (3-11 letters, default is a 5 digits phone number) for the Spot-Hit service. | 
**spot_hit_token** | **str** | The API token for the Spot-Hit service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_spot_hit_post import TransportSpotHitPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSpotHitPost from a JSON string
transport_spot_hit_post_instance = TransportSpotHitPost.from_json(json)
# print the JSON string representation of the object
print(TransportSpotHitPost.to_json())

# convert the object into a dict
transport_spot_hit_post_dict = transport_spot_hit_post_instance.to_dict()
# create an instance of TransportSpotHitPost from a dict
transport_spot_hit_post_from_dict = TransportSpotHitPost.from_dict(transport_spot_hit_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


