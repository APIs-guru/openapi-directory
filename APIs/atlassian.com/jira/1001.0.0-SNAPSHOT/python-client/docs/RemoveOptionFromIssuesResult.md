# RemoveOptionFromIssuesResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**SimpleErrorCollection**](SimpleErrorCollection.md) | A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned. | [optional] 
**modified_issues** | **List[int]** | The IDs of the modified issues. | [optional] 
**unmodified_issues** | **List[int]** | The IDs of the unchanged issues, those issues where errors prevent modification. | [optional] 

## Example

```python
from openapi_client.models.remove_option_from_issues_result import RemoveOptionFromIssuesResult

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveOptionFromIssuesResult from a JSON string
remove_option_from_issues_result_instance = RemoveOptionFromIssuesResult.from_json(json)
# print the JSON string representation of the object
print(RemoveOptionFromIssuesResult.to_json())

# convert the object into a dict
remove_option_from_issues_result_dict = remove_option_from_issues_result_instance.to_dict()
# create an instance of RemoveOptionFromIssuesResult from a dict
remove_option_from_issues_result_from_dict = RemoveOptionFromIssuesResult.from_dict(remove_option_from_issues_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


