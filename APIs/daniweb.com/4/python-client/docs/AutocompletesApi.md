# openapi_client.AutocompletesApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autocompletes_get**](AutocompletesApi.md#autocompletes_get) | **GET** /autocompletes | 


# **autocompletes_get**
> EndpointGetAutocompletes autocompletes_get(query=query)



Retrieve an array of names and locations, filtered by category, that begin with the query string passed in. Ideally used for search autocomplete dropdowns, as the search functionality filters against name and location. The four potential categories are: `conversations` for names of users you are in existing conversations with; `matches` for names of users you have previously skipped over; `people` for names of all other users; `locations` for locations of users. Only users and their locations who exist with the current access token's bubble are considered.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_autocompletes import EndpointGetAutocompletes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AutocompletesApi(api_client)
    query = 'query_example' # str |  (optional)

    try:
        api_response = api_instance.autocompletes_get(query=query)
        print("The response of AutocompletesApi->autocompletes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutocompletesApi->autocompletes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | [optional] 

### Return type

[**EndpointGetAutocompletes**](EndpointGetAutocompletes.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

