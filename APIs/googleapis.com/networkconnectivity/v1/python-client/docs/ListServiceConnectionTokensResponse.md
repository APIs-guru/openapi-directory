# ListServiceConnectionTokensResponse

Response for ListServiceConnectionTokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. | [optional] 
**service_connection_tokens** | [**List[ServiceConnectionToken]**](ServiceConnectionToken.md) | ServiceConnectionTokens to be returned. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_service_connection_tokens_response import ListServiceConnectionTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceConnectionTokensResponse from a JSON string
list_service_connection_tokens_response_instance = ListServiceConnectionTokensResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceConnectionTokensResponse.to_json())

# convert the object into a dict
list_service_connection_tokens_response_dict = list_service_connection_tokens_response_instance.to_dict()
# create an instance of ListServiceConnectionTokensResponse from a dict
list_service_connection_tokens_response_from_dict = ListServiceConnectionTokensResponse.from_dict(list_service_connection_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


