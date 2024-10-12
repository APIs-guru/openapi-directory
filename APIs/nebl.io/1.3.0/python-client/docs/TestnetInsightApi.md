# openapi_client.TestnetInsightApi

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testnet_get_address**](TestnetInsightApi.md#testnet_get_address) | **GET** /testnet/ins/addr/{address} | Returns address object
[**testnet_get_address_balance**](TestnetInsightApi.md#testnet_get_address_balance) | **GET** /testnet/ins/addr/{address}/balance | Returns address balance in sats
[**testnet_get_address_total_received**](TestnetInsightApi.md#testnet_get_address_total_received) | **GET** /testnet/ins/addr/{address}/totalReceived | Returns total received by address in sats
[**testnet_get_address_total_sent**](TestnetInsightApi.md#testnet_get_address_total_sent) | **GET** /testnet/ins/addr/{address}/totalSent | Returns total sent by address in sats
[**testnet_get_address_unconfirmed_balance**](TestnetInsightApi.md#testnet_get_address_unconfirmed_balance) | **GET** /testnet/ins/addr/{address}/unconfirmedBalance | Returns address unconfirmed balance in sats
[**testnet_get_address_utxos**](TestnetInsightApi.md#testnet_get_address_utxos) | **GET** /testnet/ins/addr/{address}/utxo | Returns all UTXOs at a given address
[**testnet_get_block**](TestnetInsightApi.md#testnet_get_block) | **GET** /testnet/ins/block/{blockhash} | Returns information regarding a Neblio block
[**testnet_get_block_index**](TestnetInsightApi.md#testnet_get_block_index) | **GET** /testnet/ins/block-index/{blockindex} | Returns block hash of block
[**testnet_get_raw_tx**](TestnetInsightApi.md#testnet_get_raw_tx) | **GET** /testnet/ins/rawtx/{txid} | Returns raw transaction hex
[**testnet_get_status**](TestnetInsightApi.md#testnet_get_status) | **GET** /testnet/ins/status | Utility API for calling several blockchain node functions
[**testnet_get_sync**](TestnetInsightApi.md#testnet_get_sync) | **GET** /testnet/ins/sync | Get node sync status
[**testnet_get_tx**](TestnetInsightApi.md#testnet_get_tx) | **GET** /testnet/ins/tx/{txid} | Returns transaction object
[**testnet_get_txs**](TestnetInsightApi.md#testnet_get_txs) | **GET** /testnet/ins/txs | Get transactions by block or address
[**testnet_send_tx**](TestnetInsightApi.md#testnet_send_tx) | **POST** /testnet/ins/tx/send | Broadcasts a signed raw transaction to the network (not NTP1 specific)


# **testnet_get_address**
> GetAddressResponse testnet_get_address(address)

Returns address object

Returns NEBL address object containing information on a specific address

### Example


```python
import openapi_client
from openapi_client.models.get_address_response import GetAddressResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address

    try:
        # Returns address object
        api_response = api_instance.testnet_get_address(address)
        print("The response of TestnetInsightApi->testnet_get_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | 

### Return type

[**GetAddressResponse**](GetAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing address info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_address_balance**
> float testnet_get_address_balance(address)

Returns address balance in sats

Returns NEBL address balance in satoshis

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address

    try:
        # Returns address balance in sats
        api_response = api_instance.testnet_get_address_balance(address)
        print("The response of TestnetInsightApi->testnet_get_address_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_address_balance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | 

### Return type

**float**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Address balance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_address_total_received**
> float testnet_get_address_total_received(address)

Returns total received by address in sats

Returns total NEBL received by address in satoshis

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address

    try:
        # Returns total received by address in sats
        api_response = api_instance.testnet_get_address_total_received(address)
        print("The response of TestnetInsightApi->testnet_get_address_total_received:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_address_total_received: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | 

### Return type

**float**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Total received by address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_address_total_sent**
> float testnet_get_address_total_sent(address)

Returns total sent by address in sats

Returns total NEBL sent by address in satoshis

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address

    try:
        # Returns total sent by address in sats
        api_response = api_instance.testnet_get_address_total_sent(address)
        print("The response of TestnetInsightApi->testnet_get_address_total_sent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_address_total_sent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | 

### Return type

**float**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Total sent by address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_address_unconfirmed_balance**
> float testnet_get_address_unconfirmed_balance(address)

Returns address unconfirmed balance in sats

Returns NEBL address unconfirmed balance in satoshis

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address

    try:
        # Returns address unconfirmed balance in sats
        api_response = api_instance.testnet_get_address_unconfirmed_balance(address)
        print("The response of TestnetInsightApi->testnet_get_address_unconfirmed_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_address_unconfirmed_balance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | 

### Return type

**float**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Address unconfirmed balance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_address_utxos**
> List[GetAddressUtxosResponseInner] testnet_get_address_utxos(address)

Returns all UTXOs at a given address

Returns information on each Unspent Transaction Output contained at an address

### Example


```python
import openapi_client
from openapi_client.models.get_address_utxos_response_inner import GetAddressUtxosResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address

    try:
        # Returns all UTXOs at a given address
        api_response = api_instance.testnet_get_address_utxos(address)
        print("The response of TestnetInsightApi->testnet_get_address_utxos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_address_utxos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | 

### Return type

[**List[GetAddressUtxosResponseInner]**](GetAddressUtxosResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UTXOs at an address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_block**
> GetBlockResponse testnet_get_block(blockhash)

Returns information regarding a Neblio block

Returns blockchain data for a given block based upon the block hash

### Example


```python
import openapi_client
from openapi_client.models.get_block_response import GetBlockResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    blockhash = 'blockhash_example' # str | Block Hash

    try:
        # Returns information regarding a Neblio block
        api_response = api_instance.testnet_get_block(blockhash)
        print("The response of TestnetInsightApi->testnet_get_block:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockhash** | **str**| Block Hash | 

### Return type

[**GetBlockResponse**](GetBlockResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing all information on a blockchain block |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_block_index**
> GetBlockIndexResponse testnet_get_block_index(blockindex)

Returns block hash of block

Returns the block hash of a block at a given block index

### Example


```python
import openapi_client
from openapi_client.models.get_block_index_response import GetBlockIndexResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    blockindex = 3.4 # float | Block Index

    try:
        # Returns block hash of block
        api_response = api_instance.testnet_get_block_index(blockindex)
        print("The response of TestnetInsightApi->testnet_get_block_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_block_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockindex** | **float**| Block Index | 

### Return type

[**GetBlockIndexResponse**](GetBlockIndexResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing block hash |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_raw_tx**
> GetRawTxResponse testnet_get_raw_tx(txid)

Returns raw transaction hex

Returns raw transaction hex representing a NEBL transaction

### Example


```python
import openapi_client
from openapi_client.models.get_raw_tx_response import GetRawTxResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    txid = 'txid_example' # str | Transaction ID

    try:
        # Returns raw transaction hex
        api_response = api_instance.testnet_get_raw_tx(txid)
        print("The response of TestnetInsightApi->testnet_get_raw_tx:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_raw_tx: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **str**| Transaction ID | 

### Return type

[**GetRawTxResponse**](GetRawTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing raw hex of transaction |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_status**
> object testnet_get_status(q=q)

Utility API for calling several blockchain node functions

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    q = 'q_example' # str | Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash (optional)

    try:
        # Utility API for calling several blockchain node functions
        api_response = api_instance.testnet_get_status(q=q)
        print("The response of TestnetInsightApi->testnet_get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Function Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_sync**
> GetSyncResponse testnet_get_sync()

Get node sync status

Returns information on the node's sync progress

### Example


```python
import openapi_client
from openapi_client.models.get_sync_response import GetSyncResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)

    try:
        # Get node sync status
        api_response = api_instance.testnet_get_sync()
        print("The response of TestnetInsightApi->testnet_get_sync:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_sync: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSyncResponse**](GetSyncResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sync Info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_tx**
> GetTxResponse testnet_get_tx(txid)

Returns transaction object

Returns NEBL transaction object representing a NEBL transaction

### Example


```python
import openapi_client
from openapi_client.models.get_tx_response import GetTxResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    txid = 'txid_example' # str | Transaction ID

    try:
        # Returns transaction object
        api_response = api_instance.testnet_get_tx(txid)
        print("The response of TestnetInsightApi->testnet_get_tx:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_tx: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **str**| Transaction ID | 

### Return type

[**GetTxResponse**](GetTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing transaction info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_get_txs**
> GetTxsResponse testnet_get_txs(address=address, block=block, page_num=page_num)

Get transactions by block or address

Returns all transactions by block or address

### Example


```python
import openapi_client
from openapi_client.models.get_txs_response import GetTxsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    address = 'address_example' # str | Address (optional)
    block = 'block_example' # str | Block Hash (optional)
    page_num = 3.4 # float | Page number to display (optional)

    try:
        # Get transactions by block or address
        api_response = api_instance.testnet_get_txs(address=address, block=block, page_num=page_num)
        print("The response of TestnetInsightApi->testnet_get_txs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_get_txs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address | [optional] 
 **block** | **str**| Block Hash | [optional] 
 **page_num** | **float**| Page number to display | [optional] 

### Return type

[**GetTxsResponse**](GetTxsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of transactions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testnet_send_tx**
> BroadcastTxResponse testnet_send_tx(send_tx_request)

Broadcasts a signed raw transaction to the network (not NTP1 specific)

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 

### Example


```python
import openapi_client
from openapi_client.models.broadcast_tx_response import BroadcastTxResponse
from openapi_client.models.send_tx_request import SendTxRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestnetInsightApi(api_client)
    send_tx_request = openapi_client.SendTxRequest() # SendTxRequest | Object representing a transaction to broadcast

    try:
        # Broadcasts a signed raw transaction to the network (not NTP1 specific)
        api_response = api_instance.testnet_send_tx(send_tx_request)
        print("The response of TestnetInsightApi->testnet_send_tx:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestnetInsightApi->testnet_send_tx: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_tx_request** | [**SendTxRequest**](SendTxRequest.md)| Object representing a transaction to broadcast | 

### Return type

[**BroadcastTxResponse**](BroadcastTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object containing the TXID if the broadcast was successful |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

