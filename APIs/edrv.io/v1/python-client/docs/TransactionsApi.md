# openapi_client.TransactionsApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_transaction**](TransactionsApi.md#get_transaction) | **GET** /v1/transactions/{id} | 
[**get_transaction_cost**](TransactionsApi.md#get_transaction_cost) | **GET** /v1/transactions/{id}/cost | 
[**get_transactions**](TransactionsApi.md#get_transactions) | **GET** /v1/transactions | 


# **get_transaction**
> get_transaction(id, include_chargestation=include_chargestation, include_evse=include_evse, include_connector=include_connector, include_driver=include_driver, include_token=include_token, include_reservation=include_reservation, include_organization=include_organization, include_rate=include_rate)



Get a specific transaction

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionsApi(api_client)
    id = 'id_example' # str | The transaction id that needs to be fetched
    include_chargestation = True # bool | Populate chargestation (optional)
    include_evse = True # bool | Populate evse (optional)
    include_connector = True # bool | Populate connector (optional)
    include_driver = True # bool | Populate driver (optional)
    include_token = True # bool | Populate token (optional)
    include_reservation = True # bool | Populate reservation (optional)
    include_organization = True # bool | Populate organization (optional)
    include_rate = True # bool | Populate rate (optional)

    try:
        api_instance.get_transaction(id, include_chargestation=include_chargestation, include_evse=include_evse, include_connector=include_connector, include_driver=include_driver, include_token=include_token, include_reservation=include_reservation, include_organization=include_organization, include_rate=include_rate)
    except Exception as e:
        print("Exception when calling TransactionsApi->get_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The transaction id that needs to be fetched | 
 **include_chargestation** | **bool**| Populate chargestation | [optional] 
 **include_evse** | **bool**| Populate evse | [optional] 
 **include_connector** | **bool**| Populate connector | [optional] 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_token** | **bool**| Populate token | [optional] 
 **include_reservation** | **bool**| Populate reservation | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 
 **include_rate** | **bool**| Populate rate | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transaction object |  -  |
**401** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transaction_cost**
> get_transaction_cost(id)



Get a specific transaction's cost

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionsApi(api_client)
    id = 'id_example' # str | The transaction id that needs to be fetched

    try:
        api_instance.get_transaction_cost(id)
    except Exception as e:
        print("Exception when calling TransactionsApi->get_transaction_cost: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The transaction id that needs to be fetched | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transaction&#39;s cost object |  -  |
**401** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transactions**
> GetTransactions200Response get_transactions(status=status, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_chargestation=include_chargestation, include_evse=include_evse, include_connector=include_connector, include_driver=include_driver, include_token=include_token, include_reservation=include_reservation, include_organization=include_organization, include_rate=include_rate)



Get a list of transactions

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_transactions200_response import GetTransactions200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionsApi(api_client)
    status = 'status_example' # str | Started to get only active transactions (optional)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_chargestation = True # bool | Populate chargestation (optional)
    include_evse = True # bool | Populate evse (optional)
    include_connector = True # bool | Populate connector (optional)
    include_driver = True # bool | Populate driver (optional)
    include_token = True # bool | Populate token (optional)
    include_reservation = True # bool | Populate reservation (optional)
    include_organization = True # bool | Populate organization (optional)
    include_rate = True # bool | Populate rate (optional)

    try:
        api_response = api_instance.get_transactions(status=status, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_chargestation=include_chargestation, include_evse=include_evse, include_connector=include_connector, include_driver=include_driver, include_token=include_token, include_reservation=include_reservation, include_organization=include_organization, include_rate=include_rate)
        print("The response of TransactionsApi->get_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->get_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Started to get only active transactions | [optional] 
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_chargestation** | **bool**| Populate chargestation | [optional] 
 **include_evse** | **bool**| Populate evse | [optional] 
 **include_connector** | **bool**| Populate connector | [optional] 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_token** | **bool**| Populate token | [optional] 
 **include_reservation** | **bool**| Populate reservation | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 
 **include_rate** | **bool**| Populate rate | [optional] 

### Return type

[**GetTransactions200Response**](GetTransactions200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of transaction objects |  -  |
**400** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

