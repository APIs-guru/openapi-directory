# openapi_client.RecommendationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recommendations_get_recommendation_by_subscription**](RecommendationsApi.md#recommendations_get_recommendation_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations | Gets a list of recommendations associated with the specified subscription.
[**recommendations_get_recommendation_history_for_site**](RecommendationsApi.md#recommendations_get_recommendation_history_for_site) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendationHistory | Gets the list of past recommendations optionally specified by the time range.
[**recommendations_get_recommended_rules_for_site**](RecommendationsApi.md#recommendations_get_recommended_rules_for_site) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations | Gets a list of recommendations associated with the specified web site.
[**recommendations_get_rule_details_by_site_name**](RecommendationsApi.md#recommendations_get_rule_details_by_site_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name} | Gets the detailed properties of the recommendation object for the specified web site.


# **recommendations_get_recommendation_by_subscription**
> List[Recommendation] recommendations_get_recommendation_by_subscription(subscription_id, api_version, featured=featured, filter=filter)

Gets a list of recommendations associated with the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation import Recommendation
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
    api_instance = openapi_client.RecommendationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    featured = True # bool | If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available (optional)
    filter = 'filter_example' # str | Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification' (optional)

    try:
        # Gets a list of recommendations associated with the specified subscription.
        api_response = api_instance.recommendations_get_recommendation_by_subscription(subscription_id, api_version, featured=featured, filter=filter)
        print("The response of RecommendationsApi->recommendations_get_recommendation_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_get_recommendation_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **featured** | **bool**| If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available | [optional] 
 **filter** | **str**| Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter&#x3D;channels eq &#39;Api&#39; or channel eq &#39;Notification&#39; | [optional] 

### Return type

[**List[Recommendation]**](Recommendation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_get_recommendation_history_for_site**
> List[Recommendation] recommendations_get_recommendation_history_for_site(resource_group_name, site_name, subscription_id, api_version, start_time=start_time, end_time=end_time)

Gets the list of past recommendations optionally specified by the time range.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation import Recommendation
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
    api_instance = openapi_client.RecommendationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    site_name = 'site_name_example' # str | Site name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    start_time = 'start_time_example' # str | The start time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z' (optional)
    end_time = 'end_time_example' # str | The end time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z' (optional)

    try:
        # Gets the list of past recommendations optionally specified by the time range.
        api_response = api_instance.recommendations_get_recommendation_history_for_site(resource_group_name, site_name, subscription_id, api_version, start_time=start_time, end_time=end_time)
        print("The response of RecommendationsApi->recommendations_get_recommendation_history_for_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_get_recommendation_history_for_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Resource group name | 
 **site_name** | **str**| Site name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **start_time** | **str**| The start time of a time range to query, e.g. $filter&#x3D;startTime eq &#39;2015-01-01T00:00:00Z&#39; and endTime eq &#39;2015-01-02T00:00:00Z&#39; | [optional] 
 **end_time** | **str**| The end time of a time range to query, e.g. $filter&#x3D;startTime eq &#39;2015-01-01T00:00:00Z&#39; and endTime eq &#39;2015-01-02T00:00:00Z&#39; | [optional] 

### Return type

[**List[Recommendation]**](Recommendation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_get_recommended_rules_for_site**
> List[Recommendation] recommendations_get_recommended_rules_for_site(resource_group_name, site_name, subscription_id, api_version, featured=featured, site_sku=site_sku, num_slots=num_slots)

Gets a list of recommendations associated with the specified web site.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation import Recommendation
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
    api_instance = openapi_client.RecommendationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    site_name = 'site_name_example' # str | Site name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    featured = True # bool | If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available (optional)
    site_sku = 'site_sku_example' # str | The name of site SKU. (optional)
    num_slots = 56 # int | The number of site slots associated to the site (optional)

    try:
        # Gets a list of recommendations associated with the specified web site.
        api_response = api_instance.recommendations_get_recommended_rules_for_site(resource_group_name, site_name, subscription_id, api_version, featured=featured, site_sku=site_sku, num_slots=num_slots)
        print("The response of RecommendationsApi->recommendations_get_recommended_rules_for_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_get_recommended_rules_for_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Resource group name | 
 **site_name** | **str**| Site name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **featured** | **bool**| If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available | [optional] 
 **site_sku** | **str**| The name of site SKU. | [optional] 
 **num_slots** | **int**| The number of site slots associated to the site | [optional] 

### Return type

[**List[Recommendation]**](Recommendation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_get_rule_details_by_site_name**
> RecommendationRule recommendations_get_rule_details_by_site_name(resource_group_name, site_name, name, subscription_id, api_version)

Gets the detailed properties of the recommendation object for the specified web site.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation_rule import RecommendationRule
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
    api_instance = openapi_client.RecommendationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    site_name = 'site_name_example' # str | Site name
    name = 'name_example' # str | Recommendation rule name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the detailed properties of the recommendation object for the specified web site.
        api_response = api_instance.recommendations_get_rule_details_by_site_name(resource_group_name, site_name, name, subscription_id, api_version)
        print("The response of RecommendationsApi->recommendations_get_rule_details_by_site_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_get_rule_details_by_site_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Resource group name | 
 **site_name** | **str**| Site name | 
 **name** | **str**| Recommendation rule name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**RecommendationRule**](RecommendationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

