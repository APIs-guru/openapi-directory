# openapi_client.FraudManagementApi

All URIs are relative to *https://api.nexmo.com/verify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_unblock**](FraudManagementApi.md#network_unblock) | **POST** /network-unblock | Request a network unblock


# **network_unblock**
> NetworkUnblockResponseOk network_unblock(network_unblock)

Request a network unblock

Request to unblock a network that has been blocked due to potential fraud detection <div class=\"Vlt-callout Vlt-callout--critical\">   <div class=\"Vlt-callout__content\">     <h4>Network Unblock is switched off by default.</h4>     Please contact Sales to enable the Network Unblock API for your account.   </div> </div>

### Example


```python
import openapi_client
from openapi_client.models.network_unblock import NetworkUnblock
from openapi_client.models.network_unblock_response_ok import NetworkUnblockResponseOk
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/verify
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/verify"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FraudManagementApi(api_client)
    network_unblock = openapi_client.NetworkUnblock() # NetworkUnblock | 

    try:
        # Request a network unblock
        api_response = api_instance.network_unblock(network_unblock)
        print("The response of FraudManagementApi->network_unblock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FraudManagementApi->network_unblock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_unblock** | [**NetworkUnblock**](NetworkUnblock.md)|  | 

### Return type

[**NetworkUnblockResponseOk**](NetworkUnblockResponseOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**429** | Rate Limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

