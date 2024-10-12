# LinkedIssue

The ID or key of a linked issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Fields**](Fields.md) | The fields associated with the issue. | [optional] [readonly] 
**id** | **str** | The ID of an issue. Required if &#x60;key&#x60; isn&#39;t provided. | [optional] 
**key** | **str** | The key of an issue. Required if &#x60;id&#x60; isn&#39;t provided. | [optional] 
**var_self** | **str** | The URL of the issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_issue import LinkedIssue

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedIssue from a JSON string
linked_issue_instance = LinkedIssue.from_json(json)
# print the JSON string representation of the object
print(LinkedIssue.to_json())

# convert the object into a dict
linked_issue_dict = linked_issue_instance.to_dict()
# create an instance of LinkedIssue from a dict
linked_issue_from_dict = LinkedIssue.from_dict(linked_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


