# openapi_client.LabsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**labs_add_users**](LabsApi.md#labs_add_users) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/addUsers | 
[**labs_create_or_update**](LabsApi.md#labs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName} | 
[**labs_delete**](LabsApi.md#labs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName} | 
[**labs_get**](LabsApi.md#labs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName} | 
[**labs_list**](LabsApi.md#labs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs | 
[**labs_register**](LabsApi.md#labs_register) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/register | 
[**labs_update**](LabsApi.md#labs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName} | 


# **labs_add_users**
> labs_add_users(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, add_users_payload)



Add users to a lab

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.add_users_payload import AddUsersPayload
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    add_users_payload = openapi_client.AddUsersPayload() # AddUsersPayload | Payload for Add Users operation on a Lab.

    try:
        api_instance.labs_add_users(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, add_users_payload)
    except Exception as e:
        print("Exception when calling LabsApi->labs_add_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **add_users_payload** | [**AddUsersPayload**](AddUsersPayload.md)| Payload for Add Users operation on a Lab. | 

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

# **labs_create_or_update**
> Lab labs_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, lab)



Create or replace an existing Lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab import Lab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    lab = openapi_client.Lab() # Lab | Represents a lab.

    try:
        api_response = api_instance.labs_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, lab)
        print("The response of LabsApi->labs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **lab** | [**Lab**](Lab.md)| Represents a lab. | 

### Return type

[**Lab**](Lab.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs_delete**
> labs_delete(subscription_id, resource_group_name, lab_account_name, lab_name, api_version)



Delete lab. This operation can take a while to complete

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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.labs_delete(subscription_id, resource_group_name, lab_account_name, lab_name, api_version)
    except Exception as e:
        print("Exception when calling LabsApi->labs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs_get**
> Lab labs_get(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, expand=expand)



Get lab

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab import Lab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=maxUsersInLab)' (optional)

    try:
        api_response = api_instance.labs_get(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, expand=expand)
        print("The response of LabsApi->labs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;maxUsersInLab)&#39; | [optional] 

### Return type

[**Lab**](Lab.md)

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

# **labs_list**
> ResponseWithContinuationLab labs_list(subscription_id, resource_group_name, lab_account_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List labs in a given lab account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_lab import ResponseWithContinuationLab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=maxUsersInLab)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.labs_list(subscription_id, resource_group_name, lab_account_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of LabsApi->labs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;maxUsersInLab)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationLab**](ResponseWithContinuationLab.md)

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

# **labs_register**
> labs_register(subscription_id, resource_group_name, lab_account_name, lab_name, api_version)



Register to managed lab.

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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.labs_register(subscription_id, resource_group_name, lab_account_name, lab_name, api_version)
    except Exception as e:
        print("Exception when calling LabsApi->labs_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs_update**
> Lab labs_update(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, lab)



Modify properties of labs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab import Lab
from openapi_client.models.lab_fragment import LabFragment
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    lab = openapi_client.LabFragment() # LabFragment | Represents a lab.

    try:
        api_response = api_instance.labs_update(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, lab)
        print("The response of LabsApi->labs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **lab** | [**LabFragment**](LabFragment.md)| Represents a lab. | 

### Return type

[**Lab**](Lab.md)

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

