# openapi_client.RewardEarningApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_reward_earning**](RewardEarningApi.md#create_reward_earning) | **POST** /reward_earning | Create a reward earning
[**fetch_reward_earning**](RewardEarningApi.md#fetch_reward_earning) | **GET** /reward_earning/{id} | Get a reward earning
[**fetch_reward_earnings**](RewardEarningApi.md#fetch_reward_earnings) | **GET** /reward_earning | List reward earnings


# **create_reward_earning**
> CreateRewardEarningResponse create_reward_earning(create_reward_earning_request)

Create a reward earning

Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.

### Example


```python
import openapi_client
from openapi_client.models.create_reward_earning_request import CreateRewardEarningRequest
from openapi_client.models.create_reward_earning_response import CreateRewardEarningResponse
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
    api_instance = openapi_client.RewardEarningApi(api_client)
    create_reward_earning_request = openapi_client.CreateRewardEarningRequest() # CreateRewardEarningRequest | 

    try:
        # Create a reward earning
        api_response = api_instance.create_reward_earning(create_reward_earning_request)
        print("The response of RewardEarningApi->create_reward_earning:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardEarningApi->create_reward_earning: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_reward_earning_request** | [**CreateRewardEarningRequest**](CreateRewardEarningRequest.md)|  | 

### Return type

[**CreateRewardEarningResponse**](CreateRewardEarningResponse.md)

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

# **fetch_reward_earning**
> FetchRewardEarningResponse fetch_reward_earning(id)

Get a reward earning

Get a reward earning record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_earning_response import FetchRewardEarningResponse
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
    api_instance = openapi_client.RewardEarningApi(api_client)
    id = 'id_example' # str | Reward earning identifier

    try:
        # Get a reward earning
        api_response = api_instance.fetch_reward_earning(id)
        print("The response of RewardEarningApi->fetch_reward_earning:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardEarningApi->fetch_reward_earning: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Reward earning identifier | 

### Return type

[**FetchRewardEarningResponse**](FetchRewardEarningResponse.md)

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

# **fetch_reward_earnings**
> FetchRewardEarningsResponse fetch_reward_earnings(filter_groups, filter_patient, filter_ready_for_fulfillment=filter_ready_for_fulfillment)

List reward earnings

Get a list of reward earnings matching the specified filters.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_earnings_response import FetchRewardEarningsResponse
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
    api_instance = openapi_client.RewardEarningApi(api_client)
    filter_groups = 'filter_groups_example' # str | Group identifiers
    filter_patient = 'filter_patient_example' # str | Patient identifier
    filter_ready_for_fulfillment = True # bool | If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null. (optional)

    try:
        # List reward earnings
        api_response = api_instance.fetch_reward_earnings(filter_groups, filter_patient, filter_ready_for_fulfillment=filter_ready_for_fulfillment)
        print("The response of RewardEarningApi->fetch_reward_earnings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardEarningApi->fetch_reward_earnings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_groups** | **str**| Group identifiers | 
 **filter_patient** | **str**| Patient identifier | 
 **filter_ready_for_fulfillment** | **bool**| If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null. | [optional] 

### Return type

[**FetchRewardEarningsResponse**](FetchRewardEarningsResponse.md)

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

