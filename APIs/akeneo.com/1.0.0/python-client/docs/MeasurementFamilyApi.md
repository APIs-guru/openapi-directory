# openapi_client.MeasurementFamilyApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**measurement_families_get_list**](MeasurementFamilyApi.md#measurement_families_get_list) | **GET** /api/rest/v1/measurement-families | Get list of measurement families
[**patch_measurement_families**](MeasurementFamilyApi.md#patch_measurement_families) | **PATCH** /api/rest/v1/measurement-families | Update/create several measurement families


# **measurement_families_get_list**
> MeasurementFamiliesGetList200Response measurement_families_get_list()

Get list of measurement families

This endpoint allows you to get a list of measurement families.

### Example


```python
import openapi_client
from openapi_client.models.measurement_families_get_list200_response import MeasurementFamiliesGetList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeasurementFamilyApi(api_client)

    try:
        # Get list of measurement families
        api_response = api_instance.measurement_families_get_list()
        print("The response of MeasurementFamilyApi->measurement_families_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeasurementFamilyApi->measurement_families_get_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MeasurementFamiliesGetList200Response**](MeasurementFamiliesGetList200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the measurement families |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_measurement_families**
> List[PatchMeasurementFamilies200ResponseInner] patch_measurement_families(body=body)

Update/create several measurement families

This endpoint allows you to update and/or create several measurement families at once.

### Example


```python
import openapi_client
from openapi_client.models.measurement_families_get_list200_response import MeasurementFamiliesGetList200Response
from openapi_client.models.patch_measurement_families200_response_inner import PatchMeasurementFamilies200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeasurementFamilyApi(api_client)
    body = [openapi_client.MeasurementFamiliesGetList200Response()] # List[MeasurementFamiliesGetList200Response] |  (optional)

    try:
        # Update/create several measurement families
        api_response = api_instance.patch_measurement_families(body=body)
        print("The response of MeasurementFamilyApi->patch_measurement_families:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeasurementFamilyApi->patch_measurement_families: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**List[MeasurementFamiliesGetList200Response]**](MeasurementFamiliesGetList200Response.md)|  | [optional] 

### Return type

[**List[PatchMeasurementFamilies200ResponseInner]**](PatchMeasurementFamilies200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**413** | Request Entity Too Large |  -  |
**415** | Unsupported Media type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

