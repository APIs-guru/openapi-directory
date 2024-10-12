# TransportPushyPut

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
from openapi_client.models.transport_pushy_put import TransportPushyPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPushyPut from a JSON string
transport_pushy_put_instance = TransportPushyPut.from_json(json)
# print the JSON string representation of the object
print(TransportPushyPut.to_json())

# convert the object into a dict
transport_pushy_put_dict = transport_pushy_put_instance.to_dict()
# create an instance of TransportPushyPut from a dict
transport_pushy_put_from_dict = TransportPushyPut.from_dict(transport_pushy_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


