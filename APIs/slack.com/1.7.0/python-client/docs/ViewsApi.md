# openapi_client.ViewsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**views_open**](ViewsApi.md#views_open) | **GET** /views.open | 
[**views_publish**](ViewsApi.md#views_publish) | **GET** /views.publish | 
[**views_push**](ViewsApi.md#views_push) | **GET** /views.push | 
[**views_update**](ViewsApi.md#views_update) | **GET** /views.update | 


# **views_open**
> DefaultSuccessTemplate views_open(token, trigger_id, view)



Open a view for a user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ViewsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    trigger_id = 'trigger_id_example' # str | Exchange a trigger to post to the user.
    view = 'view_example' # str | A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.

    try:
        api_response = api_instance.views_open(token, trigger_id, view)
        print("The response of ViewsApi->views_open:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewsApi->views_open: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **trigger_id** | **str**| Exchange a trigger to post to the user. | 
 **view** | **str**| A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response includes the opened view payload. |  -  |
**0** | Typical error response, before getting to any possible validation errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **views_publish**
> DefaultSuccessTemplate views_publish(token, user_id, view, hash=hash)



Publish a static view for a User.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ViewsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    user_id = 'user_id_example' # str | `id` of the user you want publish a view to.
    view = 'view_example' # str | A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.
    hash = 'hash_example' # str | A string that represents view state to protect against possible race conditions. (optional)

    try:
        api_response = api_instance.views_publish(token, user_id, view, hash=hash)
        print("The response of ViewsApi->views_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewsApi->views_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **user_id** | **str**| &#x60;id&#x60; of the user you want publish a view to. | 
 **view** | **str**| A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. | 
 **hash** | **str**| A string that represents view state to protect against possible race conditions. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response includes the published view payload. |  -  |
**0** | Typical error response, before getting to any possible validation errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **views_push**
> DefaultSuccessTemplate views_push(token, trigger_id, view)



Push a view onto the stack of a root view.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ViewsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    trigger_id = 'trigger_id_example' # str | Exchange a trigger to post to the user.
    view = 'view_example' # str | A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.

    try:
        api_response = api_instance.views_push(token, trigger_id, view)
        print("The response of ViewsApi->views_push:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewsApi->views_push: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **trigger_id** | **str**| Exchange a trigger to post to the user. | 
 **view** | **str**| A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response includes the pushed view payload. |  -  |
**0** | Typical error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **views_update**
> DefaultSuccessTemplate views_update(token, view_id=view_id, external_id=external_id, view=view, hash=hash)



Update an existing view.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ViewsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    view_id = 'view_id_example' # str | A unique identifier of the view to be updated. Either `view_id` or `external_id` is required. (optional)
    external_id = 'external_id_example' # str | A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required. (optional)
    view = 'view_example' # str | A [view object](/reference/surfaces/views). This must be a JSON-encoded string. (optional)
    hash = 'hash_example' # str | A string that represents view state to protect against possible race conditions. (optional)

    try:
        api_response = api_instance.views_update(token, view_id=view_id, external_id=external_id, view=view, hash=hash)
        print("The response of ViewsApi->views_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewsApi->views_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **view_id** | **str**| A unique identifier of the view to be updated. Either &#x60;view_id&#x60; or &#x60;external_id&#x60; is required. | [optional] 
 **external_id** | **str**| A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either &#x60;view_id&#x60; or &#x60;external_id&#x60; is required. | [optional] 
 **view** | **str**| A [view object](/reference/surfaces/views). This must be a JSON-encoded string. | [optional] 
 **hash** | **str**| A string that represents view state to protect against possible race conditions. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response includes the updated view payload. |  -  |
**0** | Typical error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

