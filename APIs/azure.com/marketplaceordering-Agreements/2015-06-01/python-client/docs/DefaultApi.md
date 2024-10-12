# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplace_agreements_cancel**](DefaultApi.md#marketplace_agreements_cancel) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}/cancel | 
[**marketplace_agreements_create**](DefaultApi.md#marketplace_agreements_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current | 
[**marketplace_agreements_get**](DefaultApi.md#marketplace_agreements_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current | 
[**marketplace_agreements_get_agreement**](DefaultApi.md#marketplace_agreements_get_agreement) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId} | 
[**marketplace_agreements_list**](DefaultApi.md#marketplace_agreements_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements | 
[**marketplace_agreements_sign**](DefaultApi.md#marketplace_agreements_sign) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}/sign | 


# **marketplace_agreements_cancel**
> AgreementTerms marketplace_agreements_cancel(api_version, subscription_id, publisher_id, offer_id, plan_id)



Cancel marketplace terms.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_terms import AgreementTerms
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    publisher_id = 'publisher_id_example' # str | Publisher identifier string of image being deployed.
    offer_id = 'offer_id_example' # str | Offer identifier string of image being deployed.
    plan_id = 'plan_id_example' # str | Plan identifier string of image being deployed.

    try:
        api_response = api_instance.marketplace_agreements_cancel(api_version, subscription_id, publisher_id, offer_id, plan_id)
        print("The response of DefaultApi->marketplace_agreements_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->marketplace_agreements_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **publisher_id** | **str**| Publisher identifier string of image being deployed. | 
 **offer_id** | **str**| Offer identifier string of image being deployed. | 
 **plan_id** | **str**| Plan identifier string of image being deployed. | 

### Return type

[**AgreementTerms**](AgreementTerms.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request was successfully processed and the terms were rejected. |  -  |
**0** | Microsoft.MarketplaceOrdering error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplace_agreements_create**
> AgreementTerms marketplace_agreements_create(api_version, offer_type, subscription_id, publisher_id, offer_id, plan_id, parameters)



Save marketplace terms.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_terms import AgreementTerms
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    offer_type = 'offer_type_example' # str | Offer Type, currently only virtualmachine type is supported.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    publisher_id = 'publisher_id_example' # str | Publisher identifier string of image being deployed.
    offer_id = 'offer_id_example' # str | Offer identifier string of image being deployed.
    plan_id = 'plan_id_example' # str | Plan identifier string of image being deployed.
    parameters = openapi_client.AgreementTerms() # AgreementTerms | Parameters supplied to the Create Marketplace Terms operation.

    try:
        api_response = api_instance.marketplace_agreements_create(api_version, offer_type, subscription_id, publisher_id, offer_id, plan_id, parameters)
        print("The response of DefaultApi->marketplace_agreements_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->marketplace_agreements_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **offer_type** | **str**| Offer Type, currently only virtualmachine type is supported. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **publisher_id** | **str**| Publisher identifier string of image being deployed. | 
 **offer_id** | **str**| Offer identifier string of image being deployed. | 
 **plan_id** | **str**| Plan identifier string of image being deployed. | 
 **parameters** | [**AgreementTerms**](AgreementTerms.md)| Parameters supplied to the Create Marketplace Terms operation. | 

### Return type

[**AgreementTerms**](AgreementTerms.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request was successfully processed and the terms were accepted or acceptance revoked as per the request body. |  -  |
**0** | Microsoft.MarketplaceOrdering error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplace_agreements_get**
> AgreementTerms marketplace_agreements_get(api_version, subscription_id, offer_type, publisher_id, offer_id, plan_id)



Get marketplace terms.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_terms import AgreementTerms
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    offer_type = 'offer_type_example' # str | Offer Type, currently only virtualmachine type is supported.
    publisher_id = 'publisher_id_example' # str | Publisher identifier string of image being deployed.
    offer_id = 'offer_id_example' # str | Offer identifier string of image being deployed.
    plan_id = 'plan_id_example' # str | Plan identifier string of image being deployed.

    try:
        api_response = api_instance.marketplace_agreements_get(api_version, subscription_id, offer_type, publisher_id, offer_id, plan_id)
        print("The response of DefaultApi->marketplace_agreements_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->marketplace_agreements_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **offer_type** | **str**| Offer Type, currently only virtualmachine type is supported. | 
 **publisher_id** | **str**| Publisher identifier string of image being deployed. | 
 **offer_id** | **str**| Offer identifier string of image being deployed. | 
 **plan_id** | **str**| Plan identifier string of image being deployed. | 

### Return type

[**AgreementTerms**](AgreementTerms.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terms returned successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplace_agreements_get_agreement**
> AgreementTerms marketplace_agreements_get_agreement(api_version, subscription_id, publisher_id, offer_id, plan_id)



Get marketplace agreement.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_terms import AgreementTerms
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    publisher_id = 'publisher_id_example' # str | Publisher identifier string of image being deployed.
    offer_id = 'offer_id_example' # str | Offer identifier string of image being deployed.
    plan_id = 'plan_id_example' # str | Plan identifier string of image being deployed.

    try:
        api_response = api_instance.marketplace_agreements_get_agreement(api_version, subscription_id, publisher_id, offer_id, plan_id)
        print("The response of DefaultApi->marketplace_agreements_get_agreement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->marketplace_agreements_get_agreement: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **publisher_id** | **str**| Publisher identifier string of image being deployed. | 
 **offer_id** | **str**| Offer identifier string of image being deployed. | 
 **plan_id** | **str**| Plan identifier string of image being deployed. | 

### Return type

[**AgreementTerms**](AgreementTerms.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terms returned successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplace_agreements_list**
> List[AgreementTerms] marketplace_agreements_list(api_version, subscription_id)



List marketplace agreements in the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_terms import AgreementTerms
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.

    try:
        api_response = api_instance.marketplace_agreements_list(api_version, subscription_id)
        print("The response of DefaultApi->marketplace_agreements_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->marketplace_agreements_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 

### Return type

[**List[AgreementTerms]**](AgreementTerms.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terms returned successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplace_agreements_sign**
> AgreementTerms marketplace_agreements_sign(api_version, subscription_id, publisher_id, offer_id, plan_id)



Sign marketplace terms.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_terms import AgreementTerms
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    publisher_id = 'publisher_id_example' # str | Publisher identifier string of image being deployed.
    offer_id = 'offer_id_example' # str | Offer identifier string of image being deployed.
    plan_id = 'plan_id_example' # str | Plan identifier string of image being deployed.

    try:
        api_response = api_instance.marketplace_agreements_sign(api_version, subscription_id, publisher_id, offer_id, plan_id)
        print("The response of DefaultApi->marketplace_agreements_sign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->marketplace_agreements_sign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **publisher_id** | **str**| Publisher identifier string of image being deployed. | 
 **offer_id** | **str**| Offer identifier string of image being deployed. | 
 **plan_id** | **str**| Plan identifier string of image being deployed. | 

### Return type

[**AgreementTerms**](AgreementTerms.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request was successfully processed and the terms were accepted. |  -  |
**0** | Microsoft.MarketplaceOrdering error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

