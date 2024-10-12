# TransportEmailJsonldPost

The TransportEmail resource is a collection of transports that carry dispatched alerts to external SMTP email services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**email_from_address** | **str** | The sender email address for the SMTP Email service. | 
**email_from_name** | **str** | The sender name for the SMTP Email service. | 
**email_password** | **str** | The password for the SMTP Email service. Stored in encrypted format. | 
**email_port** | **int** | The port for the SMTP Email service. | 
**email_server** | **str** | The server for the SMTP Email service. | 
**email_username** | **str** | The username for the SMTP Email service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_email_jsonld_post import TransportEmailJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportEmailJsonldPost from a JSON string
transport_email_jsonld_post_instance = TransportEmailJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportEmailJsonldPost.to_json())

# convert the object into a dict
transport_email_jsonld_post_dict = transport_email_jsonld_post_instance.to_dict()
# create an instance of TransportEmailJsonldPost from a dict
transport_email_jsonld_post_from_dict = TransportEmailJsonldPost.from_dict(transport_email_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


