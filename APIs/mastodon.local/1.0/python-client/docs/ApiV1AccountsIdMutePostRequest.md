# ApiV1AccountsIdMutePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | How long the mute should last, in seconds. Defaults to 0 (indefinite). | [optional] [default to 0]
**notifications** | **bool** | Mute notifications in addition to statuses? Defaults to true. | [optional] [default to True]

## Example

```python
from openapi_client.models.api_v1_accounts_id_mute_post_request import ApiV1AccountsIdMutePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsIdMutePostRequest from a JSON string
api_v1_accounts_id_mute_post_request_instance = ApiV1AccountsIdMutePostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsIdMutePostRequest.to_json())

# convert the object into a dict
api_v1_accounts_id_mute_post_request_dict = api_v1_accounts_id_mute_post_request_instance.to_dict()
# create an instance of ApiV1AccountsIdMutePostRequest from a dict
api_v1_accounts_id_mute_post_request_from_dict = ApiV1AccountsIdMutePostRequest.from_dict(api_v1_accounts_id_mute_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


