# openapi_client.LicenseMetricsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_approximate_application_license_count**](LicenseMetricsApi.md#get_approximate_application_license_count) | **GET** /rest/api/3/license/approximateLicenseCount/product/{applicationKey} | Get approximate application license count
[**get_approximate_license_count**](LicenseMetricsApi.md#get_approximate_license_count) | **GET** /rest/api/3/license/approximateLicenseCount | Get approximate license count


# **get_approximate_application_license_count**
> LicenseMetric get_approximate_application_license_count(application_key)

Get approximate application license count

Returns the total approximate user account for a specific `jira licence application key`. Please note this information is cached with a 7-day lifecycle and could be stale at the time of call.  #### Application Key ####  An application key represents a specific version of Jira. See \\{@link ApplicationKey\\} for details  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.license_metric import LicenseMetric
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
    api_instance = openapi_client.LicenseMetricsApi(api_client)
    application_key = 'application_key_example' # str | 

    try:
        # Get approximate application license count
        api_response = api_instance.get_approximate_application_license_count(application_key)
        print("The response of LicenseMetricsApi->get_approximate_application_license_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseMetricsApi->get_approximate_application_license_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_key** | **str**|  | 

### Return type

[**LicenseMetric**](LicenseMetric.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to complete this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_approximate_license_count**
> LicenseMetric get_approximate_license_count()

Get approximate license count

Returns the total approximate user account across all jira licenced application keys. Please note this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.license_metric import LicenseMetric
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
    api_instance = openapi_client.LicenseMetricsApi(api_client)

    try:
        # Get approximate license count
        api_response = api_instance.get_approximate_license_count()
        print("The response of LicenseMetricsApi->get_approximate_license_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseMetricsApi->get_approximate_license_count: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**LicenseMetric**](LicenseMetric.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to complete this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

