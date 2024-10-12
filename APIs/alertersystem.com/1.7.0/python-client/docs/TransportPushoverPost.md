# TransportPushoverPost

The TransportPushover resource is a collection of transports that carry dispatched alerts to the external Pushover service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**pushover_app_token** | **str** | The app token for the Pushover service. Stored in encrypted format. | 
**pushover_user_key** | **str** | The user key for the Pushover service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pushover_post import TransportPushoverPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPushoverPost from a JSON string
transport_pushover_post_instance = TransportPushoverPost.from_json(json)
# print the JSON string representation of the object
print(TransportPushoverPost.to_json())

# convert the object into a dict
transport_pushover_post_dict = transport_pushover_post_instance.to_dict()
# create an instance of TransportPushoverPost from a dict
transport_pushover_post_from_dict = TransportPushoverPost.from_dict(transport_pushover_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


