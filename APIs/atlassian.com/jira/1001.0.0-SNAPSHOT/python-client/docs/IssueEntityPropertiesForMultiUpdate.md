# IssueEntityPropertiesForMultiUpdate

An issue ID with entity property values. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_id** | **int** | The ID of the issue. | [optional] 
**properties** | [**Dict[str, JsonNode]**](JsonNode.md) | Entity properties to set on the issue. The maximum length of an issue property value is 32768 characters. | [optional] 

## Example

```python
from openapi_client.models.issue_entity_properties_for_multi_update import IssueEntityPropertiesForMultiUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of IssueEntityPropertiesForMultiUpdate from a JSON string
issue_entity_properties_for_multi_update_instance = IssueEntityPropertiesForMultiUpdate.from_json(json)
# print the JSON string representation of the object
print(IssueEntityPropertiesForMultiUpdate.to_json())

# convert the object into a dict
issue_entity_properties_for_multi_update_dict = issue_entity_properties_for_multi_update_instance.to_dict()
# create an instance of IssueEntityPropertiesForMultiUpdate from a dict
issue_entity_properties_for_multi_update_from_dict = IssueEntityPropertiesForMultiUpdate.from_dict(issue_entity_properties_for_multi_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


