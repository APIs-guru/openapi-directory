# GoogleAccount

Describes authentication configuration that uses a Google account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs. | [optional] 
**username** | **str** | Required. The user name of the Google account. | [optional] 

## Example

```python
from openapi_client.models.google_account import GoogleAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAccount from a JSON string
google_account_instance = GoogleAccount.from_json(json)
# print the JSON string representation of the object
print(GoogleAccount.to_json())

# convert the object into a dict
google_account_dict = google_account_instance.to_dict()
# create an instance of GoogleAccount from a dict
google_account_from_dict = GoogleAccount.from_dict(google_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


