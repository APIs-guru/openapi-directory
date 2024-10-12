# API2ModelsRecipesRecipeVideoResponse

DTO used to return the details of a recipe video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inserted_on** | **datetime** | Gets or sets the date the video was added. | [optional] 
**is_primary_video** | **bool** | Gets or sets a value indicating whether the video is the primary video of the recipe. | [optional] 
**media_id** | **str** | Gets or sets the JWPlayer media id. | [optional] 
**vid_id** | **int** | Gets or sets the video id. | [optional] 

## Example

```python
from openapi_client.models.api2_models_recipes_recipe_video_response import API2ModelsRecipesRecipeVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsRecipesRecipeVideoResponse from a JSON string
api2_models_recipes_recipe_video_response_instance = API2ModelsRecipesRecipeVideoResponse.from_json(json)
# print the JSON string representation of the object
print(API2ModelsRecipesRecipeVideoResponse.to_json())

# convert the object into a dict
api2_models_recipes_recipe_video_response_dict = api2_models_recipes_recipe_video_response_instance.to_dict()
# create an instance of API2ModelsRecipesRecipeVideoResponse from a dict
api2_models_recipes_recipe_video_response_from_dict = API2ModelsRecipesRecipeVideoResponse.from_dict(api2_models_recipes_recipe_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


