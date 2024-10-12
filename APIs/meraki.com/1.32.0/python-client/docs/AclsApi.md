# openapi_client.AclsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_adaptive_policy_acl_2**](AclsApi.md#create_organization_adaptive_policy_acl_2) | **POST** /organizations/{organizationId}/adaptivePolicy/acls | Creates new adaptive policy ACL
[**delete_organization_adaptive_policy_acl_2**](AclsApi.md#delete_organization_adaptive_policy_acl_2) | **DELETE** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Deletes the specified adaptive policy ACL
[**get_organization_adaptive_policy_acl_2**](AclsApi.md#get_organization_adaptive_policy_acl_2) | **GET** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Returns the adaptive policy ACL information
[**get_organization_adaptive_policy_acls_2**](AclsApi.md#get_organization_adaptive_policy_acls_2) | **GET** /organizations/{organizationId}/adaptivePolicy/acls | List adaptive policy ACLs in a organization
[**update_organization_adaptive_policy_acl_2**](AclsApi.md#update_organization_adaptive_policy_acl_2) | **PUT** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Updates an adaptive policy ACL


# **create_organization_adaptive_policy_acl_2**
> object create_organization_adaptive_policy_acl_2(organization_id, create_organization_adaptive_policy_acl_request)

Creates new adaptive policy ACL

Creates new adaptive policy ACL

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_acl_request import CreateOrganizationAdaptivePolicyAclRequest
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
    api_instance = openapi_client.AclsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_acl_request = openapi_client.CreateOrganizationAdaptivePolicyAclRequest() # CreateOrganizationAdaptivePolicyAclRequest | 

    try:
        # Creates new adaptive policy ACL
        api_response = api_instance.create_organization_adaptive_policy_acl_2(organization_id, create_organization_adaptive_policy_acl_request)
        print("The response of AclsApi->create_organization_adaptive_policy_acl_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AclsApi->create_organization_adaptive_policy_acl_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_acl_request** | [**CreateOrganizationAdaptivePolicyAclRequest**](CreateOrganizationAdaptivePolicyAclRequest.md)|  | 

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

# **delete_organization_adaptive_policy_acl_2**
> delete_organization_adaptive_policy_acl_2(organization_id, acl_id)

Deletes the specified adaptive policy ACL

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

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
    api_instance = openapi_client.AclsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 

    try:
        # Deletes the specified adaptive policy ACL
        api_instance.delete_organization_adaptive_policy_acl_2(organization_id, acl_id)
    except Exception as e:
        print("Exception when calling AclsApi->delete_organization_adaptive_policy_acl_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **acl_id** | **str**|  | 

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

# **get_organization_adaptive_policy_acl_2**
> object get_organization_adaptive_policy_acl_2(organization_id, acl_id)

Returns the adaptive policy ACL information

Returns the adaptive policy ACL information

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
    api_instance = openapi_client.AclsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 

    try:
        # Returns the adaptive policy ACL information
        api_response = api_instance.get_organization_adaptive_policy_acl_2(organization_id, acl_id)
        print("The response of AclsApi->get_organization_adaptive_policy_acl_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AclsApi->get_organization_adaptive_policy_acl_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **acl_id** | **str**|  | 

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

# **get_organization_adaptive_policy_acls_2**
> List[object] get_organization_adaptive_policy_acls_2(organization_id)

List adaptive policy ACLs in a organization

List adaptive policy ACLs in a organization

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
    api_instance = openapi_client.AclsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policy ACLs in a organization
        api_response = api_instance.get_organization_adaptive_policy_acls_2(organization_id)
        print("The response of AclsApi->get_organization_adaptive_policy_acls_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AclsApi->get_organization_adaptive_policy_acls_2: %s\n" % e)
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

# **update_organization_adaptive_policy_acl_2**
> object update_organization_adaptive_policy_acl_2(organization_id, acl_id, update_organization_adaptive_policy_acl_request=update_organization_adaptive_policy_acl_request)

Updates an adaptive policy ACL

Updates an adaptive policy ACL

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_acl_request import UpdateOrganizationAdaptivePolicyAclRequest
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
    api_instance = openapi_client.AclsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 
    update_organization_adaptive_policy_acl_request = openapi_client.UpdateOrganizationAdaptivePolicyAclRequest() # UpdateOrganizationAdaptivePolicyAclRequest |  (optional)

    try:
        # Updates an adaptive policy ACL
        api_response = api_instance.update_organization_adaptive_policy_acl_2(organization_id, acl_id, update_organization_adaptive_policy_acl_request=update_organization_adaptive_policy_acl_request)
        print("The response of AclsApi->update_organization_adaptive_policy_acl_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AclsApi->update_organization_adaptive_policy_acl_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **acl_id** | **str**|  | 
 **update_organization_adaptive_policy_acl_request** | [**UpdateOrganizationAdaptivePolicyAclRequest**](UpdateOrganizationAdaptivePolicyAclRequest.md)|  | [optional] 

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

