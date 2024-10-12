# openapi_client.NoteApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**note_delete**](NoteApi.md#note_delete) | **DELETE** /recipe/{recipeId}/note/{noteId} | Delete a review                  do a DELETE Http request of /note/{ID}
[**note_get**](NoteApi.md#note_get) | **GET** /recipe/{recipeId}/note/{noteId} | Get a given note. Make sure you&#39;re passing authentication information in the header for the user who owns the note.
[**note_get_notes**](NoteApi.md#note_get_notes) | **GET** /recipe/{recipeId}/notes | recipe/100/notes
[**note_post**](NoteApi.md#note_post) | **POST** /recipe/{recipeId}/note | HTTP POST a new note into the system.
[**note_put**](NoteApi.md#note_put) | **PUT** /recipe/{recipeId}/note/{noteId} | HTTP PUT (update) a Recipe note (RecipeNote).


# **note_delete**
> object note_delete(recipe_id, note_id)

Delete a review                  do a DELETE Http request of /note/{ID}

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
    api_instance = openapi_client.NoteApi(api_client)
    recipe_id = 56 # int | recipeId (int)
    note_id = 56 # int | noteId (int)

    try:
        # Delete a review                  do a DELETE Http request of /note/{ID}
        api_response = api_instance.note_delete(recipe_id, note_id)
        print("The response of NoteApi->note_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->note_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| recipeId (int) | 
 **note_id** | **int**| noteId (int) | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **note_get**
> BigOvenModelAPIRecipeNote note_get(recipe_id, note_id)

Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_recipe_note import BigOvenModelAPIRecipeNote
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
    api_instance = openapi_client.NoteApi(api_client)
    recipe_id = 56 # int | recipe identifier (integer)
    note_id = 56 # int | The note ID (note -- it's not the RecipeID)

    try:
        # Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.
        api_response = api_instance.note_get(recipe_id, note_id)
        print("The response of NoteApi->note_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->note_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| recipe identifier (integer) | 
 **note_id** | **int**| The note ID (note -- it&#39;s not the RecipeID) | 

### Return type

[**BigOvenModelAPIRecipeNote**](BigOvenModelAPIRecipeNote.md)

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

# **note_get_notes**
> BigOvenModelAPIRecipeNoteList note_get_notes(recipe_id, pg=pg, rpp=rpp)

recipe/100/notes

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_recipe_note_list import BigOvenModelAPIRecipeNoteList
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
    api_instance = openapi_client.NoteApi(api_client)
    recipe_id = 56 # int | recipeId (int)
    pg = 56 # int | page (int, starting from 1) (optional)
    rpp = 56 # int | recipeId (optional)

    try:
        # recipe/100/notes
        api_response = api_instance.note_get_notes(recipe_id, pg=pg, rpp=rpp)
        print("The response of NoteApi->note_get_notes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->note_get_notes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| recipeId (int) | 
 **pg** | **int**| page (int, starting from 1) | [optional] 
 **rpp** | **int**| recipeId | [optional] 

### Return type

[**BigOvenModelAPIRecipeNoteList**](BigOvenModelAPIRecipeNoteList.md)

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

# **note_post**
> BigOvenModelAPI2RecipeNote note_post(recipe_id, api2_controllers_web_api_note_controller_note_request)

HTTP POST a new note into the system.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_note_controller_note_request import API2ControllersWebAPINoteControllerNoteRequest
from openapi_client.models.big_oven_model_api2_recipe_note import BigOvenModelAPI2RecipeNote
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
    api_instance = openapi_client.NoteApi(api_client)
    recipe_id = 56 # int | recipeId (int)
    api2_controllers_web_api_note_controller_note_request = openapi_client.API2ControllersWebAPINoteControllerNoteRequest() # API2ControllersWebAPINoteControllerNoteRequest | a recipe note, with fields: Date (YYYY-MM-DD string), Notes (string), People (string), Variations (string), RecipeID (int?)

    try:
        # HTTP POST a new note into the system.
        api_response = api_instance.note_post(recipe_id, api2_controllers_web_api_note_controller_note_request)
        print("The response of NoteApi->note_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->note_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| recipeId (int) | 
 **api2_controllers_web_api_note_controller_note_request** | [**API2ControllersWebAPINoteControllerNoteRequest**](API2ControllersWebAPINoteControllerNoteRequest.md)| a recipe note, with fields: Date (YYYY-MM-DD string), Notes (string), People (string), Variations (string), RecipeID (int?) | 

### Return type

[**BigOvenModelAPI2RecipeNote**](BigOvenModelAPI2RecipeNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **note_put**
> BigOvenModelAPIRecipeNote note_put(recipe_id, note_id, api2_controllers_web_api_note_controller_note_request)

HTTP PUT (update) a Recipe note (RecipeNote).

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_note_controller_note_request import API2ControllersWebAPINoteControllerNoteRequest
from openapi_client.models.big_oven_model_api_recipe_note import BigOvenModelAPIRecipeNote
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
    api_instance = openapi_client.NoteApi(api_client)
    recipe_id = 56 # int | 
    note_id = 56 # int | 
    api2_controllers_web_api_note_controller_note_request = openapi_client.API2ControllersWebAPINoteControllerNoteRequest() # API2ControllersWebAPINoteControllerNoteRequest | 

    try:
        # HTTP PUT (update) a Recipe note (RecipeNote).
        api_response = api_instance.note_put(recipe_id, note_id, api2_controllers_web_api_note_controller_note_request)
        print("The response of NoteApi->note_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->note_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**|  | 
 **note_id** | **int**|  | 
 **api2_controllers_web_api_note_controller_note_request** | [**API2ControllersWebAPINoteControllerNoteRequest**](API2ControllersWebAPINoteControllerNoteRequest.md)|  | 

### Return type

[**BigOvenModelAPIRecipeNote**](BigOvenModelAPIRecipeNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

