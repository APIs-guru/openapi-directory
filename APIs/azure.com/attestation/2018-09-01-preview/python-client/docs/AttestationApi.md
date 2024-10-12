# openapi_client.AttestationApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certs_get**](AttestationApi.md#certs_get) | **GET** /certs | Retrieves the OpenID Configuration data for the Azure Attestation Service
[**metadata_configuration_get**](AttestationApi.md#metadata_configuration_get) | **GET** /.well-known/openid-configuration | Retrieves the OpenID Configuration data for the Azure Attestation Service


# **certs_get**
> object certs_get()

Retrieves the OpenID Configuration data for the Azure Attestation Service

Retrieves attestation signing keys in use by the attestation service

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttestationApi(api_client)

    try:
        # Retrieves the OpenID Configuration data for the Azure Attestation Service
        api_response = api_instance.certs_get()
        print("The response of AttestationApi->certs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttestationApi->certs_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error processing the request |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metadata_configuration_get**
> object metadata_configuration_get()

Retrieves the OpenID Configuration data for the Azure Attestation Service

Retrieves metadata about the attestation signing keys in use by the  attestation service

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttestationApi(api_client)

    try:
        # Retrieves the OpenID Configuration data for the Azure Attestation Service
        api_response = api_instance.metadata_configuration_get()
        print("The response of AttestationApi->metadata_configuration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttestationApi->metadata_configuration_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error processing the request |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

