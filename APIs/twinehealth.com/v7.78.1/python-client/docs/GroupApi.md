# openapi_client.GroupApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_group**](GroupApi.md#create_group) | **POST** /group | Create a group
[**fetch_group**](GroupApi.md#fetch_group) | **GET** /group/{id} | Get a group
[**fetch_groups**](GroupApi.md#fetch_groups) | **GET** /group | List groups


# **create_group**
> CreateGroupResponse create_group(create_group_request)

Create a group

Create a group record.

### Example


```python
import openapi_client
from openapi_client.models.create_group_request import CreateGroupRequest
from openapi_client.models.create_group_response import CreateGroupResponse
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
    api_instance = openapi_client.GroupApi(api_client)
    create_group_request = openapi_client.CreateGroupRequest() # CreateGroupRequest | 

    try:
        # Create a group
        api_response = api_instance.create_group(create_group_request)
        print("The response of GroupApi->create_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_group_request** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | 

### Return type

[**CreateGroupResponse**](CreateGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_group**
> FetchGroupResponse fetch_group(id)

Get a group

Get a group record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_group_response import FetchGroupResponse
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
    api_instance = openapi_client.GroupApi(api_client)
    id = 'id_example' # str | Group identifier

    try:
        # Get a group
        api_response = api_instance.fetch_group(id)
        print("The response of GroupApi->fetch_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->fetch_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Group identifier | 

### Return type

[**FetchGroupResponse**](FetchGroupResponse.md)

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

# **fetch_groups**
> FetchGroupsResponse fetch_groups(filter_organization, filter_name=filter_name)

List groups

Get a list of groups matching the specified filters.

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
    api_instance = openapi_client.GroupApi(api_client)
    filter_organization = 'filter_organization_example' # str | Organization identifier
    filter_name = 'filter_name_example' # str | Group name (optional)

    try:
        # List groups
        api_response = api_instance.fetch_groups(filter_organization, filter_name=filter_name)
        print("The response of GroupApi->fetch_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->fetch_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_organization** | **str**| Organization identifier | 
 **filter_name** | **str**| Group name | [optional] 

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

