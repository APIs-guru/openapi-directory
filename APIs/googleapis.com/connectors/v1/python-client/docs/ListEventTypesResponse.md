# ListEventTypesResponse

Response message for Connectors.ListEventTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | [**List[EventType]**](EventType.md) | A list of connector versions. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 

## Example

```python
from openapi_client.models.list_event_types_response import ListEventTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEventTypesResponse from a JSON string
list_event_types_response_instance = ListEventTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEventTypesResponse.to_json())

# convert the object into a dict
list_event_types_response_dict = list_event_types_response_instance.to_dict()
# create an instance of ListEventTypesResponse from a dict
list_event_types_response_from_dict = ListEventTypesResponse.from_dict(list_event_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


