# EndpointPostConversationsSearches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostConversationsIDSearchesDataInner]**](EndpointPostConversationsIDSearchesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_conversations_searches import EndpointPostConversationsSearches

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostConversationsSearches from a JSON string
endpoint_post_conversations_searches_instance = EndpointPostConversationsSearches.from_json(json)
# print the JSON string representation of the object
print(EndpointPostConversationsSearches.to_json())

# convert the object into a dict
endpoint_post_conversations_searches_dict = endpoint_post_conversations_searches_instance.to_dict()
# create an instance of EndpointPostConversationsSearches from a dict
endpoint_post_conversations_searches_from_dict = EndpointPostConversationsSearches.from_dict(endpoint_post_conversations_searches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


