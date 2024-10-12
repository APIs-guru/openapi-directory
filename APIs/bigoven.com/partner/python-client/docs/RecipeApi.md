# openapi_client.RecipeApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_auto_complete**](RecipeApi.md#recipe_auto_complete) | **GET** /recipe/autocomplete | Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
[**recipe_auto_complete_all_recipes**](RecipeApi.md#recipe_auto_complete_all_recipes) | **GET** /recipe/autocomplete/all | Automatics the complete all recipes.
[**recipe_auto_complete_my_recipes**](RecipeApi.md#recipe_auto_complete_my_recipes) | **GET** /recipe/autocomplete/mine | Automatics the complete my recipes.
[**recipe_categories**](RecipeApi.md#recipe_categories) | **GET** /recipe/categories | Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
[**recipe_delete**](RecipeApi.md#recipe_delete) | **DELETE** /recipe/{id} | Delete a Recipe (you must be authenticated as an owner of the recipe)
[**recipe_feedback**](RecipeApi.md#recipe_feedback) | **POST** /recipe/{recipeId}/feedback | Feedback on a Recipe -- for internal BigOven editors
[**recipe_get**](RecipeApi.md#recipe_get) | **GET** /recipe/{id} | Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
[**recipe_get_active_recipe**](RecipeApi.md#recipe_get_active_recipe) | **GET** /recipe/get/active/recipe | Returns last active recipe for the user
[**recipe_get_random_recipe**](RecipeApi.md#recipe_get_random_recipe) | **GET** /recipes/random | Get a random, home-page-quality Recipe.
[**recipe_get_recipe_with_steps**](RecipeApi.md#recipe_get_recipe_with_steps) | **GET** /recipe/steps/{id} | Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
[**recipe_get_step**](RecipeApi.md#recipe_get_step) | **POST** /recipe/get/saved/step | Gets recipe single step as text
[**recipe_get_step_number**](RecipeApi.md#recipe_get_step_number) | **POST** /recipe/get/step/number | Returns stored step number and number of steps in recipe
[**recipe_get_steps**](RecipeApi.md#recipe_get_steps) | **POST** /recipe/post/step | Stores recipe step number and returns saved step data
[**recipe_get_v2**](RecipeApi.md#recipe_get_v2) | **GET** /recipes/{id} | Same as GET recipe but also includes the recipe videos (if any)
[**recipe_post**](RecipeApi.md#recipe_post) | **POST** /recipe | Add a new recipe
[**recipe_put**](RecipeApi.md#recipe_put) | **PUT** /recipe | Update a recipe
[**recipe_raves**](RecipeApi.md#recipe_raves) | **GET** /recipes/raves | Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
[**recipe_recent_views**](RecipeApi.md#recipe_recent_views) | **GET** /recipes/recentviews | Get a list of recipes that the authenticated user has most recently viewed
[**recipe_recipe_search**](RecipeApi.md#recipe_recipe_search) | **GET** /recipes | Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.              Use any_kw to search across the entire recipe.              If you&#39;d like to limit by course, set the parameter \&quot;include_primarycat\&quot; to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).              If you&#39;d like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.              If you&#39;d like to include a category, set include_cat to one or more (comma-separated) of those categories to include.              To explicitly include an ingredient in your search, set the parameter \&quot;include_ing\&quot; to a CSV of up to three ingredients, e.g.:include_ing&#x3D;mustard,chicken,beef%20tips              To explicitly exclude an ingredient in your search, set the parameter \&quot;exclude_ing\&quot; to a CSV of up to three ingredients.              All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).              So, to get the third page of a result set paged with 25 recipes per page, you&#39;d pass pg&#x3D;3&amp;amp;rpp&#x3D;25              If you&#39;d like to target searches to just a single target user&#39;s recipes, set userId&#x3D;the target userId (number).              Or, you can set username&#x3D;theirusername              vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps              cuisine              photos              filter&#x3D;added,try,favorites,myrecipes\\r\\n\\r\\n              folder&#x3D;FolderNameCaseSensitive              coll&#x3D;ID of Collection
[**recipe_recipe_search_random**](RecipeApi.md#recipe_recipe_search_random) | **GET** /recipes/top25random | Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.              Use any_kw to search across the entire recipe.              If you&#39;d like to limit by course, set the parameter \&quot;include_primarycat\&quot; to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).              If you&#39;d like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.              If you&#39;d like to include a category, set include_cat to one or more (comma-separated) of those categories to include.              To explicitly include an ingredient in your search, set the parameter \&quot;include_ing\&quot; to a CSV of up to three ingredients, e.g.:include_ing&#x3D;mustard,chicken,beef%20tips              To explicitly exclude an ingredient in your search, set the parameter \&quot;exclude_ing\&quot; to a CSV of up to three ingredients.              All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).              So, to get the third page of a result set paged with 25 recipes per page, you&#39;d pass pg&#x3D;3&amp;amp;rpp&#x3D;25              If you&#39;d like to target searches to just a single target user&#39;s recipes, set userId&#x3D;the target userId (number).              Or, you can set username&#x3D;theirusername              vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps              cuisine              photos              filter&#x3D;added,try,favorites,myrecipes\\r\\n\\r\\n              folder&#x3D;FolderNameCaseSensitive              coll&#x3D;ID of Collection
[**recipe_related**](RecipeApi.md#recipe_related) | **GET** /recipe/{recipeId}/related | Get recipes related to the given recipeId
[**recipe_scan**](RecipeApi.md#recipe_scan) | **POST** /recipe/scan | POST an image as a new RecipeScan request                  1)  Fetch the filename -- DONE                  2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE                  3)  Create 120 thumbnail size  in pics/scan/120 -- DONE                  4)  Insert the CloudTasks record                  5)  Create the HIT                  6)  Update the CloudTasks record with the HIT ID                  7)  Email the requesing user                  8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
[**recipe_zap_recipe**](RecipeApi.md#recipe_zap_recipe) | **GET** /recipe/{id}/zap | Zaps the recipe.


# **recipe_auto_complete**
> List[str] recipe_auto_complete(query, limit=limit)

Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.

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
    api_instance = openapi_client.RecipeApi(api_client)
    query = 'query_example' # str | 
    limit = 56 # int |  (optional)

    try:
        # Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
        api_response = api_instance.recipe_auto_complete(query, limit=limit)
        print("The response of RecipeApi->recipe_auto_complete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_auto_complete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 
 **limit** | **int**|  | [optional] 

### Return type

**List[str]**

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

# **recipe_auto_complete_all_recipes**
> List[BigOvenModelRecipeInfoTiny] recipe_auto_complete_all_recipes(query, limit)

Automatics the complete all recipes.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_recipe_info_tiny import BigOvenModelRecipeInfoTiny
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
    api_instance = openapi_client.RecipeApi(api_client)
    query = 'query_example' # str | The query.
    limit = 56 # int | The limit.

    try:
        # Automatics the complete all recipes.
        api_response = api_instance.recipe_auto_complete_all_recipes(query, limit)
        print("The response of RecipeApi->recipe_auto_complete_all_recipes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_auto_complete_all_recipes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The query. | 
 **limit** | **int**| The limit. | 

### Return type

[**List[BigOvenModelRecipeInfoTiny]**](BigOvenModelRecipeInfoTiny.md)

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

# **recipe_auto_complete_my_recipes**
> List[BigOvenModelRecipeInfoTiny] recipe_auto_complete_my_recipes(query, limit)

Automatics the complete my recipes.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_recipe_info_tiny import BigOvenModelRecipeInfoTiny
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
    api_instance = openapi_client.RecipeApi(api_client)
    query = 'query_example' # str | The query.
    limit = 56 # int | The limit.

    try:
        # Automatics the complete my recipes.
        api_response = api_instance.recipe_auto_complete_my_recipes(query, limit)
        print("The response of RecipeApi->recipe_auto_complete_my_recipes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_auto_complete_my_recipes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The query. | 
 **limit** | **int**| The limit. | 

### Return type

[**List[BigOvenModelRecipeInfoTiny]**](BigOvenModelRecipeInfoTiny.md)

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

# **recipe_categories**
> List[BigOvenModelRecipeCategory] recipe_categories()

Get a list of recipe categories (the ID field can be used for include_cat in search parameters)

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_recipe_category import BigOvenModelRecipeCategory
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
    api_instance = openapi_client.RecipeApi(api_client)

    try:
        # Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
        api_response = api_instance.recipe_categories()
        print("The response of RecipeApi->recipe_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_categories: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[BigOvenModelRecipeCategory]**](BigOvenModelRecipeCategory.md)

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

# **recipe_delete**
> object recipe_delete(id)

Delete a Recipe (you must be authenticated as an owner of the recipe)

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
    api_instance = openapi_client.RecipeApi(api_client)
    id = 56 # int | 

    try:
        # Delete a Recipe (you must be authenticated as an owner of the recipe)
        api_response = api_instance.recipe_delete(id)
        print("The response of RecipeApi->recipe_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

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

# **recipe_feedback**
> object recipe_feedback(recipe_id, api2_models_recipes_feedback_dto)

Feedback on a Recipe -- for internal BigOven editors

### Example


```python
import openapi_client
from openapi_client.models.api2_models_recipes_feedback_dto import API2ModelsRecipesFeedbackDTO
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
    api_instance = openapi_client.RecipeApi(api_client)
    recipe_id = 56 # int | 
    api2_models_recipes_feedback_dto = openapi_client.API2ModelsRecipesFeedbackDTO() # API2ModelsRecipesFeedbackDTO | The payload for feedback, which includes the field \"feedback\"

    try:
        # Feedback on a Recipe -- for internal BigOven editors
        api_response = api_instance.recipe_feedback(recipe_id, api2_models_recipes_feedback_dto)
        print("The response of RecipeApi->recipe_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**|  | 
 **api2_models_recipes_feedback_dto** | [**API2ModelsRecipesFeedbackDTO**](API2ModelsRecipesFeedbackDTO.md)| The payload for feedback, which includes the field \&quot;feedback\&quot; | 

### Return type

**object**

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

# **recipe_get**
> BigOvenModelAPI2Recipe recipe_get(id, prefetch=prefetch)

Return full Recipe detail. Returns 403 if the recipe is owned by someone else.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_recipe import BigOvenModelAPI2Recipe
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
    api_instance = openapi_client.RecipeApi(api_client)
    id = 56 # int | The Recipe ID to retrieve
    prefetch = True # bool | The prefetch. (optional)

    try:
        # Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
        api_response = api_instance.recipe_get(id, prefetch=prefetch)
        print("The response of RecipeApi->recipe_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The Recipe ID to retrieve | 
 **prefetch** | **bool**| The prefetch. | [optional] 

### Return type

[**BigOvenModelAPI2Recipe**](BigOvenModelAPI2Recipe.md)

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

# **recipe_get_active_recipe**
> BigOvenResult recipe_get_active_recipe(user_name)

Returns last active recipe for the user

### Example


```python
import openapi_client
from openapi_client.models.big_oven_result import BigOvenResult
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
    api_instance = openapi_client.RecipeApi(api_client)
    user_name = 'user_name_example' # str | 

    try:
        # Returns last active recipe for the user
        api_response = api_instance.recipe_get_active_recipe(user_name)
        print("The response of RecipeApi->recipe_get_active_recipe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_active_recipe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**|  | 

### Return type

[**BigOvenResult**](BigOvenResult.md)

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

# **recipe_get_random_recipe**
> BigOvenModelAPIRecipe recipe_get_random_recipe()

Get a random, home-page-quality Recipe.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_recipe import BigOvenModelAPIRecipe
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
    api_instance = openapi_client.RecipeApi(api_client)

    try:
        # Get a random, home-page-quality Recipe.
        api_response = api_instance.recipe_get_random_recipe()
        print("The response of RecipeApi->recipe_get_random_recipe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_random_recipe: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BigOvenModelAPIRecipe**](BigOvenModelAPIRecipe.md)

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

# **recipe_get_recipe_with_steps**
> BigOvenModelAPI2Recipe recipe_get_recipe_with_steps(id, prefetch=prefetch)

Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_recipe import BigOvenModelAPI2Recipe
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
    api_instance = openapi_client.RecipeApi(api_client)
    id = 56 # int | the Recipe ID to retrieve
    prefetch = True # bool |  (optional)

    try:
        # Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
        api_response = api_instance.recipe_get_recipe_with_steps(id, prefetch=prefetch)
        print("The response of RecipeApi->recipe_get_recipe_with_steps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_recipe_with_steps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| the Recipe ID to retrieve | 
 **prefetch** | **bool**|  | [optional] 

### Return type

[**BigOvenModelAPI2Recipe**](BigOvenModelAPI2Recipe.md)

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

# **recipe_get_step**
> str recipe_get_step(user_name, recipe_id, step_id)

Gets recipe single step as text

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
    api_instance = openapi_client.RecipeApi(api_client)
    user_name = 'user_name_example' # str | 
    recipe_id = 56 # int | 
    step_id = 56 # int | 

    try:
        # Gets recipe single step as text
        api_response = api_instance.recipe_get_step(user_name, recipe_id, step_id)
        print("The response of RecipeApi->recipe_get_step:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_step: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**|  | 
 **recipe_id** | **int**|  | 
 **step_id** | **int**|  | 

### Return type

**str**

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

# **recipe_get_step_number**
> API2Result recipe_get_step_number(user_name, recipe_id)

Returns stored step number and number of steps in recipe

### Example


```python
import openapi_client
from openapi_client.models.api2_result import API2Result
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
    api_instance = openapi_client.RecipeApi(api_client)
    user_name = 'user_name_example' # str | 
    recipe_id = 56 # int | 

    try:
        # Returns stored step number and number of steps in recipe
        api_response = api_instance.recipe_get_step_number(user_name, recipe_id)
        print("The response of RecipeApi->recipe_get_step_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_step_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**|  | 
 **recipe_id** | **int**|  | 

### Return type

[**API2Result**](API2Result.md)

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

# **recipe_get_steps**
> BigOvenResult recipe_get_steps(user_name, recipe_id, step_id)

Stores recipe step number and returns saved step data

### Example


```python
import openapi_client
from openapi_client.models.big_oven_result import BigOvenResult
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
    api_instance = openapi_client.RecipeApi(api_client)
    user_name = 'user_name_example' # str | 
    recipe_id = 56 # int | 
    step_id = 56 # int | 

    try:
        # Stores recipe step number and returns saved step data
        api_response = api_instance.recipe_get_steps(user_name, recipe_id, step_id)
        print("The response of RecipeApi->recipe_get_steps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_steps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**|  | 
 **recipe_id** | **int**|  | 
 **step_id** | **int**|  | 

### Return type

[**BigOvenResult**](BigOvenResult.md)

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

# **recipe_get_v2**
> API2ModelsRecipesRecipeResponse recipe_get_v2(id, prefetch=prefetch)

Same as GET recipe but also includes the recipe videos (if any)

### Example


```python
import openapi_client
from openapi_client.models.api2_models_recipes_recipe_response import API2ModelsRecipesRecipeResponse
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
    api_instance = openapi_client.RecipeApi(api_client)
    id = 56 # int | The Recipe ID to retrieve
    prefetch = True # bool | The prefetch. (optional)

    try:
        # Same as GET recipe but also includes the recipe videos (if any)
        api_response = api_instance.recipe_get_v2(id, prefetch=prefetch)
        print("The response of RecipeApi->recipe_get_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_get_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The Recipe ID to retrieve | 
 **prefetch** | **bool**| The prefetch. | [optional] 

### Return type

[**API2ModelsRecipesRecipeResponse**](API2ModelsRecipesRecipeResponse.md)

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

# **recipe_post**
> BigOvenModelAPIRecipe recipe_post(big_oven_model_api_recipe)

Add a new recipe

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_recipe import BigOvenModelAPIRecipe
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
    api_instance = openapi_client.RecipeApi(api_client)
    big_oven_model_api_recipe = openapi_client.BigOvenModelAPIRecipe() # BigOvenModelAPIRecipe | 

    try:
        # Add a new recipe
        api_response = api_instance.recipe_post(big_oven_model_api_recipe)
        print("The response of RecipeApi->recipe_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **big_oven_model_api_recipe** | [**BigOvenModelAPIRecipe**](BigOvenModelAPIRecipe.md)|  | 

### Return type

[**BigOvenModelAPIRecipe**](BigOvenModelAPIRecipe.md)

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

# **recipe_put**
> BigOvenModelAPIRecipe recipe_put(big_oven_model_api_recipe)

Update a recipe

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_recipe import BigOvenModelAPIRecipe
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
    api_instance = openapi_client.RecipeApi(api_client)
    big_oven_model_api_recipe = openapi_client.BigOvenModelAPIRecipe() # BigOvenModelAPIRecipe | 

    try:
        # Update a recipe
        api_response = api_instance.recipe_put(big_oven_model_api_recipe)
        print("The response of RecipeApi->recipe_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **big_oven_model_api_recipe** | [**BigOvenModelAPIRecipe**](BigOvenModelAPIRecipe.md)|  | 

### Return type

[**BigOvenModelAPIRecipe**](BigOvenModelAPIRecipe.md)

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

# **recipe_raves**
> List[BigOvenModelRecipeInfoReviewTuple2] recipe_raves(pg=pg, rpp=rpp)

Get the recipe/comment tuples for those recipes with 4 or 5 star ratings

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_recipe_info_review_tuple2 import BigOvenModelRecipeInfoReviewTuple2
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
    api_instance = openapi_client.RecipeApi(api_client)
    pg = 56 # int | page, starting with 1 (optional)
    rpp = 56 # int | results per page (optional)

    try:
        # Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
        api_response = api_instance.recipe_raves(pg=pg, rpp=rpp)
        print("The response of RecipeApi->recipe_raves:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_raves: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg** | **int**| page, starting with 1 | [optional] 
 **rpp** | **int**| results per page | [optional] 

### Return type

[**List[BigOvenModelRecipeInfoReviewTuple2]**](BigOvenModelRecipeInfoReviewTuple2.md)

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

# **recipe_recent_views**
> List[BigOvenModelRecipeInfoDateTuple2] recipe_recent_views(pg=pg, rpp=rpp)

Get a list of recipes that the authenticated user has most recently viewed

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_recipe_info_date_tuple2 import BigOvenModelRecipeInfoDateTuple2
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
    api_instance = openapi_client.RecipeApi(api_client)
    pg = 56 # int | Page number starting with 1 (optional)
    rpp = 56 # int | results per page (optional)

    try:
        # Get a list of recipes that the authenticated user has most recently viewed
        api_response = api_instance.recipe_recent_views(pg=pg, rpp=rpp)
        print("The response of RecipeApi->recipe_recent_views:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_recent_views: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg** | **int**| Page number starting with 1 | [optional] 
 **rpp** | **int**| results per page | [optional] 

### Return type

[**List[BigOvenModelRecipeInfoDateTuple2]**](BigOvenModelRecipeInfoDateTuple2.md)

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

# **recipe_recipe_search**
> BigOvenModelAPI2RecipeSearchResult recipe_recipe_search(any_kw=any_kw, folder=folder, coll=coll, filter=filter, title_kw=title_kw, user_id=user_id, username=username, token=token, photos=photos, boostmine=boostmine, include_cat=include_cat, exclude_cat=exclude_cat, include_primarycat=include_primarycat, exclude_primarycat=exclude_primarycat, include_ing=include_ing, exclude_ing=exclude_ing, cuisine=cuisine, db=db, userset=userset, servings_min=servings_min, total_mins=total_mins, max_ingredients=max_ingredients, min_ingredients=min_ingredients, rpp=rpp, pg=pg, vtn=vtn, vgn=vgn, chs=chs, glf=glf, ntf=ntf, dyf=dyf, sff=sff, slf=slf, tnf=tnf, wmf=wmf, rmf=rmf, cps=cps, champion=champion, synonyms=synonyms)

Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.              Use any_kw to search across the entire recipe.              If you'd like to limit by course, set the parameter \"include_primarycat\" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).              If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.              If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.              To explicitly include an ingredient in your search, set the parameter \"include_ing\" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips              To explicitly exclude an ingredient in your search, set the parameter \"exclude_ing\" to a CSV of up to three ingredients.              All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).              So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25              If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).              Or, you can set username=theirusername              vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps              cuisine              photos              filter=added,try,favorites,myrecipes\\r\\n\\r\\n              folder=FolderNameCaseSensitive              coll=ID of Collection

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_recipe_search_result import BigOvenModelAPI2RecipeSearchResult
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
    api_instance = openapi_client.RecipeApi(api_client)
    any_kw = 'any_kw_example' # str | Search anywhere in the recipe for the keyword (optional)
    folder = 'folder_example' # str | Search in a specific folder name for the authenticated user (optional)
    coll = 56 # int | Limit to a collection ID number (optional)
    filter = 'filter_example' # str | optionally set to either \"myrecipes\", \"try\", \"favorites\",\"added\" to filter to just the authenticated user's recipe set (optional)
    title_kw = 'title_kw_example' # str | Search just in the recipe title for the keyword (optional)
    user_id = 56 # int | Set the target userid to search their public recipes (optional)
    username = 'username_example' # str | Set the target username to search their public recipes (optional)
    token = 'token_example' # str |  (optional)
    photos = True # bool | if set to true, limit search results to photos only (optional)
    boostmine = True # bool | if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders) (optional)
    include_cat = 'include_cat_example' # str | integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is \"Main Dish &gt; Casseroles\". (optional)
    exclude_cat = 'exclude_cat_example' # str | like include_cat, set this to an integer to exclude a specific category (optional)
    include_primarycat = 'include_primarycat_example' # str | csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] (optional)
    exclude_primarycat = 'exclude_primarycat_example' # str | csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] (optional)
    include_ing = 'include_ing_example' # str | A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken (optional)
    exclude_ing = 'exclude_ing_example' # str | A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required) (optional)
    cuisine = 'cuisine_example' # str | Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese (optional)
    db = 'db_example' # str |  (optional)
    userset = 'userset_example' # str | If set to a given username, it'll force the search to filter to just that username (optional)
    servings_min = 3.4 # float | Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by \"dozen\", etc. This parameter simply specifies the minimum number for that value entered in \"yield.\" (optional)
    total_mins = 56 # int | Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert \"1 hour, 15 minutes\" to 75 before passing in.) (optional)
    max_ingredients = 56 # int | Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less (optional)
    min_ingredients = 56 # int | Optional. If supplied, will restrict results to recipes that have at least {minIngredients} (optional)
    rpp = 56 # int | integer; results per page (optional)
    pg = 56 # int | integer: the page number (optional)
    vtn = 56 # int | when set to 1, limit to vegetarian (Powersearch-capable plan required) (optional)
    vgn = 56 # int | when set to 1, limit to vegan (Powersearch-capable plan required) (optional)
    chs = 56 # int | when set to 1, limit to contains-cheese (Powersearch-capable plan required) (optional)
    glf = 56 # int | when set to 1, limit to gluten-free (Powersearch-capable plan required) (optional)
    ntf = 56 # int | when set to 1, limit to nut-free (Powersearch-capable plan required) (optional)
    dyf = 56 # int | when set to 1, limit to dairy-free (Powersearch-capable plan required) (optional)
    sff = 56 # int | when set to 1, limit to seafood-free (Powersearch-capable plan required) (optional)
    slf = 56 # int | when set to 1, limit to shellfish-free (Powersearch-capable plan required) (optional)
    tnf = 56 # int | when set to 1, limit to tree-nut free (Powersearch-capable plan required) (optional)
    wmf = 56 # int | when set to 1, limit to white-meat free (Powersearch-capable plan required) (optional)
    rmf = 56 # int | when set to 1, limit to red-meat free (Powersearch-capable plan required) (optional)
    cps = 56 # int | when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required) (optional)
    champion = 56 # int | optional. When set to 1, this will limit search results to \"best of\" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter. (optional)
    synonyms = True # bool | optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon) (optional)

    try:
        # Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.              Use any_kw to search across the entire recipe.              If you'd like to limit by course, set the parameter \"include_primarycat\" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).              If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.              If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.              To explicitly include an ingredient in your search, set the parameter \"include_ing\" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips              To explicitly exclude an ingredient in your search, set the parameter \"exclude_ing\" to a CSV of up to three ingredients.              All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).              So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25              If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).              Or, you can set username=theirusername              vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps              cuisine              photos              filter=added,try,favorites,myrecipes\\r\\n\\r\\n              folder=FolderNameCaseSensitive              coll=ID of Collection
        api_response = api_instance.recipe_recipe_search(any_kw=any_kw, folder=folder, coll=coll, filter=filter, title_kw=title_kw, user_id=user_id, username=username, token=token, photos=photos, boostmine=boostmine, include_cat=include_cat, exclude_cat=exclude_cat, include_primarycat=include_primarycat, exclude_primarycat=exclude_primarycat, include_ing=include_ing, exclude_ing=exclude_ing, cuisine=cuisine, db=db, userset=userset, servings_min=servings_min, total_mins=total_mins, max_ingredients=max_ingredients, min_ingredients=min_ingredients, rpp=rpp, pg=pg, vtn=vtn, vgn=vgn, chs=chs, glf=glf, ntf=ntf, dyf=dyf, sff=sff, slf=slf, tnf=tnf, wmf=wmf, rmf=rmf, cps=cps, champion=champion, synonyms=synonyms)
        print("The response of RecipeApi->recipe_recipe_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_recipe_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **any_kw** | **str**| Search anywhere in the recipe for the keyword | [optional] 
 **folder** | **str**| Search in a specific folder name for the authenticated user | [optional] 
 **coll** | **int**| Limit to a collection ID number | [optional] 
 **filter** | **str**| optionally set to either \&quot;myrecipes\&quot;, \&quot;try\&quot;, \&quot;favorites\&quot;,\&quot;added\&quot; to filter to just the authenticated user&#39;s recipe set | [optional] 
 **title_kw** | **str**| Search just in the recipe title for the keyword | [optional] 
 **user_id** | **int**| Set the target userid to search their public recipes | [optional] 
 **username** | **str**| Set the target username to search their public recipes | [optional] 
 **token** | **str**|  | [optional] 
 **photos** | **bool**| if set to true, limit search results to photos only | [optional] 
 **boostmine** | **bool**| if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders) | [optional] 
 **include_cat** | **str**| integer of the subcategory you&#39;d like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is \&quot;Main Dish &amp;gt; Casseroles\&quot;. | [optional] 
 **exclude_cat** | **str**| like include_cat, set this to an integer to exclude a specific category | [optional] 
 **include_primarycat** | **str**| csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] | [optional] 
 **exclude_primarycat** | **str**| csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] | [optional] 
 **include_ing** | **str**| A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken | [optional] 
 **exclude_ing** | **str**| A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required) | [optional] 
 **cuisine** | **str**| Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese | [optional] 
 **db** | **str**|  | [optional] 
 **userset** | **str**| If set to a given username, it&#39;ll force the search to filter to just that username | [optional] 
 **servings_min** | **float**| Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by \&quot;dozen\&quot;, etc. This parameter simply specifies the minimum number for that value entered in \&quot;yield.\&quot; | [optional] 
 **total_mins** | **int**| Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert \&quot;1 hour, 15 minutes\&quot; to 75 before passing in.) | [optional] 
 **max_ingredients** | **int**| Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less | [optional] 
 **min_ingredients** | **int**| Optional. If supplied, will restrict results to recipes that have at least {minIngredients} | [optional] 
 **rpp** | **int**| integer; results per page | [optional] 
 **pg** | **int**| integer: the page number | [optional] 
 **vtn** | **int**| when set to 1, limit to vegetarian (Powersearch-capable plan required) | [optional] 
 **vgn** | **int**| when set to 1, limit to vegan (Powersearch-capable plan required) | [optional] 
 **chs** | **int**| when set to 1, limit to contains-cheese (Powersearch-capable plan required) | [optional] 
 **glf** | **int**| when set to 1, limit to gluten-free (Powersearch-capable plan required) | [optional] 
 **ntf** | **int**| when set to 1, limit to nut-free (Powersearch-capable plan required) | [optional] 
 **dyf** | **int**| when set to 1, limit to dairy-free (Powersearch-capable plan required) | [optional] 
 **sff** | **int**| when set to 1, limit to seafood-free (Powersearch-capable plan required) | [optional] 
 **slf** | **int**| when set to 1, limit to shellfish-free (Powersearch-capable plan required) | [optional] 
 **tnf** | **int**| when set to 1, limit to tree-nut free (Powersearch-capable plan required) | [optional] 
 **wmf** | **int**| when set to 1, limit to white-meat free (Powersearch-capable plan required) | [optional] 
 **rmf** | **int**| when set to 1, limit to red-meat free (Powersearch-capable plan required) | [optional] 
 **cps** | **int**| when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required) | [optional] 
 **champion** | **int**| optional. When set to 1, this will limit search results to \&quot;best of\&quot; recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don&#39;t include this parameter. | [optional] 
 **synonyms** | **bool**| optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon) | [optional] 

### Return type

[**BigOvenModelAPI2RecipeSearchResult**](BigOvenModelAPI2RecipeSearchResult.md)

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

# **recipe_recipe_search_random**
> BigOvenModelAPI2RecipeSearchResult recipe_recipe_search_random(any_kw=any_kw, folder=folder, coll=coll, filter=filter, title_kw=title_kw, user_id=user_id, username=username, token=token, photos=photos, boostmine=boostmine, include_cat=include_cat, exclude_cat=exclude_cat, include_primarycat=include_primarycat, exclude_primarycat=exclude_primarycat, include_ing=include_ing, exclude_ing=exclude_ing, cuisine=cuisine, db=db, userset=userset, servings_min=servings_min, total_mins=total_mins, max_ingredients=max_ingredients, min_ingredients=min_ingredients, vtn=vtn, vgn=vgn, chs=chs, glf=glf, ntf=ntf, dyf=dyf, sff=sff, slf=slf, tnf=tnf, wmf=wmf, rmf=rmf, cps=cps, champion=champion, synonyms=synonyms)

Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.              Use any_kw to search across the entire recipe.              If you'd like to limit by course, set the parameter \"include_primarycat\" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).              If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.              If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.              To explicitly include an ingredient in your search, set the parameter \"include_ing\" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips              To explicitly exclude an ingredient in your search, set the parameter \"exclude_ing\" to a CSV of up to three ingredients.              All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).              So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25              If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).              Or, you can set username=theirusername              vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps              cuisine              photos              filter=added,try,favorites,myrecipes\\r\\n\\r\\n              folder=FolderNameCaseSensitive              coll=ID of Collection

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_recipe_search_result import BigOvenModelAPI2RecipeSearchResult
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
    api_instance = openapi_client.RecipeApi(api_client)
    any_kw = 'any_kw_example' # str | Search anywhere in the recipe for the keyword (optional)
    folder = 'folder_example' # str | Search in a specific folder name for the authenticated user (optional)
    coll = 56 # int | Limit to a collection ID number (optional)
    filter = 'filter_example' # str | optionally set to either \"myrecipes\", \"try\", \"favorites\",\"added\" to filter to just the authenticated user's recipe set (optional)
    title_kw = 'title_kw_example' # str | Search just in the recipe title for the keyword (optional)
    user_id = 56 # int | Set the target userid to search their public recipes (optional)
    username = 'username_example' # str | Set the target username to search their public recipes (optional)
    token = 'token_example' # str |  (optional)
    photos = True # bool | if set to true, limit search results to photos only (optional)
    boostmine = True # bool | if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders) (optional)
    include_cat = 'include_cat_example' # str | integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is \"Main Dish &gt; Casseroles\". (optional)
    exclude_cat = 'exclude_cat_example' # str | like include_cat, set this to an integer to exclude a specific category (optional)
    include_primarycat = 'include_primarycat_example' # str | csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] (optional)
    exclude_primarycat = 'exclude_primarycat_example' # str | csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] (optional)
    include_ing = 'include_ing_example' # str | A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken (optional)
    exclude_ing = 'exclude_ing_example' # str | A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required) (optional)
    cuisine = 'cuisine_example' # str | Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese (optional)
    db = 'db_example' # str |  (optional)
    userset = 'userset_example' # str | If set to a given username, it'll force the search to filter to just that username (optional)
    servings_min = 3.4 # float | Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by \"dozen\", etc. This parameter simply specifies the minimum number for that value entered in \"yield.\" (optional)
    total_mins = 56 # int | Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert \"1 hour, 15 minutes\" to 75 before passing in.) (optional)
    max_ingredients = 56 # int | Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less (optional)
    min_ingredients = 56 # int | Optional. If supplied, will restrict results to recipes that have at least {minIngredients} (optional)
    vtn = 56 # int | when set to 1, limit to vegetarian (Powersearch-capable plan required) (optional)
    vgn = 56 # int | when set to 1, limit to vegan (Powersearch-capable plan required) (optional)
    chs = 56 # int | when set to 1, limit to contains-cheese (Powersearch-capable plan required) (optional)
    glf = 56 # int | when set to 1, limit to gluten-free (Powersearch-capable plan required) (optional)
    ntf = 56 # int | when set to 1, limit to nut-free (Powersearch-capable plan required) (optional)
    dyf = 56 # int | when set to 1, limit to dairy-free (Powersearch-capable plan required) (optional)
    sff = 56 # int | when set to 1, limit to seafood-free (Powersearch-capable plan required) (optional)
    slf = 56 # int | when set to 1, limit to shellfish-free (Powersearch-capable plan required) (optional)
    tnf = 56 # int | when set to 1, limit to tree-nut free (Powersearch-capable plan required) (optional)
    wmf = 56 # int | when set to 1, limit to white-meat free (Powersearch-capable plan required) (optional)
    rmf = 56 # int | when set to 1, limit to red-meat free (Powersearch-capable plan required) (optional)
    cps = 56 # int | when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required) (optional)
    champion = 56 # int | optional. When set to 1, this will limit search results to \"best of\" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter. (optional)
    synonyms = True # bool | optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon) (optional)

    try:
        # Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.              Use any_kw to search across the entire recipe.              If you'd like to limit by course, set the parameter \"include_primarycat\" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).              If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.              If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.              To explicitly include an ingredient in your search, set the parameter \"include_ing\" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips              To explicitly exclude an ingredient in your search, set the parameter \"exclude_ing\" to a CSV of up to three ingredients.              All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).              So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25              If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).              Or, you can set username=theirusername              vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps              cuisine              photos              filter=added,try,favorites,myrecipes\\r\\n\\r\\n              folder=FolderNameCaseSensitive              coll=ID of Collection
        api_response = api_instance.recipe_recipe_search_random(any_kw=any_kw, folder=folder, coll=coll, filter=filter, title_kw=title_kw, user_id=user_id, username=username, token=token, photos=photos, boostmine=boostmine, include_cat=include_cat, exclude_cat=exclude_cat, include_primarycat=include_primarycat, exclude_primarycat=exclude_primarycat, include_ing=include_ing, exclude_ing=exclude_ing, cuisine=cuisine, db=db, userset=userset, servings_min=servings_min, total_mins=total_mins, max_ingredients=max_ingredients, min_ingredients=min_ingredients, vtn=vtn, vgn=vgn, chs=chs, glf=glf, ntf=ntf, dyf=dyf, sff=sff, slf=slf, tnf=tnf, wmf=wmf, rmf=rmf, cps=cps, champion=champion, synonyms=synonyms)
        print("The response of RecipeApi->recipe_recipe_search_random:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_recipe_search_random: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **any_kw** | **str**| Search anywhere in the recipe for the keyword | [optional] 
 **folder** | **str**| Search in a specific folder name for the authenticated user | [optional] 
 **coll** | **int**| Limit to a collection ID number | [optional] 
 **filter** | **str**| optionally set to either \&quot;myrecipes\&quot;, \&quot;try\&quot;, \&quot;favorites\&quot;,\&quot;added\&quot; to filter to just the authenticated user&#39;s recipe set | [optional] 
 **title_kw** | **str**| Search just in the recipe title for the keyword | [optional] 
 **user_id** | **int**| Set the target userid to search their public recipes | [optional] 
 **username** | **str**| Set the target username to search their public recipes | [optional] 
 **token** | **str**|  | [optional] 
 **photos** | **bool**| if set to true, limit search results to photos only | [optional] 
 **boostmine** | **bool**| if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders) | [optional] 
 **include_cat** | **str**| integer of the subcategory you&#39;d like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is \&quot;Main Dish &amp;gt; Casseroles\&quot;. | [optional] 
 **exclude_cat** | **str**| like include_cat, set this to an integer to exclude a specific category | [optional] 
 **include_primarycat** | **str**| csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] | [optional] 
 **exclude_primarycat** | **str**| csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other] | [optional] 
 **include_ing** | **str**| A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken | [optional] 
 **exclude_ing** | **str**| A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required) | [optional] 
 **cuisine** | **str**| Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese | [optional] 
 **db** | **str**|  | [optional] 
 **userset** | **str**| If set to a given username, it&#39;ll force the search to filter to just that username | [optional] 
 **servings_min** | **float**| Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by \&quot;dozen\&quot;, etc. This parameter simply specifies the minimum number for that value entered in \&quot;yield.\&quot; | [optional] 
 **total_mins** | **int**| Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert \&quot;1 hour, 15 minutes\&quot; to 75 before passing in.) | [optional] 
 **max_ingredients** | **int**| Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less | [optional] 
 **min_ingredients** | **int**| Optional. If supplied, will restrict results to recipes that have at least {minIngredients} | [optional] 
 **vtn** | **int**| when set to 1, limit to vegetarian (Powersearch-capable plan required) | [optional] 
 **vgn** | **int**| when set to 1, limit to vegan (Powersearch-capable plan required) | [optional] 
 **chs** | **int**| when set to 1, limit to contains-cheese (Powersearch-capable plan required) | [optional] 
 **glf** | **int**| when set to 1, limit to gluten-free (Powersearch-capable plan required) | [optional] 
 **ntf** | **int**| when set to 1, limit to nut-free (Powersearch-capable plan required) | [optional] 
 **dyf** | **int**| when set to 1, limit to dairy-free (Powersearch-capable plan required) | [optional] 
 **sff** | **int**| when set to 1, limit to seafood-free (Powersearch-capable plan required) | [optional] 
 **slf** | **int**| when set to 1, limit to shellfish-free (Powersearch-capable plan required) | [optional] 
 **tnf** | **int**| when set to 1, limit to tree-nut free (Powersearch-capable plan required) | [optional] 
 **wmf** | **int**| when set to 1, limit to white-meat free (Powersearch-capable plan required) | [optional] 
 **rmf** | **int**| when set to 1, limit to red-meat free (Powersearch-capable plan required) | [optional] 
 **cps** | **int**| when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required) | [optional] 
 **champion** | **int**| optional. When set to 1, this will limit search results to \&quot;best of\&quot; recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don&#39;t include this parameter. | [optional] 
 **synonyms** | **bool**| optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon) | [optional] 

### Return type

[**BigOvenModelAPI2RecipeSearchResult**](BigOvenModelAPI2RecipeSearchResult.md)

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

# **recipe_related**
> BigOvenModelAPI2RecipeSearchResult recipe_related(recipe_id, pg=pg, rpp=rpp)

Get recipes related to the given recipeId

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_recipe_search_result import BigOvenModelAPI2RecipeSearchResult
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
    api_instance = openapi_client.RecipeApi(api_client)
    recipe_id = 56 # int | The recipe id
    pg = 56 # int | The page (optional)
    rpp = 56 # int | The results per page (optional)

    try:
        # Get recipes related to the given recipeId
        api_response = api_instance.recipe_related(recipe_id, pg=pg, rpp=rpp)
        print("The response of RecipeApi->recipe_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| The recipe id | 
 **pg** | **int**| The page | [optional] 
 **rpp** | **int**| The results per page | [optional] 

### Return type

[**BigOvenModelAPI2RecipeSearchResult**](BigOvenModelAPI2RecipeSearchResult.md)

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

# **recipe_scan**
> recipe_scan(test=test, devicetype=devicetype, lat=lat, lng=lng)

POST an image as a new RecipeScan request                  1)  Fetch the filename -- DONE                  2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE                  3)  Create 120 thumbnail size  in pics/scan/120 -- DONE                  4)  Insert the CloudTasks record                  5)  Create the HIT                  6)  Update the CloudTasks record with the HIT ID                  7)  Email the requesing user                  8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail

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
    api_instance = openapi_client.RecipeApi(api_client)
    test = True # bool |  (optional)
    devicetype = 'devicetype_example' # str |  (optional)
    lat = 3.4 # float |  (optional)
    lng = 3.4 # float |  (optional)

    try:
        # POST an image as a new RecipeScan request                  1)  Fetch the filename -- DONE                  2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE                  3)  Create 120 thumbnail size  in pics/scan/120 -- DONE                  4)  Insert the CloudTasks record                  5)  Create the HIT                  6)  Update the CloudTasks record with the HIT ID                  7)  Email the requesing user                  8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
        api_instance.recipe_scan(test=test, devicetype=devicetype, lat=lat, lng=lng)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_scan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test** | **bool**|  | [optional] 
 **devicetype** | **str**|  | [optional] 
 **lat** | **float**|  | [optional] 
 **lng** | **float**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Not authorized |  -  |
**402** | Payment required (not enough credits) |  -  |
**415** | Bad media type (bad JPG) |  -  |
**500** | General error on initiating RecipeScan task; please try again or contact us at support[at]bigoven.com |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_zap_recipe**
> object recipe_zap_recipe(id)

Zaps the recipe.

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
    api_instance = openapi_client.RecipeApi(api_client)
    id = 56 # int | The identifier.

    try:
        # Zaps the recipe.
        api_response = api_instance.recipe_zap_recipe(id)
        print("The response of RecipeApi->recipe_zap_recipe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipeApi->recipe_zap_recipe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The identifier. | 

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

