# openapi_client.RewardEarningFulfillmentApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_reward_earning_fulfillment**](RewardEarningFulfillmentApi.md#create_reward_earning_fulfillment) | **POST** /reward_earning_fulfillment | Create a reward earning fulfillment
[**fetch_reward_earning_fulfillment**](RewardEarningFulfillmentApi.md#fetch_reward_earning_fulfillment) | **GET** /reward_earning_fulfillment/{id} | Get a reward earning fulfillment
[**fetch_reward_earning_fulfillments**](RewardEarningFulfillmentApi.md#fetch_reward_earning_fulfillments) | **GET** /reward_earning_fulfillment | List reward earning fulfillments


# **create_reward_earning_fulfillment**
> CreateRewardEarningFulfillmentResponse create_reward_earning_fulfillment(create_reward_earning_fulfillment_request)

Create a reward earning fulfillment

Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.

### Example


```python
import openapi_client
from openapi_client.models.create_reward_earning_fulfillment_request import CreateRewardEarningFulfillmentRequest
from openapi_client.models.create_reward_earning_fulfillment_response import CreateRewardEarningFulfillmentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RewardEarningFulfillmentApi(api_client)
    create_reward_earning_fulfillment_request = openapi_client.CreateRewardEarningFulfillmentRequest() # CreateRewardEarningFulfillmentRequest | 

    try:
        # Create a reward earning fulfillment
        api_response = api_instance.create_reward_earning_fulfillment(create_reward_earning_fulfillment_request)
        print("The response of RewardEarningFulfillmentApi->create_reward_earning_fulfillment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardEarningFulfillmentApi->create_reward_earning_fulfillment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_reward_earning_fulfillment_request** | [**CreateRewardEarningFulfillmentRequest**](CreateRewardEarningFulfillmentRequest.md)|  | 

### Return type

[**CreateRewardEarningFulfillmentResponse**](CreateRewardEarningFulfillmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_reward_earning_fulfillment**
> FetchRewardEarningFulfillmentResponse fetch_reward_earning_fulfillment(id)

Get a reward earning fulfillment

Get a reward earning fulfillment record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_earning_fulfillment_response import FetchRewardEarningFulfillmentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RewardEarningFulfillmentApi(api_client)
    id = 'id_example' # str | Reward earning fulfillment identifier

    try:
        # Get a reward earning fulfillment
        api_response = api_instance.fetch_reward_earning_fulfillment(id)
        print("The response of RewardEarningFulfillmentApi->fetch_reward_earning_fulfillment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardEarningFulfillmentApi->fetch_reward_earning_fulfillment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Reward earning fulfillment identifier | 

### Return type

[**FetchRewardEarningFulfillmentResponse**](FetchRewardEarningFulfillmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_reward_earning_fulfillments**
> FetchRewardEarningFulfillmentsResponse fetch_reward_earning_fulfillments(filter_patient)

List reward earning fulfillments

Get a list of reward earning fulfillments matching the specified filters.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_earning_fulfillments_response import FetchRewardEarningFulfillmentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RewardEarningFulfillmentApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient identifier

    try:
        # List reward earning fulfillments
        api_response = api_instance.fetch_reward_earning_fulfillments(filter_patient)
        print("The response of RewardEarningFulfillmentApi->fetch_reward_earning_fulfillments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardEarningFulfillmentApi->fetch_reward_earning_fulfillments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient identifier | 

### Return type

[**FetchRewardEarningFulfillmentsResponse**](FetchRewardEarningFulfillmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

