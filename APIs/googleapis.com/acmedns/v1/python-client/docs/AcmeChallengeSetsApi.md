# openapi_client.AcmeChallengeSetsApi

All URIs are relative to *https://acmedns.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acmedns_acme_challenge_sets_get**](AcmeChallengeSetsApi.md#acmedns_acme_challenge_sets_get) | **GET** /v1/acmeChallengeSets/{rootDomain} | 
[**acmedns_acme_challenge_sets_rotate_challenges**](AcmeChallengeSetsApi.md#acmedns_acme_challenge_sets_rotate_challenges) | **POST** /v1/acmeChallengeSets/{rootDomain}:rotateChallenges | 


# **acmedns_acme_challenge_sets_get**
> AcmeChallengeSet acmedns_acme_challenge_sets_get(root_domain, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.

### Example


```python
import openapi_client
from openapi_client.models.acme_challenge_set import AcmeChallengeSet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://acmedns.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://acmedns.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcmeChallengeSetsApi(api_client)
    root_domain = 'root_domain_example' # str | Required. SLD + TLD domain name to list challenges. For example, this would be \"google.com\" for any FQDN under \"google.com\". That includes challenges for \"subdomain.google.com\". This MAY be Unicode or Punycode.
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
        api_response = api_instance.acmedns_acme_challenge_sets_get(root_domain, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AcmeChallengeSetsApi->acmedns_acme_challenge_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcmeChallengeSetsApi->acmedns_acme_challenge_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **root_domain** | **str**| Required. SLD + TLD domain name to list challenges. For example, this would be \&quot;google.com\&quot; for any FQDN under \&quot;google.com\&quot;. That includes challenges for \&quot;subdomain.google.com\&quot;. This MAY be Unicode or Punycode. | 
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

[**AcmeChallengeSet**](AcmeChallengeSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **acmedns_acme_challenge_sets_rotate_challenges**
> AcmeChallengeSet acmedns_acme_challenge_sets_rotate_challenges(root_domain, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, rotate_challenges_request=rotate_challenges_request)



Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

### Example


```python
import openapi_client
from openapi_client.models.acme_challenge_set import AcmeChallengeSet
from openapi_client.models.rotate_challenges_request import RotateChallengesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://acmedns.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://acmedns.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcmeChallengeSetsApi(api_client)
    root_domain = 'root_domain_example' # str | Required. SLD + TLD domain name to update records for. For example, this would be \"google.com\" for any FQDN under \"google.com\". That includes challenges for \"subdomain.google.com\". This MAY be Unicode or Punycode.
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
    rotate_challenges_request = openapi_client.RotateChallengesRequest() # RotateChallengesRequest |  (optional)

    try:
        api_response = api_instance.acmedns_acme_challenge_sets_rotate_challenges(root_domain, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, rotate_challenges_request=rotate_challenges_request)
        print("The response of AcmeChallengeSetsApi->acmedns_acme_challenge_sets_rotate_challenges:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcmeChallengeSetsApi->acmedns_acme_challenge_sets_rotate_challenges: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **root_domain** | **str**| Required. SLD + TLD domain name to update records for. For example, this would be \&quot;google.com\&quot; for any FQDN under \&quot;google.com\&quot;. That includes challenges for \&quot;subdomain.google.com\&quot;. This MAY be Unicode or Punycode. | 
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
 **rotate_challenges_request** | [**RotateChallengesRequest**](RotateChallengesRequest.md)|  | [optional] 

### Return type

[**AcmeChallengeSet**](AcmeChallengeSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

