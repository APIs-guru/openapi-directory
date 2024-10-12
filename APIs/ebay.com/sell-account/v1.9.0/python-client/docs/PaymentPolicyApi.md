# openapi_client.PaymentPolicyApi

All URIs are relative to *https://api.ebay.com/sell/account/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment_policy**](PaymentPolicyApi.md#create_payment_policy) | **POST** /payment_policy | 
[**delete_payment_policy**](PaymentPolicyApi.md#delete_payment_policy) | **DELETE** /payment_policy/{payment_policy_id} | 
[**get_payment_policies**](PaymentPolicyApi.md#get_payment_policies) | **GET** /payment_policy | 
[**get_payment_policy**](PaymentPolicyApi.md#get_payment_policy) | **GET** /payment_policy/{payment_policy_id} | 
[**get_payment_policy_by_name**](PaymentPolicyApi.md#get_payment_policy_by_name) | **GET** /payment_policy/get_by_policy_name | 
[**update_payment_policy**](PaymentPolicyApi.md#update_payment_policy) | **PUT** /payment_policy/{payment_policy_id} | 


# **create_payment_policy**
> SetPaymentPolicyResponse create_payment_policy(payment_policy_request)



This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class=\"tablenote\"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href=\"/api-docs/sell/static/seller-accounts/business-policies.html\">eBay business policies</a>.</p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.payment_policy_request import PaymentPolicyRequest
from openapi_client.models.set_payment_policy_response import SetPaymentPolicyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentPolicyApi(api_client)
    payment_policy_request = openapi_client.PaymentPolicyRequest() # PaymentPolicyRequest | Payment policy request

    try:
        api_response = api_instance.create_payment_policy(payment_policy_request)
        print("The response of PaymentPolicyApi->create_payment_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentPolicyApi->create_payment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_policy_request** | [**PaymentPolicyRequest**](PaymentPolicyRequest.md)| Payment policy request | 

### Return type

[**SetPaymentPolicyResponse**](SetPaymentPolicyResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location -  <br>  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payment_policy**
> delete_payment_policy(payment_policy_id)



This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentPolicyApi(api_client)
    payment_policy_id = 'payment_policy_id_example' # str | This path parameter specifies the ID of the payment policy you want to delete.

    try:
        api_instance.delete_payment_policy(payment_policy_id)
    except Exception as e:
        print("Exception when calling PaymentPolicyApi->delete_payment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_policy_id** | **str**| This path parameter specifies the ID of the payment policy you want to delete. | 

### Return type

void (empty response body)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payment_policies**
> PaymentPolicyResponse get_payment_policies(marketplace_id)



This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href=\"/api-docs/static/rest-request-components.html#HTTP\" target=\"_blank\">HTTP request headers</a>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.payment_policy_response import PaymentPolicyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentPolicyApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum

    try:
        api_response = api_instance.get_payment_policies(marketplace_id)
        print("The response of PaymentPolicyApi->get_payment_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentPolicyApi->get_payment_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum | 

### Return type

[**PaymentPolicyResponse**](PaymentPolicyResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payment_policy**
> PaymentPolicy get_payment_policy(payment_policy_id)



This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.payment_policy import PaymentPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentPolicyApi(api_client)
    payment_policy_id = 'payment_policy_id_example' # str | This path parameter specifies the ID of the payment policy you want to retrieve.

    try:
        api_response = api_instance.get_payment_policy(payment_policy_id)
        print("The response of PaymentPolicyApi->get_payment_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentPolicyApi->get_payment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_policy_id** | **str**| This path parameter specifies the ID of the payment policy you want to retrieve. | 

### Return type

[**PaymentPolicy**](PaymentPolicy.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payment_policy_by_name**
> PaymentPolicy get_payment_policy_by_name(marketplace_id, name)



This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href=\"/api-docs/static/rest-request-components.html#HTTP\">HTTP request headers</a>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.payment_policy import PaymentPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentPolicyApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
    name = 'name_example' # str | This query parameter specifies the seller-defined name of the payment policy you want to retrieve.

    try:
        api_response = api_instance.get_payment_policy_by_name(marketplace_id, name)
        print("The response of PaymentPolicyApi->get_payment_policy_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentPolicyApi->get_payment_policy_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum | 
 **name** | **str**| This query parameter specifies the seller-defined name of the payment policy you want to retrieve. | 

### Return type

[**PaymentPolicy**](PaymentPolicy.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payment_policy**
> SetPaymentPolicyResponse update_payment_policy(payment_policy_id, payment_policy_request)



This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.payment_policy_request import PaymentPolicyRequest
from openapi_client.models.set_payment_policy_response import SetPaymentPolicyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentPolicyApi(api_client)
    payment_policy_id = 'payment_policy_id_example' # str | This path parameter specifies the ID of the payment policy you want to update.
    payment_policy_request = openapi_client.PaymentPolicyRequest() # PaymentPolicyRequest | Payment policy request

    try:
        api_response = api_instance.update_payment_policy(payment_policy_id, payment_policy_request)
        print("The response of PaymentPolicyApi->update_payment_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentPolicyApi->update_payment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_policy_id** | **str**| This path parameter specifies the ID of the payment policy you want to update. | 
 **payment_policy_request** | [**PaymentPolicyRequest**](PaymentPolicyRequest.md)| Payment policy request | 

### Return type

[**SetPaymentPolicyResponse**](SetPaymentPolicyResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

