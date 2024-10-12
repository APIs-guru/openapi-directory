# IssueFieldOptionCreateBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**IssueFieldOptionConfiguration**](IssueFieldOptionConfiguration.md) |  | [optional] 
**properties** | **Dict[str, object]** | The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module. | [optional] 
**value** | **str** | The option&#39;s name, which is displayed in Jira. | 

## Example

```python
from openapi_client.models.issue_field_option_create_bean import IssueFieldOptionCreateBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssueFieldOptionCreateBean from a JSON string
issue_field_option_create_bean_instance = IssueFieldOptionCreateBean.from_json(json)
# print the JSON string representation of the object
print(IssueFieldOptionCreateBean.to_json())

# convert the object into a dict
issue_field_option_create_bean_dict = issue_field_option_create_bean_instance.to_dict()
# create an instance of IssueFieldOptionCreateBean from a dict
issue_field_option_create_bean_from_dict = IssueFieldOptionCreateBean.from_dict(issue_field_option_create_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


