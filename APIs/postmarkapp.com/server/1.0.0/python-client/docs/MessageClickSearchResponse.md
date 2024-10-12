# MessageClickSearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | [**List[ExtendedMessageClickEventInformation]**](ExtendedMessageClickEventInformation.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.message_click_search_response import MessageClickSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageClickSearchResponse from a JSON string
message_click_search_response_instance = MessageClickSearchResponse.from_json(json)
# print the JSON string representation of the object
print(MessageClickSearchResponse.to_json())

# convert the object into a dict
message_click_search_response_dict = message_click_search_response_instance.to_dict()
# create an instance of MessageClickSearchResponse from a dict
message_click_search_response_from_dict = MessageClickSearchResponse.from_dict(message_click_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


