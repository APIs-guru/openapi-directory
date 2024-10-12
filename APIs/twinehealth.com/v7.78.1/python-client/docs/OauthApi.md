# openapi_client.OauthApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_token**](OauthApi.md#create_token) | **POST** /oauth/token | Create an oauth token
[**fetch_token_groups**](OauthApi.md#fetch_token_groups) | **GET** /oauth/token/{id}/groups | Get the groups for a token
[**fetch_token_organization**](OauthApi.md#fetch_token_organization) | **GET** /oauth/token/{id}/organization | Get the organization for a token


# **create_token**
> CreateTokenResponse create_token(create_token_request, include=include)

Create an oauth token

Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.  Be sure to set the header `Content-Type: \"application/vnd.api+json\"`. Otherwise, you will get an error 403 Forbidden. Using `Content-Type: \"application/json\"` is permitted (to support older oauth clients) but when using `application/json` the body should have a body in the following format instead of nesting under `data.attributes`: ``` {   \"grant_type\": \"client_credentials\",   \"client_id\": \"95c78ab2-167f-40b8-8bec-8398d4b87454\",   \"client_secret\": \"35d18dc9-a3dd-4948-b787-063a490b9354\" } ``` 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.create_token_request import CreateTokenRequest
from openapi_client.models.create_token_response import CreateTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    create_token_request = openapi_client.CreateTokenRequest() # CreateTokenRequest | 
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # Create an oauth token
        api_response = api_instance.create_token(create_token_request, include=include)
        print("The response of OauthApi->create_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->create_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_token_request** | [**CreateTokenRequest**](CreateTokenRequest.md)|  | 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**CreateTokenResponse**](CreateTokenResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_token_groups**
> FetchGroupsResponse fetch_token_groups(id)

Get the groups for a token

Get the list of groups a token can be used to access.

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.fetch_groups_response import FetchGroupsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    id = 'id_example' # str | Token identifier

    try:
        # Get the groups for a token
        api_response = api_instance.fetch_token_groups(id)
        print("The response of OauthApi->fetch_token_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->fetch_token_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Token identifier | 

### Return type

[**FetchGroupsResponse**](FetchGroupsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_token_organization**
> FetchOrganizationResponse fetch_token_organization(id)

Get the organization for a token

Get the organization a token can be used to access.

### Example


```python
import openapi_client
from openapi_client.models.fetch_organization_response import FetchOrganizationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    id = 'id_example' # str | Token identifier

    try:
        # Get the organization for a token
        api_response = api_instance.fetch_token_organization(id)
        print("The response of OauthApi->fetch_token_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->fetch_token_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Token identifier | 

### Return type

[**FetchOrganizationResponse**](FetchOrganizationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

