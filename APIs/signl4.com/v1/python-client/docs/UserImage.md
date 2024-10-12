# UserImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** |  | [optional] 
**content_disposition** | **str** |  | [optional] 
**content_encoding** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_image import UserImage

# TODO update the JSON string below
json = "{}"
# create an instance of UserImage from a JSON string
user_image_instance = UserImage.from_json(json)
# print the JSON string representation of the object
print(UserImage.to_json())

# convert the object into a dict
user_image_dict = user_image_instance.to_dict()
# create an instance of UserImage from a dict
user_image_from_dict = UserImage.from_dict(user_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


