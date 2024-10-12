# openapi_client.UserApi

All URIs are relative to *https://a.blazemeter.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**active_sessions**](UserApi.md#active_sessions) | **GET** /user/active/sessions | &amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**panic_terminate**](UserApi.md#panic_terminate) | **POST** /user/active/terminate | &amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**register**](UserApi.md#register) | **POST** /user/register | Registration&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**register_retrieve**](UserApi.md#register_retrieve) | **GET** /user/register | Registration&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**retrieve_collections**](UserApi.md#retrieve_collections) | **GET** /user/collections | List organization multi-tests&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**retrieve_invites**](UserApi.md#retrieve_invites) | **GET** /user/invites | &amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**retrieve_locations**](UserApi.md#retrieve_locations) | **GET** /user/locations | Get user available locations&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**retrieve_masters**](UserApi.md#retrieve_masters) | **GET** /user/masters | List user private masters&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**retrieve_projects**](UserApi.md#retrieve_projects) | **GET** /user/projects | Get user projects&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**retrieve_tests**](UserApi.md#retrieve_tests) | **GET** /user/tests | List user private tests&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**top**](UserApi.md#top) | **GET** /user/top | &amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**user_password_patch**](UserApi.md#user_password_patch) | **PATCH** /user/password | Update user name&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**user_password_post**](UserApi.md#user_password_post) | **POST** /user/password | Update user name&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;
[**user_password_put**](UserApi.md#user_password_put) | **PUT** /user/password | Update user name&amp;nbsp; &lt;i class&#x3D;\&quot;fa fa-lg fa-unlock-alt\&quot;&gt;&lt;/i&gt;


# **active_sessions**
> object active_sessions()

&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # &nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.active_sessions()
        print("The response of UserApi->active_sessions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->active_sessions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **panic_terminate**
> object panic_terminate(blazemeter_routing_v4_user_model5=blazemeter_routing_v4_user_model5)

&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    blazemeter_routing_v4_user_model5 = None # object | <section class=\"body-param\"><strong>session_ids</strong> (required)<br/></section> (optional)

    try:
        # &nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.panic_terminate(blazemeter_routing_v4_user_model5=blazemeter_routing_v4_user_model5)
        print("The response of UserApi->panic_terminate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->panic_terminate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blazemeter_routing_v4_user_model5** | **object**| &lt;section class&#x3D;\&quot;body-param\&quot;&gt;&lt;strong&gt;session_ids&lt;/strong&gt; (required)&lt;br/&gt;&lt;/section&gt; | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/csv, text/plain
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register**
> object register(blazemeter_routing_v4_user_model4)

Registration&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    blazemeter_routing_v4_user_model4 = None # object | <section class=\"body-param\"><strong>firstName</strong> (required)<br/><strong>lastName</strong> (required)<br/><strong>email</strong> (required)<br/><strong>password</strong> (required)<br/></section>

    try:
        # Registration&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.register(blazemeter_routing_v4_user_model4)
        print("The response of UserApi->register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blazemeter_routing_v4_user_model4** | **object**| &lt;section class&#x3D;\&quot;body-param\&quot;&gt;&lt;strong&gt;firstName&lt;/strong&gt; (required)&lt;br/&gt;&lt;strong&gt;lastName&lt;/strong&gt; (required)&lt;br/&gt;&lt;strong&gt;email&lt;/strong&gt; (required)&lt;br/&gt;&lt;strong&gt;password&lt;/strong&gt; (required)&lt;br/&gt;&lt;/section&gt; | 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/csv, text/plain
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_retrieve**
> object register_retrieve(email, password, first_name=first_name, last_name=last_name)

Registration&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    email = 'email_example' # str | Email address
    password = 'password_example' # str | Password
    first_name = 'first_name_example' # str | First name (optional)
    last_name = 'last_name_example' # str | Last name (optional)

    try:
        # Registration&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.register_retrieve(email, password, first_name=first_name, last_name=last_name)
        print("The response of UserApi->register_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->register_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| Email address | 
 **password** | **str**| Password | 
 **first_name** | **str**| First name | [optional] 
 **last_name** | **str**| Last name | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_collections**
> object retrieve_collections(skip=skip, limit=limit)

List organization multi-tests&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    skip = 'skip_example' # str |  (optional)
    limit = 'limit_example' # str |  (optional)

    try:
        # List organization multi-tests&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.retrieve_collections(skip=skip, limit=limit)
        print("The response of UserApi->retrieve_collections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->retrieve_collections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **str**|  | [optional] 
 **limit** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_invites**
> List[str] retrieve_invites()

&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # &nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.retrieve_invites()
        print("The response of UserApi->retrieve_invites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->retrieve_invites: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_locations**
> object retrieve_locations()

Get user available locations&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # Get user available locations&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.retrieve_locations()
        print("The response of UserApi->retrieve_locations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->retrieve_locations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_masters**
> object retrieve_masters(skip=skip, limit=limit)

List user private masters&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    skip = 56 # int |  (optional)
    limit = 1000 # int |  (optional) (default to 1000)

    try:
        # List user private masters&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.retrieve_masters(skip=skip, limit=limit)
        print("The response of UserApi->retrieve_masters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->retrieve_masters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 1000]

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_projects**
> object retrieve_projects()

Get user projects&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # Get user projects&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.retrieve_projects()
        print("The response of UserApi->retrieve_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->retrieve_projects: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_tests**
> object retrieve_tests(skip=skip, limit=limit)

List user private tests&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    skip = 'skip_example' # str |  (optional)
    limit = 'limit_example' # str |  (optional)

    try:
        # List user private tests&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.retrieve_tests(skip=skip, limit=limit)
        print("The response of UserApi->retrieve_tests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->retrieve_tests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **str**|  | [optional] 
 **limit** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **top**
> List[str] top()

&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # &nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.top()
        print("The response of UserApi->top:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->top: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_password_patch**
> object user_password_patch(blazemeter_routing_v4_user_model1)

Update user name&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    blazemeter_routing_v4_user_model1 = None # object | <section class=\"body-param\"><strong>currentPassword</strong> (required)<br/><strong>newPassword</strong> (required)<br/></section>

    try:
        # Update user name&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.user_password_patch(blazemeter_routing_v4_user_model1)
        print("The response of UserApi->user_password_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_password_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blazemeter_routing_v4_user_model1** | **object**| &lt;section class&#x3D;\&quot;body-param\&quot;&gt;&lt;strong&gt;currentPassword&lt;/strong&gt; (required)&lt;br/&gt;&lt;strong&gt;newPassword&lt;/strong&gt; (required)&lt;br/&gt;&lt;/section&gt; | 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/csv, text/plain
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_password_post**
> object user_password_post(blazemeter_routing_v4_user_model3)

Update user name&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    blazemeter_routing_v4_user_model3 = None # object | <section class=\"body-param\"><strong>currentPassword</strong> (required)<br/><strong>newPassword</strong> (required)<br/></section>

    try:
        # Update user name&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.user_password_post(blazemeter_routing_v4_user_model3)
        print("The response of UserApi->user_password_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blazemeter_routing_v4_user_model3** | **object**| &lt;section class&#x3D;\&quot;body-param\&quot;&gt;&lt;strong&gt;currentPassword&lt;/strong&gt; (required)&lt;br/&gt;&lt;strong&gt;newPassword&lt;/strong&gt; (required)&lt;br/&gt;&lt;/section&gt; | 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/csv, text/plain
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_password_put**
> object user_password_put(blazemeter_routing_v4_user_model2)

Update user name&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://a.blazemeter.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://a.blazemeter.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    blazemeter_routing_v4_user_model2 = None # object | <section class=\"body-param\"><strong>currentPassword</strong> (required)<br/><strong>newPassword</strong> (required)<br/></section>

    try:
        # Update user name&nbsp; <i class=\"fa fa-lg fa-unlock-alt\"></i>
        api_response = api_instance.user_password_put(blazemeter_routing_v4_user_model2)
        print("The response of UserApi->user_password_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_password_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blazemeter_routing_v4_user_model2** | **object**| &lt;section class&#x3D;\&quot;body-param\&quot;&gt;&lt;strong&gt;currentPassword&lt;/strong&gt; (required)&lt;br/&gt;&lt;strong&gt;newPassword&lt;/strong&gt; (required)&lt;br/&gt;&lt;/section&gt; | 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/csv, text/plain
 - **Accept**: application/json, text/html, text/javascript, text/csv, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**500** | RestException |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

