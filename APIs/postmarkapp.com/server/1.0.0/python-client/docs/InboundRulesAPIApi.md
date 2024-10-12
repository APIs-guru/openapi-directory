# openapi_client.InboundRulesAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_inbound_rule**](InboundRulesAPIApi.md#create_inbound_rule) | **POST** /triggers/inboundrules | Create an inbound rule trigger
[**delete_inbound_rule**](InboundRulesAPIApi.md#delete_inbound_rule) | **DELETE** /triggers/inboundrules/{triggerid} | Delete a single trigger
[**list_inbound_rules**](InboundRulesAPIApi.md#list_inbound_rules) | **GET** /triggers/inboundrules | List inbound rule triggers


# **create_inbound_rule**
> CreateInboundRule200Response create_inbound_rule(x_postmark_server_token, body=body)

Create an inbound rule trigger

### Example


```python
import openapi_client
from openapi_client.models.create_inbound_rule200_response import CreateInboundRule200Response
from openapi_client.models.create_inbound_rule_request import CreateInboundRuleRequest
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
    api_instance = openapi_client.InboundRulesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.CreateInboundRuleRequest() # CreateInboundRuleRequest |  (optional)

    try:
        # Create an inbound rule trigger
        api_response = api_instance.create_inbound_rule(x_postmark_server_token, body=body)
        print("The response of InboundRulesAPIApi->create_inbound_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InboundRulesAPIApi->create_inbound_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**CreateInboundRuleRequest**](CreateInboundRuleRequest.md)|  | [optional] 

### Return type

[**CreateInboundRule200Response**](CreateInboundRule200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_inbound_rule**
> StandardPostmarkResponse delete_inbound_rule(x_postmark_server_token, triggerid)

Delete a single trigger

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
    api_instance = openapi_client.InboundRulesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    triggerid = 56 # int | The ID of the Inbound Rule that should be deleted.

    try:
        # Delete a single trigger
        api_response = api_instance.delete_inbound_rule(x_postmark_server_token, triggerid)
        print("The response of InboundRulesAPIApi->delete_inbound_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InboundRulesAPIApi->delete_inbound_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **triggerid** | **int**| The ID of the Inbound Rule that should be deleted. | 

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

# **list_inbound_rules**
> ListInboundRules200Response list_inbound_rules(x_postmark_server_token, count, offset)

List inbound rule triggers

### Example


```python
import openapi_client
from openapi_client.models.list_inbound_rules200_response import ListInboundRules200Response
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
    api_instance = openapi_client.InboundRulesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 56 # int | Number of records to return per request.
    offset = 56 # int | Number of records to skip.

    try:
        # List inbound rule triggers
        api_response = api_instance.list_inbound_rules(x_postmark_server_token, count, offset)
        print("The response of InboundRulesAPIApi->list_inbound_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InboundRulesAPIApi->list_inbound_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **int**| Number of records to return per request. | 
 **offset** | **int**| Number of records to skip. | 

### Return type

[**ListInboundRules200Response**](ListInboundRules200Response.md)

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

