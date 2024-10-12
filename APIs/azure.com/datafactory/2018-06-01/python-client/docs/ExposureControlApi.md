# openapi_client.ExposureControlApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exposure_control_get_feature_value**](ExposureControlApi.md#exposure_control_get_feature_value) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/getFeatureValue | 
[**exposure_control_get_feature_value_by_factory**](ExposureControlApi.md#exposure_control_get_feature_value_by_factory) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getFeatureValue | 


# **exposure_control_get_feature_value**
> ExposureControlResponse exposure_control_get_feature_value(subscription_id, location_id, api_version, exposure_control_request)



Get exposure control feature for specific location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.exposure_control_request import ExposureControlRequest
from openapi_client.models.exposure_control_response import ExposureControlResponse
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
    api_instance = openapi_client.ExposureControlApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    location_id = 'location_id_example' # str | The location identifier.
    api_version = 'api_version_example' # str | The API version.
    exposure_control_request = openapi_client.ExposureControlRequest() # ExposureControlRequest | The exposure control request.

    try:
        api_response = api_instance.exposure_control_get_feature_value(subscription_id, location_id, api_version, exposure_control_request)
        print("The response of ExposureControlApi->exposure_control_get_feature_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExposureControlApi->exposure_control_get_feature_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **location_id** | **str**| The location identifier. | 
 **api_version** | **str**| The API version. | 
 **exposure_control_request** | [**ExposureControlRequest**](ExposureControlRequest.md)| The exposure control request. | 

### Return type

[**ExposureControlResponse**](ExposureControlResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exposure_control_get_feature_value_by_factory**
> ExposureControlResponse exposure_control_get_feature_value_by_factory(subscription_id, resource_group_name, factory_name, api_version, exposure_control_request)



Get exposure control feature for specific factory.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.exposure_control_request import ExposureControlRequest
from openapi_client.models.exposure_control_response import ExposureControlResponse
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
    api_instance = openapi_client.ExposureControlApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    exposure_control_request = openapi_client.ExposureControlRequest() # ExposureControlRequest | The exposure control request.

    try:
        api_response = api_instance.exposure_control_get_feature_value_by_factory(subscription_id, resource_group_name, factory_name, api_version, exposure_control_request)
        print("The response of ExposureControlApi->exposure_control_get_feature_value_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExposureControlApi->exposure_control_get_feature_value_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **exposure_control_request** | [**ExposureControlRequest**](ExposureControlRequest.md)| The exposure control request. | 

### Return type

[**ExposureControlResponse**](ExposureControlResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

