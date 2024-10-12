# openapi_client.AdminsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_admin_1**](AdminsApi.md#create_organization_admin_1) | **POST** /organizations/{organizationId}/admins | Create a new dashboard administrator
[**delete_organization_admin_1**](AdminsApi.md#delete_organization_admin_1) | **DELETE** /organizations/{organizationId}/admins/{adminId} | Revoke all access for a dashboard administrator within this organization
[**get_organization_admins_1**](AdminsApi.md#get_organization_admins_1) | **GET** /organizations/{organizationId}/admins | List the dashboard administrators in this organization
[**update_organization_admin_1**](AdminsApi.md#update_organization_admin_1) | **PUT** /organizations/{organizationId}/admins/{adminId} | Update an administrator


# **create_organization_admin_1**
> object create_organization_admin_1(organization_id, create_organization_admin_request)

Create a new dashboard administrator

Create a new dashboard administrator

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_admin_request import CreateOrganizationAdminRequest
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
    api_instance = openapi_client.AdminsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_admin_request = openapi_client.CreateOrganizationAdminRequest() # CreateOrganizationAdminRequest | 

    try:
        # Create a new dashboard administrator
        api_response = api_instance.create_organization_admin_1(organization_id, create_organization_admin_request)
        print("The response of AdminsApi->create_organization_admin_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminsApi->create_organization_admin_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_admin_request** | [**CreateOrganizationAdminRequest**](CreateOrganizationAdminRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_admin_1**
> delete_organization_admin_1(organization_id, admin_id)

Revoke all access for a dashboard administrator within this organization

Revoke all access for a dashboard administrator within this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.AdminsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    admin_id = 'admin_id_example' # str | 

    try:
        # Revoke all access for a dashboard administrator within this organization
        api_instance.delete_organization_admin_1(organization_id, admin_id)
    except Exception as e:
        print("Exception when calling AdminsApi->delete_organization_admin_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **admin_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_admins_1**
> List[object] get_organization_admins_1(organization_id)

List the dashboard administrators in this organization

List the dashboard administrators in this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.AdminsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the dashboard administrators in this organization
        api_response = api_instance.get_organization_admins_1(organization_id)
        print("The response of AdminsApi->get_organization_admins_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminsApi->get_organization_admins_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

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

# **update_organization_admin_1**
> object update_organization_admin_1(organization_id, admin_id, update_organization_admin_request=update_organization_admin_request)

Update an administrator

Update an administrator

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_admin_request import UpdateOrganizationAdminRequest
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
    api_instance = openapi_client.AdminsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    admin_id = 'admin_id_example' # str | 
    update_organization_admin_request = openapi_client.UpdateOrganizationAdminRequest() # UpdateOrganizationAdminRequest |  (optional)

    try:
        # Update an administrator
        api_response = api_instance.update_organization_admin_1(organization_id, admin_id, update_organization_admin_request=update_organization_admin_request)
        print("The response of AdminsApi->update_organization_admin_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminsApi->update_organization_admin_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **admin_id** | **str**|  | 
 **update_organization_admin_request** | [**UpdateOrganizationAdminRequest**](UpdateOrganizationAdminRequest.md)|  | [optional] 

### Return type

**object**

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

