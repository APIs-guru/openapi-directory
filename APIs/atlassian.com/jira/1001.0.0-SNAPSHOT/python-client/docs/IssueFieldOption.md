# IssueFieldOption

Details of the options for a select list issue field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**IssueFieldOptionConfiguration**](IssueFieldOptionConfiguration.md) |  | [optional] 
**id** | **int** | The unique identifier for the option. This is only unique within the select field&#39;s set of options. | 
**properties** | **Dict[str, object]** | The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module. | [optional] 
**value** | **str** | The option&#39;s name, which is displayed in Jira. | 

## Example

```python
from openapi_client.models.issue_field_option import IssueFieldOption

# TODO update the JSON string below
json = "{}"
# create an instance of IssueFieldOption from a JSON string
issue_field_option_instance = IssueFieldOption.from_json(json)
# print the JSON string representation of the object
print(IssueFieldOption.to_json())

# convert the object into a dict
issue_field_option_dict = issue_field_option_instance.to_dict()
# create an instance of IssueFieldOption from a dict
issue_field_option_from_dict = IssueFieldOption.from_dict(issue_field_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


