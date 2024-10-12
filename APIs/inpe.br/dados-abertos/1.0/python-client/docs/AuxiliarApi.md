# openapi_client.AuxiliarApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_estados_auxiliar_resource**](AuxiliarApi.md#get_estados_auxiliar_resource) | **GET** /auxiliar/estados | Endpoint para retorno dos dados de estados utilizados na filtragem de focos
[**get_municipios_auxiliar_resource**](AuxiliarApi.md#get_municipios_auxiliar_resource) | **GET** /auxiliar/municipios | Endpoint para retorno dos dados de municípios utilizados na filtragem de focos
[**get_paises_auxiliar_resource**](AuxiliarApi.md#get_paises_auxiliar_resource) | **GET** /auxiliar/paises | Endpoint para retorno dos dados de países utilizados na filtragem de focos
[**get_satelite_auxiliar_resource**](AuxiliarApi.md#get_satelite_auxiliar_resource) | **GET** /auxiliar/satelites | Endpoint para retorno dos dados de satélites utilizados na filtragem de focos


# **get_estados_auxiliar_resource**
> get_estados_auxiliar_resource(pais_id=pais_id)

Endpoint para retorno dos dados de estados utilizados na filtragem de focos

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuxiliarApi(api_client)
    pais_id = [56] # List[int] | Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)

    try:
        # Endpoint para retorno dos dados de estados utilizados na filtragem de focos
        api_instance.get_estados_auxiliar_resource(pais_id=pais_id)
    except Exception as e:
        print("Exception when calling AuxiliarApi->get_estados_auxiliar_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pais_id** | [**List[int]**](int.md)| Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 

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
**200** | Sucesso |  -  |
**400** | Erro de validação |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_municipios_auxiliar_resource**
> get_municipios_auxiliar_resource(pais_id, estado_id=estado_id)

Endpoint para retorno dos dados de municípios utilizados na filtragem de focos

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuxiliarApi(api_client)
    pais_id = 56 # int | Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares.
    estado_id = [56] # List[int] | Código do estado pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)

    try:
        # Endpoint para retorno dos dados de municípios utilizados na filtragem de focos
        api_instance.get_municipios_auxiliar_resource(pais_id, estado_id=estado_id)
    except Exception as e:
        print("Exception when calling AuxiliarApi->get_municipios_auxiliar_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pais_id** | **int**| Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. | 
 **estado_id** | [**List[int]**](int.md)| Código do estado pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 

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
**200** | Sucesso |  -  |
**400** | Erro de validação |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_paises_auxiliar_resource**
> get_paises_auxiliar_resource()

Endpoint para retorno dos dados de países utilizados na filtragem de focos

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuxiliarApi(api_client)

    try:
        # Endpoint para retorno dos dados de países utilizados na filtragem de focos
        api_instance.get_paises_auxiliar_resource()
    except Exception as e:
        print("Exception when calling AuxiliarApi->get_paises_auxiliar_resource: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_satelite_auxiliar_resource**
> get_satelite_auxiliar_resource()

Endpoint para retorno dos dados de satélites utilizados na filtragem de focos

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuxiliarApi(api_client)

    try:
        # Endpoint para retorno dos dados de satélites utilizados na filtragem de focos
        api_instance.get_satelite_auxiliar_resource()
    except Exception as e:
        print("Exception when calling AuxiliarApi->get_satelite_auxiliar_resource: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

