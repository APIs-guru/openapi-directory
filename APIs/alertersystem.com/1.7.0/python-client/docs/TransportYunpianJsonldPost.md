# TransportYunpianJsonldPost

The TransportYunpian resource is a collection of transports that carry dispatched alerts to the external Yunpian service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 
**yunpian_api_key** | **str** | The API key for the Yunpian service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_yunpian_jsonld_post import TransportYunpianJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportYunpianJsonldPost from a JSON string
transport_yunpian_jsonld_post_instance = TransportYunpianJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportYunpianJsonldPost.to_json())

# convert the object into a dict
transport_yunpian_jsonld_post_dict = transport_yunpian_jsonld_post_instance.to_dict()
# create an instance of TransportYunpianJsonldPost from a dict
transport_yunpian_jsonld_post_from_dict = TransportYunpianJsonldPost.from_dict(transport_yunpian_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


