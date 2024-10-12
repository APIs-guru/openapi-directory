# openapi_client.ContractsApi

All URIs are relative to *https://discovery.gsa.gov*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_contracts_get**](ContractsApi.md#list_contracts_get) | **GET** /api/contracts/ | This endpoint returns contract history from FPDS for a specific vendor


# **list_contracts_get**
> object list_contracts_get(duns, naics=naics, sort=sort, direction=direction, page=page)

This endpoint returns contract history from FPDS for a specific vendor

<p>This endpoint returns contract history from FPDS for a specific vendor. The vendor's DUNS number is a required parameter. You can also filter contracts by their NAICS code to find contracts relevant to a particular category.</p>

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discovery.gsa.gov
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discovery.gsa.gov"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContractsApi(api_client)
    duns = 'duns_example' # str | A 9-digit DUNS number that uniquely identifies a vendor (required).
    naics = 'naics_example' # str | a six digit NAICS code used to filter by contracts with a certain NAICS (optional)
    sort = 'sort_example' # str | a field to sort on. Choices are date, status, agency, and amount (optional)
    direction = 'direction_example' # str | The sort direction of the results. Choices are asc or desc. (optional)
    page = 'page_example' # str | the page to start on. Results are paginated in increments of 100. Begins at page=1. (optional)

    try:
        # This endpoint returns contract history from FPDS for a specific vendor
        api_response = api_instance.list_contracts_get(duns, naics=naics, sort=sort, direction=direction, page=page)
        print("The response of ContractsApi->list_contracts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->list_contracts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **duns** | **str**| A 9-digit DUNS number that uniquely identifies a vendor (required). | 
 **naics** | **str**| a six digit NAICS code used to filter by contracts with a certain NAICS | [optional] 
 **sort** | **str**| a field to sort on. Choices are date, status, agency, and amount | [optional] 
 **direction** | **str**| The sort direction of the results. Choices are asc or desc. | [optional] 
 **page** | **str**| the page to start on. Results are paginated in increments of 100. Begins at page&#x3D;1. | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

