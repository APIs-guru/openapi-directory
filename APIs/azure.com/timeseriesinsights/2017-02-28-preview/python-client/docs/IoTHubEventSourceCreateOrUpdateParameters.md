# IoTHubEventSourceCreateOrUpdateParameters

Parameters supplied to the Create or Update Event Source operation for an IoTHub event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTHubEventSourceCreationProperties**](IoTHubEventSourceCreationProperties.md) |  | 
**kind** | **str** | The kind of the event source. | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.io_t_hub_event_source_create_or_update_parameters import IoTHubEventSourceCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of IoTHubEventSourceCreateOrUpdateParameters from a JSON string
io_t_hub_event_source_create_or_update_parameters_instance = IoTHubEventSourceCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(IoTHubEventSourceCreateOrUpdateParameters.to_json())

# convert the object into a dict
io_t_hub_event_source_create_or_update_parameters_dict = io_t_hub_event_source_create_or_update_parameters_instance.to_dict()
# create an instance of IoTHubEventSourceCreateOrUpdateParameters from a dict
io_t_hub_event_source_create_or_update_parameters_from_dict = IoTHubEventSourceCreateOrUpdateParameters.from_dict(io_t_hub_event_source_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


