# openapi_client.WebhooksApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_webhook**](WebhooksApi.md#add_webhook) | **POST** /webhooks | Add A New Webhook
[**delete_webhook**](WebhooksApi.md#delete_webhook) | **DELETE** /webhooks/{id} | Delete a webhook
[**get_webhook_by_id**](WebhooksApi.md#get_webhook_by_id) | **GET** /webhooks/{id} | Get info for a webhook
[**get_wehooks_list**](WebhooksApi.md#get_wehooks_list) | **GET** /webhooks | Get Webhooks List
[**regenerate_webhook_token**](WebhooksApi.md#regenerate_webhook_token) | **POST** /webhooks/regenerate-token/{id} | Regenerate security token
[**resend_webhook_activity_entry**](WebhooksApi.md#resend_webhook_activity_entry) | **POST** /webhooks/resend/{activityId} | Resend a webhook message
[**update_webhook**](WebhooksApi.md#update_webhook) | **PATCH** /webhooks/{id} | Update a webhook


# **add_webhook**
> WebhookResponse add_webhook(ev_api_key, ev_access_token, add_webhook_request_body=add_webhook_request_body)

Add A New Webhook

Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use. 

### Example


```python
import openapi_client
from openapi_client.models.add_webhook_request_body import AddWebhookRequestBody
from openapi_client.models.webhook_response import WebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_webhook_request_body = openapi_client.AddWebhookRequestBody() # AddWebhookRequestBody |  (optional)

    try:
        # Add A New Webhook
        api_response = api_instance.add_webhook(ev_api_key, ev_access_token, add_webhook_request_body=add_webhook_request_body)
        print("The response of WebhooksApi->add_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->add_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_webhook_request_body** | [**AddWebhookRequestBody**](AddWebhookRequestBody.md)|  | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_webhook**
> EmptyResponse delete_webhook(id, ev_api_key, ev_access_token)

Delete a webhook

Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to. 

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 56 # int | Webhook endpoint ID
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Delete a webhook
        api_response = api_instance.delete_webhook(id, ev_api_key, ev_access_token)
        print("The response of WebhooksApi->delete_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Webhook endpoint ID | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_webhook_by_id**
> WebhookResponse get_webhook_by_id(id, ev_api_key, ev_access_token, include=include)

Get info for a webhook

Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks

### Example


```python
import openapi_client
from openapi_client.models.webhook_response import WebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 56 # int | Webhook endpoint ID
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    include = 'include_example' # str |  Include metadata for related items; `ownerAccount` and/or `resource`  (optional)

    try:
        # Get info for a webhook
        api_response = api_instance.get_webhook_by_id(id, ev_api_key, ev_access_token, include=include)
        print("The response of WebhooksApi->get_webhook_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_webhook_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Webhook endpoint ID | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **include** | **str**|  Include metadata for related items; &#x60;ownerAccount&#x60; and/or &#x60;resource&#x60;  | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_wehooks_list**
> WebhookCollectionResponse get_wehooks_list(ev_api_key, ev_access_token, include=include, offset=offset, limit=limit)

Get Webhooks List

Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account. 

### Example


```python
import openapi_client
from openapi_client.models.webhook_collection_response import WebhookCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    include = 'include_example' # str | List of related record types to include. Valid options are `owningAccount` and `resource` (optional)
    offset = 100 # int | Records to skip before returning results. (optional)
    limit = 10 # int | Limit of the records list (optional)

    try:
        # Get Webhooks List
        api_response = api_instance.get_wehooks_list(ev_api_key, ev_access_token, include=include, offset=offset, limit=limit)
        print("The response of WebhooksApi->get_wehooks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_wehooks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **include** | **str**| List of related record types to include. Valid options are &#x60;owningAccount&#x60; and &#x60;resource&#x60; | [optional] 
 **offset** | **int**| Records to skip before returning results. | [optional] 
 **limit** | **int**| Limit of the records list | [optional] 

### Return type

[**WebhookCollectionResponse**](WebhookCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regenerate_webhook_token**
> WebhookResponse regenerate_webhook_token(id, ev_api_key, ev_access_token)

Regenerate security token

This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way. 

### Example


```python
import openapi_client
from openapi_client.models.webhook_response import WebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | Webhook ID
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Regenerate security token
        api_response = api_instance.regenerate_webhook_token(id, ev_api_key, ev_access_token)
        print("The response of WebhooksApi->regenerate_webhook_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->regenerate_webhook_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook ID | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_webhook_activity_entry**
> EmptyResponse resend_webhook_activity_entry(activity_id, ev_api_key, ev_access_token)

Resend a webhook message

This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    activity_id = 'activity_id_example' # str | Webhooks activity entry ID
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Resend a webhook message
        api_response = api_instance.resend_webhook_activity_entry(activity_id, ev_api_key, ev_access_token)
        print("The response of WebhooksApi->resend_webhook_activity_entry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->resend_webhook_activity_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **str**| Webhooks activity entry ID | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_webhook**
> WebhookResponse update_webhook(id, ev_api_key, ev_access_token, update_webhook_request_body=update_webhook_request_body)

Update a webhook

Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating.   You only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.

### Example


```python
import openapi_client
from openapi_client.models.update_webhook_request_body import UpdateWebhookRequestBody
from openapi_client.models.webhook_response import WebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 56 # int | Webhook endpoint ID
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    update_webhook_request_body = openapi_client.UpdateWebhookRequestBody() # UpdateWebhookRequestBody |  (optional)

    try:
        # Update a webhook
        api_response = api_instance.update_webhook(id, ev_api_key, ev_access_token, update_webhook_request_body=update_webhook_request_body)
        print("The response of WebhooksApi->update_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->update_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Webhook endpoint ID | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **update_webhook_request_body** | [**UpdateWebhookRequestBody**](UpdateWebhookRequestBody.md)|  | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

