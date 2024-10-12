# ProfileImage

A profile image object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_of** | **str** | Determines the type of the profile image owner (user or organization) | [optional] 
**profile_image** | **str** | Profile image (640x640) | [optional] 
**profile_image_90** | **str** | Profile image (90x90) | [optional] 
**type_of** | **str** | Return profile_image | [optional] 

## Example

```python
from openapi_client.models.profile_image import ProfileImage

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileImage from a JSON string
profile_image_instance = ProfileImage.from_json(json)
# print the JSON string representation of the object
print(ProfileImage.to_json())

# convert the object into a dict
profile_image_dict = profile_image_instance.to_dict()
# create an instance of ProfileImage from a dict
profile_image_from_dict = ProfileImage.from_dict(profile_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


