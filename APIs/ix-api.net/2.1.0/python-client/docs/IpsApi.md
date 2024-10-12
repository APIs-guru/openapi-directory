# openapi_client.IpsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ips_create**](IpsApi.md#ips_create) | **POST** /ips | 
[**ips_list**](IpsApi.md#ips_list) | **GET** /ips | 
[**ips_partial_update**](IpsApi.md#ips_partial_update) | **PATCH** /ips/{id} | 
[**ips_read**](IpsApi.md#ips_read) | **GET** /ips/{id} | 
[**ips_update**](IpsApi.md#ips_update) | **PUT** /ips/{id} | 


# **ips_create**
> IpAddress ips_create(ip_address_request=ip_address_request)



Add an ip host address or network prefix.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.ip_address import IpAddress
from openapi_client.models.ip_address_request import IpAddressRequest
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
    api_instance = openapi_client.IpsApi(api_client)
    ip_address_request = openapi_client.IpAddressRequest() # IpAddressRequest | IP-Address / Prefix allocation Request (optional)

    try:
        api_response = api_instance.ips_create(ip_address_request=ip_address_request)
        print("The response of IpsApi->ips_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpsApi->ips_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip_address_request** | [**IpAddressRequest**](IpAddressRequest.md)| IP-Address / Prefix allocation Request | [optional] 

### Return type

[**IpAddress**](IpAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | IP-Address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ips_list**
> List[IpAddress] ips_list(id=id, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, network_service=network_service, network_service_config=network_service_config, network_feature=network_feature, network_feature_config=network_feature_config, version=version, fqdn=fqdn, prefix_length=prefix_length, valid_not_before=valid_not_before, valid_not_after=valid_not_after)



List all ip addresses (and prefixes).

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.ip_address import IpAddress
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
    api_instance = openapi_client.IpsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    managing_account = 'managing_account_example' # str | Filter by managing_account (optional)
    consuming_account = 'consuming_account_example' # str | Filter by consuming_account (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)
    network_service = 'network_service_example' # str | Filter by network_service (optional)
    network_service_config = 'network_service_config_example' # str | Filter by network_service_config (optional)
    network_feature = 'network_feature_example' # str | Filter by network_feature (optional)
    network_feature_config = 'network_feature_config_example' # str | Filter by network_feature_config (optional)
    version = 56 # int | Filter by version (optional)
    fqdn = 'fqdn_example' # str | Filter by fqdn (optional)
    prefix_length = 56 # int | Filter by prefix_length (optional)
    valid_not_before = 'valid_not_before_example' # str | Filter by valid_not_before (optional)
    valid_not_after = 'valid_not_after_example' # str | Filter by valid_not_after (optional)

    try:
        api_response = api_instance.ips_list(id=id, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref, network_service=network_service, network_service_config=network_service_config, network_feature=network_feature, network_feature_config=network_feature_config, version=version, fqdn=fqdn, prefix_length=prefix_length, valid_not_before=valid_not_before, valid_not_after=valid_not_after)
        print("The response of IpsApi->ips_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpsApi->ips_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **managing_account** | **str**| Filter by managing_account | [optional] 
 **consuming_account** | **str**| Filter by consuming_account | [optional] 
 **external_ref** | **str**| Filter by external_ref | [optional] 
 **network_service** | **str**| Filter by network_service | [optional] 
 **network_service_config** | **str**| Filter by network_service_config | [optional] 
 **network_feature** | **str**| Filter by network_feature | [optional] 
 **network_feature_config** | **str**| Filter by network_feature_config | [optional] 
 **version** | **int**| Filter by version | [optional] 
 **fqdn** | **str**| Filter by fqdn | [optional] 
 **prefix_length** | **int**| Filter by prefix_length | [optional] 
 **valid_not_before** | **str**| Filter by valid_not_before | [optional] 
 **valid_not_after** | **str**| Filter by valid_not_after | [optional] 

### Return type

[**List[IpAddress]**](IpAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: IP-Address |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ips_partial_update**
> IpAddress ips_partial_update(id, ip_address_update_partial=ip_address_update_partial)



Update parts of an ip address.   As with the `PUT` opertaion, IP addresses, where you don't have update rights, will yield a `resource access denied` error when attempting an update.  If the ip address was allocated for you, you might not be able to change anything but the `fqdn`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.ip_address import IpAddress
from openapi_client.models.ip_address_update_partial import IpAddressUpdatePartial
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
    api_instance = openapi_client.IpsApi(api_client)
    id = 'id_example' # str | Get by id
    ip_address_update_partial = openapi_client.IpAddressUpdatePartial() # IpAddressUpdatePartial | IP-Address Update (optional)

    try:
        api_response = api_instance.ips_partial_update(id, ip_address_update_partial=ip_address_update_partial)
        print("The response of IpsApi->ips_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpsApi->ips_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **ip_address_update_partial** | [**IpAddressUpdatePartial**](IpAddressUpdatePartial.md)| IP-Address Update | [optional] 

### Return type

[**IpAddress**](IpAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | IP-Address |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ips_read**
> IpAddress ips_read(id)



Get a single ip addresses by it's id.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.ip_address import IpAddress
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
    api_instance = openapi_client.IpsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.ips_read(id)
        print("The response of IpsApi->ips_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpsApi->ips_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**IpAddress**](IpAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | IP-Address |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ips_update**
> IpAddress ips_update(id, ip_address_update=ip_address_update)



Update an ip address object.  You can only update IP addresses within your current scope. Not all addresses you can read you can update.  If the ip address was allocated for you, you might not be able to change anything but the `fqdn`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.ip_address import IpAddress
from openapi_client.models.ip_address_update import IpAddressUpdate
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
    api_instance = openapi_client.IpsApi(api_client)
    id = 'id_example' # str | Get by id
    ip_address_update = openapi_client.IpAddressUpdate() # IpAddressUpdate | IP-Address Update (optional)

    try:
        api_response = api_instance.ips_update(id, ip_address_update=ip_address_update)
        print("The response of IpsApi->ips_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpsApi->ips_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **ip_address_update** | [**IpAddressUpdate**](IpAddressUpdate.md)| IP-Address Update | [optional] 

### Return type

[**IpAddress**](IpAddress.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | IP-Address |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

