# openapi_client.LegacyPeeringsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**legacy_peerings_list**](LegacyPeeringsApi.md#legacy_peerings_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/legacyPeerings | 


# **legacy_peerings_list**
> PeeringListResult legacy_peerings_list(peering_location, kind, subscription_id, api_version)



Lists all of the legacy peerings under the given subscription matching the specified kind and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_list_result import PeeringListResult
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
    api_instance = openapi_client.LegacyPeeringsApi(api_client)
    peering_location = 'peering_location_example' # str | The location of the peering.
    kind = 'kind_example' # str | The kind of the peering.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.legacy_peerings_list(peering_location, kind, subscription_id, api_version)
        print("The response of LegacyPeeringsApi->legacy_peerings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LegacyPeeringsApi->legacy_peerings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peering_location** | **str**| The location of the peering. | 
 **kind** | **str**| The kind of the peering. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeeringListResult**](PeeringListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

