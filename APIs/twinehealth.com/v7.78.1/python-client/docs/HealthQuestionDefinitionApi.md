# openapi_client.HealthQuestionDefinitionApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_health_question_definition**](HealthQuestionDefinitionApi.md#fetch_health_question_definition) | **GET** /health_question_definition/{id} | Get a health question definition
[**fetch_health_question_definitions**](HealthQuestionDefinitionApi.md#fetch_health_question_definitions) | **GET** /health_question_definition | List health question definitions


# **fetch_health_question_definition**
> FetchHealthQuestionDefinitionResponse fetch_health_question_definition(id)

Get a health question definition

Get a health question definition by id

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_question_definition_response import FetchHealthQuestionDefinitionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HealthQuestionDefinitionApi(api_client)
    id = 'id_example' # str | Health question definition identifier

    try:
        # Get a health question definition
        api_response = api_instance.fetch_health_question_definition(id)
        print("The response of HealthQuestionDefinitionApi->fetch_health_question_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthQuestionDefinitionApi->fetch_health_question_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Health question definition identifier | 

### Return type

[**FetchHealthQuestionDefinitionResponse**](FetchHealthQuestionDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_health_question_definitions**
> FetchHealthQuestionDefinitionsResponse fetch_health_question_definitions()

List health question definitions

Get a list of all health question definitions

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_question_definitions_response import FetchHealthQuestionDefinitionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HealthQuestionDefinitionApi(api_client)

    try:
        # List health question definitions
        api_response = api_instance.fetch_health_question_definitions()
        print("The response of HealthQuestionDefinitionApi->fetch_health_question_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthQuestionDefinitionApi->fetch_health_question_definitions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**FetchHealthQuestionDefinitionsResponse**](FetchHealthQuestionDefinitionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

