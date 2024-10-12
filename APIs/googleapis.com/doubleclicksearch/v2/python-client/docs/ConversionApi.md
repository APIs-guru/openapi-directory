# openapi_client.ConversionApi

All URIs are relative to *https://doubleclicksearch.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**doubleclicksearch_conversion_get**](ConversionApi.md#doubleclicksearch_conversion_get) | **GET** /doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion | 
[**doubleclicksearch_conversion_get_by_customer_id**](ConversionApi.md#doubleclicksearch_conversion_get_by_customer_id) | **GET** /doubleclicksearch/v2/customer/{customerId}/conversion | 
[**doubleclicksearch_conversion_insert**](ConversionApi.md#doubleclicksearch_conversion_insert) | **POST** /doubleclicksearch/v2/conversion | 
[**doubleclicksearch_conversion_update**](ConversionApi.md#doubleclicksearch_conversion_update) | **PUT** /doubleclicksearch/v2/conversion | 
[**doubleclicksearch_conversion_update_availability**](ConversionApi.md#doubleclicksearch_conversion_update_availability) | **POST** /doubleclicksearch/v2/conversion/updateAvailability | 


# **doubleclicksearch_conversion_get**
> ConversionList doubleclicksearch_conversion_get(agency_id, advertiser_id, engine_account_id, end_date, row_count, start_date, start_row, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad_group_id=ad_group_id, ad_id=ad_id, campaign_id=campaign_id, criterion_id=criterion_id, customer_id=customer_id)



Retrieves a list of conversions from a DoubleClick Search engine account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.conversion_list import ConversionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://doubleclicksearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://doubleclicksearch.googleapis.com"
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
    api_instance = openapi_client.ConversionApi(api_client)
    agency_id = 'agency_id_example' # str | Numeric ID of the agency.
    advertiser_id = 'advertiser_id_example' # str | Numeric ID of the advertiser.
    engine_account_id = 'engine_account_id_example' # str | Numeric ID of the engine account.
    end_date = 56 # int | Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
    row_count = 56 # int | The number of conversions to return per call.
    start_date = 56 # int | First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
    start_row = 56 # int | The 0-based starting index for retrieving conversions results.
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
    ad_group_id = 'ad_group_id_example' # str | Numeric ID of the ad group. (optional)
    ad_id = 'ad_id_example' # str | Numeric ID of the ad. (optional)
    campaign_id = 'campaign_id_example' # str | Numeric ID of the campaign. (optional)
    criterion_id = 'criterion_id_example' # str | Numeric ID of the criterion. (optional)
    customer_id = 'customer_id_example' # str | Customer ID of a client account in the new Search Ads 360 experience. (optional)

    try:
        api_response = api_instance.doubleclicksearch_conversion_get(agency_id, advertiser_id, engine_account_id, end_date, row_count, start_date, start_row, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad_group_id=ad_group_id, ad_id=ad_id, campaign_id=campaign_id, criterion_id=criterion_id, customer_id=customer_id)
        print("The response of ConversionApi->doubleclicksearch_conversion_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->doubleclicksearch_conversion_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agency_id** | **str**| Numeric ID of the agency. | 
 **advertiser_id** | **str**| Numeric ID of the advertiser. | 
 **engine_account_id** | **str**| Numeric ID of the engine account. | 
 **end_date** | **int**| Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd. | 
 **row_count** | **int**| The number of conversions to return per call. | 
 **start_date** | **int**| First date (inclusive) on which to retrieve conversions. Format is yyyymmdd. | 
 **start_row** | **int**| The 0-based starting index for retrieving conversions results. | 
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
 **ad_group_id** | **str**| Numeric ID of the ad group. | [optional] 
 **ad_id** | **str**| Numeric ID of the ad. | [optional] 
 **campaign_id** | **str**| Numeric ID of the campaign. | [optional] 
 **criterion_id** | **str**| Numeric ID of the criterion. | [optional] 
 **customer_id** | **str**| Customer ID of a client account in the new Search Ads 360 experience. | [optional] 

### Return type

[**ConversionList**](ConversionList.md)

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

# **doubleclicksearch_conversion_get_by_customer_id**
> ConversionList doubleclicksearch_conversion_get_by_customer_id(customer_id, end_date, row_count, start_date, start_row, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad_group_id=ad_group_id, ad_id=ad_id, advertiser_id=advertiser_id, agency_id=agency_id, campaign_id=campaign_id, criterion_id=criterion_id, engine_account_id=engine_account_id)



Retrieves a list of conversions from a DoubleClick Search engine account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.conversion_list import ConversionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://doubleclicksearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://doubleclicksearch.googleapis.com"
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
    api_instance = openapi_client.ConversionApi(api_client)
    customer_id = 'customer_id_example' # str | Customer ID of a client account in the new Search Ads 360 experience.
    end_date = 56 # int | Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
    row_count = 56 # int | The number of conversions to return per call.
    start_date = 56 # int | First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
    start_row = 56 # int | The 0-based starting index for retrieving conversions results.
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
    ad_group_id = 'ad_group_id_example' # str | Numeric ID of the ad group. (optional)
    ad_id = 'ad_id_example' # str | Numeric ID of the ad. (optional)
    advertiser_id = 'advertiser_id_example' # str | Numeric ID of the advertiser. (optional)
    agency_id = 'agency_id_example' # str | Numeric ID of the agency. (optional)
    campaign_id = 'campaign_id_example' # str | Numeric ID of the campaign. (optional)
    criterion_id = 'criterion_id_example' # str | Numeric ID of the criterion. (optional)
    engine_account_id = 'engine_account_id_example' # str | Numeric ID of the engine account. (optional)

    try:
        api_response = api_instance.doubleclicksearch_conversion_get_by_customer_id(customer_id, end_date, row_count, start_date, start_row, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad_group_id=ad_group_id, ad_id=ad_id, advertiser_id=advertiser_id, agency_id=agency_id, campaign_id=campaign_id, criterion_id=criterion_id, engine_account_id=engine_account_id)
        print("The response of ConversionApi->doubleclicksearch_conversion_get_by_customer_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->doubleclicksearch_conversion_get_by_customer_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Customer ID of a client account in the new Search Ads 360 experience. | 
 **end_date** | **int**| Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd. | 
 **row_count** | **int**| The number of conversions to return per call. | 
 **start_date** | **int**| First date (inclusive) on which to retrieve conversions. Format is yyyymmdd. | 
 **start_row** | **int**| The 0-based starting index for retrieving conversions results. | 
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
 **ad_group_id** | **str**| Numeric ID of the ad group. | [optional] 
 **ad_id** | **str**| Numeric ID of the ad. | [optional] 
 **advertiser_id** | **str**| Numeric ID of the advertiser. | [optional] 
 **agency_id** | **str**| Numeric ID of the agency. | [optional] 
 **campaign_id** | **str**| Numeric ID of the campaign. | [optional] 
 **criterion_id** | **str**| Numeric ID of the criterion. | [optional] 
 **engine_account_id** | **str**| Numeric ID of the engine account. | [optional] 

### Return type

[**ConversionList**](ConversionList.md)

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

# **doubleclicksearch_conversion_insert**
> ConversionList doubleclicksearch_conversion_insert(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, conversion_list=conversion_list)



Inserts a batch of new conversions into DoubleClick Search.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.conversion_list import ConversionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://doubleclicksearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://doubleclicksearch.googleapis.com"
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
    api_instance = openapi_client.ConversionApi(api_client)
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
    conversion_list = openapi_client.ConversionList() # ConversionList |  (optional)

    try:
        api_response = api_instance.doubleclicksearch_conversion_insert(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, conversion_list=conversion_list)
        print("The response of ConversionApi->doubleclicksearch_conversion_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->doubleclicksearch_conversion_insert: %s\n" % e)
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
 **conversion_list** | [**ConversionList**](ConversionList.md)|  | [optional] 

### Return type

[**ConversionList**](ConversionList.md)

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

# **doubleclicksearch_conversion_update**
> ConversionList doubleclicksearch_conversion_update(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, conversion_list=conversion_list)



Updates a batch of conversions in DoubleClick Search.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.conversion_list import ConversionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://doubleclicksearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://doubleclicksearch.googleapis.com"
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
    api_instance = openapi_client.ConversionApi(api_client)
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
    conversion_list = openapi_client.ConversionList() # ConversionList |  (optional)

    try:
        api_response = api_instance.doubleclicksearch_conversion_update(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, conversion_list=conversion_list)
        print("The response of ConversionApi->doubleclicksearch_conversion_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->doubleclicksearch_conversion_update: %s\n" % e)
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
 **conversion_list** | [**ConversionList**](ConversionList.md)|  | [optional] 

### Return type

[**ConversionList**](ConversionList.md)

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

# **doubleclicksearch_conversion_update_availability**
> UpdateAvailabilityResponse doubleclicksearch_conversion_update_availability(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_availability_request=update_availability_request)



Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.update_availability_request import UpdateAvailabilityRequest
from openapi_client.models.update_availability_response import UpdateAvailabilityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://doubleclicksearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://doubleclicksearch.googleapis.com"
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
    api_instance = openapi_client.ConversionApi(api_client)
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
    update_availability_request = openapi_client.UpdateAvailabilityRequest() # UpdateAvailabilityRequest |  (optional)

    try:
        api_response = api_instance.doubleclicksearch_conversion_update_availability(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_availability_request=update_availability_request)
        print("The response of ConversionApi->doubleclicksearch_conversion_update_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->doubleclicksearch_conversion_update_availability: %s\n" % e)
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
 **update_availability_request** | [**UpdateAvailabilityRequest**](UpdateAvailabilityRequest.md)|  | [optional] 

### Return type

[**UpdateAvailabilityResponse**](UpdateAvailabilityResponse.md)

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

