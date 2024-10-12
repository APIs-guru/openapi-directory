# openapi_client.PersonalPagingPoliciesApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_profile_username_policies_get**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_get) | **GET** /api-public/v1/profile/{username}/policies | Get the user&#39;s paging policy
[**api_public_v1_profile_username_policies_post**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_post) | **POST** /api-public/v1/profile/{username}/policies | Create a paging policy step
[**api_public_v1_profile_username_policies_step_get**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_step_get) | **GET** /api-public/v1/profile/{username}/policies/{step} | Get a paging policy step
[**api_public_v1_profile_username_policies_step_post**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_step_post) | **POST** /api-public/v1/profile/{username}/policies/{step} | Create a rule for a paging policy step
[**api_public_v1_profile_username_policies_step_put**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_step_put) | **PUT** /api-public/v1/profile/{username}/policies/{step} | Update a paging policy step
[**api_public_v1_profile_username_policies_step_rule_delete**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_step_rule_delete) | **DELETE** /api-public/v1/profile/{username}/policies/{step}/{rule} | Delete a rule from a paging policy step
[**api_public_v1_profile_username_policies_step_rule_get**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_step_rule_get) | **GET** /api-public/v1/profile/{username}/policies/{step}/{rule} | Get a rule from a paging policy step
[**api_public_v1_profile_username_policies_step_rule_put**](PersonalPagingPoliciesApi.md#api_public_v1_profile_username_policies_step_rule_put) | **PUT** /api-public/v1/profile/{username}/policies/{step}/{rule} | Update a rule for a paging policy step


# **api_public_v1_profile_username_policies_get**
> ApiPublicV1ProfileUsernamePoliciesGet200Response api_public_v1_profile_username_policies_get(username, x_vo_api_id, x_vo_api_key)

Get the user's paging policy

Get all the paging policy steps for the user on the org associated with the API key  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_profile_username_policies_get200_response import ApiPublicV1ProfileUsernamePoliciesGet200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get the user's paging policy
        api_response = api_instance.api_public_v1_profile_username_policies_get(username, x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesGet200Response**](ApiPublicV1ProfileUsernamePoliciesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All steps of the user&#39;s paging policy |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_post**
> ApiPublicV1ProfileUsernamePoliciesPost200Response api_public_v1_profile_username_policies_post(username, x_vo_api_id, x_vo_api_key, body)

Create a paging policy step

Create a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_group_payload import AddGroupPayload
from openapi_client.models.api_public_v1_profile_username_policies_post200_response import ApiPublicV1ProfileUsernamePoliciesPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AddGroupPayload() # AddGroupPayload | 

    try:
        # Create a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_post(username, x_vo_api_id, x_vo_api_key, body)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AddGroupPayload**](AddGroupPayload.md)|  | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesPost200Response**](ApiPublicV1ProfileUsernamePoliciesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_step_get**
> ApiPublicV1ProfileUsernamePoliciesPost200Response api_public_v1_profile_username_policies_step_get(username, step, x_vo_api_id, x_vo_api_key)

Get a paging policy step

Get a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_profile_username_policies_post200_response import ApiPublicV1ProfileUsernamePoliciesPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    step = 3.4 # float | Paging policy step
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_step_get(username, step, x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **step** | **float**| Paging policy step | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesPost200Response**](ApiPublicV1ProfileUsernamePoliciesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_step_post**
> ApiPublicV1ProfileUsernamePoliciesStepPost200Response api_public_v1_profile_username_policies_step_post(username, step, x_vo_api_id, x_vo_api_key, body)

Create a rule for a paging policy step

Create a rule for a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_step_payload import AddStepPayload
from openapi_client.models.api_public_v1_profile_username_policies_step_post200_response import ApiPublicV1ProfileUsernamePoliciesStepPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    step = 3.4 # float | Paging policy step
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AddStepPayload() # AddStepPayload | 

    try:
        # Create a rule for a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_step_post(username, step, x_vo_api_id, x_vo_api_key, body)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **step** | **float**| Paging policy step | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AddStepPayload**](AddStepPayload.md)|  | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesStepPost200Response**](ApiPublicV1ProfileUsernamePoliciesStepPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created rule for the paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_step_put**
> ApiPublicV1ProfileUsernamePoliciesPost200Response api_public_v1_profile_username_policies_step_put(username, step, x_vo_api_id, x_vo_api_key, body)

Update a paging policy step

Update a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_group_payload import AddGroupPayload
from openapi_client.models.api_public_v1_profile_username_policies_post200_response import ApiPublicV1ProfileUsernamePoliciesPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    step = 3.4 # float | Paging policy step
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AddGroupPayload() # AddGroupPayload | 

    try:
        # Update a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_step_put(username, step, x_vo_api_id, x_vo_api_key, body)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **step** | **float**| Paging policy step | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AddGroupPayload**](AddGroupPayload.md)|  | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesPost200Response**](ApiPublicV1ProfileUsernamePoliciesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_step_rule_delete**
> ApiPublicV1ProfileUsernamePoliciesStepPost200Response api_public_v1_profile_username_policies_step_rule_delete(username, step, rule, x_vo_api_id, x_vo_api_key)

Delete a rule from a paging policy step

Delete a rule from a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_profile_username_policies_step_post200_response import ApiPublicV1ProfileUsernamePoliciesStepPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    step = 3.4 # float | Paging policy step
    rule = 3.4 # float | Rule for a paging policy step
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Delete a rule from a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_step_rule_delete(username, step, rule, x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_rule_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_rule_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **step** | **float**| Paging policy step | 
 **rule** | **float**| Rule for a paging policy step | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesStepPost200Response**](ApiPublicV1ProfileUsernamePoliciesStepPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted rule from the paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_step_rule_get**
> ApiPublicV1ProfileUsernamePoliciesStepPost200Response api_public_v1_profile_username_policies_step_rule_get(username, step, rule, x_vo_api_id, x_vo_api_key)

Get a rule from a paging policy step

Get a rule from a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_profile_username_policies_step_post200_response import ApiPublicV1ProfileUsernamePoliciesStepPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    step = 3.4 # float | Paging policy step
    rule = 3.4 # float | Rule for a paging policy step
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get a rule from a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_step_rule_get(username, step, rule, x_vo_api_id, x_vo_api_key)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_rule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_rule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **step** | **float**| Paging policy step | 
 **rule** | **float**| Rule for a paging policy step | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesStepPost200Response**](ApiPublicV1ProfileUsernamePoliciesStepPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rule from the paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_profile_username_policies_step_rule_put**
> ApiPublicV1ProfileUsernamePoliciesStepPost200Response api_public_v1_profile_username_policies_step_rule_put(username, step, rule, x_vo_api_id, x_vo_api_key, body)

Update a rule for a paging policy step

Update a rule for a paging policy step  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_step_payload import AddStepPayload
from openapi_client.models.api_public_v1_profile_username_policies_step_post200_response import ApiPublicV1ProfileUsernamePoliciesStepPost200Response
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
    api_instance = openapi_client.PersonalPagingPoliciesApi(api_client)
    username = 'username_example' # str | Your username
    step = 3.4 # float | Paging policy step
    rule = 3.4 # float | Rule for a paging policy step
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AddStepPayload() # AddStepPayload | 

    try:
        # Update a rule for a paging policy step
        api_response = api_instance.api_public_v1_profile_username_policies_step_rule_put(username, step, rule, x_vo_api_id, x_vo_api_key, body)
        print("The response of PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_rule_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalPagingPoliciesApi->api_public_v1_profile_username_policies_step_rule_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username | 
 **step** | **float**| Paging policy step | 
 **rule** | **float**| Rule for a paging policy step | 
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AddStepPayload**](AddStepPayload.md)|  | 

### Return type

[**ApiPublicV1ProfileUsernamePoliciesStepPost200Response**](ApiPublicV1ProfileUsernamePoliciesStepPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated rule for the paging policy step |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

