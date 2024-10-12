# IssueEntityProperties

Lists of issues and entity properties. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities_ids** | **List[int]** | A list of entity property IDs. | [optional] 
**properties** | [**Dict[str, JsonNode]**](JsonNode.md) | A list of entity property keys and values. | [optional] 

## Example

```python
from openapi_client.models.issue_entity_properties import IssueEntityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueEntityProperties from a JSON string
issue_entity_properties_instance = IssueEntityProperties.from_json(json)
# print the JSON string representation of the object
print(IssueEntityProperties.to_json())

# convert the object into a dict
issue_entity_properties_dict = issue_entity_properties_instance.to_dict()
# create an instance of IssueEntityProperties from a dict
issue_entity_properties_from_dict = IssueEntityProperties.from_dict(issue_entity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


