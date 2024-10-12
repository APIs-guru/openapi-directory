# openapi_client.DomainTopicsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domain_topics_get**](DomainTopicsApi.md#domain_topics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName} | Get a domain topic
[**domain_topics_list_by_domain**](DomainTopicsApi.md#domain_topics_list_by_domain) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics | List domain topics.


# **domain_topics_get**
> DomainTopic domain_topics_get(subscription_id, resource_group_name, domain_name, topic_name, api_version)

Get a domain topic

Get properties of a domain topic

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
    domain_name = 'domain_name_example' # str | Name of the domain
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get a domain topic
        api_response = api_instance.domain_topics_get(subscription_id, resource_group_name, domain_name, topic_name, api_version)
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
 **domain_name** | **str**| Name of the domain | 
 **topic_name** | **str**| Name of the topic | 
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
> DomainTopicsListResult domain_topics_list_by_domain(subscription_id, resource_group_name, domain_name, api_version)

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

    try:
        # List domain topics.
        api_response = api_instance.domain_topics_list_by_domain(subscription_id, resource_group_name, domain_name, api_version)
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

