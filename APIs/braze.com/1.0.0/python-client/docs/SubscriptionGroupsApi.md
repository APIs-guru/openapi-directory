# openapi_client.SubscriptionGroupsApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_users_subscription_group_sms**](SubscriptionGroupsApi.md#list_users_subscription_group_sms) | **GET** /subscription/user/status | List User&#39;s Subscription Group - SMS
[**list_users_subscription_group_status_sms**](SubscriptionGroupsApi.md#list_users_subscription_group_status_sms) | **GET** /subscription/status/get | List User&#39;s  Subscription Group Status - SMS


# **list_users_subscription_group_sms**
> list_users_subscription_group_sms(external_id=external_id, limit=limit, offset=offset, phone=phone)

List User's Subscription Group - SMS

Use the endpoint below to list and get the subscription groups of a certain user.  > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriptionGroupsApi(api_client)
    external_id = '{{external_id}}' # str | (Required*) String  The external_id of the user. Must include at least one and at most 50 `external_ids`. (optional)
    limit = '100' # str | (Optional) Integer  The limit on the maximum number of results returned. Default (and max) limit is 100. (optional)
    offset = '1' # str | (Optional) Integer  Number of templates to skip before returning rest of the templates that fit the search criteria. (optional)
    phone = '+11112223333' # str | (Required*) String  The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.  (optional)

    try:
        # List User's Subscription Group - SMS
        api_instance.list_users_subscription_group_sms(external_id=external_id, limit=limit, offset=offset, phone=phone)
    except Exception as e:
        print("Exception when calling SubscriptionGroupsApi->list_users_subscription_group_sms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| (Required*) String  The external_id of the user. Must include at least one and at most 50 &#x60;external_ids&#x60;. | [optional] 
 **limit** | **str**| (Optional) Integer  The limit on the maximum number of results returned. Default (and max) limit is 100. | [optional] 
 **offset** | **str**| (Optional) Integer  Number of templates to skip before returning rest of the templates that fit the search criteria. | [optional] 
 **phone** | **str**| (Required*) String  The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.  | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_users_subscription_group_status_sms**
> list_users_subscription_group_status_sms(subscription_group_id=subscription_group_id, external_id=external_id, phone=phone)

List User's  Subscription Group Status - SMS

Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.  > *Either `external_id` or `email` are required.  ## Response  All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"status\": {     \"1\": \"Unsubscribed\",     \"2\": \"Subscribed\"   },   \"message\": \"success\" } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriptionGroupsApi(api_client)
    subscription_group_id = '{{subscription_group_id}}' # str | (Required) String  The `id` of your subscription group. (optional)
    external_id = '{{external_identifier}}' # str | (Required*) String  The `external_id` of the user (must include at least one and at most 50 `external_ids`).  Only external_id or phone is accepted for SMS subscription groups  (optional)
    phone = '+11112223333' # str | (Required*) String  The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.  Only external_id or phone is accepted for SMS subscription groups  (optional)

    try:
        # List User's  Subscription Group Status - SMS
        api_instance.list_users_subscription_group_status_sms(subscription_group_id=subscription_group_id, external_id=external_id, phone=phone)
    except Exception as e:
        print("Exception when calling SubscriptionGroupsApi->list_users_subscription_group_status_sms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_group_id** | **str**| (Required) String  The &#x60;id&#x60; of your subscription group. | [optional] 
 **external_id** | **str**| (Required*) String  The &#x60;external_id&#x60; of the user (must include at least one and at most 50 &#x60;external_ids&#x60;).  Only external_id or phone is accepted for SMS subscription groups  | [optional] 
 **phone** | **str**| (Required*) String  The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.  Only external_id or phone is accepted for SMS subscription groups  | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

