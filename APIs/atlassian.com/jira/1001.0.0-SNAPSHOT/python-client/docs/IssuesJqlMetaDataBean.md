# IssuesJqlMetaDataBean

The description of the page of issues loaded by the provided JQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of issues that were loaded in this evaluation. | 
**max_results** | **int** | The maximum number of issues that could be loaded in this evaluation. | 
**start_at** | **int** | The index of the first issue. | 
**total_count** | **int** | The total number of issues the JQL returned. | 
**validation_warnings** | **List[str]** | Any warnings related to the JQL query. Present only if the validation mode was set to &#x60;warn&#x60;. | [optional] 

## Example

```python
from openapi_client.models.issues_jql_meta_data_bean import IssuesJqlMetaDataBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesJqlMetaDataBean from a JSON string
issues_jql_meta_data_bean_instance = IssuesJqlMetaDataBean.from_json(json)
# print the JSON string representation of the object
print(IssuesJqlMetaDataBean.to_json())

# convert the object into a dict
issues_jql_meta_data_bean_dict = issues_jql_meta_data_bean_instance.to_dict()
# create an instance of IssuesJqlMetaDataBean from a dict
issues_jql_meta_data_bean_from_dict = IssuesJqlMetaDataBean.from_dict(issues_jql_meta_data_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


