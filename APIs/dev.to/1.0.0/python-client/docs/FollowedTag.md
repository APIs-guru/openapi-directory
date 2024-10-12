# FollowedTag

Representation of a followed tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Tag id | 
**name** | **str** |  | 
**points** | **float** |  | 

## Example

```python
from openapi_client.models.followed_tag import FollowedTag

# TODO update the JSON string below
json = "{}"
# create an instance of FollowedTag from a JSON string
followed_tag_instance = FollowedTag.from_json(json)
# print the JSON string representation of the object
print(FollowedTag.to_json())

# convert the object into a dict
followed_tag_dict = followed_tag_instance.to_dict()
# create an instance of FollowedTag from a dict
followed_tag_from_dict = FollowedTag.from_dict(followed_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


