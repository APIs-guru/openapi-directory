# ObjsBotProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**deleted** | **bool** |  | 
**icons** | [**BotsInfoSchemaBotIcons**](BotsInfoSchemaBotIcons.md) |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**team_id** | **str** |  | 
**updated** | **int** |  | 

## Example

```python
from openapi_client.models.objs_bot_profile import ObjsBotProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsBotProfile from a JSON string
objs_bot_profile_instance = ObjsBotProfile.from_json(json)
# print the JSON string representation of the object
print(ObjsBotProfile.to_json())

# convert the object into a dict
objs_bot_profile_dict = objs_bot_profile_instance.to_dict()
# create an instance of ObjsBotProfile from a dict
objs_bot_profile_from_dict = ObjsBotProfile.from_dict(objs_bot_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


