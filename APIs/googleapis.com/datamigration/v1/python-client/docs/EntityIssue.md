# EntityIssue

Issue related to the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error/Warning code | [optional] 
**ddl** | **str** | The ddl which caused the issue, if relevant. | [optional] 
**entity_type** | **str** | The entity type (if the DDL is for a sub entity). | [optional] 
**id** | **str** | Unique Issue ID. | [optional] 
**message** | **str** | Issue detailed message | [optional] 
**position** | [**Position**](Position.md) |  | [optional] 
**severity** | **str** | Severity of the issue | [optional] 
**type** | **str** | The type of the issue. | [optional] 

## Example

```python
from openapi_client.models.entity_issue import EntityIssue

# TODO update the JSON string below
json = "{}"
# create an instance of EntityIssue from a JSON string
entity_issue_instance = EntityIssue.from_json(json)
# print the JSON string representation of the object
print(EntityIssue.to_json())

# convert the object into a dict
entity_issue_dict = entity_issue_instance.to_dict()
# create an instance of EntityIssue from a dict
entity_issue_from_dict = EntityIssue.from_dict(entity_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


