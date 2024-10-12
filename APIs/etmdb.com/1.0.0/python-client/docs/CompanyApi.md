# openapi_client.CompanyApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**company_search_read**](CompanyApi.md#company_search_read) | **GET** /api/v1/company/search/{company_name} | Return company search result


# **company_search_read**
> company_search_read(company_name)

Return company search result

Return company search result  ### Response Class (Status 200)  * __{company_name}__: Used as a key word to search companies,  For more details on how companies are listed [see here][ref]. [ref]: https://etmdb.com/en/company-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompanyApi(api_client)
    company_name = 'company_name_example' # str | 

    try:
        # Return company search result
        api_instance.company_search_read(company_name)
    except Exception as e:
        print("Exception when calling CompanyApi->company_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_name** | **str**|  | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

