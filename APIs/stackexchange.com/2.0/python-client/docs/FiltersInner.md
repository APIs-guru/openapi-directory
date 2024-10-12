# FiltersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** |  | [optional] 
**filter_type** | **str** |  | [optional] 
**included_fields** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.filters_inner import FiltersInner

# TODO update the JSON string below
json = "{}"
# create an instance of FiltersInner from a JSON string
filters_inner_instance = FiltersInner.from_json(json)
# print the JSON string representation of the object
print(FiltersInner.to_json())

# convert the object into a dict
filters_inner_dict = filters_inner_instance.to_dict()
# create an instance of FiltersInner from a dict
filters_inner_from_dict = FiltersInner.from_dict(filters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


