# QueryProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[QueryColumn]**](QueryColumn.md) | Array of columns | [optional] 
**next_link** | **str** | The link (url) to the next page of results. | [optional] 
**rows** | **List[List[object]]** | Array of rows | [optional] 

## Example

```python
from openapi_client.models.query_properties import QueryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QueryProperties from a JSON string
query_properties_instance = QueryProperties.from_json(json)
# print the JSON string representation of the object
print(QueryProperties.to_json())

# convert the object into a dict
query_properties_dict = query_properties_instance.to_dict()
# create an instance of QueryProperties from a dict
query_properties_from_dict = QueryProperties.from_dict(query_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


