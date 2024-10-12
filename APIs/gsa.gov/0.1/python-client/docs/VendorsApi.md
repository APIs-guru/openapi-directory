# openapi_client.VendorsApi

All URIs are relative to *https://discovery.gsa.gov*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_vendors_get**](VendorsApi.md#list_vendors_get) | **GET** /api/vendors/ | This endpoint returns a list of vendors filtered by a NAICS code


# **list_vendors_get**
> object list_vendors_get(naics, setasides=setasides, vehicle=vehicle)

This endpoint returns a list of vendors filtered by a NAICS code

<p>This endpoint returns a list of vendors filtered by a NAICS code. The NAICS code maps to an OASIS pool and is used to retrieve vendors in that pool only.</p> <p>OASIS pools are groupings of NAICS codes that have the same small business size standard. Because contracts solicited to OASIS vendors can only be issued to one pool, much of the data is presented as part of a pool grouping. Using the NAICS code is a shortcut, so that you don't have to explicitly map the NAICS code to a pool in OASIS yourself.</p> <p>Vendors can also be filtered by a particular setaside. Valid values for the setasides are two-character codes which include:</p> <ul> <li>A6 (8(a))</li> <li>XX (Hubzone)</li> <li>QF (service disabled veteran owned)</li> <li>A2 (women owned)</li> <li>A5 (veteran owned)</li> <li>27 (small disadvantaged business).</li> </ul>

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discovery.gsa.gov
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discovery.gsa.gov"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VendorsApi(api_client)
    naics = 'naics_example' # str | a six digit NAICS code (required)
    setasides = ['setasides_example'] # List[str] | a comma delimited list of two character setaside codes to filter by.  Ex. setasides=A6,A5  will filter by 8a and veteran owned business. (optional)
    vehicle = 'vehicle_example' # str | Choices are either oasis or oasissb. Will filter vendors by their presence in either the OASIS unrestricted vehicle or the OASIS Small Business vehicle. (optional)

    try:
        # This endpoint returns a list of vendors filtered by a NAICS code
        api_response = api_instance.list_vendors_get(naics, setasides=setasides, vehicle=vehicle)
        print("The response of VendorsApi->list_vendors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VendorsApi->list_vendors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **naics** | **str**| a six digit NAICS code (required) | 
 **setasides** | [**List[str]**](str.md)| a comma delimited list of two character setaside codes to filter by.  Ex. setasides&#x3D;A6,A5  will filter by 8a and veteran owned business. | [optional] 
 **vehicle** | **str**| Choices are either oasis or oasissb. Will filter vendors by their presence in either the OASIS unrestricted vehicle or the OASIS Small Business vehicle. | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

