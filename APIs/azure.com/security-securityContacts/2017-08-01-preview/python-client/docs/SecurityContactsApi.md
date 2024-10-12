# openapi_client.SecurityContactsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**security_contacts_create**](SecurityContactsApi.md#security_contacts_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName} | 
[**security_contacts_delete**](SecurityContactsApi.md#security_contacts_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName} | 
[**security_contacts_get**](SecurityContactsApi.md#security_contacts_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName} | 
[**security_contacts_list**](SecurityContactsApi.md#security_contacts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts | 
[**security_contacts_update**](SecurityContactsApi.md#security_contacts_update) | **PATCH** /subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName} | 


# **security_contacts_create**
> SecurityContact security_contacts_create(api_version, subscription_id, security_contact_name, security_contact)



Security contact configurations for the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_contact import SecurityContact
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
    api_instance = openapi_client.SecurityContactsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    security_contact_name = 'security_contact_name_example' # str | Name of the security contact object
    security_contact = openapi_client.SecurityContact() # SecurityContact | Security contact object

    try:
        api_response = api_instance.security_contacts_create(api_version, subscription_id, security_contact_name, security_contact)
        print("The response of SecurityContactsApi->security_contacts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityContactsApi->security_contacts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **security_contact_name** | **str**| Name of the security contact object | 
 **security_contact** | [**SecurityContact**](SecurityContact.md)| Security contact object | 

### Return type

[**SecurityContact**](SecurityContact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_contacts_delete**
> security_contacts_delete(api_version, subscription_id, security_contact_name)



Security contact configurations for the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.SecurityContactsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    security_contact_name = 'security_contact_name_example' # str | Name of the security contact object

    try:
        api_instance.security_contacts_delete(api_version, subscription_id, security_contact_name)
    except Exception as e:
        print("Exception when calling SecurityContactsApi->security_contacts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **security_contact_name** | **str**| Name of the security contact object | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_contacts_get**
> SecurityContact security_contacts_get(api_version, subscription_id, security_contact_name)



Security contact configurations for the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_contact import SecurityContact
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
    api_instance = openapi_client.SecurityContactsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    security_contact_name = 'security_contact_name_example' # str | Name of the security contact object

    try:
        api_response = api_instance.security_contacts_get(api_version, subscription_id, security_contact_name)
        print("The response of SecurityContactsApi->security_contacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityContactsApi->security_contacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **security_contact_name** | **str**| Name of the security contact object | 

### Return type

[**SecurityContact**](SecurityContact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_contacts_list**
> SecurityContactList security_contacts_list(api_version, subscription_id)



Security contact configurations for the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_contact_list import SecurityContactList
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
    api_instance = openapi_client.SecurityContactsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.security_contacts_list(api_version, subscription_id)
        print("The response of SecurityContactsApi->security_contacts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityContactsApi->security_contacts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**SecurityContactList**](SecurityContactList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_contacts_update**
> SecurityContact security_contacts_update(api_version, subscription_id, security_contact_name, security_contact)



Security contact configurations for the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_contact import SecurityContact
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
    api_instance = openapi_client.SecurityContactsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    security_contact_name = 'security_contact_name_example' # str | Name of the security contact object
    security_contact = openapi_client.SecurityContact() # SecurityContact | Security contact object

    try:
        api_response = api_instance.security_contacts_update(api_version, subscription_id, security_contact_name, security_contact)
        print("The response of SecurityContactsApi->security_contacts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityContactsApi->security_contacts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **security_contact_name** | **str**| Name of the security contact object | 
 **security_contact** | [**SecurityContact**](SecurityContact.md)| Security contact object | 

### Return type

[**SecurityContact**](SecurityContact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

