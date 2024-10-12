# TransportOpsgenieJsonldPost

The TransportOpsgenie resource is a collection of transports that carry dispatched alerts to the external Opsgenie service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**opsgenie_alias** | **str** | The alias for the Opsgenie service. | [optional] 
**opsgenie_api_key** | **str** | The API key for the Opsgenie service. Stored in encrypted format. | 
**opsgenie_entity** | **str** | The entity for the Opsgenie service. | [optional] 
**opsgenie_note** | **str** | The note for the Opsgenie service. | [optional] 
**opsgenie_priority** | **str** | The priority for the Opsgenie service. | [optional] 
**opsgenie_user** | **str** | The user for the Opsgenie service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_opsgenie_jsonld_post import TransportOpsgenieJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOpsgenieJsonldPost from a JSON string
transport_opsgenie_jsonld_post_instance = TransportOpsgenieJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportOpsgenieJsonldPost.to_json())

# convert the object into a dict
transport_opsgenie_jsonld_post_dict = transport_opsgenie_jsonld_post_instance.to_dict()
# create an instance of TransportOpsgenieJsonldPost from a dict
transport_opsgenie_jsonld_post_from_dict = TransportOpsgenieJsonldPost.from_dict(transport_opsgenie_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


