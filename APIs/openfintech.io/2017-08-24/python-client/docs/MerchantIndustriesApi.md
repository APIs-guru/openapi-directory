# openapi_client.MerchantIndustriesApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchant_industries_get**](MerchantIndustriesApi.md#merchant_industries_get) | **GET** /merchant-industries | List of merchant industries
[**merchant_industries_id_get**](MerchantIndustriesApi.md#merchant_industries_id_get) | **GET** /merchant-industries/{id} | Merchant industry by ID


# **merchant_industries_get**
> MerchantIndustriesResponse merchant_industries_get(page_number=page_number, page_size=page_size, filter_name=filter_name)

List of merchant industries

Returns all available merchant fields of activity. 

### Example


```python
import openapi_client
from openapi_client.models.merchant_industries_response import MerchantIndustriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchantIndustriesApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_name = 'filter_name_example' # str | Filtering by name. (optional)

    try:
        # List of merchant industries
        api_response = api_instance.merchant_industries_get(page_number=page_number, page_size=page_size, filter_name=filter_name)
        print("The response of MerchantIndustriesApi->merchant_industries_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantIndustriesApi->merchant_industries_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_name** | **str**| Filtering by name. | [optional] 

### Return type

[**MerchantIndustriesResponse**](MerchantIndustriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Merchant industries. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **merchant_industries_id_get**
> MerchantIndustryResponse merchant_industries_id_get(id)

Merchant industry by ID

Returns merchant industry with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.merchant_industry_response import MerchantIndustryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchantIndustriesApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Merchant industry by ID
        api_response = api_instance.merchant_industries_id_get(id)
        print("The response of MerchantIndustriesApi->merchant_industries_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantIndustriesApi->merchant_industries_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**MerchantIndustryResponse**](MerchantIndustryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Merchant industry. |  -  |
**404** | Merchant industry ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

