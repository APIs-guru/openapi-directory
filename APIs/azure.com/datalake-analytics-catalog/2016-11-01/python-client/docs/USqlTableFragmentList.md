# USqlTableFragmentList

A Data Lake Analytics catalog U-SQL table fragment item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlTableFragment]**](USqlTableFragment.md) | the list of table fragments in the database, schema and table combination | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_fragment_list import USqlTableFragmentList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableFragmentList from a JSON string
u_sql_table_fragment_list_instance = USqlTableFragmentList.from_json(json)
# print the JSON string representation of the object
print(USqlTableFragmentList.to_json())

# convert the object into a dict
u_sql_table_fragment_list_dict = u_sql_table_fragment_list_instance.to_dict()
# create an instance of USqlTableFragmentList from a dict
u_sql_table_fragment_list_from_dict = USqlTableFragmentList.from_dict(u_sql_table_fragment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


