# TableData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **Dict[str, str]** |  | [optional] 
**rows** | **List[Dict[str, object]]** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_data import TableData

# TODO update the JSON string below
json = "{}"
# create an instance of TableData from a JSON string
table_data_instance = TableData.from_json(json)
# print the JSON string representation of the object
print(TableData.to_json())

# convert the object into a dict
table_data_dict = table_data_instance.to_dict()
# create an instance of TableData from a dict
table_data_from_dict = TableData.from_dict(table_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


