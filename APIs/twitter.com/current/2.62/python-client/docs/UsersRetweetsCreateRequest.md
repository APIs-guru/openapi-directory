# UsersRetweetsCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.users_retweets_create_request import UsersRetweetsCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UsersRetweetsCreateRequest from a JSON string
users_retweets_create_request_instance = UsersRetweetsCreateRequest.from_json(json)
# print the JSON string representation of the object
print(UsersRetweetsCreateRequest.to_json())

# convert the object into a dict
users_retweets_create_request_dict = users_retweets_create_request_instance.to_dict()
# create an instance of UsersRetweetsCreateRequest from a dict
users_retweets_create_request_from_dict = UsersRetweetsCreateRequest.from_dict(users_retweets_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


