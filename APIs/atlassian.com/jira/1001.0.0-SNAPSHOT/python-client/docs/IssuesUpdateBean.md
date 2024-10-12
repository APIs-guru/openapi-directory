# IssuesUpdateBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_updates** | [**List[IssueUpdateDetails]**](IssueUpdateDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.issues_update_bean import IssuesUpdateBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesUpdateBean from a JSON string
issues_update_bean_instance = IssuesUpdateBean.from_json(json)
# print the JSON string representation of the object
print(IssuesUpdateBean.to_json())

# convert the object into a dict
issues_update_bean_dict = issues_update_bean_instance.to_dict()
# create an instance of IssuesUpdateBean from a dict
issues_update_bean_from_dict = IssuesUpdateBean.from_dict(issues_update_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


