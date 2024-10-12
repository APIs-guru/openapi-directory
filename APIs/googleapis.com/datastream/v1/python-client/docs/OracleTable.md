# OracleTable

Oracle table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oracle_columns** | [**List[OracleColumn]**](OracleColumn.md) | Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. | [optional] 
**table** | **str** | Table name. | [optional] 

## Example

```python
from openapi_client.models.oracle_table import OracleTable

# TODO update the JSON string below
json = "{}"
# create an instance of OracleTable from a JSON string
oracle_table_instance = OracleTable.from_json(json)
# print the JSON string representation of the object
print(OracleTable.to_json())

# convert the object into a dict
oracle_table_dict = oracle_table_instance.to_dict()
# create an instance of OracleTable from a dict
oracle_table_from_dict = OracleTable.from_dict(oracle_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


