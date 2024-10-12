# openapi_client.BalanceSheetApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balance_sheet_one**](BalanceSheetApi.md#balance_sheet_one) | **GET** /accounting/balance-sheet | Get BalanceSheet


# **balance_sheet_one**
> GetBalanceSheetResponse balance_sheet_one(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, pass_through=pass_through, filter=filter, raw=raw)

Get BalanceSheet

Get BalanceSheet

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.balance_sheet_filter import BalanceSheetFilter
from openapi_client.models.get_balance_sheet_response import GetBalanceSheetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BalanceSheetApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    pass_through = None # PassThroughQuery | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads (optional)
    filter = openapi_client.BalanceSheetFilter() # BalanceSheetFilter | Apply filters (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Get BalanceSheet
        api_response = api_instance.balance_sheet_one(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, pass_through=pass_through, filter=filter, raw=raw)
        print("The response of BalanceSheetApi->balance_sheet_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalanceSheetApi->balance_sheet_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **pass_through** | [**PassThroughQuery**](object.md)| Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]&#x3D;leads becomes ?search&#x3D;leads | [optional] 
 **filter** | [**BalanceSheetFilter**](.md)| Apply filters | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**GetBalanceSheetResponse**](GetBalanceSheetResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | BalanceSheet |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

