# ListLiveStreamsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[LiveStream]**](LiveStream.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_live_streams_response import ListLiveStreamsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLiveStreamsResponse from a JSON string
list_live_streams_response_instance = ListLiveStreamsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLiveStreamsResponse.to_json())

# convert the object into a dict
list_live_streams_response_dict = list_live_streams_response_instance.to_dict()
# create an instance of ListLiveStreamsResponse from a dict
list_live_streams_response_from_dict = ListLiveStreamsResponse.from_dict(list_live_streams_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


