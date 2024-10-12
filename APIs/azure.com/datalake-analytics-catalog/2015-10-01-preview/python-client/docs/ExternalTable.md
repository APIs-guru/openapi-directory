# ExternalTable

A Data Lake Analytics catalog external table item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**EntityId**](EntityId.md) |  | [optional] 
**table_name** | **str** | the name of the table associated with this database and schema. | [optional] 

## Example

```python
from openapi_client.models.external_table import ExternalTable

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalTable from a JSON string
external_table_instance = ExternalTable.from_json(json)
# print the JSON string representation of the object
print(ExternalTable.to_json())

# convert the object into a dict
external_table_dict = external_table_instance.to_dict()
# create an instance of ExternalTable from a dict
external_table_from_dict = ExternalTable.from_dict(external_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


