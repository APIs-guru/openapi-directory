# CommitMetadata

Represents a Dataform Git commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**CommitAuthor**](CommitAuthor.md) |  | [optional] 
**commit_message** | **str** | Optional. The commit&#39;s message. | [optional] 

## Example

```python
from openapi_client.models.commit_metadata import CommitMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CommitMetadata from a JSON string
commit_metadata_instance = CommitMetadata.from_json(json)
# print the JSON string representation of the object
print(CommitMetadata.to_json())

# convert the object into a dict
commit_metadata_dict = commit_metadata_instance.to_dict()
# create an instance of CommitMetadata from a dict
commit_metadata_from_dict = CommitMetadata.from_dict(commit_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


