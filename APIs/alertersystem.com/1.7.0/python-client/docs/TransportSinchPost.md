# TransportSinchPost

The TransportSinch resource is a collection of transports that carry dispatched alerts to the external Sinch service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**sinch_auth_token** | **str** | The auth token for the Sinch service. Stored in encrypted format. | 
**sinch_from** | **str** | The sender for the Sinch service. | 
**sinch_service_plan_id** | **str** | The service plan ID for the Sinch service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sinch_post import TransportSinchPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSinchPost from a JSON string
transport_sinch_post_instance = TransportSinchPost.from_json(json)
# print the JSON string representation of the object
print(TransportSinchPost.to_json())

# convert the object into a dict
transport_sinch_post_dict = transport_sinch_post_instance.to_dict()
# create an instance of TransportSinchPost from a dict
transport_sinch_post_from_dict = TransportSinchPost.from_dict(transport_sinch_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


