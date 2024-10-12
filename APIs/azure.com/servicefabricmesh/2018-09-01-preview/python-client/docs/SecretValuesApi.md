# openapi_client.SecretValuesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secret_value_create**](SecretValuesApi.md#secret_value_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName} | Adds the specified value as a new version of the specified secret resource.
[**secret_value_delete**](SecretValuesApi.md#secret_value_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName} | Deletes the specified  value of the named secret resource.
[**secret_value_get**](SecretValuesApi.md#secret_value_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName} | Gets the specified secret value resource.
[**secret_value_list**](SecretValuesApi.md#secret_value_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values | List names of all values of the specified secret resource.
[**secret_value_list_value**](SecretValuesApi.md#secret_value_list_value) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName}/list_value | Lists the specified value of the secret resource.


# **secret_value_create**
> SecretValueResourceDescription secret_value_create(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name, secret_value_resource_description)

Adds the specified value as a new version of the specified secret resource.

Creates a new value of the specified secret resource. The name of the value is typically the version identifier. Once created the value cannot be changed.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_value_resource_description import SecretValueResourceDescription
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
    api_instance = openapi_client.SecretValuesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.
    secret_value_resource_description = openapi_client.SecretValueResourceDescription() # SecretValueResourceDescription | Description for creating a value of a secret resource.

    try:
        # Adds the specified value as a new version of the specified secret resource.
        api_response = api_instance.secret_value_create(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name, secret_value_resource_description)
        print("The response of SecretValuesApi->secret_value_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretValuesApi->secret_value_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 
 **secret_value_resource_description** | [**SecretValueResourceDescription**](SecretValueResourceDescription.md)| Description for creating a value of a secret resource. | 

### Return type

[**SecretValueResourceDescription**](SecretValueResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_value_delete**
> secret_value_delete(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name)

Deletes the specified  value of the named secret resource.

Deletes the secret value resource identified by the name. The name of the resource is typically the version associated with that value. Deletion will fail if the specified value is in use.

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
    api_instance = openapi_client.SecretValuesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.

    try:
        # Deletes the specified  value of the named secret resource.
        api_instance.secret_value_delete(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name)
    except Exception as e:
        print("Exception when calling SecretValuesApi->secret_value_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content - the specified named secret value was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_value_get**
> SecretValueResourceDescription secret_value_get(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name)

Gets the specified secret value resource.

Get the information about the specified named secret value resources. The information does not include the actual value of the secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_value_resource_description import SecretValueResourceDescription
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
    api_instance = openapi_client.SecretValuesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.

    try:
        # Gets the specified secret value resource.
        api_response = api_instance.secret_value_get(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name)
        print("The response of SecretValuesApi->secret_value_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretValuesApi->secret_value_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 

### Return type

[**SecretValueResourceDescription**](SecretValueResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_value_list**
> SecretValueResourceDescriptionList secret_value_list(subscription_id, api_version, resource_group_name, secret_resource_name)

List names of all values of the specified secret resource.

Gets information about all secret value resources of the specified secret resource. The information includes the names of the secret value resources, but not the actual values.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_value_resource_description_list import SecretValueResourceDescriptionList
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
    api_instance = openapi_client.SecretValuesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.

    try:
        # List names of all values of the specified secret resource.
        api_response = api_instance.secret_value_list(subscription_id, api_version, resource_group_name, secret_resource_name)
        print("The response of SecretValuesApi->secret_value_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretValuesApi->secret_value_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 

### Return type

[**SecretValueResourceDescriptionList**](SecretValueResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_value_list_value**
> SecretValue secret_value_list_value(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name)

Lists the specified value of the secret resource.

Lists the decrypted value of the specified named value of the secret resource. This is a privileged operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_value import SecretValue
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
    api_instance = openapi_client.SecretValuesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.

    try:
        # Lists the specified value of the secret resource.
        api_response = api_instance.secret_value_list_value(subscription_id, api_version, resource_group_name, secret_resource_name, secret_value_resource_name)
        print("The response of SecretValuesApi->secret_value_list_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretValuesApi->secret_value_list_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 

### Return type

[**SecretValue**](SecretValue.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

