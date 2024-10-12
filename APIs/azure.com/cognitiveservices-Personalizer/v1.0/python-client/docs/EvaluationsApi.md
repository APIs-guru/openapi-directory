# openapi_client.EvaluationsApi

All URIs are relative to *https://azure.local/personalizer/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**evaluations_create**](EvaluationsApi.md#evaluations_create) | **POST** /evaluations | Create Evaluation.
[**evaluations_delete**](EvaluationsApi.md#evaluations_delete) | **DELETE** /evaluations/{evaluationId} | Delete Evaluation.
[**evaluations_get**](EvaluationsApi.md#evaluations_get) | **GET** /evaluations/{evaluationId} | Get Evaluation.
[**evaluations_list**](EvaluationsApi.md#evaluations_list) | **GET** /evaluations | List Evaluations.


# **evaluations_create**
> Evaluation evaluations_create(evaluation)

Create Evaluation.

Submit a new evaluation job.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.evaluation import Evaluation
from openapi_client.models.evaluation_contract import EvaluationContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EvaluationsApi(api_client)
    evaluation = openapi_client.EvaluationContract() # EvaluationContract | The evaluation job definition.

    try:
        # Create Evaluation.
        api_response = api_instance.evaluations_create(evaluation)
        print("The response of EvaluationsApi->evaluations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EvaluationsApi->evaluations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evaluation** | [**EvaluationContract**](EvaluationContract.md)| The evaluation job definition. | 

### Return type

[**Evaluation**](Evaluation.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  * Location - Location of the evaluation resource <br>  |
**0** | Invalid evaluation contract. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **evaluations_delete**
> evaluations_delete(evaluation_id)

Delete Evaluation.

Delete the evaluation associated with the Id.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EvaluationsApi(api_client)
    evaluation_id = 'evaluation_id_example' # str | Id of the evaluation to delete.

    try:
        # Delete Evaluation.
        api_instance.evaluations_delete(evaluation_id)
    except Exception as e:
        print("Exception when calling EvaluationsApi->evaluations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evaluation_id** | **str**| Id of the evaluation to delete. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **evaluations_get**
> Evaluation evaluations_get(evaluation_id)

Get Evaluation.

Get the evaluation associated with the Id.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.evaluation import Evaluation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EvaluationsApi(api_client)
    evaluation_id = 'evaluation_id_example' # str | Id of the evaluation.

    try:
        # Get Evaluation.
        api_response = api_instance.evaluations_get(evaluation_id)
        print("The response of EvaluationsApi->evaluations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EvaluationsApi->evaluations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evaluation_id** | **str**| Id of the evaluation. | 

### Return type

[**Evaluation**](Evaluation.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Evaluation not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **evaluations_list**
> List[Evaluation] evaluations_list()

List Evaluations.

List all the submitted evaluations.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.evaluation import Evaluation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EvaluationsApi(api_client)

    try:
        # List Evaluations.
        api_response = api_instance.evaluations_list()
        print("The response of EvaluationsApi->evaluations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EvaluationsApi->evaluations_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Evaluation]**](Evaluation.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

