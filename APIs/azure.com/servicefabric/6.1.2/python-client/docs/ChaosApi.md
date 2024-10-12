# openapi_client.ChaosApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_chaos_report**](ChaosApi.md#get_chaos_report) | **GET** /Tools/Chaos/$/Report | Gets the next segment of the Chaos report based on the passed-in continuation token or the passed-in time-range.
[**start_chaos**](ChaosApi.md#start_chaos) | **POST** /Tools/Chaos/$/Start | Starts Chaos in the cluster.
[**stop_chaos**](ChaosApi.md#stop_chaos) | **POST** /Tools/Chaos/$/Stop | Stops Chaos in the cluster if it is already running, otherwise it does nothing.


# **get_chaos_report**
> ChaosReport get_chaos_report(api_version, continuation_token=continuation_token, start_time_utc=start_time_utc, end_time_utc=end_time_utc, timeout=timeout)

Gets the next segment of the Chaos report based on the passed-in continuation token or the passed-in time-range.

You can either specify the ContinuationToken to get the next segment of the Chaos report or you can specify the time-range through StartTimeUtc and EndTimeUtc, but you cannot specify both the ContinuationToken and the time-range in the same call. When there are more than 100 Chaos events, the Chaos report is returned in segments where a segment contains no more than 100 Chaos events. 

### Example


```python
import openapi_client
from openapi_client.models.chaos_report import ChaosReport
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
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    start_time_utc = 'start_time_utc_example' # str | The Windows file time representing the start time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v=vs.110).aspx) for details. (optional)
    end_time_utc = 'end_time_utc_example' # str | The Windows file time representing the end time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v=vs.110).aspx) for details. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the next segment of the Chaos report based on the passed-in continuation token or the passed-in time-range.
        api_response = api_instance.get_chaos_report(api_version, continuation_token=continuation_token, start_time_utc=start_time_utc, end_time_utc=end_time_utc, timeout=timeout)
        print("The response of ChaosApi->get_chaos_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChaosApi->get_chaos_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **start_time_utc** | **str**| The Windows file time representing the start time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v&#x3D;vs.110).aspx) for details. | [optional] 
 **end_time_utc** | **str**| The Windows file time representing the end time of the time range for which a Chaos report is to be generated. Please consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/en-us/library/system.datetime.tofiletimeutc(v&#x3D;vs.110).aspx) for details. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ChaosReport**](ChaosReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Next segment of Chaos report. |  -  |
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
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    chaos_parameters = openapi_client.ChaosParameters() # ChaosParameters | Describes all the parameters to configure a Chaos run.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Starts Chaos in the cluster.
        api_instance.start_chaos(api_version, chaos_parameters, timeout=timeout)
    except Exception as e:
        print("Exception when calling ChaosApi->start_chaos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **chaos_parameters** | [**ChaosParameters**](ChaosParameters.md)| Describes all the parameters to configure a Chaos run. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

Stops Chaos in the cluster if it is already running, otherwise it does nothing.

Stops Chaos from scheduling further faults; but, the in-flight faults are not affected.

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
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Stops Chaos in the cluster if it is already running, otherwise it does nothing.
        api_instance.stop_chaos(api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling ChaosApi->stop_chaos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

