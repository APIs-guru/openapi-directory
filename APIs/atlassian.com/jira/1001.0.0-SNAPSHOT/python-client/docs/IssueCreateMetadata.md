# IssueCreateMetadata

The wrapper for the issue creation metadata for a list of projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Expand options that include additional project details in the response. | [optional] [readonly] 
**projects** | [**List[ProjectIssueCreateMetadata]**](ProjectIssueCreateMetadata.md) | List of projects and their issue creation metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_create_metadata import IssueCreateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCreateMetadata from a JSON string
issue_create_metadata_instance = IssueCreateMetadata.from_json(json)
# print the JSON string representation of the object
print(IssueCreateMetadata.to_json())

# convert the object into a dict
issue_create_metadata_dict = issue_create_metadata_instance.to_dict()
# create an instance of IssueCreateMetadata from a dict
issue_create_metadata_from_dict = IssueCreateMetadata.from_dict(issue_create_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


