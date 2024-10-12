# GetEventSchemaRequest

Request to get the event schema of all events within a given search span.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_span** | [**DateTimeRange**](DateTimeRange.md) |  | 

## Example

```python
from openapi_client.models.get_event_schema_request import GetEventSchemaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetEventSchemaRequest from a JSON string
get_event_schema_request_instance = GetEventSchemaRequest.from_json(json)
# print the JSON string representation of the object
print(GetEventSchemaRequest.to_json())

# convert the object into a dict
get_event_schema_request_dict = get_event_schema_request_instance.to_dict()
# create an instance of GetEventSchemaRequest from a dict
get_event_schema_request_from_dict = GetEventSchemaRequest.from_dict(get_event_schema_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


