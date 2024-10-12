# openapi_client.VenuesApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_venues**](VenuesApi.md#fetch_all_venues) | **GET** /venues | Find all venues
[**fetch_one_venue**](VenuesApi.md#fetch_one_venue) | **GET** /venues/{venue_id} | Get one venue by ID


# **fetch_all_venues**
> List[VenuesEntity] fetch_all_venues(label=label, city=city, country_code=country_code, type=type, sort=sort, page_size=page_size, accept_language=accept_language)

Find all venues

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.venues_entity import VenuesEntity
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
    api_instance = openapi_client.VenuesApi(api_client)
    label = 'label_example' # str | Find only the venues whose label contains this value. (optional)
    city = 'city_example' # str | Find only the venues whose city contains this value. (optional)
    country_code = 'country_code_example' # str | Find only the venues whose country_code is equal to this value. (optional)
    type = 'type_example' # str | Find only the venues whose type is equal to this value. (optional)
    sort = label # str | Sort the venues in the corresponding order. (optional) (default to label)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all venues
        api_response = api_instance.fetch_all_venues(label=label, city=city, country_code=country_code, type=type, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of VenuesApi->fetch_all_venues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VenuesApi->fetch_all_venues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the venues whose label contains this value. | [optional] 
 **city** | **str**| Find only the venues whose city contains this value. | [optional] 
 **country_code** | **str**| Find only the venues whose country_code is equal to this value. | [optional] 
 **type** | **str**| Find only the venues whose type is equal to this value. | [optional] 
 **sort** | **str**| Sort the venues in the corresponding order. | [optional] [default to label]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[VenuesEntity]**](VenuesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of venues |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_venue**
> VenuesEntity fetch_one_venue(venue_id, accept_language=accept_language)

Get one venue by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.venues_entity import VenuesEntity
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
    api_instance = openapi_client.VenuesApi(api_client)
    venue_id = 56 # int | ID of the targeted venue.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one venue by ID
        api_response = api_instance.fetch_one_venue(venue_id, accept_language=accept_language)
        print("The response of VenuesApi->fetch_one_venue:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VenuesApi->fetch_one_venue: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venue_id** | **int**| ID of the targeted venue. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**VenuesEntity**](VenuesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one venue |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

