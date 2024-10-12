# openapi_client.DataSetApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_sets_create**](DataSetApi.md#data_sets_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName} | Adds a new data set to an existing share or updates it if existing.
[**data_sets_delete**](DataSetApi.md#data_sets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName} | Delete DataSet in a share.
[**data_sets_get**](DataSetApi.md#data_sets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName} | Get DataSet in a share.
[**data_sets_list_by_share**](DataSetApi.md#data_sets_list_by_share) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets | List DataSets in a share.


# **data_sets_create**
> DataSet data_sets_create(subscription_id, resource_group_name, account_name, share_name, data_set_name, api_version, data_set)

Adds a new data set to an existing share or updates it if existing.

Create a DataSet 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_set import DataSet
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
    api_instance = openapi_client.DataSetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share to add the data set to.
    data_set_name = 'data_set_name_example' # str | The name of the dataSet.
    api_version = 'api_version_example' # str | The api version to use.
    data_set = openapi_client.DataSet() # DataSet | The new data set information.

    try:
        # Adds a new data set to an existing share or updates it if existing.
        api_response = api_instance.data_sets_create(subscription_id, resource_group_name, account_name, share_name, data_set_name, api_version, data_set)
        print("The response of DataSetApi->data_sets_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSetApi->data_sets_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share to add the data set to. | 
 **data_set_name** | **str**| The name of the dataSet. | 
 **api_version** | **str**| The api version to use. | 
 **data_set** | [**DataSet**](DataSet.md)| The new data set information. | 

### Return type

[**DataSet**](DataSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_sets_delete**
> data_sets_delete(subscription_id, resource_group_name, account_name, share_name, data_set_name, api_version)

Delete DataSet in a share.

Delete a DataSet in a share

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
    api_instance = openapi_client.DataSetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    data_set_name = 'data_set_name_example' # str | The name of the dataSet.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete DataSet in a share.
        api_instance.data_sets_delete(subscription_id, resource_group_name, account_name, share_name, data_set_name, api_version)
    except Exception as e:
        print("Exception when calling DataSetApi->data_sets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **data_set_name** | **str**| The name of the dataSet. | 
 **api_version** | **str**| The api version to use. | 

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
**200** | Success |  -  |
**202** | Accepted |  -  |
**204** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_sets_get**
> DataSet data_sets_get(subscription_id, resource_group_name, account_name, share_name, data_set_name, api_version)

Get DataSet in a share.

Get a DataSet in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_set import DataSet
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
    api_instance = openapi_client.DataSetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    data_set_name = 'data_set_name_example' # str | The name of the dataSet.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get DataSet in a share.
        api_response = api_instance.data_sets_get(subscription_id, resource_group_name, account_name, share_name, data_set_name, api_version)
        print("The response of DataSetApi->data_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSetApi->data_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **data_set_name** | **str**| The name of the dataSet. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**DataSet**](DataSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_sets_list_by_share**
> DataSetList data_sets_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)

List DataSets in a share.

List DataSets in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_set_list import DataSetList
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
    api_instance = openapi_client.DataSetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | continuation token (optional)

    try:
        # List DataSets in a share.
        api_response = api_instance.data_sets_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)
        print("The response of DataSetApi->data_sets_list_by_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSetApi->data_sets_list_by_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| continuation token | [optional] 

### Return type

[**DataSetList**](DataSetList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

