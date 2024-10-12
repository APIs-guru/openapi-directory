# DataTableResponseObject

Data Table which defines columns and raw row values

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[DataTableResponseColumn]**](DataTableResponseColumn.md) | List of columns with data types | [optional] 
**rows** | **List[List[str]]** | Raw row values | [optional] 
**table_name** | **str** | Name of the table | [optional] 

## Example

```python
from openapi_client.models.data_table_response_object import DataTableResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of DataTableResponseObject from a JSON string
data_table_response_object_instance = DataTableResponseObject.from_json(json)
# print the JSON string representation of the object
print(DataTableResponseObject.to_json())

# convert the object into a dict
data_table_response_object_dict = data_table_response_object_instance.to_dict()
# create an instance of DataTableResponseObject from a dict
data_table_response_object_from_dict = DataTableResponseObject.from_dict(data_table_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


