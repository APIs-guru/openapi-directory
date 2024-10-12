# AccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The provider access token (only for &#x60;messenger&#x60;) | [optional] 
**api_key** | **str** | The external api key for this account | 
**applications** | **List[str]** | The array of associated application ids | [optional] 
**external_id** | **str** | The external identifier for this account | 
**name** | **str** | The account name | [optional] 
**provider** | **str** | The provider (will be one of &#x60;messenger, viber_service_msg, whatsapp&#x60;). | 

## Example

```python
from openapi_client.models.account_response import AccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountResponse from a JSON string
account_response_instance = AccountResponse.from_json(json)
# print the JSON string representation of the object
print(AccountResponse.to_json())

# convert the object into a dict
account_response_dict = account_response_instance.to_dict()
# create an instance of AccountResponse from a dict
account_response_from_dict = AccountResponse.from_dict(account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


