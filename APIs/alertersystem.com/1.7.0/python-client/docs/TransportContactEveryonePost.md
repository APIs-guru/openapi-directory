# TransportContactEveryonePost

The TransportContactEveryone resource is a collection of transports that carry dispatched alerts to the external Contact Everyone service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_everyone_category** | **str** | The label of the category that will be displayed in the external service event logs of the ContactEveryone service. | [optional] 
**contact_everyone_diffusion_name** | **str** | The label of the diffusion that will be displayed in the external service event logs of the ContactEveryone service. | [optional] 
**contact_everyone_token** | **str** | The token for the Contact Everyone service. Stored in encrypted format. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_contact_everyone_post import TransportContactEveryonePost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportContactEveryonePost from a JSON string
transport_contact_everyone_post_instance = TransportContactEveryonePost.from_json(json)
# print the JSON string representation of the object
print(TransportContactEveryonePost.to_json())

# convert the object into a dict
transport_contact_everyone_post_dict = transport_contact_everyone_post_instance.to_dict()
# create an instance of TransportContactEveryonePost from a dict
transport_contact_everyone_post_from_dict = TransportContactEveryonePost.from_dict(transport_contact_everyone_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


