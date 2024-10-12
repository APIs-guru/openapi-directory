# openapi_client.FulfillmentPolicyApi

All URIs are relative to *https://api.ebay.com/sell/account/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_fulfillment_policy**](FulfillmentPolicyApi.md#create_fulfillment_policy) | **POST** /fulfillment_policy/ | 
[**delete_fulfillment_policy**](FulfillmentPolicyApi.md#delete_fulfillment_policy) | **DELETE** /fulfillment_policy/{fulfillmentPolicyId} | 
[**get_fulfillment_policies**](FulfillmentPolicyApi.md#get_fulfillment_policies) | **GET** /fulfillment_policy | 
[**get_fulfillment_policy**](FulfillmentPolicyApi.md#get_fulfillment_policy) | **GET** /fulfillment_policy/{fulfillmentPolicyId} | 
[**get_fulfillment_policy_by_name**](FulfillmentPolicyApi.md#get_fulfillment_policy_by_name) | **GET** /fulfillment_policy/get_by_policy_name | 
[**update_fulfillment_policy**](FulfillmentPolicyApi.md#update_fulfillment_policy) | **PUT** /fulfillment_policy/{fulfillmentPolicyId} | 


# **create_fulfillment_policy**
> SetFulfillmentPolicyResponse create_fulfillment_policy(fulfillment_policy_request)



This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class=\"tablenote\"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href=\"/api-docs/sell/static/seller-accounts/business-policies.html\">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href=\"/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html\" target=\"_blank\">Using the eBay standard envelope (eSE) service</a>.</p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.fulfillment_policy_request import FulfillmentPolicyRequest
from openapi_client.models.set_fulfillment_policy_response import SetFulfillmentPolicyResponse
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
    api_instance = openapi_client.FulfillmentPolicyApi(api_client)
    fulfillment_policy_request = openapi_client.FulfillmentPolicyRequest() # FulfillmentPolicyRequest | Request to create a seller account fulfillment policy.

    try:
        api_response = api_instance.create_fulfillment_policy(fulfillment_policy_request)
        print("The response of FulfillmentPolicyApi->create_fulfillment_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentPolicyApi->create_fulfillment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillment_policy_request** | [**FulfillmentPolicyRequest**](FulfillmentPolicyRequest.md)| Request to create a seller account fulfillment policy. | 

### Return type

[**SetFulfillmentPolicyResponse**](SetFulfillmentPolicyResponse.md)

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

# **delete_fulfillment_policy**
> delete_fulfillment_policy(fulfillment_policy_id)



This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.

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
    api_instance = openapi_client.FulfillmentPolicyApi(api_client)
    fulfillment_policy_id = 'fulfillment_policy_id_example' # str | This path parameter specifies the ID of the fulfillment policy to delete.

    try:
        api_instance.delete_fulfillment_policy(fulfillment_policy_id)
    except Exception as e:
        print("Exception when calling FulfillmentPolicyApi->delete_fulfillment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillment_policy_id** | **str**| This path parameter specifies the ID of the fulfillment policy to delete. | 

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

# **get_fulfillment_policies**
> FulfillmentPolicyResponse get_fulfillment_policies(marketplace_id)



This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href=\"/api-docs/static/rest-request-components.html#HTTP\" target=\"_blank\">HTTP request headers</a>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.fulfillment_policy_response import FulfillmentPolicyResponse
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
    api_instance = openapi_client.FulfillmentPolicyApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum

    try:
        api_response = api_instance.get_fulfillment_policies(marketplace_id)
        print("The response of FulfillmentPolicyApi->get_fulfillment_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentPolicyApi->get_fulfillment_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum | 

### Return type

[**FulfillmentPolicyResponse**](FulfillmentPolicyResponse.md)

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

# **get_fulfillment_policy**
> FulfillmentPolicy get_fulfillment_policy(fulfillment_policy_id)



This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.fulfillment_policy import FulfillmentPolicy
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
    api_instance = openapi_client.FulfillmentPolicyApi(api_client)
    fulfillment_policy_id = 'fulfillment_policy_id_example' # str | This path parameter specifies the ID of the fulfillment policy you want to retrieve.

    try:
        api_response = api_instance.get_fulfillment_policy(fulfillment_policy_id)
        print("The response of FulfillmentPolicyApi->get_fulfillment_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentPolicyApi->get_fulfillment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillment_policy_id** | **str**| This path parameter specifies the ID of the fulfillment policy you want to retrieve. | 

### Return type

[**FulfillmentPolicy**](FulfillmentPolicy.md)

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

# **get_fulfillment_policy_by_name**
> FulfillmentPolicy get_fulfillment_policy_by_name(marketplace_id, name)



This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href=\"/api-docs/static/rest-request-components.html#HTTP\">HTTP request headers</a>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.fulfillment_policy import FulfillmentPolicy
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
    api_instance = openapi_client.FulfillmentPolicyApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
    name = 'name_example' # str | This query parameter specifies the seller-defined name of the fulfillment policy you want to retrieve.

    try:
        api_response = api_instance.get_fulfillment_policy_by_name(marketplace_id, name)
        print("The response of FulfillmentPolicyApi->get_fulfillment_policy_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentPolicyApi->get_fulfillment_policy_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum | 
 **name** | **str**| This query parameter specifies the seller-defined name of the fulfillment policy you want to retrieve. | 

### Return type

[**FulfillmentPolicy**](FulfillmentPolicy.md)

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

# **update_fulfillment_policy**
> SetFulfillmentPolicyResponse update_fulfillment_policy(fulfillment_policy_id, fulfillment_policy_request)



This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.fulfillment_policy_request import FulfillmentPolicyRequest
from openapi_client.models.set_fulfillment_policy_response import SetFulfillmentPolicyResponse
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
    api_instance = openapi_client.FulfillmentPolicyApi(api_client)
    fulfillment_policy_id = 'fulfillment_policy_id_example' # str | This path parameter specifies the ID of the fulfillment policy you want to update.
    fulfillment_policy_request = openapi_client.FulfillmentPolicyRequest() # FulfillmentPolicyRequest | Fulfillment policy request

    try:
        api_response = api_instance.update_fulfillment_policy(fulfillment_policy_id, fulfillment_policy_request)
        print("The response of FulfillmentPolicyApi->update_fulfillment_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentPolicyApi->update_fulfillment_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillment_policy_id** | **str**| This path parameter specifies the ID of the fulfillment policy you want to update. | 
 **fulfillment_policy_request** | [**FulfillmentPolicyRequest**](FulfillmentPolicyRequest.md)| Fulfillment policy request | 

### Return type

[**SetFulfillmentPolicyResponse**](SetFulfillmentPolicyResponse.md)

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

