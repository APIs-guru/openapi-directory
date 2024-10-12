# openapi_client.SeriesApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_series**](SeriesApi.md#fetch_all_series) | **GET** /series | Find all series
[**fetch_one_series**](SeriesApi.md#fetch_one_series) | **GET** /series/{series_id} | Get one series by ID


# **fetch_all_series**
> List[SeriesEntity] fetch_all_series(label=label, from_date=from_date, to_date=to_date, type=type, sort=sort, page_size=page_size, accept_language=accept_language)

Find all series

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.series_entity import SeriesEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SeriesApi(api_client)
    label = 'label_example' # str | Find only the venues whose label contains this value. (optional)
    from_date = '2013-10-20' # date | Find only the series starting after this date. (optional)
    to_date = '2013-10-20' # date | Find only the series ending before this date. (optional)
    type = 'type_example' # str | Find only the series whose type is equal to this value. (optional)
    sort = first_date # str | Sort the series in the corresponding order. (optional) (default to first_date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all series
        api_response = api_instance.fetch_all_series(label=label, from_date=from_date, to_date=to_date, type=type, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of SeriesApi->fetch_all_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SeriesApi->fetch_all_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the venues whose label contains this value. | [optional] 
 **from_date** | **date**| Find only the series starting after this date. | [optional] 
 **to_date** | **date**| Find only the series ending before this date. | [optional] 
 **type** | **str**| Find only the series whose type is equal to this value. | [optional] 
 **sort** | **str**| Sort the series in the corresponding order. | [optional] [default to first_date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[SeriesEntity]**](SeriesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of series |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_series**
> SeriesEntity fetch_one_series(series_id, accept_language=accept_language)

Get one series by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.series_entity import SeriesEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SeriesApi(api_client)
    series_id = 56 # int | ID of the targeted series.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one series by ID
        api_response = api_instance.fetch_one_series(series_id, accept_language=accept_language)
        print("The response of SeriesApi->fetch_one_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SeriesApi->fetch_one_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series_id** | **int**| ID of the targeted series. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**SeriesEntity**](SeriesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one series |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

