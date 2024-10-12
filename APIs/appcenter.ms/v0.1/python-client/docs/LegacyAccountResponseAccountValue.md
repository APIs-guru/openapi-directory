# LegacyAccountResponseAccountValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The calling user&#39;s email. | [optional] 
**linked_providers** | **List[str]** | Array of linked authentication providers associated with the account. | [optional] 
**name** | **str** | The account name of the calling user. | [optional] 

## Example

```python
from openapi_client.models.legacy_account_response_account_value import LegacyAccountResponseAccountValue

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAccountResponseAccountValue from a JSON string
legacy_account_response_account_value_instance = LegacyAccountResponseAccountValue.from_json(json)
# print the JSON string representation of the object
print(LegacyAccountResponseAccountValue.to_json())

# convert the object into a dict
legacy_account_response_account_value_dict = legacy_account_response_account_value_instance.to_dict()
# create an instance of LegacyAccountResponseAccountValue from a dict
legacy_account_response_account_value_from_dict = LegacyAccountResponseAccountValue.from_dict(legacy_account_response_account_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


