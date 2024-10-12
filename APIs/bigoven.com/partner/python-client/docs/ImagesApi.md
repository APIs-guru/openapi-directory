# openapi_client.ImagesApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**images_get**](ImagesApi.md#images_get) | **GET** /recipe/{recipeId}/images | Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
[**images_get_pending_by_user**](ImagesApi.md#images_get_pending_by_user) | **GET** /recipe/photos/pending | Gets the pending by user.
[**images_get_recipe_photos**](ImagesApi.md#images_get_recipe_photos) | **GET** /recipe/{recipeId}/photos | Get all the photos for a recipe
[**images_get_scan_images**](ImagesApi.md#images_get_scan_images) | **GET** /recipe/{recipeId}/scans | Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
[**images_upload_recipe_image**](ImagesApi.md#images_upload_recipe_image) | **POST** /recipe/{recipeId}/image | POST: /recipe/{recipeId}/image?lat&#x3D;42&amp;amp;lng&#x3D;21&amp;amp;caption&#x3D;this%20is%20my%20caption                              Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint               needs a multipart/mime content header and will not parse JSON in the body along with it.                             Testing with Postman (validated 11/20/2015):               1) Remove the Content-Type header; add authentication information               2) On the request, click Body and choose \&quot;form-data\&quot;, then add a line item with \&quot;key\&quot; column set to \&quot;file\&quot; and on the right,               change the type of the input from Text to File.  Browse and choose a JPG.
[**images_upload_user_avatar**](ImagesApi.md#images_upload_user_avatar) | **POST** /image/avatar | POST: /image/avatar                             Testing with Postman (validated 11/20/2015):              1) Remove the Content-Type header; add authentication information              2) On the request, click Body and choose \&quot;form-data\&quot;, then add a line item with \&quot;key\&quot; column set to \&quot;file\&quot; and on the right,              change the type of the input from Text to File.  Browse and choose a JPG.


# **images_get**
> List[BigOvenModelAPIImage] images_get(recipe_id)

Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_image import BigOvenModelAPIImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagesApi(api_client)
    recipe_id = 56 # int | Recipe ID (required)

    try:
        # Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
        api_response = api_instance.images_get(recipe_id)
        print("The response of ImagesApi->images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| Recipe ID (required) | 

### Return type

[**List[BigOvenModelAPIImage]**](BigOvenModelAPIImage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_get_pending_by_user**
> API2ControllersWebAPIImagesControllerRecipePhotosResponse images_get_pending_by_user()

Gets the pending by user.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_images_controller_recipe_photos_response import API2ControllersWebAPIImagesControllerRecipePhotosResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagesApi(api_client)

    try:
        # Gets the pending by user.
        api_response = api_instance.images_get_pending_by_user()
        print("The response of ImagesApi->images_get_pending_by_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_get_pending_by_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**API2ControllersWebAPIImagesControllerRecipePhotosResponse**](API2ControllersWebAPIImagesControllerRecipePhotosResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_get_recipe_photos**
> API2ControllersWebAPIImagesControllerRecipePhotosResponse images_get_recipe_photos(recipe_id, pg=pg, rpp=rpp)

Get all the photos for a recipe

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_images_controller_recipe_photos_response import API2ControllersWebAPIImagesControllerRecipePhotosResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagesApi(api_client)
    recipe_id = 56 # int | Recipe ID (required)
    pg = 56 # int |  (optional)
    rpp = 56 # int |  (optional)

    try:
        # Get all the photos for a recipe
        api_response = api_instance.images_get_recipe_photos(recipe_id, pg=pg, rpp=rpp)
        print("The response of ImagesApi->images_get_recipe_photos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_get_recipe_photos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| Recipe ID (required) | 
 **pg** | **int**|  | [optional] 
 **rpp** | **int**|  | [optional] 

### Return type

[**API2ControllersWebAPIImagesControllerRecipePhotosResponse**](API2ControllersWebAPIImagesControllerRecipePhotosResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_get_scan_images**
> List[BigOvenModelAPIImage] images_get_scan_images(recipe_id)

Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_image import BigOvenModelAPIImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagesApi(api_client)
    recipe_id = 56 # int | the recipe identifier (int)

    try:
        # Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
        api_response = api_instance.images_get_scan_images(recipe_id)
        print("The response of ImagesApi->images_get_scan_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_get_scan_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| the recipe identifier (int) | 

### Return type

[**List[BigOvenModelAPIImage]**](BigOvenModelAPIImage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_upload_recipe_image**
> object images_upload_recipe_image(recipe_id, caption=caption, lat=lat, lng=lng)

POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption                              Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint               needs a multipart/mime content header and will not parse JSON in the body along with it.                             Testing with Postman (validated 11/20/2015):               1) Remove the Content-Type header; add authentication information               2) On the request, click Body and choose \"form-data\", then add a line item with \"key\" column set to \"file\" and on the right,               change the type of the input from Text to File.  Browse and choose a JPG.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagesApi(api_client)
    recipe_id = 'recipe_id_example' # str | 
    caption = 'caption_example' # str |  (optional)
    lat = 3.4 # float |  (optional)
    lng = 3.4 # float |  (optional)

    try:
        # POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption                              Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint               needs a multipart/mime content header and will not parse JSON in the body along with it.                             Testing with Postman (validated 11/20/2015):               1) Remove the Content-Type header; add authentication information               2) On the request, click Body and choose \"form-data\", then add a line item with \"key\" column set to \"file\" and on the right,               change the type of the input from Text to File.  Browse and choose a JPG.
        api_response = api_instance.images_upload_recipe_image(recipe_id, caption=caption, lat=lat, lng=lng)
        print("The response of ImagesApi->images_upload_recipe_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_upload_recipe_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **str**|  | 
 **caption** | **str**|  | [optional] 
 **lat** | **float**|  | [optional] 
 **lng** | **float**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | if bad request (e.g., missing parameters) |  -  |
**401** | if the user is unknown |  -  |
**415** | if unsupported media type (e.g., bad JPG) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_upload_user_avatar**
> object images_upload_user_avatar()

POST: /image/avatar                             Testing with Postman (validated 11/20/2015):              1) Remove the Content-Type header; add authentication information              2) On the request, click Body and choose \"form-data\", then add a line item with \"key\" column set to \"file\" and on the right,              change the type of the input from Text to File.  Browse and choose a JPG.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagesApi(api_client)

    try:
        # POST: /image/avatar                             Testing with Postman (validated 11/20/2015):              1) Remove the Content-Type header; add authentication information              2) On the request, click Body and choose \"form-data\", then add a line item with \"key\" column set to \"file\" and on the right,              change the type of the input from Text to File.  Browse and choose a JPG.
        api_response = api_instance.images_upload_user_avatar()
        print("The response of ImagesApi->images_upload_user_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_upload_user_avatar: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | if bad request (e.g., missing parameters) |  -  |
**401** | if the user is unknown |  -  |
**415** | if unsupported media type (e.g., bad JPG) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

