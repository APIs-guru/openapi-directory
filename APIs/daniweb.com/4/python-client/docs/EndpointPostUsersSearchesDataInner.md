# EndpointPostUsersSearchesDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevance** | [**EndpointPostConversationsIDSearchesDataInnerRelevance**](EndpointPostConversationsIDSearchesDataInnerRelevance.md) |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_searches_data_inner import EndpointPostUsersSearchesDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersSearchesDataInner from a JSON string
endpoint_post_users_searches_data_inner_instance = EndpointPostUsersSearchesDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersSearchesDataInner.to_json())

# convert the object into a dict
endpoint_post_users_searches_data_inner_dict = endpoint_post_users_searches_data_inner_instance.to_dict()
# create an instance of EndpointPostUsersSearchesDataInner from a dict
endpoint_post_users_searches_data_inner_from_dict = EndpointPostUsersSearchesDataInner.from_dict(endpoint_post_users_searches_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


