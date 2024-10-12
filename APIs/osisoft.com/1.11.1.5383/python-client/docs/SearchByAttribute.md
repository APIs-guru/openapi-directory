# SearchByAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_template** | **str** |  | [optional] 
**search_root** | **str** |  | [optional] 
**value_queries** | [**List[ValueQuery]**](ValueQuery.md) |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_by_attribute import SearchByAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of SearchByAttribute from a JSON string
search_by_attribute_instance = SearchByAttribute.from_json(json)
# print the JSON string representation of the object
print(SearchByAttribute.to_json())

# convert the object into a dict
search_by_attribute_dict = search_by_attribute_instance.to_dict()
# create an instance of SearchByAttribute from a dict
search_by_attribute_from_dict = SearchByAttribute.from_dict(search_by_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


