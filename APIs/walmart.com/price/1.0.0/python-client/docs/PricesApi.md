# openapi_client.PricesApi

All URIs are relative to *https://marketplace.walmartapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_strategy**](PricesApi.md#create_strategy) | **POST** /v3/repricer/strategy | Create Repricer Strategy
[**delete_strategy**](PricesApi.md#delete_strategy) | **DELETE** /v3/repricer/strategy/{strategyCollectionId} | Delete Repricer Strategy
[**get_repricer_feed**](PricesApi.md#get_repricer_feed) | **POST** /v3/repricerFeeds | Assign/Unassign items to/from Repricer Strategy
[**get_strategies**](PricesApi.md#get_strategies) | **GET** /v3/repricer/strategies | List of Repricer Strategies
[**opt_cap_program_in_price**](PricesApi.md#opt_cap_program_in_price) | **POST** /v3/cppreference | Set up CAP SKU All
[**price_bulk_uploads**](PricesApi.md#price_bulk_uploads) | **POST** /v3/feeds | Update bulk prices (Multiple)
[**update_price**](PricesApi.md#update_price) | **PUT** /v3/price | Update a price
[**update_strategy**](PricesApi.md#update_strategy) | **PUT** /v3/repricer/strategy/{strategyCollectionId} | Update Repricer Strategy


# **create_strategy**
> CreateStrategy200Response create_strategy(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, create_strategy_request, wm_consumer_channel_type=wm_consumer_channel_type)

Create Repricer Strategy

Creates a new strategy for the seller

### Example


```python
import openapi_client
from openapi_client.models.create_strategy200_response import CreateStrategy200Response
from openapi_client.models.create_strategy_request import CreateStrategyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    create_strategy_request = openapi_client.CreateStrategyRequest() # CreateStrategyRequest | The request body will have the strategy related information
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Create Repricer Strategy
        api_response = api_instance.create_strategy(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, create_strategy_request, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->create_strategy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->create_strategy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **create_strategy_request** | [**CreateStrategyRequest**](CreateStrategyRequest.md)| The request body will have the strategy related information | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**CreateStrategy200Response**](CreateStrategy200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_strategy**
> DeleteStrategy200Response delete_strategy(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, strategy_collection_id, wm_consumer_channel_type=wm_consumer_channel_type)

Delete Repricer Strategy

Deletes the strategy

### Example


```python
import openapi_client
from openapi_client.models.delete_strategy200_response import DeleteStrategy200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    strategy_collection_id = 'strategy_collection_id_example' # str | Automatically added
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Delete Repricer Strategy
        api_response = api_instance.delete_strategy(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, strategy_collection_id, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->delete_strategy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->delete_strategy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **strategy_collection_id** | **str**| Automatically added | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**DeleteStrategy200Response**](DeleteStrategy200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_repricer_feed**
> GetRepricerFeed200Response get_repricer_feed(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, get_repricer_feed_request, wm_consumer_channel_type=wm_consumer_channel_type)

Assign/Unassign items to/from Repricer Strategy

Add/Remove one or more items from a strategy

### Example


```python
import openapi_client
from openapi_client.models.get_repricer_feed200_response import GetRepricerFeed200Response
from openapi_client.models.get_repricer_feed_request import GetRepricerFeedRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    get_repricer_feed_request = openapi_client.GetRepricerFeedRequest() # GetRepricerFeedRequest | 
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Assign/Unassign items to/from Repricer Strategy
        api_response = api_instance.get_repricer_feed(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, get_repricer_feed_request, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->get_repricer_feed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->get_repricer_feed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **get_repricer_feed_request** | [**GetRepricerFeedRequest**](GetRepricerFeedRequest.md)|  | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetRepricerFeed200Response**](GetRepricerFeed200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_strategies**
> GetStrategies200Response get_strategies(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, wm_consumer_channel_type=wm_consumer_channel_type)

List of Repricer Strategies

Get the list of strategies

### Example


```python
import openapi_client
from openapi_client.models.get_strategies200_response import GetStrategies200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # List of Repricer Strategies
        api_response = api_instance.get_strategies(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->get_strategies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->get_strategies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetStrategies200Response**](GetStrategies200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **opt_cap_program_in_price**
> OptCapProgramInPrice200Response opt_cap_program_in_price(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, opt_cap_program_in_price_request, wm_consumer_channel_type=wm_consumer_channel_type)

Set up CAP SKU All

This API helps Sellers to completely opt-in or opt-out from CAP program.  If the subsidyEnrolled value = \"true\", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.  If the subsidyEnrolled value = \"false\", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.

### Example


```python
import openapi_client
from openapi_client.models.opt_cap_program_in_price200_response import OptCapProgramInPrice200Response
from openapi_client.models.opt_cap_program_in_price_request import OptCapProgramInPriceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    opt_cap_program_in_price_request = openapi_client.OptCapProgramInPriceRequest() # OptCapProgramInPriceRequest | Request fields
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Set up CAP SKU All
        api_response = api_instance.opt_cap_program_in_price(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, opt_cap_program_in_price_request, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->opt_cap_program_in_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->opt_cap_program_in_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **opt_cap_program_in_price_request** | [**OptCapProgramInPriceRequest**](OptCapProgramInPriceRequest.md)| Request fields | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**OptCapProgramInPrice200Response**](OptCapProgramInPrice200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **price_bulk_uploads**
> PriceBulkUploads200Response price_bulk_uploads(feed_type, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, file, wm_consumer_channel_type=wm_consumer_channel_type)

Update bulk prices (Multiple)

Updates prices in bulk.  In one Feed you can update up to 10,000 items in bulk. To ensure optimal Feed processing time, we recommend sending no more than 1000 items in one Feed and keeping the Feed sizes below 10 MB.  The price sequence guarantee is observed by the bulk price update functionality, subject to the following rules:  The timestamp used to determine precedence is passed in the request headers. All price updates in the feed are considered to have the same timestamp. The timestamp in the XML file is used only for auditing. You can send a single SKU multiple times in one Feed. If a SKU is repeated in a Feed, the price will be set for that SKU on Walmart.com, but there is no guarantee as to which SKU's price within that feed will be used. This API should be used in preference to the update a price. It should be called no sooner than 24 hours after a new item is set up and a wpid (Walmart Part ID) is available. Thereafter, the bulk price update has an service level agreement (SLA) of 15 minutes.  After the update is submitted, wait for at least five minutes before verifying whether the bulk price update was successful. Individual SKU price update success or failure is only available after the entire feed is processed.  If a SKU's price update fails (for example, multiple price updates were sent for the same SKU in a single feed), an error will be returned.

### Example


```python
import openapi_client
from openapi_client.models.price_bulk_uploads200_response import PriceBulkUploads200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    feed_type = 'feed_type_example' # str | The feed Type
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    file = None # bytearray | Feed file to upload
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Update bulk prices (Multiple)
        api_response = api_instance.price_bulk_uploads(feed_type, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, file, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->price_bulk_uploads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->price_bulk_uploads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feed_type** | **str**| The feed Type | 
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **file** | **bytearray**| Feed file to upload | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**PriceBulkUploads200Response**](PriceBulkUploads200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_price**
> UpdatePrice200Response update_price(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, update_price_request, wm_consumer_channel_type=wm_consumer_channel_type)

Update a price

Updates the regular price for a given item.

### Example


```python
import openapi_client
from openapi_client.models.update_price200_response import UpdatePrice200Response
from openapi_client.models.update_price_request import UpdatePriceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    update_price_request = {"pricing":[{"currentPrice":{"amount":10,"currency":"USD"},"currentPriceType":"BASE"}],"sku":"97964_KFTest"} # UpdatePriceRequest | The request body consists of a Feed file attached to the request.
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Update a price
        api_response = api_instance.update_price(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, update_price_request, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->update_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->update_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **update_price_request** | [**UpdatePriceRequest**](UpdatePriceRequest.md)| The request body consists of a Feed file attached to the request. | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**UpdatePrice200Response**](UpdatePrice200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_strategy**
> CreateStrategy200Response update_strategy(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, strategy_collection_id, create_strategy_request, wm_consumer_channel_type=wm_consumer_channel_type)

Update Repricer Strategy

Updates the existing strategy

### Example


```python
import openapi_client
from openapi_client.models.create_strategy200_response import CreateStrategy200Response
from openapi_client.models.create_strategy_request import CreateStrategyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketplace.walmartapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketplace.walmartapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricesApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    strategy_collection_id = 'strategy_collection_id_example' # str | Automatically added
    create_strategy_request = openapi_client.CreateStrategyRequest() # CreateStrategyRequest | The request body will have the strategy related information
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Update Repricer Strategy
        api_response = api_instance.update_strategy(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, strategy_collection_id, create_strategy_request, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of PricesApi->update_strategy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->update_strategy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **strategy_collection_id** | **str**| Automatically added | 
 **create_strategy_request** | [**CreateStrategyRequest**](CreateStrategyRequest.md)| The request body will have the strategy related information | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**CreateStrategy200Response**](CreateStrategy200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

