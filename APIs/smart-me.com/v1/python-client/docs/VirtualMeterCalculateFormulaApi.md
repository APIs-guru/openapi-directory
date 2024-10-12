# openapi_client.VirtualMeterCalculateFormulaApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_meter_calculate_formula_get**](VirtualMeterCalculateFormulaApi.md#virtual_meter_calculate_formula_get) | **GET** /api/VirtualMeterCalculateFormula | Calculates a virtual meter from a formula.               A meter is coded as ID(\&quot;METERID\&quot;)


# **virtual_meter_calculate_formula_get**
> Device virtual_meter_calculate_formula_get(formula)

Calculates a virtual meter from a formula.               A meter is coded as ID(\"METERID\")

Calculates a virtual meter from a formula.                            A meter is coded as ID(\"METERID\")              Ariphmetical operators:               ()  parentheses;                 +   plus (a + b);                -  minus (a - b);                *  multiplycation symbol (a * b);                /  divide symbol (a / b);               Example: (ID(\"63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c\") + ID(\"0209555e-9dc4-4e84-a166-a864488b4b12\")) * 2

### Example


```python
import openapi_client
from openapi_client.models.device import Device
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
    api_instance = openapi_client.VirtualMeterCalculateFormulaApi(api_client)
    formula = 'formula_example' # str | 

    try:
        # Calculates a virtual meter from a formula.               A meter is coded as ID(\"METERID\")
        api_response = api_instance.virtual_meter_calculate_formula_get(formula)
        print("The response of VirtualMeterCalculateFormulaApi->virtual_meter_calculate_formula_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMeterCalculateFormulaApi->virtual_meter_calculate_formula_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formula** | **str**|  | 

### Return type

[**Device**](Device.md)

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

