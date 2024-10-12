# TransportMailjetJsonldGet

The TransportMailjet resource is a collection of transports that carry dispatched alerts to the external MailJet service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**mailjet_from** | **str** | The alphanumeric sender ID for the MailJet service. | 
**mailjet_token** | **str** | The SMS auth token for the MailJet service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mailjet_jsonld_get import TransportMailjetJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMailjetJsonldGet from a JSON string
transport_mailjet_jsonld_get_instance = TransportMailjetJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportMailjetJsonldGet.to_json())

# convert the object into a dict
transport_mailjet_jsonld_get_dict = transport_mailjet_jsonld_get_instance.to_dict()
# create an instance of TransportMailjetJsonldGet from a dict
transport_mailjet_jsonld_get_from_dict = TransportMailjetJsonldGet.from_dict(transport_mailjet_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


