# UsersRetweetsCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UsersRetweetsCreateResponseData**](UsersRetweetsCreateResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_retweets_create_response import UsersRetweetsCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersRetweetsCreateResponse from a JSON string
users_retweets_create_response_instance = UsersRetweetsCreateResponse.from_json(json)
# print the JSON string representation of the object
print(UsersRetweetsCreateResponse.to_json())

# convert the object into a dict
users_retweets_create_response_dict = users_retweets_create_response_instance.to_dict()
# create an instance of UsersRetweetsCreateResponse from a dict
users_retweets_create_response_from_dict = UsersRetweetsCreateResponse.from_dict(users_retweets_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


