# openapi_client.ClientFiltersApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](ClientFiltersApi.md#get) | **GET** /client/configure/get | get client filters
[**set**](ClientFiltersApi.md#set) | **POST** /client/configure/set | set client filters


# **get**
> get(country, api_key=api_key)

get client filters

get client filters

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientFiltersApi(api_client)
    country = 'country_example' # str | To filter listing on Country in which they are listed
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # get client filters
        api_instance.get(country, api_key=api_key)
    except Exception as e:
        print("Exception when calling ClientFiltersApi->get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| To filter listing on Country in which they are listed | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

void (empty response body)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully get client filters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set**
> set(country, csvfile, api_key=api_key)

set client filters

set client filters

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientFiltersApi(api_client)
    country = 'country_example' # str | To filter listing on Country in which they are listed
    csvfile = None # bytearray | csv file with filters
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # set client filters
        api_instance.set(country, csvfile, api_key=api_key)
    except Exception as e:
        print("Exception when calling ClientFiltersApi->set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| To filter listing on Country in which they are listed | 
 **csvfile** | **bytearray**| csv file with filters | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

void (empty response body)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set client filters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

