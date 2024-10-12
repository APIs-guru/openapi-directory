# MessageOpenSearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opens** | [**List[ExtendedMessageOpenEventInformation]**](ExtendedMessageOpenEventInformation.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.message_open_search_response import MessageOpenSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageOpenSearchResponse from a JSON string
message_open_search_response_instance = MessageOpenSearchResponse.from_json(json)
# print the JSON string representation of the object
print(MessageOpenSearchResponse.to_json())

# convert the object into a dict
message_open_search_response_dict = message_open_search_response_instance.to_dict()
# create an instance of MessageOpenSearchResponse from a dict
message_open_search_response_from_dict = MessageOpenSearchResponse.from_dict(message_open_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


