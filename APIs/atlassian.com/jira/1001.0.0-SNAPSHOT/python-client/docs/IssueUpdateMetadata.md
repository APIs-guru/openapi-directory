# IssueUpdateMetadata

A list of editable field details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Dict[str, FieldMetadata]**](FieldMetadata.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_update_metadata import IssueUpdateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of IssueUpdateMetadata from a JSON string
issue_update_metadata_instance = IssueUpdateMetadata.from_json(json)
# print the JSON string representation of the object
print(IssueUpdateMetadata.to_json())

# convert the object into a dict
issue_update_metadata_dict = issue_update_metadata_instance.to_dict()
# create an instance of IssueUpdateMetadata from a dict
issue_update_metadata_from_dict = IssueUpdateMetadata.from_dict(issue_update_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


