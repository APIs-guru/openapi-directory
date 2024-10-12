# openapi_client.RePowerTransferApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repower_post2**](RePowerTransferApi.md#repower_post2) | **POST** /repower/v2/repower | 


# **repower_post2**
> Repower5Wrapper repower_post2(repower_request=repower_request)



Mastercard rePower empowers consumers to instantly add money to eligible Mastercard cards. Money is available immediately for expenditures anywhere Mastercard prepaid account is accepted. The ease with which cardholders can convert cash to prepaid card funds turns their reloadable prepaid cards into valuable and practical financial tools. Making the reload process simple and accessible provides merchants with an opportunity to increase cardholder traffic. Unlike other top-up services, merchants have the flexibility to set their own reload fees.  This resource streamlines development efforts to offer Mastercard rePower services, through quick and convenient web services with the following benefits: 1)Savings in development and operational costs associated with implementing a standard MIP connection.  2)Requires support for only a single acquiring interface.  3)Leverages existing processing messages and transaction codes  4)Mastercard provides a net settlement guarantee for each reload transaction  5)Supports EMV, PayPass & MDES transactions.  This resource facilitates the ability for cardholders to reload their prepaid cards easily and securely.   

### Example


```python
import openapi_client
from openapi_client.models.repower5_wrapper import Repower5Wrapper
from openapi_client.models.repowerrequest1_wrapper import Repowerrequest1Wrapper
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
    api_instance = openapi_client.RePowerTransferApi(api_client)
    repower_request = openapi_client.Repowerrequest1Wrapper() # Repowerrequest1Wrapper | Contains the details of the repower request message. (optional)

    try:
        api_response = api_instance.repower_post2(repower_request=repower_request)
        print("The response of RePowerTransferApi->repower_post2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RePowerTransferApi->repower_post2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repower_request** | [**Repowerrequest1Wrapper**](Repowerrequest1Wrapper.md)| Contains the details of the repower request message. | [optional] 

### Return type

[**Repower5Wrapper**](Repower5Wrapper.md)

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

