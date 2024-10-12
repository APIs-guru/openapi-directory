# openapi_client.LoadBalancersApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**load_balancers_list**](LoadBalancersApi.md#load_balancers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/adminLoadBalancers | 


# **load_balancers_list**
> LoadBalancerList load_balancers_list(subscription_id, api_version, filter=filter, order_by=order_by, top=top, skip=skip, inline_count=inline_count)



Get a list of all load balancers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.load_balancer_list import LoadBalancerList
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
    api_instance = openapi_client.LoadBalancersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')
    filter = 'filter_example' # str | OData filter parameter. (optional)
    order_by = 'order_by_example' # str | OData orderBy parameter. (optional)
    top = 'top_example' # str | OData top parameter. (optional)
    skip = 'skip_example' # str | OData skip parameter. (optional)
    inline_count = 'inline_count_example' # str | OData inline count parameter. (optional)

    try:
        api_response = api_instance.load_balancers_list(subscription_id, api_version, filter=filter, order_by=order_by, top=top, skip=skip, inline_count=inline_count)
        print("The response of LoadBalancersApi->load_balancers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoadBalancersApi->load_balancers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 
 **order_by** | **str**| OData orderBy parameter. | [optional] 
 **top** | **str**| OData top parameter. | [optional] 
 **skip** | **str**| OData skip parameter. | [optional] 
 **inline_count** | **str**| OData inline count parameter. | [optional] 

### Return type

[**LoadBalancerList**](LoadBalancerList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

