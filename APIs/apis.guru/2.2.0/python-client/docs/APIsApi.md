# openapi_client.APIsApi

All URIs are relative to *https://api.apis.guru/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api**](APIsApi.md#get_api) | **GET** /specs/{provider}/{api}.json | Retrieve one version of a particular API
[**get_metrics**](APIsApi.md#get_metrics) | **GET** /metrics.json | Get basic metrics
[**get_provider**](APIsApi.md#get_provider) | **GET** /{provider}.json | List all APIs for a particular provider
[**get_providers**](APIsApi.md#get_providers) | **GET** /providers.json | List all providers
[**get_service_api**](APIsApi.md#get_service_api) | **GET** /specs/{provider}/{service}/{api}.json | Retrieve one version of a particular API with a serviceName.
[**get_services**](APIsApi.md#get_services) | **GET** /{provider}/services.json | List all serviceNames for a particular provider
[**list_apis**](APIsApi.md#list_apis) | **GET** /list.json | List all APIs


# **get_api**
> API get_api(provider, api)

Retrieve one version of a particular API

Returns the API entry for one specific version of an API where there is no serviceName.

### Example


```python
import openapi_client
from openapi_client.models.api import API
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    provider = 'apis.guru' # str | 
    api = '2.1.0' # str | 

    try:
        # Retrieve one version of a particular API
        api_response = api_instance.get_api(provider, api)
        print("The response of APIsApi->get_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**|  | 
 **api** | **str**|  | 

### Return type

[**API**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_metrics**
> Metrics get_metrics()

Get basic metrics

Some basic metrics for the entire directory. Just stunning numbers to put on a front page and are intended purely for WoW effect :) 

### Example


```python
import openapi_client
from openapi_client.models.metrics import Metrics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)

    try:
        # Get basic metrics
        api_response = api_instance.get_metrics()
        print("The response of APIsApi->get_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_metrics: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Metrics**](Metrics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_provider**
> Dict[str, API] get_provider(provider)

List all APIs for a particular provider

List all APIs in the directory for a particular providerName Returns links to the individual API entry for each API. 

### Example


```python
import openapi_client
from openapi_client.models.api import API
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    provider = 'apis.guru' # str | 

    try:
        # List all APIs for a particular provider
        api_response = api_instance.get_provider(provider)
        print("The response of APIsApi->get_provider:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**|  | 

### Return type

[**Dict[str, API]**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_providers**
> GetProviders200Response get_providers()

List all providers

List all the providers in the directory 

### Example


```python
import openapi_client
from openapi_client.models.get_providers200_response import GetProviders200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)

    try:
        # List all providers
        api_response = api_instance.get_providers()
        print("The response of APIsApi->get_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_providers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetProviders200Response**](GetProviders200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_api**
> API get_service_api(provider, service, api)

Retrieve one version of a particular API with a serviceName.

Returns the API entry for one specific version of an API where there is a serviceName.

### Example


```python
import openapi_client
from openapi_client.models.api import API
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    provider = 'apis.guru' # str | 
    service = 'graph' # str | 
    api = '2.1.0' # str | 

    try:
        # Retrieve one version of a particular API with a serviceName.
        api_response = api_instance.get_service_api(provider, service, api)
        print("The response of APIsApi->get_service_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_service_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**|  | 
 **service** | **str**|  | 
 **api** | **str**|  | 

### Return type

[**API**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_services**
> GetServices200Response get_services(provider)

List all serviceNames for a particular provider

List all serviceNames in the directory for a particular providerName 

### Example


```python
import openapi_client
from openapi_client.models.get_services200_response import GetServices200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    provider = 'apis.guru' # str | 

    try:
        # List all serviceNames for a particular provider
        api_response = api_instance.get_services(provider)
        print("The response of APIsApi->get_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**|  | 

### Return type

[**GetServices200Response**](GetServices200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_apis**
> Dict[str, API] list_apis()

List all APIs

List all APIs in the directory. Returns links to the OpenAPI definitions for each API in the directory. If API exist in multiple versions `preferred` one is explicitly marked. Some basic info from the OpenAPI definition is cached inside each object. This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API. 

### Example


```python
import openapi_client
from openapi_client.models.api import API
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apis.guru/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apis.guru/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)

    try:
        # List all APIs
        api_response = api_instance.list_apis()
        print("The response of APIsApi->list_apis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->list_apis: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Dict[str, API]**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

