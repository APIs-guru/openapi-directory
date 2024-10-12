# TransportSendinblueJsonldPost

The TransportSendinblue resource is a collection of transports that carry dispatched alerts to the external Sendinblue service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**sendinblue_api_key** | **str** | The API key for the Sendinblue service. Stored in encrypted format. | 
**sendinblue_sender_phone** | **str** | The sender phone number for the Sendinblue service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sendinblue_jsonld_post import TransportSendinblueJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSendinblueJsonldPost from a JSON string
transport_sendinblue_jsonld_post_instance = TransportSendinblueJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportSendinblueJsonldPost.to_json())

# convert the object into a dict
transport_sendinblue_jsonld_post_dict = transport_sendinblue_jsonld_post_instance.to_dict()
# create an instance of TransportSendinblueJsonldPost from a dict
transport_sendinblue_jsonld_post_from_dict = TransportSendinblueJsonldPost.from_dict(transport_sendinblue_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


