# ListCallbacksResponse

RPC response object for the ListCallbacks method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbacks** | [**List[Callback]**](Callback.md) | The callbacks which match the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_callbacks_response import ListCallbacksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCallbacksResponse from a JSON string
list_callbacks_response_instance = ListCallbacksResponse.from_json(json)
# print the JSON string representation of the object
print(ListCallbacksResponse.to_json())

# convert the object into a dict
list_callbacks_response_dict = list_callbacks_response_instance.to_dict()
# create an instance of ListCallbacksResponse from a dict
list_callbacks_response_from_dict = ListCallbacksResponse.from_dict(list_callbacks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


