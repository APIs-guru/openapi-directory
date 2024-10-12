# openapi_client.PulsesApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_analytics_pulses_get**](PulsesApi.md#offerings_offering_id_analytics_pulses_get) | **GET** /offerings/{offeringId}/analytics/pulses | Find all pulse IDs in the specified offering
[**offerings_offering_id_analytics_pulses_pulse_id_responses_get**](PulsesApi.md#offerings_offering_id_analytics_pulses_pulse_id_responses_get) | **GET** /offerings/{offeringId}/analytics/pulses/{pulseId}/responses | Find pulses by offeringId and pulseId
[**offerings_offering_id_analytics_pulses_responses_get**](PulsesApi.md#offerings_offering_id_analytics_pulses_responses_get) | **GET** /offerings/{offeringId}/analytics/pulses/responses | Find pulses by offeringId


# **offerings_offering_id_analytics_pulses_get**
> List[str] offerings_offering_id_analytics_pulses_get(offering_id)

Find all pulse IDs in the specified offering

Responds with the IDs of all pulses that learners have responded to in a specified offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PulsesApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find all pulse IDs in the specified offering
        api_response = api_instance.offerings_offering_id_analytics_pulses_get(offering_id)
        print("The response of PulsesApi->offerings_offering_id_analytics_pulses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PulsesApi->offerings_offering_id_analytics_pulses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

**List[str]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pulses&#39; ids |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_pulses_pulse_id_responses_get**
> List[PulseResponse] offerings_offering_id_analytics_pulses_pulse_id_responses_get(offering_id, pulse_id)

Find pulses by offeringId and pulseId

Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.pulse_response import PulseResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PulsesApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    pulse_id = 'pulse_id_example' # str | pulse's base id

    try:
        # Find pulses by offeringId and pulseId
        api_response = api_instance.offerings_offering_id_analytics_pulses_pulse_id_responses_get(offering_id, pulse_id)
        print("The response of PulsesApi->offerings_offering_id_analytics_pulses_pulse_id_responses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PulsesApi->offerings_offering_id_analytics_pulses_pulse_id_responses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **pulse_id** | **str**| pulse&#39;s base id | 

### Return type

[**List[PulseResponse]**](PulseResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pulse data matching pulseId |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_pulses_responses_get**
> List[PulseResponse] offerings_offering_id_analytics_pulses_responses_get(offering_id, pulse_type=pulse_type, response_time=response_time)

Find pulses by offeringId

Responds with pulse's responses in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.pulse_response import PulseResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PulsesApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    pulse_type = 'pulse_type_example' # str | Filter pulse responses by type. (optional)
    response_time = openapi_client.OfferingsOfferingIdAnalyticsPulsesResponsesGetResponseTimeParameter() # OfferingsOfferingIdAnalyticsPulsesResponsesGetResponseTimeParameter | Filter pulse responses by responseTime. Lower then (`lt`), lower then or equal (`lte`), greater then (`gt`) and greater then or equal (`gte`) operators are available. Example of filtering by time range __gte__2017-03-14T07:30:00Z__ (optional)

    try:
        # Find pulses by offeringId
        api_response = api_instance.offerings_offering_id_analytics_pulses_responses_get(offering_id, pulse_type=pulse_type, response_time=response_time)
        print("The response of PulsesApi->offerings_offering_id_analytics_pulses_responses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PulsesApi->offerings_offering_id_analytics_pulses_responses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **pulse_type** | **str**| Filter pulse responses by type. | [optional] 
 **response_time** | [**OfferingsOfferingIdAnalyticsPulsesResponsesGetResponseTimeParameter**](.md)| Filter pulse responses by responseTime. Lower then (&#x60;lt&#x60;), lower then or equal (&#x60;lte&#x60;), greater then (&#x60;gt&#x60;) and greater then or equal (&#x60;gte&#x60;) operators are available. Example of filtering by time range __gte__2017-03-14T07:30:00Z__ | [optional] 

### Return type

[**List[PulseResponse]**](PulseResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All pulses&#39; responses |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

