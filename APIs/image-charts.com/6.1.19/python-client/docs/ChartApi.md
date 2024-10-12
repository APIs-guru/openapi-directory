# openapi_client.ChartApi

All URIs are relative to *https://image-charts.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_chart**](ChartApi.md#get_chart) | **GET** /chart | Image-Charts API


# **get_chart**
> str get_chart(cht, chl, chd=chd, chds=chds, choe=choe, chld=chld, chxr=chxr, chxp=chxp, chof=chof, chs=chs, chdl=chdl, chdls=chdls, chg=chg, chco=chco, chtt=chtt, chts=chts, chxt=chxt, chxl=chxl, chxs=chxs, chm=chm, chls=chls, chlps=chlps, chma=chma, chdlp=chdlp, chf=chf, chbh=chbh, chbr=chbr, chan=chan, chli=chli, icac=icac, ichm=ichm, icff=icff, icfs=icfs, iclocale=iclocale, icwt=icwt, icretina=icretina, icqrb=icqrb, icqrf=icqrf)

Image-Charts API

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
    api_instance = openapi_client.ChartApi(api_client)
    cht = 'cht_example' # str | Chart type
    chl = 'chl_example' # str | bar, pie slice, doughnut slice and polar slice chart labels
    chd = 'chd_example' # str | chart data (optional)
    chds = 'chds_example' # str | data format with custom scaling (optional)
    choe = 'choe_example' # str | QRCode data encoding (optional)
    chld = 'L|4' # str | QRCode error correction level and optional margin (optional) (default to 'L|4')
    chxr = 'chxr_example' # str | Axis data-range (optional)
    chxp = 'chxp_example' # str | axis label positions (optional)
    chof = '.png' # str | Image output format (optional) (default to '.png')
    chs = 'chs_example' # str | Chart size (<width>x<height>) (optional)
    chdl = 'chdl_example' # str | Text for each series, to display in the legend (optional)
    chdls = '000000' # str | Chart legend text and style (optional) (default to '000000')
    chg = 'chg_example' # str | Solid or dotted grid lines (optional)
    chco = 'F56991,FF9F80,FFC48C,D1F2A5,EFFAB4' # str | series colors (optional) (default to 'F56991,FF9F80,FFC48C,D1F2A5,EFFAB4')
    chtt = 'chtt_example' # str | chart title (optional)
    chts = 'chts_example' # str | chart title colors and font size (optional)
    chxt = 'chxt_example' # str | Display values on your axis lines or change which axes are shown (optional)
    chxl = 'chxl_example' # str | Custom string axis labels on any axis (optional)
    chxs = 'chxs_example' # str | Font size, color for axis labels, both custom labels and default label values (optional)
    chm = 'chm_example' # str | compound charts and line fills (optional)
    chls = 'chls_example' # str | line thickness and solid/dashed style (optional)
    chlps = 'chlps_example' # str | Position and style of labels on data (optional)
    chma = 'chma_example' # str | chart margins (optional)
    chdlp = 'r' # str | Position of the legend and order of the legend entries (optional) (default to 'r')
    chf = 'bg,s,FFFFFF' # str | Background Fills (optional) (default to 'bg,s,FFFFFF')
    chbh = '10' # str | Bar Width and Spacing. (not supported)  You can optionally specify custom values for bar widths and spacing between bars and groups. You can only specify one set of width values for all bars. If you don't specify chbh, all bars will be 23 pixels wide, which means that the end bars can be clipped if the total bar + space width is wider than the chart width. (optional) (default to '10')
    chbr = '0' # str | Bar corner radius. Display bars with rounded corner. (optional) (default to '0')
    chan = 'chan_example' # str | gif configuration (optional)
    chli = 'chli_example' # str | doughnut chart inside label (optional)
    icac = 'icac_example' # str | image-charts enterprise `account_id` (optional)
    ichm = 'ichm_example' # str | HMAC-SHA256 signature required to activate paid features (optional)
    icff = 'icff_example' # str | Default font family for all text from Google Fonts. Use same syntax as Google Font CSS API (optional)
    icfs = 'icfs_example' # str | Default font style for all text (optional)
    iclocale = 'iclocale_example' # str | localization (ISO 639-1) (optional)
    icwt = False # bool | (Private) Force to display the watermark EVEN IF the chart was signed with an enterprise account (optional) (default to False)
    icretina = 'icretina_example' # str | retina mode (optional)
    icqrb = 'FFFFFF' # str | Background color for QR Codes (optional) (default to 'FFFFFF')
    icqrf = '000000' # str | Foreground color for QR Codes (optional) (default to '000000')

    try:
        # Image-Charts API
        api_response = api_instance.get_chart(cht, chl, chd=chd, chds=chds, choe=choe, chld=chld, chxr=chxr, chxp=chxp, chof=chof, chs=chs, chdl=chdl, chdls=chdls, chg=chg, chco=chco, chtt=chtt, chts=chts, chxt=chxt, chxl=chxl, chxs=chxs, chm=chm, chls=chls, chlps=chlps, chma=chma, chdlp=chdlp, chf=chf, chbh=chbh, chbr=chbr, chan=chan, chli=chli, icac=icac, ichm=ichm, icff=icff, icfs=icfs, iclocale=iclocale, icwt=icwt, icretina=icretina, icqrb=icqrb, icqrf=icqrf)
        print("The response of ChartApi->get_chart:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChartApi->get_chart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cht** | **str**| Chart type | 
 **chl** | **str**| bar, pie slice, doughnut slice and polar slice chart labels | 
 **chd** | **str**| chart data | [optional] 
 **chds** | **str**| data format with custom scaling | [optional] 
 **choe** | **str**| QRCode data encoding | [optional] 
 **chld** | **str**| QRCode error correction level and optional margin | [optional] [default to &#39;L|4&#39;]
 **chxr** | **str**| Axis data-range | [optional] 
 **chxp** | **str**| axis label positions | [optional] 
 **chof** | **str**| Image output format | [optional] [default to &#39;.png&#39;]
 **chs** | **str**| Chart size (&lt;width&gt;x&lt;height&gt;) | [optional] 
 **chdl** | **str**| Text for each series, to display in the legend | [optional] 
 **chdls** | **str**| Chart legend text and style | [optional] [default to &#39;000000&#39;]
 **chg** | **str**| Solid or dotted grid lines | [optional] 
 **chco** | **str**| series colors | [optional] [default to &#39;F56991,FF9F80,FFC48C,D1F2A5,EFFAB4&#39;]
 **chtt** | **str**| chart title | [optional] 
 **chts** | **str**| chart title colors and font size | [optional] 
 **chxt** | **str**| Display values on your axis lines or change which axes are shown | [optional] 
 **chxl** | **str**| Custom string axis labels on any axis | [optional] 
 **chxs** | **str**| Font size, color for axis labels, both custom labels and default label values | [optional] 
 **chm** | **str**| compound charts and line fills | [optional] 
 **chls** | **str**| line thickness and solid/dashed style | [optional] 
 **chlps** | **str**| Position and style of labels on data | [optional] 
 **chma** | **str**| chart margins | [optional] 
 **chdlp** | **str**| Position of the legend and order of the legend entries | [optional] [default to &#39;r&#39;]
 **chf** | **str**| Background Fills | [optional] [default to &#39;bg,s,FFFFFF&#39;]
 **chbh** | **str**| Bar Width and Spacing. (not supported)  You can optionally specify custom values for bar widths and spacing between bars and groups. You can only specify one set of width values for all bars. If you don&#39;t specify chbh, all bars will be 23 pixels wide, which means that the end bars can be clipped if the total bar + space width is wider than the chart width. | [optional] [default to &#39;10&#39;]
 **chbr** | **str**| Bar corner radius. Display bars with rounded corner. | [optional] [default to &#39;0&#39;]
 **chan** | **str**| gif configuration | [optional] 
 **chli** | **str**| doughnut chart inside label | [optional] 
 **icac** | **str**| image-charts enterprise &#x60;account_id&#x60; | [optional] 
 **ichm** | **str**| HMAC-SHA256 signature required to activate paid features | [optional] 
 **icff** | **str**| Default font family for all text from Google Fonts. Use same syntax as Google Font CSS API | [optional] 
 **icfs** | **str**| Default font style for all text | [optional] 
 **iclocale** | **str**| localization (ISO 639-1) | [optional] 
 **icwt** | **bool**| (Private) Force to display the watermark EVEN IF the chart was signed with an enterprise account | [optional] [default to False]
 **icretina** | **str**| retina mode | [optional] 
 **icqrb** | **str**| Background color for QR Codes | [optional] [default to &#39;FFFFFF&#39;]
 **icqrf** | **str**| Foreground color for QR Codes | [optional] [default to &#39;000000&#39;]

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

