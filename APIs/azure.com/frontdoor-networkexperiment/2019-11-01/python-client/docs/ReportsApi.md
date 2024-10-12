# openapi_client.ReportsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reports_get_latency_scorecards**](ReportsApi.md#reports_get_latency_scorecards) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}/LatencyScorecard | Gets a Latency Scorecard for a given Experiment
[**reports_get_timeseries**](ReportsApi.md#reports_get_timeseries) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}/Timeseries | Gets a Timeseries for a given Experiment


# **reports_get_latency_scorecards**
> LatencyScorecard reports_get_latency_scorecards(subscription_id, api_version, resource_group_name, profile_name, experiment_name, aggregation_interval, end_date_time_utc=end_date_time_utc, country=country)

Gets a Latency Scorecard for a given Experiment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.latency_scorecard import LatencyScorecard
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
    api_instance = openapi_client.ReportsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    experiment_name = 'experiment_name_example' # str | The Experiment identifier associated with the Experiment
    aggregation_interval = 'aggregation_interval_example' # str | The aggregation interval of the Latency Scorecard
    end_date_time_utc = 'end_date_time_utc_example' # str | The end DateTime of the Latency Scorecard in UTC (optional)
    country = 'country_example' # str | The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html (optional)

    try:
        # Gets a Latency Scorecard for a given Experiment
        api_response = api_instance.reports_get_latency_scorecards(subscription_id, api_version, resource_group_name, profile_name, experiment_name, aggregation_interval, end_date_time_utc=end_date_time_utc, country=country)
        print("The response of ReportsApi->reports_get_latency_scorecards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_latency_scorecards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **experiment_name** | **str**| The Experiment identifier associated with the Experiment | 
 **aggregation_interval** | **str**| The aggregation interval of the Latency Scorecard | 
 **end_date_time_utc** | **str**| The end DateTime of the Latency Scorecard in UTC | [optional] 
 **country** | **str**| The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html | [optional] 

### Return type

[**LatencyScorecard**](LatencyScorecard.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reports_get_timeseries**
> Timeseries reports_get_timeseries(subscription_id, api_version, resource_group_name, profile_name, experiment_name, start_date_time_utc, end_date_time_utc, aggregation_interval, timeseries_type, endpoint=endpoint, country=country)

Gets a Timeseries for a given Experiment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.timeseries import Timeseries
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
    api_instance = openapi_client.ReportsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    experiment_name = 'experiment_name_example' # str | The Experiment identifier associated with the Experiment
    start_date_time_utc = '2013-10-20T19:20:30+01:00' # datetime | The start DateTime of the Timeseries in UTC
    end_date_time_utc = '2013-10-20T19:20:30+01:00' # datetime | The end DateTime of the Timeseries in UTC
    aggregation_interval = 'aggregation_interval_example' # str | The aggregation interval of the Timeseries
    timeseries_type = 'timeseries_type_example' # str | The type of Timeseries
    endpoint = 'endpoint_example' # str | The specific endpoint (optional)
    country = 'country_example' # str | The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html (optional)

    try:
        # Gets a Timeseries for a given Experiment
        api_response = api_instance.reports_get_timeseries(subscription_id, api_version, resource_group_name, profile_name, experiment_name, start_date_time_utc, end_date_time_utc, aggregation_interval, timeseries_type, endpoint=endpoint, country=country)
        print("The response of ReportsApi->reports_get_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **experiment_name** | **str**| The Experiment identifier associated with the Experiment | 
 **start_date_time_utc** | **datetime**| The start DateTime of the Timeseries in UTC | 
 **end_date_time_utc** | **datetime**| The end DateTime of the Timeseries in UTC | 
 **aggregation_interval** | **str**| The aggregation interval of the Timeseries | 
 **timeseries_type** | **str**| The type of Timeseries | 
 **endpoint** | **str**| The specific endpoint | [optional] 
 **country** | **str**| The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html | [optional] 

### Return type

[**Timeseries**](Timeseries.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

