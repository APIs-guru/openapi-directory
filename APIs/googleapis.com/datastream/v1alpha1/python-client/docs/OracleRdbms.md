# OracleRdbms

Oracle database structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oracle_schemas** | [**List[OracleSchema]**](OracleSchema.md) | Oracle schemas/databases in the database server. | [optional] 

## Example

```python
from openapi_client.models.oracle_rdbms import OracleRdbms

# TODO update the JSON string below
json = "{}"
# create an instance of OracleRdbms from a JSON string
oracle_rdbms_instance = OracleRdbms.from_json(json)
# print the JSON string representation of the object
print(OracleRdbms.to_json())

# convert the object into a dict
oracle_rdbms_dict = oracle_rdbms_instance.to_dict()
# create an instance of OracleRdbms from a dict
oracle_rdbms_from_dict = OracleRdbms.from_dict(oracle_rdbms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


