# openapi_client.AccessControlRecordsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_control_records_create_or_update**](AccessControlRecordsApi.md#access_control_records_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName} | 
[**access_control_records_delete**](AccessControlRecordsApi.md#access_control_records_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName} | 
[**access_control_records_get**](AccessControlRecordsApi.md#access_control_records_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName} | 
[**access_control_records_list_by_manager**](AccessControlRecordsApi.md#access_control_records_list_by_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords | 


# **access_control_records_create_or_update**
> AccessControlRecord access_control_records_create_or_update(access_control_record_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or Updates an access control record.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_control_record import AccessControlRecord
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
    api_instance = openapi_client.AccessControlRecordsApi(api_client)
    access_control_record_name = 'access_control_record_name_example' # str | The name of the access control record.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.AccessControlRecord() # AccessControlRecord | The access control record to be added or updated.

    try:
        api_response = api_instance.access_control_records_create_or_update(access_control_record_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of AccessControlRecordsApi->access_control_records_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessControlRecordsApi->access_control_records_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_control_record_name** | **str**| The name of the access control record. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**AccessControlRecord**](AccessControlRecord.md)| The access control record to be added or updated. | 

### Return type

[**AccessControlRecord**](AccessControlRecord.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the access control record. |  -  |
**202** | Accepted the request to create or update the access control record. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_control_records_delete**
> access_control_records_delete(access_control_record_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the access control record.

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
    api_instance = openapi_client.AccessControlRecordsApi(api_client)
    access_control_record_name = 'access_control_record_name_example' # str | The name of the access control record to delete.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.access_control_records_delete(access_control_record_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling AccessControlRecordsApi->access_control_records_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_control_record_name** | **str**| The name of the access control record to delete. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

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
**202** | Accepted the request to delete the access control record. |  -  |
**204** | Successfully deleted the access control record. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_control_records_get**
> AccessControlRecord access_control_records_get(access_control_record_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified access control record name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_control_record import AccessControlRecord
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
    api_instance = openapi_client.AccessControlRecordsApi(api_client)
    access_control_record_name = 'access_control_record_name_example' # str | Name of access control record to be fetched.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.access_control_records_get(access_control_record_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of AccessControlRecordsApi->access_control_records_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessControlRecordsApi->access_control_records_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_control_record_name** | **str**| Name of access control record to be fetched. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**AccessControlRecord**](AccessControlRecord.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The access control record. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_control_records_list_by_manager**
> AccessControlRecordList access_control_records_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the access control records in a manager.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_control_record_list import AccessControlRecordList
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
    api_instance = openapi_client.AccessControlRecordsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.access_control_records_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)
        print("The response of AccessControlRecordsApi->access_control_records_list_by_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessControlRecordsApi->access_control_records_list_by_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**AccessControlRecordList**](AccessControlRecordList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of access control records. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

