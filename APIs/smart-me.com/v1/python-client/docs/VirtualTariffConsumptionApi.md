# openapi_client.VirtualTariffConsumptionApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_tariff_consumption_get**](VirtualTariffConsumptionApi.md#virtual_tariff_consumption_get) | **GET** /api/VirtualTariffConsumption | Gets the consumption of a folder with a virtuall tariffs.


# **virtual_tariff_consumption_get**
> List[VirtualTariffConsumptionData] virtual_tariff_consumption_get(folder_id, start_date, end_date)

Gets the consumption of a folder with a virtuall tariffs.

Gets the consumption of a folder with a virtuall tariffs.

### Example


```python
import openapi_client
from openapi_client.models.virtual_tariff_consumption_data import VirtualTariffConsumptionData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualTariffConsumptionApi(api_client)
    folder_id = 'folder_id_example' # str | The ID of the Folder
    start_date = '2013-10-20T19:20:30+01:00' # datetime | The start date (UTC)
    end_date = '2013-10-20T19:20:30+01:00' # datetime | The end date (UTC)

    try:
        # Gets the consumption of a folder with a virtuall tariffs.
        api_response = api_instance.virtual_tariff_consumption_get(folder_id, start_date, end_date)
        print("The response of VirtualTariffConsumptionApi->virtual_tariff_consumption_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTariffConsumptionApi->virtual_tariff_consumption_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **str**| The ID of the Folder | 
 **start_date** | **datetime**| The start date (UTC) | 
 **end_date** | **datetime**| The end date (UTC) | 

### Return type

[**List[VirtualTariffConsumptionData]**](VirtualTariffConsumptionData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

