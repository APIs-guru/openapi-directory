# TransportMercurePost

The TransportMercure resource is a collection of transports that carry dispatched alerts to the external Mercure service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mercure_hub_jwt_token** | **str** | The JWT token for the hub for the Mercure service. Stored in encrypted format. | 
**mercure_hub_url** | **str** | The URL for the hub for the Mercure service. | [optional] 
**mercure_topic** | **str** | The optional topic for the Mercure service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mercure_post import TransportMercurePost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMercurePost from a JSON string
transport_mercure_post_instance = TransportMercurePost.from_json(json)
# print the JSON string representation of the object
print(TransportMercurePost.to_json())

# convert the object into a dict
transport_mercure_post_dict = transport_mercure_post_instance.to_dict()
# create an instance of TransportMercurePost from a dict
transport_mercure_post_from_dict = TransportMercurePost.from_dict(transport_mercure_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


