# openapi_client.LearnerActivityApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_analytics_learners_progress_get**](LearnerActivityApi.md#offerings_offering_id_analytics_learners_progress_get) | **GET** /offerings/{offeringId}/analytics/learners-progress | Find learner progress in a specified offering
[**offerings_offering_id_analytics_social_notes_get**](LearnerActivityApi.md#offerings_offering_id_analytics_social_notes_get) | **GET** /offerings/{offeringId}/analytics/social-notes | Find shared social notes in an offering
[**offerings_offering_id_analytics_unit_reactions_get**](LearnerActivityApi.md#offerings_offering_id_analytics_unit_reactions_get) | **GET** /offerings/{offeringId}/analytics/unit-reactions | Find unit reactions
[**users_all_progress_get**](LearnerActivityApi.md#users_all_progress_get) | **GET** /users/all/progress | Find learner progress in all offerings
[**users_user_email_offerings_offering_id_progress_get**](LearnerActivityApi.md#users_user_email_offerings_offering_id_progress_get) | **GET** /users/{userEmail}/offerings/{offeringId}/progress | Find learner&#39;s progress in a specified offering
[**users_user_email_progress_get**](LearnerActivityApi.md#users_user_email_progress_get) | **GET** /users/{userEmail}/progress | Find learner&#39;s progress in offerings


# **offerings_offering_id_analytics_learners_progress_get**
> List[LearnerProgressResponse] offerings_offering_id_analytics_learners_progress_get(offering_id)

Find learner progress in a specified offering

Responds with all learner progress in the offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.learner_progress_response import LearnerProgressResponse
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
    api_instance = openapi_client.LearnerActivityApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find learner progress in a specified offering
        api_response = api_instance.offerings_offering_id_analytics_learners_progress_get(offering_id)
        print("The response of LearnerActivityApi->offerings_offering_id_analytics_learners_progress_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LearnerActivityApi->offerings_offering_id_analytics_learners_progress_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[LearnerProgressResponse]**](LearnerProgressResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Learners progress |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_social_notes_get**
> List[SocialNotesResponse] offerings_offering_id_analytics_social_notes_get(offering_id)

Find shared social notes in an offering

Responds with all shared social notes in a specified offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.social_notes_response import SocialNotesResponse
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
    api_instance = openapi_client.LearnerActivityApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find shared social notes in an offering
        api_response = api_instance.offerings_offering_id_analytics_social_notes_get(offering_id)
        print("The response of LearnerActivityApi->offerings_offering_id_analytics_social_notes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LearnerActivityApi->offerings_offering_id_analytics_social_notes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[SocialNotesResponse]**](SocialNotesResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offering social notes |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_unit_reactions_get**
> List[UnitReactionsAnalyticsResponse] offerings_offering_id_analytics_unit_reactions_get(offering_id)

Find unit reactions

Responds with user reactions to units in a specified offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.unit_reactions_analytics_response import UnitReactionsAnalyticsResponse
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
    api_instance = openapi_client.LearnerActivityApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find unit reactions
        api_response = api_instance.offerings_offering_id_analytics_unit_reactions_get(offering_id)
        print("The response of LearnerActivityApi->offerings_offering_id_analytics_unit_reactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LearnerActivityApi->offerings_offering_id_analytics_unit_reactions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[UnitReactionsAnalyticsResponse]**](UnitReactionsAnalyticsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unit Reactions |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_all_progress_get**
> UsersAllProgressGet200Response users_all_progress_get(top=top, orderby=orderby, filter=filter)

Find learner progress in all offerings

Responds with all learners' progress in all offerings.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.users_all_progress_get200_response import UsersAllProgressGet200Response
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
    api_instance = openapi_client.LearnerActivityApi(api_client)
    top = '50' # str | Returns only the first n results. (optional) (default to '50')
    orderby = 'orderby_example' # str | Sorts the results. (optional)
    filter = 'filter_example' # str | Filters the results, based on a Boolean condition. (optional)

    try:
        # Find learner progress in all offerings
        api_response = api_instance.users_all_progress_get(top=top, orderby=orderby, filter=filter)
        print("The response of LearnerActivityApi->users_all_progress_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LearnerActivityApi->users_all_progress_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **top** | **str**| Returns only the first n results. | [optional] [default to &#39;50&#39;]
 **orderby** | **str**| Sorts the results. | [optional] 
 **filter** | **str**| Filters the results, based on a Boolean condition. | [optional] 

### Return type

[**UsersAllProgressGet200Response**](UsersAllProgressGet200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Learners progress |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_offerings_offering_id_progress_get**
> UsersUserEmailOfferingsOfferingIdProgressGet200Response users_user_email_offerings_offering_id_progress_get(user_email, offering_id)

Find learner's progress in a specified offering

Responds with the learner's progress in a specified offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.users_user_email_offerings_offering_id_progress_get200_response import UsersUserEmailOfferingsOfferingIdProgressGet200Response
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
    api_instance = openapi_client.LearnerActivityApi(api_client)
    user_email = 'user_email_example' # str | user's email
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find learner's progress in a specified offering
        api_response = api_instance.users_user_email_offerings_offering_id_progress_get(user_email, offering_id)
        print("The response of LearnerActivityApi->users_user_email_offerings_offering_id_progress_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LearnerActivityApi->users_user_email_offerings_offering_id_progress_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**UsersUserEmailOfferingsOfferingIdProgressGet200Response**](UsersUserEmailOfferingsOfferingIdProgressGet200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user&#39;s offerings |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_progress_get**
> LearnerResponse users_user_email_progress_get(user_email)

Find learner's progress in offerings

Responds with the specified learner's progress in all offerings.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.learner_response import LearnerResponse
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
    api_instance = openapi_client.LearnerActivityApi(api_client)
    user_email = 'user_email_example' # str | user's email

    try:
        # Find learner's progress in offerings
        api_response = api_instance.users_user_email_progress_get(user_email)
        print("The response of LearnerActivityApi->users_user_email_progress_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LearnerActivityApi->users_user_email_progress_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 

### Return type

[**LearnerResponse**](LearnerResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Learner Progress |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

