# Table


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_names** | **List[str]** |  | [optional] 
**convert_to_local_time** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**TableLinks**](TableLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.table import Table

# TODO update the JSON string below
json = "{}"
# create an instance of Table from a JSON string
table_instance = Table.from_json(json)
# print the JSON string representation of the object
print(Table.to_json())

# convert the object into a dict
table_dict = table_instance.to_dict()
# create an instance of Table from a dict
table_from_dict = Table.from_dict(table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


