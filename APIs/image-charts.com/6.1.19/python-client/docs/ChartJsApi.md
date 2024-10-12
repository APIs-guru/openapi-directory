# openapi_client.ChartJsApi

All URIs are relative to *https://image-charts.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_chartjs280**](ChartJsApi.md#get_chartjs280) | **GET** /chart.js/2.8.0 | Chart.js as image API


# **get_chartjs280**
> str get_chartjs280(c=c, chart=chart, width=width, height=height, background_color=background_color, bkg=bkg, encoding=encoding, icac=icac, ichm=ichm, icretina=icretina)

Chart.js as image API

Image-charts

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://image-charts.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://image-charts.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChartJsApi(api_client)
    c = 'c_example' # str | Javascript/JSON definition of the chart. Use a Chart.js configuration object. (optional)
    chart = 'chart_example' # str | Javascript/JSON definition of the chart. Use a Chart.js configuration object. (optional)
    width = 500 # int | Width of the chart (optional) (default to 500)
    height = 300 # int | Height of the chart (optional) (default to 300)
    background_color = 'background_color_example' # str | Background of the chart canvas. Accepts rgb (rgb(255,255,120)), colors (red), and url-encoded hex values (%23ff00ff). Abbreviated as \"bkg\" (optional)
    bkg = 'bkg_example' # str | Background of the chart canvas. Accepts rgb (rgb(255,255,120)), colors (red), and url-encoded hex values (%23ff00ff). Abbreviated as \"bkg\" (optional)
    encoding = url # str | Encoding of your \"chart\" parameter. Accepted values are url and base64. (optional) (default to url)
    icac = 'icac_example' # str | image-charts enterprise `account_id` (optional)
    ichm = 'ichm_example' # str | HMAC-SHA256 signature required to activate paid features (optional)
    icretina = 'icretina_example' # str | retina mode (optional)

    try:
        # Chart.js as image API
        api_response = api_instance.get_chartjs280(c=c, chart=chart, width=width, height=height, background_color=background_color, bkg=bkg, encoding=encoding, icac=icac, ichm=ichm, icretina=icretina)
        print("The response of ChartJsApi->get_chartjs280:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChartJsApi->get_chartjs280: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **c** | **str**| Javascript/JSON definition of the chart. Use a Chart.js configuration object. | [optional] 
 **chart** | **str**| Javascript/JSON definition of the chart. Use a Chart.js configuration object. | [optional] 
 **width** | **int**| Width of the chart | [optional] [default to 500]
 **height** | **int**| Height of the chart | [optional] [default to 300]
 **background_color** | **str**| Background of the chart canvas. Accepts rgb (rgb(255,255,120)), colors (red), and url-encoded hex values (%23ff00ff). Abbreviated as \&quot;bkg\&quot; | [optional] 
 **bkg** | **str**| Background of the chart canvas. Accepts rgb (rgb(255,255,120)), colors (red), and url-encoded hex values (%23ff00ff). Abbreviated as \&quot;bkg\&quot; | [optional] 
 **encoding** | **str**| Encoding of your \&quot;chart\&quot; parameter. Accepted values are url and base64. | [optional] [default to url]
 **icac** | **str**| image-charts enterprise &#x60;account_id&#x60; | [optional] 
 **ichm** | **str**| HMAC-SHA256 signature required to activate paid features | [optional] 
 **icretina** | **str**| retina mode | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/png, application/gif, image/svg+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

