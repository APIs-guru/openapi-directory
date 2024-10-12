# ListAllLicenses200ResponseResultsInnerDependenciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the package | 
**name** | **str** | The name of the package | 
**package_manager** | **str** | The package manager of the dependency | 
**version** | **str** | The version of the package | 

## Example

```python
from openapi_client.models.list_all_licenses200_response_results_inner_dependencies_inner import ListAllLicenses200ResponseResultsInnerDependenciesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllLicenses200ResponseResultsInnerDependenciesInner from a JSON string
list_all_licenses200_response_results_inner_dependencies_inner_instance = ListAllLicenses200ResponseResultsInnerDependenciesInner.from_json(json)
# print the JSON string representation of the object
print(ListAllLicenses200ResponseResultsInnerDependenciesInner.to_json())

# convert the object into a dict
list_all_licenses200_response_results_inner_dependencies_inner_dict = list_all_licenses200_response_results_inner_dependencies_inner_instance.to_dict()
# create an instance of ListAllLicenses200ResponseResultsInnerDependenciesInner from a dict
list_all_licenses200_response_results_inner_dependencies_inner_from_dict = ListAllLicenses200ResponseResultsInnerDependenciesInner.from_dict(list_all_licenses200_response_results_inner_dependencies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


