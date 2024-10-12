# CommitAuthor

Represents the author of a Git commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | Required. The commit author&#39;s email address. | [optional] 
**name** | **str** | Required. The commit author&#39;s name. | [optional] 

## Example

```python
from openapi_client.models.commit_author import CommitAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of CommitAuthor from a JSON string
commit_author_instance = CommitAuthor.from_json(json)
# print the JSON string representation of the object
print(CommitAuthor.to_json())

# convert the object into a dict
commit_author_dict = commit_author_instance.to_dict()
# create an instance of CommitAuthor from a dict
commit_author_from_dict = CommitAuthor.from_dict(commit_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


