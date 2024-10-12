# Person


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_buy_pro** | **bool** |  | [optional] 
**cover** | [**Cover**](Cover.md) |  | [optional] 
**coverphoto** | [**PhotoURLs**](PhotoURLs.md) |  | [optional] 
**coverphoto_farm** | **str** |  | [optional] 
**coverphoto_server** | **str** |  | [optional] 
**description** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**disable_keyboard_shortcuts** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**expire** | **bool** |  | [optional] 
**has_stats** | **bool** |  | [optional] 
**iconfarm** | **str** |  | [optional] 
**iconserver** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_ad_free** | **bool** |  | [optional] 
**ispro** | **bool** |  | [optional] 
**location** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**mbox_sha1sum** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**mobileurl** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**nsid** | **str** |  | [optional] 
**path_alias** | **str** |  | [optional] 
**photos** | [**PersonPhotos**](PersonPhotos.md) |  | [optional] 
**photosurl** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**profileurl** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**realname** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**timezone** | [**PersonTimezone**](PersonTimezone.md) |  | [optional] 
**unread_messages** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**user_secret** | **str** |  | [optional] 
**username** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**yintl** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.person import Person

# TODO update the JSON string below
json = "{}"
# create an instance of Person from a JSON string
person_instance = Person.from_json(json)
# print the JSON string representation of the object
print(Person.to_json())

# convert the object into a dict
person_dict = person_instance.to_dict()
# create an instance of Person from a dict
person_from_dict = Person.from_dict(person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


