# openapi_client.MeApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_administered_identities_me_2**](MeApi.md#get_administered_identities_me_2) | **GET** /administered/identities/me | Returns the identity of the current user.


# **get_administered_identities_me_2**
> GetAdministeredIdentitiesMe200Response get_administered_identities_me_2()

Returns the identity of the current user.

Returns the identity of the current user.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_administered_identities_me200_response import GetAdministeredIdentitiesMe200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)

    try:
        # Returns the identity of the current user.
        api_response = api_instance.get_administered_identities_me_2()
        print("The response of MeApi->get_administered_identities_me_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->get_administered_identities_me_2: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAdministeredIdentitiesMe200Response**](GetAdministeredIdentitiesMe200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

