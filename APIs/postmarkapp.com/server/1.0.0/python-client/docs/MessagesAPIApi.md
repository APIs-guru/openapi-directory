# openapi_client.MessagesAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bypass_rules_for_inbound_message**](MessagesAPIApi.md#bypass_rules_for_inbound_message) | **PUT** /messages/inbound/{messageid}/bypass | Bypass rules for a blocked inbound message
[**get_clicks_for_single_outbound_message**](MessagesAPIApi.md#get_clicks_for_single_outbound_message) | **GET** /messages/outbound/clicks/{messageid} | Retrieve Message Clicks
[**get_inbound_message_details**](MessagesAPIApi.md#get_inbound_message_details) | **GET** /messages/inbound/{messageid}/details | Inbound message details
[**get_opens_for_single_outbound_message**](MessagesAPIApi.md#get_opens_for_single_outbound_message) | **GET** /messages/outbound/opens/{messageid} | Retrieve Message Opens
[**get_outbound_message_details**](MessagesAPIApi.md#get_outbound_message_details) | **GET** /messages/outbound/{messageid}/details | Outbound message details
[**get_outbound_message_dump**](MessagesAPIApi.md#get_outbound_message_dump) | **GET** /messages/outbound/{messageid}/dump | Outbound message dump
[**retry_inbound_message_processing**](MessagesAPIApi.md#retry_inbound_message_processing) | **PUT** /messages/inbound/{messageid}/retry | Retry a failed inbound message for processing
[**search_clicks_for_outbound_messages**](MessagesAPIApi.md#search_clicks_for_outbound_messages) | **GET** /messages/outbound/clicks | Clicks for a all messages
[**search_inbound_messages**](MessagesAPIApi.md#search_inbound_messages) | **GET** /messages/inbound | Inbound message search
[**search_opens_for_outbound_messages**](MessagesAPIApi.md#search_opens_for_outbound_messages) | **GET** /messages/outbound/opens | Opens for all messages
[**search_outbound_messages**](MessagesAPIApi.md#search_outbound_messages) | **GET** /messages/outbound | Outbound message search


# **bypass_rules_for_inbound_message**
> StandardPostmarkResponse bypass_rules_for_inbound_message(x_postmark_server_token, messageid)

Bypass rules for a blocked inbound message

### Example


```python
import openapi_client
from openapi_client.models.standard_postmark_response import StandardPostmarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the message which should bypass inbound rules.

    try:
        # Bypass rules for a blocked inbound message
        api_response = api_instance.bypass_rules_for_inbound_message(x_postmark_server_token, messageid)
        print("The response of MessagesAPIApi->bypass_rules_for_inbound_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->bypass_rules_for_inbound_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the message which should bypass inbound rules. | 

### Return type

[**StandardPostmarkResponse**](StandardPostmarkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_clicks_for_single_outbound_message**
> MessageClickSearchResponse get_clicks_for_single_outbound_message(x_postmark_server_token, messageid, count, offset)

Retrieve Message Clicks

### Example


```python
import openapi_client
from openapi_client.models.message_click_search_response import MessageClickSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the Outbound Message for which click statistics should be retrieved.
    count = 1 # int | Number of message clicks to return per request. Max 500. (default to 1)
    offset = 0 # int | Number of messages to skip. (default to 0)

    try:
        # Retrieve Message Clicks
        api_response = api_instance.get_clicks_for_single_outbound_message(x_postmark_server_token, messageid, count, offset)
        print("The response of MessagesAPIApi->get_clicks_for_single_outbound_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->get_clicks_for_single_outbound_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the Outbound Message for which click statistics should be retrieved. | 
 **count** | **int**| Number of message clicks to return per request. Max 500. | [default to 1]
 **offset** | **int**| Number of messages to skip. | [default to 0]

### Return type

[**MessageClickSearchResponse**](MessageClickSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_inbound_message_details**
> InboundMessageFullDetailsResponse get_inbound_message_details(x_postmark_server_token, messageid)

Inbound message details

### Example


```python
import openapi_client
from openapi_client.models.inbound_message_full_details_response import InboundMessageFullDetailsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the message for which to details will be retrieved.

    try:
        # Inbound message details
        api_response = api_instance.get_inbound_message_details(x_postmark_server_token, messageid)
        print("The response of MessagesAPIApi->get_inbound_message_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->get_inbound_message_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the message for which to details will be retrieved. | 

### Return type

[**InboundMessageFullDetailsResponse**](InboundMessageFullDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_opens_for_single_outbound_message**
> MessageOpenSearchResponse get_opens_for_single_outbound_message(x_postmark_server_token, messageid, count, offset)

Retrieve Message Opens

### Example


```python
import openapi_client
from openapi_client.models.message_open_search_response import MessageOpenSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the Outbound Message for which open statistics should be retrieved.
    count = 1 # int | Number of message opens to return per request. Max 500. (default to 1)
    offset = 0 # int | Number of messages to skip. (default to 0)

    try:
        # Retrieve Message Opens
        api_response = api_instance.get_opens_for_single_outbound_message(x_postmark_server_token, messageid, count, offset)
        print("The response of MessagesAPIApi->get_opens_for_single_outbound_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->get_opens_for_single_outbound_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the Outbound Message for which open statistics should be retrieved. | 
 **count** | **int**| Number of message opens to return per request. Max 500. | [default to 1]
 **offset** | **int**| Number of messages to skip. | [default to 0]

### Return type

[**MessageOpenSearchResponse**](MessageOpenSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_message_details**
> OutboundMessageDetailsResponse get_outbound_message_details(x_postmark_server_token, messageid)

Outbound message details

### Example


```python
import openapi_client
from openapi_client.models.outbound_message_details_response import OutboundMessageDetailsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the message for which to retrieve details.

    try:
        # Outbound message details
        api_response = api_instance.get_outbound_message_details(x_postmark_server_token, messageid)
        print("The response of MessagesAPIApi->get_outbound_message_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->get_outbound_message_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the message for which to retrieve details. | 

### Return type

[**OutboundMessageDetailsResponse**](OutboundMessageDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_message_dump**
> OutboundMessageDumpResponse get_outbound_message_dump(x_postmark_server_token, messageid)

Outbound message dump

### Example


```python
import openapi_client
from openapi_client.models.outbound_message_dump_response import OutboundMessageDumpResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the message for which to retrieve a dump.

    try:
        # Outbound message dump
        api_response = api_instance.get_outbound_message_dump(x_postmark_server_token, messageid)
        print("The response of MessagesAPIApi->get_outbound_message_dump:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->get_outbound_message_dump: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the message for which to retrieve a dump. | 

### Return type

[**OutboundMessageDumpResponse**](OutboundMessageDumpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retry_inbound_message_processing**
> StandardPostmarkResponse retry_inbound_message_processing(x_postmark_server_token, messageid)

Retry a failed inbound message for processing

### Example


```python
import openapi_client
from openapi_client.models.standard_postmark_response import StandardPostmarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    messageid = 'messageid_example' # str | The ID of the inbound message on which we should retry processing.

    try:
        # Retry a failed inbound message for processing
        api_response = api_instance.retry_inbound_message_processing(x_postmark_server_token, messageid)
        print("The response of MessagesAPIApi->retry_inbound_message_processing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->retry_inbound_message_processing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **messageid** | **str**| The ID of the inbound message on which we should retry processing. | 

### Return type

[**StandardPostmarkResponse**](StandardPostmarkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_clicks_for_outbound_messages**
> MessageClickSearchResponse search_clicks_for_outbound_messages(x_postmark_server_token, count, offset, recipient=recipient, tag=tag, client_name=client_name, client_company=client_company, client_family=client_family, os_name=os_name, os_family=os_family, os_company=os_company, platform=platform, country=country, region=region, city=city)

Clicks for a all messages

### Example


```python
import openapi_client
from openapi_client.models.message_click_search_response import MessageClickSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 56 # int | Number of message clicks to return per request. Max 500.
    offset = 56 # int | Number of messages to skip
    recipient = 'recipient_example' # str | Filter by To, Cc, Bcc (optional)
    tag = 'tag_example' # str | Filter by tag (optional)
    client_name = 'client_name_example' # str | Filter by client name, i.e. Outlook, Gmail (optional)
    client_company = 'client_company_example' # str | Filter by company, i.e. Microsoft, Apple, Google (optional)
    client_family = 'client_family_example' # str | Filter by client family, i.e. OS X, Chrome (optional)
    os_name = 'os_name_example' # str | Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7 (optional)
    os_family = 'os_family_example' # str | Filter by kind of OS used without specific version, i.e. OS X, Windows (optional)
    os_company = 'os_company_example' # str | Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation (optional)
    platform = 'platform_example' # str | Filter by platform, i.e. webmail, desktop, mobile (optional)
    country = 'country_example' # str | Filter by country messages were opened in, i.e. Denmark, Russia (optional)
    region = 'region_example' # str | Filter by full name of region messages were opened in, i.e. Moscow, New York (optional)
    city = 'city_example' # str | Filter by full name of region messages were opened in, i.e. Moscow, New York (optional)

    try:
        # Clicks for a all messages
        api_response = api_instance.search_clicks_for_outbound_messages(x_postmark_server_token, count, offset, recipient=recipient, tag=tag, client_name=client_name, client_company=client_company, client_family=client_family, os_name=os_name, os_family=os_family, os_company=os_company, platform=platform, country=country, region=region, city=city)
        print("The response of MessagesAPIApi->search_clicks_for_outbound_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->search_clicks_for_outbound_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **int**| Number of message clicks to return per request. Max 500. | 
 **offset** | **int**| Number of messages to skip | 
 **recipient** | **str**| Filter by To, Cc, Bcc | [optional] 
 **tag** | **str**| Filter by tag | [optional] 
 **client_name** | **str**| Filter by client name, i.e. Outlook, Gmail | [optional] 
 **client_company** | **str**| Filter by company, i.e. Microsoft, Apple, Google | [optional] 
 **client_family** | **str**| Filter by client family, i.e. OS X, Chrome | [optional] 
 **os_name** | **str**| Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7 | [optional] 
 **os_family** | **str**| Filter by kind of OS used without specific version, i.e. OS X, Windows | [optional] 
 **os_company** | **str**| Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation | [optional] 
 **platform** | **str**| Filter by platform, i.e. webmail, desktop, mobile | [optional] 
 **country** | **str**| Filter by country messages were opened in, i.e. Denmark, Russia | [optional] 
 **region** | **str**| Filter by full name of region messages were opened in, i.e. Moscow, New York | [optional] 
 **city** | **str**| Filter by full name of region messages were opened in, i.e. Moscow, New York | [optional] 

### Return type

[**MessageClickSearchResponse**](MessageClickSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_inbound_messages**
> InboundSearchResponse search_inbound_messages(x_postmark_server_token, count, offset, recipient=recipient, fromemail=fromemail, subject=subject, mailboxhash=mailboxhash, tag=tag, status=status, todate=todate, fromdate=fromdate)

Inbound message search

### Example


```python
import openapi_client
from openapi_client.models.inbound_search_response import InboundSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 56 # int | Number of messages to return per request. Max 500.
    offset = 56 # int | Number of messages to skip
    recipient = 'recipient_example' # str | Filter by the user who was receiving the email (optional)
    fromemail = 'fromemail_example' # str | Filter by the sender email address (optional)
    subject = 'subject_example' # str | Filter by email subject (optional)
    mailboxhash = 'mailboxhash_example' # str | Filter by mailboxhash (optional)
    tag = 'tag_example' # str | Filter by tag (optional)
    status = 'status_example' # str | Filter by status (`blocked`, `processed`, `queued`, `failed`, `scheduled`) (optional)
    todate = '2013-10-20' # date | Filter messages up to the date specified. e.g. `2014-02-01` (optional)
    fromdate = '2013-10-20' # date | Filter messages starting from the date specified. e.g. `2014-02-01` (optional)

    try:
        # Inbound message search
        api_response = api_instance.search_inbound_messages(x_postmark_server_token, count, offset, recipient=recipient, fromemail=fromemail, subject=subject, mailboxhash=mailboxhash, tag=tag, status=status, todate=todate, fromdate=fromdate)
        print("The response of MessagesAPIApi->search_inbound_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->search_inbound_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **int**| Number of messages to return per request. Max 500. | 
 **offset** | **int**| Number of messages to skip | 
 **recipient** | **str**| Filter by the user who was receiving the email | [optional] 
 **fromemail** | **str**| Filter by the sender email address | [optional] 
 **subject** | **str**| Filter by email subject | [optional] 
 **mailboxhash** | **str**| Filter by mailboxhash | [optional] 
 **tag** | **str**| Filter by tag | [optional] 
 **status** | **str**| Filter by status (&#x60;blocked&#x60;, &#x60;processed&#x60;, &#x60;queued&#x60;, &#x60;failed&#x60;, &#x60;scheduled&#x60;) | [optional] 
 **todate** | **date**| Filter messages up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 
 **fromdate** | **date**| Filter messages starting from the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**InboundSearchResponse**](InboundSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_opens_for_outbound_messages**
> MessageOpenSearchResponse search_opens_for_outbound_messages(x_postmark_server_token, count, offset, recipient=recipient, tag=tag, client_name=client_name, client_company=client_company, client_family=client_family, os_name=os_name, os_family=os_family, os_company=os_company, platform=platform, country=country, region=region, city=city)

Opens for all messages

### Example


```python
import openapi_client
from openapi_client.models.message_open_search_response import MessageOpenSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 56 # int | Number of message opens to return per request. Max 500.
    offset = 56 # int | Number of messages to skip
    recipient = 'recipient_example' # str | Filter by To, Cc, Bcc (optional)
    tag = 'tag_example' # str | Filter by tag (optional)
    client_name = 'client_name_example' # str | Filter by client name, i.e. Outlook, Gmail (optional)
    client_company = 'client_company_example' # str | Filter by company, i.e. Microsoft, Apple, Google (optional)
    client_family = 'client_family_example' # str | Filter by client family, i.e. OS X, Chrome (optional)
    os_name = 'os_name_example' # str | Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7 (optional)
    os_family = 'os_family_example' # str | Filter by kind of OS used without specific version, i.e. OS X, Windows (optional)
    os_company = 'os_company_example' # str | Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation (optional)
    platform = 'platform_example' # str | Filter by platform, i.e. webmail, desktop, mobile (optional)
    country = 'country_example' # str | Filter by country messages were opened in, i.e. Denmark, Russia (optional)
    region = 'region_example' # str | Filter by full name of region messages were opened in, i.e. Moscow, New York (optional)
    city = 'city_example' # str | Filter by full name of region messages were opened in, i.e. Moscow, New York (optional)

    try:
        # Opens for all messages
        api_response = api_instance.search_opens_for_outbound_messages(x_postmark_server_token, count, offset, recipient=recipient, tag=tag, client_name=client_name, client_company=client_company, client_family=client_family, os_name=os_name, os_family=os_family, os_company=os_company, platform=platform, country=country, region=region, city=city)
        print("The response of MessagesAPIApi->search_opens_for_outbound_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->search_opens_for_outbound_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **int**| Number of message opens to return per request. Max 500. | 
 **offset** | **int**| Number of messages to skip | 
 **recipient** | **str**| Filter by To, Cc, Bcc | [optional] 
 **tag** | **str**| Filter by tag | [optional] 
 **client_name** | **str**| Filter by client name, i.e. Outlook, Gmail | [optional] 
 **client_company** | **str**| Filter by company, i.e. Microsoft, Apple, Google | [optional] 
 **client_family** | **str**| Filter by client family, i.e. OS X, Chrome | [optional] 
 **os_name** | **str**| Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7 | [optional] 
 **os_family** | **str**| Filter by kind of OS used without specific version, i.e. OS X, Windows | [optional] 
 **os_company** | **str**| Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation | [optional] 
 **platform** | **str**| Filter by platform, i.e. webmail, desktop, mobile | [optional] 
 **country** | **str**| Filter by country messages were opened in, i.e. Denmark, Russia | [optional] 
 **region** | **str**| Filter by full name of region messages were opened in, i.e. Moscow, New York | [optional] 
 **city** | **str**| Filter by full name of region messages were opened in, i.e. Moscow, New York | [optional] 

### Return type

[**MessageOpenSearchResponse**](MessageOpenSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_outbound_messages**
> OutboundSearchResponse search_outbound_messages(x_postmark_server_token, count, offset, recipient=recipient, fromemail=fromemail, tag=tag, status=status, todate=todate, fromdate=fromdate)

Outbound message search

### Example


```python
import openapi_client
from openapi_client.models.outbound_search_response import OutboundSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 56 # int | Number of messages to return per request. Max 500.
    offset = 56 # int | Number of messages to skip
    recipient = 'recipient_example' # str | Filter by the user who was receiving the email (optional)
    fromemail = 'fromemail_example' # str | Filter by the sender email address (optional)
    tag = 'tag_example' # str | Filter by tag (optional)
    status = 'status_example' # str | Filter by status (`queued` or `sent`) (optional)
    todate = '2013-10-20' # date | Filter messages up to the date specified. e.g. `2014-02-01` (optional)
    fromdate = '2013-10-20' # date | Filter messages starting from the date specified. e.g. `2014-02-01` (optional)

    try:
        # Outbound message search
        api_response = api_instance.search_outbound_messages(x_postmark_server_token, count, offset, recipient=recipient, fromemail=fromemail, tag=tag, status=status, todate=todate, fromdate=fromdate)
        print("The response of MessagesAPIApi->search_outbound_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesAPIApi->search_outbound_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **int**| Number of messages to return per request. Max 500. | 
 **offset** | **int**| Number of messages to skip | 
 **recipient** | **str**| Filter by the user who was receiving the email | [optional] 
 **fromemail** | **str**| Filter by the sender email address | [optional] 
 **tag** | **str**| Filter by tag | [optional] 
 **status** | **str**| Filter by status (&#x60;queued&#x60; or &#x60;sent&#x60;) | [optional] 
 **todate** | **date**| Filter messages up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 
 **fromdate** | **date**| Filter messages starting from the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**OutboundSearchResponse**](OutboundSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

