# openapi_client.AddressApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**address_validate**](AddressApi.md#address_validate) | **POST** /providers/Microsoft.Billing/validateAddress | 


# **address_validate**
> ValidateAddressResponse address_validate(api_version, address)



Validates the address.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.address_details import AddressDetails
from openapi_client.models.validate_address_response import ValidateAddressResponse
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
    api_instance = openapi_client.AddressApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    address = openapi_client.AddressDetails() # AddressDetails | 

    try:
        api_response = api_instance.address_validate(api_version, address)
        print("The response of AddressApi->address_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressApi->address_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **address** | [**AddressDetails**](AddressDetails.md)|  | 

### Return type

[**ValidateAddressResponse**](ValidateAddressResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

