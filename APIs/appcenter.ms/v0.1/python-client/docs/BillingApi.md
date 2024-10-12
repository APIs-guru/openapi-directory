# openapi_client.BillingApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_aggregated_information_get_all**](BillingApi.md#billing_aggregated_information_get_all) | **GET** /v0.1/billing/allAccountsAggregated | 
[**billing_aggregated_information_get_by_app**](BillingApi.md#billing_aggregated_information_get_by_app) | **GET** /v0.1/apps/{owner_name}/{app_name}/billing/aggregated | 
[**billing_aggregated_information_get_for_org**](BillingApi.md#billing_aggregated_information_get_for_org) | **GET** /v0.1/orgs/{orgName}/billing/aggregated | 


# **billing_aggregated_information_get_all**
> BillingAggregatedInformationGetAll200Response billing_aggregated_information_get_all(service=service, period=period, show_original_plans=show_original_plans)



Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.billing_aggregated_information_get_all200_response import BillingAggregatedInformationGetAll200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BillingApi(api_client)
    service = 'service_example' # str | Type of service that should be included in the Billing Information (optional)
    period = 'period_example' # str | Type of period that should be included in the Billing Information (optional)
    show_original_plans = True # bool | Controls whether the API should show the original plan when Azure Subscription is not enabled (optional)

    try:
        api_response = api_instance.billing_aggregated_information_get_all(service=service, period=period, show_original_plans=show_original_plans)
        print("The response of BillingApi->billing_aggregated_information_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->billing_aggregated_information_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Type of service that should be included in the Billing Information | [optional] 
 **period** | **str**| Type of period that should be included in the Billing Information | [optional] 
 **show_original_plans** | **bool**| Controls whether the API should show the original plan when Azure Subscription is not enabled | [optional] 

### Return type

[**BillingAggregatedInformationGetAll200Response**](BillingAggregatedInformationGetAll200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregated Billing Information for the requesting user and the organizations in which the user is an admin. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_aggregated_information_get_by_app**
> BillingAggregatedInformationGetByApp200Response billing_aggregated_information_get_by_app(owner_name, app_name, service=service, period=period, show_original_plans=show_original_plans)



Aggregated Billing Information for owner of a given app.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.billing_aggregated_information_get_by_app200_response import BillingAggregatedInformationGetByApp200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BillingApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    service = 'service_example' # str | Type of service that should be included in the Billing Information (optional)
    period = 'period_example' # str | Type of period that should be included in the Billing Information (optional)
    show_original_plans = True # bool | Controls whether the API should show the original plan when Azure Subscription is not enabled (optional)

    try:
        api_response = api_instance.billing_aggregated_information_get_by_app(owner_name, app_name, service=service, period=period, show_original_plans=show_original_plans)
        print("The response of BillingApi->billing_aggregated_information_get_by_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->billing_aggregated_information_get_by_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **service** | **str**| Type of service that should be included in the Billing Information | [optional] 
 **period** | **str**| Type of period that should be included in the Billing Information | [optional] 
 **show_original_plans** | **bool**| Controls whether the API should show the original plan when Azure Subscription is not enabled | [optional] 

### Return type

[**BillingAggregatedInformationGetByApp200Response**](BillingAggregatedInformationGetByApp200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregated Billing Information for owner of a given app |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_aggregated_information_get_for_org**
> BillingAggregatedInformationGetByApp200Response billing_aggregated_information_get_for_org(org_name, service=service, period=period, show_original_plans=show_original_plans)



Aggregated Billing Information for a given Organization.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.billing_aggregated_information_get_by_app200_response import BillingAggregatedInformationGetByApp200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BillingApi(api_client)
    org_name = 'org_name_example' # str | The name of the Organization
    service = 'service_example' # str | Type of service that should be included in the Billing Information (optional)
    period = 'period_example' # str | Type of period that should be included in the Billing Information (optional)
    show_original_plans = True # bool | Controls whether the API should show the original plan when Azure Subscription is not enabled (optional)

    try:
        api_response = api_instance.billing_aggregated_information_get_for_org(org_name, service=service, period=period, show_original_plans=show_original_plans)
        print("The response of BillingApi->billing_aggregated_information_get_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->billing_aggregated_information_get_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The name of the Organization | 
 **service** | **str**| Type of service that should be included in the Billing Information | [optional] 
 **period** | **str**| Type of period that should be included in the Billing Information | [optional] 
 **show_original_plans** | **bool**| Controls whether the API should show the original plan when Azure Subscription is not enabled | [optional] 

### Return type

[**BillingAggregatedInformationGetByApp200Response**](BillingAggregatedInformationGetByApp200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregated Billing Information for a given Organization |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

