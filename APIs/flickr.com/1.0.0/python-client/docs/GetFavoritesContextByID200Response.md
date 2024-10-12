# GetFavoritesContextByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**nextphoto** | [**ContextPhoto**](ContextPhoto.md) |  | [optional] 
**prevphoto** | [**ContextPhoto**](ContextPhoto.md) |  | [optional] 
**stat** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_favorites_context_by_id200_response import GetFavoritesContextByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetFavoritesContextByID200Response from a JSON string
get_favorites_context_by_id200_response_instance = GetFavoritesContextByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetFavoritesContextByID200Response.to_json())

# convert the object into a dict
get_favorites_context_by_id200_response_dict = get_favorites_context_by_id200_response_instance.to_dict()
# create an instance of GetFavoritesContextByID200Response from a dict
get_favorites_context_by_id200_response_from_dict = GetFavoritesContextByID200Response.from_dict(get_favorites_context_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


