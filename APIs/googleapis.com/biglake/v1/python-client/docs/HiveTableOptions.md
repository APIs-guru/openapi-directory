# HiveTableOptions

Options of a Hive table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | Stores user supplied Hive table parameters. | [optional] 
**storage_descriptor** | [**StorageDescriptor**](StorageDescriptor.md) |  | [optional] 
**table_type** | **str** | Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. | [optional] 

## Example

```python
from openapi_client.models.hive_table_options import HiveTableOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HiveTableOptions from a JSON string
hive_table_options_instance = HiveTableOptions.from_json(json)
# print the JSON string representation of the object
print(HiveTableOptions.to_json())

# convert the object into a dict
hive_table_options_dict = hive_table_options_instance.to_dict()
# create an instance of HiveTableOptions from a dict
hive_table_options_from_dict = HiveTableOptions.from_dict(hive_table_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


