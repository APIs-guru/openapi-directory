# ListWatchesResponse

The response of a ListWatchesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**watches** | [**List[Watch]**](Watch.md) | The returned watches. | [optional] 

## Example

```python
from openapi_client.models.list_watches_response import ListWatchesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWatchesResponse from a JSON string
list_watches_response_instance = ListWatchesResponse.from_json(json)
# print the JSON string representation of the object
print(ListWatchesResponse.to_json())

# convert the object into a dict
list_watches_response_dict = list_watches_response_instance.to_dict()
# create an instance of ListWatchesResponse from a dict
list_watches_response_from_dict = ListWatchesResponse.from_dict(list_watches_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


