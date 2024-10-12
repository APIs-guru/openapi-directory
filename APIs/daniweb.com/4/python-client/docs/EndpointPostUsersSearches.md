# EndpointPostUsersSearches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostUsersSearchesDataInner]**](EndpointPostUsersSearchesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_searches import EndpointPostUsersSearches

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersSearches from a JSON string
endpoint_post_users_searches_instance = EndpointPostUsersSearches.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersSearches.to_json())

# convert the object into a dict
endpoint_post_users_searches_dict = endpoint_post_users_searches_instance.to_dict()
# create an instance of EndpointPostUsersSearches from a dict
endpoint_post_users_searches_from_dict = EndpointPostUsersSearches.from_dict(endpoint_post_users_searches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


