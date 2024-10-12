# openapi_client.PersonalPagingPolicyValuesApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_policies_types_contacts_get**](PersonalPagingPolicyValuesApi.md#api_public_v1_policies_types_contacts_get) | **GET** /api-public/v1/policies/types/contacts | Get the available contact types
[**api_public_v1_policies_types_notifications_get**](PersonalPagingPolicyValuesApi.md#api_public_v1_policies_types_notifications_get) | **GET** /api-public/v1/policies/types/notifications | Get the available notification types
[**api_public_v1_policies_types_timeouts_get**](PersonalPagingPolicyValuesApi.md#api_public_v1_policies_types_timeouts_get) | **GET** /api-public/v1/policies/types/timeouts | Get the available timeout values


# **api_public_v1_policies_types_contacts_get**
> ApiPublicV1PoliciesTypesContactsGet200Response api_public_v1_policies_types_contacts_get(x_vo_api_id, x_vo_api_key)

Get the available contact types

Get the available contact types  description: \"Email Address\", type: \"email\" description: \"Phone Number\", type: \"phone\"  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_policies_types_contacts_get200_response import ApiPublicV1PoliciesTypesContactsGet200Response
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
    api_instance = openapi_client.PersonalPagingPolicyValuesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get the available contact types
        api_response = api_instance.api_public_v1_policies_types_contacts_get(x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPolicyValuesApi->api_public_v1_policies_types_contacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPolicyValuesApi->api_public_v1_policies_types_contacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1PoliciesTypesContactsGet200Response**](ApiPublicV1PoliciesTypesContactsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All the available contact types |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_policies_types_notifications_get**
> ApiPublicV1PoliciesTypesNotificationsGet200Response api_public_v1_policies_types_notifications_get(x_vo_api_id, x_vo_api_key)

Get the available notification types

Get the available notification types  description: \"Send a push notification to all my devices\", type: \"push\" description: \"Send an email to an email address\", type: \"email\" description: \"Send an SMS to a phone number\", type: \"sms\" description: \"Make a phone call to a phone number\", type: \"phone\"  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_policies_types_notifications_get200_response import ApiPublicV1PoliciesTypesNotificationsGet200Response
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
    api_instance = openapi_client.PersonalPagingPolicyValuesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get the available notification types
        api_response = api_instance.api_public_v1_policies_types_notifications_get(x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPolicyValuesApi->api_public_v1_policies_types_notifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPolicyValuesApi->api_public_v1_policies_types_notifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1PoliciesTypesNotificationsGet200Response**](ApiPublicV1PoliciesTypesNotificationsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All the available contact types |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_policies_types_timeouts_get**
> ApiPublicV1PoliciesTypesTimeoutsGet200Response api_public_v1_policies_types_timeouts_get(x_vo_api_id, x_vo_api_key)

Get the available timeout values

Get the available timeout values  description: \"If still unacked after 1 minute\", type: 1 description: \"If still unacked after 5 minutes\", type: 5 description: \"If still unacked after 10 minutes\", type: 10 description: \"If still unacked after 15 minutes\", type: 15 description: \"If still unacked after 20 minutes\", type: 20 description: \"If still unacked after 25 minutes\", type: 25 description: \"If still unacked after 30 minutes\", type: 30 description: \"If still unacked after 45 minutes\", type: 45 description: \"If still unacked after 60 minutes\", type: 60  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_policies_types_timeouts_get200_response import ApiPublicV1PoliciesTypesTimeoutsGet200Response
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
    api_instance = openapi_client.PersonalPagingPolicyValuesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get the available timeout values
        api_response = api_instance.api_public_v1_policies_types_timeouts_get(x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPolicyValuesApi->api_public_v1_policies_types_timeouts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPolicyValuesApi->api_public_v1_policies_types_timeouts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1PoliciesTypesTimeoutsGet200Response**](ApiPublicV1PoliciesTypesTimeoutsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All the available timeout types. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

