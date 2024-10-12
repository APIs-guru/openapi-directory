# openapi_client.PreflightApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auto_check_in**](PreflightApi.md#auto_check_in) | **PUT** /preflight/autocheckin/{ticketnumber} | Auto Check-In


# **auto_check_in**
> str auto_check_in(ticketnumber, email_address, accept)

Auto Check-In

Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PreflightApi(api_client)
    ticketnumber = 'ticketnumber_example' # str | Ticket number
    email_address = 'email_address_example' # str | Email address
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")

    try:
        # Auto Check-In
        api_response = api_instance.auto_check_in(ticketnumber, email_address, accept)
        print("The response of PreflightApi->auto_check_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreflightApi->auto_check_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketnumber** | **str**| Ticket number | 
 **email_address** | **str**| Email address | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

