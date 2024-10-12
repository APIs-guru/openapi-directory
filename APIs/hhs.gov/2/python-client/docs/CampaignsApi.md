# openapi_client.CampaignsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_campaigns_id_json_get**](CampaignsApi.md#resources_campaigns_id_json_get) | **GET** /resources/campaigns/{id}.json | Get Campaign by ID
[**resources_campaigns_id_media_json_get**](CampaignsApi.md#resources_campaigns_id_media_json_get) | **GET** /resources/campaigns/{id}/media.json | Get MediaItems by Campaign ID
[**resources_campaigns_id_syndicate_format_get**](CampaignsApi.md#resources_campaigns_id_syndicate_format_get) | **GET** /resources/campaigns/{id}/syndicate.{format} | Get MediaItems for Campaign
[**resources_campaigns_json_get**](CampaignsApi.md#resources_campaigns_json_get) | **GET** /resources/campaigns.json | Get Campaigns


# **resources_campaigns_id_json_get**
> CampaignWrapped resources_campaigns_id_json_get(id)

Get Campaign by ID

Information about a specific campaign

### Example


```python
import openapi_client
from openapi_client.models.campaign_wrapped import CampaignWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    id = 56 # int | The id of the record to look up

    try:
        # Get Campaign by ID
        api_response = api_instance.resources_campaigns_id_json_get(id)
        print("The response of CampaignsApi->resources_campaigns_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->resources_campaigns_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 

### Return type

[**CampaignWrapped**](CampaignWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Campaign identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_campaigns_id_media_json_get**
> MediaItemWrapped resources_campaigns_id_media_json_get(id, sort=sort, max=max, offset=offset)

Get MediaItems by Campaign ID

Campaign Listings

### Example


```python
import openapi_client
from openapi_client.models.media_item_wrapped import MediaItemWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    id = 56 # int | The id of the campaign to find media items for
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | The offset of the records set to return for pagination (optional)

    try:
        # Get MediaItems by Campaign ID
        api_response = api_instance.resources_campaigns_id_media_json_get(id, sort=sort, max=max, offset=offset)
        print("The response of CampaignsApi->resources_campaigns_id_media_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->resources_campaigns_id_media_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the campaign to find media items for | 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| The offset of the records set to return for pagination | [optional] 

### Return type

[**MediaItemWrapped**](MediaItemWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of MediaItems for the Campaign identified by the &#39;id&#39;. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_campaigns_id_syndicate_format_get**
> SyndicateMarshallerWrapped resources_campaigns_id_syndicate_format_get(id, format, display_method=display_method)

Get MediaItems for Campaign

MediaItem

### Example


```python
import openapi_client
from openapi_client.models.syndicate_marshaller_wrapped import SyndicateMarshallerWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    id = 56 # int | The id of the record to look up
    format = 'format_example' # str | Automatically added
    display_method = 'display_method_example' # str | Method used to render an html request. Accepts one: [mv, list, feed] (optional)

    try:
        # Get MediaItems for Campaign
        api_response = api_instance.resources_campaigns_id_syndicate_format_get(id, format, display_method=display_method)
        print("The response of CampaignsApi->resources_campaigns_id_syndicate_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->resources_campaigns_id_syndicate_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 
 **format** | **str**| Automatically added | 
 **display_method** | **str**| Method used to render an html request. Accepts one: [mv, list, feed] | [optional] 

### Return type

[**SyndicateMarshallerWrapped**](SyndicateMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Renders the list of MediaItems associated with the Tag identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_campaigns_json_get**
> CampaignWrapped resources_campaigns_json_get(max=max, offset=offset, sort=sort)

Get Campaigns

Media Listings for a specific campaign

### Example


```python
import openapi_client
from openapi_client.models.campaign_wrapped import CampaignWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CampaignsApi(api_client)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | The offset of the records set to return for pagination (optional)
    sort = 'sort_example' # str | * Set of fields to sort the records by. (optional)

    try:
        # Get Campaigns
        api_response = api_instance.resources_campaigns_json_get(max=max, offset=offset, sort=sort)
        print("The response of CampaignsApi->resources_campaigns_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignsApi->resources_campaigns_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| The offset of the records set to return for pagination | [optional] 
 **sort** | **str**| * Set of fields to sort the records by. | [optional] 

### Return type

[**CampaignWrapped**](CampaignWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of Campaigns. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

