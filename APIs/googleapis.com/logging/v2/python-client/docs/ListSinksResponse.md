# ListSinksResponse

Result returned from ListSinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. | [optional] 
**sinks** | [**List[LogSink]**](LogSink.md) | A list of sinks. | [optional] 

## Example

```python
from openapi_client.models.list_sinks_response import ListSinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSinksResponse from a JSON string
list_sinks_response_instance = ListSinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListSinksResponse.to_json())

# convert the object into a dict
list_sinks_response_dict = list_sinks_response_instance.to_dict()
# create an instance of ListSinksResponse from a dict
list_sinks_response_from_dict = ListSinksResponse.from_dict(list_sinks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


