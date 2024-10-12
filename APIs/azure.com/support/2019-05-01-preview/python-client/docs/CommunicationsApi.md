# openapi_client.CommunicationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**communications_check_name_availability**](CommunicationsApi.md#communications_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/checkNameAvailability | 
[**communications_create**](CommunicationsApi.md#communications_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName} | 
[**communications_get**](CommunicationsApi.md#communications_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName} | 
[**communications_list**](CommunicationsApi.md#communications_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications | 


# **communications_check_name_availability**
> CheckNameAvailabilityOutput communications_check_name_availability(support_ticket_name, subscription_id, api_version, check_name_availability_input)



Check the availability of a resource name. This API should to be used to check the uniqueness of the name for adding a new communication to the support ticket.

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
    api_instance = openapi_client.CommunicationsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    check_name_availability_input = openapi_client.CheckNameAvailabilityInput() # CheckNameAvailabilityInput | Input to check

    try:
        api_response = api_instance.communications_check_name_availability(support_ticket_name, subscription_id, api_version, check_name_availability_input)
        print("The response of CommunicationsApi->communications_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommunicationsApi->communications_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **check_name_availability_input** | [**CheckNameAvailabilityInput**](CheckNameAvailabilityInput.md)| Input to check | 

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

# **communications_create**
> CommunicationDetails communications_create(support_ticket_name, communication_name, subscription_id, api_version, create_communication_parameters)



Adds a new customer communication to an Azure support ticket. Adding attachments are not currently supported via the API. <br/>To add a file to a support ticket, visit the <a target='_blank' href='https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest'>Manage support ticket</a> page in the Azure portal, select the support ticket, and use the file upload control to add a new file.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.communication_details import CommunicationDetails
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
    api_instance = openapi_client.CommunicationsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name
    communication_name = 'communication_name_example' # str | Communication name
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    create_communication_parameters = openapi_client.CommunicationDetails() # CommunicationDetails | Communication object

    try:
        api_response = api_instance.communications_create(support_ticket_name, communication_name, subscription_id, api_version, create_communication_parameters)
        print("The response of CommunicationsApi->communications_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommunicationsApi->communications_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name | 
 **communication_name** | **str**| Communication name | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **create_communication_parameters** | [**CommunicationDetails**](CommunicationDetails.md)| Communication object | 

### Return type

[**CommunicationDetails**](CommunicationDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Communication created successfully. |  -  |
**202** | Accepted, Communication will be created asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **communications_get**
> CommunicationDetails communications_get(support_ticket_name, communication_name, subscription_id, api_version)



Returns details of a specific communication in a support ticket.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.communication_details import CommunicationDetails
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
    api_instance = openapi_client.CommunicationsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name
    communication_name = 'communication_name_example' # str | Communication name
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version

    try:
        api_response = api_instance.communications_get(support_ticket_name, communication_name, subscription_id, api_version)
        print("The response of CommunicationsApi->communications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommunicationsApi->communications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name | 
 **communication_name** | **str**| Communication name | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 

### Return type

[**CommunicationDetails**](CommunicationDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved communication details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **communications_list**
> CommunicationsListResult communications_list(support_ticket_name, subscription_id, api_version, top=top, filter=filter)



Lists all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by <i>CreatedDate</i>�or <i>CommunicationType</i> using the $filter parameter. The only type of communication supported today is <i>Web</i>. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of Communication results. <br/><br/> Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.communications_list_result import CommunicationsListResult
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
    api_instance = openapi_client.CommunicationsApi(api_client)
    support_ticket_name = 'support_ticket_name_example' # str | Support ticket name
    subscription_id = 'subscription_id_example' # str | Azure subscription id
    api_version = 'api_version_example' # str | Api version
    top = 56 # int | The number of values to return in the collection. Default is 10 and max is 10. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. You can filter by communicationType and createdDate properties. CommunicationType supports Equals ('eq') operator and createdDate supports Greater Than ('gt') and Greater Than or Equals ('ge') operators. You may combine the CommunicationType and CreatedDate filters by Logical And ('and') operator. (optional)

    try:
        api_response = api_instance.communications_list(support_ticket_name, subscription_id, api_version, top=top, filter=filter)
        print("The response of CommunicationsApi->communications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommunicationsApi->communications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **support_ticket_name** | **str**| Support ticket name | 
 **subscription_id** | **str**| Azure subscription id | 
 **api_version** | **str**| Api version | 
 **top** | **int**| The number of values to return in the collection. Default is 10 and max is 10. | [optional] 
 **filter** | **str**| The filter to apply on the operation. You can filter by communicationType and createdDate properties. CommunicationType supports Equals (&#39;eq&#39;) operator and createdDate supports Greater Than (&#39;gt&#39;) and Greater Than or Equals (&#39;ge&#39;) operators. You may combine the CommunicationType and CreatedDate filters by Logical And (&#39;and&#39;) operator. | [optional] 

### Return type

[**CommunicationsListResult**](CommunicationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved communications for a support ticket. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

