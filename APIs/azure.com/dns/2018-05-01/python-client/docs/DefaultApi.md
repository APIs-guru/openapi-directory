# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dns_resource_reference_get_by_target_resources**](DefaultApi.md#dns_resource_reference_get_by_target_resources) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Network/getDnsResourceReference | 


# **dns_resource_reference_get_by_target_resources**
> DnsResourceReferenceResult dns_resource_reference_get_by_target_resources(api_version, subscription_id, parameters)



Returns the DNS records specified by the referencing targetResourceIds.

### Example


```python
import openapi_client
from openapi_client.models.dns_resource_reference_request import DnsResourceReferenceRequest
from openapi_client.models.dns_resource_reference_result import DnsResourceReferenceResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
    parameters = openapi_client.DnsResourceReferenceRequest() # DnsResourceReferenceRequest | Properties for dns resource reference request.

    try:
        api_response = api_instance.dns_resource_reference_get_by_target_resources(api_version, subscription_id, parameters)
        print("The response of DefaultApi->dns_resource_reference_get_by_target_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->dns_resource_reference_get_by_target_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 
 **parameters** | [**DnsResourceReferenceRequest**](DnsResourceReferenceRequest.md)| Properties for dns resource reference request. | 

### Return type

[**DnsResourceReferenceResult**](DnsResourceReferenceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

