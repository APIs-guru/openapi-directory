# openapi_client.NeighborhoodInAStreetApi

All URIs are relative to *https://mtaa-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**neighborhood_in_a_street**](NeighborhoodInAStreetApi.md#neighborhood_in_a_street) | **GET** /{country}/{region}/{district}/{ward}/{street} | Returns all neighborhood in a street


# **neighborhood_in_a_street**
> neighborhood_in_a_street(country, region, district, ward, street)

Returns all neighborhood in a street

Returns all neighborhood in a specified street

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
    api_instance = openapi_client.NeighborhoodInAStreetApi(api_client)
    country = 'country_example' # str | Country name in lowercase eg( tanzania)
    region = 'region_example' # str | Name of the region eg (Mbeya)
    district = 'district_example' # str | Name of the District eg (Rungwe)
    ward = 'ward_example' # str | Name of the Ward eg (Kiwira)
    street = 'street_example' # str | Name of the Street eg (Ilundo)

    try:
        # Returns all neighborhood in a street
        api_instance.neighborhood_in_a_street(country, region, district, ward, street)
    except Exception as e:
        print("Exception when calling NeighborhoodInAStreetApi->neighborhood_in_a_street: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| Country name in lowercase eg( tanzania) | 
 **region** | **str**| Name of the region eg (Mbeya) | 
 **district** | **str**| Name of the District eg (Rungwe) | 
 **ward** | **str**| Name of the Ward eg (Kiwira) | 
 **street** | **str**| Name of the Street eg (Ilundo) | 

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

