# TransportSmscPost

The TransportSmsc resource is a collection of transports that carry dispatched alerts to the external Smsc service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**smsc_from** | **str** | The sender (NB: text identity, not a phone number) for the Smsc service. | 
**smsc_login** | **str** | The login for the Smsc service. | 
**smsc_password** | **str** | The API password for the Smsc service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsc_post import TransportSmscPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmscPost from a JSON string
transport_smsc_post_instance = TransportSmscPost.from_json(json)
# print the JSON string representation of the object
print(TransportSmscPost.to_json())

# convert the object into a dict
transport_smsc_post_dict = transport_smsc_post_instance.to_dict()
# create an instance of TransportSmscPost from a dict
transport_smsc_post_from_dict = TransportSmscPost.from_dict(transport_smsc_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


