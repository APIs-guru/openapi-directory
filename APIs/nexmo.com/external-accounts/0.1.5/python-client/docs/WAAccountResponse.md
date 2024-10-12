# WAAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The external api key for this account | 
**applications** | **List[str]** | The array of associated application ids | [optional] 
**external_id** | **str** | The external identifier for this account | 
**name** | **str** | The account name | [optional] 
**provider** | **str** | The provider (will be &#x60;whatsapp&#x60;). | 

## Example

```python
from openapi_client.models.wa_account_response import WAAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WAAccountResponse from a JSON string
wa_account_response_instance = WAAccountResponse.from_json(json)
# print the JSON string representation of the object
print(WAAccountResponse.to_json())

# convert the object into a dict
wa_account_response_dict = wa_account_response_instance.to_dict()
# create an instance of WAAccountResponse from a dict
wa_account_response_from_dict = WAAccountResponse.from_dict(wa_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


