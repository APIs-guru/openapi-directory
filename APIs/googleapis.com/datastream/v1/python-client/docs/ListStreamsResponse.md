# ListStreamsResponse

Response message for listing streams.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**streams** | [**List[Stream]**](Stream.md) | List of streams | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_streams_response import ListStreamsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStreamsResponse from a JSON string
list_streams_response_instance = ListStreamsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStreamsResponse.to_json())

# convert the object into a dict
list_streams_response_dict = list_streams_response_instance.to_dict()
# create an instance of ListStreamsResponse from a dict
list_streams_response_from_dict = ListStreamsResponse.from_dict(list_streams_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


