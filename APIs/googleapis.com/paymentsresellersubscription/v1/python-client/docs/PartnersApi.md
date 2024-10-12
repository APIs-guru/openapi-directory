# openapi_client.PartnersApi

All URIs are relative to *https://paymentsresellersubscription.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsresellersubscription_partners_products_list**](PartnersApi.md#paymentsresellersubscription_partners_products_list) | **GET** /v1/{parent}/products | 
[**paymentsresellersubscription_partners_promotions_find_eligible**](PartnersApi.md#paymentsresellersubscription_partners_promotions_find_eligible) | **POST** /v1/{parent}/promotions:findEligible | 
[**paymentsresellersubscription_partners_promotions_list**](PartnersApi.md#paymentsresellersubscription_partners_promotions_list) | **GET** /v1/{parent}/promotions | 
[**paymentsresellersubscription_partners_subscriptions_cancel**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_cancel) | **POST** /v1/{name}:cancel | 
[**paymentsresellersubscription_partners_subscriptions_create**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_create) | **POST** /v1/{parent}/subscriptions | 
[**paymentsresellersubscription_partners_subscriptions_entitle**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_entitle) | **POST** /v1/{name}:entitle | 
[**paymentsresellersubscription_partners_subscriptions_extend**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_extend) | **POST** /v1/{name}:extend | 
[**paymentsresellersubscription_partners_subscriptions_get**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_get) | **GET** /v1/{name} | 
[**paymentsresellersubscription_partners_subscriptions_provision**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_provision) | **POST** /v1/{parent}/subscriptions:provision | 
[**paymentsresellersubscription_partners_subscriptions_undo_cancel**](PartnersApi.md#paymentsresellersubscription_partners_subscriptions_undo_cancel) | **POST** /v1/{name}:undoCancel | 


# **paymentsresellersubscription_partners_products_list**
> GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse paymentsresellersubscription_partners_products_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



To retrieve the products that can be resold by the partner. It should be autenticated with a service account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_list_products_response import GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    parent = 'parent_example' # str | Required. The parent, the partner that can resell. Format: partners/{partner}
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` (optional)
    page_size = 56 # int | Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_products_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of PartnersApi->paymentsresellersubscription_partners_products_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_products_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, the partner that can resell. Format: partners/{partner} | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator &#x60;AND&#x60; - Comparison operator &#x60;&#x3D;&#x60; (no wildcards &#x60;*&#x60;) - Traversal operator &#x60;.&#x60; - Has operator &#x60;:&#x60; (no wildcards &#x60;*&#x60;) 2. Only the following fields are supported: - &#x60;regionCodes&#x60; - &#x60;youtubePayload.partnerEligibilityId&#x60; - &#x60;youtubePayload.postalCode&#x60; 3. Unless explicitly mentioned above, other features are not supported. Example: &#x60;regionCodes:US AND youtubePayload.postalCode&#x3D;94043 AND youtubePayload.partnerEligibilityId&#x3D;eligibility-id&#x60; | [optional] 
 **page_size** | **int**| Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListProducts&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListProducts&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse**](GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_promotions_find_eligible**
> GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse paymentsresellersubscription_partners_promotions_find_eligible(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request=google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request)



To find eligible promotions for the current user. The API requires user authorization via OAuth. The bare minimum oauth scope `openid` is sufficient, which will skip the consent screen.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request import GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response import GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    parent = 'parent_example' # str | Required. The parent, the partner that can resell. Format: partners/{partner}
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request = openapi_client.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest() # GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_promotions_find_eligible(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request=google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request)
        print("The response of PartnersApi->paymentsresellersubscription_partners_promotions_find_eligible:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_promotions_find_eligible: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, the partner that can resell. Format: partners/{partner} | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request** | [**GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest**](GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest.md)|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse**](GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_promotions_list**
> GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse paymentsresellersubscription_partners_promotions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_list_promotions_response import GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    parent = 'parent_example' # str | Required. The parent, the partner that can resell. Format: partners/{partner}
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` (optional)
    page_size = 56 # int | Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_promotions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of PartnersApi->paymentsresellersubscription_partners_promotions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_promotions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, the partner that can resell. Format: partners/{partner} | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator &#x60;AND&#x60; - Comparison operator &#x60;&#x3D;&#x60; (no wildcards &#x60;*&#x60;) - Traversal operator &#x60;.&#x60; - Has operator &#x60;:&#x60; (no wildcards &#x60;*&#x60;) 2. Only the following fields are supported: - &#x60;applicableProducts&#x60; - &#x60;regionCodes&#x60; - &#x60;youtubePayload.partnerEligibilityId&#x60; - &#x60;youtubePayload.postalCode&#x60; 3. Unless explicitly mentioned above, other features are not supported. Example: &#x60;applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode&#x3D;94043 AND youtubePayload.partnerEligibilityId&#x3D;eligibility-id&#x60; | [optional] 
 **page_size** | **int**| Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListPromotions&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListPromotions&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse**](GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_cancel**
> GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse paymentsresellersubscription_partners_subscriptions_cancel(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_cancel_subscription_request=google_cloud_payments_reseller_subscription_v1_cancel_subscription_request)



Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_cancel_subscription_request import GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_cancel_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    name = 'name_example' # str | Required. The name of the subscription resource to be cancelled. It will have the format of \"partners/{partner_id}/subscriptions/{subscription_id}\"
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_payments_reseller_subscription_v1_cancel_subscription_request = openapi_client.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest() # GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_cancel(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_cancel_subscription_request=google_cloud_payments_reseller_subscription_v1_cancel_subscription_request)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the subscription resource to be cancelled. It will have the format of \&quot;partners/{partner_id}/subscriptions/{subscription_id}\&quot; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_payments_reseller_subscription_v1_cancel_subscription_request** | [**GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest**](GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest.md)|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse**](GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_create**
> GoogleCloudPaymentsResellerSubscriptionV1Subscription paymentsresellersubscription_partners_subscriptions_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, subscription_id=subscription_id, google_cloud_payments_reseller_subscription_v1_subscription=google_cloud_payments_reseller_subscription_v1_subscription)



Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription import GoogleCloudPaymentsResellerSubscriptionV1Subscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    parent = 'parent_example' # str | Required. The parent resource name, which is the identifier of the partner. It will have the format of \"partners/{partner_id}\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    subscription_id = 'subscription_id_example' # str | Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. (optional)
    google_cloud_payments_reseller_subscription_v1_subscription = openapi_client.GoogleCloudPaymentsResellerSubscriptionV1Subscription() # GoogleCloudPaymentsResellerSubscriptionV1Subscription |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, subscription_id=subscription_id, google_cloud_payments_reseller_subscription_v1_subscription=google_cloud_payments_reseller_subscription_v1_subscription)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent resource name, which is the identifier of the partner. It will have the format of \&quot;partners/{partner_id}\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **subscription_id** | **str**| Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. | [optional] 
 **google_cloud_payments_reseller_subscription_v1_subscription** | [**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md)|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_entitle**
> GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse paymentsresellersubscription_partners_subscriptions_entitle(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_entitle_subscription_request=google_cloud_payments_reseller_subscription_v1_entitle_subscription_request)



Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_entitle_subscription_request import GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_entitle_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    name = 'name_example' # str | Required. The name of the subscription resource that is entitled to the current end user. It will have the format of \"partners/{partner_id}/subscriptions/{subscription_id}\"
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_payments_reseller_subscription_v1_entitle_subscription_request = openapi_client.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest() # GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_entitle(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_entitle_subscription_request=google_cloud_payments_reseller_subscription_v1_entitle_subscription_request)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_entitle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_entitle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the subscription resource that is entitled to the current end user. It will have the format of \&quot;partners/{partner_id}/subscriptions/{subscription_id}\&quot; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_payments_reseller_subscription_v1_entitle_subscription_request** | [**GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest**](GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest.md)|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse**](GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_extend**
> GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse paymentsresellersubscription_partners_subscriptions_extend(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_extend_subscription_request=google_cloud_payments_reseller_subscription_v1_extend_subscription_request)



[Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_extend_subscription_request import GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_extend_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    name = 'name_example' # str | Required. The name of the subscription resource to be extended. It will have the format of \"partners/{partner_id}/subscriptions/{subscription_id}\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_payments_reseller_subscription_v1_extend_subscription_request = openapi_client.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest() # GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_extend(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_payments_reseller_subscription_v1_extend_subscription_request=google_cloud_payments_reseller_subscription_v1_extend_subscription_request)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_extend:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_extend: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the subscription resource to be extended. It will have the format of \&quot;partners/{partner_id}/subscriptions/{subscription_id}\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_payments_reseller_subscription_v1_extend_subscription_request** | [**GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest**](GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest.md)|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse**](GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_get**
> GoogleCloudPaymentsResellerSubscriptionV1Subscription paymentsresellersubscription_partners_subscriptions_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription import GoogleCloudPaymentsResellerSubscriptionV1Subscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    name = 'name_example' # str | Required. The name of the subscription resource to retrieve. It will have the format of \"partners/{partner_id}/subscriptions/{subscription_id}\"
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the subscription resource to retrieve. It will have the format of \&quot;partners/{partner_id}/subscriptions/{subscription_id}\&quot; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_provision**
> GoogleCloudPaymentsResellerSubscriptionV1Subscription paymentsresellersubscription_partners_subscriptions_provision(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, subscription_id=subscription_id, google_cloud_payments_reseller_subscription_v1_subscription=google_cloud_payments_reseller_subscription_v1_subscription)



Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription import GoogleCloudPaymentsResellerSubscriptionV1Subscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    parent = 'parent_example' # str | Required. The parent resource name, which is the identifier of the partner. It will have the format of \"partners/{partner_id}\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    subscription_id = 'subscription_id_example' # str | Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. (optional)
    google_cloud_payments_reseller_subscription_v1_subscription = openapi_client.GoogleCloudPaymentsResellerSubscriptionV1Subscription() # GoogleCloudPaymentsResellerSubscriptionV1Subscription |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_provision(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, subscription_id=subscription_id, google_cloud_payments_reseller_subscription_v1_subscription=google_cloud_payments_reseller_subscription_v1_subscription)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_provision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_provision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent resource name, which is the identifier of the partner. It will have the format of \&quot;partners/{partner_id}\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **subscription_id** | **str**| Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. | [optional] 
 **google_cloud_payments_reseller_subscription_v1_subscription** | [**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md)|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsresellersubscription_partners_subscriptions_undo_cancel**
> GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse paymentsresellersubscription_partners_subscriptions_undo_cancel(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_undo_cancel_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://paymentsresellersubscription.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://paymentsresellersubscription.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    name = 'name_example' # str | Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of \"partners/{partner_id}/subscriptions/{subscription_id}\"
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    body = None # object |  (optional)

    try:
        api_response = api_instance.paymentsresellersubscription_partners_subscriptions_undo_cancel(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of PartnersApi->paymentsresellersubscription_partners_subscriptions_undo_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->paymentsresellersubscription_partners_subscriptions_undo_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of \&quot;partners/{partner_id}/subscriptions/{subscription_id}\&quot; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **body** | **object**|  | [optional] 

### Return type

[**GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse**](GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

