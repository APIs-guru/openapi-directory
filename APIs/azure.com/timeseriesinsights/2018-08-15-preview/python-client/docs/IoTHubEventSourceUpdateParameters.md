# IoTHubEventSourceUpdateParameters

Parameters supplied to the Update Event Source operation to update an IoTHub event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTHubEventSourceMutableProperties**](IoTHubEventSourceMutableProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the event source. | [optional] 

## Example

```python
from openapi_client.models.io_t_hub_event_source_update_parameters import IoTHubEventSourceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of IoTHubEventSourceUpdateParameters from a JSON string
io_t_hub_event_source_update_parameters_instance = IoTHubEventSourceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(IoTHubEventSourceUpdateParameters.to_json())

# convert the object into a dict
io_t_hub_event_source_update_parameters_dict = io_t_hub_event_source_update_parameters_instance.to_dict()
# create an instance of IoTHubEventSourceUpdateParameters from a dict
io_t_hub_event_source_update_parameters_from_dict = IoTHubEventSourceUpdateParameters.from_dict(io_t_hub_event_source_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


