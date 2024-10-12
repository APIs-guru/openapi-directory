# openapi_client.CloudStorageApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloud_storage_api_get_list**](CloudStorageApi.md#cloud_storage_api_get_list) | **GET** /api/v1/cloudstorages | Gets a list of all connected cloud storage devices


# **cloud_storage_api_get_list**
> RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageApiModel cloud_storage_api_get_list()

Gets a list of all connected cloud storage devices

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_cloud_storage_api_model import RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CloudStorageApi(api_client)

    try:
        # Gets a list of all connected cloud storage devices
        api_response = api_instance.cloud_storage_api_get_list()
        print("The response of CloudStorageApi->cloud_storage_api_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudStorageApi->cloud_storage_api_get_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageApiModel**](RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

