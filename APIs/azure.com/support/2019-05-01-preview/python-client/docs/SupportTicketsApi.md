# openapi_client.SupportTicketsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**support_tickets_check_name_availability**](SupportTicketsApi.md#support_tickets_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Support/checkNameAvailability | 
[**support_tickets_create**](SupportTicketsApi.md#support_tickets_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName} | 
[**support_tickets_get**](SupportTicketsApi.md#support_tickets_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName} | 
[**support_tickets_list**](SupportTicketsApi.md#support_tickets_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets | 
[**support_tickets_update**](SupportTicketsApi.md#support_tickets_update) | **PATCH** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName} | 


# **support_tickets_check_name_availability**
> CheckNameAvailabilityOutput support_tickets_check_name_availability(subscription_id, api_version, check_name_availability_input)



Check the availability of a resource name. This API should to be used to check the uniqueness of the name for support ticket creation for the selected subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_input import CheckNameAvailabilityInput
from openapi_client.models.check_name_availability_output import CheckNameAvailabilityOutput
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
    api_instance = openapi_client.SupportTicketsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    check_name_availability_input = openapi_client.CheckNameAvailabilityInput() # CheckNameAvailabilityInput | Input to check.

    try:
        api_response = api_instance.support_tickets_check_name_availability(subscription_id, api_version, check_name_availability_input)
        print("The response of SupportTicketsApi->support_tickets_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupportTicketsApi->support_tickets_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **check_name_availability_input** | [**CheckNameAvailabilityInput**](CheckNameAvailabilityInput.md)| Input to check. | 

### Return type

[**CheckNameAvailabilityOutput**](CheckNameAvailabilityOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **support_tickets_create**
> SupportTicketDetails support_tickets_create(support_ticket_name, subscription_id, api_version, create_support_ticket_parameters)



Creates a new support ticket for Quota increase, Technical, Billing, and Subscription Management issues for the specified subscription. <br/><br/>A paid technical support plan is required to create a support ticket using this API. <a href='https://aka.ms/supportticketAPI'>Learn more</a> <br/><br/> Use the Services API to map the right Service Id to the issue type. For example: For billing tickets set *serviceId* to *'/providers/Microsoft.Support/services/517f2da6-78fd-0498-4e22-ad26996b1dfc'*. <br/> For Technical issues, the Service id will map to the Azure service you want to raise a support ticket for. <br/><br/>Always call the Services and ProblemClassifications API to get the most recent set of services and problem categories required for support ticket creation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.support_ticket_details import SupportTicketDetails
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
    api_instance = openapi_client.SupportTicketsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name.
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    create_support_ticket_parameters = openapi_client.SupportTicketDetails() # SupportTicketDetails | Support ticket request payload.

    try:
        api_response = api_instance.support_tickets_create(support_ticket_name, subscription_id, api_version, create_support_ticket_parameters)
        print("The response of SupportTicketsApi->support_tickets_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupportTicketsApi->support_tickets_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name. | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **create_support_ticket_parameters** | [**SupportTicketDetails**](SupportTicketDetails.md)| Support ticket request payload. | 

### Return type

[**SupportTicketDetails**](SupportTicketDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - SupportTicket created successfully |  -  |
**202** | Accepted, SupportTicket will be created asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **support_tickets_get**
> SupportTicketDetails support_tickets_get(support_ticket_name, subscription_id, api_version)



Gets details for a specific support ticket in an Azure subscription. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.support_ticket_details import SupportTicketDetails
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
    api_instance = openapi_client.SupportTicketsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version

    try:
        api_response = api_instance.support_tickets_get(support_ticket_name, subscription_id, api_version)
        print("The response of SupportTicketsApi->support_tickets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupportTicketsApi->support_tickets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 

### Return type

[**SupportTicketDetails**](SupportTicketDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved support ticket. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **support_tickets_list**
> SupportTicketsListResult support_tickets_list(subscription_id, api_version, top=top, filter=filter)



Lists all the support tickets for an Azure subscription. <br/><br/>You can also filter the support tickets by <i>Status</i> or <i>CreatedDate</i> using the $filter parameter. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.support_tickets_list_result import SupportTicketsListResult
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
    api_instance = openapi_client.SupportTicketsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    top = 56 # int | The number of values to return in the collection. Default is 25 and max is 100. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. We support 'odata v4.0' filter semantics. <a target='_blank' href='https://docs.microsoft.com/odata/concepts/queryoptions-overview'>Learn more</a> <br/><i>Status</i> filter can only be used with 'eq' operator. For <i>CreatedDate</i> filter, the supported operators are 'gt' and 'ge'. When using both filters, combine them using the logical 'AND'. (optional)

    try:
        api_response = api_instance.support_tickets_list(subscription_id, api_version, top=top, filter=filter)
        print("The response of SupportTicketsApi->support_tickets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupportTicketsApi->support_tickets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **top** | **int**| The number of values to return in the collection. Default is 25 and max is 100. | [optional] 
 **filter** | **str**| The filter to apply on the operation. We support &#39;odata v4.0&#39; filter semantics. &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://docs.microsoft.com/odata/concepts/queryoptions-overview&#39;&gt;Learn more&lt;/a&gt; &lt;br/&gt;&lt;i&gt;Status&lt;/i&gt; filter can only be used with &#39;eq&#39; operator. For &lt;i&gt;CreatedDate&lt;/i&gt; filter, the supported operators are &#39;gt&#39; and &#39;ge&#39;. When using both filters, combine them using the logical &#39;AND&#39;. | [optional] 

### Return type

[**SupportTicketsListResult**](SupportTicketsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved support tickets. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **support_tickets_update**
> SupportTicketDetails support_tickets_update(support_ticket_name, subscription_id, api_version, update_support_ticket)



This API allows you to update the severity level or your contact information in the support ticket. <br/><br/> Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.support_ticket_details import SupportTicketDetails
from openapi_client.models.update_support_ticket import UpdateSupportTicket
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
    api_instance = openapi_client.SupportTicketsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    update_support_ticket = openapi_client.UpdateSupportTicket() # UpdateSupportTicket | UpdateSupportTicket object

    try:
        api_response = api_instance.support_tickets_update(support_ticket_name, subscription_id, api_version, update_support_ticket)
        print("The response of SupportTicketsApi->support_tickets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupportTicketsApi->support_tickets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **update_support_ticket** | [**UpdateSupportTicket**](UpdateSupportTicket.md)| UpdateSupportTicket object | 

### Return type

[**SupportTicketDetails**](SupportTicketDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated support ticket. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

