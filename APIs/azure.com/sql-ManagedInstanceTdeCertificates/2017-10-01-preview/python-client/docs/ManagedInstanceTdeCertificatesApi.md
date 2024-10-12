# openapi_client.ManagedInstanceTdeCertificatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_instance_tde_certificates_create**](ManagedInstanceTdeCertificatesApi.md#managed_instance_tde_certificates_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/tdeCertificates | 


# **managed_instance_tde_certificates_create**
> managed_instance_tde_certificates_create(resource_group_name, managed_instance_name, subscription_id, api_version, parameters)



Creates a TDE certificate for a given server.

### Example


```python
import openapi_client
from openapi_client.models.tde_certificate import TdeCertificate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedInstanceTdeCertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.TdeCertificate() # TdeCertificate | The requested TDE certificate to be created or updated.

    try:
        api_instance.managed_instance_tde_certificates_create(resource_group_name, managed_instance_name, subscription_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling ManagedInstanceTdeCertificatesApi->managed_instance_tde_certificates_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**TdeCertificate**](TdeCertificate.md)| The requested TDE certificate to be created or updated. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created the TDE certificate. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 MissingPrivateBlob - The private blob is missing.   * 400 InvalidPrivateBlobOrPassword - Invalid private blob or password specified.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

