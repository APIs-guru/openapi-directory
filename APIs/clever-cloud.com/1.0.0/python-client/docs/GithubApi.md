# openapi_client.GithubApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_github_link_0**](GithubApi.md#delete_github_link_0) | **DELETE** /github/link | 
[**get_github_0**](GithubApi.md#get_github_0) | **GET** /github | 
[**get_github_applications_1**](GithubApi.md#get_github_applications_1) | **GET** /github/applications | 
[**get_github_callback_0**](GithubApi.md#get_github_callback_0) | **GET** /github/callback | 
[**get_github_emails_0**](GithubApi.md#get_github_emails_0) | **GET** /github/emails | 
[**get_github_keys_0**](GithubApi.md#get_github_keys_0) | **GET** /github/keys | 
[**get_github_link_0**](GithubApi.md#get_github_link_0) | **GET** /github/link | 
[**get_github_login_0**](GithubApi.md#get_github_login_0) | **GET** /github/login | 
[**get_github_signup_0**](GithubApi.md#get_github_signup_0) | **GET** /github/signup | 
[**get_github_username_0**](GithubApi.md#get_github_username_0) | **GET** /github/username | 
[**post_github_redeploy_0**](GithubApi.md#post_github_redeploy_0) | **POST** /github/redeploy | 
[**post_github_signup_0**](GithubApi.md#post_github_signup_0) | **POST** /github/signup | 


# **delete_github_link_0**
> delete_github_link_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)

    try:
        api_instance.delete_github_link_0()
    except Exception as e:
        print("Exception when calling GithubApi->delete_github_link_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | unlinkGithub |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_0**
> TransactionId get_github_0()



### Example


```python
import openapi_client
from openapi_client.models.transaction_id import TransactionId
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)

    try:
        api_response = api_instance.get_github_0()
        print("The response of GithubApi->get_github_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TransactionId**](TransactionId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | startGithub |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_applications_1**
> List[Application] get_github_applications_1()



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)

    try:
        api_response = api_instance.get_github_applications_1()
        print("The response of GithubApi->get_github_applications_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_applications_1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubApplications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_callback_0**
> get_github_callback_0(code=code, state=state, error=error, error_description=error_description, error_uri=error_uri, cookie=cookie)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)
    code = 'code_example' # str |  (optional)
    state = 'state_example' # str |  (optional)
    error = 'error_example' # str |  (optional)
    error_description = 'error_description_example' # str |  (optional)
    error_uri = 'error_uri_example' # str |  (optional)
    cookie = 'cookie_example' # str |  (optional)

    try:
        api_instance.get_github_callback_0(code=code, state=state, error=error, error_description=error_description, error_uri=error_uri, cookie=cookie)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_callback_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  | [optional] 
 **state** | **str**|  | [optional] 
 **error** | **str**|  | [optional] 
 **error_description** | **str**|  | [optional] 
 **error_uri** | **str**|  | [optional] 
 **cookie** | **str**|  | [optional] 

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
**200** | githubCallback |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_emails_0**
> List[str] get_github_emails_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)

    try:
        api_response = api_instance.get_github_emails_0()
        print("The response of GithubApi->get_github_emails_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_emails_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubEmails |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_keys_0**
> List[Key] get_github_keys_0()



### Example


```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)

    try:
        api_response = api_instance.get_github_keys_0()
        print("The response of GithubApi->get_github_keys_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_keys_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Key]**](Key.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubKeys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_link_0**
> get_github_link_0(transaction_id=transaction_id, redirect_url=redirect_url)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)
    transaction_id = 'transaction_id_example' # str | From GET /github (optional)
    redirect_url = 'redirect_url_example' # str |  (optional)

    try:
        api_instance.get_github_link_0(transaction_id=transaction_id, redirect_url=redirect_url)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_link_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| From GET /github | [optional] 
 **redirect_url** | **str**|  | [optional] 

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
**200** | linkGithub |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_login_0**
> get_github_login_0(redirect_url=redirect_url, from_authorize=from_authorize)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)
    redirect_url = 'redirect_url_example' # str |  (optional)
    from_authorize = 'from_authorize_example' # str |  (optional)

    try:
        api_instance.get_github_login_0(redirect_url=redirect_url, from_authorize=from_authorize)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_login_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_url** | **str**|  | [optional] 
 **from_authorize** | **str**|  | [optional] 

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
**200** | githubLogin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_signup_0**
> get_github_signup_0(redirect_url=redirect_url, from_authorize=from_authorize)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)
    redirect_url = 'redirect_url_example' # str |  (optional)
    from_authorize = 'from_authorize_example' # str |  (optional)

    try:
        api_instance.get_github_signup_0(redirect_url=redirect_url, from_authorize=from_authorize)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_signup_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_url** | **str**|  | [optional] 
 **from_authorize** | **str**|  | [optional] 

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
**200** | githubSignup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_username_0**
> str get_github_username_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)

    try:
        api_response = api_instance.get_github_username_0()
        print("The response of GithubApi->get_github_username_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GithubApi->get_github_username_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubUsername |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_github_redeploy_0**
> post_github_redeploy_0(user_agent=user_agent, x_github_event=x_github_event, x_hub_signature=x_hub_signature)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)
    user_agent = 'user_agent_example' # str |  (optional)
    x_github_event = 'x_github_event_example' # str |  (optional)
    x_hub_signature = 'x_hub_signature_example' # str |  (optional)

    try:
        api_instance.post_github_redeploy_0(user_agent=user_agent, x_github_event=x_github_event, x_hub_signature=x_hub_signature)
    except Exception as e:
        print("Exception when calling GithubApi->post_github_redeploy_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_agent** | **str**|  | [optional] 
 **x_github_event** | **str**|  | [optional] 
 **x_hub_signature** | **str**|  | [optional] 

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
**200** | redeployApp |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_github_signup_0**
> post_github_signup_0(transaction_id=transaction_id, name=name, other_id=other_id, other_email=other_email, password=password, auto_link=auto_link, terms=terms)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GithubApi(api_client)
    transaction_id = 'transaction_id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    other_id = 'other_id_example' # str |  (optional)
    other_email = 'other_email_example' # str |  (optional)
    password = 'password_example' # str |  (optional)
    auto_link = 'auto_link_example' # str |  (optional)
    terms = 'terms_example' # str |  (optional)

    try:
        api_instance.post_github_signup_0(transaction_id=transaction_id, name=name, other_id=other_id, other_email=other_email, password=password, auto_link=auto_link, terms=terms)
    except Exception as e:
        print("Exception when calling GithubApi->post_github_signup_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **other_id** | **str**|  | [optional] 
 **other_email** | **str**|  | [optional] 
 **password** | **str**|  | [optional] 
 **auto_link** | **str**|  | [optional] 
 **terms** | **str**|  | [optional] 

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
**200** | finsihGithubSignup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

