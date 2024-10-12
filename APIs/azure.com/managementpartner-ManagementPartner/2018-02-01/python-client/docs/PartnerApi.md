# openapi_client.PartnerApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partner_create**](PartnerApi.md#partner_create) | **PUT** /providers/Microsoft.ManagementPartner/partners/{partnerId} | Create a specific &#x60;Partner&#x60;.
[**partner_delete**](PartnerApi.md#partner_delete) | **DELETE** /providers/Microsoft.ManagementPartner/partners/{partnerId} | Delete a specific &#x60;Partner&#x60;.
[**partner_get**](PartnerApi.md#partner_get) | **GET** /providers/Microsoft.ManagementPartner/partners/{partnerId} | Get a specific &#x60;Partner&#x60;.
[**partner_update**](PartnerApi.md#partner_update) | **PATCH** /providers/Microsoft.ManagementPartner/partners/{partnerId} | Update a specific &#x60;Partner&#x60;.


# **partner_create**
> PartnerResponse partner_create(partner_id, api_version)

Create a specific `Partner`.

Create a management partner for the objectId and tenantId.

### Example


```python
import openapi_client
from openapi_client.models.partner_response import PartnerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnerApi(api_client)
    partner_id = 'partner_id_example' # str | Id of the Partner
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Create a specific `Partner`.
        api_response = api_instance.partner_create(partner_id, api_version)
        print("The response of PartnerApi->partner_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnerApi->partner_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Id of the Partner | 
 **api_version** | **str**| Supported version. | 

### Return type

[**PartnerResponse**](PartnerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the details of the &#x60;Partner&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partner_delete**
> partner_delete(partner_id, api_version)

Delete a specific `Partner`.

Delete the management partner for the objectId and tenantId.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnerApi(api_client)
    partner_id = 'partner_id_example' # str | Id of the Partner
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Delete a specific `Partner`.
        api_instance.partner_delete(partner_id, api_version)
    except Exception as e:
        print("Exception when calling PartnerApi->partner_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Id of the Partner | 
 **api_version** | **str**| Supported version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted the &#x60;Partner&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partner_get**
> PartnerResponse partner_get(partner_id, api_version)

Get a specific `Partner`.

Get the management partner using the partnerId, objectId and tenantId.

### Example


```python
import openapi_client
from openapi_client.models.partner_response import PartnerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnerApi(api_client)
    partner_id = 'partner_id_example' # str | Id of the Partner
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get a specific `Partner`.
        api_response = api_instance.partner_get(partner_id, api_version)
        print("The response of PartnerApi->partner_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnerApi->partner_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Id of the Partner | 
 **api_version** | **str**| Supported version. | 

### Return type

[**PartnerResponse**](PartnerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the details of the &#x60;Partner&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partner_update**
> PartnerResponse partner_update(partner_id, api_version)

Update a specific `Partner`.

Update the management partner for the objectId and tenantId.

### Example


```python
import openapi_client
from openapi_client.models.partner_response import PartnerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnerApi(api_client)
    partner_id = 'partner_id_example' # str | Id of the Partner
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Update a specific `Partner`.
        api_response = api_instance.partner_update(partner_id, api_version)
        print("The response of PartnerApi->partner_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnerApi->partner_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Id of the Partner | 
 **api_version** | **str**| Supported version. | 

### Return type

[**PartnerResponse**](PartnerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the details of the &#x60;Partner&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

