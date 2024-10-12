# openapi_client.AccountsApi

All URIs are relative to *http://mastodon.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_accounts_id_block_post**](AccountsApi.md#api_v1_accounts_id_block_post) | **POST** /api/v1/accounts/{id}/block | 
[**api_v1_accounts_id_featured_tags_get**](AccountsApi.md#api_v1_accounts_id_featured_tags_get) | **GET** /api/v1/accounts/{id}/featured_tags | 
[**api_v1_accounts_id_follow_post**](AccountsApi.md#api_v1_accounts_id_follow_post) | **POST** /api/v1/accounts/{id}/follow | 
[**api_v1_accounts_id_followers_get**](AccountsApi.md#api_v1_accounts_id_followers_get) | **GET** /api/v1/accounts/{id}/followers | 
[**api_v1_accounts_id_following_get**](AccountsApi.md#api_v1_accounts_id_following_get) | **GET** /api/v1/accounts/{id}/following | 
[**api_v1_accounts_id_get**](AccountsApi.md#api_v1_accounts_id_get) | **GET** /api/v1/accounts/{id} | 
[**api_v1_accounts_id_identity_proofs_get**](AccountsApi.md#api_v1_accounts_id_identity_proofs_get) | **GET** /api/v1/accounts/{id}/identity_proofs | 
[**api_v1_accounts_id_lists_get**](AccountsApi.md#api_v1_accounts_id_lists_get) | **GET** /api/v1/accounts/{id}/lists | 
[**api_v1_accounts_id_mute_post**](AccountsApi.md#api_v1_accounts_id_mute_post) | **POST** /api/v1/accounts/{id}/mute | 
[**api_v1_accounts_id_note_post**](AccountsApi.md#api_v1_accounts_id_note_post) | **POST** /api/v1/accounts/{id}/note | 
[**api_v1_accounts_id_pin_post**](AccountsApi.md#api_v1_accounts_id_pin_post) | **POST** /api/v1/accounts/{id}/pin | 
[**api_v1_accounts_id_statuses_get**](AccountsApi.md#api_v1_accounts_id_statuses_get) | **GET** /api/v1/accounts/{id}/statuses | 
[**api_v1_accounts_id_unblock_post**](AccountsApi.md#api_v1_accounts_id_unblock_post) | **POST** /api/v1/accounts/{id}/unblock | 
[**api_v1_accounts_id_unfollow_post**](AccountsApi.md#api_v1_accounts_id_unfollow_post) | **POST** /api/v1/accounts/{id}/unfollow | 
[**api_v1_accounts_id_unmute_post**](AccountsApi.md#api_v1_accounts_id_unmute_post) | **POST** /api/v1/accounts/{id}/unmute | 
[**api_v1_accounts_id_unpin_post**](AccountsApi.md#api_v1_accounts_id_unpin_post) | **POST** /api/v1/accounts/{id}/unpin | 
[**api_v1_accounts_post_0**](AccountsApi.md#api_v1_accounts_post_0) | **POST** /api/v1/accounts | 
[**api_v1_accounts_relationships_get**](AccountsApi.md#api_v1_accounts_relationships_get) | **GET** /api/v1/accounts/relationships | 
[**api_v1_accounts_search_get**](AccountsApi.md#api_v1_accounts_search_get) | **GET** /api/v1/accounts/search | 
[**api_v1_accounts_update_credentials_patch**](AccountsApi.md#api_v1_accounts_update_credentials_patch) | **PATCH** /api/v1/accounts/update_credentials | 
[**api_v1_accounts_verify_credentials_get**](AccountsApi.md#api_v1_accounts_verify_credentials_get) | **GET** /api/v1/accounts/verify_credentials | 


# **api_v1_accounts_id_block_post**
> Relationship api_v1_accounts_id_block_post(id)



Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_block_post(id)
        print("The response of AccountsApi->api_v1_accounts_id_block_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_block_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully blocked, or account was already blocked |  -  |
**401** | Invalid or missing Authorization header |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_featured_tags_get**
> List[FeaturedTag] api_v1_accounts_id_featured_tags_get(id)



Tags featured by this account.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.featured_tag import FeaturedTag
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_featured_tags_get(id)
        print("The response of AccountsApi->api_v1_accounts_id_featured_tags_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_featured_tags_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**List[FeaturedTag]**](FeaturedTag.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_follow_post**
> Relationship api_v1_accounts_id_follow_post(id, api_v1_accounts_id_follow_post_request=api_v1_accounts_id_follow_post_request)



Follow the given account. Can also be used to update whether to show reblogs or enable notifications.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.api_v1_accounts_id_follow_post_request import ApiV1AccountsIdFollowPostRequest
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database
    api_v1_accounts_id_follow_post_request = openapi_client.ApiV1AccountsIdFollowPostRequest() # ApiV1AccountsIdFollowPostRequest |  (optional)

    try:
        api_response = api_instance.api_v1_accounts_id_follow_post(id, api_v1_accounts_id_follow_post_request=api_v1_accounts_id_follow_post_request)
        print("The response of AccountsApi->api_v1_accounts_id_follow_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_follow_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 
 **api_v1_accounts_id_follow_post_request** | [**ApiV1AccountsIdFollowPostRequest**](ApiV1AccountsIdFollowPostRequest.md)|  | [optional] 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully followed, or account was already followed |  -  |
**403** | Trying to follow someone that you block or that blocks you |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_followers_get**
> List[Account] api_v1_accounts_id_followers_get(id, max_id=max_id, since_id=since_id, limit=limit)



Accounts which follow the given account, if network is not hidden by the account owner.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database
    max_id = 'max_id_example' # str | Internal parameter. Use HTTP `Link` header for pagination. (optional)
    since_id = 'since_id_example' # str | Internal parameter. Use HTTP `Link` header for pagination. (optional)
    limit = 40 # int | Maximum number of results to return. Defaults to 40. (optional) (default to 40)

    try:
        api_response = api_instance.api_v1_accounts_id_followers_get(id, max_id=max_id, since_id=since_id, limit=limit)
        print("The response of AccountsApi->api_v1_accounts_id_followers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_followers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 
 **max_id** | **str**| Internal parameter. Use HTTP &#x60;Link&#x60; header for pagination. | [optional] 
 **since_id** | **str**| Internal parameter. Use HTTP &#x60;Link&#x60; header for pagination. | [optional] 
 **limit** | **int**| Maximum number of results to return. Defaults to 40. | [optional] [default to 40]

### Return type

[**List[Account]**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user |  -  |
**404** | Account is deleted or does not exist |  -  |
**410** | Account is suspended |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_following_get**
> List[Account] api_v1_accounts_id_following_get(id, max_id=max_id, since_id=since_id, limit=limit)



Accounts which the given account is following, if network is not hidden by the account owner.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database
    max_id = 'max_id_example' # str | Internal parameter. Use HTTP `Link` header for pagination. (optional)
    since_id = 'since_id_example' # str | Internal parameter. Use HTTP `Link` header for pagination. (optional)
    limit = 40 # int | Maximum number of results to return. Defaults to 40. (optional) (default to 40)

    try:
        api_response = api_instance.api_v1_accounts_id_following_get(id, max_id=max_id, since_id=since_id, limit=limit)
        print("The response of AccountsApi->api_v1_accounts_id_following_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_following_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 
 **max_id** | **str**| Internal parameter. Use HTTP &#x60;Link&#x60; header for pagination. | [optional] 
 **since_id** | **str**| Internal parameter. Use HTTP &#x60;Link&#x60; header for pagination. | [optional] 
 **limit** | **int**| Maximum number of results to return. Defaults to 40. | [optional] [default to 40]

### Return type

[**List[Account]**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user |  -  |
**404** | Account is deleted or does not exist |  -  |
**410** | Account is suspended |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_get**
> Account api_v1_accounts_id_get(id)



### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_get(id)
        print("The response of AccountsApi->api_v1_accounts_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account record will be returned. Note that &#x60;acct&#x60; of local users does not include the domain name. |  -  |
**401** | If the instance is in whitelist mode and the Authorization header is missing or invalid |  -  |
**404** | Account does not exist |  -  |
**410** | Account is suspended |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_identity_proofs_get**
> List[IdentityProof] api_v1_accounts_id_identity_proofs_get(id)



Array of IdentityProof

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.identity_proof import IdentityProof
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_identity_proofs_get(id)
        print("The response of AccountsApi->api_v1_accounts_id_identity_proofs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_identity_proofs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**List[IdentityProof]**](IdentityProof.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Account is deleted or does not exist |  -  |
**410** | Account with given id is suspended |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_lists_get**
> List[List] api_v1_accounts_id_lists_get(id)



User lists that you have added this account to.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.list import List
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_lists_get(id)
        print("The response of AccountsApi->api_v1_accounts_id_lists_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_lists_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

**List[List]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user |  -  |
**404** | Account is deleted or does not exist |  -  |
**410** | Account is suspended |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_mute_post**
> Relationship api_v1_accounts_id_mute_post(id, api_v1_accounts_id_mute_post_request=api_v1_accounts_id_mute_post_request)



Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.api_v1_accounts_id_mute_post_request import ApiV1AccountsIdMutePostRequest
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database
    api_v1_accounts_id_mute_post_request = openapi_client.ApiV1AccountsIdMutePostRequest() # ApiV1AccountsIdMutePostRequest |  (optional)

    try:
        api_response = api_instance.api_v1_accounts_id_mute_post(id, api_v1_accounts_id_mute_post_request=api_v1_accounts_id_mute_post_request)
        print("The response of AccountsApi->api_v1_accounts_id_mute_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_mute_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 
 **api_v1_accounts_id_mute_post_request** | [**ApiV1AccountsIdMutePostRequest**](ApiV1AccountsIdMutePostRequest.md)|  | [optional] 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully muted, or account was already muted. Note that you can call this API method again with notifications&#x3D;false to update the relationship so that only statuses are muted. |  -  |
**401** | Invalid or missing Authorization header |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_note_post**
> Relationship api_v1_accounts_id_note_post(id, api_v1_accounts_id_note_post_request=api_v1_accounts_id_note_post_request)



Sets a private note on a user.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.api_v1_accounts_id_note_post_request import ApiV1AccountsIdNotePostRequest
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database
    api_v1_accounts_id_note_post_request = openapi_client.ApiV1AccountsIdNotePostRequest() # ApiV1AccountsIdNotePostRequest |  (optional)

    try:
        api_response = api_instance.api_v1_accounts_id_note_post(id, api_v1_accounts_id_note_post_request=api_v1_accounts_id_note_post_request)
        print("The response of AccountsApi->api_v1_accounts_id_note_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_note_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 
 **api_v1_accounts_id_note_post_request** | [**ApiV1AccountsIdNotePostRequest**](ApiV1AccountsIdNotePostRequest.md)|  | [optional] 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unmuted, or account was already unmuted. |  -  |
**401** | Invalid or missing Authorization header |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_pin_post**
> Relationship api_v1_accounts_id_pin_post(id)



Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_pin_post(id)
        print("The response of AccountsApi->api_v1_accounts_id_pin_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_pin_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unmuted, or account was already unmuted. |  -  |
**401** | Invalid or missing Authorization header |  -  |
**403** | Token is not authorized with a valid user or is missing a required scope |  -  |
**422** | You are not following this account |  -  |
**500** | Account already endorsed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_statuses_get**
> List[Status] api_v1_accounts_id_statuses_get(id)



Statuses posted to the given account.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.status import Status
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_statuses_get(id)
        print("The response of AccountsApi->api_v1_accounts_id_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**List[Status]**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Statuses posted to the given account. Public (for public statuses only), or user token + read:statuses (for private statuses the user is authorized to see) |  -  |
**401** | Instance is in whitelist mode or running a version of Mastodon older than 2.7.0, and the Authorization header is invalid or missing |  -  |
**404** | Account is deleted or does not exist |  -  |
**410** | Account is suspended |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_unblock_post**
> Relationship api_v1_accounts_id_unblock_post(id)



Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_unblock_post(id)
        print("The response of AccountsApi->api_v1_accounts_id_unblock_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_unblock_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unblocked, or account was already not blocked |  -  |
**401** | Invalid or missing Authorization header |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_unfollow_post**
> Relationship api_v1_accounts_id_unfollow_post(id)



Unfollow the given account.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_unfollow_post(id)
        print("The response of AccountsApi->api_v1_accounts_id_unfollow_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_unfollow_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unfollowed, or account was already not followed |  -  |
**401** | Invalid or missing Authorization header |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_unmute_post**
> Relationship api_v1_accounts_id_unmute_post(id)



Unmute the given account.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_unmute_post(id)
        print("The response of AccountsApi->api_v1_accounts_id_unmute_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_unmute_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unmuted, or account was already unmuted. |  -  |
**401** | Invalid or missing Authorization header |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_id_unpin_post**
> Relationship api_v1_accounts_id_unpin_post(id)



Remove the given account from the user's featured profiles.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | The id of the account in the database

    try:
        api_response = api_instance.api_v1_accounts_id_unpin_post(id)
        print("The response of AccountsApi->api_v1_accounts_id_unpin_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_id_unpin_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the account in the database | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unmuted, or account was already unmuted. |  -  |
**401** | Invalid or missing Authorization header |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_post_0**
> api_v1_accounts_post_0(api_v1_accounts_post_request=api_v1_accounts_post_request)



Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.api_v1_accounts_post_request import ApiV1AccountsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    api_v1_accounts_post_request = openapi_client.ApiV1AccountsPostRequest() # ApiV1AccountsPostRequest |  (optional)

    try:
        api_instance.api_v1_accounts_post_0(api_v1_accounts_post_request=api_v1_accounts_post_request)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_v1_accounts_post_request** | [**ApiV1AccountsPostRequest**](ApiV1AccountsPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_relationships_get**
> List[Relationship] api_v1_accounts_relationships_get(id)



Sets a private note on a user.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.relationship import Relationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = ['id_example'] # List[str] | Array of account IDs to check

    try:
        api_response = api_instance.api_v1_accounts_relationships_get(id)
        print("The response of AccountsApi->api_v1_accounts_relationships_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_relationships_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Array of account IDs to check | 

### Return type

[**List[Relationship]**](Relationship.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Invalid or missing Authorization header |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_search_get**
> List[Account] api_v1_accounts_search_get(q, limit=limit, resolve=resolve, following=following)



Search for matching accounts by username or display name.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    q = 'q_example' # str | What to search for
    limit = 40 # int | Maximum number of results. Defaults to 40. (optional) (default to 40)
    resolve = 'resolve_example' # str | Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address. (optional)
    following = True # bool | Only who the user is following. Defaults to false. (optional)

    try:
        api_response = api_instance.api_v1_accounts_search_get(q, limit=limit, resolve=resolve, following=following)
        print("The response of AccountsApi->api_v1_accounts_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| What to search for | 
 **limit** | **int**| Maximum number of results. Defaults to 40. | [optional] [default to 40]
 **resolve** | **str**| Attempt WebFinger lookup. Defaults to false. Use this when &#x60;q&#x60; is an exact address. | [optional] 
 **following** | **bool**| Only who the user is following. Defaults to false. | [optional] 

### Return type

[**List[Account]**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Accounts matching &#x60;q&#x60; in username or display name |  -  |
**503** | resolve&#x3D;true, but the domain part of the user@domain address is not a currently live website |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_update_credentials_patch**
> Account api_v1_accounts_update_credentials_patch(api_v1_accounts_update_credentials_patch_request=api_v1_accounts_update_credentials_patch_request)



Update the user's display and preferences.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.models.api_v1_accounts_update_credentials_patch_request import ApiV1AccountsUpdateCredentialsPatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    api_v1_accounts_update_credentials_patch_request = openapi_client.ApiV1AccountsUpdateCredentialsPatchRequest() # ApiV1AccountsUpdateCredentialsPatchRequest |  (optional)

    try:
        api_response = api_instance.api_v1_accounts_update_credentials_patch(api_v1_accounts_update_credentials_patch_request=api_v1_accounts_update_credentials_patch_request)
        print("The response of AccountsApi->api_v1_accounts_update_credentials_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_update_credentials_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_v1_accounts_update_credentials_patch_request** | [**ApiV1AccountsUpdateCredentialsPatchRequest**](ApiV1AccountsUpdateCredentialsPatchRequest.md)|  | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | You should use &#x60;accounts/verify_credentials&#x60; to first obtain plaintext representations from within the &#x60;source&#x60; parameter, then allow the user to edit these plaintext representations before submitting them through this API. The server will generate the corresponding HTML. |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_verify_credentials_get**
> Account api_v1_accounts_verify_credentials_get()



Test to make sure that the user token works.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)

    try:
        api_response = api_instance.api_v1_accounts_verify_credentials_get()
        print("The response of AccountsApi->api_v1_accounts_verify_credentials_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->api_v1_accounts_verify_credentials_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Note the extra &#x60;source&#x60; property, which is not visible on accounts other than your own. Also note that plain-text is used within &#x60;source&#x60; and HTML is used for their corresponding properties such as &#x60;note&#x60; and &#x60;fields&#x60;. |  -  |
**401** | Your credential verification will fail if the token is invalid or incorrect. |  -  |
**403** | Your user account is currently disabled, missing a confirmed email address, or pending approval. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

