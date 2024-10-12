# openapi_client.GlobalWineScoreApi

All URIs are relative to *https://api.globalwinescore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalwinescores_latest_get**](GlobalWineScoreApi.md#globalwinescores_latest_get) | **GET** /globalwinescores/latest/ | List all latest GWS
[**list_historical_gws**](GlobalWineScoreApi.md#list_historical_gws) | **GET** /globalwinescores/ | List all historical GWS


# **globalwinescores_latest_get**
> globalwinescores_latest_get(authorization=authorization, wine_id=wine_id, vintage=vintage, color=color, is_primeurs=is_primeurs, lwin=lwin, lwin_11=lwin_11, limit=limit, offset=offset, ordering=ordering)

List all latest GWS

Returns the latest GWS available per wine/vintage.

### Example

* Api Key Authentication (TokenAuthentication):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.globalwinescore.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.globalwinescore.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenAuthentication
configuration.api_key['TokenAuthentication'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenAuthentication'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalWineScoreApi(api_client)
    authorization = 'Token <YOUR-API-TOKEN>' # str |  (optional)
    wine_id = [[114959,114952]] # List[int] | The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href=\"https://api.globalwinescore.com/search/\" target=\"_blank\">search page</a>  (optional)
    vintage = '2000' # str | The vintage you want to search against. (optional)
    color = 'color_example' # str | The lowercase color of the wine. (optional)
    is_primeurs = False # bool | Only show the <a href=\"See https://en.wikipedia.org/wiki/En_primeur\">en primeur</a> GlobalWineScores  (optional) (default to False)
    lwin = '1014033' # str | L-WIN wine identifier (See definition <a href=\"https://www.liv-ex.com/lwin/\" target=\"_blank\">here</a>)  (optional)
    lwin_11 = '10140332000' # str | L-WIN wine/vintage identifier (See definition <a href=\"https://www.liv-ex.com/lwin/\" target=\"_blank\">here</a>)  (optional)
    limit = 100 # int | Number of results to return per page. (optional) (default to 100)
    offset = 100 # int | The initial index from which to return the results. (optional)
    ordering = -date # str | Which field to use when ordering the results. (optional) (default to -date)

    try:
        # List all latest GWS
        api_instance.globalwinescores_latest_get(authorization=authorization, wine_id=wine_id, vintage=vintage, color=color, is_primeurs=is_primeurs, lwin=lwin, lwin_11=lwin_11, limit=limit, offset=offset, ordering=ordering)
    except Exception as e:
        print("Exception when calling GlobalWineScoreApi->globalwinescores_latest_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [optional] 
 **wine_id** | [**List[int]**](int.md)| The exact &#x60;id&#x60; of the wine. Can be used multiple times (e.g &#x60;?wine_id&#x3D;114959&amp;wine_id&#x3D;114952&#x60;) &lt;br/&gt; If you need to find the &#x60;wine_id&#x60; for your wines, use our &lt;a href&#x3D;\&quot;https://api.globalwinescore.com/search/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;search page&lt;/a&gt;  | [optional] 
 **vintage** | **str**| The vintage you want to search against. | [optional] 
 **color** | **str**| The lowercase color of the wine. | [optional] 
 **is_primeurs** | **bool**| Only show the &lt;a href&#x3D;\&quot;See https://en.wikipedia.org/wiki/En_primeur\&quot;&gt;en primeur&lt;/a&gt; GlobalWineScores  | [optional] [default to False]
 **lwin** | **str**| L-WIN wine identifier (See definition &lt;a href&#x3D;\&quot;https://www.liv-ex.com/lwin/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;)  | [optional] 
 **lwin_11** | **str**| L-WIN wine/vintage identifier (See definition &lt;a href&#x3D;\&quot;https://www.liv-ex.com/lwin/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;)  | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] [default to 100]
 **offset** | **int**| The initial index from which to return the results. | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] [default to -date]

### Return type

void (empty response body)

### Authorization

[TokenAuthentication](../README.md#TokenAuthentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_historical_gws**
> list_historical_gws(authorization=authorization, wine_id=wine_id, vintage=vintage, color=color, is_primeurs=is_primeurs, lwin=lwin, lwin_11=lwin_11, limit=limit, offset=offset, ordering=ordering)

List all historical GWS

Returns all available GWS

### Example

* Api Key Authentication (TokenAuthentication):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.globalwinescore.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.globalwinescore.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenAuthentication
configuration.api_key['TokenAuthentication'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenAuthentication'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalWineScoreApi(api_client)
    authorization = 'Token <YOUR-API-TOKEN>' # str |  (optional)
    wine_id = [[114959,114952]] # List[int] | The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href=\"https://api.globalwinescore.com/search/\" target=\"_blank\">search page</a>  (optional)
    vintage = '2000' # str | The vintage you want to search against. (optional)
    color = 'color_example' # str | The lowercase color of the wine. (optional)
    is_primeurs = False # bool | Only show the <a href=\"See https://en.wikipedia.org/wiki/En_primeur\">en primeur</a> GlobalWineScores  (optional) (default to False)
    lwin = '1014033' # str | L-WIN wine identifier (See definition <a href=\"https://www.liv-ex.com/lwin/\" target=\"_blank\">here</a>)  (optional)
    lwin_11 = '10140332000' # str | L-WIN wine/vintage identifier (See definition <a href=\"https://www.liv-ex.com/lwin/\" target=\"_blank\">here</a>)  (optional)
    limit = 100 # int | Number of results to return per page. (optional) (default to 100)
    offset = 100 # int | The initial index from which to return the results. (optional)
    ordering = -date # str | Which field to use when ordering the results. (optional) (default to -date)

    try:
        # List all historical GWS
        api_instance.list_historical_gws(authorization=authorization, wine_id=wine_id, vintage=vintage, color=color, is_primeurs=is_primeurs, lwin=lwin, lwin_11=lwin_11, limit=limit, offset=offset, ordering=ordering)
    except Exception as e:
        print("Exception when calling GlobalWineScoreApi->list_historical_gws: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [optional] 
 **wine_id** | [**List[int]**](int.md)| The exact &#x60;id&#x60; of the wine. Can be used multiple times (e.g &#x60;?wine_id&#x3D;114959&amp;wine_id&#x3D;114952&#x60;) &lt;br/&gt; If you need to find the &#x60;wine_id&#x60; for your wines, use our &lt;a href&#x3D;\&quot;https://api.globalwinescore.com/search/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;search page&lt;/a&gt;  | [optional] 
 **vintage** | **str**| The vintage you want to search against. | [optional] 
 **color** | **str**| The lowercase color of the wine. | [optional] 
 **is_primeurs** | **bool**| Only show the &lt;a href&#x3D;\&quot;See https://en.wikipedia.org/wiki/En_primeur\&quot;&gt;en primeur&lt;/a&gt; GlobalWineScores  | [optional] [default to False]
 **lwin** | **str**| L-WIN wine identifier (See definition &lt;a href&#x3D;\&quot;https://www.liv-ex.com/lwin/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;)  | [optional] 
 **lwin_11** | **str**| L-WIN wine/vintage identifier (See definition &lt;a href&#x3D;\&quot;https://www.liv-ex.com/lwin/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;)  | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] [default to 100]
 **offset** | **int**| The initial index from which to return the results. | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] [default to -date]

### Return type

void (empty response body)

### Authorization

[TokenAuthentication](../README.md#TokenAuthentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

