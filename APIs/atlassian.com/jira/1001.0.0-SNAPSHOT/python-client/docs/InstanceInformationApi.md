# openapi_client.InstanceInformationApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_license**](InstanceInformationApi.md#get_license) | **GET** /rest/api/3/instance/license | Get license


# **get_license**
> License get_license()

Get license

Returns licensing information about the Jira instance.  **[Permissions](#permissions) required:** None.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.license import License
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InstanceInformationApi(api_client)

    try:
        # Get license
        api_response = api_instance.get_license()
        print("The response of InstanceInformationApi->get_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceInformationApi->get_license: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**License**](License.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

