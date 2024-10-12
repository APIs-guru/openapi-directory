# SandboxCardInfo

Sandbox card information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_balance** | **float** | Available balance | [optional] 
**credit_limit** | **float** | Credit limit ( applicable to credit cards ) | [optional] 
**description** | **str** | Description | [optional] 
**expiration** | **str** | Expiration date (05/2022) | 
**holder_name** | **str** | Holder name | 
**ledger_balance** | **float** | Ledger balance | [optional] 
**number** | **str** | Card number | 
**sub_type** | **str** | Sub type | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.sandbox_card_info import SandboxCardInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxCardInfo from a JSON string
sandbox_card_info_instance = SandboxCardInfo.from_json(json)
# print the JSON string representation of the object
print(SandboxCardInfo.to_json())

# convert the object into a dict
sandbox_card_info_dict = sandbox_card_info_instance.to_dict()
# create an instance of SandboxCardInfo from a dict
sandbox_card_info_from_dict = SandboxCardInfo.from_dict(sandbox_card_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


