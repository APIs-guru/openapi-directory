# openapi_client.SAMLRolesApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_saml_role**](SAMLRolesApi.md#create_organization_saml_role) | **POST** /organizations/{organizationId}/samlRoles | Create a SAML role
[**get_organization_saml_role**](SAMLRolesApi.md#get_organization_saml_role) | **GET** /organizations/{organizationId}/samlRoles/{samlRoleId} | Return a SAML role
[**get_organization_saml_roles**](SAMLRolesApi.md#get_organization_saml_roles) | **GET** /organizations/{organizationId}/samlRoles | List the SAML roles for this organization
[**update_organization_saml_role**](SAMLRolesApi.md#update_organization_saml_role) | **PUT** /organizations/{organizationId}/samlRoles/{samlRoleId} | Update a SAML role


# **create_organization_saml_role**
> object create_organization_saml_role(organization_id, create_organization_saml_role_request)

Create a SAML role

Create a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_saml_role_request import CreateOrganizationSamlRoleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.SAMLRolesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_saml_role_request = openapi_client.CreateOrganizationSamlRoleRequest() # CreateOrganizationSamlRoleRequest | 

    try:
        # Create a SAML role
        api_response = api_instance.create_organization_saml_role(organization_id, create_organization_saml_role_request)
        print("The response of SAMLRolesApi->create_organization_saml_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SAMLRolesApi->create_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_saml_role_request** | [**CreateOrganizationSamlRoleRequest**](CreateOrganizationSamlRoleRequest.md)|  | 

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

# **get_organization_saml_role**
> object get_organization_saml_role(organization_id, saml_role_id)

Return a SAML role

Return a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.SAMLRolesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    saml_role_id = 'saml_role_id_example' # str | 

    try:
        # Return a SAML role
        api_response = api_instance.get_organization_saml_role(organization_id, saml_role_id)
        print("The response of SAMLRolesApi->get_organization_saml_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SAMLRolesApi->get_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **saml_role_id** | **str**|  | 

### Return type

**object**

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

# **get_organization_saml_roles**
> List[object] get_organization_saml_roles(organization_id)

List the SAML roles for this organization

List the SAML roles for this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.SAMLRolesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the SAML roles for this organization
        api_response = api_instance.get_organization_saml_roles(organization_id)
        print("The response of SAMLRolesApi->get_organization_saml_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SAMLRolesApi->get_organization_saml_roles: %s\n" % e)
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

# **update_organization_saml_role**
> object update_organization_saml_role(organization_id, saml_role_id, update_organization_saml_role_request=update_organization_saml_role_request)

Update a SAML role

Update a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_saml_role_request import UpdateOrganizationSamlRoleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.SAMLRolesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    saml_role_id = 'saml_role_id_example' # str | 
    update_organization_saml_role_request = openapi_client.UpdateOrganizationSamlRoleRequest() # UpdateOrganizationSamlRoleRequest |  (optional)

    try:
        # Update a SAML role
        api_response = api_instance.update_organization_saml_role(organization_id, saml_role_id, update_organization_saml_role_request=update_organization_saml_role_request)
        print("The response of SAMLRolesApi->update_organization_saml_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SAMLRolesApi->update_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **saml_role_id** | **str**|  | 
 **update_organization_saml_role_request** | [**UpdateOrganizationSamlRoleRequest**](UpdateOrganizationSamlRoleRequest.md)|  | [optional] 

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

