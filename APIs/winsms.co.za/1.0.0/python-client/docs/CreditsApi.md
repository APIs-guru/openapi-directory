# openapi_client.CreditsApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_credit_balance**](CreditsApi.md#get_credit_balance) | **GET** /credits/balance | Get your current WinSMS credit balance
[**transfer_credits**](CreditsApi.md#transfer_credits) | **POST** /credits/transfer | Transfer credits between main and sub accounts.


# **get_credit_balance**
> CreditBalanceResponse get_credit_balance()

Get your current WinSMS credit balance

Get the current remaining credit balance for the account.  ***Note*** - The credit balance is expressed as a value with a single decimal place. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.credit_balance_response import CreditBalanceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreditsApi(api_client)

    try:
        # Get your current WinSMS credit balance
        api_response = api_instance.get_credit_balance()
        print("The response of CreditsApi->get_credit_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditsApi->get_credit_balance: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CreditBalanceResponse**](CreditBalanceResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_credits**
> CreditTransferResponse transfer_credits(credit_transfer_details)

Transfer credits between main and sub accounts.

Transfer credits between accounts. - From Main account to Sub account.  - From Sub account to Main account.  - From Sub account to another Sub account.  Your WinSMS account number and sub account number/s can be obtained by logging in to the WinSMS Client Zone (www.winsms.co.za/cz) with the main account's credentials.  The main account number is on the home tab and the sub account numbers are under the sub accounts tab.  Account numbers should be submitted as integers. Do not add the 'W' prefix. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.credit_transfer_details import CreditTransferDetails
from openapi_client.models.credit_transfer_response import CreditTransferResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreditsApi(api_client)
    credit_transfer_details = openapi_client.CreditTransferDetails() # CreditTransferDetails | The details of the credit transfer. Sender account number, recipient account number, and number of credits to transfer.

    try:
        # Transfer credits between main and sub accounts.
        api_response = api_instance.transfer_credits(credit_transfer_details)
        print("The response of CreditsApi->transfer_credits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditsApi->transfer_credits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credit_transfer_details** | [**CreditTransferDetails**](CreditTransferDetails.md)| The details of the credit transfer. Sender account number, recipient account number, and number of credits to transfer. | 

### Return type

[**CreditTransferResponse**](CreditTransferResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**413** | Payload Too Large |  -  |
**415** | Unsupported Media Type |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

