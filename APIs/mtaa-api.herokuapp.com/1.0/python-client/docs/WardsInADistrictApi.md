# openapi_client.WardsInADistrictApi

All URIs are relative to *https://mtaa-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wards_in_a_district**](WardsInADistrictApi.md#wards_in_a_district) | **GET** /{country}/{region}/{district} | Returns all wards in a district


# **wards_in_a_district**
> wards_in_a_district(country, region, district)

Returns all wards in a district

Returns all wards in a  specified district and district postcode

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mtaa-api.herokuapp.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mtaa-api.herokuapp.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WardsInADistrictApi(api_client)
    country = 'country_example' # str | Country name in lowercase eg( tanzania)
    region = 'region_example' # str | Name of the region eg (Mbeya)
    district = 'district_example' # str | Name of the District eg (Rungwe)

    try:
        # Returns all wards in a district
        api_instance.wards_in_a_district(country, region, district)
    except Exception as e:
        print("Exception when calling WardsInADistrictApi->wards_in_a_district: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| Country name in lowercase eg( tanzania) | 
 **region** | **str**| Name of the region eg (Mbeya) | 
 **district** | **str**| Name of the District eg (Rungwe) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Resource not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

