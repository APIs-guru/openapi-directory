# openapi_client.NamedValueApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**named_value_create_or_update**](NamedValueApi.md#named_value_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues/{namedValueId} | 
[**named_value_delete**](NamedValueApi.md#named_value_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues/{namedValueId} | 
[**named_value_get**](NamedValueApi.md#named_value_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues/{namedValueId} | 
[**named_value_get_entity_tag**](NamedValueApi.md#named_value_get_entity_tag) | **HEAD** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues/{namedValueId} | 
[**named_value_list_by_service**](NamedValueApi.md#named_value_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues | 
[**named_value_list_value**](NamedValueApi.md#named_value_list_value) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues/{namedValueId}/listValue | 
[**named_value_update**](NamedValueApi.md#named_value_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/namedValues/{namedValueId} | 


# **named_value_create_or_update**
> NamedValueGet200Response named_value_create_or_update(resource_group_name, service_name, named_value_id, api_version, subscription_id, parameters, if_match=if_match)



Creates or updates a NamedValue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.named_value_create_or_update_request import NamedValueCreateOrUpdateRequest
from openapi_client.models.named_value_get200_response import NamedValueGet200Response
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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    named_value_id = 'named_value_id_example' # str | Identifier of the NamedValue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NamedValueCreateOrUpdateRequest() # NamedValueCreateOrUpdateRequest | Create parameters.
    if_match = 'if_match_example' # str | ETag of the Entity. Not required when creating an entity, but required when updating an entity. (optional)

    try:
        api_response = api_instance.named_value_create_or_update(resource_group_name, service_name, named_value_id, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of NamedValueApi->named_value_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **named_value_id** | **str**| Identifier of the NamedValue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NamedValueCreateOrUpdateRequest**](NamedValueCreateOrUpdateRequest.md)| Create parameters. | 
 **if_match** | **str**| ETag of the Entity. Not required when creating an entity, but required when updating an entity. | [optional] 

### Return type

[**NamedValueGet200Response**](NamedValueGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NamedValue was successfully updated. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**201** | NamedValue was successfully created. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**202** | Request to create or update NamedValue was accepted. Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **named_value_delete**
> named_value_delete(resource_group_name, service_name, named_value_id, if_match, api_version, subscription_id)



Deletes specific NamedValue from the API Management service instance.

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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    named_value_id = 'named_value_id_example' # str | Identifier of the NamedValue.
    if_match = 'if_match_example' # str | ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.named_value_delete(resource_group_name, service_name, named_value_id, if_match, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **named_value_id** | **str**| Identifier of the NamedValue. | 
 **if_match** | **str**| ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | NamedValue was successfully deleted. |  -  |
**204** | NamedValue was successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **named_value_get**
> NamedValueGet200Response named_value_get(resource_group_name, service_name, named_value_id, api_version, subscription_id)



Gets the details of the NamedValue specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.named_value_get200_response import NamedValueGet200Response
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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    named_value_id = 'named_value_id_example' # str | Identifier of the NamedValue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.named_value_get(resource_group_name, service_name, named_value_id, api_version, subscription_id)
        print("The response of NamedValueApi->named_value_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **named_value_id** | **str**| Identifier of the NamedValue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamedValueGet200Response**](NamedValueGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified NamedValue entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **named_value_get_entity_tag**
> named_value_get_entity_tag(resource_group_name, service_name, named_value_id, api_version, subscription_id)



Gets the entity state (Etag) version of the NamedValue specified by its identifier.

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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    named_value_id = 'named_value_id_example' # str | Identifier of the NamedValue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.named_value_get_entity_tag(resource_group_name, service_name, named_value_id, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_get_entity_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **named_value_id** | **str**| Identifier of the NamedValue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Specified NamedValue entity exists and current entity state version is present in the ETag header. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **named_value_list_by_service**
> NamedValueListByService200Response named_value_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists a collection of NamedValues defined within a service instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.named_value_list_by_service200_response import NamedValueListByService200Response
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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| tags | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith, any, all | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br> (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.named_value_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of NamedValueApi->named_value_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| |   Field     |     Usage     |     Supported operators     |     Supported functions     |&lt;/br&gt;|-------------|-------------|-------------|-------------|&lt;/br&gt;| tags | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith, any, all | &lt;/br&gt;| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt; | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**NamedValueListByService200Response**](NamedValueListByService200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Collection of the NamedValue entities for the specified API Management service instance. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **named_value_list_value**
> NamedValueListValue200Response named_value_list_value(resource_group_name, service_name, named_value_id, api_version, subscription_id)



Gets the secret value of the NamedValue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.named_value_list_value200_response import NamedValueListValue200Response
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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    named_value_id = 'named_value_id_example' # str | Identifier of the NamedValue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.named_value_list_value(resource_group_name, service_name, named_value_id, api_version, subscription_id)
        print("The response of NamedValueApi->named_value_list_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_list_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **named_value_id** | **str**| Identifier of the NamedValue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamedValueListValue200Response**](NamedValueListValue200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains secret value. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **named_value_update**
> NamedValueGet200Response named_value_update(resource_group_name, service_name, named_value_id, if_match, api_version, subscription_id, parameters)



Updates the specific NamedValue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.named_value_get200_response import NamedValueGet200Response
from openapi_client.models.named_value_update_request import NamedValueUpdateRequest
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
    api_instance = openapi_client.NamedValueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    named_value_id = 'named_value_id_example' # str | Identifier of the NamedValue.
    if_match = 'if_match_example' # str | ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NamedValueUpdateRequest() # NamedValueUpdateRequest | Update parameters.

    try:
        api_response = api_instance.named_value_update(resource_group_name, service_name, named_value_id, if_match, api_version, subscription_id, parameters)
        print("The response of NamedValueApi->named_value_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamedValueApi->named_value_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **named_value_id** | **str**| Identifier of the NamedValue. | 
 **if_match** | **str**| ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NamedValueUpdateRequest**](NamedValueUpdateRequest.md)| Update parameters. | 

### Return type

[**NamedValueGet200Response**](NamedValueGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NamedValue was successfully updated. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**202** | Request to update NamedValue was accepted. Location header contains the URL where the status of the long running operation can be checked. |  -  |
**204** | NamedValue was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

