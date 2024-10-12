# openapi_client.OperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_check_name_availability**](OperationsApi.md#operations_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/checkNameAvailability | 
[**operations_list**](OperationsApi.md#operations_list) | **GET** /providers/Microsoft.AppConfiguration/operations | 


# **operations_check_name_availability**
> NameAvailabilityStatus operations_check_name_availability(subscription_id, api_version, check_name_availability_parameters)



Checks whether the configuration store name is available for use.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameters import CheckNameAvailabilityParameters
from openapi_client.models.name_availability_status import NameAvailabilityStatus
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
    api_instance = openapi_client.OperationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    check_name_availability_parameters = openapi_client.CheckNameAvailabilityParameters() # CheckNameAvailabilityParameters | The object containing information for the availability request.

    try:
        api_response = api_instance.operations_check_name_availability(subscription_id, api_version, check_name_availability_parameters)
        print("The response of OperationsApi->operations_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **check_name_availability_parameters** | [**CheckNameAvailabilityParameters**](CheckNameAvailabilityParameters.md)| The object containing information for the availability request. | 

### Return type

[**NameAvailabilityStatus**](NameAvailabilityStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationDefinitionListResult operations_list(api_version, skip_token=skip_token)



Lists the operations available from this provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_definition_list_result import OperationDefinitionListResult
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
    api_instance = openapi_client.OperationsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    skip_token = 'skip_token_example' # str | A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.operations_list(api_version, skip_token=skip_token)
        print("The response of OperationsApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **skip_token** | **str**| A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**OperationDefinitionListResult**](OperationDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

