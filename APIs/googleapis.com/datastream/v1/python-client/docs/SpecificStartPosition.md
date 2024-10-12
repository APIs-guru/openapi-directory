# SpecificStartPosition

CDC strategy to start replicating from a specific position in the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_log_position** | [**MysqlLogPosition**](MysqlLogPosition.md) |  | [optional] 
**oracle_scn_position** | [**OracleScnPosition**](OracleScnPosition.md) |  | [optional] 

## Example

```python
from openapi_client.models.specific_start_position import SpecificStartPosition

# TODO update the JSON string below
json = "{}"
# create an instance of SpecificStartPosition from a JSON string
specific_start_position_instance = SpecificStartPosition.from_json(json)
# print the JSON string representation of the object
print(SpecificStartPosition.to_json())

# convert the object into a dict
specific_start_position_dict = specific_start_position_instance.to_dict()
# create an instance of SpecificStartPosition from a dict
specific_start_position_from_dict = SpecificStartPosition.from_dict(specific_start_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


