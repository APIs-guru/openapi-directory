# openapi_client.IngredientsApi

All URIs are relative to *https://api.spoonacular.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autocomplete_ingredient_search**](IngredientsApi.md#autocomplete_ingredient_search) | **GET** /food/ingredients/autocomplete | Autocomplete Ingredient Search
[**compute_ingredient_amount**](IngredientsApi.md#compute_ingredient_amount) | **GET** /food/ingredients/{id}/amount | Compute Ingredient Amount
[**get_ingredient_information**](IngredientsApi.md#get_ingredient_information) | **GET** /food/ingredients/{id}/information | Get Ingredient Information
[**get_ingredient_substitutes**](IngredientsApi.md#get_ingredient_substitutes) | **GET** /food/ingredients/substitutes | Get Ingredient Substitutes
[**get_ingredient_substitutes_by_id**](IngredientsApi.md#get_ingredient_substitutes_by_id) | **GET** /food/ingredients/{id}/substitutes | Get Ingredient Substitutes by ID
[**ingredient_search**](IngredientsApi.md#ingredient_search) | **GET** /food/ingredients/search | Ingredient Search
[**ingredients_by_id_image**](IngredientsApi.md#ingredients_by_id_image) | **GET** /recipes/{id}/ingredientWidget.png | Ingredients by ID Image
[**map_ingredients_to_grocery_products**](IngredientsApi.md#map_ingredients_to_grocery_products) | **POST** /food/ingredients/map | Map Ingredients to Grocery Products
[**visualize_ingredients**](IngredientsApi.md#visualize_ingredients) | **POST** /recipes/visualizeIngredients | Ingredients Widget


# **autocomplete_ingredient_search**
> List[AutocompleteIngredientSearch200ResponseInner] autocomplete_ingredient_search(query=query, number=number, meta_information=meta_information, intolerances=intolerances, language=language)

Autocomplete Ingredient Search

Autocomplete the entry of an ingredient.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.autocomplete_ingredient_search200_response_inner import AutocompleteIngredientSearch200ResponseInner
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
    api_instance = openapi_client.IngredientsApi(api_client)
    query = 'burger' # str | The (natural language) search query. (optional)
    number = 10 # int | The maximum number of items to return (between 1 and 100). Defaults to 10. (optional) (default to 10)
    meta_information = false # bool | Whether to return more meta information about the ingredients. (optional)
    intolerances = 'egg' # str | A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. (optional)
    language = 'en' # str | The language of the input. Either 'en' or 'de'. (optional)

    try:
        # Autocomplete Ingredient Search
        api_response = api_instance.autocomplete_ingredient_search(query=query, number=number, meta_information=meta_information, intolerances=intolerances, language=language)
        print("The response of IngredientsApi->autocomplete_ingredient_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->autocomplete_ingredient_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The (natural language) search query. | [optional] 
 **number** | **int**| The maximum number of items to return (between 1 and 100). Defaults to 10. | [optional] [default to 10]
 **meta_information** | **bool**| Whether to return more meta information about the ingredients. | [optional] 
 **intolerances** | **str**| A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. | [optional] 
 **language** | **str**| The language of the input. Either &#39;en&#39; or &#39;de&#39;. | [optional] 

### Return type

[**List[AutocompleteIngredientSearch200ResponseInner]**](AutocompleteIngredientSearch200ResponseInner.md)

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

# **compute_ingredient_amount**
> ComputeIngredientAmount200Response compute_ingredient_amount(id, nutrient, target, unit=unit)

Compute Ingredient Amount

Compute the amount you need of a certain ingredient for a certain nutritional goal. For example, how much pineapple do you have to eat to get 10 grams of protein?

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.compute_ingredient_amount200_response import ComputeIngredientAmount200Response
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
    api_instance = openapi_client.IngredientsApi(api_client)
    id = 9266 # float | The id of the ingredient you want the amount for.
    nutrient = 'protein' # str | The target nutrient. See a list of supported nutrients.
    target = 2 # float | The target number of the given nutrient.
    unit = 'oz' # str | The target unit. (optional)

    try:
        # Compute Ingredient Amount
        api_response = api_instance.compute_ingredient_amount(id, nutrient, target, unit=unit)
        print("The response of IngredientsApi->compute_ingredient_amount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->compute_ingredient_amount: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| The id of the ingredient you want the amount for. | 
 **nutrient** | **str**| The target nutrient. See a list of supported nutrients. | 
 **target** | **float**| The target number of the given nutrient. | 
 **unit** | **str**| The target unit. | [optional] 

### Return type

[**ComputeIngredientAmount200Response**](ComputeIngredientAmount200Response.md)

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

# **get_ingredient_information**
> GetIngredientInformation200Response get_ingredient_information(id, amount=amount, unit=unit)

Get Ingredient Information

Use an ingredient id to get all available information about an ingredient, such as its image and supermarket aisle.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_ingredient_information200_response import GetIngredientInformation200Response
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
    api_instance = openapi_client.IngredientsApi(api_client)
    id = 1 # int | The item's id.
    amount = 150 # float | The amount of this ingredient. (optional)
    unit = 'grams' # str | The unit for the given amount. (optional)

    try:
        # Get Ingredient Information
        api_response = api_instance.get_ingredient_information(id, amount=amount, unit=unit)
        print("The response of IngredientsApi->get_ingredient_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->get_ingredient_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The item&#39;s id. | 
 **amount** | **float**| The amount of this ingredient. | [optional] 
 **unit** | **str**| The unit for the given amount. | [optional] 

### Return type

[**GetIngredientInformation200Response**](GetIngredientInformation200Response.md)

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

# **get_ingredient_substitutes**
> GetIngredientSubstitutes200Response get_ingredient_substitutes(ingredient_name)

Get Ingredient Substitutes

Search for substitutes for a given ingredient.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_ingredient_substitutes200_response import GetIngredientSubstitutes200Response
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
    api_instance = openapi_client.IngredientsApi(api_client)
    ingredient_name = 'butter' # str | The name of the ingredient you want to replace.

    try:
        # Get Ingredient Substitutes
        api_response = api_instance.get_ingredient_substitutes(ingredient_name)
        print("The response of IngredientsApi->get_ingredient_substitutes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->get_ingredient_substitutes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingredient_name** | **str**| The name of the ingredient you want to replace. | 

### Return type

[**GetIngredientSubstitutes200Response**](GetIngredientSubstitutes200Response.md)

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

# **get_ingredient_substitutes_by_id**
> GetIngredientSubstitutes200Response get_ingredient_substitutes_by_id(id)

Get Ingredient Substitutes by ID

Search for substitutes for a given ingredient.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.get_ingredient_substitutes200_response import GetIngredientSubstitutes200Response
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
    api_instance = openapi_client.IngredientsApi(api_client)
    id = 1 # int | The item's id.

    try:
        # Get Ingredient Substitutes by ID
        api_response = api_instance.get_ingredient_substitutes_by_id(id)
        print("The response of IngredientsApi->get_ingredient_substitutes_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->get_ingredient_substitutes_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The item&#39;s id. | 

### Return type

[**GetIngredientSubstitutes200Response**](GetIngredientSubstitutes200Response.md)

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

# **ingredient_search**
> IngredientSearch200Response ingredient_search(query=query, add_children=add_children, min_protein_percent=min_protein_percent, max_protein_percent=max_protein_percent, min_fat_percent=min_fat_percent, max_fat_percent=max_fat_percent, min_carbs_percent=min_carbs_percent, max_carbs_percent=max_carbs_percent, meta_information=meta_information, intolerances=intolerances, sort=sort, sort_direction=sort_direction, offset=offset, number=number, language=language)

Ingredient Search

Search for simple whole foods (e.g. fruits, vegetables, nuts, grains, meat, fish, dairy etc.).

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.ingredient_search200_response import IngredientSearch200Response
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
    api_instance = openapi_client.IngredientsApi(api_client)
    query = 'burger' # str | The (natural language) search query. (optional)
    add_children = true # bool | Whether to add children of found foods. (optional)
    min_protein_percent = 10 # float | The minimum percentage of protein the food must have (between 0 and 100). (optional)
    max_protein_percent = 90 # float | The maximum percentage of protein the food can have (between 0 and 100). (optional)
    min_fat_percent = 10 # float | The minimum percentage of fat the food must have (between 0 and 100). (optional)
    max_fat_percent = 90 # float | The maximum percentage of fat the food can have (between 0 and 100). (optional)
    min_carbs_percent = 10 # float | The minimum percentage of carbs the food must have (between 0 and 100). (optional)
    max_carbs_percent = 90 # float | The maximum percentage of carbs the food can have (between 0 and 100). (optional)
    meta_information = false # bool | Whether to return more meta information about the ingredients. (optional)
    intolerances = 'egg' # str | A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. (optional)
    sort = 'calories' # str | The strategy to sort recipes by. See a full list of supported sorting options. (optional)
    sort_direction = 'asc' # str | The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending). (optional)
    offset = 56 # int | The number of results to skip (between 0 and 900). (optional)
    number = 10 # int | The maximum number of items to return (between 1 and 100). Defaults to 10. (optional) (default to 10)
    language = 'en' # str | The language of the input. Either 'en' or 'de'. (optional)

    try:
        # Ingredient Search
        api_response = api_instance.ingredient_search(query=query, add_children=add_children, min_protein_percent=min_protein_percent, max_protein_percent=max_protein_percent, min_fat_percent=min_fat_percent, max_fat_percent=max_fat_percent, min_carbs_percent=min_carbs_percent, max_carbs_percent=max_carbs_percent, meta_information=meta_information, intolerances=intolerances, sort=sort, sort_direction=sort_direction, offset=offset, number=number, language=language)
        print("The response of IngredientsApi->ingredient_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->ingredient_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The (natural language) search query. | [optional] 
 **add_children** | **bool**| Whether to add children of found foods. | [optional] 
 **min_protein_percent** | **float**| The minimum percentage of protein the food must have (between 0 and 100). | [optional] 
 **max_protein_percent** | **float**| The maximum percentage of protein the food can have (between 0 and 100). | [optional] 
 **min_fat_percent** | **float**| The minimum percentage of fat the food must have (between 0 and 100). | [optional] 
 **max_fat_percent** | **float**| The maximum percentage of fat the food can have (between 0 and 100). | [optional] 
 **min_carbs_percent** | **float**| The minimum percentage of carbs the food must have (between 0 and 100). | [optional] 
 **max_carbs_percent** | **float**| The maximum percentage of carbs the food can have (between 0 and 100). | [optional] 
 **meta_information** | **bool**| Whether to return more meta information about the ingredients. | [optional] 
 **intolerances** | **str**| A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. | [optional] 
 **sort** | **str**| The strategy to sort recipes by. See a full list of supported sorting options. | [optional] 
 **sort_direction** | **str**| The direction in which to sort. Must be either &#39;asc&#39; (ascending) or &#39;desc&#39; (descending). | [optional] 
 **offset** | **int**| The number of results to skip (between 0 and 900). | [optional] 
 **number** | **int**| The maximum number of items to return (between 1 and 100). Defaults to 10. | [optional] [default to 10]
 **language** | **str**| The language of the input. Either &#39;en&#39; or &#39;de&#39;. | [optional] 

### Return type

[**IngredientSearch200Response**](IngredientSearch200Response.md)

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

# **ingredients_by_id_image**
> object ingredients_by_id_image(id, measure=measure)

Ingredients by ID Image

Visualize a recipe's ingredient list.

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
    api_instance = openapi_client.IngredientsApi(api_client)
    id = 1082038 # float | The recipe id.
    measure = 'metric' # str | Whether the the measures should be 'us' or 'metric'. (optional)

    try:
        # Ingredients by ID Image
        api_response = api_instance.ingredients_by_id_image(id, measure=measure)
        print("The response of IngredientsApi->ingredients_by_id_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->ingredients_by_id_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| The recipe id. | 
 **measure** | **str**| Whether the the measures should be &#39;us&#39; or &#39;metric&#39;. | [optional] 

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

# **map_ingredients_to_grocery_products**
> List[MapIngredientsToGroceryProducts200ResponseInner] map_ingredients_to_grocery_products(map_ingredients_to_grocery_products_request)

Map Ingredients to Grocery Products

Map a set of ingredients to products you can buy in the grocery store.

### Example

* Api Key Authentication (apiKeyScheme):

```python
import openapi_client
from openapi_client.models.map_ingredients_to_grocery_products200_response_inner import MapIngredientsToGroceryProducts200ResponseInner
from openapi_client.models.map_ingredients_to_grocery_products_request import MapIngredientsToGroceryProductsRequest
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
    api_instance = openapi_client.IngredientsApi(api_client)
    map_ingredients_to_grocery_products_request = {"ingredients":["eggs","bacon"],"servings":2} # MapIngredientsToGroceryProductsRequest | 

    try:
        # Map Ingredients to Grocery Products
        api_response = api_instance.map_ingredients_to_grocery_products(map_ingredients_to_grocery_products_request)
        print("The response of IngredientsApi->map_ingredients_to_grocery_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->map_ingredients_to_grocery_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_ingredients_to_grocery_products_request** | [**MapIngredientsToGroceryProductsRequest**](MapIngredientsToGroceryProductsRequest.md)|  | 

### Return type

[**List[MapIngredientsToGroceryProducts200ResponseInner]**](MapIngredientsToGroceryProducts200ResponseInner.md)

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **visualize_ingredients**
> str visualize_ingredients(content_type=content_type, language=language, accept=accept)

Ingredients Widget

Visualize ingredients of a recipe. You can play around with that endpoint!

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
    api_instance = openapi_client.IngredientsApi(api_client)
    content_type = 'application/json' # str | The content type. (optional)
    language = 'en' # str | The language of the input. Either 'en' or 'de'. (optional)
    accept = 'application/json' # str | Accept header. (optional)

    try:
        # Ingredients Widget
        api_response = api_instance.visualize_ingredients(content_type=content_type, language=language, accept=accept)
        print("The response of IngredientsApi->visualize_ingredients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngredientsApi->visualize_ingredients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| The content type. | [optional] 
 **language** | **str**| The language of the input. Either &#39;en&#39; or &#39;de&#39;. | [optional] 
 **accept** | **str**| Accept header. | [optional] 

### Return type

**str**

### Authorization

[apiKeyScheme](../README.md#apiKeyScheme)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

