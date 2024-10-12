# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**content_key_policies_create_or_update**](DefaultApi.md#content_key_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName} | Create or update an Content Key Policy
[**content_key_policies_delete**](DefaultApi.md#content_key_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName} | Delete a Content Key Policy
[**content_key_policies_get**](DefaultApi.md#content_key_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName} | Get a Content Key Policy
[**content_key_policies_get_policy_properties_with_secrets**](DefaultApi.md#content_key_policies_get_policy_properties_with_secrets) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName}/getPolicyPropertiesWithSecrets | Get a Content Key Policy with secrets
[**content_key_policies_list**](DefaultApi.md#content_key_policies_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies | List Content Key Policies
[**content_key_policies_update**](DefaultApi.md#content_key_policies_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName} | Update a Content Key Policy


# **content_key_policies_create_or_update**
> ContentKeyPolicy content_key_policies_create_or_update(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version, parameters)

Create or update an Content Key Policy

Create or update a Content Key Policy in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.content_key_policy import ContentKeyPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    content_key_policy_name = 'content_key_policy_name_example' # str | The Content Key Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.ContentKeyPolicy() # ContentKeyPolicy | The request parameters

    try:
        # Create or update an Content Key Policy
        api_response = api_instance.content_key_policies_create_or_update(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version, parameters)
        print("The response of DefaultApi->content_key_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->content_key_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **content_key_policy_name** | **str**| The Content Key Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**ContentKeyPolicy**](ContentKeyPolicy.md)| The request parameters | 

### Return type

[**ContentKeyPolicy**](ContentKeyPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_key_policies_delete**
> content_key_policies_delete(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version)

Delete a Content Key Policy

Deletes a Content Key Policy in the Media Services account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    content_key_policy_name = 'content_key_policy_name_example' # str | The Content Key Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete a Content Key Policy
        api_instance.content_key_policies_delete(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->content_key_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **content_key_policy_name** | **str**| The Content Key Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_key_policies_get**
> ContentKeyPolicy content_key_policies_get(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version)

Get a Content Key Policy

Get the details of a Content Key Policy in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.content_key_policy import ContentKeyPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    content_key_policy_name = 'content_key_policy_name_example' # str | The Content Key Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get a Content Key Policy
        api_response = api_instance.content_key_policies_get(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version)
        print("The response of DefaultApi->content_key_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->content_key_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **content_key_policy_name** | **str**| The Content Key Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**ContentKeyPolicy**](ContentKeyPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_key_policies_get_policy_properties_with_secrets**
> ContentKeyPolicyProperties content_key_policies_get_policy_properties_with_secrets(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version)

Get a Content Key Policy with secrets

Get a Content Key Policy including secret values

### Example


```python
import openapi_client
from openapi_client.models.content_key_policy_properties import ContentKeyPolicyProperties
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    content_key_policy_name = 'content_key_policy_name_example' # str | The Content Key Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get a Content Key Policy with secrets
        api_response = api_instance.content_key_policies_get_policy_properties_with_secrets(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version)
        print("The response of DefaultApi->content_key_policies_get_policy_properties_with_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->content_key_policies_get_policy_properties_with_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **content_key_policy_name** | **str**| The Content Key Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**ContentKeyPolicyProperties**](ContentKeyPolicyProperties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_key_policies_list**
> ContentKeyPolicyCollection content_key_policies_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)

List Content Key Policies

Lists the Content Key Policies in the account

### Example


```python
import openapi_client
from openapi_client.models.content_key_policy_collection import ContentKeyPolicyCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    filter = 'filter_example' # str | Restricts the set of items returned. (optional)
    top = 56 # int | Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. (optional)
    orderby = 'orderby_example' # str | Specifies the key by which the result collection should be ordered. (optional)

    try:
        # List Content Key Policies
        api_response = api_instance.content_key_policies_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)
        print("The response of DefaultApi->content_key_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->content_key_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **filter** | **str**| Restricts the set of items returned. | [optional] 
 **top** | **int**| Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. | [optional] 
 **orderby** | **str**| Specifies the key by which the result collection should be ordered. | [optional] 

### Return type

[**ContentKeyPolicyCollection**](ContentKeyPolicyCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_key_policies_update**
> ContentKeyPolicy content_key_policies_update(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version, parameters)

Update a Content Key Policy

Updates an existing Content Key Policy in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.content_key_policy import ContentKeyPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    content_key_policy_name = 'content_key_policy_name_example' # str | The Content Key Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.ContentKeyPolicy() # ContentKeyPolicy | The request parameters

    try:
        # Update a Content Key Policy
        api_response = api_instance.content_key_policies_update(subscription_id, resource_group_name, account_name, content_key_policy_name, api_version, parameters)
        print("The response of DefaultApi->content_key_policies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->content_key_policies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **content_key_policy_name** | **str**| The Content Key Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**ContentKeyPolicy**](ContentKeyPolicy.md)| The request parameters | 

### Return type

[**ContentKeyPolicy**](ContentKeyPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

