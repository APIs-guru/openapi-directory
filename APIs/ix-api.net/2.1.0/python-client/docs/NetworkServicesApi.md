# openapi_client.NetworkServicesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_service_cancellation_policy_read**](NetworkServicesApi.md#network_service_cancellation_policy_read) | **GET** /network-services/{id}/cancellation-policy | 
[**network_service_change_request_create**](NetworkServicesApi.md#network_service_change_request_create) | **POST** /network-services/{id}/change-request | 
[**network_service_change_request_destroy**](NetworkServicesApi.md#network_service_change_request_destroy) | **DELETE** /network-services/{id}/change-request | 
[**network_service_change_request_read**](NetworkServicesApi.md#network_service_change_request_read) | **GET** /network-services/{id}/change-request | 
[**network_services_create**](NetworkServicesApi.md#network_services_create) | **POST** /network-services | 
[**network_services_destroy**](NetworkServicesApi.md#network_services_destroy) | **DELETE** /network-services/{id} | 
[**network_services_list**](NetworkServicesApi.md#network_services_list) | **GET** /network-services | 
[**network_services_partial_update**](NetworkServicesApi.md#network_services_partial_update) | **PATCH** /network-services/{id} | 
[**network_services_read**](NetworkServicesApi.md#network_services_read) | **GET** /network-services/{id} | 
[**network_services_update**](NetworkServicesApi.md#network_services_update) | **PUT** /network-services/{id} | 


# **network_service_cancellation_policy_read**
> CancellationPolicy network_service_cancellation_policy_read(id, decommission_at=decommission_at)



The cancellation-policy can be queried to answer the questions:  If I cancel my service, *when will it be technically decommissioned*? If I cancel my service, *until what date will I be charged*?  When the query parameter `decommision_at` is not provided it will provide the first possible cancellation date and charge period if cancelled at above date.  The granularity of the date field is a day, the start and end of which are to be interpreted by the IXP (some may use UTC, some may use their local time zone).

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.cancellation_policy import CancellationPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id
    decommission_at = 'decommission_at_example' # str | By providing a date in the format `YYYY-MM-DD` you can query the policy what would happen if you request a decommissioning on this date. (optional)

    try:
        api_response = api_instance.network_service_cancellation_policy_read(id, decommission_at=decommission_at)
        print("The response of NetworkServicesApi->network_service_cancellation_policy_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_service_cancellation_policy_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **decommission_at** | **str**| By providing a date in the format &#x60;YYYY-MM-DD&#x60; you can query the policy what would happen if you request a decommissioning on this date. | [optional] 

### Return type

[**CancellationPolicy**](CancellationPolicy.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cancellation Policy |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_change_request_create**
> NetworkServiceChangeRequest network_service_change_request_create(id, network_service_change_request=network_service_change_request)



Request a change to the network service.  A participant in a network service of type `p2p_vc` can issue a change request, expressing a desired change in the capacity. The change is accepted when all sides have configured the network service configs with the new bandwidth. These changes can sometimes require a change of the product offering. The product offering may only differ in regards to bandwidth.  The network service will change it's state from `production` into `production_change_pending`.  Only one change request may be issued at a time.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_change_request import NetworkServiceChangeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id
    network_service_change_request = openapi_client.NetworkServiceChangeRequest() # NetworkServiceChangeRequest | NetworkServiceChangeRequest (optional)

    try:
        api_response = api_instance.network_service_change_request_create(id, network_service_change_request=network_service_change_request)
        print("The response of NetworkServicesApi->network_service_change_request_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_service_change_request_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_service_change_request** | [**NetworkServiceChangeRequest**](NetworkServiceChangeRequest.md)| NetworkServiceChangeRequest | [optional] 

### Return type

[**NetworkServiceChangeRequest**](NetworkServiceChangeRequest.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | NetworkServiceChangeRequest |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_change_request_destroy**
> NetworkServiceChangeRequest network_service_change_request_destroy(id)



Retract or reject a change to the network service.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_change_request import NetworkServiceChangeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_service_change_request_destroy(id)
        print("The response of NetworkServicesApi->network_service_change_request_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_service_change_request_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkServiceChangeRequest**](NetworkServiceChangeRequest.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | NetworkServiceChangeRequest |  -  |
**400** | UnableToFulfill |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_change_request_read**
> NetworkServiceChangeRequest network_service_change_request_read(id)



Get the change request.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_change_request import NetworkServiceChangeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_service_change_request_read(id)
        print("The response of NetworkServicesApi->network_service_change_request_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_service_change_request_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkServiceChangeRequest**](NetworkServiceChangeRequest.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | NetworkServiceChangeRequest |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_services_create**
> NetworkService network_services_create(network_service_request=network_service_request)



Create a new network service

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service import NetworkService
from openapi_client.models.network_service_request import NetworkServiceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    network_service_request = openapi_client.NetworkServiceRequest() # NetworkServiceRequest | Polymorphic Network Service Request (optional)

    try:
        api_response = api_instance.network_services_create(network_service_request=network_service_request)
        print("The response of NetworkServicesApi->network_services_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_services_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_service_request** | [**NetworkServiceRequest**](NetworkServiceRequest.md)| Polymorphic Network Service Request | [optional] 

### Return type

[**NetworkService**](NetworkService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Polymorphic Network Services |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_services_destroy**
> NetworkService network_services_destroy(id, cancellation_request=cancellation_request)



Request decomissioning of the network service.  The network service will enter the state of `decommission_requested`. The request will cascade to related network service and feature configs.  An *optional request body* can be provided to request a specific service termination date.  If no date is given in the request body, it is assumed to be the earliest possible date.  Possible values for `decommission_at` can be queried through the `network_service_cancellation_policy_read` operation.  The response will contain the dates on which the changes will be effected.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.cancellation_request import CancellationRequest
from openapi_client.models.network_service import NetworkService
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id
    cancellation_request = openapi_client.CancellationRequest() # CancellationRequest | Service Cancellation Request (optional)

    try:
        api_response = api_instance.network_services_destroy(id, cancellation_request=cancellation_request)
        print("The response of NetworkServicesApi->network_services_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_services_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **cancellation_request** | [**CancellationRequest**](CancellationRequest.md)| Service Cancellation Request | [optional] 

### Return type

[**NetworkService**](NetworkService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Services |  -  |
**400** | CancellationPolicyError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_services_list**
> List[NetworkService] network_services_list(id=id, state=state, state__is_not=state__is_not, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, type=type, pop=pop, product_offering=product_offering)



List available `NetworkService`s.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service import NetworkService
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    state = 'state_example' # str | Filter by state (optional)
    state__is_not = 'state__is_not_example' # str | Filter by state__is_not (optional)
    managing_account = 'managing_account_example' # str | Filter by managing_account (optional)
    consuming_account = 'consuming_account_example' # str | Filter by consuming_account (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)
    type = 'type_example' # str | Filter by type (optional)
    pop = 'pop_example' # str | Filter by pop (optional)
    product_offering = 'product_offering_example' # str | Filter by product_offering (optional)

    try:
        api_response = api_instance.network_services_list(id=id, state=state, state__is_not=state__is_not, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, type=type, pop=pop, product_offering=product_offering)
        print("The response of NetworkServicesApi->network_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **state** | **str**| Filter by state | [optional] 
 **state__is_not** | **str**| Filter by state__is_not | [optional] 
 **managing_account** | **str**| Filter by managing_account | [optional] 
 **consuming_account** | **str**| Filter by consuming_account | [optional] 
 **external_ref** | **str**| Filter by external_ref | [optional] 
 **type** | **str**| Filter by type | [optional] 
 **pop** | **str**| Filter by pop | [optional] 
 **product_offering** | **str**| Filter by product_offering | [optional] 

### Return type

[**List[NetworkService]**](NetworkService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Polymorphic Network Services |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_services_partial_update**
> NetworkService network_services_partial_update(id, network_service_request_partial=network_service_request_partial)



Partially update a network service

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service import NetworkService
from openapi_client.models.network_service_request_partial import NetworkServiceRequestPartial
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id
    network_service_request_partial = openapi_client.NetworkServiceRequestPartial() # NetworkServiceRequestPartial | Polymorphic Network Service Request (optional)

    try:
        api_response = api_instance.network_services_partial_update(id, network_service_request_partial=network_service_request_partial)
        print("The response of NetworkServicesApi->network_services_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_services_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_service_request_partial** | [**NetworkServiceRequestPartial**](NetworkServiceRequestPartial.md)| Polymorphic Network Service Request | [optional] 

### Return type

[**NetworkService**](NetworkService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Services |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_services_read**
> NetworkService network_services_read(id)



Get a specific `network-service` by id.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service import NetworkService
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_services_read(id)
        print("The response of NetworkServicesApi->network_services_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_services_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkService**](NetworkService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Network Services |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_services_update**
> NetworkService network_services_update(id, network_service_request=network_service_request)



Update a network service

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service import NetworkService
from openapi_client.models.network_service_request import NetworkServiceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkServicesApi(api_client)
    id = 'id_example' # str | Get by id
    network_service_request = openapi_client.NetworkServiceRequest() # NetworkServiceRequest | Polymorphic Network Service Request (optional)

    try:
        api_response = api_instance.network_services_update(id, network_service_request=network_service_request)
        print("The response of NetworkServicesApi->network_services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServicesApi->network_services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_service_request** | [**NetworkServiceRequest**](NetworkServiceRequest.md)| Polymorphic Network Service Request | [optional] 

### Return type

[**NetworkService**](NetworkService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Services |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

