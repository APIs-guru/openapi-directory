# EventGrid

properties related to eventgrid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic_endpoint** | **str** | EventGrid Topic Endpoint | [optional] 
**access_key1** | **str** | EventGrid secondary accesskey. Will be obfuscated during read | [optional] 
**access_key2** | **str** | EventGrid secondary accesskey. Will be obfuscated during read | [optional] 

## Example

```python
from openapi_client.models.event_grid import EventGrid

# TODO update the JSON string below
json = "{}"
# create an instance of EventGrid from a JSON string
event_grid_instance = EventGrid.from_json(json)
# print the JSON string representation of the object
print(EventGrid.to_json())

# convert the object into a dict
event_grid_dict = event_grid_instance.to_dict()
# create an instance of EventGrid from a dict
event_grid_from_dict = EventGrid.from_dict(event_grid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


