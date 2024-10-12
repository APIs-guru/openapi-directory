# openapi_client.AttendeesSigninsApi

All URIs are relative to *http://c19qrserver.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signin_post**](AttendeesSigninsApi.md#signin_post) | **POST** /signin | 
[**signin_signin_id_delete**](AttendeesSigninsApi.md#signin_signin_id_delete) | **DELETE** /signin/{signinId} | Delete a signin record
[**signin_signin_id_get**](AttendeesSigninsApi.md#signin_signin_id_get) | **GET** /signin/{signinId} | Retrieve the information associated with a signin record
[**signin_signin_id_put**](AttendeesSigninsApi.md#signin_signin_id_put) | **PUT** /signin/{signinId} | Update a signin record
[**signins_get**](AttendeesSigninsApi.md#signins_get) | **GET** /signins | Get signin info


# **signin_post**
> SigninResponse signin_post(signin=signin)



Create a new signin record

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.signin import Signin
from openapi_client.models.signin_response import SigninResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttendeesSigninsApi(api_client)
    signin = openapi_client.Signin() # Signin |  (optional)

    try:
        api_response = api_instance.signin_post(signin=signin)
        print("The response of AttendeesSigninsApi->signin_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttendeesSigninsApi->signin_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signin** | [**Signin**](Signin.md)|  | [optional] 

### Return type

[**SigninResponse**](SigninResponse.md)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**503** | Key Failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signin_signin_id_delete**
> signin_signin_id_delete(signin_id)

Delete a signin record

Delete a signin record       

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttendeesSigninsApi(api_client)
    signin_id = 1 # int | The ID of the signin record to be deleted.

    try:
        # Delete a signin record
        api_instance.signin_signin_id_delete(signin_id)
    except Exception as e:
        print("Exception when calling AttendeesSigninsApi->signin_signin_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signin_id** | **int**| The ID of the signin record to be deleted. | 

### Return type

void (empty response body)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signin_signin_id_get**
> Signin signin_signin_id_get(signin_id)

Retrieve the information associated with a signin record

Retrieve the information associated with a signin record 

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.signin import Signin
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttendeesSigninsApi(api_client)
    signin_id = 1 # int | The ID of the signin record to be retrieved.

    try:
        # Retrieve the information associated with a signin record
        api_response = api_instance.signin_signin_id_get(signin_id)
        print("The response of AttendeesSigninsApi->signin_signin_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttendeesSigninsApi->signin_signin_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signin_id** | **int**| The ID of the signin record to be retrieved. | 

### Return type

[**Signin**](Signin.md)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signin_signin_id_put**
> UserRecord signin_signin_id_put(signin_id, signin=signin)

Update a signin record

Update a signin record 

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.signin import Signin
from openapi_client.models.user_record import UserRecord
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttendeesSigninsApi(api_client)
    signin_id = 1 # int | The ID of the signin record to be retrieved.
    signin = openapi_client.Signin() # Signin |  (optional)

    try:
        # Update a signin record
        api_response = api_instance.signin_signin_id_put(signin_id, signin=signin)
        print("The response of AttendeesSigninsApi->signin_signin_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttendeesSigninsApi->signin_signin_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signin_id** | **int**| The ID of the signin record to be retrieved. | 
 **signin** | [**Signin**](Signin.md)|  | [optional] 

### Return type

[**UserRecord**](UserRecord.md)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signins_get**
> List[Signin] signins_get(less_than=less_than, return_count=return_count)

Get signin info

Returns a list of signin objects sorted by signin ID descending.

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.signin import Signin
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttendeesSigninsApi(api_client)
    less_than = 56 # int | Return signins with IDs less than this value. (optional)
    return_count = 100 # int | Return this many objects (optional) (default to 100)

    try:
        # Get signin info
        api_response = api_instance.signins_get(less_than=less_than, return_count=return_count)
        print("The response of AttendeesSigninsApi->signins_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttendeesSigninsApi->signins_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **less_than** | **int**| Return signins with IDs less than this value. | [optional] 
 **return_count** | **int**| Return this many objects | [optional] [default to 100]

### Return type

[**List[Signin]**](Signin.md)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**503** | Key Failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

