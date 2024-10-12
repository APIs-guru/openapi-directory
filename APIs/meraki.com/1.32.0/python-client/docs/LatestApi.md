# openapi_client.LatestApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_sensor_readings_latest_2**](LatestApi.md#get_organization_sensor_readings_latest_2) | **GET** /organizations/{organizationId}/sensor/readings/latest | Return the latest available reading for each metric from each sensor, sorted by sensor serial


# **get_organization_sensor_readings_latest_2**
> List[GetOrganizationSensorReadingsLatest200ResponseInner] get_organization_sensor_readings_latest_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, metrics=metrics)

Return the latest available reading for each metric from each sensor, sorted by sensor serial

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sensor_readings_latest200_response_inner import GetOrganizationSensorReadingsLatest200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LatestApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter readings by network. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter readings by sensor. (optional)
    metrics = ['metrics_example'] # List[str] | Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. (optional)

    try:
        # Return the latest available reading for each metric from each sensor, sorted by sensor serial
        api_response = api_instance.get_organization_sensor_readings_latest_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, metrics=metrics)
        print("The response of LatestApi->get_organization_sensor_readings_latest_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LatestApi->get_organization_sensor_readings_latest_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter readings by network. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter readings by sensor. | [optional] 
 **metrics** | [**List[str]**](str.md)| Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. | [optional] 

### Return type

[**List[GetOrganizationSensorReadingsLatest200ResponseInner]**](GetOrganizationSensorReadingsLatest200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

