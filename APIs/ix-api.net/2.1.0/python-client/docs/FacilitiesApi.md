# openapi_client.FacilitiesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facilities_list**](FacilitiesApi.md#facilities_list) | **GET** /facilities | 
[**facilities_read**](FacilitiesApi.md#facilities_read) | **GET** /facilities/{id} | 


# **facilities_list**
> List[Facility] facilities_list(id=id, capability_media_type=capability_media_type, capability_speed=capability_speed, capability_speed__lt=capability_speed__lt, capability_speed__lte=capability_speed__lte, capability_speed__gt=capability_speed__gt, capability_speed__gte=capability_speed__gte, organisation_name=organisation_name, metro_area=metro_area, metro_area_network=metro_area_network, address_country=address_country, address_locality=address_locality, postal_code=postal_code)



Get a (filtered) list of `facilities`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.facility import Facility
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FacilitiesApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    capability_media_type = 'capability_media_type_example' # str | Filter by capability_media_type (optional)
    capability_speed = 56 # int | Filter by capability_speed (optional)
    capability_speed__lt = 56 # int | Filter by capability_speed__lt (optional)
    capability_speed__lte = 56 # int | Filter by capability_speed__lte (optional)
    capability_speed__gt = 56 # int | Filter by capability_speed__gt (optional)
    capability_speed__gte = 56 # int | Filter by capability_speed__gte (optional)
    organisation_name = 'organisation_name_example' # str | Filter by organisation_name (optional)
    metro_area = 'metro_area_example' # str | Filter by metro_area (optional)
    metro_area_network = 'metro_area_network_example' # str | Filter by metro_area_network (optional)
    address_country = 'address_country_example' # str | Filter by address_country (optional)
    address_locality = 'address_locality_example' # str | Filter by address_locality (optional)
    postal_code = 'postal_code_example' # str | Filter by postal_code (optional)

    try:
        api_response = api_instance.facilities_list(id=id, capability_media_type=capability_media_type, capability_speed=capability_speed, capability_speed__lt=capability_speed__lt, capability_speed__lte=capability_speed__lte, capability_speed__gt=capability_speed__gt, capability_speed__gte=capability_speed__gte, organisation_name=organisation_name, metro_area=metro_area, metro_area_network=metro_area_network, address_country=address_country, address_locality=address_locality, postal_code=postal_code)
        print("The response of FacilitiesApi->facilities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FacilitiesApi->facilities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **capability_media_type** | **str**| Filter by capability_media_type | [optional] 
 **capability_speed** | **int**| Filter by capability_speed | [optional] 
 **capability_speed__lt** | **int**| Filter by capability_speed__lt | [optional] 
 **capability_speed__lte** | **int**| Filter by capability_speed__lte | [optional] 
 **capability_speed__gt** | **int**| Filter by capability_speed__gt | [optional] 
 **capability_speed__gte** | **int**| Filter by capability_speed__gte | [optional] 
 **organisation_name** | **str**| Filter by organisation_name | [optional] 
 **metro_area** | **str**| Filter by metro_area | [optional] 
 **metro_area_network** | **str**| Filter by metro_area_network | [optional] 
 **address_country** | **str**| Filter by address_country | [optional] 
 **address_locality** | **str**| Filter by address_locality | [optional] 
 **postal_code** | **str**| Filter by postal_code | [optional] 

### Return type

[**List[Facility]**](Facility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Facility |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilities_read**
> List[Facility] facilities_read(id)



Retrieve a facility by id

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.facility import Facility
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FacilitiesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.facilities_read(id)
        print("The response of FacilitiesApi->facilities_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FacilitiesApi->facilities_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**List[Facility]**](Facility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Facility |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

