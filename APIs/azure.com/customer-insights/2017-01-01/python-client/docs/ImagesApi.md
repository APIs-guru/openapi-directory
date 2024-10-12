# openapi_client.ImagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**images_get_upload_url_for_data**](ImagesApi.md#images_get_upload_url_for_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getDataImageUploadUrl | 
[**images_get_upload_url_for_entity_type**](ImagesApi.md#images_get_upload_url_for_entity_type) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getEntityTypeImageUploadUrl | 


# **images_get_upload_url_for_data**
> ImageDefinition images_get_upload_url_for_data(resource_group_name, hub_name, api_version, subscription_id, parameters)



Gets data image upload URL.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_image_upload_url_input import GetImageUploadUrlInput
from openapi_client.models.image_definition import ImageDefinition
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
    api_instance = openapi_client.ImagesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.GetImageUploadUrlInput() # GetImageUploadUrlInput | Parameters supplied to the GetUploadUrlForData operation.

    try:
        api_response = api_instance.images_get_upload_url_for_data(resource_group_name, hub_name, api_version, subscription_id, parameters)
        print("The response of ImagesApi->images_get_upload_url_for_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_get_upload_url_for_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**GetImageUploadUrlInput**](GetImageUploadUrlInput.md)| Parameters supplied to the GetUploadUrlForData operation. | 

### Return type

[**ImageDefinition**](ImageDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get the image upload URL for data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_get_upload_url_for_entity_type**
> ImageDefinition images_get_upload_url_for_entity_type(resource_group_name, hub_name, api_version, subscription_id, parameters)



Gets entity type (profile or interaction) image upload URL.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_image_upload_url_input import GetImageUploadUrlInput
from openapi_client.models.image_definition import ImageDefinition
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
    api_instance = openapi_client.ImagesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.GetImageUploadUrlInput() # GetImageUploadUrlInput | Parameters supplied to the GetUploadUrlForEntityType operation.

    try:
        api_response = api_instance.images_get_upload_url_for_entity_type(resource_group_name, hub_name, api_version, subscription_id, parameters)
        print("The response of ImagesApi->images_get_upload_url_for_entity_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images_get_upload_url_for_entity_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**GetImageUploadUrlInput**](GetImageUploadUrlInput.md)| Parameters supplied to the GetUploadUrlForEntityType operation. | 

### Return type

[**ImageDefinition**](ImageDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get the image upload URL for entity type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

