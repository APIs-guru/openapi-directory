# openapi_client.FileApi

All URIs are relative to *https://cnab-online.herokuapp.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**file_file_id_get**](FileApi.md#file_file_id_get) | **GET** /file/{fileId} | Retorna as informações básicas de um arquivo previamente processado
[**file_file_id_lines_get**](FileApi.md#file_file_id_lines_get) | **GET** /file/{fileId}/lines | Retorna todas as linhas e seus respectivos campos (de forma não processada, apenas indicando os campos reconhecidos)
[**file_file_id_occurrences_get**](FileApi.md#file_file_id_occurrences_get) | **GET** /file/{fileId}/occurrences | Retorna as informações de baixa de boletos e outros tipos de ocorrências
[**file_post**](FileApi.md#file_post) | **POST** /file | Faz o upload de um arquivo


# **file_file_id_get**
> FilePost200Response file_file_id_get(file_id)

Retorna as informações básicas de um arquivo previamente processado

### Example


```python
import openapi_client
from openapi_client.models.file_post200_response import FilePost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cnab-online.herokuapp.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cnab-online.herokuapp.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileApi(api_client)
    file_id = 'file_id_example' # str | ID Temporário gerado no endpoint file

    try:
        # Retorna as informações básicas de um arquivo previamente processado
        api_response = api_instance.file_file_id_get(file_id)
        print("The response of FileApi->file_file_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_file_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| ID Temporário gerado no endpoint file | 

### Return type

[**FilePost200Response**](FilePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Informações básicas do arquivo |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_file_id_lines_get**
> FileFileIdLinesGet200Response file_file_id_lines_get(file_id)

Retorna todas as linhas e seus respectivos campos (de forma não processada, apenas indicando os campos reconhecidos)

### Example


```python
import openapi_client
from openapi_client.models.file_file_id_lines_get200_response import FileFileIdLinesGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cnab-online.herokuapp.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cnab-online.herokuapp.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileApi(api_client)
    file_id = 'file_id_example' # str | ID Temporário gerado no endpoint file

    try:
        # Retorna todas as linhas e seus respectivos campos (de forma não processada, apenas indicando os campos reconhecidos)
        api_response = api_instance.file_file_id_lines_get(file_id)
        print("The response of FileApi->file_file_id_lines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_file_id_lines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| ID Temporário gerado no endpoint file | 

### Return type

[**FileFileIdLinesGet200Response**](FileFileIdLinesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Informações básicas do arquivo |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_file_id_occurrences_get**
> FileFileIdOccurrencesGet200Response file_file_id_occurrences_get(file_id)

Retorna as informações de baixa de boletos e outros tipos de ocorrências

### Example


```python
import openapi_client
from openapi_client.models.file_file_id_occurrences_get200_response import FileFileIdOccurrencesGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cnab-online.herokuapp.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cnab-online.herokuapp.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileApi(api_client)
    file_id = 'file_id_example' # str | ID Temporário gerado no endpoint file

    try:
        # Retorna as informações de baixa de boletos e outros tipos de ocorrências
        api_response = api_instance.file_file_id_occurrences_get(file_id)
        print("The response of FileApi->file_file_id_occurrences_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_file_id_occurrences_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| ID Temporário gerado no endpoint file | 

### Return type

[**FileFileIdOccurrencesGet200Response**](FileFileIdOccurrencesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Informações básicas do arquivo |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_post**
> FilePost200Response file_post(file)

Faz o upload de um arquivo

Processa um arquivo CNAB para obter informações sobre o mesmo. Retorna um ID temporário para o mesmo. 

### Example


```python
import openapi_client
from openapi_client.models.file_post200_response import FilePost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cnab-online.herokuapp.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cnab-online.herokuapp.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileApi(api_client)
    file = None # bytearray | Arquivo CNAB

    try:
        # Faz o upload de um arquivo
        api_response = api_instance.file_post(file)
        print("The response of FileApi->file_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| Arquivo CNAB | 

### Return type

[**FilePost200Response**](FilePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Informações básicas do arquivo |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

