# openapi_client.FirstAndThirdPartyAudiencesApi

All URIs are relative to *https://displayvideo.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**displayvideo_first_and_third_party_audiences_create**](FirstAndThirdPartyAudiencesApi.md#displayvideo_first_and_third_party_audiences_create) | **POST** /v1/firstAndThirdPartyAudiences | 
[**displayvideo_first_and_third_party_audiences_edit_customer_match_members**](FirstAndThirdPartyAudiencesApi.md#displayvideo_first_and_third_party_audiences_edit_customer_match_members) | **POST** /v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers | 
[**displayvideo_first_and_third_party_audiences_get**](FirstAndThirdPartyAudiencesApi.md#displayvideo_first_and_third_party_audiences_get) | **GET** /v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId} | 
[**displayvideo_first_and_third_party_audiences_list**](FirstAndThirdPartyAudiencesApi.md#displayvideo_first_and_third_party_audiences_list) | **GET** /v1/firstAndThirdPartyAudiences | 
[**displayvideo_first_and_third_party_audiences_patch**](FirstAndThirdPartyAudiencesApi.md#displayvideo_first_and_third_party_audiences_patch) | **PATCH** /v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId} | 


# **displayvideo_first_and_third_party_audiences_create**
> FirstAndThirdPartyAudience displayvideo_first_and_third_party_audiences_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, first_and_third_party_audience=first_and_third_party_audience)



Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.first_and_third_party_audience import FirstAndThirdPartyAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.FirstAndThirdPartyAudiencesApi(api_client)
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
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser under whom the FirstAndThirdPartyAudience will be created. (optional)
    first_and_third_party_audience = openapi_client.FirstAndThirdPartyAudience() # FirstAndThirdPartyAudience |  (optional)

    try:
        api_response = api_instance.displayvideo_first_and_third_party_audiences_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, first_and_third_party_audience=first_and_third_party_audience)
        print("The response of FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **advertiser_id** | **str**| Required. The ID of the advertiser under whom the FirstAndThirdPartyAudience will be created. | [optional] 
 **first_and_third_party_audience** | [**FirstAndThirdPartyAudience**](FirstAndThirdPartyAudience.md)|  | [optional] 

### Return type

[**FirstAndThirdPartyAudience**](FirstAndThirdPartyAudience.md)

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

# **displayvideo_first_and_third_party_audiences_edit_customer_match_members**
> EditCustomerMatchMembersResponse displayvideo_first_and_third_party_audiences_edit_customer_match_members(first_and_third_party_audience_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, edit_customer_match_members_request=edit_customer_match_members_request)



Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.edit_customer_match_members_request import EditCustomerMatchMembersRequest
from openapi_client.models.edit_customer_match_members_response import EditCustomerMatchMembersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.FirstAndThirdPartyAudiencesApi(api_client)
    first_and_third_party_audience_id = 'first_and_third_party_audience_id_example' # str | Required. The ID of the Customer Match FirstAndThirdPartyAudience whose members will be edited.
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
    edit_customer_match_members_request = openapi_client.EditCustomerMatchMembersRequest() # EditCustomerMatchMembersRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_first_and_third_party_audiences_edit_customer_match_members(first_and_third_party_audience_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, edit_customer_match_members_request=edit_customer_match_members_request)
        print("The response of FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_edit_customer_match_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_edit_customer_match_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_and_third_party_audience_id** | **str**| Required. The ID of the Customer Match FirstAndThirdPartyAudience whose members will be edited. | 
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
 **edit_customer_match_members_request** | [**EditCustomerMatchMembersRequest**](EditCustomerMatchMembersRequest.md)|  | [optional] 

### Return type

[**EditCustomerMatchMembersResponse**](EditCustomerMatchMembersResponse.md)

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

# **displayvideo_first_and_third_party_audiences_get**
> FirstAndThirdPartyAudience displayvideo_first_and_third_party_audiences_get(first_and_third_party_audience_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Gets a first and third party audience.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.first_and_third_party_audience import FirstAndThirdPartyAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.FirstAndThirdPartyAudiencesApi(api_client)
    first_and_third_party_audience_id = 'first_and_third_party_audience_id_example' # str | Required. The ID of the first and third party audience to fetch.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that has access to the fetched first and third party audience. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that has access to the fetched first and third party audience. (optional)

    try:
        api_response = api_instance.displayvideo_first_and_third_party_audiences_get(first_and_third_party_audience_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_and_third_party_audience_id** | **str**| Required. The ID of the first and third party audience to fetch. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that has access to the fetched first and third party audience. | [optional] 
 **partner_id** | **str**| The ID of the partner that has access to the fetched first and third party audience. | [optional] 

### Return type

[**FirstAndThirdPartyAudience**](FirstAndThirdPartyAudience.md)

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

# **displayvideo_first_and_third_party_audiences_list**
> ListFirstAndThirdPartyAudiencesResponse displayvideo_first_and_third_party_audiences_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists first and third party audiences. The order is defined by the order_by parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_first_and_third_party_audiences_response import ListFirstAndThirdPartyAudiencesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.FirstAndThirdPartyAudiencesApi(api_client)
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that has access to the fetched first and third party audiences. (optional)
    filter = 'filter_example' # str | Allows filtering by first and third party audience fields. Supported syntax: * Filter expressions for first and third party audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All first and third party audiences for which the display name contains \"Google\": `displayName:\"Google\"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `firstAndThirdPartyAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFirstAndThirdPartyAudiences` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that has access to the fetched first and third party audiences. (optional)

    try:
        api_response = api_instance.displayvideo_first_and_third_party_audiences_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **advertiser_id** | **str**| The ID of the advertiser that has access to the fetched first and third party audiences. | [optional] 
 **filter** | **str**| Allows filtering by first and third party audience fields. Supported syntax: * Filter expressions for first and third party audiences can only contain at most one restriction. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;HAS (:)&#x60; operator. Supported fields: * &#x60;displayName&#x60; Examples: * All first and third party audiences for which the display name contains \&quot;Google\&quot;: &#x60;displayName:\&quot;Google\&quot;&#x60;. The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;firstAndThirdPartyAudienceId&#x60; (default) * &#x60;displayName&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListFirstAndThirdPartyAudiences&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the partner that has access to the fetched first and third party audiences. | [optional] 

### Return type

[**ListFirstAndThirdPartyAudiencesResponse**](ListFirstAndThirdPartyAudiencesResponse.md)

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

# **displayvideo_first_and_third_party_audiences_patch**
> FirstAndThirdPartyAudience displayvideo_first_and_third_party_audiences_patch(first_and_third_party_audience_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, update_mask=update_mask, first_and_third_party_audience=first_and_third_party_audience)



Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.first_and_third_party_audience import FirstAndThirdPartyAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.FirstAndThirdPartyAudiencesApi(api_client)
    first_and_third_party_audience_id = 'first_and_third_party_audience_id_example' # str | Output only. The unique ID of the first and third party audience. Assigned by the system.
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
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the owner advertiser of the updated FirstAndThirdPartyAudience. (optional)
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. Updates are only supported for the following fields: * `displayName` * `description` * `membershipDurationDays` (optional)
    first_and_third_party_audience = openapi_client.FirstAndThirdPartyAudience() # FirstAndThirdPartyAudience |  (optional)

    try:
        api_response = api_instance.displayvideo_first_and_third_party_audiences_patch(first_and_third_party_audience_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, update_mask=update_mask, first_and_third_party_audience=first_and_third_party_audience)
        print("The response of FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirstAndThirdPartyAudiencesApi->displayvideo_first_and_third_party_audiences_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_and_third_party_audience_id** | **str**| Output only. The unique ID of the first and third party audience. Assigned by the system. | 
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
 **advertiser_id** | **str**| Required. The ID of the owner advertiser of the updated FirstAndThirdPartyAudience. | [optional] 
 **update_mask** | **str**| Required. The mask to control which fields to update. Updates are only supported for the following fields: * &#x60;displayName&#x60; * &#x60;description&#x60; * &#x60;membershipDurationDays&#x60; | [optional] 
 **first_and_third_party_audience** | [**FirstAndThirdPartyAudience**](FirstAndThirdPartyAudience.md)|  | [optional] 

### Return type

[**FirstAndThirdPartyAudience**](FirstAndThirdPartyAudience.md)

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

