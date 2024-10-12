# openapi_client.MiscApi

All URIs are relative to *https://api.spoonacular.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detect_food_in_text**](MiscApi.md#detect_food_in_text) | **POST** /food/detect | Detect Food in Text
[**get_a_random_food_joke**](MiscApi.md#get_a_random_food_joke) | **GET** /food/jokes/random | Random Food Joke
[**get_conversation_suggests**](MiscApi.md#get_conversation_suggests) | **GET** /food/converse/suggest | Conversation Suggests
[**get_random_food_trivia**](MiscApi.md#get_random_food_trivia) | **GET** /food/trivia/random | Random Food Trivia
[**image_analysis_by_url**](MiscApi.md#image_analysis_by_url) | **GET** /food/images/analyze | Image Analysis by URL
[**image_classification_by_url**](MiscApi.md#image_classification_by_url) | **GET** /food/images/classify | Image Classification by URL
[**search_all_food**](MiscApi.md#search_all_food) | **GET** /food/search | Search All Food
[**search_custom_foods**](MiscApi.md#search_custom_foods) | **GET** /food/customFoods/search | Search Custom Foods
[**search_food_videos**](MiscApi.md#search_food_videos) | **GET** /food/videos/search | Search Food Videos
[**search_site_content**](MiscApi.md#search_site_content) | **GET** /food/site/search | Search Site Content
[**talk_to_chatbot**](MiscApi.md#talk_to_chatbot) | **GET** /food/converse | Talk to Chatbot


# **detect_food_in_text**
> DetectFoodInText200Response detect_food_in_text(content_type=content_type)

Detect Food in Text

Take any text and find all mentions of food contained within it. This task is also called Named Entity Recognition (NER). In this case, the entities are foods. Either dishes, such as pizza or cheeseburger, or ingredients, such as cucumber or almonds.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.detect_food_in_text200_response import DetectFoodInText200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    content_type = 'application/json' # str | The content type. (optional)

    try:
        # Detect Food in Text
        api_response = api_instance.detect_food_in_text(content_type=content_type)
        print("The response of MiscApi->detect_food_in_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->detect_food_in_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| The content type. | [optional] 

### Return type

[**DetectFoodInText200Response**](DetectFoodInText200Response.md)

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_a_random_food_joke**
> GetARandomFoodJoke200Response get_a_random_food_joke()

Random Food Joke

Get a random joke that is related to food. Caution: this is an endpoint for adults!

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_a_random_food_joke200_response import GetARandomFoodJoke200Response
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
    api_instance = openapi_client.MiscApi(api_client)

    try:
        # Random Food Joke
        api_response = api_instance.get_a_random_food_joke()
        print("The response of MiscApi->get_a_random_food_joke:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->get_a_random_food_joke: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetARandomFoodJoke200Response**](GetARandomFoodJoke200Response.md)

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

# **get_conversation_suggests**
> GetConversationSuggests200Response get_conversation_suggests(query, number=number)

Conversation Suggests

This endpoint returns suggestions for things the user can say or ask the chatbot.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_conversation_suggests200_response import GetConversationSuggests200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    query = 'tell' # str | A (partial) query from the user. The endpoint will return if it matches topics it can talk about.
    number = 5 # float | The number of suggestions to return (between 1 and 25). (optional)

    try:
        # Conversation Suggests
        api_response = api_instance.get_conversation_suggests(query, number=number)
        print("The response of MiscApi->get_conversation_suggests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->get_conversation_suggests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| A (partial) query from the user. The endpoint will return if it matches topics it can talk about. | 
 **number** | **float**| The number of suggestions to return (between 1 and 25). | [optional] 

### Return type

[**GetConversationSuggests200Response**](GetConversationSuggests200Response.md)

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

# **get_random_food_trivia**
> GetRandomFoodTrivia200Response get_random_food_trivia()

Random Food Trivia

Returns random food trivia.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_random_food_trivia200_response import GetRandomFoodTrivia200Response
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
    api_instance = openapi_client.MiscApi(api_client)

    try:
        # Random Food Trivia
        api_response = api_instance.get_random_food_trivia()
        print("The response of MiscApi->get_random_food_trivia:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->get_random_food_trivia: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetRandomFoodTrivia200Response**](GetRandomFoodTrivia200Response.md)

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

# **image_analysis_by_url**
> ImageAnalysisByURL200Response image_analysis_by_url(image_url)

Image Analysis by URL

Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.image_analysis_by_url200_response import ImageAnalysisByURL200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    image_url = 'https://spoonacular.com/recipeImages/635350-240x150.jpg' # str | The URL of the image to be analyzed.

    try:
        # Image Analysis by URL
        api_response = api_instance.image_analysis_by_url(image_url)
        print("The response of MiscApi->image_analysis_by_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->image_analysis_by_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| The URL of the image to be analyzed. | 

### Return type

[**ImageAnalysisByURL200Response**](ImageAnalysisByURL200Response.md)

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

# **image_classification_by_url**
> ImageClassificationByURL200Response image_classification_by_url(image_url)

Image Classification by URL

Classify a food image.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.image_classification_by_url200_response import ImageClassificationByURL200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    image_url = 'https://spoonacular.com/recipeImages/635350-240x150.jpg' # str | The URL of the image to be classified.

    try:
        # Image Classification by URL
        api_response = api_instance.image_classification_by_url(image_url)
        print("The response of MiscApi->image_classification_by_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->image_classification_by_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| The URL of the image to be classified. | 

### Return type

[**ImageClassificationByURL200Response**](ImageClassificationByURL200Response.md)

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

# **search_all_food**
> SearchAllFood200Response search_all_food(query, offset=offset, number=number)

Search All Food

Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.search_all_food200_response import SearchAllFood200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    query = 'apple' # str | The search query.
    offset = 56 # int | The number of results to skip (between 0 and 900). (optional)
    number = 10 # int | The maximum number of items to return (between 1 and 100). Defaults to 10. (optional) (default to 10)

    try:
        # Search All Food
        api_response = api_instance.search_all_food(query, offset=offset, number=number)
        print("The response of MiscApi->search_all_food:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->search_all_food: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The search query. | 
 **offset** | **int**| The number of results to skip (between 0 and 900). | [optional] 
 **number** | **int**| The maximum number of items to return (between 1 and 100). Defaults to 10. | [optional] [default to 10]

### Return type

[**SearchAllFood200Response**](SearchAllFood200Response.md)

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

# **search_custom_foods**
> SearchCustomFoods200Response search_custom_foods(username, hash, query=query, offset=offset, number=number)

Search Custom Foods

Search custom foods in a user's account.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.search_custom_foods200_response import SearchCustomFoods200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    username = 'dsky' # str | The username.
    hash = '4b5v4398573406' # str | The private hash for the username.
    query = 'burger' # str | The (natural language) search query. (optional)
    offset = 56 # int | The number of results to skip (between 0 and 900). (optional)
    number = 10 # int | The maximum number of items to return (between 1 and 100). Defaults to 10. (optional) (default to 10)

    try:
        # Search Custom Foods
        api_response = api_instance.search_custom_foods(username, hash, query=query, offset=offset, number=number)
        print("The response of MiscApi->search_custom_foods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->search_custom_foods: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| The username. | 
 **hash** | **str**| The private hash for the username. | 
 **query** | **str**| The (natural language) search query. | [optional] 
 **offset** | **int**| The number of results to skip (between 0 and 900). | [optional] 
 **number** | **int**| The maximum number of items to return (between 1 and 100). Defaults to 10. | [optional] [default to 10]

### Return type

[**SearchCustomFoods200Response**](SearchCustomFoods200Response.md)

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

# **search_food_videos**
> SearchFoodVideos200Response search_food_videos(query=query, type=type, cuisine=cuisine, diet=diet, include_ingredients=include_ingredients, exclude_ingredients=exclude_ingredients, min_length=min_length, max_length=max_length, offset=offset, number=number)

Search Food Videos

Find recipe and other food related videos.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.search_food_videos200_response import SearchFoodVideos200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    query = 'burger' # str | The (natural language) search query. (optional)
    type = 'main course' # str | The type of the recipes. See a full list of supported meal types. (optional)
    cuisine = 'italian' # str | The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines. (optional)
    diet = 'vegetarian' # str | The diet for which the recipes must be suitable. See a full list of supported diets. (optional)
    include_ingredients = 'tomato,cheese' # str | A comma-separated list of ingredients that the recipes should contain. (optional)
    exclude_ingredients = 'eggs' # str | A comma-separated list of ingredients or ingredient types that the recipes must not contain. (optional)
    min_length = 0 # float | Minimum video length in seconds. (optional)
    max_length = 999 # float | Maximum video length in seconds. (optional)
    offset = 56 # int | The number of results to skip (between 0 and 900). (optional)
    number = 10 # int | The maximum number of items to return (between 1 and 100). Defaults to 10. (optional) (default to 10)

    try:
        # Search Food Videos
        api_response = api_instance.search_food_videos(query=query, type=type, cuisine=cuisine, diet=diet, include_ingredients=include_ingredients, exclude_ingredients=exclude_ingredients, min_length=min_length, max_length=max_length, offset=offset, number=number)
        print("The response of MiscApi->search_food_videos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->search_food_videos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The (natural language) search query. | [optional] 
 **type** | **str**| The type of the recipes. See a full list of supported meal types. | [optional] 
 **cuisine** | **str**| The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines. | [optional] 
 **diet** | **str**| The diet for which the recipes must be suitable. See a full list of supported diets. | [optional] 
 **include_ingredients** | **str**| A comma-separated list of ingredients that the recipes should contain. | [optional] 
 **exclude_ingredients** | **str**| A comma-separated list of ingredients or ingredient types that the recipes must not contain. | [optional] 
 **min_length** | **float**| Minimum video length in seconds. | [optional] 
 **max_length** | **float**| Maximum video length in seconds. | [optional] 
 **offset** | **int**| The number of results to skip (between 0 and 900). | [optional] 
 **number** | **int**| The maximum number of items to return (between 1 and 100). Defaults to 10. | [optional] [default to 10]

### Return type

[**SearchFoodVideos200Response**](SearchFoodVideos200Response.md)

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

# **search_site_content**
> SearchSiteContent200Response search_site_content(query)

Search Site Content

Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com. This is a suggest API so you can send partial strings as queries.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.search_site_content200_response import SearchSiteContent200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    query = 'past' # str | The query to search for. You can also use partial queries such as \"spagh\" to already find spaghetti recipes, articles, grocery products, and other content.

    try:
        # Search Site Content
        api_response = api_instance.search_site_content(query)
        print("The response of MiscApi->search_site_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->search_site_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The query to search for. You can also use partial queries such as \&quot;spagh\&quot; to already find spaghetti recipes, articles, grocery products, and other content. | 

### Return type

[**SearchSiteContent200Response**](SearchSiteContent200Response.md)

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

# **talk_to_chatbot**
> TalkToChatbot200Response talk_to_chatbot(text, context_id=context_id)

Talk to Chatbot

This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the \"Get Conversation Suggests\" endpoint to show your user what he or she can say.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.talk_to_chatbot200_response import TalkToChatbot200Response
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
    api_instance = openapi_client.MiscApi(api_client)
    text = 'donut recipes' # str | The request / question / answer from the user to the chatbot.
    context_id = '342938' # str | An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation. (optional)

    try:
        # Talk to Chatbot
        api_response = api_instance.talk_to_chatbot(text, context_id=context_id)
        print("The response of MiscApi->talk_to_chatbot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscApi->talk_to_chatbot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| The request / question / answer from the user to the chatbot. | 
 **context_id** | **str**| An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation. | [optional] 

### Return type

[**TalkToChatbot200Response**](TalkToChatbot200Response.md)

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

