# SearchInstancesParameters

Parameters of how to return time series instances by search instances call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highlights** | **bool** | Definition of highlighted search results or not. When it is set to &#39;true&#39;, the highlighted search results are returned. When it is set to &#39;false&#39;, the highlighted search results are not returned. Default is &#39;true&#39;. | [optional] 
**page_size** | **int** | Maximum number of instances expected in each page of the result. Defaults to 10 when not set. Ranges from 1 to 100. If there are results beyond the page size, the user can use the continuation token to fetch the next page. | [optional] 
**recursive** | **bool** | Definition of which instances are returned. When recursive is set to &#39;true&#39;, all instances that have the path that starts with path the path parameter are returned. When recursive is set to &#39;false&#39;, only instances that have the path that exactly matches the path parameter are returned. Using recursive search allows to implement search user experience, while using non-recursive search allows to implement navigation experience. Optional, default is &#39;true&#39;. | [optional] 
**sort** | [**InstancesSortParameter**](InstancesSortParameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_instances_parameters import SearchInstancesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstancesParameters from a JSON string
search_instances_parameters_instance = SearchInstancesParameters.from_json(json)
# print the JSON string representation of the object
print(SearchInstancesParameters.to_json())

# convert the object into a dict
search_instances_parameters_dict = search_instances_parameters_instance.to_dict()
# create an instance of SearchInstancesParameters from a dict
search_instances_parameters_from_dict = SearchInstancesParameters.from_dict(search_instances_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


