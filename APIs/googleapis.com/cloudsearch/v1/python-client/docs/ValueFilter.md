# ValueFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_name** | **str** | The &#x60;operator_name&#x60; applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. &#x60;operator_name&#x60;, where the query filters results by the property that matches the value. 2. &#x60;greater_than_operator_name&#x60; or &#x60;less_than_operator_name&#x60; in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query. | [optional] 
**value** | [**Value**](Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.value_filter import ValueFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ValueFilter from a JSON string
value_filter_instance = ValueFilter.from_json(json)
# print the JSON string representation of the object
print(ValueFilter.to_json())

# convert the object into a dict
value_filter_dict = value_filter_instance.to_dict()
# create an instance of ValueFilter from a dict
value_filter_from_dict = ValueFilter.from_dict(value_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


