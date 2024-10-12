# openapi_client.RewardApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_reward**](RewardApi.md#create_reward) | **POST** /reward | Create a reward
[**fetch_reward**](RewardApi.md#fetch_reward) | **GET** /reward/{id} | Get a reward
[**fetch_rewards**](RewardApi.md#fetch_rewards) | **GET** /reward | List rewards


# **create_reward**
> CreateRewardResponse create_reward(create_reward_request)

Create a reward

Create a reward for a patient.

### Example


```python
import openapi_client
from openapi_client.models.create_reward_request import CreateRewardRequest
from openapi_client.models.create_reward_response import CreateRewardResponse
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
    api_instance = openapi_client.RewardApi(api_client)
    create_reward_request = openapi_client.CreateRewardRequest() # CreateRewardRequest | 

    try:
        # Create a reward
        api_response = api_instance.create_reward(create_reward_request)
        print("The response of RewardApi->create_reward:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardApi->create_reward: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_reward_request** | [**CreateRewardRequest**](CreateRewardRequest.md)|  | 

### Return type

[**CreateRewardResponse**](CreateRewardResponse.md)

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

# **fetch_reward**
> FetchRewardResponse fetch_reward(id)

Get a reward

Get a reward record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_response import FetchRewardResponse
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
    api_instance = openapi_client.RewardApi(api_client)
    id = 'id_example' # str | Reward identifier

    try:
        # Get a reward
        api_response = api_instance.fetch_reward(id)
        print("The response of RewardApi->fetch_reward:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardApi->fetch_reward: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Reward identifier | 

### Return type

[**FetchRewardResponse**](FetchRewardResponse.md)

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

# **fetch_rewards**
> FetchRewardsResponse fetch_rewards(filter_patient=filter_patient, filter_reward_program_activation=filter_reward_program_activation, filter_thread=filter_thread, filter_groups=filter_groups, filter_organization=filter_organization)

List rewards

Get a list of rewards matching the specified filters.

### Example


```python
import openapi_client
from openapi_client.models.fetch_rewards_response import FetchRewardsResponse
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
    api_instance = openapi_client.RewardApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_reward_program_activation = 'filter_reward_program_activation_example' # str | Reward program activation identifier (optional)
    filter_thread = 'filter_thread_example' # str | Thread identifier (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)

    try:
        # List rewards
        api_response = api_instance.fetch_rewards(filter_patient=filter_patient, filter_reward_program_activation=filter_reward_program_activation, filter_thread=filter_thread, filter_groups=filter_groups, filter_organization=filter_organization)
        print("The response of RewardApi->fetch_rewards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardApi->fetch_rewards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient identifier. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_reward_program_activation** | **str**| Reward program activation identifier | [optional] 
 **filter_thread** | **str**| Thread identifier | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 

### Return type

[**FetchRewardsResponse**](FetchRewardsResponse.md)

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

