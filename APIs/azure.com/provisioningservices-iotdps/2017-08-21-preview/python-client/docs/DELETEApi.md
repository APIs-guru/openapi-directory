# openapi_client.DELETEApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dps_certificate_delete**](DELETEApi.md#dps_certificate_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName} | 
[**iot_dps_resource_delete**](DELETEApi.md#iot_dps_resource_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName} | 


# **dps_certificate_delete**
> dps_certificate_delete(subscription_id, resource_group_name, if_match, provisioning_service_name, certificate_name, api_version, certificate_name2=certificate_name2, certificate_raw_bytes=certificate_raw_bytes, certificate_is_verified=certificate_is_verified, certificate_purpose=certificate_purpose, certificate_created=certificate_created, certificate_last_updated=certificate_last_updated, certificate_has_private_key=certificate_has_private_key, certificate_nonce=certificate_nonce)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.DELETEApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    if_match = 'if_match_example' # str | ETag of the certificate
    provisioning_service_name = 'provisioning_service_name_example' # str | The name of the provisioning service.
    certificate_name = 'certificate_name_example' # str | This is a mandatory field, and is the logical name of the certificate that the provisioning service will access by.
    api_version = 'api_version_example' # str | The version of the API.
    certificate_name2 = 'certificate_name_example' # str | This is optional, and it is the Common Name of the certificate. (optional)
    certificate_raw_bytes = None # bytearray | Raw data within the certificate. (optional)
    certificate_is_verified = True # bool | Indicates if certificate has been verified by owner of the private key. (optional)
    certificate_purpose = 'certificate_purpose_example' # str | A description that mentions the purpose of the certificate. (optional)
    certificate_created = '2013-10-20T19:20:30+01:00' # datetime | Time the certificate is created. (optional)
    certificate_last_updated = '2013-10-20T19:20:30+01:00' # datetime | Time the certificate is last updated. (optional)
    certificate_has_private_key = True # bool | Indicates if the certificate contains a private key. (optional)
    certificate_nonce = 'certificate_nonce_example' # str | Random number generated to indicate Proof of Possession. (optional)

    try:
        api_instance.dps_certificate_delete(subscription_id, resource_group_name, if_match, provisioning_service_name, certificate_name, api_version, certificate_name2=certificate_name2, certificate_raw_bytes=certificate_raw_bytes, certificate_is_verified=certificate_is_verified, certificate_purpose=certificate_purpose, certificate_created=certificate_created, certificate_last_updated=certificate_last_updated, certificate_has_private_key=certificate_has_private_key, certificate_nonce=certificate_nonce)
    except Exception as e:
        print("Exception when calling DELETEApi->dps_certificate_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **if_match** | **str**| ETag of the certificate | 
 **provisioning_service_name** | **str**| The name of the provisioning service. | 
 **certificate_name** | **str**| This is a mandatory field, and is the logical name of the certificate that the provisioning service will access by. | 
 **api_version** | **str**| The version of the API. | 
 **certificate_name2** | **str**| This is optional, and it is the Common Name of the certificate. | [optional] 
 **certificate_raw_bytes** | **bytearray**| Raw data within the certificate. | [optional] 
 **certificate_is_verified** | **bool**| Indicates if certificate has been verified by owner of the private key. | [optional] 
 **certificate_purpose** | **str**| A description that mentions the purpose of the certificate. | [optional] 
 **certificate_created** | **datetime**| Time the certificate is created. | [optional] 
 **certificate_last_updated** | **datetime**| Time the certificate is last updated. | [optional] 
 **certificate_has_private_key** | **bool**| Indicates if the certificate contains a private key. | [optional] 
 **certificate_nonce** | **str**| Random number generated to indicate Proof of Possession. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**204** | No content. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_delete**
> iot_dps_resource_delete(provisioning_service_name, subscription_id, resource_group_name, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.DELETEApi(api_client)
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service to delete.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        api_instance.iot_dps_resource_delete(provisioning_service_name, subscription_id, resource_group_name, api_version)
    except Exception as e:
        print("Exception when calling DELETEApi->iot_dps_resource_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioning_service_name** | **str**| Name of provisioning service to delete. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **api_version** | **str**| The version of the API. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | The provisioning service resource provider always returns a 202 Accepted status code with valid Location and Retry-After headers. The resource provider also sets the Azure-AsyncOperation header with a URL that points to the operation resource for this operation. Subsequent GET attempts on the resource after a DELETE operation return a resource representation that indicates a transitional provisioning state (such as Terminating). To retrieve the status of the operation, a client can either poll the URL returned in the Location header after the Retry-After interval, get the provisioning service status directly, or query the operation resource. |  -  |
**204** | Once the long running delete operation completes successfully, a 204 No Content status code is returned when the status polling request finds the provisioning service metadata in the service and the status of the delete operation is set to a completed state. |  -  |
**404** | After the long running delete operation completes successfully, a 404 Not Found is returned when the status polling request no longer finds the provisioning service metadata in the service. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

