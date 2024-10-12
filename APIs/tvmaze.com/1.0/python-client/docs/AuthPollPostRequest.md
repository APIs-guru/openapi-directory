# AuthPollPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.auth_poll_post_request import AuthPollPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthPollPostRequest from a JSON string
auth_poll_post_request_instance = AuthPollPostRequest.from_json(json)
# print the JSON string representation of the object
print(AuthPollPostRequest.to_json())

# convert the object into a dict
auth_poll_post_request_dict = auth_poll_post_request_instance.to_dict()
# create an instance of AuthPollPostRequest from a dict
auth_poll_post_request_from_dict = AuthPollPostRequest.from_dict(auth_poll_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


