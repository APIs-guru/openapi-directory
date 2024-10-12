# openapi_client.TriggersApi

All URIs are relative to *https://api.ritc.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_trigger**](TriggersApi.md#add_trigger) | **POST** /triggers | 
[**get_trigger**](TriggersApi.md#get_trigger) | **GET** /triggers/{trigger_id} | 
[**list_triggers**](TriggersApi.md#list_triggers) | **GET** /triggers | 
[**remove_trigger**](TriggersApi.md#remove_trigger) | **DELETE** /triggers/{trigger_id} | 
[**update_trigger**](TriggersApi.md#update_trigger) | **PATCH** /triggers/{trigger_id} | 


# **add_trigger**
> TriggerShortResponse add_trigger(trigger_object)



Create a new trigger in an app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.trigger54 import Trigger54
from openapi_client.models.trigger_short_response import TriggerShortResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggersApi(api_client)
    trigger_object = openapi_client.Trigger54() # Trigger54 | Trigger parameters and configuration

    try:
        api_response = api_instance.add_trigger(trigger_object)
        print("The response of TriggersApi->add_trigger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->add_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_object** | [**Trigger54**](Trigger54.md)| Trigger parameters and configuration | 

### Return type

[**TriggerShortResponse**](TriggerShortResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A trigger was successfully created |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trigger**
> List[TriggerFullResponse] get_trigger(trigger_id)



Get a trigger

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.trigger_full_response import TriggerFullResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggersApi(api_client)
    trigger_id = 'trigger_id_example' # str | Id of Trigger

    try:
        api_response = api_instance.get_trigger(trigger_id)
        print("The response of TriggersApi->get_trigger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->get_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | **str**| Id of Trigger | 

### Return type

[**List[TriggerFullResponse]**](TriggerFullResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about a trigger |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_triggers**
> List[TriggerShortResponse] list_triggers()



Triggers in an app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.trigger_short_response import TriggerShortResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggersApi(api_client)

    try:
        api_response = api_instance.list_triggers()
        print("The response of TriggersApi->list_triggers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->list_triggers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[TriggerShortResponse]**](TriggerShortResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of triggers in an app |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_trigger**
> remove_trigger(trigger_id)



Delete a trigger

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggersApi(api_client)
    trigger_id = 'trigger_id_example' # str | Id of Trigger

    try:
        api_instance.remove_trigger(trigger_id)
    except Exception as e:
        print("Exception when calling TriggersApi->remove_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | **str**| Id of Trigger | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The trigger was successfully removed |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_trigger**
> TriggerShortResponse update_trigger(trigger_id, trigger_object)



Update a trigger

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.trigger54 import Trigger54
from openapi_client.models.trigger_short_response import TriggerShortResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggersApi(api_client)
    trigger_id = 'trigger_id_example' # str | Id of user
    trigger_object = openapi_client.Trigger54() # Trigger54 | Trigger information

    try:
        api_response = api_instance.update_trigger(trigger_id, trigger_object)
        print("The response of TriggersApi->update_trigger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->update_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | **str**| Id of user | 
 **trigger_object** | [**Trigger54**](Trigger54.md)| Trigger information | 

### Return type

[**TriggerShortResponse**](TriggerShortResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the trigger was updated successfully |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

