# openapi_client.SecretsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secrets_create_or_update**](SecretsApi.md#secrets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name} | 
[**secrets_delete**](SecretsApi.md#secrets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name} | 
[**secrets_get**](SecretsApi.md#secrets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name} | 
[**secrets_list**](SecretsApi.md#secrets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets | 


# **secrets_create_or_update**
> Secret secrets_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, secret)



Create or replace an existing secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret import Secret
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the secret.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    secret = openapi_client.Secret() # Secret | A secret.

    try:
        api_response = api_instance.secrets_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, secret)
        print("The response of SecretsApi->secrets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **secret** | [**Secret**](Secret.md)| A secret. | 

### Return type

[**Secret**](Secret.md)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secrets_delete**
> secrets_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Delete secret.

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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the secret.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')

    try:
        api_instance.secrets_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]

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
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secrets_get**
> Secret secrets_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)



Get secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret import Secret
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the secret.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=value)' (optional)

    try:
        api_response = api_instance.secrets_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)
        print("The response of SecretsApi->secrets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;value)&#39; | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secrets_list**
> ResponseWithContinuationSecret secrets_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List secrets in a given user profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_secret import ResponseWithContinuationSecret
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=value)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.secrets_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of SecretsApi->secrets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;value)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationSecret**](ResponseWithContinuationSecret.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

