# EventCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | **int** |  | [optional] 
**comments** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.event_counts import EventCounts

# TODO update the JSON string below
json = "{}"
# create an instance of EventCounts from a JSON string
event_counts_instance = EventCounts.from_json(json)
# print the JSON string representation of the object
print(EventCounts.to_json())

# convert the object into a dict
event_counts_dict = event_counts_instance.to_dict()
# create an instance of EventCounts from a dict
event_counts_from_dict = EventCounts.from_dict(event_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


