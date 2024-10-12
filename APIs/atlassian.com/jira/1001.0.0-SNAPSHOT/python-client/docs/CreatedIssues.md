# CreatedIssues

Details about the issues created and the errors for requests that failed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[BulkOperationErrorResult]**](BulkOperationErrorResult.md) | Error details for failed issue creation requests. | [optional] [readonly] 
**issues** | [**List[CreatedIssue]**](CreatedIssue.md) | Details of the issues created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.created_issues import CreatedIssues

# TODO update the JSON string below
json = "{}"
# create an instance of CreatedIssues from a JSON string
created_issues_instance = CreatedIssues.from_json(json)
# print the JSON string representation of the object
print(CreatedIssues.to_json())

# convert the object into a dict
created_issues_dict = created_issues_instance.to_dict()
# create an instance of CreatedIssues from a dict
created_issues_from_dict = CreatedIssues.from_dict(created_issues_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


