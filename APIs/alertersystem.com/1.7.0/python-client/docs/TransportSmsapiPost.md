# TransportSmsapiPost

The TransportSmsapi resource is a collection of transports that carry dispatched alerts to the external SMS API service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**smsapi_from** | **str** | The sender name for the SMS API service. | 
**smsapi_token** | **str** | The API token for the SMS API service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsapi_post import TransportSmsapiPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsapiPost from a JSON string
transport_smsapi_post_instance = TransportSmsapiPost.from_json(json)
# print the JSON string representation of the object
print(TransportSmsapiPost.to_json())

# convert the object into a dict
transport_smsapi_post_dict = transport_smsapi_post_instance.to_dict()
# create an instance of TransportSmsapiPost from a dict
transport_smsapi_post_from_dict = TransportSmsapiPost.from_dict(transport_smsapi_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


