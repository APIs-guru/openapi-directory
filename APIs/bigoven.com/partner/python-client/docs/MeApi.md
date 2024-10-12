# openapi_client.MeApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**me_get_options**](MeApi.md#me_get_options) | **GET** /me/preferences/options | Gets the options.
[**me_index**](MeApi.md#me_index) | **GET** /me | Indexes this instance.
[**me_profile_put**](MeApi.md#me_profile_put) | **PUT** /me/profile | Puts me.
[**me_put_me**](MeApi.md#me_put_me) | **PUT** /me | Puts me.
[**me_put_me_personal**](MeApi.md#me_put_me_personal) | **PUT** /me/personal | Puts me personal.
[**me_put_me_preferences**](MeApi.md#me_put_me_preferences) | **PUT** /me/preferences | Puts me preferences.
[**me_skinny**](MeApi.md#me_skinny) | **GET** /me/skinny | Skinnies this instance.


# **me_get_options**
> API2ControllersWebAPIMeControllerPreferenceOptions me_get_options()

Gets the options.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_apime_controller_preference_options import API2ControllersWebAPIMeControllerPreferenceOptions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)

    try:
        # Gets the options.
        api_response = api_instance.me_get_options()
        print("The response of MeApi->me_get_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_get_options: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**API2ControllersWebAPIMeControllerPreferenceOptions**](API2ControllersWebAPIMeControllerPreferenceOptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_index**
> API2ModelsBigOvenUser me_index()

Indexes this instance.

### Example


```python
import openapi_client
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)

    try:
        # Indexes this instance.
        api_response = api_instance.me_index()
        print("The response of MeApi->me_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_index: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_profile_put**
> API2ModelsBigOvenUser me_profile_put(api2_models_profile)

Puts me.

### Example


```python
import openapi_client
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser
from openapi_client.models.api2_models_profile import API2ModelsProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)
    api2_models_profile = openapi_client.API2ModelsProfile() # API2ModelsProfile | The req.

    try:
        # Puts me.
        api_response = api_instance.me_profile_put(api2_models_profile)
        print("The response of MeApi->me_profile_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_profile_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_models_profile** | [**API2ModelsProfile**](API2ModelsProfile.md)| The req. | 

### Return type

[**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_put_me**
> API2ModelsBigOvenUser me_put_me(api2_models_big_oven_user)

Puts me.

### Example


```python
import openapi_client
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)
    api2_models_big_oven_user = openapi_client.API2ModelsBigOvenUser() # API2ModelsBigOvenUser | The req.

    try:
        # Puts me.
        api_response = api_instance.me_put_me(api2_models_big_oven_user)
        print("The response of MeApi->me_put_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_put_me: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_models_big_oven_user** | [**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)| The req. | 

### Return type

[**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_put_me_personal**
> API2ModelsBigOvenUser me_put_me_personal(api2_models_personal)

Puts me personal.

### Example


```python
import openapi_client
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser
from openapi_client.models.api2_models_personal import API2ModelsPersonal
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)
    api2_models_personal = openapi_client.API2ModelsPersonal() # API2ModelsPersonal | The req.

    try:
        # Puts me personal.
        api_response = api_instance.me_put_me_personal(api2_models_personal)
        print("The response of MeApi->me_put_me_personal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_put_me_personal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_models_personal** | [**API2ModelsPersonal**](API2ModelsPersonal.md)| The req. | 

### Return type

[**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_put_me_preferences**
> API2ModelsBigOvenUser me_put_me_preferences(api2_models_preference)

Puts me preferences.

### Example


```python
import openapi_client
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser
from openapi_client.models.api2_models_preference import API2ModelsPreference
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)
    api2_models_preference = openapi_client.API2ModelsPreference() # API2ModelsPreference | The req.

    try:
        # Puts me preferences.
        api_response = api_instance.me_put_me_preferences(api2_models_preference)
        print("The response of MeApi->me_put_me_preferences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_put_me_preferences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_models_preference** | [**API2ModelsPreference**](API2ModelsPreference.md)| The req. | 

### Return type

[**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_skinny**
> API2ModelsBigOvenUser me_skinny()

Skinnies this instance.

### Example


```python
import openapi_client
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeApi(api_client)

    try:
        # Skinnies this instance.
        api_response = api_instance.me_skinny()
        print("The response of MeApi->me_skinny:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeApi->me_skinny: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**API2ModelsBigOvenUser**](API2ModelsBigOvenUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

