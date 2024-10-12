# SharedUser

The resource creator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_username** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**profile_image** | **str** | Profile image (640x640) | [optional] 
**profile_image_90** | **str** | Profile image (90x90) | [optional] 
**twitter_username** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**website_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shared_user import SharedUser

# TODO update the JSON string below
json = "{}"
# create an instance of SharedUser from a JSON string
shared_user_instance = SharedUser.from_json(json)
# print the JSON string representation of the object
print(SharedUser.to_json())

# convert the object into a dict
shared_user_dict = shared_user_instance.to_dict()
# create an instance of SharedUser from a dict
shared_user_from_dict = SharedUser.from_dict(shared_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


