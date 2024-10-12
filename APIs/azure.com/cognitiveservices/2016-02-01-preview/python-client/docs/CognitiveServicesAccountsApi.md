# openapi_client.CognitiveServicesAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cognitive_services_accounts_create**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName} | 
[**cognitive_services_accounts_delete**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName} | 
[**cognitive_services_accounts_get_properties**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_get_properties) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName} | 
[**cognitive_services_accounts_list**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts | 
[**cognitive_services_accounts_list_by_resource_group**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts | 
[**cognitive_services_accounts_list_keys**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys | 
[**cognitive_services_accounts_list_skus**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_list_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus | 
[**cognitive_services_accounts_regenerate_key**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey | 
[**cognitive_services_accounts_update**](CognitiveServicesAccountsApi.md#cognitive_services_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName} | 


# **cognitive_services_accounts_create**
> CognitiveServicesAccount cognitive_services_accounts_create(resource_group_name, account_name, api_version, subscription_id, parameters)



Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account import CognitiveServicesAccount
from openapi_client.models.cognitive_services_account_create_parameters import CognitiveServicesAccountCreateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    parameters = openapi_client.CognitiveServicesAccountCreateParameters() # CognitiveServicesAccountCreateParameters | The parameters to provide for the created account.

    try:
        api_response = api_instance.cognitive_services_accounts_create(resource_group_name, account_name, api_version, subscription_id, parameters)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **parameters** | [**CognitiveServicesAccountCreateParameters**](CognitiveServicesAccountCreateParameters.md)| The parameters to provide for the created account. | 

### Return type

[**CognitiveServicesAccount**](CognitiveServicesAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created successfully or already existed, the service should return 200 (OK). |  -  |
**201** | If resource is created successfully, the service should return 201 (OK). |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_delete**
> cognitive_services_accounts_delete(resource_group_name, account_name, api_version, subscription_id)



Deletes a Cognitive Services account from the resource group. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_instance.cognitive_services_accounts_delete(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A 200 (OK) should be returned if the object exists and was deleted successfully; |  -  |
**204** | a 204 (NoContent) should be used if the resource does not exist and the request is well formed. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_get_properties**
> CognitiveServicesAccount cognitive_services_accounts_get_properties(resource_group_name, account_name, api_version, subscription_id)



Returns a Cognitive Services account specified by the parameters.

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account import CognitiveServicesAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.cognitive_services_accounts_get_properties(resource_group_name, account_name, api_version, subscription_id)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_get_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_get_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**CognitiveServicesAccount**](CognitiveServicesAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. The only GET specific properties are \&quot;name,\&quot; \&quot;type\&quot; and \&quot;id.\&quot; Field Description Kind required.  String.  The API set for this API account. It can be   · a single API, for example: Face API, Vision API, Speech API.   a bundle of APIs:  Face + Speech, Vision + Emotion, etc. sku.name Required.  The pricing tier/plan of this API. Could be:   F0 - Free  B0 - Basic  S0 - Standard  P0 - Premium  |  -  |
**0** | Error response describing why the operation failed. If the resource does not exist, 404 (NotFound) should be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_list**
> CognitiveServicesAccountListResult cognitive_services_accounts_list(api_version, subscription_id)



Returns all the resources of a particular type belonging to a subscription.

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account_list_result import CognitiveServicesAccountListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.cognitive_services_accounts_list(api_version, subscription_id)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**CognitiveServicesAccountListResult**](CognitiveServicesAccountListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code. The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility. For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section.  |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_list_by_resource_group**
> CognitiveServicesAccountListResult cognitive_services_accounts_list_by_resource_group(resource_group_name, subscription_id, api_version)



Returns all the resources of a particular type belonging to a resource group

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account_list_result import CognitiveServicesAccountListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview

    try:
        api_response = api_instance.cognitive_services_accounts_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 

### Return type

[**CognitiveServicesAccountListResult**](CognitiveServicesAccountListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code. The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with \&quot;value\&quot; property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility. The nextLink should be implemented using following query parameters: · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink. · top: the optional client query parameter which defines the maximum number of records to be returned by the server. Implementation details: · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query.  · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response.  Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed. |  -  |
**0** | Error response describing why the operation failed. If the resource group does not exist, 404 (NotFound) will be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_list_keys**
> CognitiveServicesAccountKeys cognitive_services_accounts_list_keys(resource_group_name, account_name, api_version, subscription_id)



Lists the account keys for the specified Cognitive Services account.

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account_keys import CognitiveServicesAccountKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.cognitive_services_accounts_list_keys(resource_group_name, account_name, api_version, subscription_id)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.   | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**CognitiveServicesAccountKeys**](CognitiveServicesAccountKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns with a response body containing the subscription keys for the resource: key1 The first API key for authentication when client calls the API endpoint.  key2 The second API key for authentication when client calls the API endpoint. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_list_skus**
> CognitiveServicesAccountEnumerateSkusResult cognitive_services_accounts_list_skus(resource_group_name, account_name, api_version, subscription_id)



List available SKUs for the requested Cognitive Services account

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account_enumerate_skus_result import CognitiveServicesAccountEnumerateSkusResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.cognitive_services_accounts_list_skus(resource_group_name, account_name, api_version, subscription_id)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.   | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**CognitiveServicesAccountEnumerateSkusResult**](CognitiveServicesAccountEnumerateSkusResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. The only GET specific properties are \&quot;name,\&quot; \&quot;type\&quot; and \&quot;id.\&quot; Field Description sku Required, object  The exact set of keys that define this sku. This matches the fields on the respective resource. sku.name Required, string  The name of the SKU. This is typically a letter + number code, such as A0 or P3 sku.tier Required, string  The tier of this particular SKU. Typically one of:  · Free  · Basic  · Standard  · Premium  |  -  |
**0** | Error response describing why the operation failed. If the resource does not exist, 404 (NotFound) will be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_regenerate_key**
> CognitiveServicesAccountKeys cognitive_services_accounts_regenerate_key(resource_group_name, account_name, api_version, subscription_id, body)



Regenerates the specified account key for the specified Cognitive Services account.

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account_keys import CognitiveServicesAccountKeys
from openapi_client.models.regenerate_key_parameters import RegenerateKeyParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    body = openapi_client.RegenerateKeyParameters() # RegenerateKeyParameters | regenerate key parameters.

    try:
        api_response = api_instance.cognitive_services_accounts_regenerate_key(resource_group_name, account_name, api_version, subscription_id, body)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.   | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **body** | [**RegenerateKeyParameters**](RegenerateKeyParameters.md)| regenerate key parameters. | 

### Return type

[**CognitiveServicesAccountKeys**](CognitiveServicesAccountKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cognitive_services_accounts_update**
> CognitiveServicesAccount cognitive_services_accounts_update(resource_group_name, account_name, api_version, subscription_id, body)



Updates a Cognitive Services account

### Example


```python
import openapi_client
from openapi_client.models.cognitive_services_account import CognitiveServicesAccount
from openapi_client.models.cognitive_services_account_update_parameters import CognitiveServicesAccountUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CognitiveServicesAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-02-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    body = openapi_client.CognitiveServicesAccountUpdateParameters() # CognitiveServicesAccountUpdateParameters | The parameters to provide for the created account.

    try:
        api_response = api_instance.cognitive_services_accounts_update(resource_group_name, account_name, api_version, subscription_id, body)
        print("The response of CognitiveServicesAccountsApi->cognitive_services_accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CognitiveServicesAccountsApi->cognitive_services_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-02-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **body** | [**CognitiveServicesAccountUpdateParameters**](CognitiveServicesAccountUpdateParameters.md)| The parameters to provide for the created account. | 

### Return type

[**CognitiveServicesAccount**](CognitiveServicesAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully.  |  -  |
**0** | Error response describing why the operation failed. If the resource group *or* resource does not exist, 404 (NotFound) should be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

