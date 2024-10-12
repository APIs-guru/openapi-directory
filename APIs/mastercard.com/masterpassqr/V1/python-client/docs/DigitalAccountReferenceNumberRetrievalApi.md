# openapi_client.DigitalAccountReferenceNumberRetrievalApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_digital_accnt_ref_num_list**](DigitalAccountReferenceNumberRetrievalApi.md#retrieve_digital_accnt_ref_num_list) | **POST** /send/v1/{partnerId}/digital-account/search | Used to retreive a digital account reference list from Incontrol 


# **retrieve_digital_accnt_ref_num_list**
> DigitalAccount90Wrapper retrieve_digital_accnt_ref_num_list(partner_id, digital_account=digital_account)

Used to retreive a digital account reference list from Incontrol 

Used to retreive a digital account reference list from Incontrol 

### Example


```python
import openapi_client
from openapi_client.models.digital_account89_wrapper import DigitalAccount89Wrapper
from openapi_client.models.digital_account90_wrapper import DigitalAccount90Wrapper
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
    api_instance = openapi_client.DigitalAccountReferenceNumberRetrievalApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    digital_account = openapi_client.DigitalAccount89Wrapper() # DigitalAccount89Wrapper | Contains the details of the request message. (optional)

    try:
        # Used to retreive a digital account reference list from Incontrol 
        api_response = api_instance.retrieve_digital_accnt_ref_num_list(partner_id, digital_account=digital_account)
        print("The response of DigitalAccountReferenceNumberRetrievalApi->retrieve_digital_accnt_ref_num_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalAccountReferenceNumberRetrievalApi->retrieve_digital_accnt_ref_num_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **digital_account** | [**DigitalAccount89Wrapper**](DigitalAccount89Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**DigitalAccount90Wrapper**](DigitalAccount90Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details for a retrieve digital account reference number |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

