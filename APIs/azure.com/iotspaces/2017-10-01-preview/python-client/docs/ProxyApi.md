# openapi_client.ProxyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**io_t_spaces_check_name_availability**](ProxyApi.md#io_t_spaces_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.IoTSpaces/checkNameAvailability | 
[**operations_list**](ProxyApi.md#operations_list) | **GET** /providers/Microsoft.IoTSpaces/operations | 


# **io_t_spaces_check_name_availability**
> IoTSpacesNameAvailabilityInfo io_t_spaces_check_name_availability(api_version, subscription_id, operation_inputs)



Check if an IoTSpaces instance name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_name_availability_info import IoTSpacesNameAvailabilityInfo
from openapi_client.models.operation_inputs import OperationInputs
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
    api_instance = openapi_client.ProxyApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    operation_inputs = openapi_client.OperationInputs() # OperationInputs | Set the name parameter in the OperationInputs structure to the name of the IoTSpaces instance to check.

    try:
        api_response = api_instance.io_t_spaces_check_name_availability(api_version, subscription_id, operation_inputs)
        print("The response of ProxyApi->io_t_spaces_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProxyApi->io_t_spaces_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **operation_inputs** | [**OperationInputs**](OperationInputs.md)| Set the name parameter in the OperationInputs structure to the name of the IoTSpaces instance to check. | 

### Return type

[**IoTSpacesNameAvailabilityInfo**](IoTSpacesNameAvailabilityInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoTSpaces service name is available. If the name is not available, the body contains the reason. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationListResult operations_list(api_version)



Lists all of the available IoTSpaces service REST API operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list_result import OperationListResult
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
    api_instance = openapi_client.ProxyApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of ProxyApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProxyApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 

### Return type

[**OperationListResult**](OperationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

