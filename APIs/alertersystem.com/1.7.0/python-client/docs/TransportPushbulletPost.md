# TransportPushbulletPost

The TransportPushbullet resource is a collection of transports that carry dispatched alerts to the external Pushbullet service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**pushbullet_access_token** | **str** | The access token for the Pushbullet service. Stored in encrypted format. | 
**pushbullet_email** | **str** | The recipient email for the Pushbullet service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pushbullet_post import TransportPushbulletPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPushbulletPost from a JSON string
transport_pushbullet_post_instance = TransportPushbulletPost.from_json(json)
# print the JSON string representation of the object
print(TransportPushbulletPost.to_json())

# convert the object into a dict
transport_pushbullet_post_dict = transport_pushbullet_post_instance.to_dict()
# create an instance of TransportPushbulletPost from a dict
transport_pushbullet_post_from_dict = TransportPushbulletPost.from_dict(transport_pushbullet_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


