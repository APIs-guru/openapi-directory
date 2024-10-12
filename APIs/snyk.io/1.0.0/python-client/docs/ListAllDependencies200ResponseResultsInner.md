# ListAllDependencies200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyright** | **List[object]** | The copyright notices for the package | [optional] 
**dependencies_with_issues** | **List[object]** | The identifiers of dependencies with issues that are depended upon as a result of this dependency | [optional] 
**deprecated_versions** | **List[object]** | The numbers for those versions that are marked as deprecated | [optional] 
**first_published_date** | **str** | The timestamp for when the specified package was first published. | [optional] 
**id** | **str** | The identifier of the package | 
**is_deprecated** | **bool** | True if the latest version of the package is marked as deprecated; False otherwise. | [optional] 
**issues_critical** | **float** | The number of critical severity issues in this dependency | [optional] 
**issues_high** | **float** | The number of high severity issues in this dependency | [optional] 
**issues_low** | **float** | The number of low severity issues in this dependency | [optional] 
**issues_medium** | **float** | The number of medium severity issues in this dependency | [optional] 
**latest_version** | **str** | The latest version available for the specified package | [optional] 
**latest_version_published_date** | **str** | The timestamp for when the latest version of the specified package was published. | [optional] 
**licenses** | [**List[ListAllDependencies200ResponseResultsInnerLicensesInner]**](ListAllDependencies200ResponseResultsInnerLicensesInner.md) | The licenses of the dependency | 
**name** | **str** | The name of the package | 
**projects** | [**List[ListAllDependencies200ResponseResultsInnerProjectsInner]**](ListAllDependencies200ResponseResultsInnerProjectsInner.md) | The projects which depend on the dependency | 
**type** | **str** | The package type of the dependency | 
**version** | **str** | The version of the package | 

## Example

```python
from openapi_client.models.list_all_dependencies200_response_results_inner import ListAllDependencies200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllDependencies200ResponseResultsInner from a JSON string
list_all_dependencies200_response_results_inner_instance = ListAllDependencies200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(ListAllDependencies200ResponseResultsInner.to_json())

# convert the object into a dict
list_all_dependencies200_response_results_inner_dict = list_all_dependencies200_response_results_inner_instance.to_dict()
# create an instance of ListAllDependencies200ResponseResultsInner from a dict
list_all_dependencies200_response_results_inner_from_dict = ListAllDependencies200ResponseResultsInner.from_dict(list_all_dependencies200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


