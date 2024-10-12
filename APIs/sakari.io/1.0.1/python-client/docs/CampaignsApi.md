# openapi_client.CampaignsApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaigns_create**](CampaignsApi.md#campaigns_create) | **POST** /v1/accounts/{accountId}/campaigns | Create campaign
[**campaigns_fetch**](CampaignsApi.md#campaigns_fetch) | **GET** /v1/accounts/{accountId}/campaigns/{campaignId} | Fetch campaign by ID
[**campaigns_fetch_all**](CampaignsApi.md#campaigns_fetch_all) | **GET** /v1/accounts/{accountId}/campaigns | Fetch campaigns
[**campaigns_remove**](CampaignsApi.md#campaigns_remove) | **DELETE** /v1/accounts/{accountId}/campaigns/{campaignId} | Deletes a campaign
[**campaigns_update**](CampaignsApi.md#campaigns_update) | **PUT** /v1/accounts/{accountId}/campaigns/{campaignId} | Updates a campaign


# **campaigns_create**
> CampaignResponse campaigns_create(account_id, campaign_request=campaign_request)

Create campaign

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaign_request import CampaignRequest
from openapi_client.models.campaign_response import CampaignResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    campaign_request = openapi_client.CampaignRequest() # CampaignRequest |  (optional)

    try:
        # Create campaign
        api_response = api_instance.campaigns_create(account_id, campaign_request=campaign_request)
        print("The response of CampaignsApi->campaigns_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->campaigns_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **campaign_request** | [**CampaignRequest**](CampaignRequest.md)|  | [optional] 

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaigns_fetch**
> CampaignResponse campaigns_fetch(account_id, campaign_id)

Fetch campaign by ID

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaign_response import CampaignResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    campaign_id = 'campaign_id_example' # str | ID of campaign to return

    try:
        # Fetch campaign by ID
        api_response = api_instance.campaigns_fetch(account_id, campaign_id)
        print("The response of CampaignsApi->campaigns_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->campaigns_fetch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **campaign_id** | **str**| ID of campaign to return | 

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaigns_fetch_all**
> CampaignsResponse campaigns_fetch_all(account_id, offset=offset, limit=limit, name=name)

Fetch campaigns

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaigns_response import CampaignsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    offset = 56 # int | Results to skip when paginating through a result set (optional)
    limit = 56 # int | Maximum number of results to return (optional)
    name = 'name_example' # str | Filter by name or part of (optional)

    try:
        # Fetch campaigns
        api_response = api_instance.campaigns_fetch_all(account_id, offset=offset, limit=limit, name=name)
        print("The response of CampaignsApi->campaigns_fetch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->campaigns_fetch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **offset** | **int**| Results to skip when paginating through a result set | [optional] 
 **limit** | **int**| Maximum number of results to return | [optional] 
 **name** | **str**| Filter by name or part of | [optional] 

### Return type

[**CampaignsResponse**](CampaignsResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**4XX** | invalid request |  -  |
**5XX** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaigns_remove**
> CampaignsRemove200Response campaigns_remove(account_id, campaign_id)

Deletes a campaign

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaigns_remove200_response import CampaignsRemove200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    campaign_id = 'campaign_id_example' # str | Campaign id to delete

    try:
        # Deletes a campaign
        api_response = api_instance.campaigns_remove(account_id, campaign_id)
        print("The response of CampaignsApi->campaigns_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->campaigns_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **campaign_id** | **str**| Campaign id to delete | 

### Return type

[**CampaignsRemove200Response**](CampaignsRemove200Response.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaigns_update**
> CampaignResponse campaigns_update(account_id, campaign_id)

Updates a campaign

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaign_response import CampaignResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    campaign_id = 'campaign_id_example' # str | ID of campaign

    try:
        # Updates a campaign
        api_response = api_instance.campaigns_update(account_id, campaign_id)
        print("The response of CampaignsApi->campaigns_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->campaigns_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **campaign_id** | **str**| ID of campaign | 

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

