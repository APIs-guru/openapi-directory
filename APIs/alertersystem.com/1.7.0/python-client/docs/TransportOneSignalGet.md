# TransportOneSignalGet

The TransportOneSignal resource is a collection of transports that carry dispatched alerts to the external One Signal service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**one_signal_api_key** | **str** | The API (auth) key for the One Signal service. Stored in encrypted format. | 
**one_signal_app_id** | **str** | The App ID for the One Signal service. | 
**one_signal_default_recipient_id** | **str** | The optional default recipient ID for the One Signal service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_one_signal_get import TransportOneSignalGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOneSignalGet from a JSON string
transport_one_signal_get_instance = TransportOneSignalGet.from_json(json)
# print the JSON string representation of the object
print(TransportOneSignalGet.to_json())

# convert the object into a dict
transport_one_signal_get_dict = transport_one_signal_get_instance.to_dict()
# create an instance of TransportOneSignalGet from a dict
transport_one_signal_get_from_dict = TransportOneSignalGet.from_dict(transport_one_signal_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


