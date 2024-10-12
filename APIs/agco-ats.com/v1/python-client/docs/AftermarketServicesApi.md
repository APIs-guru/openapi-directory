# openapi_client.AftermarketServicesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aftermarket_services_get_certs**](AftermarketServicesApi.md#aftermarket_services_get_certs) | **GET** /api/v2/AftermarketServices/Certificates | No Documentation Found.
[**aftermarket_services_get_connection_status**](AftermarketServicesApi.md#aftermarket_services_get_connection_status) | **GET** /api/v2/AftermarketServices/Hello | Check whether there is connectivity to AGCO Power Web Services
[**aftermarket_services_get_engine_iqa_codes**](AftermarketServicesApi.md#aftermarket_services_get_engine_iqa_codes) | **GET** /api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes | Get injector codes given engine.
[**aftermarket_services_get_production_data**](AftermarketServicesApi.md#aftermarket_services_get_production_data) | **GET** /api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData | Get production calibration data for given engine.
[**aftermarket_services_get_user_status**](AftermarketServicesApi.md#aftermarket_services_get_user_status) | **GET** /api/v2/AftermarketServices/UserStatuses | Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
[**aftermarket_services_put_ecu**](AftermarketServicesApi.md#aftermarket_services_put_ecu) | **PUT** /api/v2/AftermarketServices/ECUs/{serialNumber} | Activate or Deactivate an ECU, or Report an ECU as Damaged.
[**aftermarket_services_put_iqa_codes**](AftermarketServicesApi.md#aftermarket_services_put_iqa_codes) | **PUT** /api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes | Report the IQA codes used by an engine
[**aftermarket_services_update_user_status**](AftermarketServicesApi.md#aftermarket_services_update_user_status) | **PUT** /api/v2/AftermarketServices/UserStatuses | Update the status of an EDT Kit Registration with AGCO Power Web Services


# **aftermarket_services_get_certs**
> object aftermarket_services_get_certs()

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)

    try:
        # No Documentation Found.
        api_response = api_instance.aftermarket_services_get_certs()
        print("The response of AftermarketServicesApi->aftermarket_services_get_certs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_get_certs: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_get_connection_status**
> bool aftermarket_services_get_connection_status()

Check whether there is connectivity to AGCO Power Web Services

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)

    try:
        # Check whether there is connectivity to AGCO Power Web Services
        api_response = api_instance.aftermarket_services_get_connection_status()
        print("The response of AftermarketServicesApi->aftermarket_services_get_connection_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_get_connection_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_get_engine_iqa_codes**
> List[str] aftermarket_services_get_engine_iqa_codes(serial_number, edt_instance_id)

Get injector codes given engine.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)
    serial_number = 'serial_number_example' # str | The serial number of the engine.
    edt_instance_id = 'edt_instance_id_example' # str | The EDT Instance Id of the kit calling this method.

    try:
        # Get injector codes given engine.
        api_response = api_instance.aftermarket_services_get_engine_iqa_codes(serial_number, edt_instance_id)
        print("The response of AftermarketServicesApi->aftermarket_services_get_engine_iqa_codes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_get_engine_iqa_codes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_number** | **str**| The serial number of the engine. | 
 **edt_instance_id** | **str**| The EDT Instance Id of the kit calling this method. | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_get_production_data**
> List[AGCOPowerServicesModelsProductionData] aftermarket_services_get_production_data(serial_number, edt_instance_id)

Get production calibration data for given engine.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.agco_power_services_models_production_data import AGCOPowerServicesModelsProductionData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)
    serial_number = 'serial_number_example' # str | The serial number of the engine.
    edt_instance_id = 'edt_instance_id_example' # str | The EDT Instance Id of the kit calling this method.

    try:
        # Get production calibration data for given engine.
        api_response = api_instance.aftermarket_services_get_production_data(serial_number, edt_instance_id)
        print("The response of AftermarketServicesApi->aftermarket_services_get_production_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_get_production_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_number** | **str**| The serial number of the engine. | 
 **edt_instance_id** | **str**| The EDT Instance Id of the kit calling this method. | 

### Return type

[**List[AGCOPowerServicesModelsProductionData]**](AGCOPowerServicesModelsProductionData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_get_user_status**
> AGCOPowerServicesModelsUserStatus aftermarket_services_get_user_status(voucher_code, dealer_code)

Retrieve the status of an EDT Kit Registration with AGCO Power Web Services

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.agco_power_services_models_user_status import AGCOPowerServicesModelsUserStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)
    voucher_code = 'voucher_code_example' # str | 
    dealer_code = 'dealer_code_example' # str | 

    try:
        # Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
        api_response = api_instance.aftermarket_services_get_user_status(voucher_code, dealer_code)
        print("The response of AftermarketServicesApi->aftermarket_services_get_user_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_get_user_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucher_code** | **str**|  | 
 **dealer_code** | **str**|  | 

### Return type

[**AGCOPowerServicesModelsUserStatus**](AGCOPowerServicesModelsUserStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_put_ecu**
> AGCOPowerServicesModelsECU aftermarket_services_put_ecu(serial_number, edt_instance_id, agco_power_services_models_ecu)

Activate or Deactivate an ECU, or Report an ECU as Damaged.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.agco_power_services_models_ecu import AGCOPowerServicesModelsECU
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)
    serial_number = 'serial_number_example' # str | The serial number of the ECU.
    edt_instance_id = 'edt_instance_id_example' # str | The EDT Instance Id of the kit calling this method.
    agco_power_services_models_ecu = openapi_client.AGCOPowerServicesModelsECU() # AGCOPowerServicesModelsECU | The ecu to modify.

    try:
        # Activate or Deactivate an ECU, or Report an ECU as Damaged.
        api_response = api_instance.aftermarket_services_put_ecu(serial_number, edt_instance_id, agco_power_services_models_ecu)
        print("The response of AftermarketServicesApi->aftermarket_services_put_ecu:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_put_ecu: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_number** | **str**| The serial number of the ECU. | 
 **edt_instance_id** | **str**| The EDT Instance Id of the kit calling this method. | 
 **agco_power_services_models_ecu** | [**AGCOPowerServicesModelsECU**](AGCOPowerServicesModelsECU.md)| The ecu to modify. | 

### Return type

[**AGCOPowerServicesModelsECU**](AGCOPowerServicesModelsECU.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_put_iqa_codes**
> bool aftermarket_services_put_iqa_codes(serial_number, edt_instance_id, request_body)

Report the IQA codes used by an engine

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)
    serial_number = 'serial_number_example' # str | The serial number of the Engine
    edt_instance_id = 'edt_instance_id_example' # str | The EDT Instance Id of the kit calling this method.
    request_body = ['request_body_example'] # List[str] | A string array of IQA codes in physical order

    try:
        # Report the IQA codes used by an engine
        api_response = api_instance.aftermarket_services_put_iqa_codes(serial_number, edt_instance_id, request_body)
        print("The response of AftermarketServicesApi->aftermarket_services_put_iqa_codes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_put_iqa_codes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_number** | **str**| The serial number of the Engine | 
 **edt_instance_id** | **str**| The EDT Instance Id of the kit calling this method. | 
 **request_body** | [**List[str]**](str.md)| A string array of IQA codes in physical order | 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aftermarket_services_update_user_status**
> bool aftermarket_services_update_user_status(agco_power_services_models_user_status)

Update the status of an EDT Kit Registration with AGCO Power Web Services

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.agco_power_services_models_user_status import AGCOPowerServicesModelsUserStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AftermarketServicesApi(api_client)
    agco_power_services_models_user_status = openapi_client.AGCOPowerServicesModelsUserStatus() # AGCOPowerServicesModelsUserStatus | 

    try:
        # Update the status of an EDT Kit Registration with AGCO Power Web Services
        api_response = api_instance.aftermarket_services_update_user_status(agco_power_services_models_user_status)
        print("The response of AftermarketServicesApi->aftermarket_services_update_user_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AftermarketServicesApi->aftermarket_services_update_user_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agco_power_services_models_user_status** | [**AGCOPowerServicesModelsUserStatus**](AGCOPowerServicesModelsUserStatus.md)|  | 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

