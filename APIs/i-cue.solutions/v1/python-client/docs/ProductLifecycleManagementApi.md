# openapi_client.ProductLifecycleManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lifecycle_many_to_one_post**](ProductLifecycleManagementApi.md#lifecycle_many_to_one_post) | **POST** /lifecycle/many-to-one | Map from old product to new product to create artifical history
[**lifecycle_one_to_one_post**](ProductLifecycleManagementApi.md#lifecycle_one_to_one_post) | **POST** /lifecycle/one-to-one | Map from old product to new product to create artifical history


# **lifecycle_many_to_one_post**
> PlanningLevelDataDto lifecycle_many_to_one_post(token=token, lifecycle_many_to_one_request=lifecycle_many_to_one_request)

Map from old product to new product to create artifical history

Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.models.lifecycle_many_to_one_request import LifecycleManyToOneRequest
from openapi_client.models.planning_level_data_dto import PlanningLevelDataDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductLifecycleManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    lifecycle_many_to_one_request = openapi_client.LifecycleManyToOneRequest() # LifecycleManyToOneRequest |  (optional)

    try:
        # Map from old product to new product to create artifical history
        api_response = api_instance.lifecycle_many_to_one_post(token=token, lifecycle_many_to_one_request=lifecycle_many_to_one_request)
        print("The response of ProductLifecycleManagementApi->lifecycle_many_to_one_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductLifecycleManagementApi->lifecycle_many_to_one_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **lifecycle_many_to_one_request** | [**LifecycleManyToOneRequest**](LifecycleManyToOneRequest.md)|  | [optional] 

### Return type

[**PlanningLevelDataDto**](PlanningLevelDataDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lifecycle_one_to_one_post**
> PlanningLevelDataDto lifecycle_one_to_one_post(token=token, lifecycle_one_to_one_request=lifecycle_one_to_one_request)

Map from old product to new product to create artifical history

Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.models.lifecycle_one_to_one_request import LifecycleOneToOneRequest
from openapi_client.models.planning_level_data_dto import PlanningLevelDataDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductLifecycleManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    lifecycle_one_to_one_request = openapi_client.LifecycleOneToOneRequest() # LifecycleOneToOneRequest |  (optional)

    try:
        # Map from old product to new product to create artifical history
        api_response = api_instance.lifecycle_one_to_one_post(token=token, lifecycle_one_to_one_request=lifecycle_one_to_one_request)
        print("The response of ProductLifecycleManagementApi->lifecycle_one_to_one_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductLifecycleManagementApi->lifecycle_one_to_one_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **lifecycle_one_to_one_request** | [**LifecycleOneToOneRequest**](LifecycleOneToOneRequest.md)|  | [optional] 

### Return type

[**PlanningLevelDataDto**](PlanningLevelDataDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

