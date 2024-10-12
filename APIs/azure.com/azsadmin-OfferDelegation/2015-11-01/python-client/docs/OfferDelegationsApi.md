# openapi_client.OfferDelegationsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offer_delegations_create_or_update**](OfferDelegationsApi.md#offer_delegations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/offers/{offer}/offerDelegations/{offerDelegationName} | 
[**offer_delegations_delete**](OfferDelegationsApi.md#offer_delegations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/offers/{offer}/offerDelegations/{offerDelegationName} | 
[**offer_delegations_get**](OfferDelegationsApi.md#offer_delegations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/offers/{offer}/offerDelegations/{offerDelegationName} | 
[**offer_delegations_list**](OfferDelegationsApi.md#offer_delegations_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/offers/{offer}/offerDelegations | 


# **offer_delegations_create_or_update**
> OfferDelegation offer_delegations_create_or_update(subscription_id, resource_group_name, offer, offer_delegation_name, api_version, new_offer_delegation)



Create or update the offer delegation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.offer_delegation import OfferDelegation
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
    api_instance = openapi_client.OfferDelegationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    offer = 'offer_example' # str | Name of an offer.
    offer_delegation_name = 'offer_delegation_name_example' # str | Name of a offer delegation.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')
    new_offer_delegation = openapi_client.OfferDelegation() # OfferDelegation | New offer delegation parameter.

    try:
        api_response = api_instance.offer_delegations_create_or_update(subscription_id, resource_group_name, offer, offer_delegation_name, api_version, new_offer_delegation)
        print("The response of OfferDelegationsApi->offer_delegations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferDelegationsApi->offer_delegations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **offer** | **str**| Name of an offer. | 
 **offer_delegation_name** | **str**| Name of a offer delegation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]
 **new_offer_delegation** | [**OfferDelegation**](OfferDelegation.md)| New offer delegation parameter. | 

### Return type

[**OfferDelegation**](OfferDelegation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offer_delegations_delete**
> offer_delegations_delete(subscription_id, resource_group_name, offer, offer_delegation_name, api_version)



Delete the specified offer delegation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.OfferDelegationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    offer = 'offer_example' # str | Name of an offer.
    offer_delegation_name = 'offer_delegation_name_example' # str | Name of a offer delegation.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_instance.offer_delegations_delete(subscription_id, resource_group_name, offer, offer_delegation_name, api_version)
    except Exception as e:
        print("Exception when calling OfferDelegationsApi->offer_delegations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **offer** | **str**| Name of an offer. | 
 **offer_delegation_name** | **str**| Name of a offer delegation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offer_delegations_get**
> OfferDelegation offer_delegations_get(subscription_id, resource_group_name, offer, offer_delegation_name, api_version)



Get the specified offer delegation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.offer_delegation import OfferDelegation
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
    api_instance = openapi_client.OfferDelegationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    offer = 'offer_example' # str | Name of an offer.
    offer_delegation_name = 'offer_delegation_name_example' # str | Name of a offer delegation.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.offer_delegations_get(subscription_id, resource_group_name, offer, offer_delegation_name, api_version)
        print("The response of OfferDelegationsApi->offer_delegations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferDelegationsApi->offer_delegations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **offer** | **str**| Name of an offer. | 
 **offer_delegation_name** | **str**| Name of a offer delegation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**OfferDelegation**](OfferDelegation.md)

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

# **offer_delegations_list**
> OfferDelegationList offer_delegations_list(subscription_id, resource_group_name, offer, api_version)



Get the list of offer delegations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.offer_delegation_list import OfferDelegationList
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
    api_instance = openapi_client.OfferDelegationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    offer = 'offer_example' # str | Name of an offer.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.offer_delegations_list(subscription_id, resource_group_name, offer, api_version)
        print("The response of OfferDelegationsApi->offer_delegations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferDelegationsApi->offer_delegations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **offer** | **str**| Name of an offer. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**OfferDelegationList**](OfferDelegationList.md)

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

