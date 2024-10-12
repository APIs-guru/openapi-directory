# TransportContactEveryoneGet

The TransportContactEveryone resource is a collection of transports that carry dispatched alerts to the external Contact Everyone service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_everyone_category** | **str** | The label of the category that will be displayed in the external service event logs of the ContactEveryone service. | [optional] 
**contact_everyone_diffusion_name** | **str** | The label of the diffusion that will be displayed in the external service event logs of the ContactEveryone service. | [optional] 
**contact_everyone_token** | **str** | The token for the Contact Everyone service. Stored in encrypted format. | 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_contact_everyone_get import TransportContactEveryoneGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportContactEveryoneGet from a JSON string
transport_contact_everyone_get_instance = TransportContactEveryoneGet.from_json(json)
# print the JSON string representation of the object
print(TransportContactEveryoneGet.to_json())

# convert the object into a dict
transport_contact_everyone_get_dict = transport_contact_everyone_get_instance.to_dict()
# create an instance of TransportContactEveryoneGet from a dict
transport_contact_everyone_get_from_dict = TransportContactEveryoneGet.from_dict(transport_contact_everyone_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


