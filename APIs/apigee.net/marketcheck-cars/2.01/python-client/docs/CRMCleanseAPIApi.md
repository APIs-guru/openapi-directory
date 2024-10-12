# openapi_client.CRMCleanseAPIApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crm_check**](CRMCleanseAPIApi.md#crm_check) | **GET** /crm_check/car/{vin} | CRM check of a particular vin


# **crm_check**
> CRMResponse crm_check(vin, sale_date, api_key=api_key)

CRM check of a particular vin

Check whether particular vin has had a listing after stipulated date or not

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.crm_response import CRMResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CRMCleanseAPIApi(api_client)
    vin = 'vin_example' # str | The VIN to identify the car. Must be a valid 17 char VIN
    sale_date = 'sale_date_example' # str | sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # CRM check of a particular vin
        api_response = api_instance.crm_check(vin, sale_date, api_key=api_key)
        print("The response of CRMCleanseAPIApi->crm_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CRMCleanseAPIApi->crm_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **str**| The VIN to identify the car. Must be a valid 17 char VIN | 
 **sale_date** | **str**| sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**CRMResponse**](CRMResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CRM check for given vin |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

