# openapi_client.AdaptivePolicyApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_adaptive_policy_acl_1**](AdaptivePolicyApi.md#create_organization_adaptive_policy_acl_1) | **POST** /organizations/{organizationId}/adaptivePolicy/acls | Creates new adaptive policy ACL
[**create_organization_adaptive_policy_group_1**](AdaptivePolicyApi.md#create_organization_adaptive_policy_group_1) | **POST** /organizations/{organizationId}/adaptivePolicy/groups | Creates a new adaptive policy group
[**create_organization_adaptive_policy_policy_1**](AdaptivePolicyApi.md#create_organization_adaptive_policy_policy_1) | **POST** /organizations/{organizationId}/adaptivePolicy/policies | Add an Adaptive Policy
[**delete_organization_adaptive_policy_acl_1**](AdaptivePolicyApi.md#delete_organization_adaptive_policy_acl_1) | **DELETE** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Deletes the specified adaptive policy ACL
[**delete_organization_adaptive_policy_group_1**](AdaptivePolicyApi.md#delete_organization_adaptive_policy_group_1) | **DELETE** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Deletes the specified adaptive policy group and any associated policies and references
[**delete_organization_adaptive_policy_policy_1**](AdaptivePolicyApi.md#delete_organization_adaptive_policy_policy_1) | **DELETE** /organizations/{organizationId}/adaptivePolicy/policies/{id} | Delete an Adaptive Policy
[**get_organization_adaptive_policy_acl_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_acl_1) | **GET** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Returns the adaptive policy ACL information
[**get_organization_adaptive_policy_acls_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_acls_1) | **GET** /organizations/{organizationId}/adaptivePolicy/acls | List adaptive policy ACLs in a organization
[**get_organization_adaptive_policy_group_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_group_1) | **GET** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Returns an adaptive policy group
[**get_organization_adaptive_policy_groups_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_groups_1) | **GET** /organizations/{organizationId}/adaptivePolicy/groups | List adaptive policy groups in a organization
[**get_organization_adaptive_policy_overview_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_overview_1) | **GET** /organizations/{organizationId}/adaptivePolicy/overview | Returns adaptive policy aggregate statistics for an organization
[**get_organization_adaptive_policy_policies_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_policies_1) | **GET** /organizations/{organizationId}/adaptivePolicy/policies | List adaptive policies in an organization
[**get_organization_adaptive_policy_policy_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_policy_1) | **GET** /organizations/{organizationId}/adaptivePolicy/policies/{id} | Return an adaptive policy
[**get_organization_adaptive_policy_settings_1**](AdaptivePolicyApi.md#get_organization_adaptive_policy_settings_1) | **GET** /organizations/{organizationId}/adaptivePolicy/settings | Returns global adaptive policy settings in an organization
[**update_organization_adaptive_policy_acl_1**](AdaptivePolicyApi.md#update_organization_adaptive_policy_acl_1) | **PUT** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Updates an adaptive policy ACL
[**update_organization_adaptive_policy_group_1**](AdaptivePolicyApi.md#update_organization_adaptive_policy_group_1) | **PUT** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Updates an adaptive policy group
[**update_organization_adaptive_policy_policy_1**](AdaptivePolicyApi.md#update_organization_adaptive_policy_policy_1) | **PUT** /organizations/{organizationId}/adaptivePolicy/policies/{id} | Update an Adaptive Policy
[**update_organization_adaptive_policy_settings_1**](AdaptivePolicyApi.md#update_organization_adaptive_policy_settings_1) | **PUT** /organizations/{organizationId}/adaptivePolicy/settings | Update global adaptive policy settings


# **create_organization_adaptive_policy_acl_1**
> object create_organization_adaptive_policy_acl_1(organization_id, create_organization_adaptive_policy_acl_request)

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_acl_request = openapi_client.CreateOrganizationAdaptivePolicyAclRequest() # CreateOrganizationAdaptivePolicyAclRequest | 

    try:
        # Creates new adaptive policy ACL
        api_response = api_instance.create_organization_adaptive_policy_acl_1(organization_id, create_organization_adaptive_policy_acl_request)
        print("The response of AdaptivePolicyApi->create_organization_adaptive_policy_acl_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->create_organization_adaptive_policy_acl_1: %s\n" % e)
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

# **create_organization_adaptive_policy_group_1**
> object create_organization_adaptive_policy_group_1(organization_id, create_organization_adaptive_policy_group_request)

Creates a new adaptive policy group

Creates a new adaptive policy group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_group_request import CreateOrganizationAdaptivePolicyGroupRequest
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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_group_request = openapi_client.CreateOrganizationAdaptivePolicyGroupRequest() # CreateOrganizationAdaptivePolicyGroupRequest | 

    try:
        # Creates a new adaptive policy group
        api_response = api_instance.create_organization_adaptive_policy_group_1(organization_id, create_organization_adaptive_policy_group_request)
        print("The response of AdaptivePolicyApi->create_organization_adaptive_policy_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->create_organization_adaptive_policy_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_group_request** | [**CreateOrganizationAdaptivePolicyGroupRequest**](CreateOrganizationAdaptivePolicyGroupRequest.md)|  | 

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

# **create_organization_adaptive_policy_policy_1**
> object create_organization_adaptive_policy_policy_1(organization_id, create_organization_adaptive_policy_policy_request)

Add an Adaptive Policy

Add an Adaptive Policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_policy_request import CreateOrganizationAdaptivePolicyPolicyRequest
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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_policy_request = openapi_client.CreateOrganizationAdaptivePolicyPolicyRequest() # CreateOrganizationAdaptivePolicyPolicyRequest | 

    try:
        # Add an Adaptive Policy
        api_response = api_instance.create_organization_adaptive_policy_policy_1(organization_id, create_organization_adaptive_policy_policy_request)
        print("The response of AdaptivePolicyApi->create_organization_adaptive_policy_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->create_organization_adaptive_policy_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_policy_request** | [**CreateOrganizationAdaptivePolicyPolicyRequest**](CreateOrganizationAdaptivePolicyPolicyRequest.md)|  | 

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

# **delete_organization_adaptive_policy_acl_1**
> delete_organization_adaptive_policy_acl_1(organization_id, acl_id)

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 

    try:
        # Deletes the specified adaptive policy ACL
        api_instance.delete_organization_adaptive_policy_acl_1(organization_id, acl_id)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->delete_organization_adaptive_policy_acl_1: %s\n" % e)
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

# **delete_organization_adaptive_policy_group_1**
> delete_organization_adaptive_policy_group_1(organization_id, id)

Deletes the specified adaptive policy group and any associated policies and references

Deletes the specified adaptive policy group and any associated policies and references

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Deletes the specified adaptive policy group and any associated policies and references
        api_instance.delete_organization_adaptive_policy_group_1(organization_id, id)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->delete_organization_adaptive_policy_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

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

# **delete_organization_adaptive_policy_policy_1**
> delete_organization_adaptive_policy_policy_1(organization_id, id)

Delete an Adaptive Policy

Delete an Adaptive Policy

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Delete an Adaptive Policy
        api_instance.delete_organization_adaptive_policy_policy_1(organization_id, id)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->delete_organization_adaptive_policy_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

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

# **get_organization_adaptive_policy_acl_1**
> object get_organization_adaptive_policy_acl_1(organization_id, acl_id)

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 

    try:
        # Returns the adaptive policy ACL information
        api_response = api_instance.get_organization_adaptive_policy_acl_1(organization_id, acl_id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_acl_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_acl_1: %s\n" % e)
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

# **get_organization_adaptive_policy_acls_1**
> List[object] get_organization_adaptive_policy_acls_1(organization_id)

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policy ACLs in a organization
        api_response = api_instance.get_organization_adaptive_policy_acls_1(organization_id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_acls_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_acls_1: %s\n" % e)
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

# **get_organization_adaptive_policy_group_1**
> object get_organization_adaptive_policy_group_1(organization_id, id)

Returns an adaptive policy group

Returns an adaptive policy group

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Returns an adaptive policy group
        api_response = api_instance.get_organization_adaptive_policy_group_1(organization_id, id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

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

# **get_organization_adaptive_policy_groups_1**
> List[object] get_organization_adaptive_policy_groups_1(organization_id)

List adaptive policy groups in a organization

List adaptive policy groups in a organization

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policy groups in a organization
        api_response = api_instance.get_organization_adaptive_policy_groups_1(organization_id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_groups_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_groups_1: %s\n" % e)
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

# **get_organization_adaptive_policy_overview_1**
> GetOrganizationAdaptivePolicyOverview200Response get_organization_adaptive_policy_overview_1(organization_id)

Returns adaptive policy aggregate statistics for an organization

Returns adaptive policy aggregate statistics for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_adaptive_policy_overview200_response import GetOrganizationAdaptivePolicyOverview200Response
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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns adaptive policy aggregate statistics for an organization
        api_response = api_instance.get_organization_adaptive_policy_overview_1(organization_id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_overview_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_overview_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationAdaptivePolicyOverview200Response**](GetOrganizationAdaptivePolicyOverview200Response.md)

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

# **get_organization_adaptive_policy_policies_1**
> List[object] get_organization_adaptive_policy_policies_1(organization_id)

List adaptive policies in an organization

List adaptive policies in an organization

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policies in an organization
        api_response = api_instance.get_organization_adaptive_policy_policies_1(organization_id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_policies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_policies_1: %s\n" % e)
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

# **get_organization_adaptive_policy_policy_1**
> object get_organization_adaptive_policy_policy_1(organization_id, id)

Return an adaptive policy

Return an adaptive policy

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return an adaptive policy
        api_response = api_instance.get_organization_adaptive_policy_policy_1(organization_id, id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

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

# **get_organization_adaptive_policy_settings_1**
> object get_organization_adaptive_policy_settings_1(organization_id)

Returns global adaptive policy settings in an organization

Returns global adaptive policy settings in an organization

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns global adaptive policy settings in an organization
        api_response = api_instance.get_organization_adaptive_policy_settings_1(organization_id)
        print("The response of AdaptivePolicyApi->get_organization_adaptive_policy_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->get_organization_adaptive_policy_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **update_organization_adaptive_policy_acl_1**
> object update_organization_adaptive_policy_acl_1(organization_id, acl_id, update_organization_adaptive_policy_acl_request=update_organization_adaptive_policy_acl_request)

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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 
    update_organization_adaptive_policy_acl_request = openapi_client.UpdateOrganizationAdaptivePolicyAclRequest() # UpdateOrganizationAdaptivePolicyAclRequest |  (optional)

    try:
        # Updates an adaptive policy ACL
        api_response = api_instance.update_organization_adaptive_policy_acl_1(organization_id, acl_id, update_organization_adaptive_policy_acl_request=update_organization_adaptive_policy_acl_request)
        print("The response of AdaptivePolicyApi->update_organization_adaptive_policy_acl_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->update_organization_adaptive_policy_acl_1: %s\n" % e)
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

# **update_organization_adaptive_policy_group_1**
> object update_organization_adaptive_policy_group_1(organization_id, id, update_organization_adaptive_policy_group_request=update_organization_adaptive_policy_group_request)

Updates an adaptive policy group

Updates an adaptive policy group. If updating \"Infrastructure\", only the SGT is allowed. Cannot update \"Unknown\".

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_group_request import UpdateOrganizationAdaptivePolicyGroupRequest
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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 
    update_organization_adaptive_policy_group_request = openapi_client.UpdateOrganizationAdaptivePolicyGroupRequest() # UpdateOrganizationAdaptivePolicyGroupRequest |  (optional)

    try:
        # Updates an adaptive policy group
        api_response = api_instance.update_organization_adaptive_policy_group_1(organization_id, id, update_organization_adaptive_policy_group_request=update_organization_adaptive_policy_group_request)
        print("The response of AdaptivePolicyApi->update_organization_adaptive_policy_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->update_organization_adaptive_policy_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 
 **update_organization_adaptive_policy_group_request** | [**UpdateOrganizationAdaptivePolicyGroupRequest**](UpdateOrganizationAdaptivePolicyGroupRequest.md)|  | [optional] 

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

# **update_organization_adaptive_policy_policy_1**
> object update_organization_adaptive_policy_policy_1(organization_id, id, update_organization_adaptive_policy_policy_request=update_organization_adaptive_policy_policy_request)

Update an Adaptive Policy

Update an Adaptive Policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_policy_request import UpdateOrganizationAdaptivePolicyPolicyRequest
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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 
    update_organization_adaptive_policy_policy_request = openapi_client.UpdateOrganizationAdaptivePolicyPolicyRequest() # UpdateOrganizationAdaptivePolicyPolicyRequest |  (optional)

    try:
        # Update an Adaptive Policy
        api_response = api_instance.update_organization_adaptive_policy_policy_1(organization_id, id, update_organization_adaptive_policy_policy_request=update_organization_adaptive_policy_policy_request)
        print("The response of AdaptivePolicyApi->update_organization_adaptive_policy_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->update_organization_adaptive_policy_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 
 **update_organization_adaptive_policy_policy_request** | [**UpdateOrganizationAdaptivePolicyPolicyRequest**](UpdateOrganizationAdaptivePolicyPolicyRequest.md)|  | [optional] 

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

# **update_organization_adaptive_policy_settings_1**
> object update_organization_adaptive_policy_settings_1(organization_id, update_organization_adaptive_policy_settings_request=update_organization_adaptive_policy_settings_request)

Update global adaptive policy settings

Update global adaptive policy settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_settings_request import UpdateOrganizationAdaptivePolicySettingsRequest
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
    api_instance = openapi_client.AdaptivePolicyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_adaptive_policy_settings_request = openapi_client.UpdateOrganizationAdaptivePolicySettingsRequest() # UpdateOrganizationAdaptivePolicySettingsRequest |  (optional)

    try:
        # Update global adaptive policy settings
        api_response = api_instance.update_organization_adaptive_policy_settings_1(organization_id, update_organization_adaptive_policy_settings_request=update_organization_adaptive_policy_settings_request)
        print("The response of AdaptivePolicyApi->update_organization_adaptive_policy_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptivePolicyApi->update_organization_adaptive_policy_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_adaptive_policy_settings_request** | [**UpdateOrganizationAdaptivePolicySettingsRequest**](UpdateOrganizationAdaptivePolicySettingsRequest.md)|  | [optional] 

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

