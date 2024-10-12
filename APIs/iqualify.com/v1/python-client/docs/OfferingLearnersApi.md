# openapi_client.OfferingLearnersApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_users_get**](OfferingLearnersApi.md#offerings_offering_id_users_get) | **GET** /offerings/{offeringId}/users | Find offering&#39;s users
[**offerings_offering_id_users_marker_email_marks_delete**](OfferingLearnersApi.md#offerings_offering_id_users_marker_email_marks_delete) | **DELETE** /offerings/{offeringId}/users/{markerEmail}/marks | Remove learners from coach&#39;s marking list
[**offerings_offering_id_users_marker_email_marks_get**](OfferingLearnersApi.md#offerings_offering_id_users_marker_email_marks_get) | **GET** /offerings/{offeringId}/users/{markerEmail}/marks | Find Learners marked by a coach
[**offerings_offering_id_users_marker_email_marks_post**](OfferingLearnersApi.md#offerings_offering_id_users_marker_email_marks_post) | **POST** /offerings/{offeringId}/users/{markerEmail}/marks | Add learners to be marked by a coach
[**offerings_offering_id_users_post**](OfferingLearnersApi.md#offerings_offering_id_users_post) | **POST** /offerings/{offeringId}/users | Adds user to the offering
[**offerings_offering_id_users_user_email_delete**](OfferingLearnersApi.md#offerings_offering_id_users_user_email_delete) | **DELETE** /offerings/{offeringId}/users/{userEmail} | Removes user from the offering
[**users_user_email_transfer_patch**](OfferingLearnersApi.md#users_user_email_transfer_patch) | **PATCH** /users/{userEmail}/transfer | Transfer a user between offerings


# **offerings_offering_id_users_get**
> List[OfferingUserResponse] offerings_offering_id_users_get(offering_id, facilitators=facilitators, learners=learners, markers=markers)

Find offering's users

Responds with a list of users in the offering (facilitators, learners and markers.).

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_user_response import OfferingUserResponse
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    facilitators = true # str | If true, facilitators are included in the results. (optional) (default to true)
    learners = true # str | If true, learners are included in the results. (optional) (default to true)
    markers = true # str | If true, markers are included in the results. (optional) (default to true)

    try:
        # Find offering's users
        api_response = api_instance.offerings_offering_id_users_get(offering_id, facilitators=facilitators, learners=learners, markers=markers)
        print("The response of OfferingLearnersApi->offerings_offering_id_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->offerings_offering_id_users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **facilitators** | **str**| If true, facilitators are included in the results. | [optional] [default to true]
 **learners** | **str**| If true, learners are included in the results. | [optional] [default to true]
 **markers** | **str**| If true, markers are included in the results. | [optional] [default to true]

### Return type

[**List[OfferingUserResponse]**](OfferingUserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering&#39;s users |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_marker_email_marks_delete**
> List[OfferingUser] offerings_offering_id_users_marker_email_marks_delete(offering_id, marker_email, request_body)

Remove learners from coach's marking list

Removes an array of learners from coach's marking list.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_user import OfferingUser
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    marker_email = 'marker_email_example' # str | marker's email
    request_body = ['request_body_example'] # List[str] | array of learners e-mails

    try:
        # Remove learners from coach's marking list
        api_response = api_instance.offerings_offering_id_users_marker_email_marks_delete(offering_id, marker_email, request_body)
        print("The response of OfferingLearnersApi->offerings_offering_id_users_marker_email_marks_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->offerings_offering_id_users_marker_email_marks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **marker_email** | **str**| marker&#39;s email | 
 **request_body** | [**List[str]**](str.md)| array of learners e-mails | 

### Return type

[**List[OfferingUser]**](OfferingUser.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | learners marked by the marker |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_marker_email_marks_get**
> List[OfferingUser] offerings_offering_id_users_marker_email_marks_get(offering_id, marker_email)

Find Learners marked by a coach

Responds with all learners marked by the specified coach.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_user import OfferingUser
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    marker_email = 'marker_email_example' # str | marker's email

    try:
        # Find Learners marked by a coach
        api_response = api_instance.offerings_offering_id_users_marker_email_marks_get(offering_id, marker_email)
        print("The response of OfferingLearnersApi->offerings_offering_id_users_marker_email_marks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->offerings_offering_id_users_marker_email_marks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **marker_email** | **str**| marker&#39;s email | 

### Return type

[**List[OfferingUser]**](OfferingUser.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | learners marked by the marker |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_marker_email_marks_post**
> List[OfferingUser] offerings_offering_id_users_marker_email_marks_post(offering_id, marker_email, request_body)

Add learners to be marked by a coach

Adds an array of learners to be marked by the specified coach.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_user import OfferingUser
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    marker_email = 'marker_email_example' # str | marker's email
    request_body = ['request_body_example'] # List[str] | array of learners e-mails

    try:
        # Add learners to be marked by a coach
        api_response = api_instance.offerings_offering_id_users_marker_email_marks_post(offering_id, marker_email, request_body)
        print("The response of OfferingLearnersApi->offerings_offering_id_users_marker_email_marks_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->offerings_offering_id_users_marker_email_marks_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **marker_email** | **str**| marker&#39;s email | 
 **request_body** | [**List[str]**](str.md)| array of learners e-mails | 

### Return type

[**List[OfferingUser]**](OfferingUser.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | learners marked by the marker |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_post**
> List[OfferingUserAddResponse] offerings_offering_id_users_post(offering_id, offering_user)

Adds user to the offering

Adds one or more users to the offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_user import OfferingUser
from openapi_client.models.offering_user_add_response import OfferingUserAddResponse
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    offering_user = [openapi_client.OfferingUser()] # List[OfferingUser] | 

    try:
        # Adds user to the offering
        api_response = api_instance.offerings_offering_id_users_post(offering_id, offering_user)
        print("The response of OfferingLearnersApi->offerings_offering_id_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->offerings_offering_id_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **offering_user** | [**List[OfferingUser]**](OfferingUser.md)|  | 

### Return type

[**List[OfferingUserAddResponse]**](OfferingUserAddResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | user successfully added to the offering |  -  |
**207** | Partially successful response |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_user_email_delete**
> offerings_offering_id_users_user_email_delete(offering_id, user_email)

Removes user from the offering

Removes a user from the offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    user_email = 'user_email_example' # str | user's email

    try:
        # Removes user from the offering
        api_instance.offerings_offering_id_users_user_email_delete(offering_id, user_email)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->offerings_offering_id_users_user_email_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **user_email** | **str**| user&#39;s email | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | user successfully removed from the offering |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_transfer_patch**
> users_user_email_transfer_patch(user_email, transfer_request)

Transfer a user between offerings

Moves the user's access and progress from one offering to another.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.transfer_request import TransferRequest
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
    api_instance = openapi_client.OfferingLearnersApi(api_client)
    user_email = 'user_email_example' # str | user's email
    transfer_request = openapi_client.TransferRequest() # TransferRequest | transfer_data

    try:
        # Transfer a user between offerings
        api_instance.users_user_email_transfer_patch(user_email, transfer_request)
    except Exception as e:
        print("Exception when calling OfferingLearnersApi->users_user_email_transfer_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 
 **transfer_request** | [**TransferRequest**](TransferRequest.md)| transfer_data | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated user information |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

