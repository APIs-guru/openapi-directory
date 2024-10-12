# openapi_client.ApplicationApi

All URIs are relative to *http://localhost:8080/exist/apps/WeGA-WebApp/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_new_id_get**](ApplicationApi.md#application_new_id_get) | **GET** /application/newID | Create a new WeGA ID
[**application_status_get**](ApplicationApi.md#application_status_get) | **GET** /application/status | Get status information about the running WeGA-WebApp


# **application_new_id_get**
> ApplicationNewIDGet200Response application_new_id_get(doc_type)

Create a new WeGA ID

### Example


```python
import openapi_client
from openapi_client.models.application_new_id_get200_response import ApplicationNewIDGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type

    try:
        # Create a new WeGA ID
        api_response = api_instance.application_new_id_get(doc_type)
        print("The response of ApplicationApi->application_new_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_new_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | 

### Return type

[**ApplicationNewIDGet200Response**](ApplicationNewIDGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single object with a fresh WeGA ID |  -  |
**403** | The creation of new IDs is only available in the development environment |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_status_get**
> ApplicationStatusGet200Response application_status_get()

Get status information about the running WeGA-WebApp

### Example


```python
import openapi_client
from openapi_client.models.application_status_get200_response import ApplicationStatusGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)

    try:
        # Get status information about the running WeGA-WebApp
        api_response = api_instance.application_status_get()
        print("The response of ApplicationApi->application_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_status_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApplicationStatusGet200Response**](ApplicationStatusGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Healthy – A single object with status information |  -  |
**500** | Unhealthy – A single object with status information |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

