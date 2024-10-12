# openapi_client.RePowerTransferReversalApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repower_reversal_post2**](RePowerTransferReversalApi.md#repower_reversal_post2) | **POST** /repower/v2/repowerreversal | 


# **repower_reversal_post2**
> Repowerreversal11Wrapper repower_reversal_post2(repower_reversal_request=repower_reversal_request)



A Transfer Reversal is a request to reverse a previously submitted Mastercard rePower Transfer, and is only available in extremely limited circumstances.  Reversal Processing : A rePower transaction reversal may be submitted in the event of a documented clerical error. The rePower transaction reversal must be submitted within 15 minutes of the time the original rePower transaction was authorized.  Use this resource to reverse a previously submitted rePower Transfer. 

### Example


```python
import openapi_client
from openapi_client.models.repowerreversal11_wrapper import Repowerreversal11Wrapper
from openapi_client.models.repowerreversalrequest10_wrapper import Repowerreversalrequest10Wrapper
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
    api_instance = openapi_client.RePowerTransferReversalApi(api_client)
    repower_reversal_request = openapi_client.Repowerreversalrequest10Wrapper() # Repowerreversalrequest10Wrapper | Contains the details of the repower reversal request message. (optional)

    try:
        api_response = api_instance.repower_reversal_post2(repower_reversal_request=repower_reversal_request)
        print("The response of RePowerTransferReversalApi->repower_reversal_post2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RePowerTransferReversalApi->repower_reversal_post2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repower_reversal_request** | [**Repowerreversalrequest10Wrapper**](Repowerreversalrequest10Wrapper.md)| Contains the details of the repower reversal request message. | [optional] 

### Return type

[**Repowerreversal11Wrapper**](Repowerreversal11Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

