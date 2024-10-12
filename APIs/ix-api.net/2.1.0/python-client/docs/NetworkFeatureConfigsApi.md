# openapi_client.NetworkFeatureConfigsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_feature_configs_create**](NetworkFeatureConfigsApi.md#network_feature_configs_create) | **POST** /network-feature-configs | 
[**network_feature_configs_destroy**](NetworkFeatureConfigsApi.md#network_feature_configs_destroy) | **DELETE** /network-feature-configs/{id} | 
[**network_feature_configs_list**](NetworkFeatureConfigsApi.md#network_feature_configs_list) | **GET** /network-feature-configs | 
[**network_feature_configs_partial_update**](NetworkFeatureConfigsApi.md#network_feature_configs_partial_update) | **PATCH** /network-feature-configs/{id} | 
[**network_feature_configs_read**](NetworkFeatureConfigsApi.md#network_feature_configs_read) | **GET** /network-feature-configs/{id} | 
[**network_feature_configs_update**](NetworkFeatureConfigsApi.md#network_feature_configs_update) | **PUT** /network-feature-configs/{id} | 


# **network_feature_configs_create**
> NetworkFeatureConfig network_feature_configs_create(network_feature_config_request=network_feature_config_request)



Create a configuration for a `NetworkFeature` defined in the `NetworkFeature`s collection.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature_config import NetworkFeatureConfig
from openapi_client.models.network_feature_config_request import NetworkFeatureConfigRequest
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
    api_instance = openapi_client.NetworkFeatureConfigsApi(api_client)
    network_feature_config_request = openapi_client.NetworkFeatureConfigRequest() # NetworkFeatureConfigRequest | Polymorphic Network Feature Config Request (optional)

    try:
        api_response = api_instance.network_feature_configs_create(network_feature_config_request=network_feature_config_request)
        print("The response of NetworkFeatureConfigsApi->network_feature_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeatureConfigsApi->network_feature_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_feature_config_request** | [**NetworkFeatureConfigRequest**](NetworkFeatureConfigRequest.md)| Polymorphic Network Feature Config Request | [optional] 

### Return type

[**NetworkFeatureConfig**](NetworkFeatureConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Polymorphic Network Feature Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_feature_configs_destroy**
> NetworkFeatureConfig network_feature_configs_destroy(id)



Remove a network feature config.  The network feature config will be marked as `decommission_requested`. Decommissioning a network feature config will not cascade to related services or service configs.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature_config import NetworkFeatureConfig
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
    api_instance = openapi_client.NetworkFeatureConfigsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_feature_configs_destroy(id)
        print("The response of NetworkFeatureConfigsApi->network_feature_configs_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeatureConfigsApi->network_feature_configs_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkFeatureConfig**](NetworkFeatureConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Feature Config |  -  |
**400** | UnableToFulfill |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_feature_configs_list**
> List[NetworkFeatureConfig] network_feature_configs_list(id=id, state=state, state__is_not=state__is_not, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, type=type, service_config=service_config, network_feature=network_feature)



Get all network feature configs.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature_config import NetworkFeatureConfig
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
    api_instance = openapi_client.NetworkFeatureConfigsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    state = 'state_example' # str | Filter by state (optional)
    state__is_not = 'state__is_not_example' # str | Filter by state__is_not (optional)
    managing_account = 'managing_account_example' # str | Filter by managing_account (optional)
    consuming_account = 'consuming_account_example' # str | Filter by consuming_account (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)
    type = 'type_example' # str | Filter by type (optional)
    service_config = 'service_config_example' # str | Filter by service_config (optional)
    network_feature = 'network_feature_example' # str | Filter by network_feature (optional)

    try:
        api_response = api_instance.network_feature_configs_list(id=id, state=state, state__is_not=state__is_not, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, type=type, service_config=service_config, network_feature=network_feature)
        print("The response of NetworkFeatureConfigsApi->network_feature_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeatureConfigsApi->network_feature_configs_list: %s\n" % e)
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
 **service_config** | **str**| Filter by service_config | [optional] 
 **network_feature** | **str**| Filter by network_feature | [optional] 

### Return type

[**List[NetworkFeatureConfig]**](NetworkFeatureConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Polymorphic Network Feature Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_feature_configs_partial_update**
> NetworkFeatureConfig network_feature_configs_partial_update(id, network_feature_config_update_partial=network_feature_config_update_partial)



Update parts of a network feature configuration

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature_config import NetworkFeatureConfig
from openapi_client.models.network_feature_config_update_partial import NetworkFeatureConfigUpdatePartial
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
    api_instance = openapi_client.NetworkFeatureConfigsApi(api_client)
    id = 'id_example' # str | Get by id
    network_feature_config_update_partial = openapi_client.NetworkFeatureConfigUpdatePartial() # NetworkFeatureConfigUpdatePartial | Polymorphic Network Feauture Config Update (optional)

    try:
        api_response = api_instance.network_feature_configs_partial_update(id, network_feature_config_update_partial=network_feature_config_update_partial)
        print("The response of NetworkFeatureConfigsApi->network_feature_configs_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeatureConfigsApi->network_feature_configs_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_feature_config_update_partial** | [**NetworkFeatureConfigUpdatePartial**](NetworkFeatureConfigUpdatePartial.md)| Polymorphic Network Feauture Config Update | [optional] 

### Return type

[**NetworkFeatureConfig**](NetworkFeatureConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Feature Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_feature_configs_read**
> NetworkFeatureConfig network_feature_configs_read(id)



Get a single network feature config.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature_config import NetworkFeatureConfig
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
    api_instance = openapi_client.NetworkFeatureConfigsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_feature_configs_read(id)
        print("The response of NetworkFeatureConfigsApi->network_feature_configs_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeatureConfigsApi->network_feature_configs_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkFeatureConfig**](NetworkFeatureConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Network Feature Config |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_feature_configs_update**
> NetworkFeatureConfig network_feature_configs_update(id, network_feature_config_update=network_feature_config_update)



Update a network feature configuration

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature_config import NetworkFeatureConfig
from openapi_client.models.network_feature_config_update import NetworkFeatureConfigUpdate
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
    api_instance = openapi_client.NetworkFeatureConfigsApi(api_client)
    id = 'id_example' # str | Get by id
    network_feature_config_update = openapi_client.NetworkFeatureConfigUpdate() # NetworkFeatureConfigUpdate | Polymorphic Network Feauture Config Update (optional)

    try:
        api_response = api_instance.network_feature_configs_update(id, network_feature_config_update=network_feature_config_update)
        print("The response of NetworkFeatureConfigsApi->network_feature_configs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeatureConfigsApi->network_feature_configs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **network_feature_config_update** | [**NetworkFeatureConfigUpdate**](NetworkFeatureConfigUpdate.md)| Polymorphic Network Feauture Config Update | [optional] 

### Return type

[**NetworkFeatureConfig**](NetworkFeatureConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Polymorphic Network Feature Config |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

