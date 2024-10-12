# openapi_client.AccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_check_name_availability**](AccountsApi.md#accounts_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/checkNameAvailability | 
[**accounts_create**](AccountsApi.md#accounts_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName} | 
[**accounts_delete**](AccountsApi.md#accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName} | 
[**accounts_enable_key_vault**](AccountsApi.md#accounts_enable_key_vault) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/enableKeyVault | 
[**accounts_get**](AccountsApi.md#accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName} | 
[**accounts_list**](AccountsApi.md#accounts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/accounts | 
[**accounts_list_by_resource_group**](AccountsApi.md#accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts | 
[**accounts_update**](AccountsApi.md#accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName} | 


# **accounts_check_name_availability**
> NameAvailabilityInformation accounts_check_name_availability(subscription_id, location, api_version, parameters)



Checks whether the specified account name is available or taken.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameters import CheckNameAvailabilityParameters
from openapi_client.models.name_availability_information import NameAvailabilityInformation
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The resource location without whitespace.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CheckNameAvailabilityParameters() # CheckNameAvailabilityParameters | Parameters supplied to check the Data Lake Store account name availability.

    try:
        api_response = api_instance.accounts_check_name_availability(subscription_id, location, api_version, parameters)
        print("The response of AccountsApi->accounts_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The resource location without whitespace. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CheckNameAvailabilityParameters**](CheckNameAvailabilityParameters.md)| Parameters supplied to check the Data Lake Store account name availability. | 

### Return type

[**NameAvailabilityInformation**](NameAvailabilityInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the Data Lake Store account name availability information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_create**
> DataLakeStoreAccount accounts_create(subscription_id, resource_group_name, account_name, api_version, parameters)



Creates the specified Data Lake Store account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_data_lake_store_account_parameters import CreateDataLakeStoreAccountParameters
from openapi_client.models.data_lake_store_account import DataLakeStoreAccount
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CreateDataLakeStoreAccountParameters() # CreateDataLakeStoreAccountParameters | Parameters supplied to create the Data Lake Store account.

    try:
        api_response = api_instance.accounts_create(subscription_id, resource_group_name, account_name, api_version, parameters)
        print("The response of AccountsApi->accounts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CreateDataLakeStoreAccountParameters**](CreateDataLakeStoreAccountParameters.md)| Parameters supplied to create the Data Lake Store account. | 

### Return type

[**DataLakeStoreAccount**](DataLakeStoreAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created the account. |  -  |
**201** | Successfully initiated creation of the account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_delete**
> accounts_delete(subscription_id, resource_group_name, account_name, api_version)



Deletes the specified Data Lake Store account.

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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.accounts_delete(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the specified account. |  -  |
**202** | Successfully initiated the deletion of the specified account. |  -  |
**204** | The specified account was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_enable_key_vault**
> accounts_enable_key_vault(subscription_id, resource_group_name, account_name, api_version)



Attempts to enable a user managed Key Vault for encryption of the specified Data Lake Store account.

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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.accounts_enable_key_vault(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_enable_key_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully enabled the user-managed Key Vault settings used for encrypting this Data Lake Store account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_get**
> DataLakeStoreAccount accounts_get(subscription_id, resource_group_name, account_name, api_version)



Gets the specified Data Lake Store account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account import DataLakeStoreAccount
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.accounts_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of AccountsApi->accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DataLakeStoreAccount**](DataLakeStoreAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list**
> DataLakeStoreAccountListResult accounts_list(subscription_id, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Lists the Data Lake Store accounts within the subscription. The response includes a link to the next page of results, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account_list_result import DataLakeStoreAccountListResult
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.accounts_list(subscription_id, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of AccountsApi->accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**DataLakeStoreAccountListResult**](DataLakeStoreAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of accounts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_resource_group**
> DataLakeStoreAccountListResult accounts_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Lists the Data Lake Store accounts within a specific resource group. The response includes a link to the next page of results, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account_list_result import DataLakeStoreAccountListResult
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.accounts_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of AccountsApi->accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**DataLakeStoreAccountListResult**](DataLakeStoreAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of accounts in the specified resource group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update**
> DataLakeStoreAccount accounts_update(subscription_id, resource_group_name, account_name, api_version, parameters)



Updates the specified Data Lake Store account information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account import DataLakeStoreAccount
from openapi_client.models.update_data_lake_store_account_parameters import UpdateDataLakeStoreAccountParameters
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateDataLakeStoreAccountParameters() # UpdateDataLakeStoreAccountParameters | Parameters supplied to update the Data Lake Store account.

    try:
        api_response = api_instance.accounts_update(subscription_id, resource_group_name, account_name, api_version, parameters)
        print("The response of AccountsApi->accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateDataLakeStoreAccountParameters**](UpdateDataLakeStoreAccountParameters.md)| Parameters supplied to update the Data Lake Store account. | 

### Return type

[**DataLakeStoreAccount**](DataLakeStoreAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the account details. |  -  |
**201** | Successfully initiated the update of the account details. |  -  |
**202** | Successfully initiated the update of the account details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

