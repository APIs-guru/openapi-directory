# openapi_client.ChaosApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_chaos**](ChaosApi.md#get_chaos) | **GET** /Tools/Chaos | Get the status of Chaos.
[**get_chaos_events**](ChaosApi.md#get_chaos_events) | **GET** /Tools/Chaos/Events | Gets the next segment of the Chaos events based on the continuation token or the time range.
[**get_chaos_schedule**](ChaosApi.md#get_chaos_schedule) | **GET** /Tools/Chaos/Schedule | Get the Chaos Schedule defining when and how to run Chaos.
[**post_chaos_schedule**](ChaosApi.md#post_chaos_schedule) | **POST** /Tools/Chaos/Schedule | Set the schedule used by Chaos.
[**start_chaos**](ChaosApi.md#start_chaos) | **POST** /Tools/Chaos/$/Start | Starts Chaos in the cluster.
[**stop_chaos**](ChaosApi.md#stop_chaos) | **POST** /Tools/Chaos/$/Stop | Stops Chaos if it is running in the cluster and put the Chaos Schedule in a stopped state.


# **get_chaos**
> Chaos get_chaos(api_version, timeout=timeout)

Get the status of Chaos.

Get the status of Chaos indicating whether or not Chaos is running, the Chaos parameters used for running Chaos and the status of the Chaos Schedule.

### Example


```python
import openapi_client
from openapi_client.models.chaos import Chaos
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChaosApi(api_client)
    api_version = 6.2 # str | The version of the API. This parameter is required and its value must be '6.2'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.2)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Get the status of Chaos.
        api_response = api_instance.get_chaos(api_version, timeout=timeout)
        print("The response of ChaosApi->get_chaos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChaosApi->get_chaos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.2]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**Chaos**](Chaos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the status of Chaos. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chaos_events**
> ChaosEventsSegment get_chaos_events(api_version, continuation_token=continuation_token, start_time_utc=start_time_utc, end_time_utc=end_time_utc, max_results=max_results, timeout=timeout)

Gets the next segment of the Chaos events based on the continuation token or the time range.

To get the next segment of the Chaos events, you can specify the ContinuationToken. To get the start of a new segment of Chaos events, you can specify the time range through StartTimeUtc and EndTimeUtc. You cannot specify both the ContinuationToken and the time range in the same call. When there are more than 100 Chaos events, the Chaos events are returned in multiple segments where a segment contains no more than 100 Chaos events and to get the next segment you make a call to this API with the continuation token.

### Example


```python
import openapi_client
from openapi_client.models.chaos_events_segment import ChaosEventsSegment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChaosApi(api_client)
    api_version = 6.2 # str | The version of the API. This parameter is required and its value must be '6.2'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.2)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    start_time_utc = 'start_time_utc_example' # str | The Windows file time representing the start time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v=vs.110).aspx) for details. (optional)
    end_time_utc = 'end_time_utc_example' # str | The Windows file time representing the end time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v=vs.110).aspx) for details. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as many results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the next segment of the Chaos events based on the continuation token or the time range.
        api_response = api_instance.get_chaos_events(api_version, continuation_token=continuation_token, start_time_utc=start_time_utc, end_time_utc=end_time_utc, max_results=max_results, timeout=timeout)
        print("The response of ChaosApi->get_chaos_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChaosApi->get_chaos_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.2]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **start_time_utc** | **str**| The Windows file time representing the start time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v&#x3D;vs.110).aspx) for details. | [optional] 
 **end_time_utc** | **str**| The Windows file time representing the end time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v&#x3D;vs.110).aspx) for details. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as many results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ChaosEventsSegment**](ChaosEventsSegment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Next segment of Chaos events. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chaos_schedule**
> ChaosScheduleDescription get_chaos_schedule(api_version)

Get the Chaos Schedule defining when and how to run Chaos.

Gets the version of the Chaos Schedule in use and the Chaos Schedule that defines when and how to run Chaos.

### Example


```python
import openapi_client
from openapi_client.models.chaos_schedule_description import ChaosScheduleDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChaosApi(api_client)
    api_version = 6.2 # str | The version of the API. This parameter is required and its value must be '6.2'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.2)

    try:
        # Get the Chaos Schedule defining when and how to run Chaos.
        api_response = api_instance.get_chaos_schedule(api_version)
        print("The response of ChaosApi->get_chaos_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChaosApi->get_chaos_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.2]

### Return type

[**ChaosScheduleDescription**](ChaosScheduleDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the schedule description including a Chaos Schedule used by Chaos and the version the Chaos Schedule is on. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_chaos_schedule**
> post_chaos_schedule(api_version, chaos_schedule)

Set the schedule used by Chaos.

Set the Chaos Schedule currently in use by Chaos. Chaos will automatically schedule runs based on the Chaos Schedule. The version in the provided input schedule must match the version of the Chaos Schedule on the server. If the version provided does not match the version on the server, the Chaos Schedule is not updated. If the version provided matches the version on the server, then the Chaos Schedule is updated and the version of the Chaos Schedule on the server is incremented up by one and wraps back to 0 after 2,147,483,647. If Chaos is running when this call is made, the call will fail.

### Example


```python
import openapi_client
from openapi_client.models.chaos_schedule_description import ChaosScheduleDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChaosApi(api_client)
    api_version = 6.2 # str | The version of the API. This parameter is required and its value must be '6.2'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.2)
    chaos_schedule = openapi_client.ChaosScheduleDescription() # ChaosScheduleDescription | Describes the schedule used by Chaos.

    try:
        # Set the schedule used by Chaos.
        api_instance.post_chaos_schedule(api_version, chaos_schedule)
    except Exception as e:
        print("Exception when calling ChaosApi->post_chaos_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This version is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accepts any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0 and the runtime is 6.1, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.2]
 **chaos_schedule** | [**ChaosScheduleDescription**](ChaosScheduleDescription.md)| Describes the schedule used by Chaos. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_chaos**
> start_chaos(api_version, chaos_parameters, timeout=timeout)

Starts Chaos in the cluster.

If Chaos is not already running in the cluster, it starts Chaos with the passed in Chaos parameters. If Chaos is already running when this call is made, the call fails with the error code FABRIC_E_CHAOS_ALREADY_RUNNING. Please refer to the article [Induce controlled Chaos in Service Fabric clusters](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-controlled-chaos) for more details.

### Example


```python
import openapi_client
from openapi_client.models.chaos_parameters import ChaosParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChaosApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    chaos_parameters = openapi_client.ChaosParameters() # ChaosParameters | Describes all the parameters to configure a Chaos run.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Starts Chaos in the cluster.
        api_instance.start_chaos(api_version, chaos_parameters, timeout=timeout)
    except Exception as e:
        print("Exception when calling ChaosApi->start_chaos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **chaos_parameters** | [**ChaosParameters**](ChaosParameters.md)| Describes all the parameters to configure a Chaos run. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_chaos**
> stop_chaos(api_version, timeout=timeout)

Stops Chaos if it is running in the cluster and put the Chaos Schedule in a stopped state.

Stops Chaos from executing new faults. In-flight faults will continue to execute until they are complete. The current Chaos Schedule is put into a stopped state. Once a schedule is stopped it will stay in the stopped state and not be used to Chaos Schedule new runs of Chaos. A new Chaos Schedule must be set in order to resume scheduling.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChaosApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Stops Chaos if it is running in the cluster and put the Chaos Schedule in a stopped state.
        api_instance.stop_chaos(api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling ChaosApi->stop_chaos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

