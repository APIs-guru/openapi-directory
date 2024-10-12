# EventHubStreamInputDataSource

Describes an Event Hub input data source that contains stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubStreamInputDataSourceProperties**](EventHubStreamInputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_hub_stream_input_data_source import EventHubStreamInputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubStreamInputDataSource from a JSON string
event_hub_stream_input_data_source_instance = EventHubStreamInputDataSource.from_json(json)
# print the JSON string representation of the object
print(EventHubStreamInputDataSource.to_json())

# convert the object into a dict
event_hub_stream_input_data_source_dict = event_hub_stream_input_data_source_instance.to_dict()
# create an instance of EventHubStreamInputDataSource from a dict
event_hub_stream_input_data_source_from_dict = EventHubStreamInputDataSource.from_dict(event_hub_stream_input_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


