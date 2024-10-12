# openapi_client.RecipientTransfersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipient_transfers_accept**](RecipientTransfersApi.md#recipient_transfers_accept) | **POST** /providers/Microsoft.Billing/transfers/{transferName}/acceptTransfer | Accepts the transfer with given transfer Id.
[**recipient_transfers_decline**](RecipientTransfersApi.md#recipient_transfers_decline) | **POST** /providers/Microsoft.Billing/transfers/{transferName}/declineTransfer | Declines the transfer with given transfer Id.
[**recipient_transfers_get**](RecipientTransfersApi.md#recipient_transfers_get) | **GET** /providers/Microsoft.Billing/transfers/{transferName}/ | Gets the transfer with given transfer Id.
[**recipient_transfers_list**](RecipientTransfersApi.md#recipient_transfers_list) | **GET** /providers/Microsoft.Billing/transfers | Lists the transfers received by caller.


# **recipient_transfers_accept**
> RecipientTransferDetails recipient_transfers_accept(transfer_name, body)

Accepts the transfer with given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.accept_transfer_request import AcceptTransferRequest
from openapi_client.models.recipient_transfer_details import RecipientTransferDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecipientTransfersApi(api_client)
    transfer_name = 'transfer_name_example' # str | Transfer Name.
    body = openapi_client.AcceptTransferRequest() # AcceptTransferRequest | Accept transfer parameters.

    try:
        # Accepts the transfer with given transfer Id.
        api_response = api_instance.recipient_transfers_accept(transfer_name, body)
        print("The response of RecipientTransfersApi->recipient_transfers_accept:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipientTransfersApi->recipient_transfers_accept: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_name** | **str**| Transfer Name. | 
 **body** | [**AcceptTransferRequest**](AcceptTransferRequest.md)| Accept transfer parameters. | 

### Return type

[**RecipientTransferDetails**](RecipientTransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the accepted transfer. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipient_transfers_decline**
> RecipientTransferDetails recipient_transfers_decline(transfer_name)

Declines the transfer with given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recipient_transfer_details import RecipientTransferDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecipientTransfersApi(api_client)
    transfer_name = 'transfer_name_example' # str | Transfer Name.

    try:
        # Declines the transfer with given transfer Id.
        api_response = api_instance.recipient_transfers_decline(transfer_name)
        print("The response of RecipientTransfersApi->recipient_transfers_decline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipientTransfersApi->recipient_transfers_decline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_name** | **str**| Transfer Name. | 

### Return type

[**RecipientTransferDetails**](RecipientTransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the declined transfer. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipient_transfers_get**
> RecipientTransferDetails recipient_transfers_get(transfer_name)

Gets the transfer with given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recipient_transfer_details import RecipientTransferDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecipientTransfersApi(api_client)
    transfer_name = 'transfer_name_example' # str | Transfer Name.

    try:
        # Gets the transfer with given transfer Id.
        api_response = api_instance.recipient_transfers_get(transfer_name)
        print("The response of RecipientTransfersApi->recipient_transfers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipientTransfersApi->recipient_transfers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_name** | **str**| Transfer Name. | 

### Return type

[**RecipientTransferDetails**](RecipientTransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the transfers with given Id. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipient_transfers_list**
> RecipientTransferDetailsListResult recipient_transfers_list()

Lists the transfers received by caller.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recipient_transfer_details_list_result import RecipientTransferDetailsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecipientTransfersApi(api_client)

    try:
        # Lists the transfers received by caller.
        api_response = api_instance.recipient_transfers_list()
        print("The response of RecipientTransfersApi->recipient_transfers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipientTransfersApi->recipient_transfers_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RecipientTransferDetailsListResult**](RecipientTransferDetailsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of transfers received by caller. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

