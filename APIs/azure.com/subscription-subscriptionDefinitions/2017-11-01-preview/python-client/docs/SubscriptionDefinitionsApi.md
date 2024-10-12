# openapi_client.SubscriptionDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_definitions_create**](SubscriptionDefinitionsApi.md#subscription_definitions_create) | **PUT** /providers/Microsoft.Subscription/subscriptionDefinitions/{subscriptionDefinitionName} | 
[**subscription_definitions_get**](SubscriptionDefinitionsApi.md#subscription_definitions_get) | **GET** /providers/Microsoft.Subscription/subscriptionDefinitions/{subscriptionDefinitionName} | 
[**subscription_definitions_get_operation_status**](SubscriptionDefinitionsApi.md#subscription_definitions_get_operation_status) | **GET** /providers/Microsoft.Subscription/subscriptionOperations/{operationId} | 
[**subscription_definitions_list**](SubscriptionDefinitionsApi.md#subscription_definitions_list) | **GET** /providers/Microsoft.Subscription/subscriptionDefinitions | 
[**subscription_definitions_operation_metadata_list**](SubscriptionDefinitionsApi.md#subscription_definitions_operation_metadata_list) | **GET** /providers/Microsoft.Subscription/operations | 


# **subscription_definitions_create**
> SubscriptionDefinition subscription_definitions_create(subscription_definition_name, api_version, body)



Create an Azure subscription definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_definition import SubscriptionDefinition
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
    api_instance = openapi_client.SubscriptionDefinitionsApi(api_client)
    subscription_definition_name = 'subscription_definition_name_example' # str | The name of the Azure subscription definition.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    body = openapi_client.SubscriptionDefinition() # SubscriptionDefinition | The subscription definition creation.

    try:
        api_response = api_instance.subscription_definitions_create(subscription_definition_name, api_version, body)
        print("The response of SubscriptionDefinitionsApi->subscription_definitions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDefinitionsApi->subscription_definitions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_definition_name** | **str**| The name of the Azure subscription definition. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **body** | [**SubscriptionDefinition**](SubscriptionDefinition.md)| The subscription definition creation. | 

### Return type

[**SubscriptionDefinition**](SubscriptionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters. |  -  |
**202** | Accepted. Subscription creation is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_definitions_get**
> SubscriptionDefinition subscription_definitions_get(subscription_definition_name, api_version)



Get an Azure subscription definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_definition import SubscriptionDefinition
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
    api_instance = openapi_client.SubscriptionDefinitionsApi(api_client)
    subscription_definition_name = 'subscription_definition_name_example' # str | The name of the Azure subscription definition.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        api_response = api_instance.subscription_definitions_get(subscription_definition_name, api_version)
        print("The response of SubscriptionDefinitionsApi->subscription_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDefinitionsApi->subscription_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_definition_name** | **str**| The name of the Azure subscription definition. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**SubscriptionDefinition**](SubscriptionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_definitions_get_operation_status**
> SubscriptionDefinition subscription_definitions_get_operation_status(api_version, operation_id)



Retrieves the status of the subscription definition PUT operation. The URI of this API is returned in the Location field of the response header.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_definition import SubscriptionDefinition
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
    api_instance = openapi_client.SubscriptionDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    operation_id = 'operation_id_example' # str | The operation ID, which can be found from the Location field in the generate recommendation response header.

    try:
        api_response = api_instance.subscription_definitions_get_operation_status(api_version, operation_id)
        print("The response of SubscriptionDefinitionsApi->subscription_definitions_get_operation_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDefinitionsApi->subscription_definitions_get_operation_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **operation_id** | **str**| The operation ID, which can be found from the Location field in the generate recommendation response header. | 

### Return type

[**SubscriptionDefinition**](SubscriptionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful completion of the asynchronous operation |  -  |
**202** | Accepted. Subscription update is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_definitions_list**
> SubscriptionDefinitionList subscription_definitions_list(api_version)



List an Azure subscription definition by subscriptionId.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_definition_list import SubscriptionDefinitionList
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
    api_instance = openapi_client.SubscriptionDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        api_response = api_instance.subscription_definitions_list(api_version)
        print("The response of SubscriptionDefinitionsApi->subscription_definitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDefinitionsApi->subscription_definitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**SubscriptionDefinitionList**](SubscriptionDefinitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_definitions_operation_metadata_list**
> OperationListResult subscription_definitions_operation_metadata_list(api_version)



Lists all of the available Microsoft.Subscription API operations.

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
    api_instance = openapi_client.SubscriptionDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        api_response = api_instance.subscription_definitions_operation_metadata_list(api_version)
        print("The response of SubscriptionDefinitionsApi->subscription_definitions_operation_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDefinitionsApi->subscription_definitions_operation_metadata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

