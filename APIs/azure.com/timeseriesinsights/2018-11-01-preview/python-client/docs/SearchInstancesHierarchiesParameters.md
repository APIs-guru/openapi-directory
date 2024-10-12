# SearchInstancesHierarchiesParameters

Parameter of how to return time series instance hierarchies by search instances call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | [**HierarchiesExpandParameter**](HierarchiesExpandParameter.md) |  | [optional] 
**page_size** | **int** | Maximum number of hierarchies in the same level to return in the same page. Optional, default is 10 when not set. Range is from 1 to 100. If there are results beyond the page size, the continuation token can be used to fetch the next page. | [optional] 
**sort** | [**HierarchiesSortParameter**](HierarchiesSortParameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_instances_hierarchies_parameters import SearchInstancesHierarchiesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstancesHierarchiesParameters from a JSON string
search_instances_hierarchies_parameters_instance = SearchInstancesHierarchiesParameters.from_json(json)
# print the JSON string representation of the object
print(SearchInstancesHierarchiesParameters.to_json())

# convert the object into a dict
search_instances_hierarchies_parameters_dict = search_instances_hierarchies_parameters_instance.to_dict()
# create an instance of SearchInstancesHierarchiesParameters from a dict
search_instances_hierarchies_parameters_from_dict = SearchInstancesHierarchiesParameters.from_dict(search_instances_hierarchies_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


