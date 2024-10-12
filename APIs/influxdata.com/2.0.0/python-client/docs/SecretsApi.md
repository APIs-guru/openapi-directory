# openapi_client.SecretsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_orgs_id_secrets**](SecretsApi.md#get_orgs_id_secrets) | **GET** /orgs/{orgID}/secrets | List all secret keys for an organization
[**patch_orgs_id_secrets**](SecretsApi.md#patch_orgs_id_secrets) | **PATCH** /orgs/{orgID}/secrets | Update secrets in an organization
[**post_orgs_id_secrets**](SecretsApi.md#post_orgs_id_secrets) | **POST** /orgs/{orgID}/secrets/delete | Delete secrets from an organization


# **get_orgs_id_secrets**
> SecretKeysResponse get_orgs_id_secrets(org_id, zap_trace_span=zap_trace_span)

List all secret keys for an organization

### Example


```python
import openapi_client
from openapi_client.models.secret_keys_response import SecretKeysResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all secret keys for an organization
        api_response = api_instance.get_orgs_id_secrets(org_id, zap_trace_span=zap_trace_span)
        print("The response of SecretsApi->get_orgs_id_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->get_orgs_id_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**SecretKeysResponse**](SecretKeysResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all secret keys |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_orgs_id_secrets**
> patch_orgs_id_secrets(org_id, request_body, zap_trace_span=zap_trace_span)

Update secrets in an organization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    request_body = {'key': 'request_body_example'} # Dict[str, str] | Secret key value pairs to update/add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update secrets in an organization
        api_instance.patch_orgs_id_secrets(org_id, request_body, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling SecretsApi->patch_orgs_id_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **request_body** | [**Dict[str, str]**](str.md)| Secret key value pairs to update/add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Keys successfully patched |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_orgs_id_secrets**
> post_orgs_id_secrets(org_id, secret_keys, zap_trace_span=zap_trace_span)

Delete secrets from an organization

### Example


```python
import openapi_client
from openapi_client.models.secret_keys import SecretKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    secret_keys = openapi_client.SecretKeys() # SecretKeys | Secret key to delete
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete secrets from an organization
        api_instance.post_orgs_id_secrets(org_id, secret_keys, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling SecretsApi->post_orgs_id_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **secret_keys** | [**SecretKeys**](SecretKeys.md)| Secret key to delete | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Keys successfully patched |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

