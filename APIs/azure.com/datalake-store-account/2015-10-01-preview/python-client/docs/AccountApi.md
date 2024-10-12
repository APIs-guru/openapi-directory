# openapi_client.AccountApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_create**](AccountApi.md#account_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{name} | 
[**account_create_or_update_firewall_rule**](AccountApi.md#account_create_or_update_firewall_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{name} | 
[**account_delete**](AccountApi.md#account_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName} | 
[**account_delete_firewall_rule**](AccountApi.md#account_delete_firewall_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName} | 
[**account_enable_key_vault**](AccountApi.md#account_enable_key_vault) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/enableKeyVault | 
[**account_get**](AccountApi.md#account_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName} | 
[**account_get_firewall_rule**](AccountApi.md#account_get_firewall_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName} | 
[**account_list**](AccountApi.md#account_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/accounts | 
[**account_list_by_resource_group**](AccountApi.md#account_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts | 
[**account_list_firewall_rules**](AccountApi.md#account_list_firewall_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules | 
[**account_update**](AccountApi.md#account_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{name} | 


# **account_create**
> DataLakeStoreAccount account_create(resource_group_name, name, api_version, subscription_id, parameters)



Creates the specified Data Lake Store account.

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    name = 'name_example' # str | The name of the Data Lake Store account to create.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DataLakeStoreAccount() # DataLakeStoreAccount | Parameters supplied to create the Data Lake Store account.

    try:
        api_response = api_instance.account_create(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of AccountApi->account_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **name** | **str**| The name of the Data Lake Store account to create. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DataLakeStoreAccount**](DataLakeStoreAccount.md)| Parameters supplied to create the Data Lake Store account. | 

### Return type

[**DataLakeStoreAccount**](DataLakeStoreAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_create_or_update_firewall_rule**
> FirewallRule account_create_or_update_firewall_rule(resource_group_name, account_name, name, api_version, subscription_id, parameters)



Creates or updates the specified firewall rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_rule import FirewallRule
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account to which to add the firewall rule.
    name = 'name_example' # str | The name of the firewall rule to create or update.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FirewallRule() # FirewallRule | Parameters supplied to create the create firewall rule.

    try:
        api_response = api_instance.account_create_or_update_firewall_rule(resource_group_name, account_name, name, api_version, subscription_id, parameters)
        print("The response of AccountApi->account_create_or_update_firewall_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_create_or_update_firewall_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account to which to add the firewall rule. | 
 **name** | **str**| The name of the firewall rule to create or update. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FirewallRule**](FirewallRule.md)| Parameters supplied to create the create firewall rule. | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_delete**
> account_delete(resource_group_name, account_name, api_version, subscription_id)



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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account to delete.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.account_delete(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AccountApi->account_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account to delete. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_delete_firewall_rule**
> account_delete_firewall_rule(resource_group_name, account_name, firewall_rule_name, api_version, subscription_id)



Deletes the specified firewall rule from the specified Data Lake Store account

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account from which to delete the firewall rule.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule to delete.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.account_delete_firewall_rule(resource_group_name, account_name, firewall_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AccountApi->account_delete_firewall_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account from which to delete the firewall rule. | 
 **firewall_rule_name** | **str**| The name of the firewall rule to delete. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_enable_key_vault**
> account_enable_key_vault(resource_group_name, account_name, api_version, subscription_id)



Attempts to enable a user managed key vault for encryption of the specified Data Lake Store account.

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account to attempt to enable the Key Vault for.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.account_enable_key_vault(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AccountApi->account_enable_key_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account to attempt to enable the Key Vault for. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Successfully enabled the user managed Key Vault for use encrypting this Data Lake Store account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_get**
> DataLakeStoreAccount account_get(resource_group_name, account_name, api_version, subscription_id)



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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_get(resource_group_name, account_name, api_version, subscription_id)
        print("The response of AccountApi->account_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account to retrieve. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DataLakeStoreAccount**](DataLakeStoreAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_get_firewall_rule**
> FirewallRule account_get_firewall_rule(resource_group_name, account_name, firewall_rule_name, api_version, subscription_id)



Gets the specified Data Lake Store firewall rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_rule import FirewallRule
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account from which to get the firewall rule.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_get_firewall_rule(resource_group_name, account_name, firewall_rule_name, api_version, subscription_id)
        print("The response of AccountApi->account_get_firewall_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get_firewall_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account from which to get the firewall rule. | 
 **firewall_rule_name** | **str**| The name of the firewall rule to retrieve. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list**
> DataLakeStoreAccountListResult account_list(api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)



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
    api_instance = openapi_client.AccountApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    expand = 'expand_example' # str | OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand=Products would expand Product data in line with each Category entry. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    search = 'search_example' # str | A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search=blue OR green. Optional. (optional)
    format = 'format_example' # str | The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format=json). Optional. (optional)

    try:
        api_response = api_instance.account_list(api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)
        print("The response of AccountApi->account_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **expand** | **str**| OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand&#x3D;Products would expand Product data in line with each Category entry. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **search** | **str**| A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search&#x3D;blue OR green. Optional. | [optional] 
 **format** | **str**| The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format&#x3D;json). Optional. | [optional] 

### Return type

[**DataLakeStoreAccountListResult**](DataLakeStoreAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_by_resource_group**
> DataLakeStoreAccountListResult account_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)



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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account(s).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    expand = 'expand_example' # str | OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand=Products would expand Product data in line with each Category entry. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    search = 'search_example' # str | A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search=blue OR green. Optional. (optional)
    format = 'format_example' # str | The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format=json). Optional. (optional)

    try:
        api_response = api_instance.account_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)
        print("The response of AccountApi->account_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account(s). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **expand** | **str**| OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand&#x3D;Products would expand Product data in line with each Category entry. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **search** | **str**| A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search&#x3D;blue OR green. Optional. | [optional] 
 **format** | **str**| The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format&#x3D;json). Optional. | [optional] 

### Return type

[**DataLakeStoreAccountListResult**](DataLakeStoreAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_firewall_rules**
> DataLakeStoreFirewallRuleListResult account_list_firewall_rules(resource_group_name, account_name, api_version, subscription_id)



Lists the Data Lake Store firewall rules within the specified Data Lake Store account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_firewall_rule_list_result import DataLakeStoreFirewallRuleListResult
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account from which to get the firewall rules.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_list_firewall_rules(resource_group_name, account_name, api_version, subscription_id)
        print("The response of AccountApi->account_list_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **account_name** | **str**| The name of the Data Lake Store account from which to get the firewall rules. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DataLakeStoreFirewallRuleListResult**](DataLakeStoreFirewallRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_update**
> DataLakeStoreAccount account_update(resource_group_name, name, api_version, subscription_id, parameters)



Updates the specified Data Lake Store account information.

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Store account.
    name = 'name_example' # str | The name of the Data Lake Store account to update.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DataLakeStoreAccount() # DataLakeStoreAccount | Parameters supplied to update the Data Lake Store account.

    try:
        api_response = api_instance.account_update(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of AccountApi->account_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Store account. | 
 **name** | **str**| The name of the Data Lake Store account to update. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DataLakeStoreAccount**](DataLakeStoreAccount.md)| Parameters supplied to update the Data Lake Store account. | 

### Return type

[**DataLakeStoreAccount**](DataLakeStoreAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

