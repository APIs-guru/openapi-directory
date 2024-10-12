# ObjsUserProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_active** | **bool** |  | [optional] 
**api_app_id** | **str** |  | [optional] 
**avatar_hash** | **str** |  | 
**bot_id** | **str** |  | [optional] 
**display_name** | **str** |  | 
**display_name_normalized** | **str** |  | 
**email** | **str** |  | [optional] 
**fields** | **List[object]** |  | 
**first_name** | **str** |  | [optional] 
**guest_expiration_ts** | **int** |  | [optional] 
**guest_invited_by** | **str** |  | [optional] 
**image_1024** | **str** |  | [optional] 
**image_192** | **str** |  | [optional] 
**image_24** | **str** |  | [optional] 
**image_32** | **str** |  | [optional] 
**image_48** | **str** |  | [optional] 
**image_512** | **str** |  | [optional] 
**image_72** | **str** |  | [optional] 
**image_original** | **str** |  | [optional] 
**is_app_user** | **bool** |  | [optional] 
**is_custom_image** | **bool** |  | [optional] 
**is_restricted** | **bool** |  | [optional] 
**is_ultra_restricted** | **bool** |  | [optional] 
**last_avatar_image_hash** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**memberships_count** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**phone** | **str** |  | 
**pronouns** | **str** |  | [optional] 
**real_name** | **str** |  | 
**real_name_normalized** | **str** |  | 
**skype** | **str** |  | 
**status_default_emoji** | **str** |  | [optional] 
**status_default_text** | **str** |  | [optional] 
**status_default_text_canonical** | **str** |  | [optional] 
**status_emoji** | **str** |  | 
**status_expiration** | **int** |  | [optional] 
**status_text** | **str** |  | 
**status_text_canonical** | **str** |  | [optional] 
**team** | **str** |  | [optional] 
**title** | **str** |  | 
**updated** | **int** |  | [optional] 
**user_id** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.objs_user_profile import ObjsUserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsUserProfile from a JSON string
objs_user_profile_instance = ObjsUserProfile.from_json(json)
# print the JSON string representation of the object
print(ObjsUserProfile.to_json())

# convert the object into a dict
objs_user_profile_dict = objs_user_profile_instance.to_dict()
# create an instance of ObjsUserProfile from a dict
objs_user_profile_from_dict = ObjsUserProfile.from_dict(objs_user_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


