# TransportPushyJsonldPut

The TransportPushy resource is a collection of transports that carry dispatched alerts to the external Pushy service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**pushy_api_key** | **str** | The API key for the Pushy service. Stored in encrypted format. | 
**pushy_to** | **str** | The recipient ID for the Pushy service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pushy_jsonld_put import TransportPushyJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPushyJsonldPut from a JSON string
transport_pushy_jsonld_put_instance = TransportPushyJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportPushyJsonldPut.to_json())

# convert the object into a dict
transport_pushy_jsonld_put_dict = transport_pushy_jsonld_put_instance.to_dict()
# create an instance of TransportPushyJsonldPut from a dict
transport_pushy_jsonld_put_from_dict = TransportPushyJsonldPut.from_dict(transport_pushy_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


