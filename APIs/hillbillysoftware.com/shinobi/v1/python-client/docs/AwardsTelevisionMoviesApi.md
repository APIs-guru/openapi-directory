# openapi_client.AwardsTelevisionMoviesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**awards_get**](AwardsTelevisionMoviesApi.md#awards_get) | **GET** /Awards/ByYear/{Year} | Gets all awards for requested year
[**awardsby_winner_get**](AwardsTelevisionMoviesApi.md#awardsby_winner_get) | **GET** /Awards/ByWinner/{AccessToken}/{Nominee} | Gets all awards by nominiee


# **awards_get**
> List[Awards] awards_get(year)

Gets all awards for requested year

### Example


```python
import openapi_client
from openapi_client.models.awards import Awards
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AwardsTelevisionMoviesApi(api_client)
    year = 'year_example' # str | 

    try:
        # Gets all awards for requested year
        api_response = api_instance.awards_get(year)
        print("The response of AwardsTelevisionMoviesApi->awards_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AwardsTelevisionMoviesApi->awards_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **str**|  | 

### Return type

[**List[Awards]**](Awards.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of awards |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **awardsby_winner_get**
> List[Awards] awardsby_winner_get(access_token, nominee)

Gets all awards by nominiee

### Example


```python
import openapi_client
from openapi_client.models.awards import Awards
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AwardsTelevisionMoviesApi(api_client)
    access_token = 'access_token_example' # str | 
    nominee = 'nominee_example' # str | 

    try:
        # Gets all awards by nominiee
        api_response = api_instance.awardsby_winner_get(access_token, nominee)
        print("The response of AwardsTelevisionMoviesApi->awardsby_winner_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AwardsTelevisionMoviesApi->awardsby_winner_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **nominee** | **str**|  | 

### Return type

[**List[Awards]**](Awards.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of awards |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

