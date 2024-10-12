# TransportIqsmsPost

The TransportIqsms resource is a collection of transports that carry dispatched alerts to the external Iqsms service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**iqsms_from** | **str** | The sender value for the Iqsms service. | 
**iqsms_login** | **str** | The login for the Iqsms service. | 
**iqsms_password** | **str** | The password for the Iqsms service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_iqsms_post import TransportIqsmsPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportIqsmsPost from a JSON string
transport_iqsms_post_instance = TransportIqsmsPost.from_json(json)
# print the JSON string representation of the object
print(TransportIqsmsPost.to_json())

# convert the object into a dict
transport_iqsms_post_dict = transport_iqsms_post_instance.to_dict()
# create an instance of TransportIqsmsPost from a dict
transport_iqsms_post_from_dict = TransportIqsmsPost.from_dict(transport_iqsms_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


