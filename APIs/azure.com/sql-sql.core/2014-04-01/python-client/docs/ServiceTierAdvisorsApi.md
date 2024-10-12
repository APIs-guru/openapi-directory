# openapi_client.ServiceTierAdvisorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_tier_advisors_get**](ServiceTierAdvisorsApi.md#service_tier_advisors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/serviceTierAdvisors/{serviceTierAdvisorName} | 
[**service_tier_advisors_list_by_database**](ServiceTierAdvisorsApi.md#service_tier_advisors_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/serviceTierAdvisors | 


# **service_tier_advisors_get**
> ServiceTierAdvisor service_tier_advisors_get(api_version, subscription_id, resource_group_name, server_name, database_name, service_tier_advisor_name)



Gets a service tier advisor.

### Example


```python
import openapi_client
from openapi_client.models.service_tier_advisor import ServiceTierAdvisor
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
    api_instance = openapi_client.ServiceTierAdvisorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of database.
    service_tier_advisor_name = 'service_tier_advisor_name_example' # str | The name of service tier advisor.

    try:
        api_response = api_instance.service_tier_advisors_get(api_version, subscription_id, resource_group_name, server_name, database_name, service_tier_advisor_name)
        print("The response of ServiceTierAdvisorsApi->service_tier_advisors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceTierAdvisorsApi->service_tier_advisors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of database. | 
 **service_tier_advisor_name** | **str**| The name of service tier advisor. | 

### Return type

[**ServiceTierAdvisor**](ServiceTierAdvisor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_tier_advisors_list_by_database**
> ServiceTierAdvisorListResult service_tier_advisors_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)



Returns service tier advisors for specified database.

### Example


```python
import openapi_client
from openapi_client.models.service_tier_advisor_list_result import ServiceTierAdvisorListResult
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
    api_instance = openapi_client.ServiceTierAdvisorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of database.

    try:
        api_response = api_instance.service_tier_advisors_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)
        print("The response of ServiceTierAdvisorsApi->service_tier_advisors_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceTierAdvisorsApi->service_tier_advisors_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of database. | 

### Return type

[**ServiceTierAdvisorListResult**](ServiceTierAdvisorListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

