# TransportAlertaJsonldPost

The TransportAlerta resource is a collection of transports that carry dispatched alerts to the external Alerta service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerta_api_key** | **str** | The API key for the Alerta service. | 
**alerta_correlate** | **str** | The comma-separated list of related event names for the Alerta service. | [optional] 
**alerta_environment** | **str** | The environment value for the Alerta service. | [optional] 
**alerta_event** | **str** | The event value for the Alerta service. | 
**alerta_group** | **str** | The group value for the Alerta service. | [optional] 
**alerta_host** | **str** | The host name for the Alerta service (omit the \&quot;https://\&quot; part). | 
**alerta_origin** | **str** | The origin value for the Alerta service. | [optional] 
**alerta_resource** | **str** | The resource value for the Alerta service. | 
**alerta_service** | **str** | The comma-separated list of affected services for the Alerta service. | [optional] 
**alerta_severity** | **str** | The severity value for the Alerta service. | [optional] 
**alerta_status** | **str** | The status value for the Alerta service. | [optional] 
**alerta_tags** | **str** | The comma-separated list of tags for the Alerta service. | [optional] 
**alerta_type** | **str** | The type value for the Alerta service. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_alerta_jsonld_post import TransportAlertaJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAlertaJsonldPost from a JSON string
transport_alerta_jsonld_post_instance = TransportAlertaJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportAlertaJsonldPost.to_json())

# convert the object into a dict
transport_alerta_jsonld_post_dict = transport_alerta_jsonld_post_instance.to_dict()
# create an instance of TransportAlertaJsonldPost from a dict
transport_alerta_jsonld_post_from_dict = TransportAlertaJsonldPost.from_dict(transport_alerta_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


