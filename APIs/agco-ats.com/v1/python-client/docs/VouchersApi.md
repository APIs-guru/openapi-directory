# openapi_client.VouchersApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_vouchers_voucher_code_get**](VouchersApi.md#api_v2_vouchers_voucher_code_get) | **GET** /api/v2/Vouchers/{VoucherCode} | Get a voucher
[**vouchers_delete**](VouchersApi.md#vouchers_delete) | **DELETE** /api/v2/Vouchers/{VoucherCode} | Delete a voucher
[**vouchers_get**](VouchersApi.md#vouchers_get) | **GET** /api/v2/Vouchers | Gets a list of vouchers
[**vouchers_get_voucher_history**](VouchersApi.md#vouchers_get_voucher_history) | **GET** /api/v2/Vouchers/{VoucherCode}/VoucherHistory | Get a voucher&#39;s history.
[**vouchers_post**](VouchersApi.md#vouchers_post) | **POST** /api/v2/Vouchers | Create a voucher
[**vouchers_put**](VouchersApi.md#vouchers_put) | **PUT** /api/v2/Vouchers/{VoucherCode} | Update a voucher


# **api_v2_vouchers_voucher_code_get**
> DealerDBModelsVoucher api_v2_vouchers_voucher_code_get(voucher_code, deleted=deleted)

Get a voucher

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_voucher import DealerDBModelsVoucher
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
    api_instance = openapi_client.VouchersApi(api_client)
    voucher_code = 'voucher_code_example' # str | The voucher code of the voucher to get.
    deleted = 'deleted_example' # str | Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned. (optional)

    try:
        # Get a voucher
        api_response = api_instance.api_v2_vouchers_voucher_code_get(voucher_code, deleted=deleted)
        print("The response of VouchersApi->api_v2_vouchers_voucher_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VouchersApi->api_v2_vouchers_voucher_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**| The voucher code of the voucher to get. | 
 **deleted** | **str**| Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned. | [optional] 

### Return type

[**DealerDBModelsVoucher**](DealerDBModelsVoucher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vouchers_delete**
> vouchers_delete(voucher_code)

Delete a voucher

No Documentation Found.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.VouchersApi(api_client)
    voucher_code = 'voucher_code_example' # str | The voucher code of the voucher to delete.

    try:
        # Delete a voucher
        api_instance.vouchers_delete(voucher_code)
    except Exception as e:
        print("Exception when calling VouchersApi->vouchers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**| The voucher code of the voucher to delete. | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vouchers_get**
> APIPagedResponseDealerDBModelsVoucher vouchers_get(type=type, dealer_code=dealer_code, license_to=license_to, purpose=purpose, order_number=order_number, email=email, modified_by=modified_by, created_after=created_after, created_before=created_before, punched_after=punched_after, punched_before=punched_before, punched=punched, expiration_after=expiration_after, expiration_before=expiration_before, deleted=deleted, limit=limit, offset=offset)

Gets a list of vouchers

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_dealer_db_models_voucher import APIPagedResponseDealerDBModelsVoucher
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
    api_instance = openapi_client.VouchersApi(api_client)
    type = 'type_example' # str | Optional. Filter vouchers by Type (optional)
    dealer_code = 'dealer_code_example' # str | Optional. Filter vouchers by DealerCode (optional)
    license_to = 'license_to_example' # str | Optional. Filter vouchers by LicenseTo. Wildcard supported (*). (optional)
    purpose = 'purpose_example' # str | Optional. Filter vouchers by Purpose. Wildcard supported (*). (optional)
    order_number = 'order_number_example' # str | Optional. Filter vouchers by OrderNumber (optional)
    email = 'email_example' # str | Optional. Filter vouchers by Email. Wildcard supported (*). (optional)
    modified_by = 'modified_by_example' # str | Optional. Filter vouchers by ModifiedBy (optional)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter vouchers by CreatedDate (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter vouchers by CreatedDate (optional)
    punched_after = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter vouchers by PunchedDate (optional)
    punched_before = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter vouchers by PunchedDate (optional)
    punched = True # bool | Optional. Filter vouchers by Punched status (optional)
    expiration_after = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter vouchers by ExpirationDate (optional)
    expiration_before = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter vouchers by ExpirationDate (optional)
    deleted = 'deleted_example' # str | Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Gets a list of vouchers
        api_response = api_instance.vouchers_get(type=type, dealer_code=dealer_code, license_to=license_to, purpose=purpose, order_number=order_number, email=email, modified_by=modified_by, created_after=created_after, created_before=created_before, punched_after=punched_after, punched_before=punched_before, punched=punched, expiration_after=expiration_after, expiration_before=expiration_before, deleted=deleted, limit=limit, offset=offset)
        print("The response of VouchersApi->vouchers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VouchersApi->vouchers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Optional. Filter vouchers by Type | [optional] 
 **dealer_code** | **str**| Optional. Filter vouchers by DealerCode | [optional] 
 **license_to** | **str**| Optional. Filter vouchers by LicenseTo. Wildcard supported (*). | [optional] 
 **purpose** | **str**| Optional. Filter vouchers by Purpose. Wildcard supported (*). | [optional] 
 **order_number** | **str**| Optional. Filter vouchers by OrderNumber | [optional] 
 **email** | **str**| Optional. Filter vouchers by Email. Wildcard supported (*). | [optional] 
 **modified_by** | **str**| Optional. Filter vouchers by ModifiedBy | [optional] 
 **created_after** | **datetime**| Optional. Filter vouchers by CreatedDate | [optional] 
 **created_before** | **datetime**| Optional. Filter vouchers by CreatedDate | [optional] 
 **punched_after** | **datetime**| Optional. Filter vouchers by PunchedDate | [optional] 
 **punched_before** | **datetime**| Optional. Filter vouchers by PunchedDate | [optional] 
 **punched** | **bool**| Optional. Filter vouchers by Punched status | [optional] 
 **expiration_after** | **datetime**| Optional. Filter vouchers by ExpirationDate | [optional] 
 **expiration_before** | **datetime**| Optional. Filter vouchers by ExpirationDate | [optional] 
 **deleted** | **str**| Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseDealerDBModelsVoucher**](APIPagedResponseDealerDBModelsVoucher.md)

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

# **vouchers_get_voucher_history**
> APIPagedResponseDealerDBModelsVoucherHistory vouchers_get_voucher_history(voucher_code, limit=limit, offset=offset)

Get a voucher's history.

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
    api_instance = openapi_client.VouchersApi(api_client)
    voucher_code = 'voucher_code_example' # str | The voucher code to get history for.
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a voucher's history.
        api_response = api_instance.vouchers_get_voucher_history(voucher_code, limit=limit, offset=offset)
        print("The response of VouchersApi->vouchers_get_voucher_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VouchersApi->vouchers_get_voucher_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**| The voucher code to get history for. | 
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

# **vouchers_post**
> str vouchers_post(dealer_db_models_voucher)

Create a voucher

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_voucher import DealerDBModelsVoucher
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
    api_instance = openapi_client.VouchersApi(api_client)
    dealer_db_models_voucher = openapi_client.DealerDBModelsVoucher() # DealerDBModelsVoucher | The voucher to add.

    try:
        # Create a voucher
        api_response = api_instance.vouchers_post(dealer_db_models_voucher)
        print("The response of VouchersApi->vouchers_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VouchersApi->vouchers_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealer_db_models_voucher** | [**DealerDBModelsVoucher**](DealerDBModelsVoucher.md)| The voucher to add. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vouchers_put**
> vouchers_put(voucher_code, dealer_db_models_voucher)

Update a voucher

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_voucher import DealerDBModelsVoucher
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
    api_instance = openapi_client.VouchersApi(api_client)
    voucher_code = 'voucher_code_example' # str | The voucher code of the voucher to update.
    dealer_db_models_voucher = openapi_client.DealerDBModelsVoucher() # DealerDBModelsVoucher | The updated voucher.

    try:
        # Update a voucher
        api_instance.vouchers_put(voucher_code, dealer_db_models_voucher)
    except Exception as e:
        print("Exception when calling VouchersApi->vouchers_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**| The voucher code of the voucher to update. | 
 **dealer_db_models_voucher** | [**DealerDBModelsVoucher**](DealerDBModelsVoucher.md)| The updated voucher. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

