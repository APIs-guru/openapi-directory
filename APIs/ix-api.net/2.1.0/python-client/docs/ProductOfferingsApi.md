# openapi_client.ProductOfferingsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_offerings_list**](ProductOfferingsApi.md#product_offerings_list) | **GET** /product-offerings | 
[**product_offerings_read**](ProductOfferingsApi.md#product_offerings_read) | **GET** /product-offerings/{id} | 


# **product_offerings_list**
> List[ProductOfferingPartial] product_offerings_list(id=id, type=type, name=name, handover_metro_area=handover_metro_area, handover_metro_area_network=handover_metro_area_network, service_metro_area=service_metro_area, service_metro_area_network=service_metro_area_network, service_provider=service_provider, downgrade_allowed=downgrade_allowed, upgrade_allowed=upgrade_allowed, bandwidth=bandwidth, physical_port_speed=physical_port_speed, service_provider_region=service_provider_region, service_provider_pop=service_provider_pop, delivery_method=delivery_method, cloud_key=cloud_key, fields=fields)



List all (filtered) products-offerings available on the platform

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.product_offering_partial import ProductOfferingPartial
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
    api_instance = openapi_client.ProductOfferingsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    type = 'type_example' # str | Filter by type (optional)
    name = 'name_example' # str | Filter by name (optional)
    handover_metro_area = 'handover_metro_area_example' # str | Filter by handover_metro_area (optional)
    handover_metro_area_network = 'handover_metro_area_network_example' # str | Filter by handover_metro_area_network (optional)
    service_metro_area = 'service_metro_area_example' # str | Filter by service_metro_area (optional)
    service_metro_area_network = 'service_metro_area_network_example' # str | Filter by service_metro_area_network (optional)
    service_provider = 'service_provider_example' # str | Filter by service_provider (optional)
    downgrade_allowed = 'downgrade_allowed_example' # str | Filter by downgrade_allowed (optional)
    upgrade_allowed = 'upgrade_allowed_example' # str | Filter by upgrade_allowed (optional)
    bandwidth = 56 # int | Find product offerings where bandwidth is within the range of `bandwidth_min` and `bandwidth_max`. (optional)
    physical_port_speed = 56 # int | Filter by physical_port_speed (optional)
    service_provider_region = 'service_provider_region_example' # str | Filter by service_provider_region (optional)
    service_provider_pop = 'service_provider_pop_example' # str | Filter by service_provider_pop (optional)
    delivery_method = 'delivery_method_example' # str | Filter by delivery_method (optional)
    cloud_key = 'cloud_key_example' # str | For product offerings of type `cloud_vc`, if the `service_provider_workflow` is `provider_first` the `cloud_key` will be used for filtering the relevant offerings. (optional)
    fields = 'handover_metro_area,service_provider' # str | Returned objects only have properties which are present in the list of fields. The required `type` property is *implicitly* included. The results are *deduplicated*.  (optional)

    try:
        api_response = api_instance.product_offerings_list(id=id, type=type, name=name, handover_metro_area=handover_metro_area, handover_metro_area_network=handover_metro_area_network, service_metro_area=service_metro_area, service_metro_area_network=service_metro_area_network, service_provider=service_provider, downgrade_allowed=downgrade_allowed, upgrade_allowed=upgrade_allowed, bandwidth=bandwidth, physical_port_speed=physical_port_speed, service_provider_region=service_provider_region, service_provider_pop=service_provider_pop, delivery_method=delivery_method, cloud_key=cloud_key, fields=fields)
        print("The response of ProductOfferingsApi->product_offerings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOfferingsApi->product_offerings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **type** | **str**| Filter by type | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **handover_metro_area** | **str**| Filter by handover_metro_area | [optional] 
 **handover_metro_area_network** | **str**| Filter by handover_metro_area_network | [optional] 
 **service_metro_area** | **str**| Filter by service_metro_area | [optional] 
 **service_metro_area_network** | **str**| Filter by service_metro_area_network | [optional] 
 **service_provider** | **str**| Filter by service_provider | [optional] 
 **downgrade_allowed** | **str**| Filter by downgrade_allowed | [optional] 
 **upgrade_allowed** | **str**| Filter by upgrade_allowed | [optional] 
 **bandwidth** | **int**| Find product offerings where bandwidth is within the range of &#x60;bandwidth_min&#x60; and &#x60;bandwidth_max&#x60;. | [optional] 
 **physical_port_speed** | **int**| Filter by physical_port_speed | [optional] 
 **service_provider_region** | **str**| Filter by service_provider_region | [optional] 
 **service_provider_pop** | **str**| Filter by service_provider_pop | [optional] 
 **delivery_method** | **str**| Filter by delivery_method | [optional] 
 **cloud_key** | **str**| For product offerings of type &#x60;cloud_vc&#x60;, if the &#x60;service_provider_workflow&#x60; is &#x60;provider_first&#x60; the &#x60;cloud_key&#x60; will be used for filtering the relevant offerings. | [optional] 
 **fields** | **str**| Returned objects only have properties which are present in the list of fields. The required &#x60;type&#x60; property is *implicitly* included. The results are *deduplicated*.  | [optional] 

### Return type

[**List[ProductOfferingPartial]**](ProductOfferingPartial.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Polymorphic Product Offering |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_offerings_read**
> ProductOffering product_offerings_read(id)



Get a single products-offering by id.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.product_offering import ProductOffering
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
    api_instance = openapi_client.ProductOfferingsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.product_offerings_read(id)
        print("The response of ProductOfferingsApi->product_offerings_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOfferingsApi->product_offerings_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**ProductOffering**](ProductOffering.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Product Offering |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

