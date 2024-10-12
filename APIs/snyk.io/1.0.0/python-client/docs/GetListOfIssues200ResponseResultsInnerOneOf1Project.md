# GetListOfIssues200ResponseResultsInnerOneOf1Project

When no `groupBy` is used, a single project is returned per issue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the project | 
**name** | **str** | The name of the project | 
**package_manager** | **str** | The package manager for the project (e.g. npm, rubygems etc) | 
**source** | **str** | The source of the project (e.g. github, heroku etc) | 
**target_file** | **str** | The file path to the dependency manifest or lock file (e.g. package.json, Gemfile.lock etc) | [optional] 
**url** | **str** | URL to a page containing information about the project | 

## Example

```python
from openapi_client.models.get_list_of_issues200_response_results_inner_one_of1_project import GetListOfIssues200ResponseResultsInnerOneOf1Project

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssues200ResponseResultsInnerOneOf1Project from a JSON string
get_list_of_issues200_response_results_inner_one_of1_project_instance = GetListOfIssues200ResponseResultsInnerOneOf1Project.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssues200ResponseResultsInnerOneOf1Project.to_json())

# convert the object into a dict
get_list_of_issues200_response_results_inner_one_of1_project_dict = get_list_of_issues200_response_results_inner_one_of1_project_instance.to_dict()
# create an instance of GetListOfIssues200ResponseResultsInnerOneOf1Project from a dict
get_list_of_issues200_response_results_inner_one_of1_project_from_dict = GetListOfIssues200ResponseResultsInnerOneOf1Project.from_dict(get_list_of_issues200_response_results_inner_one_of1_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


