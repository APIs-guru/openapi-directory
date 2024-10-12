# openapi_client.PromotionsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**promotions_id_json_delete**](PromotionsApi.md#promotions_id_json_delete) | **DELETE** /promotions/{id}.json | Delete an existing Promotion.
[**promotions_id_json_get**](PromotionsApi.md#promotions_id_json_get) | **GET** /promotions/{id}.json | Retrieve a single Promotion.
[**promotions_id_json_put**](PromotionsApi.md#promotions_id_json_put) | **PUT** /promotions/{id}.json | Update a Promotion.
[**promotions_json_get**](PromotionsApi.md#promotions_json_get) | **GET** /promotions.json | Retrieve all Promotions.
[**promotions_json_post**](PromotionsApi.md#promotions_json_post) | **POST** /promotions.json | Create a new Promotion.


# **promotions_id_json_delete**
> str promotions_id_json_delete(login, authtoken, id)

Delete an existing Promotion.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Promotion

    try:
        # Delete an existing Promotion.
        api_response = api_instance.promotions_id_json_delete(login, authtoken, id)
        print("The response of PromotionsApi->promotions_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->promotions_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Promotion | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Promotion Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promotions_id_json_get**
> Promotion promotions_id_json_get(login, authtoken, id)

Retrieve a single Promotion.

### Example


```python
import openapi_client
from openapi_client.models.promotion import Promotion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Promotion

    try:
        # Retrieve a single Promotion.
        api_response = api_instance.promotions_id_json_get(login, authtoken, id)
        print("The response of PromotionsApi->promotions_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->promotions_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Promotion | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Promotion Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promotions_id_json_put**
> Promotion promotions_id_json_put(login, authtoken, id, promotion_edit)

Update a Promotion.

### Example


```python
import openapi_client
from openapi_client.models.promotion import Promotion
from openapi_client.models.promotion_edit import PromotionEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Promotion
    promotion_edit = openapi_client.PromotionEdit() # PromotionEdit | Promotion parameters.

    try:
        # Update a Promotion.
        api_response = api_instance.promotions_id_json_put(login, authtoken, id, promotion_edit)
        print("The response of PromotionsApi->promotions_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->promotions_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Promotion | 
 **promotion_edit** | [**PromotionEdit**](PromotionEdit.md)| Promotion parameters. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Promotion Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promotions_json_get**
> List[Promotion] promotions_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Promotions.

### Example


```python
import openapi_client
from openapi_client.models.promotion import Promotion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 56 # int | Promotions' list restriction (default: 50 | max: 200). (optional)
    page = 56 # int | Promotions' list page (default: 1). (optional)

    try:
        # Retrieve all Promotions.
        api_response = api_instance.promotions_json_get(login, authtoken, limit=limit, page=page)
        print("The response of PromotionsApi->promotions_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->promotions_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| Promotions&#39; list restriction (default: 50 | max: 200). | [optional] 
 **page** | **int**| Promotions&#39; list page (default: 1). | [optional] 

### Return type

[**List[Promotion]**](Promotion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Promotions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promotions_json_post**
> Promotion promotions_json_post(login, authtoken, promotion_edit)

Create a new Promotion.

### Example


```python
import openapi_client
from openapi_client.models.promotion import Promotion
from openapi_client.models.promotion_edit import PromotionEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    promotion_edit = openapi_client.PromotionEdit() # PromotionEdit | Promotion parameters.

    try:
        # Create a new Promotion.
        api_response = api_instance.promotions_json_post(login, authtoken, promotion_edit)
        print("The response of PromotionsApi->promotions_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->promotions_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **promotion_edit** | [**PromotionEdit**](PromotionEdit.md)| Promotion parameters. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Promotion Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

