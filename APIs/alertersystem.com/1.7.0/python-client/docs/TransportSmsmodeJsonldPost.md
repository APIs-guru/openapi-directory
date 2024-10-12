# TransportSmsmodeJsonldPost

The TransportSmsmode resource is a collection of transports that carry dispatched alerts to the external Smsmode service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**smsmode_api_key** | **str** | The API key for the Smsmode service. Stored in encrypted format. | 
**smsmode_from** | **str** | The from value for the Smsmode service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsmode_jsonld_post import TransportSmsmodeJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsmodeJsonldPost from a JSON string
transport_smsmode_jsonld_post_instance = TransportSmsmodeJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportSmsmodeJsonldPost.to_json())

# convert the object into a dict
transport_smsmode_jsonld_post_dict = transport_smsmode_jsonld_post_instance.to_dict()
# create an instance of TransportSmsmodeJsonldPost from a dict
transport_smsmode_jsonld_post_from_dict = TransportSmsmodeJsonldPost.from_dict(transport_smsmode_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


