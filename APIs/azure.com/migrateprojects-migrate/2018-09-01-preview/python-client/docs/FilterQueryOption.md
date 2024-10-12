# FilterQueryOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ODataQueryContext**](ODataQueryContext.md) |  | [optional] 
**filter_clause** | [**FilterClause**](FilterClause.md) |  | [optional] 
**raw_value** | **str** |  | [optional] [readonly] 
**validator** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.filter_query_option import FilterQueryOption

# TODO update the JSON string below
json = "{}"
# create an instance of FilterQueryOption from a JSON string
filter_query_option_instance = FilterQueryOption.from_json(json)
# print the JSON string representation of the object
print(FilterQueryOption.to_json())

# convert the object into a dict
filter_query_option_dict = filter_query_option_instance.to_dict()
# create an instance of FilterQueryOption from a dict
filter_query_option_from_dict = FilterQueryOption.from_dict(filter_query_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


