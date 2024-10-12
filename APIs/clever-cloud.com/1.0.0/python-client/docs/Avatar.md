# Avatar

If you want to upload an image from your computer, send the image in the body of the request without anything else.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AvatarSource**](AvatarSource.md) |  | 

## Example

```python
from openapi_client.models.avatar import Avatar

# TODO update the JSON string below
json = "{}"
# create an instance of Avatar from a JSON string
avatar_instance = Avatar.from_json(json)
# print the JSON string representation of the object
print(Avatar.to_json())

# convert the object into a dict
avatar_dict = avatar_instance.to_dict()
# create an instance of Avatar from a dict
avatar_from_dict = Avatar.from_dict(avatar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


