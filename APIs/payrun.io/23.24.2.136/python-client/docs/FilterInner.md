# FilterInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_or** | **bool** | The filter bases&#39; is or | [optional] 
**var_property** | **str** | The filter bases&#39; property | [optional] 
**value** | **str** | The filter bases&#39; value | [optional] 

## Example

```python
from openapi_client.models.filter_inner import FilterInner

# TODO update the JSON string below
json = "{}"
# create an instance of FilterInner from a JSON string
filter_inner_instance = FilterInner.from_json(json)
# print the JSON string representation of the object
print(FilterInner.to_json())

# convert the object into a dict
filter_inner_dict = filter_inner_instance.to_dict()
# create an instance of FilterInner from a dict
filter_inner_from_dict = FilterInner.from_dict(filter_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


