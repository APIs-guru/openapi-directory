# TransportContactEveryonePut

The TransportContactEveryone resource is a collection of transports that carry dispatched alerts to the external Contact Everyone service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_everyone_category** | **str** | The label of the category that will be displayed in the external service event logs of the ContactEveryone service. | [optional] 
**contact_everyone_diffusion_name** | **str** | The label of the diffusion that will be displayed in the external service event logs of the ContactEveryone service. | [optional] 
**contact_everyone_token** | **str** | The token for the Contact Everyone service. Stored in encrypted format. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_contact_everyone_put import TransportContactEveryonePut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportContactEveryonePut from a JSON string
transport_contact_everyone_put_instance = TransportContactEveryonePut.from_json(json)
# print the JSON string representation of the object
print(TransportContactEveryonePut.to_json())

# convert the object into a dict
transport_contact_everyone_put_dict = transport_contact_everyone_put_instance.to_dict()
# create an instance of TransportContactEveryonePut from a dict
transport_contact_everyone_put_from_dict = TransportContactEveryonePut.from_dict(transport_contact_everyone_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


