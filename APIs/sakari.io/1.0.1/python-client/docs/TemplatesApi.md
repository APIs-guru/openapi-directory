# openapi_client.TemplatesApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templates_create**](TemplatesApi.md#templates_create) | **POST** /v1/accounts/{accountId}/templates | Create template
[**templates_fetch**](TemplatesApi.md#templates_fetch) | **GET** /v1/accounts/{accountId}/templates/{templateId} | Fetch template by ID
[**templates_fetch_all**](TemplatesApi.md#templates_fetch_all) | **GET** /v1/accounts/{accountId}/templates | Fetch templates
[**templates_remove**](TemplatesApi.md#templates_remove) | **DELETE** /v1/accounts/{accountId}/templates/{templateId} | Deletes a template
[**templates_update**](TemplatesApi.md#templates_update) | **PUT** /v1/accounts/{accountId}/templates/{templateId} | Updates a template


# **templates_create**
> TemplatesResponse templates_create(account_id, template_request=template_request)

Create template

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.template_request import TemplateRequest
from openapi_client.models.templates_response import TemplatesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    template_request = openapi_client.TemplateRequest() # TemplateRequest |  (optional)

    try:
        # Create template
        api_response = api_instance.templates_create(account_id, template_request=template_request)
        print("The response of TemplatesApi->templates_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->templates_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **template_request** | [**TemplateRequest**](TemplateRequest.md)|  | [optional] 

### Return type

[**TemplatesResponse**](TemplatesResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templates_fetch**
> TemplateResponse templates_fetch(account_id, template_id)

Fetch template by ID

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.template_response import TemplateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    template_id = 'template_id_example' # str | ID of template to return

    try:
        # Fetch template by ID
        api_response = api_instance.templates_fetch(account_id, template_id)
        print("The response of TemplatesApi->templates_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->templates_fetch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **template_id** | **str**| ID of template to return | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templates_fetch_all**
> TemplatesResponse templates_fetch_all(account_id, offset=offset, limit=limit, name=name)

Fetch templates

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.templates_response import TemplatesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    offset = 56 # int | Results to skip when paginating through a result set (optional)
    limit = 56 # int | Maximum number of results to return (optional)
    name = 'name_example' # str | Filter by name or part of (optional)

    try:
        # Fetch templates
        api_response = api_instance.templates_fetch_all(account_id, offset=offset, limit=limit, name=name)
        print("The response of TemplatesApi->templates_fetch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->templates_fetch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **offset** | **int**| Results to skip when paginating through a result set | [optional] 
 **limit** | **int**| Maximum number of results to return | [optional] 
 **name** | **str**| Filter by name or part of | [optional] 

### Return type

[**TemplatesResponse**](TemplatesResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**4XX** | invalid request |  -  |
**5XX** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templates_remove**
> CampaignsRemove200Response templates_remove(account_id, template_id)

Deletes a template

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaigns_remove200_response import CampaignsRemove200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    template_id = 'template_id_example' # str | Template id to delete

    try:
        # Deletes a template
        api_response = api_instance.templates_remove(account_id, template_id)
        print("The response of TemplatesApi->templates_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->templates_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **template_id** | **str**| Template id to delete | 

### Return type

[**CampaignsRemove200Response**](CampaignsRemove200Response.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templates_update**
> TemplateResponse templates_update(account_id, template_id)

Updates a template

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.template_response import TemplateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    template_id = 'template_id_example' # str | ID of template

    try:
        # Updates a template
        api_response = api_instance.templates_update(account_id, template_id)
        print("The response of TemplatesApi->templates_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->templates_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **template_id** | **str**| ID of template | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

