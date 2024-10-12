# openapi_client.ArticleApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**article_add_measure_unit**](ArticleApi.md#article_add_measure_unit) | **POST** /api/Article/MeasureUnit | Add measure unit
[**article_delete**](ArticleApi.md#article_delete) | **DELETE** /api/Article | Delete article from the system             
[**article_get**](ArticleApi.md#article_get) | **GET** /api/Article/{articleID} | Get article details This will return all properties related to article entity             
[**article_get_addons**](ArticleApi.md#article_get_addons) | **GET** /api/Article/GetAddons | 
[**article_get_measure_units**](ArticleApi.md#article_get_measure_units) | **GET** /api/Article/MeasureUnits | Get mesure units
[**article_get_revenue_accounts**](ArticleApi.md#article_get_revenue_accounts) | **GET** /api/Article/RevenueAccounts | Get Revenue Accounts 
[**article_gym_article_details**](ArticleApi.md#article_gym_article_details) | **GET** /api/Article/GymArticle/{articleId}/{gymId} | Get Gym specific properties for article             
[**article_post**](ArticleApi.md#article_post) | **POST** /api/Article | Add new article             
[**article_put**](ArticleApi.md#article_put) | **PUT** /api/Article | update existing article             
[**article_search**](ArticleApi.md#article_search) | **GET** /api/Article/Search | Search articles It will only return basic information of article             
[**article_update_article_gym_details**](ArticleApi.md#article_update_article_gym_details) | **PUT** /api/Article/ArticleGymDetails | Add article details that associate with a Gym             
[**article_update_status**](ArticleApi.md#article_update_status) | **PUT** /api/Article/UpdateStatus | Deactivate existing article 


# **article_add_measure_unit**
> DefaultResponseDTOOfStatusDTO article_add_measure_unit(measure_unit_dto)

Add measure unit

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.models.measure_unit_dto import MeasureUnitDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    measure_unit_dto = [openapi_client.MeasureUnitDTO()] # List[MeasureUnitDTO] | list of measureUnit

    try:
        # Add measure unit
        api_response = api_instance.article_add_measure_unit(measure_unit_dto)
        print("The response of ArticleApi->article_add_measure_unit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_add_measure_unit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measure_unit_dto** | [**List[MeasureUnitDTO]**](MeasureUnitDTO.md)| list of measureUnit | 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_delete**
> DefaultResponseDTOOfInteger article_delete(article_id=article_id)

Delete article from the system             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_integer import DefaultResponseDTOOfInteger
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    article_id = 56 # int | indentity number(primary key) for article object (optional)

    try:
        # Delete article from the system             
        api_response = api_instance.article_delete(article_id=article_id)
        print("The response of ArticleApi->article_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| indentity number(primary key) for article object | [optional] 

### Return type

[**DefaultResponseDTOOfInteger**](DefaultResponseDTOOfInteger.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | operation was success(true) or fail(false)  |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_get**
> DefaultResponseDTOOfArticleDTO article_get(article_id)

Get article details This will return all properties related to article entity             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_article_dto import DefaultResponseDTOOfArticleDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    article_id = 56 # int | indentity number (primary key) for article object

    try:
        # Get article details This will return all properties related to article entity             
        api_response = api_instance.article_get(article_id)
        print("The response of ArticleApi->article_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| indentity number (primary key) for article object | 

### Return type

[**DefaultResponseDTOOfArticleDTO**](DefaultResponseDTOOfArticleDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with Article entity |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_get_addons**
> DefaultResponseDTOOfListOfArticleSearchDTO article_get_addons(search_text=search_text, gym_ids=gym_ids, type=type, limit=limit, offset=offset)



### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_list_of_article_search_dto import DefaultResponseDTOOfListOfArticleSearchDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    search_text = 'search_text_example' # str | Search text - will be search by the name (optional)
    gym_ids = '-1' # str | Comma separated gymIds deafult \"-1\" for all gyms (optional) (default to '-1')
    type = 'all' # str |  (optional) (default to 'all')
    limit = 100 # int |  (optional) (default to 100)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.article_get_addons(search_text=search_text, gym_ids=gym_ids, type=type, limit=limit, offset=offset)
        print("The response of ArticleApi->article_get_addons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_get_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_text** | **str**| Search text - will be search by the name | [optional] 
 **gym_ids** | **str**| Comma separated gymIds deafult \&quot;-1\&quot; for all gyms | [optional] [default to &#39;-1&#39;]
 **type** | **str**|  | [optional] [default to &#39;all&#39;]
 **limit** | **int**|  | [optional] [default to 100]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**DefaultResponseDTOOfListOfArticleSearchDTO**](DefaultResponseDTOOfListOfArticleSearchDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_get_measure_units**
> DefaultResponseDTOOfStatusDTO article_get_measure_units(type=type)

Get mesure units

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    type = 'type_example' # str | type of the measure unit (all, item, service) (optional)

    try:
        # Get mesure units
        api_response = api_instance.article_get_measure_units(type=type)
        print("The response of ArticleApi->article_get_measure_units:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_get_measure_units: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| type of the measure unit (all, item, service) | [optional] 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_get_revenue_accounts**
> DefaultResponseDTOOfStatusDTO article_get_revenue_accounts()

Get Revenue Accounts 

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)

    try:
        # Get Revenue Accounts 
        api_response = api_instance.article_get_revenue_accounts()
        print("The response of ArticleApi->article_get_revenue_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_get_revenue_accounts: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_gym_article_details**
> GymArticleDetailsDTO article_gym_article_details(article_id, gym_id)

Get Gym specific properties for article             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.gym_article_details_dto import GymArticleDetailsDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    article_id = 56 # int | indentity number(primary key) for article object
    gym_id = 56 # int | indentity number(primary key) for gym object

    try:
        # Get Gym specific properties for article             
        api_response = api_instance.article_gym_article_details(article_id, gym_id)
        print("The response of ArticleApi->article_gym_article_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_gym_article_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| indentity number(primary key) for article object | 
 **gym_id** | **int**| indentity number(primary key) for gym object | 

### Return type

[**GymArticleDetailsDTO**](GymArticleDetailsDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with Article entity |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_post**
> DefaultResponseDTOOfStatusDTO article_post(article_dto)

Add new article             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.article_dto import ArticleDTO
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    article_dto = openapi_client.ArticleDTO() # ArticleDTO | article object

    try:
        # Add new article             
        api_response = api_instance.article_post(article_dto)
        print("The response of ArticleApi->article_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_dto** | [**ArticleDTO**](ArticleDTO.md)| article object | 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | messageId that can use to get the status of import later on.! |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_put**
> DefaultResponseDTOOfStatusDTO article_put(article_dto)

update existing article             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.article_dto import ArticleDTO
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    article_dto = openapi_client.ArticleDTO() # ArticleDTO | article object

    try:
        # update existing article             
        api_response = api_instance.article_put(article_dto)
        print("The response of ArticleApi->article_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_dto** | [**ArticleDTO**](ArticleDTO.md)| article object | 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | messageId that can use to get the status of import later on.! |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_search**
> DefaultResponseDTOOfListOfArticleSearchDTO article_search(search_text=search_text, gym_id=gym_id, type=type, order_by=order_by, limit=limit, offset=offset, active_status=active_status)

Search articles It will only return basic information of article             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_list_of_article_search_dto import DefaultResponseDTOOfListOfArticleSearchDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    search_text = 'search_text_example' # str | part of article name (optional)
    gym_id = -1 # int | -1 for all gyms  (optional) (default to -1)
    type = 'all' # str | filter article type. default is 'all' (optional) (default to 'all')
    order_by = '1' # str | order by column.!-- invalid column will give internal server error (optional) (default to '1')
    limit = 100 # int | number of recode in result and default is 100. use negative numbers to order by desc (optional) (default to 100)
    offset = 0 # int | number of recodes to skip (optional) (default to 0)
    active_status = 1 # int | Active Status 1 : Active, 2: Inactive, 3: All, Default : 1 (optional) (default to 1)

    try:
        # Search articles It will only return basic information of article             
        api_response = api_instance.article_search(search_text=search_text, gym_id=gym_id, type=type, order_by=order_by, limit=limit, offset=offset, active_status=active_status)
        print("The response of ArticleApi->article_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_text** | **str**| part of article name | [optional] 
 **gym_id** | **int**| -1 for all gyms  | [optional] [default to -1]
 **type** | **str**| filter article type. default is &#39;all&#39; | [optional] [default to &#39;all&#39;]
 **order_by** | **str**| order by column.!-- invalid column will give internal server error | [optional] [default to &#39;1&#39;]
 **limit** | **int**| number of recode in result and default is 100. use negative numbers to order by desc | [optional] [default to 100]
 **offset** | **int**| number of recodes to skip | [optional] [default to 0]
 **active_status** | **int**| Active Status 1 : Active, 2: Inactive, 3: All, Default : 1 | [optional] [default to 1]

### Return type

[**DefaultResponseDTOOfListOfArticleSearchDTO**](DefaultResponseDTOOfListOfArticleSearchDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with set of a Article entities |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_update_article_gym_details**
> DefaultResponseDTOOfStatusDTO article_update_article_gym_details(gym_article_details_dto)

Add article details that associate with a Gym             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.models.gym_article_details_dto import GymArticleDetailsDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    gym_article_details_dto = [openapi_client.GymArticleDetailsDTO()] # List[GymArticleDetailsDTO] | 

    try:
        # Add article details that associate with a Gym             
        api_response = api_instance.article_update_article_gym_details(gym_article_details_dto)
        print("The response of ArticleApi->article_update_article_gym_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_update_article_gym_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gym_article_details_dto** | [**List[GymArticleDetailsDTO]**](GymArticleDetailsDTO.md)|  | 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | messageId that can use to get the status of import later on.! |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_update_status**
> DefaultResponseDTOOfInteger article_update_status(article_id=article_id, status=status, user_name=user_name)

Deactivate existing article 

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_integer import DefaultResponseDTOOfInteger
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticleApi(api_client)
    article_id = 56 # int |  (optional)
    status = 56 # int | 1 : activate , 2 deactivate (optional)
    user_name = 'user_name_example' # str | Updating user (optional)

    try:
        # Deactivate existing article 
        api_response = api_instance.article_update_status(article_id=article_id, status=status, user_name=user_name)
        print("The response of ArticleApi->article_update_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticleApi->article_update_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**|  | [optional] 
 **status** | **int**| 1 : activate , 2 deactivate | [optional] 
 **user_name** | **str**| Updating user | [optional] 

### Return type

[**DefaultResponseDTOOfInteger**](DefaultResponseDTOOfInteger.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

