# GetCategoriesAspectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_aspects** | [**List[CategoryAspect]**](CategoryAspect.md) | An array of aspects that are appropriate or necessary for accurately describing items in a particular leaf category. | [optional] 
**category_tree_id** | **str** | The unique identifier of the eBay category tree being requested. | [optional] 
**category_tree_version** | **str** | The version of the category tree that is returned in the categoryTreeId field. | [optional] 

## Example

```python
from openapi_client.models.get_categories_aspect_response import GetCategoriesAspectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCategoriesAspectResponse from a JSON string
get_categories_aspect_response_instance = GetCategoriesAspectResponse.from_json(json)
# print the JSON string representation of the object
print(GetCategoriesAspectResponse.to_json())

# convert the object into a dict
get_categories_aspect_response_dict = get_categories_aspect_response_instance.to_dict()
# create an instance of GetCategoriesAspectResponse from a dict
get_categories_aspect_response_from_dict = GetCategoriesAspectResponse.from_dict(get_categories_aspect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


