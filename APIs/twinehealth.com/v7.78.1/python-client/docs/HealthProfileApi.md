# openapi_client.HealthProfileApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_health_profile**](HealthProfileApi.md#fetch_health_profile) | **GET** /health_profile/{id} | Get a health profile
[**fetch_health_profiles**](HealthProfileApi.md#fetch_health_profiles) | **GET** /health_profile | List health profiles


# **fetch_health_profile**
> FetchHealthProfileResponse fetch_health_profile(id, include=include)

Get a health profile

Get a health profile by id

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_profile_response import FetchHealthProfileResponse
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
    api_instance = openapi_client.HealthProfileApi(api_client)
    id = 'id_example' # str | Health profile identifier
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # Get a health profile
        api_response = api_instance.fetch_health_profile(id, include=include)
        print("The response of HealthProfileApi->fetch_health_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthProfileApi->fetch_health_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Health profile identifier | 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchHealthProfileResponse**](FetchHealthProfileResponse.md)

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

# **fetch_health_profiles**
> FetchHealthProfilesResponse fetch_health_profiles(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor, include=include)

List health profiles

Get a list of health profiles

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_profiles_response import FetchHealthProfilesResponse
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
    api_instance = openapi_client.HealthProfileApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient id to fetch health profile. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    page_number = 1 # int | Page number (optional) (default to 1)
    page_size = 10 # int | Page size (optional) (default to 10)
    page_limit = 50 # int | Page limit (optional) (default to 50)
    page_cursor = 'page_cursor_example' # str | Page cursor (optional)
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # List health profiles
        api_response = api_instance.fetch_health_profiles(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor, include=include)
        print("The response of HealthProfileApi->fetch_health_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthProfileApi->fetch_health_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient id to fetch health profile. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **page_number** | **int**| Page number | [optional] [default to 1]
 **page_size** | **int**| Page size | [optional] [default to 10]
 **page_limit** | **int**| Page limit | [optional] [default to 50]
 **page_cursor** | **str**| Page cursor | [optional] 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchHealthProfilesResponse**](FetchHealthProfilesResponse.md)

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
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

