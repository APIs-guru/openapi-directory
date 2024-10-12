# openapi_client.IoTSecuritySolutionsAnalyticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**io_t_security_solutions_analytics_aggregated_alert_dismiss**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_aggregated_alert_dismiss) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}/dismiss | 
[**io_t_security_solutions_analytics_aggregated_alert_get**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_aggregated_alert_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName} | 
[**io_t_security_solutions_analytics_aggregated_alerts_list**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_aggregated_alerts_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts | 
[**io_t_security_solutions_analytics_get_all**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_get_all) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels | 
[**io_t_security_solutions_analytics_get_default**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_get_default) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default | 
[**io_t_security_solutions_analytics_recommendation_get**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_recommendation_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations/{aggregatedRecommendationName} | 
[**io_t_security_solutions_analytics_recommendations_list**](IoTSecuritySolutionsAnalyticsApi.md#io_t_security_solutions_analytics_recommendations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations | 


# **io_t_security_solutions_analytics_aggregated_alert_dismiss**
> io_t_security_solutions_analytics_aggregated_alert_dismiss(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)



Security Analytics of a security solution

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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    aggregated_alert_name = 'aggregated_alert_name_example' # str | Identifier of the aggregated alert

    try:
        api_instance.io_t_security_solutions_analytics_aggregated_alert_dismiss(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_aggregated_alert_dismiss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
 **aggregated_alert_name** | **str**| Identifier of the aggregated alert | 

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
**200** | Dismissed |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_security_solutions_analytics_aggregated_alert_get**
> IoTSecurityAggregatedAlert io_t_security_solutions_analytics_aggregated_alert_get(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)



Security Analytics of a security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_aggregated_alert import IoTSecurityAggregatedAlert
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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    aggregated_alert_name = 'aggregated_alert_name_example' # str | Identifier of the aggregated alert

    try:
        api_response = api_instance.io_t_security_solutions_analytics_aggregated_alert_get(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)
        print("The response of IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_aggregated_alert_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_aggregated_alert_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
 **aggregated_alert_name** | **str**| Identifier of the aggregated alert | 

### Return type

[**IoTSecurityAggregatedAlert**](IoTSecurityAggregatedAlert.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_security_solutions_analytics_aggregated_alerts_list**
> IoTSecurityAggregatedAlertList io_t_security_solutions_analytics_aggregated_alerts_list(api_version, subscription_id, resource_group_name, solution_name, top=top)



Security Analytics of a security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_aggregated_alert_list import IoTSecurityAggregatedAlertList
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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    top = 56 # int | The number of results to retrieve. (optional)

    try:
        api_response = api_instance.io_t_security_solutions_analytics_aggregated_alerts_list(api_version, subscription_id, resource_group_name, solution_name, top=top)
        print("The response of IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_aggregated_alerts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_aggregated_alerts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
 **top** | **int**| The number of results to retrieve. | [optional] 

### Return type

[**IoTSecurityAggregatedAlertList**](IoTSecurityAggregatedAlertList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_security_solutions_analytics_get_all**
> IoTSecuritySolutionAnalyticsModelList io_t_security_solutions_analytics_get_all(api_version, subscription_id, resource_group_name, solution_name)



Security Analytics of a security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_analytics_model_list import IoTSecuritySolutionAnalyticsModelList
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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name

    try:
        api_response = api_instance.io_t_security_solutions_analytics_get_all(api_version, subscription_id, resource_group_name, solution_name)
        print("The response of IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 

### Return type

[**IoTSecuritySolutionAnalyticsModelList**](IoTSecuritySolutionAnalyticsModelList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_security_solutions_analytics_get_default**
> IoTSecuritySolutionAnalyticsModel io_t_security_solutions_analytics_get_default(api_version, subscription_id, resource_group_name, solution_name)



Security Analytics of a security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_analytics_model import IoTSecuritySolutionAnalyticsModel
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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name

    try:
        api_response = api_instance.io_t_security_solutions_analytics_get_default(api_version, subscription_id, resource_group_name, solution_name)
        print("The response of IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_get_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_get_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 

### Return type

[**IoTSecuritySolutionAnalyticsModel**](IoTSecuritySolutionAnalyticsModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_security_solutions_analytics_recommendation_get**
> IoTSecurityAggregatedRecommendation io_t_security_solutions_analytics_recommendation_get(api_version, subscription_id, resource_group_name, solution_name, aggregated_recommendation_name)



Security Analytics of a security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_aggregated_recommendation import IoTSecurityAggregatedRecommendation
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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    aggregated_recommendation_name = 'aggregated_recommendation_name_example' # str | Identifier of the aggregated recommendation

    try:
        api_response = api_instance.io_t_security_solutions_analytics_recommendation_get(api_version, subscription_id, resource_group_name, solution_name, aggregated_recommendation_name)
        print("The response of IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_recommendation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_recommendation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
 **aggregated_recommendation_name** | **str**| Identifier of the aggregated recommendation | 

### Return type

[**IoTSecurityAggregatedRecommendation**](IoTSecurityAggregatedRecommendation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_security_solutions_analytics_recommendations_list**
> IoTSecurityAggregatedRecommendationList io_t_security_solutions_analytics_recommendations_list(api_version, subscription_id, resource_group_name, solution_name, top=top)



Security Analytics of a security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_aggregated_recommendation_list import IoTSecurityAggregatedRecommendationList
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
    api_instance = openapi_client.IoTSecuritySolutionsAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    top = 56 # int | The number of results to retrieve. (optional)

    try:
        api_response = api_instance.io_t_security_solutions_analytics_recommendations_list(api_version, subscription_id, resource_group_name, solution_name, top=top)
        print("The response of IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_recommendations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsAnalyticsApi->io_t_security_solutions_analytics_recommendations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
 **top** | **int**| The number of results to retrieve. | [optional] 

### Return type

[**IoTSecurityAggregatedRecommendationList**](IoTSecurityAggregatedRecommendationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

