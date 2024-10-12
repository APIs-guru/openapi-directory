# openapi_client.PolicyObjectsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_policy_object_1**](PolicyObjectsApi.md#create_organization_policy_object_1) | **POST** /organizations/{organizationId}/policyObjects | Creates a new Policy Object.
[**create_organization_policy_objects_group_1**](PolicyObjectsApi.md#create_organization_policy_objects_group_1) | **POST** /organizations/{organizationId}/policyObjects/groups | Creates a new Policy Object Group.
[**delete_organization_policy_object_1**](PolicyObjectsApi.md#delete_organization_policy_object_1) | **DELETE** /organizations/{organizationId}/policyObjects/{policyObjectId} | Deletes a Policy Object.
[**delete_organization_policy_objects_group_1**](PolicyObjectsApi.md#delete_organization_policy_objects_group_1) | **DELETE** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Deletes a Policy Object Group.
[**get_organization_policy_object_1**](PolicyObjectsApi.md#get_organization_policy_object_1) | **GET** /organizations/{organizationId}/policyObjects/{policyObjectId} | Shows details of a Policy Object.
[**get_organization_policy_objects_1**](PolicyObjectsApi.md#get_organization_policy_objects_1) | **GET** /organizations/{organizationId}/policyObjects | Lists Policy Objects belonging to the organization.
[**get_organization_policy_objects_group_1**](PolicyObjectsApi.md#get_organization_policy_objects_group_1) | **GET** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Shows details of a Policy Object Group.
[**get_organization_policy_objects_groups_1**](PolicyObjectsApi.md#get_organization_policy_objects_groups_1) | **GET** /organizations/{organizationId}/policyObjects/groups | Lists Policy Object Groups belonging to the organization.
[**update_organization_policy_object_1**](PolicyObjectsApi.md#update_organization_policy_object_1) | **PUT** /organizations/{organizationId}/policyObjects/{policyObjectId} | Updates a Policy Object.
[**update_organization_policy_objects_group_1**](PolicyObjectsApi.md#update_organization_policy_objects_group_1) | **PUT** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Updates a Policy Object Group.


# **create_organization_policy_object_1**
> object create_organization_policy_object_1(organization_id, create_organization_policy_object_request)

Creates a new Policy Object.

Creates a new Policy Object.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_policy_object_request import CreateOrganizationPolicyObjectRequest
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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_policy_object_request = openapi_client.CreateOrganizationPolicyObjectRequest() # CreateOrganizationPolicyObjectRequest | 

    try:
        # Creates a new Policy Object.
        api_response = api_instance.create_organization_policy_object_1(organization_id, create_organization_policy_object_request)
        print("The response of PolicyObjectsApi->create_organization_policy_object_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->create_organization_policy_object_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_policy_object_request** | [**CreateOrganizationPolicyObjectRequest**](CreateOrganizationPolicyObjectRequest.md)|  | 

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

# **create_organization_policy_objects_group_1**
> object create_organization_policy_objects_group_1(organization_id, create_organization_policy_objects_group_request)

Creates a new Policy Object Group.

Creates a new Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_policy_objects_group_request import CreateOrganizationPolicyObjectsGroupRequest
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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_policy_objects_group_request = openapi_client.CreateOrganizationPolicyObjectsGroupRequest() # CreateOrganizationPolicyObjectsGroupRequest | 

    try:
        # Creates a new Policy Object Group.
        api_response = api_instance.create_organization_policy_objects_group_1(organization_id, create_organization_policy_objects_group_request)
        print("The response of PolicyObjectsApi->create_organization_policy_objects_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->create_organization_policy_objects_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_policy_objects_group_request** | [**CreateOrganizationPolicyObjectsGroupRequest**](CreateOrganizationPolicyObjectsGroupRequest.md)|  | 

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

# **delete_organization_policy_object_1**
> delete_organization_policy_object_1(organization_id, policy_object_id)

Deletes a Policy Object.

Deletes a Policy Object.

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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_id = 'policy_object_id_example' # str | 

    try:
        # Deletes a Policy Object.
        api_instance.delete_organization_policy_object_1(organization_id, policy_object_id)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->delete_organization_policy_object_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_id** | **str**|  | 

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

# **delete_organization_policy_objects_group_1**
> delete_organization_policy_objects_group_1(organization_id, policy_object_group_id)

Deletes a Policy Object Group.

Deletes a Policy Object Group.

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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 

    try:
        # Deletes a Policy Object Group.
        api_instance.delete_organization_policy_objects_group_1(organization_id, policy_object_group_id)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->delete_organization_policy_objects_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 

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

# **get_organization_policy_object_1**
> object get_organization_policy_object_1(organization_id, policy_object_id)

Shows details of a Policy Object.

Shows details of a Policy Object.

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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_id = 'policy_object_id_example' # str | 

    try:
        # Shows details of a Policy Object.
        api_response = api_instance.get_organization_policy_object_1(organization_id, policy_object_id)
        print("The response of PolicyObjectsApi->get_organization_policy_object_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->get_organization_policy_object_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_id** | **str**|  | 

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

# **get_organization_policy_objects_1**
> List[object] get_organization_policy_objects_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Lists Policy Objects belonging to the organization.

Lists Policy Objects belonging to the organization.

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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 10 - 5000. Default is 5000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Lists Policy Objects belonging to the organization.
        api_response = api_instance.get_organization_policy_objects_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of PolicyObjectsApi->get_organization_policy_objects_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->get_organization_policy_objects_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 10 - 5000. Default is 5000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_policy_objects_group_1**
> object get_organization_policy_objects_group_1(organization_id, policy_object_group_id)

Shows details of a Policy Object Group.

Shows details of a Policy Object Group.

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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 

    try:
        # Shows details of a Policy Object Group.
        api_response = api_instance.get_organization_policy_objects_group_1(organization_id, policy_object_group_id)
        print("The response of PolicyObjectsApi->get_organization_policy_objects_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->get_organization_policy_objects_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 

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

# **get_organization_policy_objects_groups_1**
> List[object] get_organization_policy_objects_groups_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Lists Policy Object Groups belonging to the organization.

Lists Policy Object Groups belonging to the organization.

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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Lists Policy Object Groups belonging to the organization.
        api_response = api_instance.get_organization_policy_objects_groups_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of PolicyObjectsApi->get_organization_policy_objects_groups_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->get_organization_policy_objects_groups_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_policy_object_1**
> object update_organization_policy_object_1(organization_id, policy_object_id, update_organization_policy_object_request=update_organization_policy_object_request)

Updates a Policy Object.

Updates a Policy Object.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_policy_object_request import UpdateOrganizationPolicyObjectRequest
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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_id = 'policy_object_id_example' # str | 
    update_organization_policy_object_request = openapi_client.UpdateOrganizationPolicyObjectRequest() # UpdateOrganizationPolicyObjectRequest |  (optional)

    try:
        # Updates a Policy Object.
        api_response = api_instance.update_organization_policy_object_1(organization_id, policy_object_id, update_organization_policy_object_request=update_organization_policy_object_request)
        print("The response of PolicyObjectsApi->update_organization_policy_object_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->update_organization_policy_object_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_id** | **str**|  | 
 **update_organization_policy_object_request** | [**UpdateOrganizationPolicyObjectRequest**](UpdateOrganizationPolicyObjectRequest.md)|  | [optional] 

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

# **update_organization_policy_objects_group_1**
> object update_organization_policy_objects_group_1(organization_id, policy_object_group_id, update_organization_policy_objects_group_request=update_organization_policy_objects_group_request)

Updates a Policy Object Group.

Updates a Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_policy_objects_group_request import UpdateOrganizationPolicyObjectsGroupRequest
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
    api_instance = openapi_client.PolicyObjectsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 
    update_organization_policy_objects_group_request = openapi_client.UpdateOrganizationPolicyObjectsGroupRequest() # UpdateOrganizationPolicyObjectsGroupRequest |  (optional)

    try:
        # Updates a Policy Object Group.
        api_response = api_instance.update_organization_policy_objects_group_1(organization_id, policy_object_group_id, update_organization_policy_objects_group_request=update_organization_policy_objects_group_request)
        print("The response of PolicyObjectsApi->update_organization_policy_objects_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyObjectsApi->update_organization_policy_objects_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 
 **update_organization_policy_objects_group_request** | [**UpdateOrganizationPolicyObjectsGroupRequest**](UpdateOrganizationPolicyObjectsGroupRequest.md)|  | [optional] 

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

