# AvatarSource



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | github or gravatar | 
**value** | [**URL**](URL.md) |  | 

## Example

```python
from openapi_client.models.avatar_source import AvatarSource

# TODO update the JSON string below
json = "{}"
# create an instance of AvatarSource from a JSON string
avatar_source_instance = AvatarSource.from_json(json)
# print the JSON string representation of the object
print(AvatarSource.to_json())

# convert the object into a dict
avatar_source_dict = avatar_source_instance.to_dict()
# create an instance of AvatarSource from a dict
avatar_source_from_dict = AvatarSource.from_dict(avatar_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


