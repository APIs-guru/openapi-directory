# openapi_client.AcquisitionsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acquisitions_list**](AcquisitionsApi.md#acquisitions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Storage.Admin/locations/{location}/acquisitions | 


# **acquisitions_list**
> AcquisitionList acquisitions_list(subscription_id, location, api_version)



Returns a list of BLOB acquisitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.acquisition_list import AcquisitionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcquisitionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    location = 'location_example' # str | Resource location.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.acquisitions_list(subscription_id, location, api_version)
        print("The response of AcquisitionsApi->acquisitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcquisitionsApi->acquisitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **location** | **str**| Resource location. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**AcquisitionList**](AcquisitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of acquisitions has been returned. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

