# openapi_client.ThirdPartyTransmissionApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_third_party_transaction**](ThirdPartyTransmissionApi.md#delete_third_party_transaction) | **DELETE** /Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId} | Delete third party transaction
[**get_third_party_transaction**](ThirdPartyTransmissionApi.md#get_third_party_transaction) | **GET** /Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId} | Get a third party transaction
[**get_third_party_transactions**](ThirdPartyTransmissionApi.md#get_third_party_transactions) | **GET** /Employer/{EmployerId}/ThirdPartyTransactions | Get all third party transaction links


# **delete_third_party_transaction**
> delete_third_party_transaction(employer_id, third_party_transaction_id, authorization, api_version)

Delete third party transaction

Deletes a third party transaction record from the given resource location

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransmissionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    third_party_transaction_id = 'third_party_transaction_id_example' # str | The third party transaction unique identifier. E.g TP001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete third party transaction
        api_instance.delete_third_party_transaction(employer_id, third_party_transaction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling ThirdPartyTransmissionApi->delete_third_party_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **third_party_transaction_id** | **str**| The third party transaction unique identifier. E.g TP001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_third_party_transaction**
> ThirdPartyTransaction get_third_party_transaction(employer_id, third_party_transaction_id, authorization, api_version)

Get a third party transaction

Get a third party transaction

### Example


```python
import openapi_client
from openapi_client.models.third_party_transaction import ThirdPartyTransaction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransmissionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    third_party_transaction_id = 'third_party_transaction_id_example' # str | The third party transaction unique identifier. E.g TP001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get a third party transaction
        api_response = api_instance.get_third_party_transaction(employer_id, third_party_transaction_id, authorization, api_version)
        print("The response of ThirdPartyTransmissionApi->get_third_party_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransmissionApi->get_third_party_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **third_party_transaction_id** | **str**| The third party transaction unique identifier. E.g TP001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**ThirdPartyTransaction**](ThirdPartyTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The third party transaction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_third_party_transactions**
> LinkCollection get_third_party_transactions(employer_id, authorization, api_version)

Get all third party transaction links

Get all third party transaction links

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransmissionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all third party transaction links
        api_response = api_instance.get_third_party_transactions(employer_id, authorization, api_version)
        print("The response of ThirdPartyTransmissionApi->get_third_party_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransmissionApi->get_third_party_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

