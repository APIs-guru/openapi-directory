# openapi_client.EnterpriseApiApi

All URIs are relative to *https://api.callcontrol.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_api_get_user**](EnterpriseApiApi.md#enterprise_api_get_user) | **GET** /api/2015-11-01/Enterprise/GetUser/{phoneNumber} | Enterprise  GET: GetUser  Returns the current information from the user;  try 12066194123 as demo
[**enterprise_api_should_block**](EnterpriseApiApi.md#enterprise_api_should_block) | **GET** /api/2015-11-01/Enterprise/ShouldBlock/{phoneNumber}/{userPhoneNumber} | Enterprise  GET: ShouldBlock  Simple Enteprise which returns a call block proceed decision.
[**enterprise_api_upsert_user**](EnterpriseApiApi.md#enterprise_api_upsert_user) | **POST** /api/2015-11-01/Enterprise/UpsertUser | UpsertUser: insert or update all properties from a user  PhoneNumber  WhiteList (list of phone numbers to whitelist)  BlackList (list of phone numbers to blacklist)  QuietHourList (list of quiet hour objects)  UseCommunityBlacklist (enable / disable community blacklist) default true  BreakThroughQhWithMultipleCalls (break through quiet hours with two calls in 3 minutes)  WhiteListBreaksQh (break through quiet hours for whitelist)


# **enterprise_api_get_user**
> CallControlUser enterprise_api_get_user(phone_number)

Enterprise  GET: GetUser  Returns the current information from the user;  try 12066194123 as demo

### Example


```python
import openapi_client
from openapi_client.models.call_control_user import CallControlUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.callcontrol.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.callcontrol.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnterpriseApiApi(api_client)
    phone_number = 'phone_number_example' # str | 

    try:
        # Enterprise  GET: GetUser  Returns the current information from the user;  try 12066194123 as demo
        api_response = api_instance.enterprise_api_get_user(phone_number)
        print("The response of EnterpriseApiApi->enterprise_api_get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnterpriseApiApi->enterprise_api_get_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number** | **str**|  | 

### Return type

[**CallControlUser**](CallControlUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User Object |  -  |
**400** | Bad request (invalid phone number) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_api_should_block**
> str enterprise_api_should_block(phone_number, user_phone_number)

Enterprise  GET: ShouldBlock  Simple Enteprise which returns a call block proceed decision.

This returns information required to perform basic call blocking behaviors              Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.callcontrol.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.callcontrol.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnterpriseApiApi(api_client)
    phone_number = 'phone_number_example' # str | phone number to search
    user_phone_number = 'user_phone_number_example' # str | (OPTIONAL) phone number of user to look up block rules

    try:
        # Enterprise  GET: ShouldBlock  Simple Enteprise which returns a call block proceed decision.
        api_response = api_instance.enterprise_api_should_block(phone_number, user_phone_number)
        print("The response of EnterpriseApiApi->enterprise_api_should_block:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnterpriseApiApi->enterprise_api_should_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number** | **str**| phone number to search | 
 **user_phone_number** | **str**| (OPTIONAL) phone number of user to look up block rules | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | true(block) false (no block) |  -  |
**400** | Bad request (invalid phone number) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_api_upsert_user**
> object enterprise_api_upsert_user(user)

UpsertUser: insert or update all properties from a user  PhoneNumber  WhiteList (list of phone numbers to whitelist)  BlackList (list of phone numbers to blacklist)  QuietHourList (list of quiet hour objects)  UseCommunityBlacklist (enable / disable community blacklist) default true  BreakThroughQhWithMultipleCalls (break through quiet hours with two calls in 3 minutes)  WhiteListBreaksQh (break through quiet hours for whitelist)

### Example


```python
import openapi_client
from openapi_client.models.call_control_user import CallControlUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.callcontrol.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.callcontrol.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnterpriseApiApi(api_client)
    user = openapi_client.CallControlUser() # CallControlUser | [FromBody] User               <remarks>This returns information required to perform basic call blocking behaviors.  The demo key will return ok, but will not save the data.<br /></remarks>

    try:
        # UpsertUser: insert or update all properties from a user  PhoneNumber  WhiteList (list of phone numbers to whitelist)  BlackList (list of phone numbers to blacklist)  QuietHourList (list of quiet hour objects)  UseCommunityBlacklist (enable / disable community blacklist) default true  BreakThroughQhWithMultipleCalls (break through quiet hours with two calls in 3 minutes)  WhiteListBreaksQh (break through quiet hours for whitelist)
        api_response = api_instance.enterprise_api_upsert_user(user)
        print("The response of EnterpriseApiApi->enterprise_api_upsert_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnterpriseApiApi->enterprise_api_upsert_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**CallControlUser**](CallControlUser.md)| [FromBody] User               &lt;remarks&gt;This returns information required to perform basic call blocking behaviors.  The demo key will return ok, but will not save the data.&lt;br /&gt;&lt;/remarks&gt; | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad request (eg. invalid phone nubmer) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

