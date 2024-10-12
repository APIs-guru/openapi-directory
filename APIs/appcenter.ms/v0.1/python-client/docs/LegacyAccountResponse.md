# LegacyAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Dict[str, LegacyAccountResponseAccountValue]**](LegacyAccountResponseAccountValue.md) | Object containing the account information. | [optional] 

## Example

```python
from openapi_client.models.legacy_account_response import LegacyAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAccountResponse from a JSON string
legacy_account_response_instance = LegacyAccountResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyAccountResponse.to_json())

# convert the object into a dict
legacy_account_response_dict = legacy_account_response_instance.to_dict()
# create an instance of LegacyAccountResponse from a dict
legacy_account_response_from_dict = LegacyAccountResponse.from_dict(legacy_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


