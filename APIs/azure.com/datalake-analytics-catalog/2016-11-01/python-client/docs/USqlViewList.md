# USqlViewList

A Data Lake Analytics catalog U-SQL view item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlView]**](USqlView.md) | the list of view in the database and schema combination | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_view_list import USqlViewList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlViewList from a JSON string
u_sql_view_list_instance = USqlViewList.from_json(json)
# print the JSON string representation of the object
print(USqlViewList.to_json())

# convert the object into a dict
u_sql_view_list_dict = u_sql_view_list_instance.to_dict()
# create an instance of USqlViewList from a dict
u_sql_view_list_from_dict = USqlViewList.from_dict(u_sql_view_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


