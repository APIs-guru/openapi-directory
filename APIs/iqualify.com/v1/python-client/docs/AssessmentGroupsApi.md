# openapi_client.AssessmentGroupsApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_groups_get**](AssessmentGroupsApi.md#offerings_offering_id_groups_get) | **GET** /offerings/{offeringId}/groups | Find assessment groups
[**offerings_offering_id_groups_group_id_learners_get**](AssessmentGroupsApi.md#offerings_offering_id_groups_group_id_learners_get) | **GET** /offerings/{offeringId}/groups/{groupId}/learners | Find learners in an assessment group
[**offerings_offering_id_groups_group_id_learners_post**](AssessmentGroupsApi.md#offerings_offering_id_groups_group_id_learners_post) | **POST** /offerings/{offeringId}/groups/{groupId}/learners | Add a learner to an assessment group
[**offerings_offering_id_groups_group_id_learners_user_email_delete**](AssessmentGroupsApi.md#offerings_offering_id_groups_group_id_learners_user_email_delete) | **DELETE** /offerings/{offeringId}/groups/{groupId}/learners/{userEmail} | Remove a learner from an assessment group
[**offerings_offering_id_groups_post**](AssessmentGroupsApi.md#offerings_offering_id_groups_post) | **POST** /offerings/{offeringId}/groups | Add an assessment group


# **offerings_offering_id_groups_get**
> List[AssessmentGroupResponse] offerings_offering_id_groups_get(offering_id)

Find assessment groups

Responds with a list of assessment groups in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assessment_group_response import AssessmentGroupResponse
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
    api_instance = openapi_client.AssessmentGroupsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find assessment groups
        api_response = api_instance.offerings_offering_id_groups_get(offering_id)
        print("The response of AssessmentGroupsApi->offerings_offering_id_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentGroupsApi->offerings_offering_id_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[AssessmentGroupResponse]**](AssessmentGroupResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful response |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_groups_group_id_learners_get**
> List[UserResponse] offerings_offering_id_groups_group_id_learners_get(offering_id, group_id)

Find learners in an assessment group

Responds with a list of learners in a specified assessment group.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user_response import UserResponse
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
    api_instance = openapi_client.AssessmentGroupsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    group_id = 'group_id_example' # str | Assessment group id

    try:
        # Find learners in an assessment group
        api_response = api_instance.offerings_offering_id_groups_group_id_learners_get(offering_id, group_id)
        print("The response of AssessmentGroupsApi->offerings_offering_id_groups_group_id_learners_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentGroupsApi->offerings_offering_id_groups_group_id_learners_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **group_id** | **str**| Assessment group id | 

### Return type

[**List[UserResponse]**](UserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful response |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_groups_group_id_learners_post**
> UserResponse offerings_offering_id_groups_group_id_learners_post(offering_id, group_id, offerings_offering_id_groups_group_id_learners_post_request)

Add a learner to an assessment group

Adds a learner into the specified assessment group.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offerings_offering_id_groups_group_id_learners_post_request import OfferingsOfferingIdGroupsGroupIdLearnersPostRequest
from openapi_client.models.user_response import UserResponse
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
    api_instance = openapi_client.AssessmentGroupsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    group_id = 'group_id_example' # str | Assessment group id
    offerings_offering_id_groups_group_id_learners_post_request = openapi_client.OfferingsOfferingIdGroupsGroupIdLearnersPostRequest() # OfferingsOfferingIdGroupsGroupIdLearnersPostRequest | 

    try:
        # Add a learner to an assessment group
        api_response = api_instance.offerings_offering_id_groups_group_id_learners_post(offering_id, group_id, offerings_offering_id_groups_group_id_learners_post_request)
        print("The response of AssessmentGroupsApi->offerings_offering_id_groups_group_id_learners_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentGroupsApi->offerings_offering_id_groups_group_id_learners_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **group_id** | **str**| Assessment group id | 
 **offerings_offering_id_groups_group_id_learners_post_request** | [**OfferingsOfferingIdGroupsGroupIdLearnersPostRequest**](OfferingsOfferingIdGroupsGroupIdLearnersPostRequest.md)|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Succesful response |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_groups_group_id_learners_user_email_delete**
> offerings_offering_id_groups_group_id_learners_user_email_delete(offering_id, group_id, user_email)

Remove a learner from an assessment group

Removes a learner from the specified assessment group.

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
    api_instance = openapi_client.AssessmentGroupsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    group_id = 'group_id_example' # str | Assessment group id
    user_email = 'user_email_example' # str | user's email

    try:
        # Remove a learner from an assessment group
        api_instance.offerings_offering_id_groups_group_id_learners_user_email_delete(offering_id, group_id, user_email)
    except Exception as e:
        print("Exception when calling AssessmentGroupsApi->offerings_offering_id_groups_group_id_learners_user_email_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **group_id** | **str**| Assessment group id | 
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
**204** | user successfully removed from the assessment group |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_groups_post**
> AssessmentGroupResponse offerings_offering_id_groups_post(offering_id, assessment_group_required)

Add an assessment group

Creates a new assessment group in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assessment_group_required import AssessmentGroupRequired
from openapi_client.models.assessment_group_response import AssessmentGroupResponse
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
    api_instance = openapi_client.AssessmentGroupsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    assessment_group_required = openapi_client.AssessmentGroupRequired() # AssessmentGroupRequired | 

    try:
        # Add an assessment group
        api_response = api_instance.offerings_offering_id_groups_post(offering_id, assessment_group_required)
        print("The response of AssessmentGroupsApi->offerings_offering_id_groups_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentGroupsApi->offerings_offering_id_groups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **assessment_group_required** | [**AssessmentGroupRequired**](AssessmentGroupRequired.md)|  | 

### Return type

[**AssessmentGroupResponse**](AssessmentGroupResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | assessment group successfully added |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

