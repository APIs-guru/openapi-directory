# openapi_client.CatalogApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_catalog**](CatalogApi.md#get_catalog) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Capacity/catalogs | Get the regions and skus that are available for RI purchase for the specified Azure subscription.


# **get_catalog**
> List[Catalog] get_catalog(api_version, subscription_id)

Get the regions and skus that are available for RI purchase for the specified Azure subscription.

### Example


```python
import openapi_client
from openapi_client.models.catalog import Catalog
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
    api_instance = openapi_client.CatalogApi(api_client)
    api_version = 'api_version_example' # str | Supported version.
    subscription_id = 'subscription_id_example' # str | Id of the subscription

    try:
        # Get the regions and skus that are available for RI purchase for the specified Azure subscription.
        api_response = api_instance.get_catalog(api_version, subscription_id)
        print("The response of CatalogApi->get_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->get_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Supported version. | 
 **subscription_id** | **str**| Id of the subscription | 

### Return type

[**List[Catalog]**](Catalog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of available resources |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

