# GetFavoritesByPersonID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **float** |  | [optional] 
**pages** | **float** |  | [optional] 
**perpage** | **float** |  | [optional] 
**photos** | [**List[Photo]**](Photo.md) |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_favorites_by_person_id200_response import GetFavoritesByPersonID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetFavoritesByPersonID200Response from a JSON string
get_favorites_by_person_id200_response_instance = GetFavoritesByPersonID200Response.from_json(json)
# print the JSON string representation of the object
print(GetFavoritesByPersonID200Response.to_json())

# convert the object into a dict
get_favorites_by_person_id200_response_dict = get_favorites_by_person_id200_response_instance.to_dict()
# create an instance of GetFavoritesByPersonID200Response from a dict
get_favorites_by_person_id200_response_from_dict = GetFavoritesByPersonID200Response.from_dict(get_favorites_by_person_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


