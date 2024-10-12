# openapi_client.PrivilegeApi

All URIs are relative to *https://api.ebay.com/sell/account/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_privileges**](PrivilegeApi.md#get_privileges) | **GET** /privilege | 


# **get_privileges**
> SellingPrivileges get_privileges()



This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.selling_privileges import SellingPrivileges
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivilegeApi(api_client)

    try:
        api_response = api_instance.get_privileges()
        print("The response of PrivilegeApi->get_privileges:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivilegeApi->get_privileges: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SellingPrivileges**](SellingPrivileges.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

