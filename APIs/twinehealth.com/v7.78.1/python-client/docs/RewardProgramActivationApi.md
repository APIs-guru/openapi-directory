# openapi_client.RewardProgramActivationApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_reward_program_activation**](RewardProgramActivationApi.md#create_reward_program_activation) | **POST** /reward_program_activation | Create a reward program activation
[**fetch_reward_program_activation**](RewardProgramActivationApi.md#fetch_reward_program_activation) | **GET** /reward_program_activation/{id} | Get a reward program activation
[**fetch_reward_program_activations**](RewardProgramActivationApi.md#fetch_reward_program_activations) | **GET** /reward_program_activation | List reward program activations


# **create_reward_program_activation**
> CreateRewardProgramActivationResponse create_reward_program_activation(create_reward_program_activation_request)

Create a reward program activation

Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.

### Example


```python
import openapi_client
from openapi_client.models.create_reward_program_activation_request import CreateRewardProgramActivationRequest
from openapi_client.models.create_reward_program_activation_response import CreateRewardProgramActivationResponse
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
    api_instance = openapi_client.RewardProgramActivationApi(api_client)
    create_reward_program_activation_request = openapi_client.CreateRewardProgramActivationRequest() # CreateRewardProgramActivationRequest | 

    try:
        # Create a reward program activation
        api_response = api_instance.create_reward_program_activation(create_reward_program_activation_request)
        print("The response of RewardProgramActivationApi->create_reward_program_activation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramActivationApi->create_reward_program_activation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_reward_program_activation_request** | [**CreateRewardProgramActivationRequest**](CreateRewardProgramActivationRequest.md)|  | 

### Return type

[**CreateRewardProgramActivationResponse**](CreateRewardProgramActivationResponse.md)

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

# **fetch_reward_program_activation**
> FetchRewardProgramActivationResponse fetch_reward_program_activation(id)

Get a reward program activation

Get a reward program activationrecord by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_program_activation_response import FetchRewardProgramActivationResponse
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
    api_instance = openapi_client.RewardProgramActivationApi(api_client)
    id = 'id_example' # str | Reward program activation identifier

    try:
        # Get a reward program activation
        api_response = api_instance.fetch_reward_program_activation(id)
        print("The response of RewardProgramActivationApi->fetch_reward_program_activation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramActivationApi->fetch_reward_program_activation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Reward program activation identifier | 

### Return type

[**FetchRewardProgramActivationResponse**](FetchRewardProgramActivationResponse.md)

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

# **fetch_reward_program_activations**
> FetchRewardProgramActivationsResponse fetch_reward_program_activations(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization)

List reward program activations

Get a list of reward program activations matching the specified filters.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_program_activations_response import FetchRewardProgramActivationsResponse
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
    api_instance = openapi_client.RewardProgramActivationApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)

    try:
        # List reward program activations
        api_response = api_instance.fetch_reward_program_activations(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization)
        print("The response of RewardProgramActivationApi->fetch_reward_program_activations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramActivationApi->fetch_reward_program_activations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient identifier. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 

### Return type

[**FetchRewardProgramActivationsResponse**](FetchRewardProgramActivationsResponse.md)

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

