# openapi_client.RewardProgramApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_reward_program**](RewardProgramApi.md#create_reward_program) | **POST** /reward_program | Create a reward program
[**fetch_reward_program**](RewardProgramApi.md#fetch_reward_program) | **GET** /reward_program/{id} | Get a reward program
[**fetch_reward_program_group**](RewardProgramApi.md#fetch_reward_program_group) | **GET** /reward_program/{id}/group | Get group for a reward program
[**fetch_reward_programs**](RewardProgramApi.md#fetch_reward_programs) | **GET** /reward_program | List reward programs


# **create_reward_program**
> CreateRewardProgramResponse create_reward_program(create_reward_program_request)

Create a reward program

Create a reward program for a group.

### Example


```python
import openapi_client
from openapi_client.models.create_reward_program_request import CreateRewardProgramRequest
from openapi_client.models.create_reward_program_response import CreateRewardProgramResponse
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
    api_instance = openapi_client.RewardProgramApi(api_client)
    create_reward_program_request = openapi_client.CreateRewardProgramRequest() # CreateRewardProgramRequest | 

    try:
        # Create a reward program
        api_response = api_instance.create_reward_program(create_reward_program_request)
        print("The response of RewardProgramApi->create_reward_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramApi->create_reward_program: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_reward_program_request** | [**CreateRewardProgramRequest**](CreateRewardProgramRequest.md)|  | 

### Return type

[**CreateRewardProgramResponse**](CreateRewardProgramResponse.md)

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

# **fetch_reward_program**
> FetchRewardProgramResponse fetch_reward_program(id)

Get a reward program

Get a reward program record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_program_response import FetchRewardProgramResponse
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
    api_instance = openapi_client.RewardProgramApi(api_client)
    id = 'id_example' # str | Reward program identifier

    try:
        # Get a reward program
        api_response = api_instance.fetch_reward_program(id)
        print("The response of RewardProgramApi->fetch_reward_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramApi->fetch_reward_program: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Reward program identifier | 

### Return type

[**FetchRewardProgramResponse**](FetchRewardProgramResponse.md)

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

# **fetch_reward_program_group**
> FetchGroupsResponse fetch_reward_program_group(id)

Get group for a reward program

Get the group related to a reward program.

### Example


```python
import openapi_client
from openapi_client.models.fetch_groups_response import FetchGroupsResponse
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
    api_instance = openapi_client.RewardProgramApi(api_client)
    id = 'id_example' # str | Reward program identifier

    try:
        # Get group for a reward program
        api_response = api_instance.fetch_reward_program_group(id)
        print("The response of RewardProgramApi->fetch_reward_program_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramApi->fetch_reward_program_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Reward program identifier | 

### Return type

[**FetchGroupsResponse**](FetchGroupsResponse.md)

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

# **fetch_reward_programs**
> FetchRewardProgramsResponse fetch_reward_programs(filter_groups=filter_groups, filter_organization=filter_organization)

List reward programs

Get a list of reward programs matching the specified filters.

### Example


```python
import openapi_client
from openapi_client.models.fetch_reward_programs_response import FetchRewardProgramsResponse
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
    api_instance = openapi_client.RewardProgramApi(api_client)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group identifiers. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.  (optional)

    try:
        # List reward programs
        api_response = api_instance.fetch_reward_programs(filter_groups=filter_groups, filter_organization=filter_organization)
        print("The response of RewardProgramApi->fetch_reward_programs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardProgramApi->fetch_reward_programs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_groups** | **str**| Comma-separated list of group identifiers. Note that one of the following filters must be specified: &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 

### Return type

[**FetchRewardProgramsResponse**](FetchRewardProgramsResponse.md)

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

