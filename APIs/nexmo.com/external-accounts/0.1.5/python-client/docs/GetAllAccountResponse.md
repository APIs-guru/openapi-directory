# GetAllAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The provider access token | 
**api_key** | **str** | The external api key for this account | 
**applications** | **List[str]** | The array of associated application ids | [optional] 
**external_id** | **str** | The external identifier for this account | 
**name** | **str** | The account name | [optional] 
**provider** | **str** | The provider (will be &#x60;whatsapp&#x60;). | 

## Example

```python
from openapi_client.models.get_all_account_response import GetAllAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllAccountResponse from a JSON string
get_all_account_response_instance = GetAllAccountResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllAccountResponse.to_json())

# convert the object into a dict
get_all_account_response_dict = get_all_account_response_instance.to_dict()
# create an instance of GetAllAccountResponse from a dict
get_all_account_response_from_dict = GetAllAccountResponse.from_dict(get_all_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


