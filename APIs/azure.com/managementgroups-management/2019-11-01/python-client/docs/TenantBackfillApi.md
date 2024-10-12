# openapi_client.TenantBackfillApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start_tenant_backfill**](TenantBackfillApi.md#start_tenant_backfill) | **POST** /providers/Microsoft.Management/startTenantBackfill | 
[**tenant_backfill_status**](TenantBackfillApi.md#tenant_backfill_status) | **POST** /providers/Microsoft.Management/tenantBackfillStatus | 


# **start_tenant_backfill**
> TenantBackfillStatusResult start_tenant_backfill(api_version)



Starts backfilling subscriptions for the Tenant.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tenant_backfill_status_result import TenantBackfillStatusResult
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
    api_instance = openapi_client.TenantBackfillApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-01-01-preview.

    try:
        api_response = api_instance.start_tenant_backfill(api_version)
        print("The response of TenantBackfillApi->start_tenant_backfill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantBackfillApi->start_tenant_backfill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-01-01-preview. | 

### Return type

[**TenantBackfillStatusResult**](TenantBackfillStatusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenant_backfill_status**
> TenantBackfillStatusResult tenant_backfill_status(api_version)



Gets tenant backfill status

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tenant_backfill_status_result import TenantBackfillStatusResult
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
    api_instance = openapi_client.TenantBackfillApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-01-01-preview.

    try:
        api_response = api_instance.tenant_backfill_status(api_version)
        print("The response of TenantBackfillApi->tenant_backfill_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantBackfillApi->tenant_backfill_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-01-01-preview. | 

### Return type

[**TenantBackfillStatusResult**](TenantBackfillStatusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

