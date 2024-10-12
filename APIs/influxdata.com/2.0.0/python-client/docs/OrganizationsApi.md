# openapi_client.OrganizationsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_orgs_id**](OrganizationsApi.md#delete_orgs_id) | **DELETE** /orgs/{orgID} | Delete an organization
[**delete_orgs_id_members_id**](OrganizationsApi.md#delete_orgs_id_members_id) | **DELETE** /orgs/{orgID}/members/{userID} | Remove a member from an organization
[**delete_orgs_id_owners_id**](OrganizationsApi.md#delete_orgs_id_owners_id) | **DELETE** /orgs/{orgID}/owners/{userID} | Remove an owner from an organization
[**get_orgs**](OrganizationsApi.md#get_orgs) | **GET** /orgs | List all organizations
[**get_orgs_id**](OrganizationsApi.md#get_orgs_id) | **GET** /orgs/{orgID} | Retrieve an organization
[**get_orgs_id_members**](OrganizationsApi.md#get_orgs_id_members) | **GET** /orgs/{orgID}/members | List all members of an organization
[**get_orgs_id_owners**](OrganizationsApi.md#get_orgs_id_owners) | **GET** /orgs/{orgID}/owners | List all owners of an organization
[**get_orgs_id_secrets_0**](OrganizationsApi.md#get_orgs_id_secrets_0) | **GET** /orgs/{orgID}/secrets | List all secret keys for an organization
[**patch_orgs_id**](OrganizationsApi.md#patch_orgs_id) | **PATCH** /orgs/{orgID} | Update an organization
[**patch_orgs_id_secrets_0**](OrganizationsApi.md#patch_orgs_id_secrets_0) | **PATCH** /orgs/{orgID}/secrets | Update secrets in an organization
[**post_orgs**](OrganizationsApi.md#post_orgs) | **POST** /orgs | Create an organization
[**post_orgs_id_members**](OrganizationsApi.md#post_orgs_id_members) | **POST** /orgs/{orgID}/members | Add a member to an organization
[**post_orgs_id_owners**](OrganizationsApi.md#post_orgs_id_owners) | **POST** /orgs/{orgID}/owners | Add an owner to an organization
[**post_orgs_id_secrets_0**](OrganizationsApi.md#post_orgs_id_secrets_0) | **POST** /orgs/{orgID}/secrets/delete | Delete secrets from an organization


# **delete_orgs_id**
> delete_orgs_id(org_id, zap_trace_span=zap_trace_span)

Delete an organization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The ID of the organization to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete an organization
        api_instance.delete_orgs_id(org_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_orgs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Organization not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_orgs_id_members_id**
> delete_orgs_id_members_id(user_id, org_id, zap_trace_span=zap_trace_span)

Remove a member from an organization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the member to remove.
    org_id = 'org_id_example' # str | The organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove a member from an organization
        api_instance.delete_orgs_id_members_id(user_id, org_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_orgs_id_members_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the member to remove. | 
 **org_id** | **str**| The organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Member removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_orgs_id_owners_id**
> delete_orgs_id_owners_id(user_id, org_id, zap_trace_span=zap_trace_span)

Remove an owner from an organization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the owner to remove.
    org_id = 'org_id_example' # str | The organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove an owner from an organization
        api_instance.delete_orgs_id_owners_id(user_id, org_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_orgs_id_owners_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the owner to remove. | 
 **org_id** | **str**| The organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Owner removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_orgs**
> Organizations get_orgs(zap_trace_span=zap_trace_span, offset=offset, limit=limit, descending=descending, org=org, org_id=org_id, user_id=user_id)

List all organizations

### Example


```python
import openapi_client
from openapi_client.models.organizations import Organizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)
    descending = False # bool |  (optional) (default to False)
    org = 'org_example' # str | Filter organizations to a specific organization name. (optional)
    org_id = 'org_id_example' # str | Filter organizations to a specific organization ID. (optional)
    user_id = 'user_id_example' # str | Filter organizations to a specific user ID. (optional)

    try:
        # List all organizations
        api_response = api_instance.get_orgs(zap_trace_span=zap_trace_span, offset=offset, limit=limit, descending=descending, org=org, org_id=org_id, user_id=user_id)
        print("The response of OrganizationsApi->get_orgs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_orgs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]
 **descending** | **bool**|  | [optional] [default to False]
 **org** | **str**| Filter organizations to a specific organization name. | [optional] 
 **org_id** | **str**| Filter organizations to a specific organization ID. | [optional] 
 **user_id** | **str**| Filter organizations to a specific user ID. | [optional] 

### Return type

[**Organizations**](Organizations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of organizations |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_orgs_id**
> Organization get_orgs_id(org_id, zap_trace_span=zap_trace_span)

Retrieve an organization

### Example


```python
import openapi_client
from openapi_client.models.organization import Organization
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The ID of the organization to get.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve an organization
        api_response = api_instance.get_orgs_id(org_id, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->get_orgs_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_orgs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to get. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_orgs_id_members**
> ResourceMembers get_orgs_id_members(org_id, zap_trace_span=zap_trace_span)

List all members of an organization

### Example


```python
import openapi_client
from openapi_client.models.resource_members import ResourceMembers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all members of an organization
        api_response = api_instance.get_orgs_id_members(org_id, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->get_orgs_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_orgs_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMembers**](ResourceMembers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of organization members |  -  |
**404** | Organization not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_orgs_id_owners**
> ResourceOwners get_orgs_id_owners(org_id, zap_trace_span=zap_trace_span)

List all owners of an organization

### Example


```python
import openapi_client
from openapi_client.models.resource_owners import ResourceOwners
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all owners of an organization
        api_response = api_instance.get_orgs_id_owners(org_id, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->get_orgs_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_orgs_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwners**](ResourceOwners.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of organization owners |  -  |
**404** | Organization not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_orgs_id_secrets_0**
> SecretKeysResponse get_orgs_id_secrets_0(org_id, zap_trace_span=zap_trace_span)

List all secret keys for an organization

### Example


```python
import openapi_client
from openapi_client.models.secret_keys_response import SecretKeysResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all secret keys for an organization
        api_response = api_instance.get_orgs_id_secrets_0(org_id, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->get_orgs_id_secrets_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_orgs_id_secrets_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**SecretKeysResponse**](SecretKeysResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all secret keys |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_orgs_id**
> Organization patch_orgs_id(org_id, patch_organization_request, zap_trace_span=zap_trace_span)

Update an organization

### Example


```python
import openapi_client
from openapi_client.models.organization import Organization
from openapi_client.models.patch_organization_request import PatchOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The ID of the organization to get.
    patch_organization_request = openapi_client.PatchOrganizationRequest() # PatchOrganizationRequest | Organization update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update an organization
        api_response = api_instance.patch_orgs_id(org_id, patch_organization_request, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->patch_orgs_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->patch_orgs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to get. | 
 **patch_organization_request** | [**PatchOrganizationRequest**](PatchOrganizationRequest.md)| Organization update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization updated |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_orgs_id_secrets_0**
> patch_orgs_id_secrets_0(org_id, request_body, zap_trace_span=zap_trace_span)

Update secrets in an organization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    request_body = {'key': 'request_body_example'} # Dict[str, str] | Secret key value pairs to update/add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update secrets in an organization
        api_instance.patch_orgs_id_secrets_0(org_id, request_body, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling OrganizationsApi->patch_orgs_id_secrets_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **request_body** | [**Dict[str, str]**](str.md)| Secret key value pairs to update/add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Keys successfully patched |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_orgs**
> Organization post_orgs(post_organization_request, zap_trace_span=zap_trace_span)

Create an organization

### Example


```python
import openapi_client
from openapi_client.models.organization import Organization
from openapi_client.models.post_organization_request import PostOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    post_organization_request = openapi_client.PostOrganizationRequest() # PostOrganizationRequest | Organization to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create an organization
        api_response = api_instance.post_orgs(post_organization_request, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->post_orgs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->post_orgs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_organization_request** | [**PostOrganizationRequest**](PostOrganizationRequest.md)| Organization to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Organization created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_orgs_id_members**
> ResourceMember post_orgs_id_members(org_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add a member to an organization

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_member import ResourceMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as member
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a member to an organization
        api_response = api_instance.post_orgs_id_members(org_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->post_orgs_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->post_orgs_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as member | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMember**](ResourceMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added to organization created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_orgs_id_owners**
> ResourceOwner post_orgs_id_owners(org_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add an owner to an organization

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_owner import ResourceOwner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as owner
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add an owner to an organization
        api_response = api_instance.post_orgs_id_owners(org_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of OrganizationsApi->post_orgs_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->post_orgs_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as owner | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwner**](ResourceOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Organization owner added |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_orgs_id_secrets_0**
> post_orgs_id_secrets_0(org_id, secret_keys, zap_trace_span=zap_trace_span)

Delete secrets from an organization

### Example


```python
import openapi_client
from openapi_client.models.secret_keys import SecretKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | The organization ID.
    secret_keys = openapi_client.SecretKeys() # SecretKeys | Secret key to delete
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete secrets from an organization
        api_instance.post_orgs_id_secrets_0(org_id, secret_keys, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling OrganizationsApi->post_orgs_id_secrets_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **secret_keys** | [**SecretKeys**](SecretKeys.md)| Secret key to delete | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Keys successfully patched |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

