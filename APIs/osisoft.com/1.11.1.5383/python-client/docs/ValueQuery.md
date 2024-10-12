# ValueQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** |  | [optional] 
**attribute_uom** | **str** |  | [optional] 
**attribute_value** | **object** |  | [optional] 
**search_operator** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.value_query import ValueQuery

# TODO update the JSON string below
json = "{}"
# create an instance of ValueQuery from a JSON string
value_query_instance = ValueQuery.from_json(json)
# print the JSON string representation of the object
print(ValueQuery.to_json())

# convert the object into a dict
value_query_dict = value_query_instance.to_dict()
# create an instance of ValueQuery from a dict
value_query_from_dict = ValueQuery.from_dict(value_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


