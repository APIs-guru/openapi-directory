# openapi_client.NetworkServiceConfigsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_service_config_cancellation_policy_read**](NetworkServiceConfigsApi.md#network_service_config_cancellation_policy_read) | **GET** /network-service-configs/{id}/cancellation-policy | 
[**network_service_configs_create**](NetworkServiceConfigsApi.md#network_service_configs_create) | **POST** /network-service-configs | 
[**network_service_configs_destroy**](NetworkServiceConfigsApi.md#network_service_configs_destroy) | **DELETE** /network-service-configs/{id} | 
[**network_service_configs_list**](NetworkServiceConfigsApi.md#network_service_configs_list) | **GET** /network-service-configs | 
[**network_service_configs_partial_update**](NetworkServiceConfigsApi.md#network_service_configs_partial_update) | **PATCH** /network-service-configs/{id} | 
[**network_service_configs_read**](NetworkServiceConfigsApi.md#network_service_configs_read) | **GET** /network-service-configs/{id} | 
[**network_service_configs_update**](NetworkServiceConfigsApi.md#network_service_configs_update) | **PUT** /network-service-configs/{id} | 


# **network_service_config_cancellation_policy_read**
> CancellationPolicy network_service_config_cancellation_policy_read(id, decommission_at=decommission_at)



The cancellation-policy can be queried to answer the questions:  If I cancel my subscription, *when will it be technically decommissioned*? If I cancel my subscription, *until what date will I be charged*?  When the query parameter `decommision_at` is not provided it will provide the first possible cancellation date and charge period if cancelled at above date.  The granularity of the date field is a day, the start and end of which are to be interpreted by the IXP (some may use UTC, some may use their local time zone).

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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    id = 'id_example' # str | Get by id
    decommission_at = 'decommission_at_example' # str | By providing a date in the format `YYYY-MM-DD` you can query the policy what would happen if you request a decommissioning on this date. (optional)

    try:
        api_response = api_instance.network_service_config_cancellation_policy_read(id, decommission_at=decommission_at)
        print("The response of NetworkServiceConfigsApi->network_service_config_cancellation_policy_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_config_cancellation_policy_read: %s\n" % e)
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

# **network_service_configs_create**
> NetworkServiceConfig network_service_configs_create(network_service_config_request=network_service_config_request)



Create a `network-service-config`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_config import NetworkServiceConfig
from openapi_client.models.network_service_config_request import NetworkServiceConfigRequest
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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    network_service_config_request = openapi_client.NetworkServiceConfigRequest() # NetworkServiceConfigRequest | Polymorhic Network Service Config Request (optional)

    try:
        api_response = api_instance.network_service_configs_create(network_service_config_request=network_service_config_request)
        print("The response of NetworkServiceConfigsApi->network_service_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_service_config_request** | [**NetworkServiceConfigRequest**](NetworkServiceConfigRequest.md)| Polymorhic Network Service Config Request | [optional] 

### Return type

[**NetworkServiceConfig**](NetworkServiceConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Polymorphic Network Service Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_configs_destroy**
> NetworkServiceConfig network_service_configs_destroy(id, cancellation_request=cancellation_request)



Request decommissioning the network service configuration.  The network service config will assume the state `decommission_requested`. This will cascade to related resources like `network-feature-configs`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.cancellation_request import CancellationRequest
from openapi_client.models.network_service_config import NetworkServiceConfig
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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    id = 'id_example' # str | Get by id
    cancellation_request = openapi_client.CancellationRequest() # CancellationRequest | Service Cancellation Request (optional)

    try:
        api_response = api_instance.network_service_configs_destroy(id, cancellation_request=cancellation_request)
        print("The response of NetworkServiceConfigsApi->network_service_configs_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_configs_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **cancellation_request** | [**CancellationRequest**](CancellationRequest.md)| Service Cancellation Request | [optional] 

### Return type

[**NetworkServiceConfig**](NetworkServiceConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Service Config |  -  |
**400** | CancellationPolicyError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_configs_list**
> List[NetworkServiceConfig] network_service_configs_list(id=id, state=state, state__is_not=state__is_not, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, type=type, inner_vlan=inner_vlan, outer_vlan=outer_vlan, capacity=capacity, network_service=network_service, connection=connection, product_offering=product_offering)



Get all `network-service-config`s.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_config import NetworkServiceConfig
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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    state = 'state_example' # str | Filter by state (optional)
    state__is_not = 'state__is_not_example' # str | Filter by state__is_not (optional)
    managing_account = 'managing_account_example' # str | Filter by managing_account (optional)
    consuming_account = 'consuming_account_example' # str | Filter by consuming_account (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)
    type = 'type_example' # str | Filter by type (optional)
    inner_vlan = 56 # int | Filter by inner_vlan (optional)
    outer_vlan = 56 # int | Filter by outer_vlan (optional)
    capacity = 56 # int | Filter by capacity (optional)
    network_service = 'network_service_example' # str | Filter by network_service (optional)
    connection = 'connection_example' # str | Filter by connection (optional)
    product_offering = 'product_offering_example' # str | Filter by product_offering (optional)

    try:
        api_response = api_instance.network_service_configs_list(id=id, state=state, state__is_not=state__is_not, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, type=type, inner_vlan=inner_vlan, outer_vlan=outer_vlan, capacity=capacity, network_service=network_service, connection=connection, product_offering=product_offering)
        print("The response of NetworkServiceConfigsApi->network_service_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_configs_list: %s\n" % e)
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
 **inner_vlan** | **int**| Filter by inner_vlan | [optional] 
 **outer_vlan** | **int**| Filter by outer_vlan | [optional] 
 **capacity** | **int**| Filter by capacity | [optional] 
 **network_service** | **str**| Filter by network_service | [optional] 
 **connection** | **str**| Filter by connection | [optional] 
 **product_offering** | **str**| Filter by product_offering | [optional] 

### Return type

[**List[NetworkServiceConfig]**](NetworkServiceConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Polymorphic Network Service Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_configs_partial_update**
> NetworkServiceConfig network_service_configs_partial_update(id, network_service_config_update_partial=network_service_config_update_partial)



Update parts of an exisiting `network-service-config`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_config import NetworkServiceConfig
from openapi_client.models.network_service_config_update_partial import NetworkServiceConfigUpdatePartial
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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    id = 'id_example' # str | Get by id
    network_service_config_update_partial = openapi_client.NetworkServiceConfigUpdatePartial() # NetworkServiceConfigUpdatePartial | Polymorphic Network Service Config (optional)

    try:
        api_response = api_instance.network_service_configs_partial_update(id, network_service_config_update_partial=network_service_config_update_partial)
        print("The response of NetworkServiceConfigsApi->network_service_configs_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_configs_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_service_config_update_partial** | [**NetworkServiceConfigUpdatePartial**](NetworkServiceConfigUpdatePartial.md)| Polymorphic Network Service Config | [optional] 

### Return type

[**NetworkServiceConfig**](NetworkServiceConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Service Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_configs_read**
> NetworkServiceConfig network_service_configs_read(id)



Get a `network-service-config`

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_config import NetworkServiceConfig
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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_service_configs_read(id)
        print("The response of NetworkServiceConfigsApi->network_service_configs_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_configs_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkServiceConfig**](NetworkServiceConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Network Service Config |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_service_configs_update**
> NetworkServiceConfig network_service_configs_update(id, network_service_config_update=network_service_config_update)



Update an exisiting `network-service-config`

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_service_config import NetworkServiceConfig
from openapi_client.models.network_service_config_update import NetworkServiceConfigUpdate
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
    api_instance = openapi_client.NetworkServiceConfigsApi(api_client)
    id = 'id_example' # str | Get by id
    network_service_config_update = openapi_client.NetworkServiceConfigUpdate() # NetworkServiceConfigUpdate | Polymorphic Network Service Config (optional)

    try:
        api_response = api_instance.network_service_configs_update(id, network_service_config_update=network_service_config_update)
        print("The response of NetworkServiceConfigsApi->network_service_configs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkServiceConfigsApi->network_service_configs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_service_config_update** | [**NetworkServiceConfigUpdate**](NetworkServiceConfigUpdate.md)| Polymorphic Network Service Config | [optional] 

### Return type

[**NetworkServiceConfig**](NetworkServiceConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Service Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

