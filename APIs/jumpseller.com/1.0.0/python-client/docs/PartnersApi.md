# openapi_client.PartnersApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partners_stores_json_get**](PartnersApi.md#partners_stores_json_get) | **GET** /partners/stores.json | Retrieve statistics.
[**store_check_status_json_get**](PartnersApi.md#store_check_status_json_get) | **GET** /store/check_status.json | Retrive store creation status.
[**store_create_json_post**](PartnersApi.md#store_create_json_post) | **POST** /store/create.json | Create a Partnered Store


# **partners_stores_json_get**
> List[Type] partners_stores_json_get(partner_code, auth_token, var_from, to, page=page)

Retrieve statistics.

### Example


```python
import openapi_client
from openapi_client.models.type import Type
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
    api_instance = openapi_client.PartnersApi(api_client)
    partner_code = 'partner_code_example' # str | Partner code.
    auth_token = 'auth_token_example' # str | Partner authentication token.
    var_from = 'var_from_example' # str | Statistics start date. Should be in format 'Y-m-d'.
    to = 'to_example' # str | Statistics end date. Should be in format 'Y-m-d'.
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve statistics.
        api_response = api_instance.partners_stores_json_get(partner_code, auth_token, var_from, to, page=page)
        print("The response of PartnersApi->partners_stores_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->partners_stores_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_code** | **str**| Partner code. | 
 **auth_token** | **str**| Partner authentication token. | 
 **var_from** | **str**| Statistics start date. Should be in format &#39;Y-m-d&#39;. | 
 **to** | **str**| Statistics end date. Should be in format &#39;Y-m-d&#39;. | 
 **page** | **int**| List page | [optional] [default to 1]

### Return type

[**List[Type]**](Type.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of partner stores statistics. |  -  |
**400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_check_status_json_get**
> StoreCheckStatusJsonGet200Response store_check_status_json_get(partner_code, auth_token, store_code, locale=locale)

Retrive store creation status.

### Example


```python
import openapi_client
from openapi_client.models.store_check_status_json_get200_response import StoreCheckStatusJsonGet200Response
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
    api_instance = openapi_client.PartnersApi(api_client)
    partner_code = 'partner_code_example' # str | Partner code.
    auth_token = 'auth_token_example' # str | Partner authentication token.
    store_code = 'store_code_example' # str | Store Code
    locale = 'en' # str | ISO 3166-2 code of the language used in the response messages. (optional) (default to 'en')

    try:
        # Retrive store creation status.
        api_response = api_instance.store_check_status_json_get(partner_code, auth_token, store_code, locale=locale)
        print("The response of PartnersApi->store_check_status_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->store_check_status_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_code** | **str**| Partner code. | 
 **auth_token** | **str**| Partner authentication token. | 
 **store_code** | **str**| Store Code | 
 **locale** | **str**| ISO 3166-2 code of the language used in the response messages. | [optional] [default to &#39;en&#39;]

### Return type

[**StoreCheckStatusJsonGet200Response**](StoreCheckStatusJsonGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Store status object if creation is still in progress. A new Partner Store object when creation is done. |  -  |
**400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_create_json_post**
> PartnerStoreCode store_create_json_post(partner_code, auth_token, partner_store_create)

Create a Partnered Store

### Example


```python
import openapi_client
from openapi_client.models.partner_store_code import PartnerStoreCode
from openapi_client.models.partner_store_create import PartnerStoreCreate
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
    api_instance = openapi_client.PartnersApi(api_client)
    partner_code = 'partner_code_example' # str | Partner code.
    auth_token = 'auth_token_example' # str | Partner authentication token.
    partner_store_create = openapi_client.PartnerStoreCreate() # PartnerStoreCreate | New partnered Store parameters.

    try:
        # Create a Partnered Store
        api_response = api_instance.store_create_json_post(partner_code, auth_token, partner_store_create)
        print("The response of PartnersApi->store_create_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->store_create_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_code** | **str**| Partner code. | 
 **auth_token** | **str**| Partner authentication token. | 
 **partner_store_create** | [**PartnerStoreCreate**](PartnerStoreCreate.md)| New partnered Store parameters. | 

### Return type

[**PartnerStoreCode**](PartnerStoreCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Partner Store object. |  -  |
**400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

