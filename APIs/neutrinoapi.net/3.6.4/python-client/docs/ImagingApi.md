# openapi_client.ImagingApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**h_tml_render**](ImagingApi.md#h_tml_render) | **POST** /html-render | HTML Render
[**image_resize**](ImagingApi.md#image_resize) | **POST** /image-resize | Image Resize
[**image_watermark**](ImagingApi.md#image_watermark) | **POST** /image-watermark | Image Watermark
[**q_r_code**](ImagingApi.md#q_r_code) | **POST** /qr-code | QR Code


# **h_tml_render**
> bytearray h_tml_render(content, css=css, delay=delay, footer=footer, format=format, grayscale=grayscale, header=header, ignore_certificate_errors=ignore_certificate_errors, image_height=image_height, image_width=image_width, landscape=landscape, margin=margin, margin_bottom=margin_bottom, margin_left=margin_left, margin_right=margin_right, margin_top=margin_top, page_height=page_height, page_size=page_size, page_width=page_width, timeout=timeout, title=title, zoom=zoom)

HTML Render

Render HTML content to PDF, JPG or PNG

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagingApi(api_client)
    content = 'content_example' # str | The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string
    css = 'css_example' # str | Inject custom CSS into the HTML. e.g. 'body { background-color: red;}' (optional)
    delay = 0 # int | Number of seconds to wait before rendering the page (can be useful for pages with animations etc) (optional) (default to 0)
    footer = 'footer_example' # str | The footer HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages} (optional)
    format = 'PDF' # str | Which format to output, available options are: PDF, PNG, JPG (optional) (default to 'PDF')
    grayscale = False # bool | Render the final document in grayscale (optional) (default to False)
    header = 'header_example' # str | The header HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages} (optional)
    ignore_certificate_errors = False # bool | Ignore any TLS/SSL certificate errors (optional) (default to False)
    image_height = 56 # int | If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content (optional)
    image_width = 1024 # int | If rendering to an image format (PNG or JPG) use this image width (in pixels) (optional) (default to 1024)
    landscape = False # bool | Set the document to landscape orientation (optional) (default to False)
    margin = 0 # float | The document margin (in mm) (optional) (default to 0)
    margin_bottom = 0 # float | The document bottom margin (in mm) (optional) (default to 0)
    margin_left = 0 # float | The document left margin (in mm) (optional) (default to 0)
    margin_right = 0 # float | The document right margin (in mm) (optional) (default to 0)
    margin_top = 0 # float | The document top margin (in mm) (optional) (default to 0)
    page_height = 3.4 # float | Set the PDF page height explicitly (in mm) (optional)
    page_size = 'A4' # str | Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter (optional) (default to 'A4')
    page_width = 3.4 # float | Set the PDF page width explicitly (in mm) (optional)
    timeout = 300 # int | Timeout in seconds. Give up if still trying to load the HTML content after this number of seconds (optional) (default to 300)
    title = 'title_example' # str | The document title (optional)
    zoom = 1 # float | Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size) (optional) (default to 1)

    try:
        # HTML Render
        api_response = api_instance.h_tml_render(content, css=css, delay=delay, footer=footer, format=format, grayscale=grayscale, header=header, ignore_certificate_errors=ignore_certificate_errors, image_height=image_height, image_width=image_width, landscape=landscape, margin=margin, margin_bottom=margin_bottom, margin_left=margin_left, margin_right=margin_right, margin_top=margin_top, page_height=page_height, page_size=page_size, page_width=page_width, timeout=timeout, title=title, zoom=zoom)
        print("The response of ImagingApi->h_tml_render:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagingApi->h_tml_render: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string | 
 **css** | **str**| Inject custom CSS into the HTML. e.g. &#39;body { background-color: red;}&#39; | [optional] 
 **delay** | **int**| Number of seconds to wait before rendering the page (can be useful for pages with animations etc) | [optional] [default to 0]
 **footer** | **str**| The footer HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages} | [optional] 
 **format** | **str**| Which format to output, available options are: PDF, PNG, JPG | [optional] [default to &#39;PDF&#39;]
 **grayscale** | **bool**| Render the final document in grayscale | [optional] [default to False]
 **header** | **str**| The header HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages} | [optional] 
 **ignore_certificate_errors** | **bool**| Ignore any TLS/SSL certificate errors | [optional] [default to False]
 **image_height** | **int**| If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content | [optional] 
 **image_width** | **int**| If rendering to an image format (PNG or JPG) use this image width (in pixels) | [optional] [default to 1024]
 **landscape** | **bool**| Set the document to landscape orientation | [optional] [default to False]
 **margin** | **float**| The document margin (in mm) | [optional] [default to 0]
 **margin_bottom** | **float**| The document bottom margin (in mm) | [optional] [default to 0]
 **margin_left** | **float**| The document left margin (in mm) | [optional] [default to 0]
 **margin_right** | **float**| The document right margin (in mm) | [optional] [default to 0]
 **margin_top** | **float**| The document top margin (in mm) | [optional] [default to 0]
 **page_height** | **float**| Set the PDF page height explicitly (in mm) | [optional] 
 **page_size** | **str**| Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter | [optional] [default to &#39;A4&#39;]
 **page_width** | **float**| Set the PDF page width explicitly (in mm) | [optional] 
 **timeout** | **int**| Timeout in seconds. Give up if still trying to load the HTML content after this number of seconds | [optional] [default to 300]
 **title** | **str**| The document title | [optional] 
 **zoom** | **float**| Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size) | [optional] [default to 1]

### Return type

**bytearray**

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_resize**
> bytearray image_resize(image_url, width, bg_color=bg_color, format=format, height=height, resize_mode=resize_mode)

Image Resize

Resize an image and output as either JPEG or PNG

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagingApi(api_client)
    image_url = 'image_url_example' # str | The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data
    width = 56 # int | The width to resize to (in px)
    bg_color = 'transparent' # str | The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000) (optional) (default to 'transparent')
    format = 'png' # str | The output image format, can be either png or jpg (optional) (default to 'png')
    height = 56 # int | The height to resize to (in px). If you don't set this field then the height will be automatic based on the requested width and image aspect ratio (optional)
    resize_mode = 'scale' # str | The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul> (optional) (default to 'scale')

    try:
        # Image Resize
        api_response = api_instance.image_resize(image_url, width, bg_color=bg_color, format=format, height=height, resize_mode=resize_mode)
        print("The response of ImagingApi->image_resize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagingApi->image_resize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data | 
 **width** | **int**| The width to resize to (in px) | 
 **bg_color** | **str**| The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of &#39;transparent&#39; can also be used. For JPG output the default is black (#000000) | [optional] [default to &#39;transparent&#39;]
 **format** | **str**| The output image format, can be either png or jpg | [optional] [default to &#39;png&#39;]
 **height** | **int**| The height to resize to (in px). If you don&#39;t set this field then the height will be automatic based on the requested width and image aspect ratio | [optional] 
 **resize_mode** | **str**| The resize mode to use, we support 3 main resizing modes: &lt;ul&gt; &lt;li&gt;&lt;b&gt;scale&lt;/b&gt;&lt;br&gt;Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio&lt;/li&gt; &lt;li&gt;&lt;b&gt;pad&lt;/b&gt;&lt;br&gt;Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the &#39;bg-color&#39; value&lt;/li&gt; &lt;li&gt;&lt;b&gt;crop&lt;/b&gt;&lt;br&gt;Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;scale&#39;]

### Return type

**bytearray**

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_watermark**
> bytearray image_watermark(image_url, watermark_url, bg_color=bg_color, format=format, height=height, opacity=opacity, position=position, resize_mode=resize_mode, width=width)

Image Watermark

Watermark one image with another image

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagingApi(api_client)
    image_url = 'image_url_example' # str | The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data
    watermark_url = 'watermark_url_example' # str | The URL or Base64 encoded Data URL for the watermark image. You can also upload an image file directly using multipart/form-data
    bg_color = 'transparent' # str | The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000) (optional) (default to 'transparent')
    format = 'png' # str | The output image format, can be either png or jpg (optional) (default to 'png')
    height = 56 # int | If set resize the resulting image to this height (in px) (optional)
    opacity = 50 # int | The opacity of the watermark (0 to 100) (optional) (default to 50)
    position = 'center' # str | The position of the watermark image, possible values are: <br>center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right (optional) (default to 'center')
    resize_mode = 'scale' # str | The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul> (optional) (default to 'scale')
    width = 56 # int | If set resize the resulting image to this width (in px) (optional)

    try:
        # Image Watermark
        api_response = api_instance.image_watermark(image_url, watermark_url, bg_color=bg_color, format=format, height=height, opacity=opacity, position=position, resize_mode=resize_mode, width=width)
        print("The response of ImagingApi->image_watermark:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagingApi->image_watermark: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data | 
 **watermark_url** | **str**| The URL or Base64 encoded Data URL for the watermark image. You can also upload an image file directly using multipart/form-data | 
 **bg_color** | **str**| The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of &#39;transparent&#39; can also be used. For JPG output the default is black (#000000) | [optional] [default to &#39;transparent&#39;]
 **format** | **str**| The output image format, can be either png or jpg | [optional] [default to &#39;png&#39;]
 **height** | **int**| If set resize the resulting image to this height (in px) | [optional] 
 **opacity** | **int**| The opacity of the watermark (0 to 100) | [optional] [default to 50]
 **position** | **str**| The position of the watermark image, possible values are: &lt;br&gt;center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right | [optional] [default to &#39;center&#39;]
 **resize_mode** | **str**| The resize mode to use, we support 3 main resizing modes: &lt;ul&gt; &lt;li&gt;&lt;b&gt;scale&lt;/b&gt;&lt;br&gt;Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio&lt;/li&gt; &lt;li&gt;&lt;b&gt;pad&lt;/b&gt;&lt;br&gt;Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the &#39;bg-color&#39; value&lt;/li&gt; &lt;li&gt;&lt;b&gt;crop&lt;/b&gt;&lt;br&gt;Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;scale&#39;]
 **width** | **int**| If set resize the resulting image to this width (in px) | [optional] 

### Return type

**bytearray**

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **q_r_code**
> bytearray q_r_code(content, bg_color=bg_color, fg_color=fg_color, height=height, width=width)

QR Code

Generate a QR code as a PNG image

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImagingApi(api_client)
    content = 'content_example' # str | The content to encode into the QR code (e.g. a URL or a phone number)
    bg_color = '#ffffff' # str | The QR code background color (optional) (default to '#ffffff')
    fg_color = '#000000' # str | The QR code foreground color (optional) (default to '#000000')
    height = 256 # int | The height of the QR code (in px) (optional) (default to 256)
    width = 256 # int | The width of the QR code (in px) (optional) (default to 256)

    try:
        # QR Code
        api_response = api_instance.q_r_code(content, bg_color=bg_color, fg_color=fg_color, height=height, width=width)
        print("The response of ImagingApi->q_r_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagingApi->q_r_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| The content to encode into the QR code (e.g. a URL or a phone number) | 
 **bg_color** | **str**| The QR code background color | [optional] [default to &#39;#ffffff&#39;]
 **fg_color** | **str**| The QR code foreground color | [optional] [default to &#39;#000000&#39;]
 **height** | **int**| The height of the QR code (in px) | [optional] [default to 256]
 **width** | **int**| The width of the QR code (in px) | [optional] [default to 256]

### Return type

**bytearray**

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

