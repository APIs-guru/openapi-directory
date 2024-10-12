# openapi_client.BadgesApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_badges_get**](BadgesApi.md#offerings_offering_id_badges_get) | **GET** /offerings/{offeringId}/badges | Find offering badges
[**offerings_offering_id_users_user_email_badges_award_post**](BadgesApi.md#offerings_offering_id_users_user_email_badges_award_post) | **POST** /offerings/{offeringId}/users/{userEmail}/badges/award | Award badge
[**users_user_email_badges_get**](BadgesApi.md#users_user_email_badges_get) | **GET** /users/{userEmail}/badges | Find user&#39;s badges


# **offerings_offering_id_badges_get**
> Badge offerings_offering_id_badges_get(offering_id)

Find offering badges

Responds with the badge for an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.badge import Badge
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BadgesApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find offering badges
        api_response = api_instance.offerings_offering_id_badges_get(offering_id)
        print("The response of BadgesApi->offerings_offering_id_badges_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BadgesApi->offerings_offering_id_badges_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**Badge**](Badge.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | badges |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_user_email_badges_award_post**
> AwardedResponse offerings_offering_id_users_user_email_badges_award_post(offering_id, user_email)

Award badge

Awards a badge to a user in the offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.awarded_response import AwardedResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BadgesApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    user_email = 'user_email_example' # str | user's email

    try:
        # Award badge
        api_response = api_instance.offerings_offering_id_users_user_email_badges_award_post(offering_id, user_email)
        print("The response of BadgesApi->offerings_offering_id_users_user_email_badges_award_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BadgesApi->offerings_offering_id_users_user_email_badges_award_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **user_email** | **str**| user&#39;s email | 

### Return type

[**AwardedResponse**](AwardedResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Awarded badge response |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_badges_get**
> List[UserBadge] users_user_email_badges_get(user_email)

Find user's badges

Responds with all badges that the specified user has been awarded.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user_badge import UserBadge
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BadgesApi(api_client)
    user_email = 'user_email_example' # str | user's email

    try:
        # Find user's badges
        api_response = api_instance.users_user_email_badges_get(user_email)
        print("The response of BadgesApi->users_user_email_badges_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BadgesApi->users_user_email_badges_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 

### Return type

[**List[UserBadge]**](UserBadge.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user&#39;s badges |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

