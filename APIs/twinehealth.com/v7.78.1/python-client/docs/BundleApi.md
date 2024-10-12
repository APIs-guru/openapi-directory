# openapi_client.BundleApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_bundle**](BundleApi.md#create_bundle) | **POST** /bundle | Create bundle
[**fetch_bundle**](BundleApi.md#fetch_bundle) | **GET** /bundle/{id} | Get a bundle
[**update_bundle**](BundleApi.md#update_bundle) | **PATCH** /bundle/{id} | Update a bundle


# **create_bundle**
> CreateBundleResponse create_bundle(create_bundle_request)

Create bundle

Create a bundle in a patient's plan

### Example


```python
import openapi_client
from openapi_client.models.create_bundle_request import CreateBundleRequest
from openapi_client.models.create_bundle_response import CreateBundleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BundleApi(api_client)
    create_bundle_request = openapi_client.CreateBundleRequest() # CreateBundleRequest | 

    try:
        # Create bundle
        api_response = api_instance.create_bundle(create_bundle_request)
        print("The response of BundleApi->create_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleApi->create_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_bundle_request** | [**CreateBundleRequest**](CreateBundleRequest.md)|  | 

### Return type

[**CreateBundleResponse**](CreateBundleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_bundle**
> FetchBundleResponse fetch_bundle(id)

Get a bundle

Get a bundle from a patient's plan.

### Example


```python
import openapi_client
from openapi_client.models.fetch_bundle_response import FetchBundleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BundleApi(api_client)
    id = 'id_example' # str | Bundle identifier

    try:
        # Get a bundle
        api_response = api_instance.fetch_bundle(id)
        print("The response of BundleApi->fetch_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleApi->fetch_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Bundle identifier | 

### Return type

[**FetchBundleResponse**](FetchBundleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_bundle**
> UpdateBundleResponse update_bundle(id, update_bundle_request)

Update a bundle

Updte a bundle from a patient's plan.

### Example


```python
import openapi_client
from openapi_client.models.update_bundle_request import UpdateBundleRequest
from openapi_client.models.update_bundle_response import UpdateBundleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BundleApi(api_client)
    id = 'id_example' # str | Bundle identifier
    update_bundle_request = openapi_client.UpdateBundleRequest() # UpdateBundleRequest | 

    try:
        # Update a bundle
        api_response = api_instance.update_bundle(id, update_bundle_request)
        print("The response of BundleApi->update_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleApi->update_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Bundle identifier | 
 **update_bundle_request** | [**UpdateBundleRequest**](UpdateBundleRequest.md)|  | 

### Return type

[**UpdateBundleResponse**](UpdateBundleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

