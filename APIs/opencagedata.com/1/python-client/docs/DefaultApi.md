# openapi_client.DefaultApi

All URIs are relative to *https://api.opencagedata.com/geocode*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vversion_format_get**](DefaultApi.md#vversion_format_get) | **GET** /v{version}/{format} | 


# **vversion_format_get**
> Response vversion_format_get(version, format, q, key, abbrv=abbrv, address_only=address_only, add_request=add_request, bounds=bounds, countrycode=countrycode, jsonp=jsonp, language=language, limit=limit, min_confidence=min_confidence, no_annotations=no_annotations, no_dedupe=no_dedupe, no_record=no_record, pretty=pretty, proximity=proximity, roadinfo=roadinfo)



geocode a query

### Example


```python
import openapi_client
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.opencagedata.com/geocode
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.opencagedata.com/geocode"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    version = 56 # int | API version.
    format = 'format_example' # str | format of the response. One of 'json', 'xml' or 'map'.
    q = 'q_example' # str | string or lat,lng to be geocoded.
    key = 'key_example' # str | an application key.
    abbrv = True # bool | when true we attempt to abbreviate the formatted field of results. (optional)
    address_only = True # bool | when true we include only address details in the formatted field of results. (optional)
    add_request = True # bool | if true the request is included in the response. (optional)
    bounds = 'bounds_example' # str | four coordinate points forming the south-west and north-east corners of a bounding box (min long, min lat, max long, max lat). (optional)
    countrycode = 'countrycode_example' # str | two letter code ISO 3166-1 Alpha 2 code to limit results to that country. (optional)
    jsonp = 'jsonp_example' # str | wraps the returned JSON with a function name. (optional)
    language = 'language_example' # str | an IETF format language code (ex: 'es' or 'pt-BR'). (optional)
    limit = 56 # int | maximum number of results to return. Default is 10. Maximum is 100. (optional)
    min_confidence = 56 # int | integer from 1-10. Only results with at least this confidence are returned. (optional)
    no_annotations = True # bool | when true annotations are not added to results. (optional)
    no_dedupe = True # bool | when true results are not deduplicated. (optional)
    no_record = True # bool | when true query content is not logged. (optional)
    pretty = True # bool | when true results are pretty printed. Useful for debugging. (optional)
    proximity = 'proximity_example' # str | lat,lng to bias results. (optional)
    roadinfo = True # bool | match nearest road, include roadinfo annotation (optional)

    try:
        api_response = api_instance.vversion_format_get(version, format, q, key, abbrv=abbrv, address_only=address_only, add_request=add_request, bounds=bounds, countrycode=countrycode, jsonp=jsonp, language=language, limit=limit, min_confidence=min_confidence, no_annotations=no_annotations, no_dedupe=no_dedupe, no_record=no_record, pretty=pretty, proximity=proximity, roadinfo=roadinfo)
        print("The response of DefaultApi->vversion_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vversion_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **int**| API version. | 
 **format** | **str**| format of the response. One of &#39;json&#39;, &#39;xml&#39; or &#39;map&#39;. | 
 **q** | **str**| string or lat,lng to be geocoded. | 
 **key** | **str**| an application key. | 
 **abbrv** | **bool**| when true we attempt to abbreviate the formatted field of results. | [optional] 
 **address_only** | **bool**| when true we include only address details in the formatted field of results. | [optional] 
 **add_request** | **bool**| if true the request is included in the response. | [optional] 
 **bounds** | **str**| four coordinate points forming the south-west and north-east corners of a bounding box (min long, min lat, max long, max lat). | [optional] 
 **countrycode** | **str**| two letter code ISO 3166-1 Alpha 2 code to limit results to that country. | [optional] 
 **jsonp** | **str**| wraps the returned JSON with a function name. | [optional] 
 **language** | **str**| an IETF format language code (ex: &#39;es&#39; or &#39;pt-BR&#39;). | [optional] 
 **limit** | **int**| maximum number of results to return. Default is 10. Maximum is 100. | [optional] 
 **min_confidence** | **int**| integer from 1-10. Only results with at least this confidence are returned. | [optional] 
 **no_annotations** | **bool**| when true annotations are not added to results. | [optional] 
 **no_dedupe** | **bool**| when true results are not deduplicated. | [optional] 
 **no_record** | **bool**| when true query content is not logged. | [optional] 
 **pretty** | **bool**| when true results are pretty printed. Useful for debugging. | [optional] 
 **proximity** | **str**| lat,lng to bias results. | [optional] 
 **roadinfo** | **bool**| match nearest road, include roadinfo annotation | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Invalid request |  -  |
**401** | Unable to authenticate |  -  |
**402** | Valid request but quota exceeded |  -  |
**403** | Forbidden |  -  |
**404** | Invalid API endpoint |  -  |
**405** | Method not allowed |  -  |
**408** | Timeout; you can try again |  -  |
**410** | Request too long |  -  |
**426** | Upgrade required |  -  |
**429** | Too many requests |  -  |
**503** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

