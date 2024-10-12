# EventingRuntimeData

Eventing runtime data has the details related to eventing managed by the system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events_listener_endpoint** | **str** | Output only. Events listener endpoint. The value will populated after provisioning the events listener. | [optional] [readonly] 
**events_listener_psc_sa** | **str** | Output only. Events listener PSC Service attachment. The value will be populated after provisioning the events listener with private connectivity enabled. | [optional] [readonly] 
**status** | [**EventingStatus**](EventingStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.eventing_runtime_data import EventingRuntimeData

# TODO update the JSON string below
json = "{}"
# create an instance of EventingRuntimeData from a JSON string
eventing_runtime_data_instance = EventingRuntimeData.from_json(json)
# print the JSON string representation of the object
print(EventingRuntimeData.to_json())

# convert the object into a dict
eventing_runtime_data_dict = eventing_runtime_data_instance.to_dict()
# create an instance of EventingRuntimeData from a dict
eventing_runtime_data_from_dict = EventingRuntimeData.from_dict(eventing_runtime_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


