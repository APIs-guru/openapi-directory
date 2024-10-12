# OracleScnPosition

Oracle SCN position

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scn** | **str** | Required. SCN number from where Logs will be read | [optional] 

## Example

```python
from openapi_client.models.oracle_scn_position import OracleScnPosition

# TODO update the JSON string below
json = "{}"
# create an instance of OracleScnPosition from a JSON string
oracle_scn_position_instance = OracleScnPosition.from_json(json)
# print the JSON string representation of the object
print(OracleScnPosition.to_json())

# convert the object into a dict
oracle_scn_position_dict = oracle_scn_position_instance.to_dict()
# create an instance of OracleScnPosition from a dict
oracle_scn_position_from_dict = OracleScnPosition.from_dict(oracle_scn_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


