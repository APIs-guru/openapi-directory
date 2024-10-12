# IoTHubEventSourceResource

An event source that receives its data from an Azure IoTHub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTHubEventSourceResourceProperties**](IoTHubEventSourceResourceProperties.md) |  | 
**kind** | **str** | The kind of the event source. | 
**location** | **str** | Resource location | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_hub_event_source_resource import IoTHubEventSourceResource

# TODO update the JSON string below
json = "{}"
# create an instance of IoTHubEventSourceResource from a JSON string
io_t_hub_event_source_resource_instance = IoTHubEventSourceResource.from_json(json)
# print the JSON string representation of the object
print(IoTHubEventSourceResource.to_json())

# convert the object into a dict
io_t_hub_event_source_resource_dict = io_t_hub_event_source_resource_instance.to_dict()
# create an instance of IoTHubEventSourceResource from a dict
io_t_hub_event_source_resource_from_dict = IoTHubEventSourceResource.from_dict(io_t_hub_event_source_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


