# openapi_client.MacsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**macs_create**](MacsApi.md#macs_create) | **POST** /macs | 
[**macs_destroy**](MacsApi.md#macs_destroy) | **DELETE** /macs/{id} | 
[**macs_list**](MacsApi.md#macs_list) | **GET** /macs | 
[**macs_read**](MacsApi.md#macs_read) | **GET** /macs/{id} | 


# **macs_create**
> MacAddress macs_create(mac_address_request=mac_address_request)



Register a mac address.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.mac_address import MacAddress
from openapi_client.models.mac_address_request import MacAddressRequest
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
    api_instance = openapi_client.MacsApi(api_client)
    mac_address_request = openapi_client.MacAddressRequest() # MacAddressRequest | MAC-Address Request (optional)

    try:
        api_response = api_instance.macs_create(mac_address_request=mac_address_request)
        print("The response of MacsApi->macs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MacsApi->macs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mac_address_request** | [**MacAddressRequest**](MacAddressRequest.md)| MAC-Address Request | [optional] 

### Return type

[**MacAddress**](MacAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | MAC-Address |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **macs_destroy**
> MacAddress macs_destroy(id)



Remove a mac address.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.mac_address import MacAddress
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
    api_instance = openapi_client.MacsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.macs_destroy(id)
        print("The response of MacsApi->macs_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MacsApi->macs_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**MacAddress**](MacAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MAC-Address |  -  |
**400** | UnableToFulfill |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **macs_list**
> List[MacAddress] macs_list(id=id, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, network_service_config=network_service_config, address=address, assigned_at=assigned_at, valid_not_before=valid_not_before, valid_not_after=valid_not_after)



List all mac addresses managed by the authorized customer.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.mac_address import MacAddress
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
    api_instance = openapi_client.MacsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    managing_account = 'managing_account_example' # str | Filter by managing_account (optional)
    consuming_account = 'consuming_account_example' # str | Filter by consuming_account (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)
    network_service_config = 'network_service_config_example' # str | Filter by network_service_config (optional)
    address = 'address_example' # str | Filter by address (optional)
    assigned_at = 'assigned_at_example' # str | Filter by assigned_at (optional)
    valid_not_before = 'valid_not_before_example' # str | Filter by valid_not_before (optional)
    valid_not_after = 'valid_not_after_example' # str | Filter by valid_not_after (optional)

    try:
        api_response = api_instance.macs_list(id=id, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, network_service_config=network_service_config, address=address, assigned_at=assigned_at, valid_not_before=valid_not_before, valid_not_after=valid_not_after)
        print("The response of MacsApi->macs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MacsApi->macs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **managing_account** | **str**| Filter by managing_account | [optional] 
 **consuming_account** | **str**| Filter by consuming_account | [optional] 
 **external_ref** | **str**| Filter by external_ref | [optional] 
 **network_service_config** | **str**| Filter by network_service_config | [optional] 
 **address** | **str**| Filter by address | [optional] 
 **assigned_at** | **str**| Filter by assigned_at | [optional] 
 **valid_not_before** | **str**| Filter by valid_not_before | [optional] 
 **valid_not_after** | **str**| Filter by valid_not_after | [optional] 

### Return type

[**List[MacAddress]**](MacAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: MAC-Address |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **macs_read**
> MacAddress macs_read(id)



Get a single mac address by it's id.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.mac_address import MacAddress
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
    api_instance = openapi_client.MacsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.macs_read(id)
        print("The response of MacsApi->macs_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MacsApi->macs_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**MacAddress**](MacAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MAC-Address |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

