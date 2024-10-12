# openapi_client.HelpApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_list_of_countries**](HelpApi.md#get_list_of_countries) | **GET** /help/countries | getListOfCountries


# **get_list_of_countries**
> List[GetListOfCountries200ResponseInner] get_list_of_countries(format=format)

getListOfCountries

Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.

### Example


```python
import openapi_client
from openapi_client.models.get_list_of_countries200_response_inner import GetListOfCountries200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HelpApi(api_client)
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getListOfCountries
        api_response = api_instance.get_list_of_countries(format=format)
        print("The response of HelpApi->get_list_of_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HelpApi->get_list_of_countries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetListOfCountries200ResponseInner]**](GetListOfCountries200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get name name, alpha-2, alpha-3 code, latitude and longitude for every country |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

