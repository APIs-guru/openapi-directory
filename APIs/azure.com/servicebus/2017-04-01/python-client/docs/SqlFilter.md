# SqlFilter

Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_level** | **int** | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | [optional] [default to 20]
**requires_preprocessing** | **bool** | Value that indicates whether the rule action requires preprocessing. | [optional] [default to True]
**sql_expression** | **str** | The SQL expression. e.g. MyProperty&#x3D;&#39;ABC&#39; | [optional] 

## Example

```python
from openapi_client.models.sql_filter import SqlFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SqlFilter from a JSON string
sql_filter_instance = SqlFilter.from_json(json)
# print the JSON string representation of the object
print(SqlFilter.to_json())

# convert the object into a dict
sql_filter_dict = sql_filter_instance.to_dict()
# create an instance of SqlFilter from a dict
sql_filter_from_dict = SqlFilter.from_dict(sql_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


