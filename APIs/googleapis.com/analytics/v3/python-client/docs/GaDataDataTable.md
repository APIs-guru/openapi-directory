# GaDataDataTable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cols** | [**List[GaDataDataTableColsInner]**](GaDataDataTableColsInner.md) |  | [optional] 
**rows** | [**List[GaDataDataTableRowsInner]**](GaDataDataTableRowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ga_data_data_table import GaDataDataTable

# TODO update the JSON string below
json = "{}"
# create an instance of GaDataDataTable from a JSON string
ga_data_data_table_instance = GaDataDataTable.from_json(json)
# print the JSON string representation of the object
print(GaDataDataTable.to_json())

# convert the object into a dict
ga_data_data_table_dict = ga_data_data_table_instance.to_dict()
# create an instance of GaDataDataTable from a dict
ga_data_data_table_from_dict = GaDataDataTable.from_dict(ga_data_data_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


