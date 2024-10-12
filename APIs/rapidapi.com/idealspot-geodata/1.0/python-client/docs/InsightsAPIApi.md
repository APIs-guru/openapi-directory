# openapi_client.InsightsAPIApi

All URIs are relative to *https://idealspot-geodata.p.rapidapi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_available_insights**](InsightsAPIApi.md#fetch_available_insights) | **GET** /data/insights | Fetch Available Insights
[**fetch_insight_query_parameters**](InsightsAPIApi.md#fetch_insight_query_parameters) | **GET** /data/insights/{insight_id:} | Fetch Insight Query Parameters
[**query_insightat_location**](InsightsAPIApi.md#query_insightat_location) | **GET** /data/insights/{insight_id:}/query | Query Insight at Location


# **fetch_available_insights**
> ListAllLocalInsights fetch_available_insights(x_rapid_api_key, x_rapid_api_host)

Fetch Available Insights

List all insights that the user has access to. This includes population, household income, crime statistics, walking traffic, vehicle traffic counts, employment, and much more,

### Example


```python
import openapi_client
from openapi_client.models.list_all_local_insights import ListAllLocalInsights
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightsAPIApi(api_client)
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Fetch Available Insights
        api_response = api_instance.fetch_available_insights(x_rapid_api_key, x_rapid_api_host)
        print("The response of InsightsAPIApi->fetch_available_insights:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightsAPIApi->fetch_available_insights: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**ListAllLocalInsights**](ListAllLocalInsights.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_insight_query_parameters**
> DescribeOccupationInsight fetch_insight_query_parameters(insight_id, x_rapid_api_key, x_rapid_api_host)

Fetch Insight Query Parameters

Fetch request/response structure metadata for a given Insight. This provides you the periods of data available as well as any other parameters you may want to query the Insight by. Example Insights include population and market data such as: age, daytime population, avg. home value, crime indexes, foot traffic, employment, income, occupation, etc.  For the full-list see the developer documentation.

### Example


```python
import openapi_client
from openapi_client.models.describe_occupation_insight import DescribeOccupationInsight
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightsAPIApi(api_client)
    insight_id = 'insight_id_example' # str | Insight ID. See developer documentation for full list.
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Fetch Insight Query Parameters
        api_response = api_instance.fetch_insight_query_parameters(insight_id, x_rapid_api_key, x_rapid_api_host)
        print("The response of InsightsAPIApi->fetch_insight_query_parameters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightsAPIApi->fetch_insight_query_parameters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insight_id** | **str**| Insight ID. See developer documentation for full list. | 
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**DescribeOccupationInsight**](DescribeOccupationInsight.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_insightat_location**
> Homevalueswithin1miRadiusofLocation query_insightat_location(version, location, insight_id, x_rapid_api_key, x_rapid_api_host)

Query Insight at Location

Execute a query for a given insight and location(s). Some Insights may require you to provide required options. ie., when querying `occupation` for White-Collar Workers, you can filter by opt=`{\"data\":{\"category\":[2469]}}`  For examples of `locations`, please see [Location API Documentation](https://idealspot.gitlab.io/developer-docs/#location)

### Example


```python
import openapi_client
from openapi_client.models.homevalueswithin1mi_radiusof_location import Homevalueswithin1miRadiusofLocation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightsAPIApi(api_client)
    version = 'version_example' # str | (Required) Insight version. Insight versions are incremented when a response format changes in any way, including the addition of new groups. Old versions are retained, unmodified, for backwards compatibility.
    location = 'location_example' # str | (Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used. For more detail, see https://idealspot.gitlab.io/developer-docs/#location
    insight_id = 'insight_id_example' # str | Insight ID. See https://developer.idealspot.com/data for full list.
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Query Insight at Location
        api_response = api_instance.query_insightat_location(version, location, insight_id, x_rapid_api_key, x_rapid_api_host)
        print("The response of InsightsAPIApi->query_insightat_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightsAPIApi->query_insightat_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| (Required) Insight version. Insight versions are incremented when a response format changes in any way, including the addition of new groups. Old versions are retained, unmodified, for backwards compatibility. | 
 **location** | **str**| (Required) Represents a buffer, region, or custom polygon specification. Accepts the &#x60;Location&#x60; model (as a &#x60;Buffer&#x60;, &#x60;Region&#x60;, or &#x60;Custom Polygon&#x60;) formatted as a JSON string. Multiple &#x60;location&#x60; query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. &#x60;?location[]&#x3D;...&amp;location[]&#x3D;...&#x60;). If not included, only the last location will be used. For more detail, see https://idealspot.gitlab.io/developer-docs/#location | 
 **insight_id** | **str**| Insight ID. See https://developer.idealspot.com/data for full list. | 
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**Homevalueswithin1miRadiusofLocation**](Homevalueswithin1miRadiusofLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

