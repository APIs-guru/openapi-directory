# ListThreadsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token to retrieve the next page of results in the list. | [optional] 
**result_size_estimate** | **int** | Estimated total number of results. | [optional] 
**threads** | [**List[Thread]**](Thread.md) | List of threads. Note that each thread resource does not contain a list of &#x60;messages&#x60;. The list of &#x60;messages&#x60; for a given thread can be fetched using the threads.get method. | [optional] 

## Example

```python
from openapi_client.models.list_threads_response import ListThreadsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListThreadsResponse from a JSON string
list_threads_response_instance = ListThreadsResponse.from_json(json)
# print the JSON string representation of the object
print(ListThreadsResponse.to_json())

# convert the object into a dict
list_threads_response_dict = list_threads_response_instance.to_dict()
# create an instance of ListThreadsResponse from a dict
list_threads_response_from_dict = ListThreadsResponse.from_dict(list_threads_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


