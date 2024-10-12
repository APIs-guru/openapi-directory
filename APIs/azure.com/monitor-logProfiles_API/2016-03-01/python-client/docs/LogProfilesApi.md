# openapi_client.LogProfilesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**log_profiles_create_or_update**](LogProfilesApi.md#log_profiles_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName} | 
[**log_profiles_delete**](LogProfilesApi.md#log_profiles_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName} | 
[**log_profiles_get**](LogProfilesApi.md#log_profiles_get) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName} | 
[**log_profiles_list**](LogProfilesApi.md#log_profiles_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles | 


# **log_profiles_create_or_update**
> LogProfileResource log_profiles_create_or_update(log_profile_name, api_version, subscription_id, parameters)



Create or update a log profile in Azure Monitoring REST API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_profile_resource import LogProfileResource
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
    api_instance = openapi_client.LogProfilesApi(api_client)
    log_profile_name = 'log_profile_name_example' # str | The name of the log profile.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    parameters = openapi_client.LogProfileResource() # LogProfileResource | Parameters supplied to the operation.

    try:
        api_response = api_instance.log_profiles_create_or_update(log_profile_name, api_version, subscription_id, parameters)
        print("The response of LogProfilesApi->log_profiles_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogProfilesApi->log_profiles_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log_profile_name** | **str**| The name of the log profile. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **parameters** | [**LogProfileResource**](LogProfileResource.md)| Parameters supplied to the operation. | 

### Return type

[**LogProfileResource**](LogProfileResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to create or update a log profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **log_profiles_delete**
> log_profiles_delete(log_profile_name, api_version, subscription_id)



Deletes the log profile.

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
    api_instance = openapi_client.LogProfilesApi(api_client)
    log_profile_name = 'log_profile_name_example' # str | The name of the log profile.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_instance.log_profiles_delete(log_profile_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling LogProfilesApi->log_profiles_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log_profile_name** | **str**| The name of the log profile. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to delete a log profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **log_profiles_get**
> LogProfileResource log_profiles_get(log_profile_name, api_version, subscription_id)



Gets the log profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_profile_resource import LogProfileResource
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
    api_instance = openapi_client.LogProfilesApi(api_client)
    log_profile_name = 'log_profile_name_example' # str | The name of the log profile.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.log_profiles_get(log_profile_name, api_version, subscription_id)
        print("The response of LogProfilesApi->log_profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogProfilesApi->log_profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log_profile_name** | **str**| The name of the log profile. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**LogProfileResource**](LogProfileResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about a log profile. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **log_profiles_list**
> LogProfileCollection log_profiles_list(api_version, subscription_id)



List the log profiles.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_profile_collection import LogProfileCollection
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
    api_instance = openapi_client.LogProfilesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.log_profiles_list(api_version, subscription_id)
        print("The response of LogProfilesApi->log_profiles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogProfilesApi->log_profiles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**LogProfileCollection**](LogProfileCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to list log profiles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

