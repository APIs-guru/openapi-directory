# openapi_client.DealershipDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dealers_get_dealers_by_id_get**](DealershipDataApi.md#get_dealers_get_dealers_by_id_get) | **GET** /getDealersByID | Premium. Dealers by ID
[**get_dealers_get_dealers_by_region_get**](DealershipDataApi.md#get_dealers_get_dealers_by_region_get) | **GET** /getDealersByRegion | Premium. Dealers in a region.
[**get_dealers_get_dealers_get**](DealershipDataApi.md#get_dealers_get_dealers_get) | **GET** /getDealers | Premium. Dealers in a zip code.


# **get_dealers_get_dealers_by_id_get**
> DealershipDataResp get_dealers_get_dealers_by_id_get(jwt, dealer_id)

Premium. Dealers by ID

Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint. Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.

### Example


```python
import openapi_client
from openapi_client.models.dealership_data_resp import DealershipDataResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DealershipDataApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 

    try:
        # Premium. Dealers by ID
        api_response = api_instance.get_dealers_get_dealers_by_id_get(jwt, dealer_id)
        print("The response of DealershipDataApi->get_dealers_get_dealers_by_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealershipDataApi->get_dealers_get_dealers_by_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | 

### Return type

[**DealershipDataResp**](DealershipDataResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dealers_get_dealers_by_region_get**
> DealershipDataPaginatedResp get_dealers_get_dealers_by_region_get(jwt, region_name=region_name, page=page)

Premium. Dealers in a region.

Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.

### Example


```python
import openapi_client
from openapi_client.models.dealership_data_paginated_resp import DealershipDataPaginatedResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DealershipDataApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    page = 1 # int |  (optional) (default to 1)

    try:
        # Premium. Dealers in a region.
        api_response = api_instance.get_dealers_get_dealers_by_region_get(jwt, region_name=region_name, page=page)
        print("The response of DealershipDataApi->get_dealers_get_dealers_by_region_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealershipDataApi->get_dealers_get_dealers_by_region_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]
 **page** | **int**|  | [optional] [default to 1]

### Return type

[**DealershipDataPaginatedResp**](DealershipDataPaginatedResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dealers_get_dealers_get**
> DealershipDataResp get_dealers_get_dealers_get(jwt, zip_code)

Premium. Dealers in a zip code.

Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs. For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]

### Example


```python
import openapi_client
from openapi_client.models.dealership_data_resp import DealershipDataResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DealershipDataApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 

    try:
        # Premium. Dealers in a zip code.
        api_response = api_instance.get_dealers_get_dealers_get(jwt, zip_code)
        print("The response of DealershipDataApi->get_dealers_get_dealers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealershipDataApi->get_dealers_get_dealers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **zip_code** | **int**|  | 

### Return type

[**DealershipDataResp**](DealershipDataResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

