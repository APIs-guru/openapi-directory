# openapi_client.CustomerApi

All URIs are relative to *https://event.jirafe.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_customer**](CustomerApi.md#post_customer) | **POST** /{siteId}/customer | Send a customer for the given site


# **post_customer**
> post_customer(site_id, body)

Send a customer for the given site

### Example

* OAuth Authentication (oauth2_accessCode):
* OAuth Authentication (oauth2_implicit):

```python
import openapi_client
from openapi_client.models.customer import Customer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://event.jirafe.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://event.jirafe.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    site_id = 'site_id_example' # str | ID site to send the event
    body = openapi_client.Customer() # Customer | customer json for the event

    try:
        # Send a customer for the given site
        api_instance.post_customer(site_id, body)
    except Exception as e:
        print("Exception when calling CustomerApi->post_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**| ID site to send the event | 
 **body** | [**Customer**](Customer.md)| customer json for the event | 

### Return type

void (empty response body)

### Authorization

[oauth2_accessCode](../README.md#oauth2_accessCode), [oauth2_implicit](../README.md#oauth2_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**400** | validation |  -  |
**403** | authorization |  -  |
**503** | unknown |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

