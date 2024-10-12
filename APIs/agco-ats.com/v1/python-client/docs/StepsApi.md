# openapi_client.StepsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**steps_get_step**](StepsApi.md#steps_get_step) | **GET** /api/v2/steps/{stepID} | Get a Step by ID
[**steps_get_steps**](StepsApi.md#steps_get_steps) | **GET** /api/v2/steps | Get Steps
[**steps_post_step**](StepsApi.md#steps_post_step) | **POST** /api/v2/steps | Create a Step
[**steps_put_step**](StepsApi.md#steps_put_step) | **PUT** /api/v2/steps/{stepID} | Update a Step


# **steps_get_step**
> BuildSystemSharedDTOStep steps_get_step(step_id, is_include_deleted=is_include_deleted)

Get a Step by ID

Gets a Step by ID. When successful, the response is the requested Step.              If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_step import BuildSystemSharedDTOStep
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StepsApi(api_client)
    step_id = 56 # int | The ID of the Step to get.
    is_include_deleted = True # bool | Does it include deleted step, or not (optional)

    try:
        # Get a Step by ID
        api_response = api_instance.steps_get_step(step_id, is_include_deleted=is_include_deleted)
        print("The response of StepsApi->steps_get_step:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StepsApi->steps_get_step: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **step_id** | **int**| The ID of the Step to get. | 
 **is_include_deleted** | **bool**| Does it include deleted step, or not | [optional] 

### Return type

[**BuildSystemSharedDTOStep**](BuildSystemSharedDTOStep.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **steps_get_steps**
> APIPagedResponseBuildSystemSharedDTOStep steps_get_steps(limit=limit, offset=offset, include_deleted=include_deleted)

Get Steps

Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.              If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_build_system_shared_dto_step import APIPagedResponseBuildSystemSharedDTOStep
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StepsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    include_deleted = True # bool | Does it include deleted step, or not (optional)

    try:
        # Get Steps
        api_response = api_instance.steps_get_steps(limit=limit, offset=offset, include_deleted=include_deleted)
        print("The response of StepsApi->steps_get_steps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StepsApi->steps_get_steps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **include_deleted** | **bool**| Does it include deleted step, or not | [optional] 

### Return type

[**APIPagedResponseBuildSystemSharedDTOStep**](APIPagedResponseBuildSystemSharedDTOStep.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **steps_post_step**
> int steps_post_step(build_system_shared_dto_step)

Create a Step

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_step import BuildSystemSharedDTOStep
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StepsApi(api_client)
    build_system_shared_dto_step = openapi_client.BuildSystemSharedDTOStep() # BuildSystemSharedDTOStep | The step to create

    try:
        # Create a Step
        api_response = api_instance.steps_post_step(build_system_shared_dto_step)
        print("The response of StepsApi->steps_post_step:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StepsApi->steps_post_step: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_system_shared_dto_step** | [**BuildSystemSharedDTOStep**](BuildSystemSharedDTOStep.md)| The step to create | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **steps_put_step**
> steps_put_step(step_id, build_system_shared_dto_step)

Update a Step

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_step import BuildSystemSharedDTOStep
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StepsApi(api_client)
    step_id = 56 # int | The step ID of the step to update
    build_system_shared_dto_step = openapi_client.BuildSystemSharedDTOStep() # BuildSystemSharedDTOStep | The updated step

    try:
        # Update a Step
        api_instance.steps_put_step(step_id, build_system_shared_dto_step)
    except Exception as e:
        print("Exception when calling StepsApi->steps_put_step: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **step_id** | **int**| The step ID of the step to update | 
 **build_system_shared_dto_step** | [**BuildSystemSharedDTOStep**](BuildSystemSharedDTOStep.md)| The updated step | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

