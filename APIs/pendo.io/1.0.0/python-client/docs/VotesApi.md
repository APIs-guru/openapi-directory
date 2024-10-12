# openapi_client.VotesApi

All URIs are relative to *https://api.feedback.eu.pendo.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**votes_get**](VotesApi.md#votes_get) | **GET** /votes | 
[**votes_post**](VotesApi.md#votes_post) | **POST** /votes | update specified votes for a User


# **votes_get**
> List[Vote] votes_get(user_id=user_id, feature_id=feature_id, positive=positive, negative=negative, offset=offset, limit=limit)



### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.vote import Vote
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VotesApi(api_client)
    user_id = 56 # int | Include only votes by User that voted on a feature. (optional)
    feature_id = 56 # int | Include only votes for Feature with this Feature ID (optional)
    positive = True # bool | Include only votes that are positive (optional)
    negative = True # bool | Include only votes that are negative (optional)
    offset = 3.4 # float | Offset to start at (optional)
    limit = 3.4 # float | Limit the number of records returned (optional)

    try:
        api_response = api_instance.votes_get(user_id=user_id, feature_id=feature_id, positive=positive, negative=negative, offset=offset, limit=limit)
        print("The response of VotesApi->votes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotesApi->votes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| Include only votes by User that voted on a feature. | [optional] 
 **feature_id** | **int**| Include only votes for Feature with this Feature ID | [optional] 
 **positive** | **bool**| Include only votes that are positive | [optional] 
 **negative** | **bool**| Include only votes that are negative | [optional] 
 **offset** | **float**| Offset to start at | [optional] 
 **limit** | **float**| Limit the number of records returned | [optional] 

### Return type

[**List[Vote]**](Vote.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Vote records |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **votes_post**
> votes_post(data)

update specified votes for a User

Automatically subscribes/unsubscribes the User to the specifed feature depending on the quantity value

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.votes_post_request import VotesPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VotesApi(api_client)
    data = openapi_client.VotesPostRequest() # VotesPostRequest | 

    try:
        # update specified votes for a User
        api_instance.votes_post(data)
    except Exception as e:
        print("Exception when calling VotesApi->votes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**VotesPostRequest**](VotesPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated votes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

