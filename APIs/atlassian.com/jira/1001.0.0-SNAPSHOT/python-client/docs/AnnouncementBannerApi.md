# openapi_client.AnnouncementBannerApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_banner**](AnnouncementBannerApi.md#get_banner) | **GET** /rest/api/3/announcementBanner | Get announcement banner configuration
[**set_banner**](AnnouncementBannerApi.md#set_banner) | **PUT** /rest/api/3/announcementBanner | Update announcement banner configuration


# **get_banner**
> AnnouncementBannerConfiguration get_banner()

Get announcement banner configuration

Returns the current announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.announcement_banner_configuration import AnnouncementBannerConfiguration
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
    api_instance = openapi_client.AnnouncementBannerApi(api_client)

    try:
        # Get announcement banner configuration
        api_response = api_instance.get_banner()
        print("The response of AnnouncementBannerApi->get_banner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnnouncementBannerApi->get_banner: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AnnouncementBannerConfiguration**](AnnouncementBannerConfiguration.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_banner**
> object set_banner(announcement_banner_configuration_update)

Update announcement banner configuration

Updates the announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.announcement_banner_configuration_update import AnnouncementBannerConfigurationUpdate
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
    api_instance = openapi_client.AnnouncementBannerApi(api_client)
    announcement_banner_configuration_update = {"isDismissible":false,"isEnabled":true,"message":"This is a public, enabled, non-dismissible banner, set using the API","visibility":"public"} # AnnouncementBannerConfigurationUpdate | 

    try:
        # Update announcement banner configuration
        api_response = api_instance.set_banner(announcement_banner_configuration_update)
        print("The response of AnnouncementBannerApi->set_banner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnnouncementBannerApi->set_banner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **announcement_banner_configuration_update** | [**AnnouncementBannerConfigurationUpdate**](AnnouncementBannerConfigurationUpdate.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if an invalid parameter is passed. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

