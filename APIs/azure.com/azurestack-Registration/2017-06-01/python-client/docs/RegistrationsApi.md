# openapi_client.RegistrationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registrations_create_or_update**](RegistrationsApi.md#registrations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName} | 
[**registrations_delete**](RegistrationsApi.md#registrations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName} | 
[**registrations_get**](RegistrationsApi.md#registrations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName} | 
[**registrations_get_activation_key**](RegistrationsApi.md#registrations_get_activation_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/getactivationkey | 
[**registrations_list**](RegistrationsApi.md#registrations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations | 
[**registrations_update**](RegistrationsApi.md#registrations_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName} | 


# **registrations_create_or_update**
> Registration registrations_create_or_update(subscription_id, resource_group, registration_name, api_version, token)



Create or update an Azure Stack registration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration import Registration
from openapi_client.models.registration_parameter import RegistrationParameter
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
    api_instance = openapi_client.RegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')
    token = openapi_client.RegistrationParameter() # RegistrationParameter | Registration token

    try:
        api_response = api_instance.registrations_create_or_update(subscription_id, resource_group, registration_name, api_version, token)
        print("The response of RegistrationsApi->registrations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationsApi->registrations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]
 **token** | [**RegistrationParameter**](RegistrationParameter.md)| Registration token | 

### Return type

[**Registration**](Registration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | CREATED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registrations_delete**
> registrations_delete(subscription_id, resource_group, registration_name, api_version)



Delete the requested Azure Stack registration.

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
    api_instance = openapi_client.RegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_instance.registrations_delete(subscription_id, resource_group, registration_name, api_version)
    except Exception as e:
        print("Exception when calling RegistrationsApi->registrations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

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
**204** | NO CONTENT |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registrations_get**
> Registration registrations_get(subscription_id, resource_group, registration_name, api_version)



Returns the properties of an Azure Stack registration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration import Registration
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
    api_instance = openapi_client.RegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_response = api_instance.registrations_get(subscription_id, resource_group, registration_name, api_version)
        print("The response of RegistrationsApi->registrations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationsApi->registrations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

### Return type

[**Registration**](Registration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registrations_get_activation_key**
> ActivationKeyResult registrations_get_activation_key(subscription_id, resource_group, registration_name, api_version)



Returns Azure Stack Activation Key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activation_key_result import ActivationKeyResult
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
    api_instance = openapi_client.RegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_response = api_instance.registrations_get_activation_key(subscription_id, resource_group, registration_name, api_version)
        print("The response of RegistrationsApi->registrations_get_activation_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationsApi->registrations_get_activation_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

### Return type

[**ActivationKeyResult**](ActivationKeyResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registrations_list**
> RegistrationList registrations_list(subscription_id, resource_group, api_version)



Returns a list of all registrations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration_list import RegistrationList
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
    api_instance = openapi_client.RegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_response = api_instance.registrations_list(subscription_id, resource_group, api_version)
        print("The response of RegistrationsApi->registrations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationsApi->registrations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

### Return type

[**RegistrationList**](RegistrationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registrations_update**
> Registration registrations_update(subscription_id, resource_group, registration_name, api_version, token)



Patch an Azure Stack registration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration import Registration
from openapi_client.models.registration_parameter import RegistrationParameter
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
    api_instance = openapi_client.RegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')
    token = openapi_client.RegistrationParameter() # RegistrationParameter | Registration token

    try:
        api_response = api_instance.registrations_update(subscription_id, resource_group, registration_name, api_version, token)
        print("The response of RegistrationsApi->registrations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationsApi->registrations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]
 **token** | [**RegistrationParameter**](RegistrationParameter.md)| Registration token | 

### Return type

[**Registration**](Registration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

