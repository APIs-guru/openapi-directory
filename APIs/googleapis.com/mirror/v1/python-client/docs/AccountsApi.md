# openapi_client.AccountsApi

All URIs are relative to *https://www.googleapis.com/mirror/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mirror_accounts_insert**](AccountsApi.md#mirror_accounts_insert) | **POST** /accounts/{userToken}/{accountType}/{accountName} | 


# **mirror_accounts_insert**
> Account mirror_accounts_insert(user_token, account_type, account_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, account=account)



Inserts a new account for a user

### Example


```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/mirror/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/mirror/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    user_token = 'user_token_example' # str | The ID for the user.
    account_type = 'account_type_example' # str | Account type to be passed to Android Account Manager.
    account_name = 'account_name_example' # str | The name of the account to be passed to the Android Account Manager.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    account = openapi_client.Account() # Account |  (optional)

    try:
        api_response = api_instance.mirror_accounts_insert(user_token, account_type, account_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, account=account)
        print("The response of AccountsApi->mirror_accounts_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->mirror_accounts_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_token** | **str**| The ID for the user. | 
 **account_type** | **str**| Account type to be passed to Android Account Manager. | 
 **account_name** | **str**| The name of the account to be passed to the Android Account Manager. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **account** | [**Account**](Account.md)|  | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

