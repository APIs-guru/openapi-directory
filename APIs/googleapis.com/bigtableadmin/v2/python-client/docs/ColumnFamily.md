# ColumnFamily

A set of columns within a table which share a common configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gc_rule** | [**GcRule**](GcRule.md) |  | [optional] 
**stats** | [**ColumnFamilyStats**](ColumnFamilyStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.column_family import ColumnFamily

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnFamily from a JSON string
column_family_instance = ColumnFamily.from_json(json)
# print the JSON string representation of the object
print(ColumnFamily.to_json())

# convert the object into a dict
column_family_dict = column_family_instance.to_dict()
# create an instance of ColumnFamily from a dict
column_family_from_dict = ColumnFamily.from_dict(column_family_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


