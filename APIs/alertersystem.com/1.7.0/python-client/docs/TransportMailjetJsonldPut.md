# TransportMailjetJsonldPut

The TransportMailjet resource is a collection of transports that carry dispatched alerts to the external MailJet service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mailjet_from** | **str** | The alphanumeric sender ID for the MailJet service. | 
**mailjet_token** | **str** | The SMS auth token for the MailJet service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mailjet_jsonld_put import TransportMailjetJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMailjetJsonldPut from a JSON string
transport_mailjet_jsonld_put_instance = TransportMailjetJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportMailjetJsonldPut.to_json())

# convert the object into a dict
transport_mailjet_jsonld_put_dict = transport_mailjet_jsonld_put_instance.to_dict()
# create an instance of TransportMailjetJsonldPut from a dict
transport_mailjet_jsonld_put_from_dict = TransportMailjetJsonldPut.from_dict(transport_mailjet_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


