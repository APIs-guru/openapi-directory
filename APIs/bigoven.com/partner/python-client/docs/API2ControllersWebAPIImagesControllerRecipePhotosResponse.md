# API2ControllersWebAPIImagesControllerRecipePhotosResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_count** | **int** | Gets or sets the result count. | [optional] 
**results** | [**List[BigOvenModelAPI2Photo]**](BigOvenModelAPI2Photo.md) | Gets or sets the results. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_images_controller_recipe_photos_response import API2ControllersWebAPIImagesControllerRecipePhotosResponse

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIImagesControllerRecipePhotosResponse from a JSON string
api2_controllers_web_api_images_controller_recipe_photos_response_instance = API2ControllersWebAPIImagesControllerRecipePhotosResponse.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIImagesControllerRecipePhotosResponse.to_json())

# convert the object into a dict
api2_controllers_web_api_images_controller_recipe_photos_response_dict = api2_controllers_web_api_images_controller_recipe_photos_response_instance.to_dict()
# create an instance of API2ControllersWebAPIImagesControllerRecipePhotosResponse from a dict
api2_controllers_web_api_images_controller_recipe_photos_response_from_dict = API2ControllersWebAPIImagesControllerRecipePhotosResponse.from_dict(api2_controllers_web_api_images_controller_recipe_photos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


