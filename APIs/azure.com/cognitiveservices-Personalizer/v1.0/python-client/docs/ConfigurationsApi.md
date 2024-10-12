# openapi_client.ConfigurationsApi

All URIs are relative to *https://azure.local/personalizer/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_get**](ConfigurationsApi.md#policy_get) | **GET** /configurations/policy | Get Policy.
[**policy_reset**](ConfigurationsApi.md#policy_reset) | **DELETE** /configurations/policy | Reset Policy.
[**policy_update**](ConfigurationsApi.md#policy_update) | **PUT** /configurations/policy | Update Policy.
[**service_configuration_get**](ConfigurationsApi.md#service_configuration_get) | **GET** /configurations/service | Get Service Configuration.
[**service_configuration_update**](ConfigurationsApi.md#service_configuration_update) | **PUT** /configurations/service | Update Service Configuration.


# **policy_get**
> PolicyContract policy_get()

Get Policy.

Get the Learning settings currently used by the Personalizer service.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.policy_contract import PolicyContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationsApi(api_client)

    try:
        # Get Policy.
        api_response = api_instance.policy_get()
        print("The response of ConfigurationsApi->policy_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->policy_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PolicyContract**](PolicyContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_reset**
> PolicyContract policy_reset()

Reset Policy.

Resets the Learning settings of the Personalizer service to default.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.policy_contract import PolicyContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationsApi(api_client)

    try:
        # Reset Policy.
        api_response = api_instance.policy_reset()
        print("The response of ConfigurationsApi->policy_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->policy_reset: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PolicyContract**](PolicyContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_update**
> PolicyContract policy_update(policy)

Update Policy.

Update the Learning settings that the Personalizer service will use to train models.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.policy_contract import PolicyContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationsApi(api_client)
    policy = openapi_client.PolicyContract() # PolicyContract | The Learning settings.

    try:
        # Update Policy.
        api_response = api_instance.policy_update(policy)
        print("The response of ConfigurationsApi->policy_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->policy_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**PolicyContract**](PolicyContract.md)| The Learning settings. | 

### Return type

[**PolicyContract**](PolicyContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Invalid policy configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_configuration_get**
> ServiceConfiguration service_configuration_get()

Get Service Configuration.

Get the Personalizer service configuration.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.service_configuration import ServiceConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationsApi(api_client)

    try:
        # Get Service Configuration.
        api_response = api_instance.service_configuration_get()
        print("The response of ConfigurationsApi->service_configuration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->service_configuration_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ServiceConfiguration**](ServiceConfiguration.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_configuration_update**
> ServiceConfiguration service_configuration_update(config)

Update Service Configuration.

Update the Personalizer service configuration.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.service_configuration import ServiceConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationsApi(api_client)
    config = openapi_client.ServiceConfiguration() # ServiceConfiguration | The personalizer service configuration.

    try:
        # Update Service Configuration.
        api_response = api_instance.service_configuration_update(config)
        print("The response of ConfigurationsApi->service_configuration_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->service_configuration_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config** | [**ServiceConfiguration**](ServiceConfiguration.md)| The personalizer service configuration. | 

### Return type

[**ServiceConfiguration**](ServiceConfiguration.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Invalid service configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

