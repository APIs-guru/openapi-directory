# openapi_client.CoachApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_coach**](CoachApi.md#fetch_coach) | **GET** /coach/{id} | Get a coach
[**fetch_coaches**](CoachApi.md#fetch_coaches) | **GET** /coach | List coaches


# **fetch_coach**
> FetchCoachResponse fetch_coach(id)

Get a coach

Get a coach record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_coach_response import FetchCoachResponse
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
    api_instance = openapi_client.CoachApi(api_client)
    id = 'id_example' # str | Coach identifier

    try:
        # Get a coach
        api_response = api_instance.fetch_coach(id)
        print("The response of CoachApi->fetch_coach:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoachApi->fetch_coach: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Coach identifier | 

### Return type

[**FetchCoachResponse**](FetchCoachResponse.md)

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

# **fetch_coaches**
> FetchCoachesResponse fetch_coaches(filter_groups=filter_groups, filter_organization=filter_organization)

List coaches

Get a list of coaches matching the specified filters.

### Example


```python
import openapi_client
from openapi_client.models.fetch_coaches_response import FetchCoachesResponse
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
    api_instance = openapi_client.CoachApi(api_client)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.  (optional)

    try:
        # List coaches
        api_response = api_instance.fetch_coaches(filter_groups=filter_groups, filter_organization=filter_organization)
        print("The response of CoachApi->fetch_coaches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoachApi->fetch_coaches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 

### Return type

[**FetchCoachesResponse**](FetchCoachesResponse.md)

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

