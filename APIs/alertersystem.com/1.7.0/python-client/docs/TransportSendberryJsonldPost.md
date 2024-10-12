# TransportSendberryJsonldPost

The TransportSendberry resource is a collection of transports that carry dispatched alerts to the external Sendberry service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**sendberry_auth_key** | **str** | The auth key for the Sendberry service. | 
**sendberry_from** | **str** | The sender name or phone number for the Sendberry service. | 
**sendberry_password** | **str** | The password for the Sendberry service. Stored in encrypted format. | 
**sendberry_username** | **str** | The username for the Sendberry service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sendberry_jsonld_post import TransportSendberryJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSendberryJsonldPost from a JSON string
transport_sendberry_jsonld_post_instance = TransportSendberryJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportSendberryJsonldPost.to_json())

# convert the object into a dict
transport_sendberry_jsonld_post_dict = transport_sendberry_jsonld_post_instance.to_dict()
# create an instance of TransportSendberryJsonldPost from a dict
transport_sendberry_jsonld_post_from_dict = TransportSendberryJsonldPost.from_dict(transport_sendberry_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


