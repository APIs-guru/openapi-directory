# openapi_client.DefaultApi

All URIs are relative to *https://api.spoonacular.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_recipe**](DefaultApi.md#analyze_recipe) | **POST** /recipes/analyze | Analyze Recipe
[**create_recipe_card_get**](DefaultApi.md#create_recipe_card_get) | **GET** /recipes/{id}/card | Create Recipe Card
[**search_restaurants**](DefaultApi.md#search_restaurants) | **GET** /food/restaurants/search | Search Restaurants


# **analyze_recipe**
> object analyze_recipe(analyze_recipe_request, language=language, include_nutrition=include_nutrition, include_taste=include_taste)

Analyze Recipe

This endpoint allows you to send raw recipe information, such as title, servings, and ingredients, to then see what we compute (badges, diets, nutrition, and more). This is useful if you have your own recipe data and want to enrich it with our semantic analysis.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.analyze_recipe_request import AnalyzeRecipeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spoonacular.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spoonacular.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyScheme
configuration.api_key['apiKeyScheme'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyScheme'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    analyze_recipe_request = openapi_client.AnalyzeRecipeRequest() # AnalyzeRecipeRequest | Example request body.
    language = 'en' # str | The input language, either \"en\" or \"de\". (optional)
    include_nutrition = false # bool | Whether nutrition data should be added to correctly parsed ingredients. (optional)
    include_taste = false # bool | Whether taste data should be added to correctly parsed ingredients. (optional)

    try:
        # Analyze Recipe
        api_response = api_instance.analyze_recipe(analyze_recipe_request, language=language, include_nutrition=include_nutrition, include_taste=include_taste)
        print("The response of DefaultApi->analyze_recipe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_recipe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyze_recipe_request** | [**AnalyzeRecipeRequest**](AnalyzeRecipeRequest.md)| Example request body. | 
 **language** | **str**| The input language, either \&quot;en\&quot; or \&quot;de\&quot;. | [optional] 
 **include_nutrition** | **bool**| Whether nutrition data should be added to correctly parsed ingredients. | [optional] 
 **include_taste** | **bool**| Whether taste data should be added to correctly parsed ingredients. | [optional] 

### Return type

**object**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: , application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_recipe_card_get**
> object create_recipe_card_get(id, mask=mask, background_image=background_image, background_color=background_color, font_color=font_color)

Create Recipe Card

Generate a recipe card for a recipe.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spoonacular.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spoonacular.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyScheme
configuration.api_key['apiKeyScheme'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyScheme'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 4632 # float | The recipe id.
    mask = 'ellipseMask' # str | The mask to put over the recipe image (\"ellipseMask\", \"diamondMask\", \"starMask\", \"heartMask\", \"potMask\", \"fishMask\"). (optional)
    background_image = 'background1' # str | The background image (\"none\",\"background1\", or \"background2\"). (optional)
    background_color = 'ffffff' # str | The background color for the recipe card as a hex-string. (optional)
    font_color = '333333' # str | The font color for the recipe card as a hex-string. (optional)

    try:
        # Create Recipe Card
        api_response = api_instance.create_recipe_card_get(id, mask=mask, background_image=background_image, background_color=background_color, font_color=font_color)
        print("The response of DefaultApi->create_recipe_card_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_recipe_card_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| The recipe id. | 
 **mask** | **str**| The mask to put over the recipe image (\&quot;ellipseMask\&quot;, \&quot;diamondMask\&quot;, \&quot;starMask\&quot;, \&quot;heartMask\&quot;, \&quot;potMask\&quot;, \&quot;fishMask\&quot;). | [optional] 
 **background_image** | **str**| The background image (\&quot;none\&quot;,\&quot;background1\&quot;, or \&quot;background2\&quot;). | [optional] 
 **background_color** | **str**| The background color for the recipe card as a hex-string. | [optional] 
 **font_color** | **str**| The font color for the recipe card as a hex-string. | [optional] 

### Return type

**object**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_restaurants**
> SearchRestaurants200Response search_restaurants(query=query, lat=lat, lng=lng, distance=distance, budget=budget, cuisine=cuisine, min_rating=min_rating, is_open=is_open, sort=sort, page=page)

Search Restaurants

Search through thousands of restaurants (in North America) by location, cuisine, budget, and more.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.search_restaurants200_response import SearchRestaurants200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spoonacular.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spoonacular.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyScheme
configuration.api_key['apiKeyScheme'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyScheme'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'beach cafe' # str | The search query. (optional)
    lat = 37.7786357 # float | The latitude of the user's location. (optional)
    lng = -122.3918135 # float | The longitude of the user's location.\". (optional)
    distance = 2 # float | The distance around the location in miles. (optional)
    budget = 20 # float | The user's budget for a meal in USD. (optional)
    cuisine = 'italian' # str | The cuisine of the restaurant. (optional)
    min_rating = 4.4 # float | The minimum rating of the restaurant between 0 and 5. (optional)
    is_open = true # bool | Whether the restaurant must be open at the time of search. (optional)
    sort = 'distance' # str | How to sort the results, one of the following 'cheapest', 'fastest', 'rating', 'distance' or the default 'relevance'. (optional)
    page = 0 # float | The page number of results. (optional)

    try:
        # Search Restaurants
        api_response = api_instance.search_restaurants(query=query, lat=lat, lng=lng, distance=distance, budget=budget, cuisine=cuisine, min_rating=min_rating, is_open=is_open, sort=sort, page=page)
        print("The response of DefaultApi->search_restaurants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search_restaurants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The search query. | [optional] 
 **lat** | **float**| The latitude of the user&#39;s location. | [optional] 
 **lng** | **float**| The longitude of the user&#39;s location.\&quot;. | [optional] 
 **distance** | **float**| The distance around the location in miles. | [optional] 
 **budget** | **float**| The user&#39;s budget for a meal in USD. | [optional] 
 **cuisine** | **str**| The cuisine of the restaurant. | [optional] 
 **min_rating** | **float**| The minimum rating of the restaurant between 0 and 5. | [optional] 
 **is_open** | **bool**| Whether the restaurant must be open at the time of search. | [optional] 
 **sort** | **str**| How to sort the results, one of the following &#39;cheapest&#39;, &#39;fastest&#39;, &#39;rating&#39;, &#39;distance&#39; or the default &#39;relevance&#39;. | [optional] 
 **page** | **float**| The page number of results. | [optional] 

### Return type

[**SearchRestaurants200Response**](SearchRestaurants200Response.md)

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

