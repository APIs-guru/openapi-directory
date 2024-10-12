# TableCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**TableCategoryLinks**](TableCategoryLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.table_category import TableCategory

# TODO update the JSON string below
json = "{}"
# create an instance of TableCategory from a JSON string
table_category_instance = TableCategory.from_json(json)
# print the JSON string representation of the object
print(TableCategory.to_json())

# convert the object into a dict
table_category_dict = table_category_instance.to_dict()
# create an instance of TableCategory from a dict
table_category_from_dict = TableCategory.from_dict(table_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


