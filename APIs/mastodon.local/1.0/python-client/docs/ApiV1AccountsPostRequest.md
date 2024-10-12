# ApiV1AccountsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement** | **bool** | Whether the user agrees to the local rules, terms, and policies. These should be presented to the user in order to allow them to consent before setting this parameter to TRUE. | 
**email** | **str** | The email address to be used for login | 
**locale** | **str** | The language of the confirmation email that will be sent | 
**password** | **str** | The password to be used for login | 
**reason** | **str** | Text that will be reviewed by moderators if registrations require manual approval. | [optional] 
**username** | **str** | The desired username for the account | 

## Example

```python
from openapi_client.models.api_v1_accounts_post_request import ApiV1AccountsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsPostRequest from a JSON string
api_v1_accounts_post_request_instance = ApiV1AccountsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsPostRequest.to_json())

# convert the object into a dict
api_v1_accounts_post_request_dict = api_v1_accounts_post_request_instance.to_dict()
# create an instance of ApiV1AccountsPostRequest from a dict
api_v1_accounts_post_request_from_dict = ApiV1AccountsPostRequest.from_dict(api_v1_accounts_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


