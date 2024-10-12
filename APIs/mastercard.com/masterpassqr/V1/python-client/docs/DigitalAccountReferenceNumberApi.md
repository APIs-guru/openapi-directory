# openapi_client.DigitalAccountReferenceNumberApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_digital_accnt_ref_num**](DigitalAccountReferenceNumberApi.md#create_digital_accnt_ref_num) | **POST** /send/v1/{partnerId}/digital-account | Used to create a digital account reference number from Incontrol 


# **create_digital_accnt_ref_num**
> DigitalAccount87Wrapper create_digital_accnt_ref_num(partner_id, digital_account=digital_account)

Used to create a digital account reference number from Incontrol 

Used to create a digital account reference number from Incontrol 

### Example


```python
import openapi_client
from openapi_client.models.digital_account86_wrapper import DigitalAccount86Wrapper
from openapi_client.models.digital_account87_wrapper import DigitalAccount87Wrapper
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
    api_instance = openapi_client.DigitalAccountReferenceNumberApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id.   Type: Alphanumeric Special  [a-zA-Z0-9_-], Length: 32
    digital_account = openapi_client.DigitalAccount86Wrapper() # DigitalAccount86Wrapper | Contains the details of the request message. (optional)

    try:
        # Used to create a digital account reference number from Incontrol 
        api_response = api_instance.create_digital_accnt_ref_num(partner_id, digital_account=digital_account)
        print("The response of DigitalAccountReferenceNumberApi->create_digital_accnt_ref_num:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalAccountReferenceNumberApi->create_digital_accnt_ref_num: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id.   Type: Alphanumeric Special  [a-zA-Z0-9_-], Length: 32 | 
 **digital_account** | [**DigitalAccount86Wrapper**](DigitalAccount86Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**DigitalAccount87Wrapper**](DigitalAccount87Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details for a create digital account reference number |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

