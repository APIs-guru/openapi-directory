# openapi_client.AssignmentApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignments_create_or_update**](AssignmentApi.md#assignments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName} | 
[**assignments_delete**](AssignmentApi.md#assignments_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName} | 
[**assignments_get**](AssignmentApi.md#assignments_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName} | 
[**assignments_list**](AssignmentApi.md#assignments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Blueprint/blueprintAssignments | 


# **assignments_create_or_update**
> Assignment assignments_create_or_update(api_version, subscription_id, assignment_name, assignment)



Create or update a Blueprint assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssignmentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | azure subscriptionId, which we assign the blueprint to.
    assignment_name = 'assignment_name_example' # str | name of the assignment.
    assignment = openapi_client.Assignment() # Assignment | assignment object to save.

    try:
        api_response = api_instance.assignments_create_or_update(api_version, subscription_id, assignment_name, assignment)
        print("The response of AssignmentApi->assignments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentApi->assignments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| azure subscriptionId, which we assign the blueprint to. | 
 **assignment_name** | **str**| name of the assignment. | 
 **assignment** | [**Assignment**](Assignment.md)| assignment object to save. | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Blueprint assignment saved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignments_delete**
> Assignment assignments_delete(api_version, subscription_id, assignment_name)



Delete a Blueprint assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssignmentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | azure subscriptionId, which we assign the blueprint to.
    assignment_name = 'assignment_name_example' # str | name of the assignment.

    try:
        api_response = api_instance.assignments_delete(api_version, subscription_id, assignment_name)
        print("The response of AssignmentApi->assignments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentApi->assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| azure subscriptionId, which we assign the blueprint to. | 
 **assignment_name** | **str**| name of the assignment. | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | OK - Blueprint assignment deleted. |  -  |
**204** | no content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignments_get**
> Assignment assignments_get(api_version, subscription_id, assignment_name)



Get a Blueprint assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssignmentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | azure subscriptionId, which we assign the blueprint to.
    assignment_name = 'assignment_name_example' # str | name of the assignment.

    try:
        api_response = api_instance.assignments_get(api_version, subscription_id, assignment_name)
        print("The response of AssignmentApi->assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentApi->assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| azure subscriptionId, which we assign the blueprint to. | 
 **assignment_name** | **str**| name of the assignment. | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Blueprint assignment retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignments_list**
> AssignmentList assignments_list(api_version, subscription_id)



List Blueprint assignments within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assignment_list import AssignmentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssignmentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | azure subscriptionId, which we assign the blueprint to.

    try:
        api_response = api_instance.assignments_list(api_version, subscription_id)
        print("The response of AssignmentApi->assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentApi->assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| azure subscriptionId, which we assign the blueprint to. | 

### Return type

[**AssignmentList**](AssignmentList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - all Blueprint assignment retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

