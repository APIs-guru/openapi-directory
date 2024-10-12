# TransportPushbulletJsonldGet

The TransportPushbullet resource is a collection of transports that carry dispatched alerts to the external Pushbullet service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**pushbullet_access_token** | **str** | The access token for the Pushbullet service. Stored in encrypted format. | 
**pushbullet_email** | **str** | The recipient email for the Pushbullet service. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pushbullet_jsonld_get import TransportPushbulletJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPushbulletJsonldGet from a JSON string
transport_pushbullet_jsonld_get_instance = TransportPushbulletJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportPushbulletJsonldGet.to_json())

# convert the object into a dict
transport_pushbullet_jsonld_get_dict = transport_pushbullet_jsonld_get_instance.to_dict()
# create an instance of TransportPushbulletJsonldGet from a dict
transport_pushbullet_jsonld_get_from_dict = TransportPushbulletJsonldGet.from_dict(transport_pushbullet_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


