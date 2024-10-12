# openapi_client.ServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_get**](ServicesApi.md#services_get) | **GET** /providers/Microsoft.Support/services/{serviceName} | 
[**services_list**](ServicesApi.md#services_list) | **GET** /providers/Microsoft.Support/services | 


# **services_get**
> Service services_get(service_name, api_version)



Gets a specific Azure service for support ticket creation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service import Service
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | Name of Azure service
    api_version = 'api_version_example' # str | Api version

    try:
        api_response = api_instance.services_get(service_name, api_version)
        print("The response of ServicesApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| Name of Azure service | 
 **api_version** | **str**| Api version | 

### Return type

[**Service**](Service.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved Azure service for support ticket creation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> ServicesListResult services_list(api_version)



Lists all the Azure services available for support ticket creation. Here are the Service Ids for **Billing**, **Subscription Management**, and **Service and subscription limits (Quotas)** issues: <br/><table><tr><td><u>Issue type</u></td><td><u>Service Id</u></td></tr><tr><td>Billing</td><td>'/providers/Microsoft.Support/services/517f2da6-78fd-0498-4e22-ad26996b1dfc'</td></tr><tr><td>Subscription Management</td><td>'/providers/Microsoft.Support/services/f3dc5421-79ef-1efa-41a5-42bf3cbb52c6'</td></tr><tr><td>Quota</td><td>'/providers/Microsoft.Support/services/06bfd9d3-516b-d5c6-5802-169c800dec89'</td></tr></table> <br/><br/> For **Technical** issues, select the Service Id that maps to the Azure service/product as displayed in the **Services** drop-down list on the Azure portal's <a target='_blank' href='https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview'>New support request</a> page. <br/><br/> Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list_result import ServicesListResult
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
    api_instance = openapi_client.ServicesApi(api_client)
    api_version = 'api_version_example' # str | Api version

    try:
        api_response = api_instance.services_list(api_version)
        print("The response of ServicesApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Api version | 

### Return type

[**ServicesListResult**](ServicesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved list of Azure services available for support. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

