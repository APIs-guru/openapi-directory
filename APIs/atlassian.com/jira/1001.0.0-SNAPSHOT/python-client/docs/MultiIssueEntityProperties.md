# MultiIssueEntityProperties

A list of issues and their respective properties to set or update. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[IssueEntityPropertiesForMultiUpdate]**](IssueEntityPropertiesForMultiUpdate.md) | A list of issue IDs and their respective properties. | [optional] 

## Example

```python
from openapi_client.models.multi_issue_entity_properties import MultiIssueEntityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MultiIssueEntityProperties from a JSON string
multi_issue_entity_properties_instance = MultiIssueEntityProperties.from_json(json)
# print the JSON string representation of the object
print(MultiIssueEntityProperties.to_json())

# convert the object into a dict
multi_issue_entity_properties_dict = multi_issue_entity_properties_instance.to_dict()
# create an instance of MultiIssueEntityProperties from a dict
multi_issue_entity_properties_from_dict = MultiIssueEntityProperties.from_dict(multi_issue_entity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


