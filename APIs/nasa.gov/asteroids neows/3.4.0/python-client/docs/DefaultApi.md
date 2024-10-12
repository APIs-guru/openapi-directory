# openapi_client.DefaultApi

All URIs are relative to *http://techport.nasa.gov/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_get**](DefaultApi.md#api_get) | **GET** /api | 
[**api_projects_format_get**](DefaultApi.md#api_projects_format_get) | **GET** /api/projects{.format} | 
[**api_projects_id_format_get**](DefaultApi.md#api_projects_id_format_get) | **GET** /api/projects/{id}{.format} | 


# **api_get**
> api_get()



Returns the swagger specification for the API.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://techport.nasa.gov/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://techport.nasa.gov/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.api_get()
    except Exception as e:
        print("Exception when calling DefaultApi->api_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Object not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_projects_format_get**
> ApiProjectsFormatGet200Response api_projects_format_get(updated_since, format, format2)



Returns a list of available technology project IDs.

### Example


```python
import openapi_client
from openapi_client.models.api_projects_format_get200_response import ApiProjectsFormatGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://techport.nasa.gov/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://techport.nasa.gov/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    updated_since = '2013-10-20' # date | ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.
    format = json # str | The response type desired. (default to json)
    format2 = 'format_example' # str | Automatically added

    try:
        api_response = api_instance.api_projects_format_get(updated_since, format, format2)
        print("The response of DefaultApi->api_projects_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_projects_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updated_since** | **date**| ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter. | 
 **format** | **str**| The response type desired. | [default to json]
 **format2** | **str**| Automatically added | 

### Return type

[**ApiProjectsFormatGet200Response**](ApiProjectsFormatGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Object not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_projects_id_format_get**
> Project api_projects_id_format_get(id, format, format2)



Returns information about a specific technology project.

### Example


```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://techport.nasa.gov/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://techport.nasa.gov/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 56 # int | ID of project to fetch
    format = xml # str | The response type desired. (default to xml)
    format2 = 'format_example' # str | Automatically added

    try:
        api_response = api_instance.api_projects_id_format_get(id, format, format2)
        print("The response of DefaultApi->api_projects_id_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_projects_id_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of project to fetch | 
 **format** | **str**| The response type desired. | [default to xml]
 **format2** | **str**| Automatically added | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Object not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

