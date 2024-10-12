# GetListOfIssues200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_date** | **str** | The date that the issue was fixed | [optional] 
**introduced_date** | **str** | The date that the issue was introduced into the project | 
**is_fixed** | **bool** | Whether the issue has been fixed | 
**issue** | [**GetListOfIssues200ResponseResultsInnerIssue**](GetListOfIssues200ResponseResultsInnerIssue.md) |  | 
**patched_date** | **str** | The date that the issue was patched | [optional] 
**projects** | **List[object]** | When &#x60;groupBy&#x60; is used, multiple projects may be returned per issue | 
**project** | [**GetListOfIssues200ResponseResultsInnerOneOf1Project**](GetListOfIssues200ResponseResultsInnerOneOf1Project.md) |  | 

## Example

```python
from openapi_client.models.get_list_of_issues200_response_results_inner import GetListOfIssues200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssues200ResponseResultsInner from a JSON string
get_list_of_issues200_response_results_inner_instance = GetListOfIssues200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssues200ResponseResultsInner.to_json())

# convert the object into a dict
get_list_of_issues200_response_results_inner_dict = get_list_of_issues200_response_results_inner_instance.to_dict()
# create an instance of GetListOfIssues200ResponseResultsInner from a dict
get_list_of_issues200_response_results_inner_from_dict = GetListOfIssues200ResponseResultsInner.from_dict(get_list_of_issues200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


