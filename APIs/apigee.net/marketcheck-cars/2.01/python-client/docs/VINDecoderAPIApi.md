# openapi_client.VINDecoderAPIApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decode**](VINDecoderAPIApi.md#decode) | **GET** /decode/car/{vin}/specs | VIN Decoder
[**decode_via_epi**](VINDecoderAPIApi.md#decode_via_epi) | **GET** /decode/car/epi/{vin}/specs | EPI VIN Decoder
[**decode_via_neo_vin**](VINDecoderAPIApi.md#decode_via_neo_vin) | **GET** /decode/car/neovin/{vin}/specs | NeoVIN Decoder
[**get_taxonomy_terms**](VINDecoderAPIApi.md#get_taxonomy_terms) | **GET** /specs/car/terms | API for getting terms from taxonomy
[**specs_car_auto_complete_get**](VINDecoderAPIApi.md#specs_car_auto_complete_get) | **GET** /specs/car/auto-complete | API for auto-completion of inputs based on taxonomy


# **decode**
> Build decode(vin, api_key=api_key)

VIN Decoder

Get the basic information on specifications for a car identified by a valid VIN

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VINDecoderAPIApi(api_client)
    vin = 'vin_example' # str | The VIN to identify the car. Must be a valid 17 char VIN
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # VIN Decoder
        api_response = api_instance.decode(vin, api_key=api_key)
        print("The response of VINDecoderAPIApi->decode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VINDecoderAPIApi->decode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **str**| The VIN to identify the car. Must be a valid 17 char VIN | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**Build**](Build.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Basic sepcifications details about the car |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decode_via_epi**
> Build decode_via_epi(vin, api_key=api_key)

EPI VIN Decoder

Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VINDecoderAPIApi(api_client)
    vin = 'vin_example' # str | The VIN to identify the car. Must be a valid 17 char VIN
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # EPI VIN Decoder
        api_response = api_instance.decode_via_epi(vin, api_key=api_key)
        print("The response of VINDecoderAPIApi->decode_via_epi:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VINDecoderAPIApi->decode_via_epi: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **str**| The VIN to identify the car. Must be a valid 17 char VIN | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**Build**](Build.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Basic sepcifications details about the car |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decode_via_neo_vin**
> NeoVIN decode_via_neo_vin(vin, api_key=api_key, include_generic=include_generic, force_decode=force_decode)

NeoVIN Decoder

Get the basic information on specifications for a car identified by a valid VIN from NeoVIN decoder

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.neo_vin import NeoVIN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VINDecoderAPIApi(api_client)
    vin = 'vin_example' # str | The VIN to identify the car. Must be a valid 17 char VIN
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    include_generic = False # bool | Boolean variable to indicate wheather to include generic data as well in response (optional) (default to False)
    force_decode = False # bool | Decode VIN on the fly instead of cached response (optional) (default to False)

    try:
        # NeoVIN Decoder
        api_response = api_instance.decode_via_neo_vin(vin, api_key=api_key, include_generic=include_generic, force_decode=force_decode)
        print("The response of VINDecoderAPIApi->decode_via_neo_vin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VINDecoderAPIApi->decode_via_neo_vin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **str**| The VIN to identify the car. Must be a valid 17 char VIN | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **include_generic** | **bool**| Boolean variable to indicate wheather to include generic data as well in response | [optional] [default to False]
 **force_decode** | **bool**| Decode VIN on the fly instead of cached response | [optional] [default to False]

### Return type

[**NeoVIN**](NeoVIN.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Basic sepcifications details about the car |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_taxonomy_terms**
> SpecsAutoCompleteResponse get_taxonomy_terms(var_field, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, engine=engine, engine_size=engine_size, engine_block=engine_block)

API for getting terms from taxonomy

Facets on taxonomy

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.specs_auto_complete_response import SpecsAutoCompleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VINDecoderAPIApi(api_client)
    var_field = 'var_field_example' # str | Comma separated list of fields to get terms for
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    drivetrain = 'drivetrain_example' # str | To filter listing on their drivetrain (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    engine_size = 'engine_size_example' # str | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional)
    engine_block = 'engine_block_example' # str | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional)

    try:
        # API for getting terms from taxonomy
        api_response = api_instance.get_taxonomy_terms(var_field, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, engine=engine, engine_size=engine_size, engine_block=engine_block)
        print("The response of VINDecoderAPIApi->get_taxonomy_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VINDecoderAPIApi->get_taxonomy_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_field** | **str**| Comma separated list of fields to get terms for | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **drivetrain** | **str**| To filter listing on their drivetrain | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **engine_size** | **str**| Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | [optional] 
 **engine_block** | **str**| Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | [optional] 

### Return type

[**SpecsAutoCompleteResponse**](SpecsAutoCompleteResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of unique terms for specified fields |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **specs_car_auto_complete_get**
> SpecsAutoCompleteResponse specs_car_auto_complete_get(var_field, input, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, engine=engine, engine_size=engine_size, engine_block=engine_block, ignore_case=ignore_case, facet_min_count=facet_min_count)

API for auto-completion of inputs based on taxonomy

Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.specs_auto_complete_response import SpecsAutoCompleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VINDecoderAPIApi(api_client)
    var_field = 'var_field_example' # str | Field name for which you want auto-completion
    input = 'input_example' # str | Input entered so far
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    drivetrain = 'drivetrain_example' # str | To filter listing on their drivetrain (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    engine_size = 'engine_size_example' # str | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional)
    engine_block = 'engine_block_example' # str | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional)
    ignore_case = True # bool | Boolean variable to indicate ignore case of current input (optional) (default to True)
    facet_min_count = 1 # float | Provide minimum count value for facets (optional) (default to 1)

    try:
        # API for auto-completion of inputs based on taxonomy
        api_response = api_instance.specs_car_auto_complete_get(var_field, input, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, engine=engine, engine_size=engine_size, engine_block=engine_block, ignore_case=ignore_case, facet_min_count=facet_min_count)
        print("The response of VINDecoderAPIApi->specs_car_auto_complete_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VINDecoderAPIApi->specs_car_auto_complete_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_field** | **str**| Field name for which you want auto-completion | 
 **input** | **str**| Input entered so far | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **drivetrain** | **str**| To filter listing on their drivetrain | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **engine_size** | **str**| Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | [optional] 
 **engine_block** | **str**| Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | [optional] 
 **ignore_case** | **bool**| Boolean variable to indicate ignore case of current input | [optional] [default to True]
 **facet_min_count** | **float**| Provide minimum count value for facets | [optional] [default to 1]

### Return type

[**SpecsAutoCompleteResponse**](SpecsAutoCompleteResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unique terms available in given field for auto completion |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

