# openapi_client.SchoolsApi

All URIs are relative to *https://api.schooldigger.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schools_get_all_schools20**](SchoolsApi.md#schools_get_all_schools20) | **GET** /v2.0/schools | Returns a list of schools
[**schools_get_school20**](SchoolsApi.md#schools_get_school20) | **GET** /v2.0/schools/{id} | Returns a detailed record for one school


# **schools_get_all_schools20**
> APISchoolList2 schools_get_all_schools20(st, app_id, app_key, q=q, q_search_school_name_only=q_search_school_name_only, district_id=district_id, level=level, city=city, zip=zip, is_magnet=is_magnet, is_charter=is_charter, is_virtual=is_virtual, is_title_i=is_title_i, is_title_i_schoolwide=is_title_i_schoolwide, near_latitude=near_latitude, near_longitude=near_longitude, near_address=near_address, distance_miles=distance_miles, boundary_latitude=boundary_latitude, boundary_longitude=boundary_longitude, boundary_address=boundary_address, is_in_boundary_only=is_in_boundary_only, box_latitude_nw=box_latitude_nw, box_longitude_nw=box_longitude_nw, box_latitude_se=box_latitude_se, box_longitude_se=box_longitude_se, page=page, per_page=per_page, sort_by=sort_by, include_unranked_schools_in_rank_sort=include_unranked_schools_in_rank_sort)

Returns a list of schools

Search the SchoolDigger database for schools. You may use any combination of criteria as query parameters.

### Example


```python
import openapi_client
from openapi_client.models.api_school_list2 import APISchoolList2
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
    api_instance = openapi_client.SchoolsApi(api_client)
    st = 'st_example' # str | Two character state (e.g. 'CA') - required
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key
    q = 'q_example' # str | Search term - note: will match school name or city (optional) (optional)
    q_search_school_name_only = True # bool | For parameter 'q', only search school names instead of school and city (optional) (optional)
    district_id = 'district_id_example' # str | Search for schools within this district (7 digit district id) (optional) (optional)
    level = 'level_example' # str | Search for schools at this level. Valid values: 'Elementary', 'Middle', 'High', 'Alt', 'Public', 'Private' (optional). 'Public' returns all Elementary, Middle, High and Alternative schools (optional)
    city = 'city_example' # str | Search for schools in this city (optional) (optional)
    zip = 'zip_example' # str | Search for schools in this 5-digit zip code (optional) (optional)
    is_magnet = True # bool | True = return only magnet schools, False = return only non-magnet schools (optional) (Pro, Enterprise API levels only) (optional)
    is_charter = True # bool | True = return only charter schools, False = return only non-charter schools (optional) (Pro, Enterprise API levels only) (optional)
    is_virtual = True # bool | True = return only virtual schools, False = return only non-virtual schools (optional) (Pro, Enterprise API levels only) (optional)
    is_title_i = True # bool | True = return only Title I schools, False = return only non-Title I schools (optional) (Pro, Enterprise API levels only) (optional)
    is_title_i_schoolwide = True # bool | True = return only Title I school-wide schools, False = return only non-Title I school-wide schools (optional) (Pro, Enterprise API levels only) (optional)
    near_latitude = 3.4 # float | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only.) (optional)
    near_longitude = 3.4 # float | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only.) (optional)
    near_address = 'near_address_example' # str | Search for schools within (distanceMiles) of this address. Example: '123 Main St. AnyTown CA 90001' (optional) (Pro, Enterprise API level only) IMPORTANT NOTE: If you have the lat/long of the address, use nearLatitude and nearLongitude instead for much faster response times (optional)
    distance_miles = 56 # int | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only) (optional)
    boundary_latitude = 3.4 # float | Search for schools that include this (boundaryLatitude)/(boundaryLongitude) in its attendance boundary (e.g. 44.982560) (optional) (Requires School Boundary API Plan add-on. Calls with this parameter supplied will count toward your monthly call limit.) (optional)
    boundary_longitude = 3.4 # float | Search for schools that include this (boundaryLatitude)/(boundaryLongitude) in its attendance boundary (e.g. -124.289185) (optional) (Requires School Boundary API Plan add-on. Calls with this parameter supplied will count toward your monthly call limit. (optional)
    boundary_address = 'boundary_address_example' # str | Full U.S. address: flag returned schools that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Requires School Boundary API Plan add-on. Calls with this parameter supplied will count toward your monthly call limit.) IMPORTANT NOTE: If you have the lat/long of the address, use boundaryLatitude and boundaryLongitude instead for much faster response times (optional)
    is_in_boundary_only = True # bool | Return only the schools that include given location (boundaryLatitude/boundaryLongitude) or (boundaryAddress) in its attendance boundary (Requires School Boundary API Plan add-on.) (optional)
    box_latitude_nw = 3.4 # float | Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    box_longitude_nw = 3.4 # float | Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    box_latitude_se = 3.4 # float | Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    box_longitude_se = 3.4 # float | Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    page = 56 # int | Page number to retrieve (optional, default: 1) (optional)
    per_page = 56 # int | Number of schools to retrieve on a page (50 max) (optional, default: 10) (optional)
    sort_by = 'sort_by_example' # str | Sort list. Values are: schoolname, distance, rank. For descending order, precede with '-' i.e. -schoolname (optional, default: schoolname) (optional)
    include_unranked_schools_in_rank_sort = True # bool | If sortBy is 'rank', this boolean determines if schools with no rank are included in the result (optional, default: false) (optional)

    try:
        # Returns a list of schools
        api_response = api_instance.schools_get_all_schools20(st, app_id, app_key, q=q, q_search_school_name_only=q_search_school_name_only, district_id=district_id, level=level, city=city, zip=zip, is_magnet=is_magnet, is_charter=is_charter, is_virtual=is_virtual, is_title_i=is_title_i, is_title_i_schoolwide=is_title_i_schoolwide, near_latitude=near_latitude, near_longitude=near_longitude, near_address=near_address, distance_miles=distance_miles, boundary_latitude=boundary_latitude, boundary_longitude=boundary_longitude, boundary_address=boundary_address, is_in_boundary_only=is_in_boundary_only, box_latitude_nw=box_latitude_nw, box_longitude_nw=box_longitude_nw, box_latitude_se=box_latitude_se, box_longitude_se=box_longitude_se, page=page, per_page=per_page, sort_by=sort_by, include_unranked_schools_in_rank_sort=include_unranked_schools_in_rank_sort)
        print("The response of SchoolsApi->schools_get_all_schools20:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchoolsApi->schools_get_all_schools20: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **st** | **str**| Two character state (e.g. &#39;CA&#39;) - required | 
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 
 **q** | **str**| Search term - note: will match school name or city (optional) | [optional] 
 **q_search_school_name_only** | **bool**| For parameter &#39;q&#39;, only search school names instead of school and city (optional) | [optional] 
 **district_id** | **str**| Search for schools within this district (7 digit district id) (optional) | [optional] 
 **level** | **str**| Search for schools at this level. Valid values: &#39;Elementary&#39;, &#39;Middle&#39;, &#39;High&#39;, &#39;Alt&#39;, &#39;Public&#39;, &#39;Private&#39; (optional). &#39;Public&#39; returns all Elementary, Middle, High and Alternative schools | [optional] 
 **city** | **str**| Search for schools in this city (optional) | [optional] 
 **zip** | **str**| Search for schools in this 5-digit zip code (optional) | [optional] 
 **is_magnet** | **bool**| True &#x3D; return only magnet schools, False &#x3D; return only non-magnet schools (optional) (Pro, Enterprise API levels only) | [optional] 
 **is_charter** | **bool**| True &#x3D; return only charter schools, False &#x3D; return only non-charter schools (optional) (Pro, Enterprise API levels only) | [optional] 
 **is_virtual** | **bool**| True &#x3D; return only virtual schools, False &#x3D; return only non-virtual schools (optional) (Pro, Enterprise API levels only) | [optional] 
 **is_title_i** | **bool**| True &#x3D; return only Title I schools, False &#x3D; return only non-Title I schools (optional) (Pro, Enterprise API levels only) | [optional] 
 **is_title_i_schoolwide** | **bool**| True &#x3D; return only Title I school-wide schools, False &#x3D; return only non-Title I school-wide schools (optional) (Pro, Enterprise API levels only) | [optional] 
 **near_latitude** | **float**| Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only.) | [optional] 
 **near_longitude** | **float**| Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only.) | [optional] 
 **near_address** | **str**| Search for schools within (distanceMiles) of this address. Example: &#39;123 Main St. AnyTown CA 90001&#39; (optional) (Pro, Enterprise API level only) IMPORTANT NOTE: If you have the lat/long of the address, use nearLatitude and nearLongitude instead for much faster response times | [optional] 
 **distance_miles** | **int**| Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only) | [optional] 
 **boundary_latitude** | **float**| Search for schools that include this (boundaryLatitude)/(boundaryLongitude) in its attendance boundary (e.g. 44.982560) (optional) (Requires School Boundary API Plan add-on. Calls with this parameter supplied will count toward your monthly call limit.) | [optional] 
 **boundary_longitude** | **float**| Search for schools that include this (boundaryLatitude)/(boundaryLongitude) in its attendance boundary (e.g. -124.289185) (optional) (Requires School Boundary API Plan add-on. Calls with this parameter supplied will count toward your monthly call limit. | [optional] 
 **boundary_address** | **str**| Full U.S. address: flag returned schools that include this address in its attendance boundary. Example: &#39;123 Main St. AnyTown CA 90001&#39; (optional) (Requires School Boundary API Plan add-on. Calls with this parameter supplied will count toward your monthly call limit.) IMPORTANT NOTE: If you have the lat/long of the address, use boundaryLatitude and boundaryLongitude instead for much faster response times | [optional] 
 **is_in_boundary_only** | **bool**| Return only the schools that include given location (boundaryLatitude/boundaryLongitude) or (boundaryAddress) in its attendance boundary (Requires School Boundary API Plan add-on.) | [optional] 
 **box_latitude_nw** | **float**| Search for schools within a &#39;box&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [optional] 
 **box_longitude_nw** | **float**| Search for schools within a &#39;box&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [optional] 
 **box_latitude_se** | **float**| Search for schools within a &#39;box&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [optional] 
 **box_longitude_se** | **float**| Search for schools within a &#39;box&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [optional] 
 **page** | **int**| Page number to retrieve (optional, default: 1) | [optional] 
 **per_page** | **int**| Number of schools to retrieve on a page (50 max) (optional, default: 10) | [optional] 
 **sort_by** | **str**| Sort list. Values are: schoolname, distance, rank. For descending order, precede with &#39;-&#39; i.e. -schoolname (optional, default: schoolname) | [optional] 
 **include_unranked_schools_in_rank_sort** | **bool**| If sortBy is &#39;rank&#39;, this boolean determines if schools with no rank are included in the result (optional, default: false) | [optional] 

### Return type

[**APISchoolList2**](APISchoolList2.md)

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

# **schools_get_school20**
> APISchool20Full schools_get_school20(id, app_id, app_key)

Returns a detailed record for one school

Retrieve a school record from the SchoolDigger database

### Example


```python
import openapi_client
from openapi_client.models.api_school20_full import APISchool20Full
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
    api_instance = openapi_client.SchoolsApi(api_client)
    id = 'id_example' # str | The 12 digit School ID (e.g. 064215006903)
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key

    try:
        # Returns a detailed record for one school
        api_response = api_instance.schools_get_school20(id, app_id, app_key)
        print("The response of SchoolsApi->schools_get_school20:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchoolsApi->schools_get_school20: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The 12 digit School ID (e.g. 064215006903) | 
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 

### Return type

[**APISchool20Full**](APISchool20Full.md)

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

