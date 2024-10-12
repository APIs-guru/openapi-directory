# ApiV1AdminAccountsIdActionPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **str** | ID of an associated report that caused this action to be taken | [optional] 
**send_email_notification** | **bool** | Whether an email should be sent to the user with the above information. | [optional] 
**text** | **str** | Additional text for clarification of why this action was taken | [optional] 
**type** | **str** | Type of action to be taken. Enumerable oneOf: none disable silence suspend | [optional] 
**warning_preset_id** | **str** | ID of a preset warning | [optional] 

## Example

```python
from openapi_client.models.api_v1_admin_accounts_id_action_post_request import ApiV1AdminAccountsIdActionPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AdminAccountsIdActionPostRequest from a JSON string
api_v1_admin_accounts_id_action_post_request_instance = ApiV1AdminAccountsIdActionPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AdminAccountsIdActionPostRequest.to_json())

# convert the object into a dict
api_v1_admin_accounts_id_action_post_request_dict = api_v1_admin_accounts_id_action_post_request_instance.to_dict()
# create an instance of ApiV1AdminAccountsIdActionPostRequest from a dict
api_v1_admin_accounts_id_action_post_request_from_dict = ApiV1AdminAccountsIdActionPostRequest.from_dict(api_v1_admin_accounts_id_action_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


