# openapi_client.ModelApi

All URIs are relative to */api/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**model_get**](ModelApi.md#model_get) | **GET** /model | Retrieve the models you&#39;ve created. 
[**model_model_id_get**](ModelApi.md#model_model_id_get) | **GET** /model/{model_id} | Retrieve a previously created model by its id. 
[**model_post**](ModelApi.md#model_post) | **POST** /model | Models represent 3D design files that you&#39;d like to produce. Creating models is generally the first step in creating an order. 
[**model_quote_attrs_get**](ModelApi.md#model_quote_attrs_get) | **GET** /model/quote_attrs | Get a quote for a model with the given attributes. 
[**model_quote_get**](ModelApi.md#model_quote_get) | **GET** /model/quote | Get a quote a given model id. 


# **model_get**
> List[Model] model_get()

Retrieve the models you've created. 

Lists all of the models you've created. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.model import Model
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)

    try:
        # Retrieve the models you've created. 
        api_response = api_instance.model_get()
        print("The response of ModelApi->model_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Model]**](Model.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of models |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_model_id_get**
> Model model_model_id_get(model_id)

Retrieve a previously created model by its id. 

In cases where you're ordering models you've created previously, you can fetch a specific model by its id. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.model import Model
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)
    model_id = 56 # int | 

    try:
        # Retrieve a previously created model by its id. 
        api_response = api_instance.model_model_id_get(model_id)
        print("The response of ModelApi->model_model_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_model_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**|  | 

### Return type

[**Model**](Model.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_post**
> Model model_post(body)

Models represent 3D design files that you'd like to produce. Creating models is generally the first step in creating an order. 

Downloads the model data from the URL specified by file_url and saves it as a model. As a part of the model upload process, the file is run through a program that repairs the mesh (closing holes, flipping inverted normals, etc). In some cases, this may alter the geometry of your model. If you're noticing bad results for your created models, you might consider repairing your files before submitting them. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.create_model_body import CreateModelBody
from openapi_client.models.model import Model
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)
    body = openapi_client.CreateModelBody() # CreateModelBody | 

    try:
        # Models represent 3D design files that you'd like to produce. Creating models is generally the first step in creating an order. 
        api_response = api_instance.model_post(body)
        print("The response of ModelApi->model_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateModelBody**](CreateModelBody.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_quote_attrs_get**
> ModelQuote model_quote_attrs_get(x, y, z, volume, surface_area, material_id, quantity, units, options_orientation=options_orientation)

Get a quote for a model with the given attributes. 

This endpoint will provide a quote for a model matching the submitted parameters. Note that this quote may be different than the quote provided by /model/quote in the case that your attribute calculations differ from the ones used by Voodoo Manufacturing. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.model_quote import ModelQuote
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)
    x = 3.4 # float | The calculated unitless x dimension of this model's bounding box.
    y = 3.4 # float | The calculated unitless y dimension of this model's bounding box.
    z = 3.4 # float | The calculated unitless z dimension of this model's bounding box.
    volume = 3.4 # float | The calculated unitless volume of the model.
    surface_area = 3.4 # float | The calculated unitless surface area of the model.
    material_id = 3.4 # float | The unique id of the desired material.
    quantity = 3.4 # float | The number of units in this quote.
    units = 'units_example' # str | The units of the model file. Either \"mm\", \"cm\", or \"in\". The correct value to pass here depends on which design program you're using. Defaults to \"mm\".
    options_orientation = True # bool | Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you're not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation. (optional)

    try:
        # Get a quote for a model with the given attributes. 
        api_response = api_instance.model_quote_attrs_get(x, y, z, volume, surface_area, material_id, quantity, units, options_orientation=options_orientation)
        print("The response of ModelApi->model_quote_attrs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_quote_attrs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x** | **float**| The calculated unitless x dimension of this model&#39;s bounding box. | 
 **y** | **float**| The calculated unitless y dimension of this model&#39;s bounding box. | 
 **z** | **float**| The calculated unitless z dimension of this model&#39;s bounding box. | 
 **volume** | **float**| The calculated unitless volume of the model. | 
 **surface_area** | **float**| The calculated unitless surface area of the model. | 
 **material_id** | **float**| The unique id of the desired material. | 
 **quantity** | **float**| The number of units in this quote. | 
 **units** | **str**| The units of the model file. Either \&quot;mm\&quot;, \&quot;cm\&quot;, or \&quot;in\&quot;. The correct value to pass here depends on which design program you&#39;re using. Defaults to \&quot;mm\&quot;. | 
 **options_orientation** | **bool**| Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you&#39;re not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation. | [optional] 

### Return type

[**ModelQuote**](ModelQuote.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote for model with attributes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_quote_get**
> ModelQuote model_quote_get(model_id, material_id, quantity, units, options_orientation=options_orientation)

Get a quote a given model id. 

Calculates a quote for the given model in the given material and quantity. This endpoint required that you've already uploaded the model to our servers -- to get a quote for a model you haven't yet uploaded, you can try /model/quote_attrs. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.model_quote import ModelQuote
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)
    model_id = 56 # int | The unique id of the model you'd like to quote.
    material_id = 3.4 # float | The unique id of the desired material.
    quantity = 3.4 # float | The number of units in this quote.
    units = 'units_example' # str | The units of the model file. Either \"mm\", \"cm\", or \"in\". The correct value to pass here depends on which design program you're using. Defaults to \"mm\".
    options_orientation = True # bool | Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you're not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation. (optional)

    try:
        # Get a quote a given model id. 
        api_response = api_instance.model_quote_get(model_id, material_id, quantity, units, options_orientation=options_orientation)
        print("The response of ModelApi->model_quote_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_quote_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| The unique id of the model you&#39;d like to quote. | 
 **material_id** | **float**| The unique id of the desired material. | 
 **quantity** | **float**| The number of units in this quote. | 
 **units** | **str**| The units of the model file. Either \&quot;mm\&quot;, \&quot;cm\&quot;, or \&quot;in\&quot;. The correct value to pass here depends on which design program you&#39;re using. Defaults to \&quot;mm\&quot;. | 
 **options_orientation** | **bool**| Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you&#39;re not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation. | [optional] 

### Return type

[**ModelQuote**](ModelQuote.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote for model with attributes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

