# openapi_client.RecommendationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recommendations_disable_all_for_web_app**](RecommendationsApi.md#recommendations_disable_all_for_web_app) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/disable | Disable all recommendations for an app.
[**recommendations_disable_recommendation_for_site**](RecommendationsApi.md#recommendations_disable_recommendation_for_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name}/disable | Disables the specific rule for a web site permanently.
[**recommendations_disable_recommendation_for_subscription**](RecommendationsApi.md#recommendations_disable_recommendation_for_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/{name}/disable | Disables the specified rule so it will not apply to a subscription in the future.
[**recommendations_get_rule_details_by_web_app**](RecommendationsApi.md#recommendations_get_rule_details_by_web_app) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name} | Get a recommendation rule for an app.
[**recommendations_list**](RecommendationsApi.md#recommendations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations | List all recommendations for a subscription.
[**recommendations_list_history_for_web_app**](RecommendationsApi.md#recommendations_list_history_for_web_app) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendationHistory | Get past recommendations for an app, optionally specified by the time range.
[**recommendations_list_recommended_rules_for_web_app**](RecommendationsApi.md#recommendations_list_recommended_rules_for_web_app) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations | Get all recommendations for an app.
[**recommendations_reset_all_filters**](RecommendationsApi.md#recommendations_reset_all_filters) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/reset | Reset all recommendation opt-out settings for a subscription.
[**recommendations_reset_all_filters_for_web_app**](RecommendationsApi.md#recommendations_reset_all_filters_for_web_app) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/reset | Reset all recommendation opt-out settings for an app.


# **recommendations_disable_all_for_web_app**
> recommendations_disable_all_for_web_app(resource_group_name, site_name, subscription_id, api_version)

Disable all recommendations for an app.

Disable all recommendations for an app.

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
    api_instance = openapi_client.RecommendationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Name of the app.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Disable all recommendations for an app.
        api_instance.recommendations_disable_all_for_web_app(resource_group_name, site_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_disable_all_for_web_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Name of the app. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_disable_recommendation_for_site**
> recommendations_disable_recommendation_for_site(resource_group_name, site_name, name, subscription_id, api_version)

Disables the specific rule for a web site permanently.

Disables the specific rule for a web site permanently.

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
    api_instance = openapi_client.RecommendationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site name
    name = 'name_example' # str | Rule name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Disables the specific rule for a web site permanently.
        api_instance.recommendations_disable_recommendation_for_site(resource_group_name, site_name, name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_disable_recommendation_for_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site name | 
 **name** | **str**| Rule name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully disabled recommendations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_disable_recommendation_for_subscription**
> recommendations_disable_recommendation_for_subscription(name, subscription_id, api_version)

Disables the specified rule so it will not apply to a subscription in the future.

Disables the specified rule so it will not apply to a subscription in the future.

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
    api_instance = openapi_client.RecommendationsApi(api_client)
    name = 'name_example' # str | Rule name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Disables the specified rule so it will not apply to a subscription in the future.
        api_instance.recommendations_disable_recommendation_for_subscription(name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_disable_recommendation_for_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Rule name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully disabled recommendations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_get_rule_details_by_web_app**
> RecommendationRule recommendations_get_rule_details_by_web_app(resource_group_name, site_name, name, subscription_id, api_version, update_seen=update_seen, recommendation_id=recommendation_id)

Get a recommendation rule for an app.

Get a recommendation rule for an app.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Name of the app.
    name = 'name_example' # str | Name of the recommendation.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    update_seen = True # bool | Specify <code>true</code> to update the last-seen timestamp of the recommendation object. (optional)
    recommendation_id = 'recommendation_id_example' # str | The GUID of the recommendation object if you query an expired one. You don't need to specify it to query an active entry. (optional)

    try:
        # Get a recommendation rule for an app.
        api_response = api_instance.recommendations_get_rule_details_by_web_app(resource_group_name, site_name, name, subscription_id, api_version, update_seen=update_seen, recommendation_id=recommendation_id)
        print("The response of RecommendationsApi->recommendations_get_rule_details_by_web_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_get_rule_details_by_web_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Name of the app. | 
 **name** | **str**| Name of the recommendation. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **update_seen** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to update the last-seen timestamp of the recommendation object. | [optional] 
 **recommendation_id** | **str**| The GUID of the recommendation object if you query an expired one. You don&#39;t need to specify it to query an active entry. | [optional] 

### Return type

[**RecommendationRule**](RecommendationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_list**
> RecommendationCollection recommendations_list(subscription_id, api_version, featured=featured, filter=filter)

List all recommendations for a subscription.

List all recommendations for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation_collection import RecommendationCollection
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
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    featured = True # bool | Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. (optional)
    filter = 'filter_example' # str | Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification' and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[PT1H|PT1M|P1D] (optional)

    try:
        # List all recommendations for a subscription.
        api_response = api_instance.recommendations_list(subscription_id, api_version, featured=featured, filter=filter)
        print("The response of RecommendationsApi->recommendations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **featured** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to return only the most critical recommendations. The default is &lt;code&gt;false&lt;/code&gt;, which returns all recommendations. | [optional] 
 **filter** | **str**| Filter is specified by using OData syntax. Example: $filter&#x3D;channels eq &#39;Api&#39; or channel eq &#39;Notification&#39; and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[PT1H|PT1M|P1D] | [optional] 

### Return type

[**RecommendationCollection**](RecommendationCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_list_history_for_web_app**
> RecommendationCollection recommendations_list_history_for_web_app(resource_group_name, site_name, subscription_id, api_version, filter=filter)

Get past recommendations for an app, optionally specified by the time range.

Get past recommendations for an app, optionally specified by the time range.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation_collection import RecommendationCollection
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Name of the app.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    filter = 'filter_example' # str | Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification' and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[PT1H|PT1M|P1D] (optional)

    try:
        # Get past recommendations for an app, optionally specified by the time range.
        api_response = api_instance.recommendations_list_history_for_web_app(resource_group_name, site_name, subscription_id, api_version, filter=filter)
        print("The response of RecommendationsApi->recommendations_list_history_for_web_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_list_history_for_web_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Name of the app. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **filter** | **str**| Filter is specified by using OData syntax. Example: $filter&#x3D;channels eq &#39;Api&#39; or channel eq &#39;Notification&#39; and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[PT1H|PT1M|P1D] | [optional] 

### Return type

[**RecommendationCollection**](RecommendationCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_list_recommended_rules_for_web_app**
> RecommendationCollection recommendations_list_recommended_rules_for_web_app(resource_group_name, site_name, subscription_id, api_version, featured=featured, filter=filter)

Get all recommendations for an app.

Get all recommendations for an app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation_collection import RecommendationCollection
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Name of the app.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    featured = True # bool | Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. (optional)
    filter = 'filter_example' # str | Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification' (optional)

    try:
        # Get all recommendations for an app.
        api_response = api_instance.recommendations_list_recommended_rules_for_web_app(resource_group_name, site_name, subscription_id, api_version, featured=featured, filter=filter)
        print("The response of RecommendationsApi->recommendations_list_recommended_rules_for_web_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_list_recommended_rules_for_web_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Name of the app. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **featured** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to return only the most critical recommendations. The default is &lt;code&gt;false&lt;/code&gt;, which returns all recommendations. | [optional] 
 **filter** | **str**| Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter&#x3D;channels eq &#39;Api&#39; or channel eq &#39;Notification&#39; | [optional] 

### Return type

[**RecommendationCollection**](RecommendationCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_reset_all_filters**
> recommendations_reset_all_filters(subscription_id, api_version)

Reset all recommendation opt-out settings for a subscription.

Reset all recommendation opt-out settings for a subscription.

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
    api_instance = openapi_client.RecommendationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Reset all recommendation opt-out settings for a subscription.
        api_instance.recommendations_reset_all_filters(subscription_id, api_version)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_reset_all_filters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_reset_all_filters_for_web_app**
> recommendations_reset_all_filters_for_web_app(resource_group_name, site_name, subscription_id, api_version)

Reset all recommendation opt-out settings for an app.

Reset all recommendation opt-out settings for an app.

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
    api_instance = openapi_client.RecommendationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Name of the app.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Reset all recommendation opt-out settings for an app.
        api_instance.recommendations_reset_all_filters_for_web_app(resource_group_name, site_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling RecommendationsApi->recommendations_reset_all_filters_for_web_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Name of the app. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

