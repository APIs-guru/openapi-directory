# EndpointPostConversationsIDSearches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostConversationsIDSearchesDataInner]**](EndpointPostConversationsIDSearchesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_conversations_id_searches import EndpointPostConversationsIDSearches

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostConversationsIDSearches from a JSON string
endpoint_post_conversations_id_searches_instance = EndpointPostConversationsIDSearches.from_json(json)
# print the JSON string representation of the object
print(EndpointPostConversationsIDSearches.to_json())

# convert the object into a dict
endpoint_post_conversations_id_searches_dict = endpoint_post_conversations_id_searches_instance.to_dict()
# create an instance of EndpointPostConversationsIDSearches from a dict
endpoint_post_conversations_id_searches_from_dict = EndpointPostConversationsIDSearches.from_dict(endpoint_post_conversations_id_searches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


