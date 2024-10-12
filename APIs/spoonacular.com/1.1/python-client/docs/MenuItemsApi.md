# openapi_client.MenuItemsApi

All URIs are relative to *https://api.spoonacular.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autocomplete_menu_item_search**](MenuItemsApi.md#autocomplete_menu_item_search) | **GET** /food/menuItems/suggest | Autocomplete Menu Item Search
[**get_menu_item_information**](MenuItemsApi.md#get_menu_item_information) | **GET** /food/menuItems/{id} | Get Menu Item Information
[**menu_item_nutrition_by_id_image**](MenuItemsApi.md#menu_item_nutrition_by_id_image) | **GET** /food/menuItems/{id}/nutritionWidget.png | Menu Item Nutrition by ID Image
[**menu_item_nutrition_label_image**](MenuItemsApi.md#menu_item_nutrition_label_image) | **GET** /food/menuItems/{id}/nutritionLabel.png | Menu Item Nutrition Label Image
[**menu_item_nutrition_label_widget**](MenuItemsApi.md#menu_item_nutrition_label_widget) | **GET** /food/menuItems/{id}/nutritionLabel | Menu Item Nutrition Label Widget
[**search_menu_items**](MenuItemsApi.md#search_menu_items) | **GET** /food/menuItems/search | Search Menu Items
[**visualize_menu_item_nutrition_by_id**](MenuItemsApi.md#visualize_menu_item_nutrition_by_id) | **GET** /food/menuItems/{id}/nutritionWidget | Menu Item Nutrition by ID Widget


# **autocomplete_menu_item_search**
> AutocompleteMenuItemSearch200Response autocomplete_menu_item_search(query, number=number)

Autocomplete Menu Item Search

Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.autocomplete_menu_item_search200_response import AutocompleteMenuItemSearch200Response
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
    api_instance = openapi_client.MenuItemsApi(api_client)
    query = 'chicke' # str | The (partial) search query.
    number = 10 # float | The number of results to return (between 1 and 25). (optional)

    try:
        # Autocomplete Menu Item Search
        api_response = api_instance.autocomplete_menu_item_search(query, number=number)
        print("The response of MenuItemsApi->autocomplete_menu_item_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->autocomplete_menu_item_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The (partial) search query. | 
 **number** | **float**| The number of results to return (between 1 and 25). | [optional] 

### Return type

[**AutocompleteMenuItemSearch200Response**](AutocompleteMenuItemSearch200Response.md)

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

# **get_menu_item_information**
> GetMenuItemInformation200Response get_menu_item_information(id)

Get Menu Item Information

Use a menu item id to get all available information about a menu item, such as nutrition.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_menu_item_information200_response import GetMenuItemInformation200Response
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
    api_instance = openapi_client.MenuItemsApi(api_client)
    id = 1 # int | The item's id.

    try:
        # Get Menu Item Information
        api_response = api_instance.get_menu_item_information(id)
        print("The response of MenuItemsApi->get_menu_item_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->get_menu_item_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The item&#39;s id. | 

### Return type

[**GetMenuItemInformation200Response**](GetMenuItemInformation200Response.md)

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

# **menu_item_nutrition_by_id_image**
> object menu_item_nutrition_by_id_image(id)

Menu Item Nutrition by ID Image

Visualize a menu item's nutritional information as HTML including CSS.

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
    api_instance = openapi_client.MenuItemsApi(api_client)
    id = 424571 # float | The menu item id.

    try:
        # Menu Item Nutrition by ID Image
        api_response = api_instance.menu_item_nutrition_by_id_image(id)
        print("The response of MenuItemsApi->menu_item_nutrition_by_id_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->menu_item_nutrition_by_id_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| The menu item id. | 

### Return type

**object**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **menu_item_nutrition_label_image**
> object menu_item_nutrition_label_image(id, show_optional_nutrients=show_optional_nutrients, show_zero_values=show_zero_values, show_ingredients=show_ingredients)

Menu Item Nutrition Label Image

Visualize a menu item's nutritional label information as an image.

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
    api_instance = openapi_client.MenuItemsApi(api_client)
    id = 342313 # float | The menu item id.
    show_optional_nutrients = false # bool | Whether to show optional nutrients. (optional)
    show_zero_values = false # bool | Whether to show zero values. (optional)
    show_ingredients = false # bool | Whether to show a list of ingredients. (optional)

    try:
        # Menu Item Nutrition Label Image
        api_response = api_instance.menu_item_nutrition_label_image(id, show_optional_nutrients=show_optional_nutrients, show_zero_values=show_zero_values, show_ingredients=show_ingredients)
        print("The response of MenuItemsApi->menu_item_nutrition_label_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->menu_item_nutrition_label_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| The menu item id. | 
 **show_optional_nutrients** | **bool**| Whether to show optional nutrients. | [optional] 
 **show_zero_values** | **bool**| Whether to show zero values. | [optional] 
 **show_ingredients** | **bool**| Whether to show a list of ingredients. | [optional] 

### Return type

**object**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **menu_item_nutrition_label_widget**
> str menu_item_nutrition_label_widget(id, default_css=default_css, show_optional_nutrients=show_optional_nutrients, show_zero_values=show_zero_values, show_ingredients=show_ingredients)

Menu Item Nutrition Label Widget

Visualize a menu item's nutritional label information as HTML including CSS.

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
    api_instance = openapi_client.MenuItemsApi(api_client)
    id = 342313 # float | The menu item id.
    default_css = True # bool | Whether the default CSS should be added to the response. (optional) (default to True)
    show_optional_nutrients = false # bool | Whether to show optional nutrients. (optional)
    show_zero_values = false # bool | Whether to show zero values. (optional)
    show_ingredients = false # bool | Whether to show a list of ingredients. (optional)

    try:
        # Menu Item Nutrition Label Widget
        api_response = api_instance.menu_item_nutrition_label_widget(id, default_css=default_css, show_optional_nutrients=show_optional_nutrients, show_zero_values=show_zero_values, show_ingredients=show_ingredients)
        print("The response of MenuItemsApi->menu_item_nutrition_label_widget:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->menu_item_nutrition_label_widget: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| The menu item id. | 
 **default_css** | **bool**| Whether the default CSS should be added to the response. | [optional] [default to True]
 **show_optional_nutrients** | **bool**| Whether to show optional nutrients. | [optional] 
 **show_zero_values** | **bool**| Whether to show zero values. | [optional] 
 **show_ingredients** | **bool**| Whether to show a list of ingredients. | [optional] 

### Return type

**str**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_menu_items**
> SearchMenuItems200Response search_menu_items(query=query, min_calories=min_calories, max_calories=max_calories, min_carbs=min_carbs, max_carbs=max_carbs, min_protein=min_protein, max_protein=max_protein, min_fat=min_fat, max_fat=max_fat, add_menu_item_information=add_menu_item_information, offset=offset, number=number)

Search Menu Items

Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.search_menu_items200_response import SearchMenuItems200Response
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
    api_instance = openapi_client.MenuItemsApi(api_client)
    query = 'burger' # str | The (natural language) search query. (optional)
    min_calories = 50 # float | The minimum amount of calories the menu item must have. (optional)
    max_calories = 800 # float | The maximum amount of calories the menu item can have. (optional)
    min_carbs = 10 # float | The minimum amount of carbohydrates in grams the menu item must have. (optional)
    max_carbs = 100 # float | The maximum amount of carbohydrates in grams the menu item can have. (optional)
    min_protein = 10 # float | The minimum amount of protein in grams the menu item must have. (optional)
    max_protein = 100 # float | The maximum amount of protein in grams the menu item can have. (optional)
    min_fat = 1 # float | The minimum amount of fat in grams the menu item must have. (optional)
    max_fat = 100 # float | The maximum amount of fat in grams the menu item can have. (optional)
    add_menu_item_information = true # bool | If set to true, you get more information about the menu items returned. (optional)
    offset = 56 # int | The number of results to skip (between 0 and 900). (optional)
    number = 10 # int | The maximum number of items to return (between 1 and 100). Defaults to 10. (optional) (default to 10)

    try:
        # Search Menu Items
        api_response = api_instance.search_menu_items(query=query, min_calories=min_calories, max_calories=max_calories, min_carbs=min_carbs, max_carbs=max_carbs, min_protein=min_protein, max_protein=max_protein, min_fat=min_fat, max_fat=max_fat, add_menu_item_information=add_menu_item_information, offset=offset, number=number)
        print("The response of MenuItemsApi->search_menu_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->search_menu_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The (natural language) search query. | [optional] 
 **min_calories** | **float**| The minimum amount of calories the menu item must have. | [optional] 
 **max_calories** | **float**| The maximum amount of calories the menu item can have. | [optional] 
 **min_carbs** | **float**| The minimum amount of carbohydrates in grams the menu item must have. | [optional] 
 **max_carbs** | **float**| The maximum amount of carbohydrates in grams the menu item can have. | [optional] 
 **min_protein** | **float**| The minimum amount of protein in grams the menu item must have. | [optional] 
 **max_protein** | **float**| The maximum amount of protein in grams the menu item can have. | [optional] 
 **min_fat** | **float**| The minimum amount of fat in grams the menu item must have. | [optional] 
 **max_fat** | **float**| The maximum amount of fat in grams the menu item can have. | [optional] 
 **add_menu_item_information** | **bool**| If set to true, you get more information about the menu items returned. | [optional] 
 **offset** | **int**| The number of results to skip (between 0 and 900). | [optional] 
 **number** | **int**| The maximum number of items to return (between 1 and 100). Defaults to 10. | [optional] [default to 10]

### Return type

[**SearchMenuItems200Response**](SearchMenuItems200Response.md)

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

# **visualize_menu_item_nutrition_by_id**
> str visualize_menu_item_nutrition_by_id(id, default_css=default_css, accept=accept)

Menu Item Nutrition by ID Widget

Visualize a menu item's nutritional information as HTML including CSS.

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
    api_instance = openapi_client.MenuItemsApi(api_client)
    id = 1 # int | The item's id.
    default_css = True # bool | Whether the default CSS should be added to the response. (optional) (default to True)
    accept = 'application/json' # str | Accept header. (optional)

    try:
        # Menu Item Nutrition by ID Widget
        api_response = api_instance.visualize_menu_item_nutrition_by_id(id, default_css=default_css, accept=accept)
        print("The response of MenuItemsApi->visualize_menu_item_nutrition_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MenuItemsApi->visualize_menu_item_nutrition_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The item&#39;s id. | 
 **default_css** | **bool**| Whether the default CSS should be added to the response. | [optional] [default to True]
 **accept** | **str**| Accept header. | [optional] 

### Return type

**str**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

