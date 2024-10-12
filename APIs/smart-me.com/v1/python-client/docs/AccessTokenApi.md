# openapi_client.AccessTokenApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_token_put**](AccessTokenApi.md#access_token_put) | **PUT** /api/AccessToken | Creates a Access Token to write on a Card (e.g. NFC)


# **access_token_put**
> str access_token_put(access_token_to_put)

Creates a Access Token to write on a Card (e.g. NFC)

Creates a Access Token to write on a Card (e.g. NFC)

### Example


```python
import openapi_client
from openapi_client.models.access_token_to_put import AccessTokenToPut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccessTokenApi(api_client)
    access_token_to_put = openapi_client.AccessTokenToPut() # AccessTokenToPut | 

    try:
        # Creates a Access Token to write on a Card (e.g. NFC)
        api_response = api_instance.access_token_put(access_token_to_put)
        print("The response of AccessTokenApi->access_token_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessTokenApi->access_token_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token_to_put** | [**AccessTokenToPut**](AccessTokenToPut.md)|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

