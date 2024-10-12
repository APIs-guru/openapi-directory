# DependenciesFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**DependenciesFiltersFilters**](DependenciesFiltersFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.dependencies_filters import DependenciesFilters

# TODO update the JSON string below
json = "{}"
# create an instance of DependenciesFilters from a JSON string
dependencies_filters_instance = DependenciesFilters.from_json(json)
# print the JSON string representation of the object
print(DependenciesFilters.to_json())

# convert the object into a dict
dependencies_filters_dict = dependencies_filters_instance.to_dict()
# create an instance of DependenciesFilters from a dict
dependencies_filters_from_dict = DependenciesFilters.from_dict(dependencies_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


