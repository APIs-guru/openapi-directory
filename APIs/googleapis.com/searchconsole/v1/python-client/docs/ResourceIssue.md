# ResourceIssue

Information about a resource with issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_resource** | [**BlockedResource**](BlockedResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_issue import ResourceIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceIssue from a JSON string
resource_issue_instance = ResourceIssue.from_json(json)
# print the JSON string representation of the object
print(ResourceIssue.to_json())

# convert the object into a dict
resource_issue_dict = resource_issue_instance.to_dict()
# create an instance of ResourceIssue from a dict
resource_issue_from_dict = ResourceIssue.from_dict(resource_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


