# openapi_client.InventoryApi

All URIs are relative to *https://marketplace.walmartapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_inventory**](InventoryApi.md#get_inventory) | **GET** /v3/inventory | Inventory
[**get_multi_node_inventory_for_all_sku_and_all_ship_nodes**](InventoryApi.md#get_multi_node_inventory_for_all_sku_and_all_ship_nodes) | **GET** /v3/inventories | Multiple Item Inventory for All Ship Nodes
[**get_multi_node_inventory_for_sku_and_all_shipnodes**](InventoryApi.md#get_multi_node_inventory_for_sku_and_all_shipnodes) | **GET** /v3/inventories/{sku} | Single Item Inventory by Ship Node
[**get_wfs_inventory**](InventoryApi.md#get_wfs_inventory) | **GET** /v3/fulfillment/inventory | WFS Inventory
[**update_bulk_inventory**](InventoryApi.md#update_bulk_inventory) | **POST** /v3/feeds | Bulk Item Inventory Update
[**update_inventory_for_an_item**](InventoryApi.md#update_inventory_for_an_item) | **PUT** /v3/inventory | Update inventory
[**update_multi_node_inventory**](InventoryApi.md#update_multi_node_inventory) | **PUT** /v3/inventories/{sku} | Update Item Inventory per Ship Node


# **get_inventory**
> GetInventory200Response get_inventory(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)

Inventory

You can use this API to get the inventory for a given item.

### Example


```python
import openapi_client
from openapi_client.models.get_inventory200_response import GetInventory200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    sku = 'sku_example' # str | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', \"'\", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    ship_node = 'ship_node_example' # str | The shipNode for which the inventory is requested (optional)
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Inventory
        api_response = api_instance.get_inventory(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->get_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **str**| An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: &#39;:&#39;, &#39;/&#39;, &#39;?&#39;, &#39;#&#39;, &#39;[&#39;, &#39;]&#39;, &#39;@&#39;, &#39;!&#39;, &#39;$&#39;, &#39;&amp;&#39;, \&quot;&#39;\&quot;, &#39;(&#39;, &#39;)&#39;, &#39;*&#39;, &#39;+&#39;, &#39;,&#39;, &#39;;&#39;, &#39;&#x3D;&#39;, ‘ ’, &#39;{&#39;, &#39;}&#39; as well as &#39;%&#39; itself if it&#39;s a part of sku. Make sure to encode space with %20. Other characters don&#39;t need to be encoded. | 
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **ship_node** | **str**| The shipNode for which the inventory is requested | [optional] 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetInventory200Response**](GetInventory200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_multi_node_inventory_for_all_sku_and_all_ship_nodes**
> GetMultiNodeInventoryForAllSkuAndAllShipNodes200Response get_multi_node_inventory_for_all_sku_and_all_ship_nodes(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, limit=limit, next_cursor=next_cursor, wm_consumer_channel_type=wm_consumer_channel_type)

Multiple Item Inventory for All Ship Nodes

This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.

### Example


```python
import openapi_client
from openapi_client.models.get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response import GetMultiNodeInventoryForAllSkuAndAllShipNodes200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    limit = '10' # str | The number of items returned. Cannot be more than 50. (optional) (default to '10')
    next_cursor = 'next_cursor_example' # str | String returned from initial API call to indicate pagination. Specify nextCursor value to retrieve the next 50 items. (optional)
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Multiple Item Inventory for All Ship Nodes
        api_response = api_instance.get_multi_node_inventory_for_all_sku_and_all_ship_nodes(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, limit=limit, next_cursor=next_cursor, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->get_multi_node_inventory_for_all_sku_and_all_ship_nodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_multi_node_inventory_for_all_sku_and_all_ship_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **limit** | **str**| The number of items returned. Cannot be more than 50. | [optional] [default to &#39;10&#39;]
 **next_cursor** | **str**| String returned from initial API call to indicate pagination. Specify nextCursor value to retrieve the next 50 items. | [optional] 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetMultiNodeInventoryForAllSkuAndAllShipNodes200Response**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200Response.md)

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

# **get_multi_node_inventory_for_sku_and_all_shipnodes**
> GetMultiNodeInventoryForSkuAndAllShipnodes200Response get_multi_node_inventory_for_sku_and_all_shipnodes(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)

Single Item Inventory by Ship Node

This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory

### Example


```python
import openapi_client
from openapi_client.models.get_multi_node_inventory_for_sku_and_all_shipnodes200_response import GetMultiNodeInventoryForSkuAndAllShipnodes200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    sku = 'sku_example' # str | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', \"'\", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    ship_node = 'ship_node_example' # str | ShipNode Id of the ship node for which the inventory is requested (optional)
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Single Item Inventory by Ship Node
        api_response = api_instance.get_multi_node_inventory_for_sku_and_all_shipnodes(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->get_multi_node_inventory_for_sku_and_all_shipnodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_multi_node_inventory_for_sku_and_all_shipnodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **str**| An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: &#39;:&#39;, &#39;/&#39;, &#39;?&#39;, &#39;#&#39;, &#39;[&#39;, &#39;]&#39;, &#39;@&#39;, &#39;!&#39;, &#39;$&#39;, &#39;&amp;&#39;, \&quot;&#39;\&quot;, &#39;(&#39;, &#39;)&#39;, &#39;*&#39;, &#39;+&#39;, &#39;,&#39;, &#39;;&#39;, &#39;&#x3D;&#39;, ‘ ’ as well as &#39;%&#39; itself if it&#39;s a part of sku. Make sure to encode space with %20. Other characters don&#39;t need to be encoded. | 
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **ship_node** | **str**| ShipNode Id of the ship node for which the inventory is requested | [optional] 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetMultiNodeInventoryForSkuAndAllShipnodes200Response**](GetMultiNodeInventoryForSkuAndAllShipnodes200Response.md)

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

# **get_wfs_inventory**
> GetWFSInventory200Response get_wfs_inventory(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, sku=sku, from_modified_date=from_modified_date, to_modified_date=to_modified_date, limit=limit, offset=offset, wm_consumer_channel_type=wm_consumer_channel_type)

WFS Inventory

You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.

### Example


```python
import openapi_client
from openapi_client.models.get_wfs_inventory200_response import GetWFSInventory200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    sku = 'sku_example' # str | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', \"'\", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded. (optional)
    from_modified_date = 'from_modified_date_example' # str | last inventory modified date - starting range. (optional)
    to_modified_date = 'to_modified_date_example' # str | last inventory modified date - starting range. (optional)
    limit = '10' # str | Number of Sku to be returned. Cannot be larger than 300. (optional) (default to '10')
    offset = '0' # str | Offset is the number of records you wish to skip before selecting records. (optional) (default to '0')
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # WFS Inventory
        api_response = api_instance.get_wfs_inventory(wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, sku=sku, from_modified_date=from_modified_date, to_modified_date=to_modified_date, limit=limit, offset=offset, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->get_wfs_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_wfs_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **sku** | **str**| An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: &#39;:&#39;, &#39;/&#39;, &#39;?&#39;, &#39;#&#39;, &#39;[&#39;, &#39;]&#39;, &#39;@&#39;, &#39;!&#39;, &#39;$&#39;, &#39;&amp;&#39;, \&quot;&#39;\&quot;, &#39;(&#39;, &#39;)&#39;, &#39;*&#39;, &#39;+&#39;, &#39;,&#39;, &#39;;&#39;, &#39;&#x3D;&#39;, ‘ ’ as well as &#39;%&#39; itself if it&#39;s a part of sku. Make sure to encode space with %20. Other characters don&#39;t need to be encoded. | [optional] 
 **from_modified_date** | **str**| last inventory modified date - starting range. | [optional] 
 **to_modified_date** | **str**| last inventory modified date - starting range. | [optional] 
 **limit** | **str**| Number of Sku to be returned. Cannot be larger than 300. | [optional] [default to &#39;10&#39;]
 **offset** | **str**| Offset is the number of records you wish to skip before selecting records. | [optional] [default to &#39;0&#39;]
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetWFSInventory200Response**](GetWFSInventory200Response.md)

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

# **update_bulk_inventory**
> UpdateBulkInventory200Response update_bulk_inventory(feed_type, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, file, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)

Bulk Item Inventory Update

Updates inventory for items in bulk.  Seller Can either use feed type \"inventory\" or \"MP_INVENTORY\"  * Inventory spec 1.4 feed type: inventory  * Inventory spec 1.5 feed type: MP_INVENTORY   Please Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and Responses. Refer to \"MultiNode_Bulk_Inventory_Update_Request.json\" for the corresponding request sample    Refer to the <a href=\"https://developer.walmart.com/doc/us/us-mp/us-mp-inventory/\">guide section</a> for more detailed guide around each of the feed types    Refer to the throttling limits before uploading the Feed Files.

### Example


```python
import openapi_client
from openapi_client.models.update_bulk_inventory200_response import UpdateBulkInventory200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    feed_type = 'feed_type_example' # str | The feed Type
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    file = None # bytearray | Feed file to upload
    ship_node = 'ship_node_example' # str | The shipNode for which the inventory is to be updated. Not required in case of Multi Node Inventory Update Feed (feedType=MP_INVENTORY) (optional)
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Bulk Item Inventory Update
        api_response = api_instance.update_bulk_inventory(feed_type, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, file, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->update_bulk_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->update_bulk_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feed_type** | **str**| The feed Type | 
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **file** | **bytearray**| Feed file to upload | 
 **ship_node** | **str**| The shipNode for which the inventory is to be updated. Not required in case of Multi Node Inventory Update Feed (feedType&#x3D;MP_INVENTORY) | [optional] 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**UpdateBulkInventory200Response**](UpdateBulkInventory200Response.md)

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

# **update_inventory_for_an_item**
> GetInventory200Response update_inventory_for_an_item(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, get_inventory200_response, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)

Update inventory

Updates the inventory for a given item.

### Example


```python
import openapi_client
from openapi_client.models.get_inventory200_response import GetInventory200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    sku = 'sku_example' # str | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', \"'\", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    get_inventory200_response = {"quantity":{"amount":10,"unit":"EACH"},"sku":"97964_KFTest"} # GetInventory200Response | File fields
    ship_node = 'ship_node_example' # str | The shipNode for which the inventory is to be updated. (optional)
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Update inventory
        api_response = api_instance.update_inventory_for_an_item(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, get_inventory200_response, ship_node=ship_node, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->update_inventory_for_an_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->update_inventory_for_an_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **str**| An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: &#39;:&#39;, &#39;/&#39;, &#39;?&#39;, &#39;#&#39;, &#39;[&#39;, &#39;]&#39;, &#39;@&#39;, &#39;!&#39;, &#39;$&#39;, &#39;&amp;&#39;, \&quot;&#39;\&quot;, &#39;(&#39;, &#39;)&#39;, &#39;*&#39;, &#39;+&#39;, &#39;,&#39;, &#39;;&#39;, &#39;&#x3D;&#39;, ‘ ’, &#39;{&#39;, &#39;}&#39; as well as &#39;%&#39; itself if it&#39;s a part of sku. Make sure to encode space with %20. Other characters don&#39;t need to be encoded. | 
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **get_inventory200_response** | [**GetInventory200Response**](GetInventory200Response.md)| File fields | 
 **ship_node** | **str**| The shipNode for which the inventory is to be updated. | [optional] 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**GetInventory200Response**](GetInventory200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_multi_node_inventory**
> UpdateMultiNodeInventory200Response update_multi_node_inventory(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, update_multi_node_inventory_request, wm_consumer_channel_type=wm_consumer_channel_type)

Update Item Inventory per Ship Node

This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.

### Example


```python
import openapi_client
from openapi_client.models.update_multi_node_inventory200_response import UpdateMultiNodeInventory200Response
from openapi_client.models.update_multi_node_inventory_request import UpdateMultiNodeInventoryRequest
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
    api_instance = openapi_client.InventoryApi(api_client)
    sku = 'sku_example' # str | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', \"'\", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
    wm_sec_access_token = 'eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....' # str | The access token retrieved in the Token API call
    wm_qos_correlation_id = 'b3261d2d-028a-4ef7-8602-633c23200af6' # str | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
    wm_svc_name = 'Walmart Service Name' # str | Walmart Service Name
    update_multi_node_inventory_request = {"inventories":{"nodes":[{"inputQty":{"amount":88,"unit":"EACH"},"shipNode":"1000005050"},{"inputQty":{"amount":55,"unit":"EACH"},"shipNode":"79897837271126017"}]}} # UpdateMultiNodeInventoryRequest | Request fields
    wm_consumer_channel_type = 'wm_consumer_channel_type_example' # str | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding (optional)

    try:
        # Update Item Inventory per Ship Node
        api_response = api_instance.update_multi_node_inventory(sku, wm_sec_access_token, wm_qos_correlation_id, wm_svc_name, update_multi_node_inventory_request, wm_consumer_channel_type=wm_consumer_channel_type)
        print("The response of InventoryApi->update_multi_node_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->update_multi_node_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **str**| An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: &#39;:&#39;, &#39;/&#39;, &#39;?&#39;, &#39;#&#39;, &#39;[&#39;, &#39;]&#39;, &#39;@&#39;, &#39;!&#39;, &#39;$&#39;, &#39;&amp;&#39;, \&quot;&#39;\&quot;, &#39;(&#39;, &#39;)&#39;, &#39;*&#39;, &#39;+&#39;, &#39;,&#39;, &#39;;&#39;, &#39;&#x3D;&#39;, ‘ ’ as well as &#39;%&#39; itself if it&#39;s a part of sku. Make sure to encode space with %20. Other characters don&#39;t need to be encoded. | 
 **wm_sec_access_token** | **str**| The access token retrieved in the Token API call | 
 **wm_qos_correlation_id** | **str**| A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID | 
 **wm_svc_name** | **str**| Walmart Service Name | 
 **update_multi_node_inventory_request** | [**UpdateMultiNodeInventoryRequest**](UpdateMultiNodeInventoryRequest.md)| Request fields | 
 **wm_consumer_channel_type** | **str**| A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding | [optional] 

### Return type

[**UpdateMultiNodeInventory200Response**](UpdateMultiNodeInventory200Response.md)

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

