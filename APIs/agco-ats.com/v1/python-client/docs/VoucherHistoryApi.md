# openapi_client.VoucherHistoryApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**voucher_history_get_voucher_history**](VoucherHistoryApi.md#voucher_history_get_voucher_history) | **GET** /api/v2/VoucherHistory | Gets voucher history data


# **voucher_history_get_voucher_history**
> APIPagedResponseDealerDBModelsVoucherHistory voucher_history_get_voucher_history(voucher_code=voucher_code, changed_before=changed_before, changed_after=changed_after, limit=limit, offset=offset)

Gets voucher history data

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_dealer_db_models_voucher_history import APIPagedResponseDealerDBModelsVoucherHistory
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
    api_instance = openapi_client.VoucherHistoryApi(api_client)
    voucher_code = 'voucher_code_example' # str | Optional. Filter history data by Voucher Code. (optional)
    changed_before = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter history data where changes occured before provided date. (optional)
    changed_after = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter history data where changes occured after provided date. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Gets voucher history data
        api_response = api_instance.voucher_history_get_voucher_history(voucher_code=voucher_code, changed_before=changed_before, changed_after=changed_after, limit=limit, offset=offset)
        print("The response of VoucherHistoryApi->voucher_history_get_voucher_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VoucherHistoryApi->voucher_history_get_voucher_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**| Optional. Filter history data by Voucher Code. | [optional] 
 **changed_before** | **datetime**| Optional. Filter history data where changes occured before provided date. | [optional] 
 **changed_after** | **datetime**| Optional. Filter history data where changes occured after provided date. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseDealerDBModelsVoucherHistory**](APIPagedResponseDealerDBModelsVoucherHistory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

