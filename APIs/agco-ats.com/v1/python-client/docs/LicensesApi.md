# openapi_client.LicensesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_licenses_id_get**](LicensesApi.md#api_v2_licenses_id_get) | **GET** /api/v2/Licenses/{ID} | Get a license.
[**licenses_get**](LicensesApi.md#licenses_get) | **GET** /api/v2/Licenses | Gets a list of licenses with the specified criteria.


# **api_v2_licenses_id_get**
> DealerDBModelsLicense api_v2_licenses_id_get(id)

Get a license.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_license import DealerDBModelsLicense
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    id = 'id_example' # str | The ID of the license to get.

    try:
        # Get a license.
        api_response = api_instance.api_v2_licenses_id_get(id)
        print("The response of LicensesApi->api_v2_licenses_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->api_v2_licenses_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the license to get. | 

### Return type

[**DealerDBModelsLicense**](DealerDBModelsLicense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licenses_get**
> APIPagedResponseDealerDBModelsLicense licenses_get(voucher_code=voucher_code, dealer_code=dealer_code, status=status, limit=limit, offset=offset)

Gets a list of licenses with the specified criteria.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_dealer_db_models_license import APIPagedResponseDealerDBModelsLicense
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    voucher_code = 'voucher_code_example' # str | Optional. Filter by VoucherCode (optional)
    dealer_code = 'dealer_code_example' # str | Optional. Filter by DealerCode (optional)
    status = 'status_example' # str | Optional. Filter by Status.  By default only active licenses will be returned. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Gets a list of licenses with the specified criteria.
        api_response = api_instance.licenses_get(voucher_code=voucher_code, dealer_code=dealer_code, status=status, limit=limit, offset=offset)
        print("The response of LicensesApi->licenses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->licenses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**| Optional. Filter by VoucherCode | [optional] 
 **dealer_code** | **str**| Optional. Filter by DealerCode | [optional] 
 **status** | **str**| Optional. Filter by Status.  By default only active licenses will be returned. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseDealerDBModelsLicense**](APIPagedResponseDealerDBModelsLicense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

