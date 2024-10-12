# GetSavedFilters200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] [readonly] 
**next** | **str** |  | [optional] [readonly] 
**page** | **int** |  | [optional] [readonly] 
**previous** | **str** |  | [optional] [readonly] 
**results** | [**List[ProjectSavedFilter]**](ProjectSavedFilter.md) |  | [optional] [readonly] 
**size** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_saved_filters200_response import GetSavedFilters200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSavedFilters200Response from a JSON string
get_saved_filters200_response_instance = GetSavedFilters200Response.from_json(json)
# print the JSON string representation of the object
print(GetSavedFilters200Response.to_json())

# convert the object into a dict
get_saved_filters200_response_dict = get_saved_filters200_response_instance.to_dict()
# create an instance of GetSavedFilters200Response from a dict
get_saved_filters200_response_from_dict = GetSavedFilters200Response.from_dict(get_saved_filters200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


