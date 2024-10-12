# AccountEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) | Address | [optional] 
**annual_revenue** | **str** | Annual Revenue | [optional] 
**category** | **str** | Category | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**email** | [**List[Email]**](Email.md) | Email | [optional] 
**employees** | **str** | Employees | [optional] 
**id** | **str** | Account Identifier | [optional] 
**industry** | **List[str]** | Industry | [optional] 
**messenger** | [**List[Messenger]**](Messenger.md) | Messenger | [optional] 
**name** | **str** | Name | [optional] 
**ownership** | **str** | Ownership | [optional] 
**phone** | [**List[Phone]**](Phone.md) | Phone | [optional] 
**rating** | **str** | Rating | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**sic_code** | **str** | SIC Code | [optional] 
**ticker_symbol** | **str** | Ticker Symbol | [optional] 
**type** | **str** | Type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**website** | [**List[Website]**](Website.md) | Website | [optional] 

## Example

```python
from openapi_client.models.account_entity import AccountEntity

# TODO update the JSON string below
json = "{}"
# create an instance of AccountEntity from a JSON string
account_entity_instance = AccountEntity.from_json(json)
# print the JSON string representation of the object
print(AccountEntity.to_json())

# convert the object into a dict
account_entity_dict = account_entity_instance.to_dict()
# create an instance of AccountEntity from a dict
account_entity_from_dict = AccountEntity.from_dict(account_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


