# AlertingAccessTokenResponse

Access token details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token_id** | **str** | ID of the access token | 
**external_account_name** | **str** | The account name of external user that used to authenticate against the external oauth provider or basic auth | 
**external_provider_name** | **str** | External provider name | 
**external_user_email** | **str** | The email of external user that used to authenticate aginst the external oauth provider | 

## Example

```python
from openapi_client.models.alerting_access_token_response import AlertingAccessTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingAccessTokenResponse from a JSON string
alerting_access_token_response_instance = AlertingAccessTokenResponse.from_json(json)
# print the JSON string representation of the object
print(AlertingAccessTokenResponse.to_json())

# convert the object into a dict
alerting_access_token_response_dict = alerting_access_token_response_instance.to_dict()
# create an instance of AlertingAccessTokenResponse from a dict
alerting_access_token_response_from_dict = AlertingAccessTokenResponse.from_dict(alerting_access_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


