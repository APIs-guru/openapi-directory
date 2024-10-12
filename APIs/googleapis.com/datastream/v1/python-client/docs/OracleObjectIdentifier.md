# OracleObjectIdentifier

Oracle data source object identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** | Required. The schema name. | [optional] 
**table** | **str** | Required. The table name. | [optional] 

## Example

```python
from openapi_client.models.oracle_object_identifier import OracleObjectIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of OracleObjectIdentifier from a JSON string
oracle_object_identifier_instance = OracleObjectIdentifier.from_json(json)
# print the JSON string representation of the object
print(OracleObjectIdentifier.to_json())

# convert the object into a dict
oracle_object_identifier_dict = oracle_object_identifier_instance.to_dict()
# create an instance of OracleObjectIdentifier from a dict
oracle_object_identifier_from_dict = OracleObjectIdentifier.from_dict(oracle_object_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


