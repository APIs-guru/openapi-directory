# EventHubOutputDataSource

Describes an Event Hub output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubOutputDataSourceProperties**](EventHubOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_hub_output_data_source import EventHubOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubOutputDataSource from a JSON string
event_hub_output_data_source_instance = EventHubOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(EventHubOutputDataSource.to_json())

# convert the object into a dict
event_hub_output_data_source_dict = event_hub_output_data_source_instance.to_dict()
# create an instance of EventHubOutputDataSource from a dict
event_hub_output_data_source_from_dict = EventHubOutputDataSource.from_dict(event_hub_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


