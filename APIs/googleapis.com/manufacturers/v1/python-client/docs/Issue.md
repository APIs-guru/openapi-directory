# Issue

Product issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116. | [optional] 
**description** | **str** | Longer description of the issue focused on how to resolve it. | [optional] 
**destination** | **str** | The destination this issue applies to. | [optional] 
**resolution** | **str** | What needs to happen to resolve the issue. | [optional] 
**severity** | **str** | The severity of the issue. | [optional] 
**timestamp** | **str** | The timestamp when this issue appeared. | [optional] 
**title** | **str** | Short title describing the nature of the issue. | [optional] 
**type** | **str** | The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc. | [optional] 

## Example

```python
from openapi_client.models.issue import Issue

# TODO update the JSON string below
json = "{}"
# create an instance of Issue from a JSON string
issue_instance = Issue.from_json(json)
# print the JSON string representation of the object
print(Issue.to_json())

# convert the object into a dict
issue_dict = issue_instance.to_dict()
# create an instance of Issue from a dict
issue_from_dict = Issue.from_dict(issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


