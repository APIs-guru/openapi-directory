# openapi_client.ProblemClassificationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**problem_classifications_get**](ProblemClassificationsApi.md#problem_classifications_get) | **GET** /providers/Microsoft.Support/services/{serviceName}/problemClassifications/{problemClassificationName} | 
[**problem_classifications_list**](ProblemClassificationsApi.md#problem_classifications_list) | **GET** /providers/Microsoft.Support/services/{serviceName}/problemClassifications | 


# **problem_classifications_get**
> ProblemClassification problem_classifications_get(service_name, problem_classification_name, api_version)



Gets the details of a specific problem classification for a specific Azure service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.problem_classification import ProblemClassification
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProblemClassificationsApi(api_client)
    service_name = 'service_name_example' # str | Name of Azure service available for support.
    problem_classification_name = 'problem_classification_name_example' # str | Name of problem classification.
    api_version = 'api_version_example' # str | Api version

    try:
        api_response = api_instance.problem_classifications_get(service_name, problem_classification_name, api_version)
        print("The response of ProblemClassificationsApi->problem_classifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProblemClassificationsApi->problem_classifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| Name of Azure service available for support. | 
 **problem_classification_name** | **str**| Name of problem classification. | 
 **api_version** | **str**| Api version | 

### Return type

[**ProblemClassification**](ProblemClassification.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved problem classification details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **problem_classifications_list**
> ProblemClassificationsListResult problem_classifications_list(service_name, api_version)



Lists all the problem classifications (categories) available for a specific Azure service.<br/><br/> Always use the service and problem classifications obtained programmatically. This practice ensures that you always have the most recent set of service and problem classification Ids.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.problem_classifications_list_result import ProblemClassificationsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProblemClassificationsApi(api_client)
    service_name = 'service_name_example' # str | Name of Azure service for which the problem classifications need to be retrieved.
    api_version = 'api_version_example' # str | Api version

    try:
        api_response = api_instance.problem_classifications_list(service_name, api_version)
        print("The response of ProblemClassificationsApi->problem_classifications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProblemClassificationsApi->problem_classifications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| Name of Azure service for which the problem classifications need to be retrieved. | 
 **api_version** | **str**| Api version | 

### Return type

[**ProblemClassificationsListResult**](ProblemClassificationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved list of problem classifications for the specified Azure service. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

