# openapi_client.SessionsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessions_create**](SessionsApi.md#sessions_create) | **POST** /vault/sessions | Create Session


# **sessions_create**
> CreateSessionResponse sessions_create(x_apideck_consumer_id, x_apideck_app_id, session=session)

Create Session

Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned URL to allow temporary access to manage their integrations and settings.  Note: This is a short lived token that will expire after 1 hour (TTL: 3600). 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.create_session_response import CreateSessionResponse
from openapi_client.models.session import Session
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    session = openapi_client.Session() # Session | Additional redirect uri and/or consumer metadata (optional)

    try:
        # Create Session
        api_response = api_instance.sessions_create(x_apideck_consumer_id, x_apideck_app_id, session=session)
        print("The response of SessionsApi->sessions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->sessions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **session** | [**Session**](Session.md)| Additional redirect uri and/or consumer metadata | [optional] 

### Return type

[**CreateSessionResponse**](CreateSessionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

