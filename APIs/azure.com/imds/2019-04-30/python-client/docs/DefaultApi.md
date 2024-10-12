# openapi_client.DefaultApi

All URIs are relative to *https://169.254.169.254/metadata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attested_get_document**](DefaultApi.md#attested_get_document) | **GET** /attested/document | 
[**instances_get_metadata**](DefaultApi.md#instances_get_metadata) | **GET** /instance | 


# **attested_get_document**
> AttestedData attested_get_document(api_version, metadata, nonce=nonce)



Get Attested Data for the Virtual Machine.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.attested_data import AttestedData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://169.254.169.254/metadata
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://169.254.169.254/metadata"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | This is the API version to use.
    metadata = 'metadata_example' # str | This must be set to 'true'.
    nonce = 'nonce_example' # str | This is a string of up to 32 random alphanumeric characters. (optional)

    try:
        api_response = api_instance.attested_get_document(api_version, metadata, nonce=nonce)
        print("The response of DefaultApi->attested_get_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->attested_get_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| This is the API version to use. | 
 **metadata** | **str**| This must be set to &#39;true&#39;. | 
 **nonce** | **str**| This is a string of up to 32 random alphanumeric characters. | [optional] 

### Return type

[**AttestedData**](AttestedData.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instances_get_metadata**
> Instance instances_get_metadata(api_version, metadata)



Get Instance Metadata for the Virtual Machine.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.instance import Instance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://169.254.169.254/metadata
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://169.254.169.254/metadata"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | This is the API version to use.
    metadata = 'metadata_example' # str | This must be set to 'true'.

    try:
        api_response = api_instance.instances_get_metadata(api_version, metadata)
        print("The response of DefaultApi->instances_get_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->instances_get_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| This is the API version to use. | 
 **metadata** | **str**| This must be set to &#39;true&#39;. | 

### Return type

[**Instance**](Instance.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

