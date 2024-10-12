# openapi_client.SubscriptionsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_create_or_update**](SubscriptionsApi.md#subscription_create_or_update) | **PUT** /subscriptions/{sid} | 
[**subscription_delete**](SubscriptionsApi.md#subscription_delete) | **DELETE** /subscriptions/{sid} | 
[**subscription_get**](SubscriptionsApi.md#subscription_get) | **GET** /subscriptions/{sid} | 
[**subscription_list**](SubscriptionsApi.md#subscription_list) | **GET** /subscriptions | 
[**subscription_regenerate_primary_key**](SubscriptionsApi.md#subscription_regenerate_primary_key) | **POST** /subscriptions/{sid}/regeneratePrimaryKey | 
[**subscription_regenerate_secondary_key**](SubscriptionsApi.md#subscription_regenerate_secondary_key) | **POST** /subscriptions/{sid}/regenerateSecondaryKey | 
[**subscription_update**](SubscriptionsApi.md#subscription_update) | **PATCH** /subscriptions/{sid} | 


# **subscription_create_or_update**
> SubscriptionContract subscription_create_or_update(sid, api_version, parameters, notify=notify)



Creates or updates the subscription of specified user to the specified product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.subscription_contract import SubscriptionContract
from openapi_client.models.subscription_create_parameters import SubscriptionCreateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    sid = 'sid_example' # str | Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.SubscriptionCreateParameters() # SubscriptionCreateParameters | Create parameters.
    notify = False # str | Notify the subscriber of the subscription state change to Submitted or Active state. (optional) (default to False)

    try:
        api_response = api_instance.subscription_create_or_update(sid, api_version, parameters, notify=notify)
        print("The response of SubscriptionsApi->subscription_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **str**| Subscription entity Identifier. The entity represents the association between a user and a product in API Management. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**SubscriptionCreateParameters**](SubscriptionCreateParameters.md)| Create parameters. | 
 **notify** | **str**| Notify the subscriber of the subscription state change to Submitted or Active state. | [optional] [default to False]

### Return type

[**SubscriptionContract**](SubscriptionContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user already subscribed to the product. |  -  |
**201** | The user was successfully subscribed to the product. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_delete**
> subscription_delete(sid, if_match, api_version)



Deletes the specified subscription.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    sid = 'sid_example' # str | Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
    if_match = 'if_match_example' # str | ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.subscription_delete(sid, if_match, api_version)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **str**| Subscription entity Identifier. The entity represents the association between a user and a product in API Management. | 
 **if_match** | **str**| ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The subscription details were successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_get**
> SubscriptionContract subscription_get(sid, api_version)



Gets the specified Subscription entity.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.subscription_contract import SubscriptionContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    sid = 'sid_example' # str | Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.subscription_get(sid, api_version)
        print("The response of SubscriptionsApi->subscription_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **str**| Subscription entity Identifier. The entity represents the association between a user and a product in API Management. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**SubscriptionContract**](SubscriptionContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified Subscription entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_list**
> SubscriptionCollection subscription_list(api_version, filter=filter, top=top, skip=skip)



Lists all subscriptions of the API Management service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.subscription_collection import SubscriptionCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field        | Supported operators    | Supported functions                         | |--------------|------------------------|---------------------------------------------| | id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state        | eq                     |                                             | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.subscription_list(api_version, filter=filter, top=top, skip=skip)
        print("The response of SubscriptionsApi->subscription_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field        | Supported operators    | Supported functions                         | |--------------|------------------------|---------------------------------------------| | id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state        | eq                     |                                             | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**SubscriptionCollection**](SubscriptionCollection.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of the Subscription entities for the specified API Management service instance. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_regenerate_primary_key**
> subscription_regenerate_primary_key(sid, api_version)



Regenerates primary key of existing subscription of the API Management service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    sid = 'sid_example' # str | Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.subscription_regenerate_primary_key(sid, api_version)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_regenerate_primary_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **str**| Subscription entity Identifier. The entity represents the association between a user and a product in API Management. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The primary key was successfully regenerated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_regenerate_secondary_key**
> subscription_regenerate_secondary_key(sid, api_version)



Regenerates secondary key of existing subscription of the API Management service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    sid = 'sid_example' # str | Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.subscription_regenerate_secondary_key(sid, api_version)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_regenerate_secondary_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **str**| Subscription entity Identifier. The entity represents the association between a user and a product in API Management. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The secondary key was successfully regenerated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_update**
> subscription_update(sid, if_match, api_version, parameters, notify=notify)



Updates the details of a subscription specified by its identifier.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.subscription_update_parameters import SubscriptionUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    sid = 'sid_example' # str | Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
    if_match = 'if_match_example' # str | ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.SubscriptionUpdateParameters() # SubscriptionUpdateParameters | Update parameters.
    notify = False # str | Notify the subscriber of the subscription state change to Submitted or Active state. (optional) (default to False)

    try:
        api_instance.subscription_update(sid, if_match, api_version, parameters, notify=notify)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscription_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **str**| Subscription entity Identifier. The entity represents the association between a user and a product in API Management. | 
 **if_match** | **str**| ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**SubscriptionUpdateParameters**](SubscriptionUpdateParameters.md)| Update parameters. | 
 **notify** | **str**| Notify the subscriber of the subscription state change to Submitted or Active state. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The subscription details were successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

