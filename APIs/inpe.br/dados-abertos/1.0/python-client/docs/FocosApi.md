# openapi_client.FocosApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_focos_count_resource**](FocosApi.md#get_focos_count_resource) | **GET** /focos/count | Endpoint para retorno da contagem dos focos de calor
[**get_focos_resource**](FocosApi.md#get_focos_resource) | **GET** /focos/ | Endpoint para retorno dos dados de focos de calor


# **get_focos_count_resource**
> get_focos_count_resource(pais_id=pais_id, estado_id=estado_id, municipio_id=municipio_id, satelite=satelite)

Endpoint para retorno da contagem dos focos de calor

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
    api_instance = openapi_client.FocosApi(api_client)
    pais_id = 56 # int | Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    estado_id = 56 # int | Código do estado pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    municipio_id = 56 # int | Código do município pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    satelite = ['satelite_example'] # List[str] | Nome do satélte pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)

    try:
        # Endpoint para retorno da contagem dos focos de calor
        api_instance.get_focos_count_resource(pais_id=pais_id, estado_id=estado_id, municipio_id=municipio_id, satelite=satelite)
    except Exception as e:
        print("Exception when calling FocosApi->get_focos_count_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pais_id** | **int**| Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **estado_id** | **int**| Código do estado pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **municipio_id** | **int**| Código do município pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **satelite** | [**List[str]**](str.md)| Nome do satélte pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 

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

# **get_focos_resource**
> get_focos_resource(pais_id=pais_id, estado_id=estado_id, municipio_id=municipio_id, satelite=satelite, x_fields=x_fields)

Endpoint para retorno dos dados de focos de calor

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
    api_instance = openapi_client.FocosApi(api_client)
    pais_id = 56 # int | Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    estado_id = 56 # int | Código do estado pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    municipio_id = 56 # int | Código do município pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    satelite = ['satelite_example'] # List[str] | Nome do satélte pelo qual será filtrado o resultado. Ver rotas auxiliares. (optional)
    x_fields = 'x_fields_example' # str | An optional fields mask (optional)

    try:
        # Endpoint para retorno dos dados de focos de calor
        api_instance.get_focos_resource(pais_id=pais_id, estado_id=estado_id, municipio_id=municipio_id, satelite=satelite, x_fields=x_fields)
    except Exception as e:
        print("Exception when calling FocosApi->get_focos_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pais_id** | **int**| Código do país pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **estado_id** | **int**| Código do estado pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **municipio_id** | **int**| Código do município pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **satelite** | [**List[str]**](str.md)| Nome do satélte pelo qual será filtrado o resultado. Ver rotas auxiliares. | [optional] 
 **x_fields** | **str**| An optional fields mask | [optional] 

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

