# openapi_client.ChangesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_change_details**](ChangesApi.md#resource_change_details) | **POST** /providers/Microsoft.ResourceGraph/resourceChangeDetails | 
[**resource_changes**](ChangesApi.md#resource_changes) | **POST** /providers/Microsoft.ResourceGraph/resourceChanges | 


# **resource_change_details**
> ResourceChangeData resource_change_details(api_version, parameters)



Get resource change details.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_change_data import ResourceChangeData
from openapi_client.models.resource_change_details_request_parameters import ResourceChangeDetailsRequestParameters
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
    api_instance = openapi_client.ChangesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.ResourceChangeDetailsRequestParameters() # ResourceChangeDetailsRequestParameters | The parameters for this request for resource change details.

    try:
        api_response = api_instance.resource_change_details(api_version, parameters)
        print("The response of ChangesApi->resource_change_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangesApi->resource_change_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**ResourceChangeDetailsRequestParameters**](ResourceChangeDetailsRequestParameters.md)| The parameters for this request for resource change details. | 

### Return type

[**ResourceChangeData**](ResourceChangeData.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource change details. |  -  |
**0** | A response indicating an error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_changes**
> ResourceChangeList resource_changes(api_version, parameters)



List changes to a resource for a given time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_change_list import ResourceChangeList
from openapi_client.models.resource_changes_request_parameters import ResourceChangesRequestParameters
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
    api_instance = openapi_client.ChangesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.ResourceChangesRequestParameters() # ResourceChangesRequestParameters | the parameters for this request for changes.

    try:
        api_response = api_instance.resource_changes(api_version, parameters)
        print("The response of ChangesApi->resource_changes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangesApi->resource_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**ResourceChangesRequestParameters**](ResourceChangesRequestParameters.md)| the parameters for this request for changes. | 

### Return type

[**ResourceChangeList**](ResourceChangeList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of changes associated with a resource over a specific time interval. |  -  |
**0** | A response indicating an error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

