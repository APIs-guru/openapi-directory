# openapi_client.AddsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ad_domain_service_members_list**](AddsApi.md#ad_domain_service_members_list) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/addomainservicemembers | 
[**adds_service_get_metrics**](AddsApi.md#adds_service_get_metrics) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metrics/{metricName}/groups/{groupName} | 
[**adds_service_members_delete**](AddsApi.md#adds_service_members_delete) | **DELETE** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId} | 
[**adds_service_members_get**](AddsApi.md#adds_service_members_get) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId} | 
[**adds_service_members_list**](AddsApi.md#adds_service_members_list) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/addsservicemembers | 
[**adds_service_members_list_credentials**](AddsApi.md#adds_service_members_list_credentials) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId}/credentials | 
[**adds_services_add**](AddsApi.md#adds_services_add) | **POST** /providers/Microsoft.ADHybridHealthService/addsservices | 
[**adds_services_get_forest_summary**](AddsApi.md#adds_services_get_forest_summary) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/forestsummary | 
[**adds_services_get_metric_metadata**](AddsApi.md#adds_services_get_metric_metadata) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metricmetadata/{metricName} | 
[**adds_services_get_metric_metadata_for_group**](AddsApi.md#adds_services_get_metric_metadata_for_group) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metricmetadata/{metricName}/groups/{groupName} | 
[**adds_services_list**](AddsApi.md#adds_services_list) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices | 
[**adds_services_list_metric_metadata**](AddsApi.md#adds_services_list_metric_metadata) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metricmetadata | 
[**adds_services_list_metrics_average**](AddsApi.md#adds_services_list_metrics_average) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metrics/{metricName}/groups/{groupName}/average | 
[**adds_services_list_metrics_sum**](AddsApi.md#adds_services_list_metrics_sum) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metrics/{metricName}/groups/{groupName}/sum | 
[**adds_services_list_replication_details**](AddsApi.md#adds_services_list_replication_details) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationdetails | 
[**adds_services_list_replication_summary**](AddsApi.md#adds_services_list_replication_summary) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationsummary | 
[**adds_services_list_server_alerts**](AddsApi.md#adds_services_list_server_alerts) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId}/alerts | 
[**adds_services_replication_status_get**](AddsApi.md#adds_services_replication_status_get) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationstatus | 
[**adds_services_service_members_add**](AddsApi.md#adds_services_service_members_add) | **POST** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers | 
[**adds_services_service_members_list**](AddsApi.md#adds_services_service_members_list) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers | 
[**adds_services_user_preference_add**](AddsApi.md#adds_services_user_preference_add) | **POST** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/features/{featureName}/userpreference | 
[**adds_services_user_preference_delete**](AddsApi.md#adds_services_user_preference_delete) | **DELETE** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/features/{featureName}/userpreference | 
[**adds_services_user_preference_get**](AddsApi.md#adds_services_user_preference_get) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/features/{featureName}/userpreference | 
[**alerts_list_adds_alerts**](AddsApi.md#alerts_list_adds_alerts) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/alerts | 
[**configuration_list_adds_configurations**](AddsApi.md#configuration_list_adds_configurations) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/configuration | 
[**dimensions_list_adds_dimensions**](AddsApi.md#dimensions_list_adds_dimensions) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/dimensions/{dimension} | 


# **ad_domain_service_members_list**
> AddsServiceMembers ad_domain_service_members_list(service_name, is_groupby_site, next_partition_key, next_row_key, api_version, filter=filter, query=query, take_count=take_count)



Gets the details of the servers, for a given Active Directory Domain Service, that are onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.adds_service_members import AddsServiceMembers
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    is_groupby_site = True # bool | Indicates if the result should be grouped by site or not.
    next_partition_key = 'next_partition_key_example' # str | The next partition key to query for.
    next_row_key = 'next_row_key_example' # str | The next row key to query for.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The server property filter to apply. (optional)
    query = 'query_example' # str | The custom query. (optional)
    take_count = 56 # int | The take count , which specifies the number of elements that can be returned from a sequence. (optional)

    try:
        api_response = api_instance.ad_domain_service_members_list(service_name, is_groupby_site, next_partition_key, next_row_key, api_version, filter=filter, query=query, take_count=take_count)
        print("The response of AddsApi->ad_domain_service_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->ad_domain_service_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **is_groupby_site** | **bool**| Indicates if the result should be grouped by site or not. | 
 **next_partition_key** | **str**| The next partition key to query for. | 
 **next_row_key** | **str**| The next row key to query for. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The server property filter to apply. | [optional] 
 **query** | **str**| The custom query. | [optional] 
 **take_count** | **int**| The take count , which specifies the number of elements that can be returned from a sequence. | [optional] 

### Return type

[**AddsServiceMembers**](AddsServiceMembers.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of Active Directory Domain Servers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_service_get_metrics**
> MetricSets adds_service_get_metrics(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)



Gets the server related metrics for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_sets import MetricSets
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    group_key = 'group_key_example' # str | The group key (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime | The start date. (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime | The end date. (optional)

    try:
        api_response = api_instance.adds_service_get_metrics(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)
        print("The response of AddsApi->adds_service_get_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_service_get_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **group_key** | **str**| The group key | [optional] 
 **from_date** | **datetime**| The start date. | [optional] 
 **to_date** | **datetime**| The end date. | [optional] 

### Return type

[**MetricSets**](MetricSets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric sets for the service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_service_members_delete**
> adds_service_members_delete(service_name, service_member_id, api_version, confirm=confirm)



Deletes a Active Directory Domain Controller server that has been onboarded to Azure Active Directory Connect Health Service.

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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    confirm = True # bool | Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered. (optional)

    try:
        api_instance.adds_service_members_delete(service_name, service_member_id, api_version, confirm=confirm)
    except Exception as e:
        print("Exception when calling AddsApi->adds_service_members_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **confirm** | **bool**| Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered. | [optional] 

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
**200** | Successfully deleted the service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_service_members_get**
> ServiceMember adds_service_members_get(service_name, service_member_id, api_version)



Gets the details of a server, for a given Active Directory Domain Controller service, that are onboarded to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_member import ServiceMember
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_service_members_get(service_name, service_member_id, api_version)
        print("The response of AddsApi->adds_service_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_service_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ServiceMember**](ServiceMember.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service member details for a given service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_service_members_list**
> AddsServiceMembers adds_service_members_list(service_name, api_version, filter=filter)



Gets the details of the Active Directory Domain servers, for a given Active Directory Domain Service, that are onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.adds_service_members import AddsServiceMembers
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The server property filter to apply. (optional)

    try:
        api_response = api_instance.adds_service_members_list(service_name, api_version, filter=filter)
        print("The response of AddsApi->adds_service_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_service_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The server property filter to apply. | [optional] 

### Return type

[**AddsServiceMembers**](AddsServiceMembers.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of Active Directory Domain Servers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_service_members_list_credentials**
> Credentials adds_service_members_list_credentials(service_name, service_member_id, api_version, filter=filter)



Gets the credentials of the server which is needed by the agent to connect to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.credentials import Credentials
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The property filter to apply. (optional)

    try:
        api_response = api_instance.adds_service_members_list_credentials(service_name, service_member_id, api_version, filter=filter)
        print("The response of AddsApi->adds_service_members_list_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_service_members_list_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The property filter to apply. | [optional] 

### Return type

[**Credentials**](Credentials.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of server credentials. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_add**
> ServiceProperties adds_services_add(api_version, service)



Onboards a service for a given tenant in Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_properties import ServiceProperties
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
    api_instance = openapi_client.AddsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    service = openapi_client.ServiceProperties() # ServiceProperties | The service object.

    try:
        api_response = api_instance.adds_services_add(api_version, service)
        print("The response of AddsApi->adds_services_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **service** | [**ServiceProperties**](ServiceProperties.md)| The service object. | 

### Return type

[**ServiceProperties**](ServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Adds the Active Directory Domain Controller Services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_get_forest_summary**
> ForestSummary adds_services_get_forest_summary(service_name, api_version)



Gets the forest summary for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.forest_summary import ForestSummary
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_get_forest_summary(service_name, api_version)
        print("The response of AddsApi->adds_services_get_forest_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_get_forest_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ForestSummary**](ForestSummary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of forest summary for the service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_get_metric_metadata**
> MetricMetadata adds_services_get_metric_metadata(service_name, metric_name, api_version)



Gets the service related metric information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_metadata import MetricMetadata
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_get_metric_metadata(service_name, metric_name, api_version)
        print("The response of AddsApi->adds_services_get_metric_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_get_metric_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**MetricMetadata**](MetricMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  The metric metadata for the service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_get_metric_metadata_for_group**
> MetricSets adds_services_get_metric_metadata_for_group(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)



Gets the service related metrics for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_sets import MetricSets
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    group_key = 'group_key_example' # str | The group key (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime | The start date. (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime | The end date. (optional)

    try:
        api_response = api_instance.adds_services_get_metric_metadata_for_group(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)
        print("The response of AddsApi->adds_services_get_metric_metadata_for_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_get_metric_metadata_for_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **group_key** | **str**| The group key | [optional] 
 **from_date** | **datetime**| The start date. | [optional] 
 **to_date** | **datetime**| The end date. | [optional] 

### Return type

[**MetricSets**](MetricSets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric sets for a given service and group.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list**
> Services adds_services_list(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)



Gets the details of Active Directory Domain Service, for a tenant, that are onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services import Services
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
    api_instance = openapi_client.AddsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The service property filter to apply. (optional)
    service_type = 'service_type_example' # str | The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. (optional)
    skip_count = 56 # int | The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. (optional)
    take_count = 56 # int | The take count , which specifies the number of elements that can be returned from a sequence. (optional)

    try:
        api_response = api_instance.adds_services_list(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)
        print("The response of AddsApi->adds_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The service property filter to apply. | [optional] 
 **service_type** | **str**| The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. | [optional] 
 **skip_count** | **int**| The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. | [optional] 
 **take_count** | **int**| The take count , which specifies the number of elements that can be returned from a sequence. | [optional] 

### Return type

[**Services**](Services.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  The list of Active Directory Domain Controller services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_metric_metadata**
> MetricMetadataList adds_services_list_metric_metadata(service_name, api_version, filter=filter, perf_counter=perf_counter)



Gets the service related metrics information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_metadata_list import MetricMetadataList
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The metric metadata property filter to apply. (optional)
    perf_counter = True # bool | Indicates if only performance counter metrics are requested. (optional)

    try:
        api_response = api_instance.adds_services_list_metric_metadata(service_name, api_version, filter=filter, perf_counter=perf_counter)
        print("The response of AddsApi->adds_services_list_metric_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list_metric_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The metric metadata property filter to apply. | [optional] 
 **perf_counter** | **bool**| Indicates if only performance counter metrics are requested. | [optional] 

### Return type

[**MetricMetadataList**](MetricMetadataList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of metric metadata for a service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_metrics_average**
> Metrics adds_services_list_metrics_average(service_name, metric_name, group_name, api_version)



Gets the average of the metric values for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metrics import Metrics
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_list_metrics_average(service_name, metric_name, group_name, api_version)
        print("The response of AddsApi->adds_services_list_metrics_average:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list_metrics_average: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of metrics.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_metrics_sum**
> Metrics adds_services_list_metrics_sum(service_name, metric_name, group_name, api_version)



Gets the sum of the metric values for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metrics import Metrics
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_list_metrics_sum(service_name, metric_name, group_name, api_version)
        print("The response of AddsApi->adds_services_list_metrics_sum:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list_metrics_sum: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of aum of the metric values for a given service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_replication_details**
> ReplicationDetailsList adds_services_list_replication_details(service_name, api_version, filter=filter, with_details=with_details)



Gets complete domain controller list along with replication details for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_details_list import ReplicationDetailsList
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The server property filter to apply. (optional)
    with_details = True # bool | Indicates if InboundReplicationNeighbor details are required or not. (optional)

    try:
        api_response = api_instance.adds_services_list_replication_details(service_name, api_version, filter=filter, with_details=with_details)
        print("The response of AddsApi->adds_services_list_replication_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list_replication_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The server property filter to apply. | [optional] 
 **with_details** | **bool**| Indicates if InboundReplicationNeighbor details are required or not. | [optional] 

### Return type

[**ReplicationDetailsList**](ReplicationDetailsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of replication details for a service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_replication_summary**
> ReplicationSummaryList adds_services_list_replication_summary(service_name, is_groupby_site, query, next_partition_key, next_row_key, api_version, filter=filter, take_count=take_count)



Gets complete domain controller list along with replication details for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_summary_list import ReplicationSummaryList
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    is_groupby_site = True # bool | Indicates if the result should be grouped by site or not.
    query = 'query_example' # str | The custom query.
    next_partition_key = 'next_partition_key_example' # str | The next partition key to query for.
    next_row_key = 'next_row_key_example' # str | The next row key to query for.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The server property filter to apply. (optional)
    take_count = 56 # int | The take count , which specifies the number of elements that can be returned from a sequence. (optional)

    try:
        api_response = api_instance.adds_services_list_replication_summary(service_name, is_groupby_site, query, next_partition_key, next_row_key, api_version, filter=filter, take_count=take_count)
        print("The response of AddsApi->adds_services_list_replication_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list_replication_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **is_groupby_site** | **bool**| Indicates if the result should be grouped by site or not. | 
 **query** | **str**| The custom query. | 
 **next_partition_key** | **str**| The next partition key to query for. | 
 **next_row_key** | **str**| The next row key to query for. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The server property filter to apply. | [optional] 
 **take_count** | **int**| The take count , which specifies the number of elements that can be returned from a sequence. | [optional] 

### Return type

[**ReplicationSummaryList**](ReplicationSummaryList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of replication summary for a service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_server_alerts**
> Alerts adds_services_list_server_alerts(service_member_id, service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)



Gets the details of an alert for a given Active Directory Domain Controller service and server combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alerts import Alerts
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
    api_instance = openapi_client.AddsApi(api_client)
    service_member_id = 'service_member_id_example' # str | The server Id for which the alert details needs to be queried.
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The alert property filter to apply. (optional)
    state = 'state_example' # str | The alert state to query for. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date to query for. (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date till when to query for. (optional)

    try:
        api_response = api_instance.adds_services_list_server_alerts(service_member_id, service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)
        print("The response of AddsApi->adds_services_list_server_alerts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_list_server_alerts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_member_id** | **str**| The server Id for which the alert details needs to be queried. | 
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The alert property filter to apply. | [optional] 
 **state** | **str**| The alert state to query for. | [optional] 
 **var_from** | **datetime**| The start date to query for. | [optional] 
 **to** | **datetime**| The end date till when to query for. | [optional] 

### Return type

[**Alerts**](Alerts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of server alerts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_replication_status_get**
> ReplicationStatus adds_services_replication_status_get(service_name, api_version)



Gets Replication status for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_status import ReplicationStatus
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_replication_status_get(service_name, api_version)
        print("The response of AddsApi->adds_services_replication_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_replication_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ReplicationStatus**](ReplicationStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The replication status for a service.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_service_members_add**
> ServiceMember adds_services_service_members_add(service_name, api_version, service_member)



Onboards  a server, for a given Active Directory Domain Controller service, to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_member import ServiceMember
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service under which the server is to be onboarded.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    service_member = openapi_client.ServiceMember() # ServiceMember | The server object.

    try:
        api_response = api_instance.adds_services_service_members_add(service_name, api_version, service_member)
        print("The response of AddsApi->adds_services_service_members_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_service_members_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service under which the server is to be onboarded. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **service_member** | [**ServiceMember**](ServiceMember.md)| The server object. | 

### Return type

[**ServiceMember**](ServiceMember.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_service_members_list**
> ServiceMembers adds_services_service_members_list(service_name, api_version, filter=filter, dimension_type=dimension_type, dimension_signature=dimension_signature)



Gets the details of the servers, for a given Active Directory Domain Controller service, that are onboarded to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_members import ServiceMembers
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The server property filter to apply. (optional)
    dimension_type = 'dimension_type_example' # str | The server specific dimension. (optional)
    dimension_signature = 'dimension_signature_example' # str | The value of the dimension. (optional)

    try:
        api_response = api_instance.adds_services_service_members_list(service_name, api_version, filter=filter, dimension_type=dimension_type, dimension_signature=dimension_signature)
        print("The response of AddsApi->adds_services_service_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_service_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The server property filter to apply. | [optional] 
 **dimension_type** | **str**| The server specific dimension. | [optional] 
 **dimension_signature** | **str**| The value of the dimension. | [optional] 

### Return type

[**ServiceMembers**](ServiceMembers.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of service members for a given service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_user_preference_add**
> adds_services_user_preference_add(service_name, feature_name, api_version, setting)



Adds the user preferences for a given feature.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user_preference import UserPreference
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    feature_name = 'feature_name_example' # str | The name of the feature.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    setting = openapi_client.UserPreference() # UserPreference | The user preference setting.

    try:
        api_instance.adds_services_user_preference_add(service_name, feature_name, api_version, setting)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_user_preference_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **feature_name** | **str**| The name of the feature. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **setting** | [**UserPreference**](UserPreference.md)| The user preference setting. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  Successfully added the user preference settings.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_user_preference_delete**
> adds_services_user_preference_delete(service_name, feature_name, api_version)



Deletes the user preferences for a given feature.

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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    feature_name = 'feature_name_example' # str | The name of the feature.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_instance.adds_services_user_preference_delete(service_name, feature_name, api_version)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_user_preference_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **feature_name** | **str**| The name of the feature. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

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
**200** | Successfully deleted the user preference settings.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_user_preference_get**
> UserPreference adds_services_user_preference_get(service_name, feature_name, api_version)



Gets the user preferences for a given feature.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user_preference import UserPreference
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    feature_name = 'feature_name_example' # str | The name of the feature.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_user_preference_get(service_name, feature_name, api_version)
        print("The response of AddsApi->adds_services_user_preference_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->adds_services_user_preference_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **feature_name** | **str**| The name of the feature. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**UserPreference**](UserPreference.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user preference settings.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_list_adds_alerts**
> Alerts alerts_list_adds_alerts(service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)



Gets the alerts for a given Active Directory Domain Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alerts import Alerts
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The alert property filter to apply. (optional)
    state = 'state_example' # str | The alert state to query for. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date to query for. (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date till when to query for. (optional)

    try:
        api_response = api_instance.alerts_list_adds_alerts(service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)
        print("The response of AddsApi->alerts_list_adds_alerts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->alerts_list_adds_alerts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The alert property filter to apply. | [optional] 
 **state** | **str**| The alert state to query for. | [optional] 
 **var_from** | **datetime**| The start date to query for. | [optional] 
 **to** | **datetime**| The end date till when to query for. | [optional] 

### Return type

[**Alerts**](Alerts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of alerts for the given service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_list_adds_configurations**
> AddsConfiguration configuration_list_adds_configurations(service_name, grouping=grouping)



Gets the service configurations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.adds_configuration import AddsConfiguration
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    grouping = 'grouping_example' # str | The grouping for configurations. (optional)

    try:
        api_response = api_instance.configuration_list_adds_configurations(service_name, grouping=grouping)
        print("The response of AddsApi->configuration_list_adds_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->configuration_list_adds_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **grouping** | **str**| The grouping for configurations. | [optional] 

### Return type

[**AddsConfiguration**](AddsConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Active Directory Domain Controller service configuration.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dimensions_list_adds_dimensions**
> Dimensions dimensions_list_adds_dimensions(service_name, dimension, api_version)



Gets the dimensions for a given dimension type in a server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions import Dimensions
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
    api_instance = openapi_client.AddsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    dimension = 'dimension_example' # str | The dimension type.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.dimensions_list_adds_dimensions(service_name, dimension, api_version)
        print("The response of AddsApi->dimensions_list_adds_dimensions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddsApi->dimensions_list_adds_dimensions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **dimension** | **str**| The dimension type. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Dimensions**](Dimensions.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of dimensions for a server.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

