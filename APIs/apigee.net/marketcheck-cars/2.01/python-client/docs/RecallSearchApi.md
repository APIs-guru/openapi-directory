# openapi_client.RecallSearchApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_recall_history**](RecallSearchApi.md#get_recall_history) | **GET** /car/recall/{vin} | Recall info by vin


# **get_recall_history**
> SearchResponse get_recall_history(vin, api_key=api_key, page=page)

Recall info by vin

Get a particular recall information for a vin

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.RecallSearchApi(api_client)
    vin = 'vin_example' # str | The VIN to identify the car. Must be a valid 17 char VIN
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    page = 3.4 # float | Page number to fetch the results for the given criteria. Default is 1. (optional)

    try:
        # Recall info by vin
        api_response = api_instance.get_recall_history(vin, api_key=api_key, page=page)
        print("The response of RecallSearchApi->get_recall_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecallSearchApi->get_recall_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **str**| The VIN to identify the car. Must be a valid 17 char VIN | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **page** | **float**| Page number to fetch the results for the given criteria. Default is 1. | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reacll info for the given vin |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

