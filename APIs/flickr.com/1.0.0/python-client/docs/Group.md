# Group


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blast** | [**GroupBlast**](GroupBlast.md) |  | [optional] 
**cover** | [**Cover**](Cover.md) |  | [optional] 
**coverphoto_farm** | **str** |  | [optional] 
**coverphoto_server** | **str** |  | [optional] 
**coverphoto_url** | [**PhotoURLs**](PhotoURLs.md) |  | [optional] 
**description** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**iconfarm** | **str** |  | [optional] 
**iconserver** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_admin** | **bool** |  | [optional] 
**is_member** | **bool** |  | [optional] 
**is_moderator** | **bool** |  | [optional] 
**ispoolmoderated** | **bool** |  | [optional] 
**lang** | **str** |  | [optional] 
**members** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**name** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**path_alias** | **str** |  | [optional] 
**pool_count** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**pool_rows** | **int** |  | [optional] 
**privacy** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**restrictions** | [**GroupRestrictions**](GroupRestrictions.md) |  | [optional] 
**roles** | [**GroupRoles**](GroupRoles.md) |  | [optional] 
**rules** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**throttle** | [**GroupThrottle**](GroupThrottle.md) |  | [optional] 
**topic_count** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 

## Example

```python
from openapi_client.models.group import Group

# TODO update the JSON string below
json = "{}"
# create an instance of Group from a JSON string
group_instance = Group.from_json(json)
# print the JSON string representation of the object
print(Group.to_json())

# convert the object into a dict
group_dict = group_instance.to_dict()
# create an instance of Group from a dict
group_from_dict = Group.from_dict(group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


