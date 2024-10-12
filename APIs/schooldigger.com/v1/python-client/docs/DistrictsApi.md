# openapi_client.DistrictsApi

All URIs are relative to *https://api.schooldigger.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**districts_get_all_districts**](DistrictsApi.md#districts_get_all_districts) | **GET** /v1/districts | Returns a list of districts
[**districts_get_district**](DistrictsApi.md#districts_get_district) | **GET** /v1/districts/{id} | Returns a detailed record for one district


# **districts_get_all_districts**
> APIDistrictList districts_get_all_districts(st, app_id, app_key, q=q, city=city, zip=zip, near_latitude=near_latitude, near_longitude=near_longitude, boundary_address=boundary_address, distance_miles=distance_miles, is_in_boundary_only=is_in_boundary_only, box_latitude_nw=box_latitude_nw, box_longitude_nw=box_longitude_nw, box_latitude_se=box_latitude_se, box_longitude_se=box_longitude_se, page=page, per_page=per_page, sort_by=sort_by, include_unranked_districts_in_rank_sort=include_unranked_districts_in_rank_sort)

Returns a list of districts

Search the SchoolDigger database for districts. You may use any combination of criteria as query parameters.

### Example


```python
import openapi_client
from openapi_client.models.api_district_list import APIDistrictList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.schooldigger.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.schooldigger.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistrictsApi(api_client)
    st = 'st_example' # str | Two character state (e.g. 'CA') - required
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key
    q = 'q_example' # str | Search term - note: will match district name or city (optional) (optional)
    city = 'city_example' # str | Search for districts in this city (optional) (optional)
    zip = 'zip_example' # str | Search for districts in this 5-digit zip code (optional) (optional)
    near_latitude = 3.4 # float | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) (optional)
    near_longitude = 3.4 # float | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) (optional)
    boundary_address = 'boundary_address_example' # str | Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only) (optional)
    distance_miles = 56 # int | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 50 miles) (optional) (Pro, Enterprise API levels only) (optional)
    is_in_boundary_only = True # bool | Return only the districts that include given location (nearLatitude/nearLongitude) or (boundaryAddress) in its attendance boundary (Enterprise API level only) (optional)
    box_latitude_nw = 3.4 # float | Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    box_longitude_nw = 3.4 # float | Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    box_latitude_se = 3.4 # float | Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    box_longitude_se = 3.4 # float | Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    page = 56 # int | Page number to retrieve (optional, default: 1) (optional)
    per_page = 56 # int | Number of districts to retrieve on a page (50 max) (optional, default: 10) (optional)
    sort_by = 'sort_by_example' # str | Sort list. Values are: districtname, distance, rank. For descending order, precede with '-' i.e. -districtname (optional, default: districtname) (optional)
    include_unranked_districts_in_rank_sort = True # bool | If sortBy is 'rank', this boolean determines if districts with no rank are included in the result (optional, default: false) (optional)

    try:
        # Returns a list of districts
        api_response = api_instance.districts_get_all_districts(st, app_id, app_key, q=q, city=city, zip=zip, near_latitude=near_latitude, near_longitude=near_longitude, boundary_address=boundary_address, distance_miles=distance_miles, is_in_boundary_only=is_in_boundary_only, box_latitude_nw=box_latitude_nw, box_longitude_nw=box_longitude_nw, box_latitude_se=box_latitude_se, box_longitude_se=box_longitude_se, page=page, per_page=per_page, sort_by=sort_by, include_unranked_districts_in_rank_sort=include_unranked_districts_in_rank_sort)
        print("The response of DistrictsApi->districts_get_all_districts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistrictsApi->districts_get_all_districts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **st** | **str**| Two character state (e.g. &#39;CA&#39;) - required | 
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 
 **q** | **str**| Search term - note: will match district name or city (optional) | [optional] 
 **city** | **str**| Search for districts in this city (optional) | [optional] 
 **zip** | **str**| Search for districts in this 5-digit zip code (optional) | [optional] 
 **near_latitude** | **float**| Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) | [optional] 
 **near_longitude** | **float**| Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) | [optional] 
 **boundary_address** | **str**| Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: &#39;123 Main St. AnyTown CA 90001&#39; (optional) (Enterprise API level only) | [optional] 
 **distance_miles** | **int**| Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 50 miles) (optional) (Pro, Enterprise API levels only) | [optional] 
 **is_in_boundary_only** | **bool**| Return only the districts that include given location (nearLatitude/nearLongitude) or (boundaryAddress) in its attendance boundary (Enterprise API level only) | [optional] 
 **box_latitude_nw** | **float**| Search for districts within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [optional] 
 **box_longitude_nw** | **float**| Search for districts within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [optional] 
 **box_latitude_se** | **float**| Search for districts within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [optional] 
 **box_longitude_se** | **float**| Search for districts within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [optional] 
 **page** | **int**| Page number to retrieve (optional, default: 1) | [optional] 
 **per_page** | **int**| Number of districts to retrieve on a page (50 max) (optional, default: 10) | [optional] 
 **sort_by** | **str**| Sort list. Values are: districtname, distance, rank. For descending order, precede with &#39;-&#39; i.e. -districtname (optional, default: districtname) | [optional] 
 **include_unranked_districts_in_rank_sort** | **bool**| If sortBy is &#39;rank&#39;, this boolean determines if districts with no rank are included in the result (optional, default: false) | [optional] 

### Return type

[**APIDistrictList**](APIDistrictList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **districts_get_district**
> APIDistrict districts_get_district(id, app_id, app_key)

Returns a detailed record for one district

Retrieve a single district record from the SchoolDigger database

### Example


```python
import openapi_client
from openapi_client.models.api_district import APIDistrict
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.schooldigger.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.schooldigger.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistrictsApi(api_client)
    id = 'id_example' # str | The 7 digit District ID (e.g. 0642150)
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key

    try:
        # Returns a detailed record for one district
        api_response = api_instance.districts_get_district(id, app_id, app_key)
        print("The response of DistrictsApi->districts_get_district:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistrictsApi->districts_get_district: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The 7 digit District ID (e.g. 0642150) | 
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 

### Return type

[**APIDistrict**](APIDistrict.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

