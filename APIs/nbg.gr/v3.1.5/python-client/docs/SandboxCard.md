# SandboxCard

Sandbox card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**SandboxCardInfo**](SandboxCardInfo.md) |  | [optional] 
**party** | [**SandboxParty**](SandboxParty.md) |  | [optional] 
**statements** | [**List[SandboxStatement]**](SandboxStatement.md) | Card statements | [optional] 
**transactions** | [**List[SandboxTransaction]**](SandboxTransaction.md) | Card transactions | [optional] 

## Example

```python
from openapi_client.models.sandbox_card import SandboxCard

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxCard from a JSON string
sandbox_card_instance = SandboxCard.from_json(json)
# print the JSON string representation of the object
print(SandboxCard.to_json())

# convert the object into a dict
sandbox_card_dict = sandbox_card_instance.to_dict()
# create an instance of SandboxCard from a dict
sandbox_card_from_dict = SandboxCard.from_dict(sandbox_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


