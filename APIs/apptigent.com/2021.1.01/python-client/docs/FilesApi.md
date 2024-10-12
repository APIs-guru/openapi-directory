# openapi_client.FilesApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_image**](FilesApi.md#convert_image) | **POST** /ConvertImage | Files - Convert Image
[**crop_image**](FilesApi.md#crop_image) | **POST** /CropImage | Files - Crop Image
[**file_to_string**](FilesApi.md#file_to_string) | **POST** /FileToString | Files - File to string
[**flip_image**](FilesApi.md#flip_image) | **POST** /FlipImage | Files - Flip Image
[**generate_qr_code**](FilesApi.md#generate_qr_code) | **POST** /GenerateQRCode | Files - Generate QR code
[**resize_image**](FilesApi.md#resize_image) | **POST** /ResizeImage | Files - Resize Image
[**rotate_image**](FilesApi.md#rotate_image) | **POST** /RotateImage | Files - Rotate Image
[**watermark_image**](FilesApi.md#watermark_image) | **POST** /WatermarkImage | Files - Watermark Image


# **convert_image**
> bytearray convert_image(file, format)

Files - Convert Image

Convert an image from one format to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    file = None # bytearray | Source image file
    format = PNG # str | Output file format (default to PNG)

    try:
        # Files - Convert Image
        api_response = api_instance.convert_image(file, format)
        print("The response of FilesApi->convert_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->convert_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| Source image file | 
 **format** | **str**| Output file format | [default to PNG]

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/bmp, image/gif, image/jpeg, image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crop_image**
> bytearray crop_image(height, width, file, position)

Files - Crop Image

Crop an image

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    height = 3.4 # float | Height (Y-axis down, negative to reverse)
    width = 3.4 # float | Width (X-axis right, negative to reverse)
    file = None # bytearray | Source image file
    position = TopLeft # str | Crop start position (use negative values to reverse crop area) (default to TopLeft)

    try:
        # Files - Crop Image
        api_response = api_instance.crop_image(height, width, file, position)
        print("The response of FilesApi->crop_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->crop_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **float**| Height (Y-axis down, negative to reverse) | 
 **width** | **float**| Width (X-axis right, negative to reverse) | 
 **file** | **bytearray**| Source image file | 
 **position** | **str**| Crop start position (use negative values to reverse crop area) | [default to TopLeft]

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/bmp, image/gif, image/jpeg, image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_to_string**
> OutputString file_to_string(file)

Files - File to string

Convert a file to a Base64 string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    file = None # bytearray | Source file (10MB limit)

    try:
        # Files - File to string
        api_response = api_instance.file_to_string(file)
        print("The response of FilesApi->file_to_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->file_to_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| Source file (10MB limit) | 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flip_image**
> bytearray flip_image(file, orientation)

Files - Flip Image

Flip an image (horizontal or vertical)

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    file = None # bytearray | Source image file
    orientation = Horizontal # str | Horizontal or Vertical (default to Horizontal)

    try:
        # Files - Flip Image
        api_response = api_instance.flip_image(file, orientation)
        print("The response of FilesApi->flip_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->flip_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| Source image file | 
 **orientation** | **str**| Horizontal or Vertical | [default to Horizontal]

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_qr_code**
> bytearray generate_qr_code(input_qr_code=input_qr_code)

Files - Generate QR code

Generate a QR code image

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_qr_code import InputQRCode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    input_qr_code = openapi_client.InputQRCode() # InputQRCode |  (optional)

    try:
        # Files - Generate QR code
        api_response = api_instance.generate_qr_code(input_qr_code=input_qr_code)
        print("The response of FilesApi->generate_qr_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->generate_qr_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input_qr_code** | [**InputQRCode**](InputQRCode.md)|  | [optional] 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resize_image**
> bytearray resize_image(algorithm, file, units, height=height, width=width)

Files - Resize Image

Resize an image

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    algorithm = Bicubic (default) # str | Optimize output quality of the target image (default to Bicubic (default))
    file = None # bytearray | Source image file
    units = Pixels # str | Image adjustment units (default to Pixels)
    height = 3.4 # float | Image height (pixels or percent) (optional)
    width = 3.4 # float | Image width (pixels or percent) (optional)

    try:
        # Files - Resize Image
        api_response = api_instance.resize_image(algorithm, file, units, height=height, width=width)
        print("The response of FilesApi->resize_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->resize_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **algorithm** | **str**| Optimize output quality of the target image | [default to Bicubic (default)]
 **file** | **bytearray**| Source image file | 
 **units** | **str**| Image adjustment units | [default to Pixels]
 **height** | **float**| Image height (pixels or percent) | [optional] 
 **width** | **float**| Image width (pixels or percent) | [optional] 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/bmp, image/gif, image/jpeg, image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_image**
> bytearray rotate_image(degrees, file)

Files - Rotate Image

Rotate an image by specified number of degrees

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    degrees = 'degrees_example' # str | Number of degrees
    file = None # bytearray | Source image file

    try:
        # Files - Rotate Image
        api_response = api_instance.rotate_image(degrees, file)
        print("The response of FilesApi->rotate_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->rotate_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **degrees** | **str**| Number of degrees | 
 **file** | **bytearray**| Source image file | 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **watermark_image**
> bytearray watermark_image(color, file, font, horizontal, size, text, vertical)

Files - Watermark Image

Add watermark text to an image

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    color = '000000' # str | Text color hex value (default to '000000')
    file = None # bytearray | Source image file
    font = Arial # str | Text font (default to Arial)
    horizontal = Center # str | Horizontal alignment (default to Center)
    size = 3.4 # float | Font size (points)
    text = 'text_example' # str | Watermark text
    vertical = Center # str | Vertical alignment (default to Center)

    try:
        # Files - Watermark Image
        api_response = api_instance.watermark_image(color, file, font, horizontal, size, text, vertical)
        print("The response of FilesApi->watermark_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->watermark_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **color** | **str**| Text color hex value | [default to &#39;000000&#39;]
 **file** | **bytearray**| Source image file | 
 **font** | **str**| Text font | [default to Arial]
 **horizontal** | **str**| Horizontal alignment | [default to Center]
 **size** | **float**| Font size (points) | 
 **text** | **str**| Watermark text | 
 **vertical** | **str**| Vertical alignment | [default to Center]

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

