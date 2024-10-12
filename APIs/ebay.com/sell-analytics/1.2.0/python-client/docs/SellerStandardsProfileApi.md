# openapi_client.SellerStandardsProfileApi

All URIs are relative to *https://api.ebay.com/sell/analytics/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_seller_standards_profiles**](SellerStandardsProfileApi.md#find_seller_standards_profiles) | **GET** /seller_standards_profile | 
[**get_seller_standards_profile**](SellerStandardsProfileApi.md#get_seller_standards_profile) | **GET** /seller_standards_profile/{program}/{cycle} | 


# **find_seller_standards_profiles**
> FindSellerStandardsProfilesResponse find_seller_standards_profiles()



This call retrieves all the standards profiles for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller's multiple profiles are distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation or at the time of the request.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.find_seller_standards_profiles_response import FindSellerStandardsProfilesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/analytics/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/analytics/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SellerStandardsProfileApi(api_client)

    try:
        api_response = api_instance.find_seller_standards_profiles()
        print("The response of SellerStandardsProfileApi->find_seller_standards_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SellerStandardsProfileApi->find_seller_standards_profiles: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**FindSellerStandardsProfilesResponse**](FindSellerStandardsProfilesResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_seller_standards_profile**
> StandardsProfile get_seller_standards_profile(cycle, program)



This call retrieves a single standards profile for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller can have multiple profiles distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation (CURRENT) or at the time of the request (PROJECTED). Both cycle and a program values are required URI parameters for this method.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.standards_profile import StandardsProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/analytics/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/analytics/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SellerStandardsProfileApi(api_client)
    cycle = 'cycle_example' # str | The period covered by the returned standards profile evaluation. Supply one of two values, CURRENT means the response reflects eBay's most recent monthly standards evaluation and PROJECTED means the response reflect the seller's projected monthly evaluation, as calculated at the time of the request.
    program = 'program_example' # str | This input value specifies the region used to determine the seller's standards profile. Supply one of the four following values, PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL.

    try:
        api_response = api_instance.get_seller_standards_profile(cycle, program)
        print("The response of SellerStandardsProfileApi->get_seller_standards_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SellerStandardsProfileApi->get_seller_standards_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cycle** | **str**| The period covered by the returned standards profile evaluation. Supply one of two values, CURRENT means the response reflects eBay&#39;s most recent monthly standards evaluation and PROJECTED means the response reflect the seller&#39;s projected monthly evaluation, as calculated at the time of the request. | 
 **program** | **str**| This input value specifies the region used to determine the seller&#39;s standards profile. Supply one of the four following values, PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL. | 

### Return type

[**StandardsProfile**](StandardsProfile.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**404** | Resource not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

