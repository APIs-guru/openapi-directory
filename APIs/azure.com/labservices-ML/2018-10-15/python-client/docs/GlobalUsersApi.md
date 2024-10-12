# openapi_client.GlobalUsersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_users_get_environment**](GlobalUsersApi.md#global_users_get_environment) | **POST** /providers/Microsoft.LabServices/users/{userName}/getEnvironment | 
[**global_users_get_operation_batch_status**](GlobalUsersApi.md#global_users_get_operation_batch_status) | **POST** /providers/Microsoft.LabServices/users/{userName}/getOperationBatchStatus | 
[**global_users_get_operation_status**](GlobalUsersApi.md#global_users_get_operation_status) | **POST** /providers/Microsoft.LabServices/users/{userName}/getOperationStatus | 
[**global_users_get_personal_preferences**](GlobalUsersApi.md#global_users_get_personal_preferences) | **POST** /providers/Microsoft.LabServices/users/{userName}/getPersonalPreferences | 
[**global_users_list_environments**](GlobalUsersApi.md#global_users_list_environments) | **POST** /providers/Microsoft.LabServices/users/{userName}/listEnvironments | 
[**global_users_list_labs**](GlobalUsersApi.md#global_users_list_labs) | **POST** /providers/Microsoft.LabServices/users/{userName}/listLabs | 
[**global_users_register**](GlobalUsersApi.md#global_users_register) | **POST** /providers/Microsoft.LabServices/users/{userName}/register | 
[**global_users_reset_password**](GlobalUsersApi.md#global_users_reset_password) | **POST** /providers/Microsoft.LabServices/users/{userName}/resetPassword | 
[**global_users_start_environment**](GlobalUsersApi.md#global_users_start_environment) | **POST** /providers/Microsoft.LabServices/users/{userName}/startEnvironment | 
[**global_users_stop_environment**](GlobalUsersApi.md#global_users_stop_environment) | **POST** /providers/Microsoft.LabServices/users/{userName}/stopEnvironment | 


# **global_users_get_environment**
> GetEnvironmentResponse global_users_get_environment(user_name, api_version, environment_operations_payload, expand=expand)



Gets the virtual machine details

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_operations_payload import EnvironmentOperationsPayload
from openapi_client.models.get_environment_response import GetEnvironmentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment_operations_payload = openapi_client.EnvironmentOperationsPayload() # EnvironmentOperationsPayload | Represents payload for any Environment operations like get, start, stop, connect
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=environment)' (optional)

    try:
        api_response = api_instance.global_users_get_environment(user_name, api_version, environment_operations_payload, expand=expand)
        print("The response of GlobalUsersApi->global_users_get_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_get_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment_operations_payload** | [**EnvironmentOperationsPayload**](EnvironmentOperationsPayload.md)| Represents payload for any Environment operations like get, start, stop, connect | 
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;environment)&#39; | [optional] 

### Return type

[**GetEnvironmentResponse**](GetEnvironmentResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_get_operation_batch_status**
> OperationBatchStatusResponse global_users_get_operation_batch_status(user_name, api_version, operation_batch_status_payload)



Get batch operation status

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_batch_status_payload import OperationBatchStatusPayload
from openapi_client.models.operation_batch_status_response import OperationBatchStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    operation_batch_status_payload = openapi_client.OperationBatchStatusPayload() # OperationBatchStatusPayload | Payload to get the status of an operation

    try:
        api_response = api_instance.global_users_get_operation_batch_status(user_name, api_version, operation_batch_status_payload)
        print("The response of GlobalUsersApi->global_users_get_operation_batch_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_get_operation_batch_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **operation_batch_status_payload** | [**OperationBatchStatusPayload**](OperationBatchStatusPayload.md)| Payload to get the status of an operation | 

### Return type

[**OperationBatchStatusResponse**](OperationBatchStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_get_operation_status**
> OperationStatusResponse global_users_get_operation_status(user_name, api_version, operation_status_payload)



Gets the status of long running operation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_status_payload import OperationStatusPayload
from openapi_client.models.operation_status_response import OperationStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    operation_status_payload = openapi_client.OperationStatusPayload() # OperationStatusPayload | Payload to get the status of an operation

    try:
        api_response = api_instance.global_users_get_operation_status(user_name, api_version, operation_status_payload)
        print("The response of GlobalUsersApi->global_users_get_operation_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_get_operation_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **operation_status_payload** | [**OperationStatusPayload**](OperationStatusPayload.md)| Payload to get the status of an operation | 

### Return type

[**OperationStatusResponse**](OperationStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_get_personal_preferences**
> GetPersonalPreferencesResponse global_users_get_personal_preferences(user_name, api_version, personal_preferences_operations_payload)



Get personal preferences for a user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_personal_preferences_response import GetPersonalPreferencesResponse
from openapi_client.models.personal_preferences_operations_payload import PersonalPreferencesOperationsPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    personal_preferences_operations_payload = openapi_client.PersonalPreferencesOperationsPayload() # PersonalPreferencesOperationsPayload | Represents payload for any Environment operations like get, start, stop, connect

    try:
        api_response = api_instance.global_users_get_personal_preferences(user_name, api_version, personal_preferences_operations_payload)
        print("The response of GlobalUsersApi->global_users_get_personal_preferences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_get_personal_preferences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **personal_preferences_operations_payload** | [**PersonalPreferencesOperationsPayload**](PersonalPreferencesOperationsPayload.md)| Represents payload for any Environment operations like get, start, stop, connect | 

### Return type

[**GetPersonalPreferencesResponse**](GetPersonalPreferencesResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_list_environments**
> ListEnvironmentsResponse global_users_list_environments(user_name, api_version, list_environments_payload)



List Environments for the user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_environments_payload import ListEnvironmentsPayload
from openapi_client.models.list_environments_response import ListEnvironmentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    list_environments_payload = openapi_client.ListEnvironmentsPayload() # ListEnvironmentsPayload | Represents the payload to list environments owned by a user

    try:
        api_response = api_instance.global_users_list_environments(user_name, api_version, list_environments_payload)
        print("The response of GlobalUsersApi->global_users_list_environments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_list_environments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **list_environments_payload** | [**ListEnvironmentsPayload**](ListEnvironmentsPayload.md)| Represents the payload to list environments owned by a user | 

### Return type

[**ListEnvironmentsResponse**](ListEnvironmentsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_list_labs**
> ListLabsResponse global_users_list_labs(user_name, api_version)



List labs for the user.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_labs_response import ListLabsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_response = api_instance.global_users_list_labs(user_name, api_version)
        print("The response of GlobalUsersApi->global_users_list_labs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_list_labs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

### Return type

[**ListLabsResponse**](ListLabsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_register**
> global_users_register(user_name, api_version, register_payload)



Register a user to a managed lab

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.register_payload import RegisterPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    register_payload = openapi_client.RegisterPayload() # RegisterPayload | Represents payload for Register action.

    try:
        api_instance.global_users_register(user_name, api_version, register_payload)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **register_payload** | [**RegisterPayload**](RegisterPayload.md)| Represents payload for Register action. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_reset_password**
> global_users_reset_password(user_name, api_version, reset_password_payload)



Resets the user password on an environment This operation can take a while to complete

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reset_password_payload import ResetPasswordPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    reset_password_payload = openapi_client.ResetPasswordPayload() # ResetPasswordPayload | Represents the payload for resetting passwords.

    try:
        api_instance.global_users_reset_password(user_name, api_version, reset_password_payload)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_reset_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **reset_password_payload** | [**ResetPasswordPayload**](ResetPasswordPayload.md)| Represents the payload for resetting passwords. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_start_environment**
> global_users_start_environment(user_name, api_version, environment_operations_payload)



Starts an environment by starting all resources inside the environment. This operation can take a while to complete

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_operations_payload import EnvironmentOperationsPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment_operations_payload = openapi_client.EnvironmentOperationsPayload() # EnvironmentOperationsPayload | Represents payload for any Environment operations like get, start, stop, connect

    try:
        api_instance.global_users_start_environment(user_name, api_version, environment_operations_payload)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_start_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment_operations_payload** | [**EnvironmentOperationsPayload**](EnvironmentOperationsPayload.md)| Represents payload for any Environment operations like get, start, stop, connect | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_users_stop_environment**
> global_users_stop_environment(user_name, api_version, environment_operations_payload)



Stops an environment by stopping all resources inside the environment This operation can take a while to complete

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_operations_payload import EnvironmentOperationsPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalUsersApi(api_client)
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment_operations_payload = openapi_client.EnvironmentOperationsPayload() # EnvironmentOperationsPayload | Represents payload for any Environment operations like get, start, stop, connect

    try:
        api_instance.global_users_stop_environment(user_name, api_version, environment_operations_payload)
    except Exception as e:
        print("Exception when calling GlobalUsersApi->global_users_stop_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment_operations_payload** | [**EnvironmentOperationsPayload**](EnvironmentOperationsPayload.md)| Represents payload for any Environment operations like get, start, stop, connect | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

