# MessengerAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The provider access token | 
**api_key** | **str** | The external api key for this account | 
**applications** | **List[str]** | The array of associated application ids | [optional] 
**external_id** | **str** | The external identifier for this account | 
**name** | **str** | The account name | [optional] 
**provider** | **str** | The provider (will be &#x60;messenger&#x60;). | 

## Example

```python
from openapi_client.models.messenger_account_response import MessengerAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessengerAccountResponse from a JSON string
messenger_account_response_instance = MessengerAccountResponse.from_json(json)
# print the JSON string representation of the object
print(MessengerAccountResponse.to_json())

# convert the object into a dict
messenger_account_response_dict = messenger_account_response_instance.to_dict()
# create an instance of MessengerAccountResponse from a dict
messenger_account_response_from_dict = MessengerAccountResponse.from_dict(messenger_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


