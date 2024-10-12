# UserMentionMetadata

Annotation metadata for user mentions (@).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of user mention. | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_mention_metadata import UserMentionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UserMentionMetadata from a JSON string
user_mention_metadata_instance = UserMentionMetadata.from_json(json)
# print the JSON string representation of the object
print(UserMentionMetadata.to_json())

# convert the object into a dict
user_mention_metadata_dict = user_mention_metadata_instance.to_dict()
# create an instance of UserMentionMetadata from a dict
user_mention_metadata_from_dict = UserMentionMetadata.from_dict(user_mention_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


