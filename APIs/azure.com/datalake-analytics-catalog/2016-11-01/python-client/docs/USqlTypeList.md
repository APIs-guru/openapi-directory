# USqlTypeList

A Data Lake Analytics catalog U-SQL type item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlType]**](USqlType.md) | the list of types in the database and schema combination | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_type_list import USqlTypeList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTypeList from a JSON string
u_sql_type_list_instance = USqlTypeList.from_json(json)
# print the JSON string representation of the object
print(USqlTypeList.to_json())

# convert the object into a dict
u_sql_type_list_dict = u_sql_type_list_instance.to_dict()
# create an instance of USqlTypeList from a dict
u_sql_type_list_from_dict = USqlTypeList.from_dict(u_sql_type_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


