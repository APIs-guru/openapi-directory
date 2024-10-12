# ApiV1AccountsIdFollowPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notify** | **bool** | Receive notifications when this account posts a status? Defaults to false. | [optional] [default to False]
**reblogs** | **bool** | Receive this account&#39;s reblogs in home timeline? Defaults to true. | [optional] [default to True]

## Example

```python
from openapi_client.models.api_v1_accounts_id_follow_post_request import ApiV1AccountsIdFollowPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsIdFollowPostRequest from a JSON string
api_v1_accounts_id_follow_post_request_instance = ApiV1AccountsIdFollowPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsIdFollowPostRequest.to_json())

# convert the object into a dict
api_v1_accounts_id_follow_post_request_dict = api_v1_accounts_id_follow_post_request_instance.to_dict()
# create an instance of ApiV1AccountsIdFollowPostRequest from a dict
api_v1_accounts_id_follow_post_request_from_dict = ApiV1AccountsIdFollowPostRequest.from_dict(api_v1_accounts_id_follow_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


