# openapi_client.BrandingPoliciesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_branding_policy_1**](BrandingPoliciesApi.md#create_organization_branding_policy_1) | **POST** /organizations/{organizationId}/brandingPolicies | Add a new branding policy to an organization
[**delete_organization_branding_policy_1**](BrandingPoliciesApi.md#delete_organization_branding_policy_1) | **DELETE** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Delete a branding policy
[**get_organization_branding_policies_1**](BrandingPoliciesApi.md#get_organization_branding_policies_1) | **GET** /organizations/{organizationId}/brandingPolicies | List the branding policies of an organization
[**get_organization_branding_policies_priorities_1**](BrandingPoliciesApi.md#get_organization_branding_policies_priorities_1) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order
[**get_organization_branding_policy_1**](BrandingPoliciesApi.md#get_organization_branding_policy_1) | **GET** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Return a branding policy
[**update_organization_branding_policies_priorities_1**](BrandingPoliciesApi.md#update_organization_branding_policies_priorities_1) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization&#39;s branding policies.
[**update_organization_branding_policy_1**](BrandingPoliciesApi.md#update_organization_branding_policy_1) | **PUT** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Update a branding policy


# **create_organization_branding_policy_1**
> CreateOrganizationBrandingPolicy201Response create_organization_branding_policy_1(organization_id, create_organization_branding_policy_request=create_organization_branding_policy_request)

Add a new branding policy to an organization

Add a new branding policy to an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_branding_policy201_response import CreateOrganizationBrandingPolicy201Response
from openapi_client.models.create_organization_branding_policy_request import CreateOrganizationBrandingPolicyRequest
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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_branding_policy_request = openapi_client.CreateOrganizationBrandingPolicyRequest() # CreateOrganizationBrandingPolicyRequest |  (optional)

    try:
        # Add a new branding policy to an organization
        api_response = api_instance.create_organization_branding_policy_1(organization_id, create_organization_branding_policy_request=create_organization_branding_policy_request)
        print("The response of BrandingPoliciesApi->create_organization_branding_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->create_organization_branding_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_branding_policy_request** | [**CreateOrganizationBrandingPolicyRequest**](CreateOrganizationBrandingPolicyRequest.md)|  | [optional] 

### Return type

[**CreateOrganizationBrandingPolicy201Response**](CreateOrganizationBrandingPolicy201Response.md)

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

# **delete_organization_branding_policy_1**
> delete_organization_branding_policy_1(organization_id, branding_policy_id)

Delete a branding policy

Delete a branding policy

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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    branding_policy_id = 'branding_policy_id_example' # str | 

    try:
        # Delete a branding policy
        api_instance.delete_organization_branding_policy_1(organization_id, branding_policy_id)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->delete_organization_branding_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **branding_policy_id** | **str**|  | 

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

# **get_organization_branding_policies_1**
> List[GetOrganizationBrandingPolicies200ResponseInner] get_organization_branding_policies_1(organization_id)

List the branding policies of an organization

List the branding policies of an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner
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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the branding policies of an organization
        api_response = api_instance.get_organization_branding_policies_1(organization_id)
        print("The response of BrandingPoliciesApi->get_organization_branding_policies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->get_organization_branding_policies_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationBrandingPolicies200ResponseInner]**](GetOrganizationBrandingPolicies200ResponseInner.md)

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

# **get_organization_branding_policies_priorities_1**
> GetOrganizationBrandingPoliciesPriorities200Response get_organization_branding_policies_priorities_1(organization_id)

Return the branding policy IDs of an organization in priority order

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response
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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the branding policy IDs of an organization in priority order
        api_response = api_instance.get_organization_branding_policies_priorities_1(organization_id)
        print("The response of BrandingPoliciesApi->get_organization_branding_policies_priorities_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->get_organization_branding_policies_priorities_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationBrandingPoliciesPriorities200Response**](GetOrganizationBrandingPoliciesPriorities200Response.md)

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

# **get_organization_branding_policy_1**
> GetOrganizationBrandingPolicies200ResponseInner get_organization_branding_policy_1(organization_id, branding_policy_id)

Return a branding policy

Return a branding policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner
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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    branding_policy_id = 'branding_policy_id_example' # str | 

    try:
        # Return a branding policy
        api_response = api_instance.get_organization_branding_policy_1(organization_id, branding_policy_id)
        print("The response of BrandingPoliciesApi->get_organization_branding_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->get_organization_branding_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **branding_policy_id** | **str**|  | 

### Return type

[**GetOrganizationBrandingPolicies200ResponseInner**](GetOrganizationBrandingPolicies200ResponseInner.md)

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

# **update_organization_branding_policies_priorities_1**
> GetOrganizationBrandingPoliciesPriorities200Response update_organization_branding_policies_priorities_1(organization_id, update_organization_branding_policies_priorities_request=update_organization_branding_policies_priorities_request)

Update the priority ordering of an organization's branding policies.

Update the priority ordering of an organization's branding policies.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response
from openapi_client.models.update_organization_branding_policies_priorities_request import UpdateOrganizationBrandingPoliciesPrioritiesRequest
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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_branding_policies_priorities_request = openapi_client.UpdateOrganizationBrandingPoliciesPrioritiesRequest() # UpdateOrganizationBrandingPoliciesPrioritiesRequest |  (optional)

    try:
        # Update the priority ordering of an organization's branding policies.
        api_response = api_instance.update_organization_branding_policies_priorities_1(organization_id, update_organization_branding_policies_priorities_request=update_organization_branding_policies_priorities_request)
        print("The response of BrandingPoliciesApi->update_organization_branding_policies_priorities_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->update_organization_branding_policies_priorities_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_branding_policies_priorities_request** | [**UpdateOrganizationBrandingPoliciesPrioritiesRequest**](UpdateOrganizationBrandingPoliciesPrioritiesRequest.md)|  | [optional] 

### Return type

[**GetOrganizationBrandingPoliciesPriorities200Response**](GetOrganizationBrandingPoliciesPriorities200Response.md)

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

# **update_organization_branding_policy_1**
> GetOrganizationBrandingPolicies200ResponseInner update_organization_branding_policy_1(organization_id, branding_policy_id, update_organization_branding_policy_request=update_organization_branding_policy_request)

Update a branding policy

Update a branding policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner
from openapi_client.models.update_organization_branding_policy_request import UpdateOrganizationBrandingPolicyRequest
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
    api_instance = openapi_client.BrandingPoliciesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    branding_policy_id = 'branding_policy_id_example' # str | 
    update_organization_branding_policy_request = openapi_client.UpdateOrganizationBrandingPolicyRequest() # UpdateOrganizationBrandingPolicyRequest |  (optional)

    try:
        # Update a branding policy
        api_response = api_instance.update_organization_branding_policy_1(organization_id, branding_policy_id, update_organization_branding_policy_request=update_organization_branding_policy_request)
        print("The response of BrandingPoliciesApi->update_organization_branding_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BrandingPoliciesApi->update_organization_branding_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **branding_policy_id** | **str**|  | 
 **update_organization_branding_policy_request** | [**UpdateOrganizationBrandingPolicyRequest**](UpdateOrganizationBrandingPolicyRequest.md)|  | [optional] 

### Return type

[**GetOrganizationBrandingPolicies200ResponseInner**](GetOrganizationBrandingPolicies200ResponseInner.md)

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

