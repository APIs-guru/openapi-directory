# IssueTypeCreateBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue type. | [optional] 
**hierarchy_level** | **int** | The hierarchy level of the issue type. Use:   *  &#x60;-1&#x60; for Subtask.  *  &#x60;0&#x60; for Base.  Defaults to &#x60;0&#x60;. | [optional] 
**name** | **str** | The unique name for the issue type. The maximum length is 60 characters. | 
**type** | **str** | Deprecated. Use &#x60;hierarchyLevel&#x60; instead. See the [deprecation notice](https://community.developer.atlassian.com/t/deprecation-of-the-epic-link-parent-link-and-other-related-fields-in-rest-apis-and-webhooks/54048) for details.  Whether the issue type is &#x60;subtype&#x60; or &#x60;standard&#x60;. Defaults to &#x60;standard&#x60;. | [optional] 

## Example

```python
from openapi_client.models.issue_type_create_bean import IssueTypeCreateBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeCreateBean from a JSON string
issue_type_create_bean_instance = IssueTypeCreateBean.from_json(json)
# print the JSON string representation of the object
print(IssueTypeCreateBean.to_json())

# convert the object into a dict
issue_type_create_bean_dict = issue_type_create_bean_instance.to_dict()
# create an instance of IssueTypeCreateBean from a dict
issue_type_create_bean_from_dict = IssueTypeCreateBean.from_dict(issue_type_create_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


