# openapi_client.MerchantRetrievalApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_merchant_transfer_by_id**](MerchantRetrievalApi.md#get_merchant_transfer_by_id) | **GET** /send/#env/v1/partners/{partnerId}/merchant/transfers/{transferId} | Purpose of this service is to retrieve the Transfer resource associated with the specified transfer-id.
[**get_merchant_transfer_by_ref**](MerchantRetrievalApi.md#get_merchant_transfer_by_ref) | **GET** /send/#env/v1/partners/{partnerId}/merchant/transfers | Purpose of this service is to retrieve the Transfer resource associated with a specified transfer_reference value.


# **get_merchant_transfer_by_id**
> MerchantTransfer54Wrapper get_merchant_transfer_by_id(partner_id, transfer_id)

Purpose of this service is to retrieve the Transfer resource associated with the specified transfer-id.

Purpose of this service is to retrieve the Transfer resource associated with the specified transfer-id.

### Example


```python
import openapi_client
from openapi_client.models.merchant_transfer54_wrapper import MerchantTransfer54Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchantRetrievalApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    transfer_id = 'transfer_id_example' # str | Path Param - Valid transfer id

    try:
        # Purpose of this service is to retrieve the Transfer resource associated with the specified transfer-id.
        api_response = api_instance.get_merchant_transfer_by_id(partner_id, transfer_id)
        print("The response of MerchantRetrievalApi->get_merchant_transfer_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantRetrievalApi->get_merchant_transfer_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **transfer_id** | **str**| Path Param - Valid transfer id | 

### Return type

[**MerchantTransfer54Wrapper**](MerchantTransfer54Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details for a merchant transfer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_merchant_transfer_by_ref**
> MerchantTransfers69Wrapper get_merchant_transfer_by_ref(partner_id, ref)

Purpose of this service is to retrieve the Transfer resource associated with a specified transfer_reference value.

Purpose of this service is to retrieve the Transfer resource associated with a specified transfer_reference value.

### Example


```python
import openapi_client
from openapi_client.models.merchant_transfers69_wrapper import MerchantTransfers69Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchantRetrievalApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    ref = 'ref_example' # str | Query Param - Is the client specified transfer reference when initiating the transfer. Allowable characters are alphanumeric and * , - . _ ~. Details- 6-40 Example- DEF123456

    try:
        # Purpose of this service is to retrieve the Transfer resource associated with a specified transfer_reference value.
        api_response = api_instance.get_merchant_transfer_by_ref(partner_id, ref)
        print("The response of MerchantRetrievalApi->get_merchant_transfer_by_ref:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantRetrievalApi->get_merchant_transfer_by_ref: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **ref** | **str**| Query Param - Is the client specified transfer reference when initiating the transfer. Allowable characters are alphanumeric and * , - . _ ~. Details- 6-40 Example- DEF123456 | 

### Return type

[**MerchantTransfers69Wrapper**](MerchantTransfers69Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details for a merchant transfer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

