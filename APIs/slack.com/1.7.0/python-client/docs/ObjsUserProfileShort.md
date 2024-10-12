# ObjsUserProfileShort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_hash** | **str** |  | 
**display_name** | **str** |  | 
**display_name_normalized** | **str** |  | [optional] 
**first_name** | **str** |  | 
**image_72** | **str** |  | 
**is_restricted** | **bool** |  | 
**is_ultra_restricted** | **bool** |  | 
**name** | **str** |  | 
**real_name** | **str** |  | 
**real_name_normalized** | **str** |  | [optional] 
**team** | **str** |  | 

## Example

```python
from openapi_client.models.objs_user_profile_short import ObjsUserProfileShort

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsUserProfileShort from a JSON string
objs_user_profile_short_instance = ObjsUserProfileShort.from_json(json)
# print the JSON string representation of the object
print(ObjsUserProfileShort.to_json())

# convert the object into a dict
objs_user_profile_short_dict = objs_user_profile_short_instance.to_dict()
# create an instance of ObjsUserProfileShort from a dict
objs_user_profile_short_from_dict = ObjsUserProfileShort.from_dict(objs_user_profile_short_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


