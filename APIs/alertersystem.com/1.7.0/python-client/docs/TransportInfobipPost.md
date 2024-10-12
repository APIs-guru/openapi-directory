# TransportInfobipPost

The TransportInfobip resource is a collection of transports that carry dispatched alerts to the external Infobip service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**infobip_auth_token** | **str** | The auth token for the Infobip service. Stored in encrypted format. | 
**infobip_from** | **str** | The sender value for the Infobip service. | 
**infobip_host** | **str** | The host for the Infobip service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_infobip_post import TransportInfobipPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportInfobipPost from a JSON string
transport_infobip_post_instance = TransportInfobipPost.from_json(json)
# print the JSON string representation of the object
print(TransportInfobipPost.to_json())

# convert the object into a dict
transport_infobip_post_dict = transport_infobip_post_instance.to_dict()
# create an instance of TransportInfobipPost from a dict
transport_infobip_post_from_dict = TransportInfobipPost.from_dict(transport_infobip_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


