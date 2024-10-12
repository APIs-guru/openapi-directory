# TransportLinkedInJsonldPut

The TransportLinkedIn resource is a collection of transports that carry dispatched alerts to the external LinkedIn service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**linked_in_token** | **str** | The access token for the LinkedIn service. Stored in encrypted format. | 
**linked_in_user_id** | **str** | The user ID for the LinkedIn service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_linked_in_jsonld_put import TransportLinkedInJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportLinkedInJsonldPut from a JSON string
transport_linked_in_jsonld_put_instance = TransportLinkedInJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportLinkedInJsonldPut.to_json())

# convert the object into a dict
transport_linked_in_jsonld_put_dict = transport_linked_in_jsonld_put_instance.to_dict()
# create an instance of TransportLinkedInJsonldPut from a dict
transport_linked_in_jsonld_put_from_dict = TransportLinkedInJsonldPut.from_dict(transport_linked_in_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


