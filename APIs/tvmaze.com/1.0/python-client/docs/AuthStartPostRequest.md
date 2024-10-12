# AuthStartPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email address | [optional] 
**email_confirmation** | **bool** | Whether to email the user a confirmation link | [optional] [default to True]

## Example

```python
from openapi_client.models.auth_start_post_request import AuthStartPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthStartPostRequest from a JSON string
auth_start_post_request_instance = AuthStartPostRequest.from_json(json)
# print the JSON string representation of the object
print(AuthStartPostRequest.to_json())

# convert the object into a dict
auth_start_post_request_dict = auth_start_post_request_instance.to_dict()
# create an instance of AuthStartPostRequest from a dict
auth_start_post_request_from_dict = AuthStartPostRequest.from_dict(auth_start_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


