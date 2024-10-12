# TransportRingCentralJsonldPost

The TransportRingCentral resource is a collection of transports that carry dispatched alerts to the external Ring Central service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**ring_central_api_token** | **str** | The API token for the Ring Central service. Stored in encrypted format. | 
**ring_central_from** | **str** | The sender value for the Ring Central service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_ring_central_jsonld_post import TransportRingCentralJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportRingCentralJsonldPost from a JSON string
transport_ring_central_jsonld_post_instance = TransportRingCentralJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportRingCentralJsonldPost.to_json())

# convert the object into a dict
transport_ring_central_jsonld_post_dict = transport_ring_central_jsonld_post_instance.to_dict()
# create an instance of TransportRingCentralJsonldPost from a dict
transport_ring_central_jsonld_post_from_dict = TransportRingCentralJsonldPost.from_dict(transport_ring_central_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


