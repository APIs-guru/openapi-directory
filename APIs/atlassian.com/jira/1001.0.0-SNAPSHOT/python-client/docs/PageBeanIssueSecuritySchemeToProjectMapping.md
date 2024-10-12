# PageBeanIssueSecuritySchemeToProjectMapping

A page of items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_last** | **bool** | Whether this is the last page. | [optional] [readonly] 
**max_results** | **int** | The maximum number of items that could be returned. | [optional] [readonly] 
**next_page** | **str** | If there is another page of results, the URL of the next page. | [optional] [readonly] 
**var_self** | **str** | The URL of the page. | [optional] [readonly] 
**start_at** | **int** | The index of the first item returned. | [optional] [readonly] 
**total** | **int** | The number of items returned. | [optional] [readonly] 
**values** | [**List[IssueSecuritySchemeToProjectMapping]**](IssueSecuritySchemeToProjectMapping.md) | The list of items. | [optional] [readonly] 

## Example

```python
from openapi_client.models.page_bean_issue_security_scheme_to_project_mapping import PageBeanIssueSecuritySchemeToProjectMapping

# TODO update the JSON string below
json = "{}"
# create an instance of PageBeanIssueSecuritySchemeToProjectMapping from a JSON string
page_bean_issue_security_scheme_to_project_mapping_instance = PageBeanIssueSecuritySchemeToProjectMapping.from_json(json)
# print the JSON string representation of the object
print(PageBeanIssueSecuritySchemeToProjectMapping.to_json())

# convert the object into a dict
page_bean_issue_security_scheme_to_project_mapping_dict = page_bean_issue_security_scheme_to_project_mapping_instance.to_dict()
# create an instance of PageBeanIssueSecuritySchemeToProjectMapping from a dict
page_bean_issue_security_scheme_to_project_mapping_from_dict = PageBeanIssueSecuritySchemeToProjectMapping.from_dict(page_bean_issue_security_scheme_to_project_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


