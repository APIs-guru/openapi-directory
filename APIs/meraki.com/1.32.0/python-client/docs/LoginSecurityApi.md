# openapi_client.LoginSecurityApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_login_security_1**](LoginSecurityApi.md#get_organization_login_security_1) | **GET** /organizations/{organizationId}/loginSecurity | Returns the login security settings for an organization.
[**update_organization_login_security_1**](LoginSecurityApi.md#update_organization_login_security_1) | **PUT** /organizations/{organizationId}/loginSecurity | Update the login security settings for an organization


# **get_organization_login_security_1**
> GetOrganizationLoginSecurity200Response get_organization_login_security_1(organization_id)

Returns the login security settings for an organization.

Returns the login security settings for an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_login_security200_response import GetOrganizationLoginSecurity200Response
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
    api_instance = openapi_client.LoginSecurityApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns the login security settings for an organization.
        api_response = api_instance.get_organization_login_security_1(organization_id)
        print("The response of LoginSecurityApi->get_organization_login_security_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginSecurityApi->get_organization_login_security_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationLoginSecurity200Response**](GetOrganizationLoginSecurity200Response.md)

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

# **update_organization_login_security_1**
> GetOrganizationLoginSecurity200Response update_organization_login_security_1(organization_id, update_organization_login_security_request=update_organization_login_security_request)

Update the login security settings for an organization

Update the login security settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_login_security200_response import GetOrganizationLoginSecurity200Response
from openapi_client.models.update_organization_login_security_request import UpdateOrganizationLoginSecurityRequest
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
    api_instance = openapi_client.LoginSecurityApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_login_security_request = openapi_client.UpdateOrganizationLoginSecurityRequest() # UpdateOrganizationLoginSecurityRequest |  (optional)

    try:
        # Update the login security settings for an organization
        api_response = api_instance.update_organization_login_security_1(organization_id, update_organization_login_security_request=update_organization_login_security_request)
        print("The response of LoginSecurityApi->update_organization_login_security_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginSecurityApi->update_organization_login_security_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_login_security_request** | [**UpdateOrganizationLoginSecurityRequest**](UpdateOrganizationLoginSecurityRequest.md)|  | [optional] 

### Return type

[**GetOrganizationLoginSecurity200Response**](GetOrganizationLoginSecurity200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

