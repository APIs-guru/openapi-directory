# openapi_client.PlaybackRestrictionsApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_playback_restriction**](PlaybackRestrictionsApi.md#create_playback_restriction) | **POST** /video/v1/playback-restrictions | Create a Playback Restriction
[**delete_playback_restriction**](PlaybackRestrictionsApi.md#delete_playback_restriction) | **DELETE** /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID} | Delete a Playback Restriction
[**get_playback_restriction**](PlaybackRestrictionsApi.md#get_playback_restriction) | **GET** /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID} | Retrieve a Playback Restriction
[**list_playback_restrictions**](PlaybackRestrictionsApi.md#list_playback_restrictions) | **GET** /video/v1/playback-restrictions | List Playback Restrictions
[**update_referrer_domain_restriction**](PlaybackRestrictionsApi.md#update_referrer_domain_restriction) | **PUT** /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer | Update the Referrer Playback Restriction


# **create_playback_restriction**
> PlaybackRestrictionResponse create_playback_restriction(create_playback_restriction_request)

Create a Playback Restriction

Create a new Playback Restriction.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.create_playback_restriction_request import CreatePlaybackRestrictionRequest
from openapi_client.models.playback_restriction_response import PlaybackRestrictionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaybackRestrictionsApi(api_client)
    create_playback_restriction_request = {"referrer":{"allow_no_referrer":true,"allowed_domains":["*.example.com"]}} # CreatePlaybackRestrictionRequest | 

    try:
        # Create a Playback Restriction
        api_response = api_instance.create_playback_restriction(create_playback_restriction_request)
        print("The response of PlaybackRestrictionsApi->create_playback_restriction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaybackRestrictionsApi->create_playback_restriction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_playback_restriction_request** | [**CreatePlaybackRestrictionRequest**](CreatePlaybackRestrictionRequest.md)|  | 

### Return type

[**PlaybackRestrictionResponse**](PlaybackRestrictionResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_playback_restriction**
> delete_playback_restriction(playback_restriction_id)

Delete a Playback Restriction

Deletes a single Playback Restriction.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaybackRestrictionsApi(api_client)
    playback_restriction_id = 'playback_restriction_id_example' # str | ID of the Playback Restriction.

    try:
        # Delete a Playback Restriction
        api_instance.delete_playback_restriction(playback_restriction_id)
    except Exception as e:
        print("Exception when calling PlaybackRestrictionsApi->delete_playback_restriction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playback_restriction_id** | **str**| ID of the Playback Restriction. | 

### Return type

void (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_playback_restriction**
> PlaybackRestrictionResponse get_playback_restriction(playback_restriction_id)

Retrieve a Playback Restriction

Retrieves a Playback Restriction associated with the unique identifier.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.playback_restriction_response import PlaybackRestrictionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaybackRestrictionsApi(api_client)
    playback_restriction_id = 'playback_restriction_id_example' # str | ID of the Playback Restriction.

    try:
        # Retrieve a Playback Restriction
        api_response = api_instance.get_playback_restriction(playback_restriction_id)
        print("The response of PlaybackRestrictionsApi->get_playback_restriction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaybackRestrictionsApi->get_playback_restriction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playback_restriction_id** | **str**| ID of the Playback Restriction. | 

### Return type

[**PlaybackRestrictionResponse**](PlaybackRestrictionResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_playback_restrictions**
> ListPlaybackRestrictionsResponse list_playback_restrictions(page=page, limit=limit)

List Playback Restrictions

Returns a list of all Playback Restrictions.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_playback_restrictions_response import ListPlaybackRestrictionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaybackRestrictionsApi(api_client)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)

    try:
        # List Playback Restrictions
        api_response = api_instance.list_playback_restrictions(page=page, limit=limit)
        print("The response of PlaybackRestrictionsApi->list_playback_restrictions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaybackRestrictionsApi->list_playback_restrictions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]

### Return type

[**ListPlaybackRestrictionsResponse**](ListPlaybackRestrictionsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_referrer_domain_restriction**
> PlaybackRestrictionResponse update_referrer_domain_restriction(playback_restriction_id, update_referrer_domain_restriction_request)

Update the Referrer Playback Restriction

Allows you to modify the list of domains or change how Mux validates playback requests without the `Referer` HTTP header. The Referrer restriction fully replaces the old list with this new list of domains.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.playback_restriction_response import PlaybackRestrictionResponse
from openapi_client.models.update_referrer_domain_restriction_request import UpdateReferrerDomainRestrictionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaybackRestrictionsApi(api_client)
    playback_restriction_id = 'playback_restriction_id_example' # str | ID of the Playback Restriction.
    update_referrer_domain_restriction_request = {"allow_no_referrer":true,"allowed_domains":["*.example.com"]} # UpdateReferrerDomainRestrictionRequest | 

    try:
        # Update the Referrer Playback Restriction
        api_response = api_instance.update_referrer_domain_restriction(playback_restriction_id, update_referrer_domain_restriction_request)
        print("The response of PlaybackRestrictionsApi->update_referrer_domain_restriction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaybackRestrictionsApi->update_referrer_domain_restriction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playback_restriction_id** | **str**| ID of the Playback Restriction. | 
 **update_referrer_domain_restriction_request** | [**UpdateReferrerDomainRestrictionRequest**](UpdateReferrerDomainRestrictionRequest.md)|  | 

### Return type

[**PlaybackRestrictionResponse**](PlaybackRestrictionResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

