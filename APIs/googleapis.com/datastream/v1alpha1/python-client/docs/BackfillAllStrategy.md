# BackfillAllStrategy

Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_excluded_objects** | [**MysqlRdbms**](MysqlRdbms.md) |  | [optional] 
**oracle_excluded_objects** | [**OracleRdbms**](OracleRdbms.md) |  | [optional] 

## Example

```python
from openapi_client.models.backfill_all_strategy import BackfillAllStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of BackfillAllStrategy from a JSON string
backfill_all_strategy_instance = BackfillAllStrategy.from_json(json)
# print the JSON string representation of the object
print(BackfillAllStrategy.to_json())

# convert the object into a dict
backfill_all_strategy_dict = backfill_all_strategy_instance.to_dict()
# create an instance of BackfillAllStrategy from a dict
backfill_all_strategy_from_dict = BackfillAllStrategy.from_dict(backfill_all_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


