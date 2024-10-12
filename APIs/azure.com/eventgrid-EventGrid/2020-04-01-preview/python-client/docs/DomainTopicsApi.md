# openapi_client.DomainTopicsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domain_topics_create_or_update**](DomainTopicsApi.md#domain_topics_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName} | Create or update a domain topic.
[**domain_topics_delete**](DomainTopicsApi.md#domain_topics_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName} | Delete a domain topic.
[**domain_topics_get**](DomainTopicsApi.md#domain_topics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName} | Get a domain topic.
[**domain_topics_list_by_domain**](DomainTopicsApi.md#domain_topics_list_by_domain) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics | List domain topics.


# **domain_topics_create_or_update**
> DomainTopic domain_topics_create_or_update(subscription_id, resource_group_name, domain_name, domain_topic_name, api_version)

Create or update a domain topic.

Asynchronously creates or updates a new domain topic with the specified parameters.

### Example


```python
import openapi_client
from openapi_client.models.domain_topic import DomainTopic
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
    api_instance = openapi_client.DomainTopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain.
    domain_topic_name = 'domain_topic_name_example' # str | Name of the domain topic.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Create or update a domain topic.
        api_response = api_instance.domain_topics_create_or_update(subscription_id, resource_group_name, domain_name, domain_topic_name, api_version)
        print("The response of DomainTopicsApi->domain_topics_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainTopicsApi->domain_topics_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain. | 
 **domain_topic_name** | **str**| Name of the domain topic. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**DomainTopic**](DomainTopic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_topics_delete**
> domain_topics_delete(subscription_id, resource_group_name, domain_name, domain_topic_name, api_version)

Delete a domain topic.

Delete existing domain topic.

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
    api_instance = openapi_client.DomainTopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain.
    domain_topic_name = 'domain_topic_name_example' # str | Name of the domain topic.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Delete a domain topic.
        api_instance.domain_topics_delete(subscription_id, resource_group_name, domain_name, domain_topic_name, api_version)
    except Exception as e:
        print("Exception when calling DomainTopicsApi->domain_topics_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain. | 
 **domain_topic_name** | **str**| Name of the domain topic. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_topics_get**
> DomainTopic domain_topics_get(subscription_id, resource_group_name, domain_name, domain_topic_name, api_version)

Get a domain topic.

Get properties of a domain topic.

### Example


```python
import openapi_client
from openapi_client.models.domain_topic import DomainTopic
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
    api_instance = openapi_client.DomainTopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain.
    domain_topic_name = 'domain_topic_name_example' # str | Name of the topic.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get a domain topic.
        api_response = api_instance.domain_topics_get(subscription_id, resource_group_name, domain_name, domain_topic_name, api_version)
        print("The response of DomainTopicsApi->domain_topics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainTopicsApi->domain_topics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain. | 
 **domain_topic_name** | **str**| Name of the topic. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**DomainTopic**](DomainTopic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_topics_list_by_domain**
> DomainTopicsListResult domain_topics_list_by_domain(subscription_id, resource_group_name, domain_name, api_version, filter=filter, top=top)

List domain topics.

List all the topics in a domain.

### Example


```python
import openapi_client
from openapi_client.models.domain_topics_list_result import DomainTopicsListResult
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
    api_instance = openapi_client.DomainTopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Domain name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List domain topics.
        api_response = api_instance.domain_topics_list_by_domain(subscription_id, resource_group_name, domain_name, api_version, filter=filter, top=top)
        print("The response of DomainTopicsApi->domain_topics_list_by_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainTopicsApi->domain_topics_list_by_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Domain name. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**DomainTopicsListResult**](DomainTopicsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

