# RepositoryTags

Result of the request to list tags of the image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the image | [optional] 
**tags** | **List[str]** | List of tags | [optional] 

## Example

```python
from openapi_client.models.repository_tags import RepositoryTags

# TODO update the JSON string below
json = "{}"
# create an instance of RepositoryTags from a JSON string
repository_tags_instance = RepositoryTags.from_json(json)
# print the JSON string representation of the object
print(RepositoryTags.to_json())

# convert the object into a dict
repository_tags_dict = repository_tags_instance.to_dict()
# create an instance of RepositoryTags from a dict
repository_tags_from_dict = RepositoryTags.from_dict(repository_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


