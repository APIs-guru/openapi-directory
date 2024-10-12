# openapi_client.AzureFirewallFqdnTagsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**azure_firewall_fqdn_tags_list_all**](AzureFirewallFqdnTagsApi.md#azure_firewall_fqdn_tags_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewallFqdnTags | 


# **azure_firewall_fqdn_tags_list_all**
> AzureFirewallFqdnTagListResult azure_firewall_fqdn_tags_list_all(api_version, subscription_id)



Gets all the Azure Firewall FQDN Tags in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_firewall_fqdn_tag_list_result import AzureFirewallFqdnTagListResult
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
    api_instance = openapi_client.AzureFirewallFqdnTagsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.azure_firewall_fqdn_tags_list_all(api_version, subscription_id)
        print("The response of AzureFirewallFqdnTagsApi->azure_firewall_fqdn_tags_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureFirewallFqdnTagsApi->azure_firewall_fqdn_tags_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AzureFirewallFqdnTagListResult**](AzureFirewallFqdnTagListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of Azure Firewall FQDN Tag resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

