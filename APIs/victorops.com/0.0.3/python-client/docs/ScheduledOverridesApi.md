# openapi_client.ScheduledOverridesApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_overrides_get**](ScheduledOverridesApi.md#api_public_v1_overrides_get) | **GET** /api-public/v1/overrides | List the scheduled overrides
[**api_public_v1_overrides_post**](ScheduledOverridesApi.md#api_public_v1_overrides_post) | **POST** /api-public/v1/overrides | Creates a new scheduled override
[**api_public_v1_overrides_public_id_assignments_get**](ScheduledOverridesApi.md#api_public_v1_overrides_public_id_assignments_get) | **GET** /api-public/v1/overrides/{publicId}/assignments | Get the specified scheduled override
[**api_public_v1_overrides_public_id_assignments_policy_slug_delete**](ScheduledOverridesApi.md#api_public_v1_overrides_public_id_assignments_policy_slug_delete) | **DELETE** /api-public/v1/overrides/{publicId}/assignments/{policySlug} | Delete the scheduled override assignment
[**api_public_v1_overrides_public_id_assignments_policy_slug_get**](ScheduledOverridesApi.md#api_public_v1_overrides_public_id_assignments_policy_slug_get) | **GET** /api-public/v1/overrides/{publicId}/assignments/{policySlug} | Get the specified scheduled override assignment
[**api_public_v1_overrides_public_id_assignments_policy_slug_put**](ScheduledOverridesApi.md#api_public_v1_overrides_public_id_assignments_policy_slug_put) | **PUT** /api-public/v1/overrides/{publicId}/assignments/{policySlug} | Update the scheduled override assignment
[**api_public_v1_overrides_public_id_delete**](ScheduledOverridesApi.md#api_public_v1_overrides_public_id_delete) | **DELETE** /api-public/v1/overrides/{publicId} | Deletes a scheduled override
[**api_public_v1_overrides_public_id_get**](ScheduledOverridesApi.md#api_public_v1_overrides_public_id_get) | **GET** /api-public/v1/overrides/{publicId} | Get the specified scheduled override


# **api_public_v1_overrides_get**
> ApiPublicV1OverridesGet200Response api_public_v1_overrides_get(x_vo_api_id, x_vo_api_key)

List the scheduled overrides

List all the scheduled overrides on the organization  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_overrides_get200_response import ApiPublicV1OverridesGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # List the scheduled overrides
        api_response = api_instance.api_public_v1_overrides_get(x_vo_api_id, x_vo_api_key)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1OverridesGet200Response**](ApiPublicV1OverridesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of scheduled overrides for your organization |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_post**
> ApiPublicV1OverridesPost200Response api_public_v1_overrides_post(x_vo_api_id, x_vo_api_key, body)

Creates a new scheduled override

Creates a new scheduled override. Start and end dates are in ISO8601 format. E.g. `2018-09-28'T'05:00:00Z`  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_overrides_post200_response import ApiPublicV1OverridesPost200Response
from openapi_client.models.scheduled_override_payload import ScheduledOverridePayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.ScheduledOverridePayload() # ScheduledOverridePayload | 

    try:
        # Creates a new scheduled override
        api_response = api_instance.api_public_v1_overrides_post(x_vo_api_id, x_vo_api_key, body)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**ScheduledOverridePayload**](ScheduledOverridePayload.md)|  | 

### Return type

[**ApiPublicV1OverridesPost200Response**](ApiPublicV1OverridesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created scheduled override |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_public_id_assignments_get**
> List[Assignment] api_public_v1_overrides_public_id_assignments_get(x_vo_api_id, x_vo_api_key, public_id)

Get the specified scheduled override

Get the specified scheduled override assignments  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    public_id = 'public_id_example' # str | The publicId of the scheduled override

    try:
        # Get the specified scheduled override
        api_response = api_instance.api_public_v1_overrides_public_id_assignments_get(x_vo_api_id, x_vo_api_key, public_id)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **public_id** | **str**| The publicId of the scheduled override | 

### Return type

[**List[Assignment]**](Assignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignments for a given scheduled override |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_public_id_assignments_policy_slug_delete**
> Assignment api_public_v1_overrides_public_id_assignments_policy_slug_delete(x_vo_api_id, x_vo_api_key, public_id, policy_slug)

Delete the scheduled override assignment

Delete the scheduled override assignment  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    public_id = 'public_id_example' # str | The publicId of the scheduled override
    policy_slug = 'policy_slug_example' # str | The policySlug of the assignment

    try:
        # Delete the scheduled override assignment
        api_response = api_instance.api_public_v1_overrides_public_id_assignments_policy_slug_delete(x_vo_api_id, x_vo_api_key, public_id, policy_slug)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_policy_slug_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_policy_slug_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **public_id** | **str**| The publicId of the scheduled override | 
 **policy_slug** | **str**| The policySlug of the assignment | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignment that was deleted for the given scheduled override and policySlug |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_public_id_assignments_policy_slug_get**
> Assignment api_public_v1_overrides_public_id_assignments_policy_slug_get(x_vo_api_id, x_vo_api_key, public_id, policy_slug)

Get the specified scheduled override assignment

Get the specified scheduled override assignments  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    public_id = 'public_id_example' # str | The publicId of the scheduled override
    policy_slug = 'policy_slug_example' # str | The policySlug of the assignment

    try:
        # Get the specified scheduled override assignment
        api_response = api_instance.api_public_v1_overrides_public_id_assignments_policy_slug_get(x_vo_api_id, x_vo_api_key, public_id, policy_slug)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_policy_slug_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_policy_slug_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **public_id** | **str**| The publicId of the scheduled override | 
 **policy_slug** | **str**| The policySlug of the assignment | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignment for the given publicId |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_public_id_assignments_policy_slug_put**
> Assignment api_public_v1_overrides_public_id_assignments_policy_slug_put(x_vo_api_id, x_vo_api_key, public_id, policy_slug, body)

Update the scheduled override assignment

Update the scheduled override assignment  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.models.update_assignment import UpdateAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    public_id = 'public_id_example' # str | The publicId of the scheduled override
    policy_slug = 'policy_slug_example' # str | The policySlug of the assignment
    body = openapi_client.UpdateAssignment() # UpdateAssignment | The policy and username we are assigning

    try:
        # Update the scheduled override assignment
        api_response = api_instance.api_public_v1_overrides_public_id_assignments_policy_slug_put(x_vo_api_id, x_vo_api_key, public_id, policy_slug, body)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_policy_slug_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_public_id_assignments_policy_slug_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **public_id** | **str**| The publicId of the scheduled override | 
 **policy_slug** | **str**| The policySlug of the assignment | 
 **body** | [**UpdateAssignment**](UpdateAssignment.md)| The policy and username we are assigning | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignment for the given policySlug |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_public_id_delete**
> api_public_v1_overrides_public_id_delete(x_vo_api_id, x_vo_api_key, public_id)

Deletes a scheduled override

Deletes a scheduled override  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    public_id = 'public_id_example' # str | The publicId of the scheduled override

    try:
        # Deletes a scheduled override
        api_instance.api_public_v1_overrides_public_id_delete(x_vo_api_id, x_vo_api_key, public_id)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_public_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **public_id** | **str**| The publicId of the scheduled override | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Whether or not the delete was successful |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_overrides_public_id_get**
> ApiPublicV1OverridesPublicIdGet200Response api_public_v1_overrides_public_id_get(x_vo_api_id, x_vo_api_key, public_id)

Get the specified scheduled override

Get the specified scheduled override  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_overrides_public_id_get200_response import ApiPublicV1OverridesPublicIdGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScheduledOverridesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    public_id = 'public_id_example' # str | The publicId of the scheduled override

    try:
        # Get the specified scheduled override
        api_response = api_instance.api_public_v1_overrides_public_id_get(x_vo_api_id, x_vo_api_key, public_id)
        print("The response of ScheduledOverridesApi->api_public_v1_overrides_public_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledOverridesApi->api_public_v1_overrides_public_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **public_id** | **str**| The publicId of the scheduled override | 

### Return type

[**ApiPublicV1OverridesPublicIdGet200Response**](ApiPublicV1OverridesPublicIdGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The scheduled override |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

