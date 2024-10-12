# openapi_client.CloudConnectorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloud_connector_create_or_update**](CloudConnectorsApi.md#cloud_connector_create_or_update) | **PUT** /providers/Microsoft.CostManagement/cloudConnectors/{connectorName} | 
[**cloud_connector_delete**](CloudConnectorsApi.md#cloud_connector_delete) | **DELETE** /providers/Microsoft.CostManagement/cloudConnectors/{connectorName} | 
[**cloud_connector_get**](CloudConnectorsApi.md#cloud_connector_get) | **GET** /providers/Microsoft.CostManagement/cloudConnectors/{connectorName} | 
[**cloud_connector_list**](CloudConnectorsApi.md#cloud_connector_list) | **GET** /providers/Microsoft.CostManagement/cloudConnectors | 
[**cloud_connector_update**](CloudConnectorsApi.md#cloud_connector_update) | **PATCH** /providers/Microsoft.CostManagement/cloudConnectors/{connectorName} | 


# **cloud_connector_create_or_update**
> ConnectorDefinition cloud_connector_create_or_update(api_version, connector_name, connector)



Create or update a cloud connector definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connector_definition import ConnectorDefinition
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
    api_instance = openapi_client.CloudConnectorsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    connector_name = 'connector_name_example' # str | Connector Name.
    connector = openapi_client.ConnectorDefinition() # ConnectorDefinition | Connector details

    try:
        api_response = api_instance.cloud_connector_create_or_update(api_version, connector_name, connector)
        print("The response of CloudConnectorsApi->cloud_connector_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudConnectorsApi->cloud_connector_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **connector_name** | **str**| Connector Name. | 
 **connector** | [**ConnectorDefinition**](ConnectorDefinition.md)| Connector details | 

### Return type

[**ConnectorDefinition**](ConnectorDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_connector_delete**
> cloud_connector_delete(api_version, connector_name)



Delete a cloud connector definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.CloudConnectorsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    connector_name = 'connector_name_example' # str | Connector Name.

    try:
        api_instance.cloud_connector_delete(api_version, connector_name)
    except Exception as e:
        print("Exception when calling CloudConnectorsApi->cloud_connector_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **connector_name** | **str**| Connector Name. | 

### Return type

void (empty response body)

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

# **cloud_connector_get**
> ConnectorDefinition cloud_connector_get(api_version, connector_name, expand=expand)



Get a cloud connector definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connector_definition import ConnectorDefinition
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
    api_instance = openapi_client.CloudConnectorsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    connector_name = 'connector_name_example' # str | Connector Name.
    expand = 'expand_example' # str | May be used to expand the collectionInfo property. By default, collectionInfo is not included. (optional)

    try:
        api_response = api_instance.cloud_connector_get(api_version, connector_name, expand=expand)
        print("The response of CloudConnectorsApi->cloud_connector_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudConnectorsApi->cloud_connector_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **connector_name** | **str**| Connector Name. | 
 **expand** | **str**| May be used to expand the collectionInfo property. By default, collectionInfo is not included. | [optional] 

### Return type

[**ConnectorDefinition**](ConnectorDefinition.md)

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

# **cloud_connector_list**
> ConnectorDefinitionListResult cloud_connector_list(api_version)



List all cloud connector definitions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connector_definition_list_result import ConnectorDefinitionListResult
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
    api_instance = openapi_client.CloudConnectorsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview

    try:
        api_response = api_instance.cloud_connector_list(api_version)
        print("The response of CloudConnectorsApi->cloud_connector_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudConnectorsApi->cloud_connector_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 

### Return type

[**ConnectorDefinitionListResult**](ConnectorDefinitionListResult.md)

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

# **cloud_connector_update**
> ConnectorDefinition cloud_connector_update(api_version, connector_name, connector)



Update a cloud connector definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connector_definition import ConnectorDefinition
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
    api_instance = openapi_client.CloudConnectorsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    connector_name = 'connector_name_example' # str | Connector Name.
    connector = openapi_client.ConnectorDefinition() # ConnectorDefinition | Connector details

    try:
        api_response = api_instance.cloud_connector_update(api_version, connector_name, connector)
        print("The response of CloudConnectorsApi->cloud_connector_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudConnectorsApi->cloud_connector_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **connector_name** | **str**| Connector Name. | 
 **connector** | [**ConnectorDefinition**](ConnectorDefinition.md)| Connector details | 

### Return type

[**ConnectorDefinition**](ConnectorDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

