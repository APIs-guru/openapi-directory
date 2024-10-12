# openapi_client.GroupsApi

All URIs are relative to *https://trashnothing.com/api/v1.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_group**](GroupsApi.md#get_group) | **GET** /groups/{group_id} | Retrieve a group
[**get_groups_by_ids**](GroupsApi.md#get_groups_by_ids) | **GET** /groups/multiple | Retrieve multiple groups
[**search_groups**](GroupsApi.md#search_groups) | **GET** /groups | Search groups


# **get_group**
> Group get_group(group_id)

Retrieve a group

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = 'group_id_example' # str | The ID of the group to retrieve.

    try:
        # Retrieve a group
        api_response = api_instance.get_group(group_id)
        print("The response of GroupsApi->get_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The ID of the group to retrieve. | 

### Return type

[**Group**](Group.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The group. |  -  |
**404** | Group not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_groups_by_ids**
> List[Group] get_groups_by_ids(group_ids)

Retrieve multiple groups

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_ids = 'group_ids_example' # str | The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.

    try:
        # Retrieve multiple groups
        api_response = api_instance.get_groups_by_ids(group_ids)
        print("The response of GroupsApi->get_groups_by_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_groups_by_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_ids** | **str**| The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned. | 

### Return type

[**List[Group]**](Group.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The groups. |  -  |
**400** | Missing or invalid parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_groups**
> SearchGroups200Response search_groups(name=name, latitude=latitude, longitude=longitude, distance=distance, country=country, region=region, postal_code=postal_code, page=page, per_page=per_page)

Search groups

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.search_groups200_response import SearchGroups200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    name = 'name_example' # str | Find groups that have the given text somewhere in their name (case insensitive). (optional)
    latitude = 3.4 # float | Find groups near the given latitude and longitude. (optional)
    longitude = 3.4 # float | Find groups near the given latitude and longitude. (optional)
    distance = 100 # float | When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.  (optional) (default to 100)
    country = 'country_example' # str | Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).  (optional)
    region = 'region_example' # str | For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv  (optional)
    postal_code = 'postal_code_example' # str | Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.  (optional)
    page = 1 # int | The page of groups to return. (optional) (default to 1)
    per_page = 20 # int | The number of groups to return per page (must be >= 1 and <= 100). (optional) (default to 20)

    try:
        # Search groups
        api_response = api_instance.search_groups(name=name, latitude=latitude, longitude=longitude, distance=distance, country=country, region=region, postal_code=postal_code, page=page, per_page=per_page)
        print("The response of GroupsApi->search_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->search_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Find groups that have the given text somewhere in their name (case insensitive). | [optional] 
 **latitude** | **float**| Find groups near the given latitude and longitude. | [optional] 
 **longitude** | **float**| Find groups near the given latitude and longitude. | [optional] 
 **distance** | **float**| When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be &gt; 0 and &lt;&#x3D; 150 and will default to 100.  | [optional] [default to 100]
 **country** | **str**| Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).  | [optional] 
 **region** | **str**| For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. &lt;br /&gt;&lt;br /&gt; NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. &lt;br /&gt;&lt;br /&gt; --- &lt;br /&gt;&lt;br /&gt; **AU**&lt;br /&gt; - QLD: Queensland&lt;br /&gt; - SA: South Australia&lt;br /&gt; - TAS: Tasmania&lt;br /&gt; - VIC: Victoria&lt;br /&gt; - WA: Western Australia&lt;br /&gt; - NT: Northern Territory&lt;br /&gt; - NSW: New South Wales - ACT&lt;br /&gt; &lt;br /&gt; **CA**&lt;br /&gt; - AB: Alberta&lt;br /&gt; - BC: British Columbia&lt;br /&gt; - MB: Manitoba&lt;br /&gt; - NB: New Brunswick&lt;br /&gt; - NL: Newfoundland and Labrador&lt;br /&gt; - NS: Nova Scotia&lt;br /&gt; - ON: Ontario&lt;br /&gt; - QC: Quebec&lt;br /&gt; - SK: Saskatchewan&lt;br /&gt; - PE: Prince Edward Island&lt;br /&gt; &lt;br /&gt; **GB**&lt;br /&gt; - E: East&lt;br /&gt; - EM: East Midlands&lt;br /&gt; - LDN: London&lt;br /&gt; - NE: North East&lt;br /&gt; - NW: North West&lt;br /&gt; - NI: Northern Ireland&lt;br /&gt; - SC: Scotland&lt;br /&gt; - SE: South East&lt;br /&gt; - SW: South West&lt;br /&gt; - WA: Wales&lt;br /&gt; - WM: West Midlands&lt;br /&gt; - YH: Yorkshire and the Humber&lt;br /&gt; &lt;br /&gt; **US**&lt;br /&gt; All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv  | [optional] 
 **postal_code** | **str**| Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. &lt;br /&gt;&lt;br /&gt; NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.  | [optional] 
 **page** | **int**| The page of groups to return. | [optional] [default to 1]
 **per_page** | **int**| The number of groups to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 100). | [optional] [default to 20]

### Return type

[**SearchGroups200Response**](SearchGroups200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The groups and paging data. |  -  |
**400** | Missing or invalid parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

