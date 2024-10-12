# TransportMailjetJsonldPost

The TransportMailjet resource is a collection of transports that carry dispatched alerts to the external MailJet service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mailjet_from** | **str** | The alphanumeric sender ID for the MailJet service. | 
**mailjet_token** | **str** | The SMS auth token for the MailJet service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mailjet_jsonld_post import TransportMailjetJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMailjetJsonldPost from a JSON string
transport_mailjet_jsonld_post_instance = TransportMailjetJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportMailjetJsonldPost.to_json())

# convert the object into a dict
transport_mailjet_jsonld_post_dict = transport_mailjet_jsonld_post_instance.to_dict()
# create an instance of TransportMailjetJsonldPost from a dict
transport_mailjet_jsonld_post_from_dict = TransportMailjetJsonldPost.from_dict(transport_mailjet_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


