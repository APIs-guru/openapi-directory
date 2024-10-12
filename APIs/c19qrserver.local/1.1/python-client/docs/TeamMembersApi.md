# openapi_client.TeamMembersApi

All URIs are relative to *http://c19qrserver.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_post**](TeamMembersApi.md#user_post) | **POST** /user | Create a user
[**user_user_id_delete**](TeamMembersApi.md#user_user_id_delete) | **DELETE** /user/{userId} | Delete a team member&#39;s user record
[**user_user_id_get**](TeamMembersApi.md#user_user_id_get) | **GET** /user/{userId} | Retrieve the information associated with a team member&#39;s user record
[**users_get**](TeamMembersApi.md#users_get) | **GET** /users | Retrieve the information associated with all team members&#39; user records


# **user_post**
> CreateUserResponse user_post(sample3)

Create a user

Use this endpoint to create a team member (user) record

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.create_user_response import CreateUserResponse
from openapi_client.models.sample3 import Sample3
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
    api_instance = openapi_client.TeamMembersApi(api_client)
    sample3 = openapi_client.Sample3() # Sample3 | Create User Payload

    try:
        # Create a user
        api_response = api_instance.user_post(sample3)
        print("The response of TeamMembersApi->user_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMembersApi->user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sample3** | [**Sample3**](Sample3.md)| Create User Payload | 

### Return type

[**CreateUserResponse**](CreateUserResponse.md)

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

# **user_user_id_delete**
> user_user_id_delete(user_id)

Delete a team member's user record

To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens.  

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
    api_instance = openapi_client.TeamMembersApi(api_client)
    user_id = 1 # int | The ID of the user record to be deleted.

    try:
        # Delete a team member's user record
        api_instance.user_user_id_delete(user_id)
    except Exception as e:
        print("Exception when calling TeamMembersApi->user_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| The ID of the user record to be deleted. | 

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

# **user_user_id_get**
> UserRecord user_user_id_get(user_id)

Retrieve the information associated with a team member's user record

Retrieve the information associated with a user's account 

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
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
    api_instance = openapi_client.TeamMembersApi(api_client)
    user_id = 1 # int | The ID of the user record to be retrieved.

    try:
        # Retrieve the information associated with a team member's user record
        api_response = api_instance.user_user_id_get(user_id)
        print("The response of TeamMembersApi->user_user_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMembersApi->user_user_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| The ID of the user record to be retrieved. | 

### Return type

[**UserRecord**](UserRecord.md)

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

# **users_get**
> List[UserRecord] users_get()

Retrieve the information associated with all team members' user records

Retrieve the information associated with all team members' user records 

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
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
    api_instance = openapi_client.TeamMembersApi(api_client)

    try:
        # Retrieve the information associated with all team members' user records
        api_response = api_instance.users_get()
        print("The response of TeamMembersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMembersApi->users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[UserRecord]**](UserRecord.md)

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

