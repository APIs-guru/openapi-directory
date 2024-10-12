# openapi_client.FlagApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blacklist_entity**](FlagApi.md#blacklist_entity) | **POST** /entity/{entityId}/flag/blacklist | Set Entity Blacklist State.
[**entity_monitoring**](FlagApi.md#entity_monitoring) | **POST** /entity/{entityId}/flag/monitor | Set Entity Ongoing AML Monitoring Status.
[**flag_duplicate_entity**](FlagApi.md#flag_duplicate_entity) | **POST** /entity/{entityId}/flag/duplicate/{otherId} | Resolve Duplicate States.
[**watchlist_entity**](FlagApi.md#watchlist_entity) | **POST** /entity/{entityId}/flag/watchlist | Set Entity Watchlist State.


# **blacklist_entity**
> EntityResultObject blacklist_entity(x_frankie_customer_id, entity_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id, reason=reason, blocked_by=blocked_by, attribute=attribute, original_id=original_id)

Set Entity Blacklist State.

Mark the entity as blacklisted or not with the '?set=' query parameter as 'true' or 'false'. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FlagApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    set = True # bool | Set the value of an entity flag. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    reason = 'reason_example' # str | Set the reason for blacklisting. Valid values are:   - \"NO_REASON_SUPPLIED\"   - \"FABRICATED_IDENTITY\"   - \"IDENTITY_TAKEOVER\"   - \"FALSIFIED_ID_DOCUMENTS\"   - \"STOLEN_ID_DOCUMENTS\"   - \"MERCHANT_FRAUD\"   - \"NEVER_PAY_BUST_OUT\"   - \"CONFLICTING_DATA_PROVIDED\"   - \"MONEY_MULE\"   - \"FALSE_FRAUD_CLAIM\"   - \"FRAUDULENT_3RD_PARTY\"   - \"COMPANY_TAKEOVER\"   - \"FICTITIOUS_EMPLOYER\"   - \"COLLUSIVE_EMPLOYER\"   - \"OVER_VALUATION_OF_ASSETS\"   - \"FALSIFIED_EMPLOYMENT_DETAILS\"   - \"MANIPULATED_IDENTITY\"   - \"SYNDICATED_FRAUD\"   - \"INTERNAL_FRAUD\"   - \"BANK_FRAUD\"   - \"UNDISCLOSED_DATA\"   - \"FALSE_HARDSHIP\"   - \"SMR_REPORT_LODGED\"   - \"2X_SMR_REPORTS_LODGED\"  (optional)
    blocked_by = 'blocked_by_example' # str | Specify who is setting the entity as blacklisted.  (optional)
    attribute = 'attribute_example' # str | Specify the blacklisted attribute. Valid values are:   - \"ENTIRE_PROFILE\"   - \"FULL_NAME\"   - \"EMAIL_ADDRESS\"   - \"PHONE_NUMBER\"   - \"ID_DOCUMENT\"   - \"MAILING_ADDRESS\"   - \"RESIDENTIAL_ADDRESS\"     (optional)
    original_id = 'original_id_example' # str | Specify the Id of the matching blacklisted entity or single data-point.  (optional)

    try:
        # Set Entity Blacklist State.
        api_response = api_instance.blacklist_entity(x_frankie_customer_id, entity_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id, reason=reason, blocked_by=blocked_by, attribute=attribute, original_id=original_id)
        print("The response of FlagApi->blacklist_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlagApi->blacklist_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **set** | **bool**| Set the value of an entity flag.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **reason** | **str**| Set the reason for blacklisting. Valid values are:   - \&quot;NO_REASON_SUPPLIED\&quot;   - \&quot;FABRICATED_IDENTITY\&quot;   - \&quot;IDENTITY_TAKEOVER\&quot;   - \&quot;FALSIFIED_ID_DOCUMENTS\&quot;   - \&quot;STOLEN_ID_DOCUMENTS\&quot;   - \&quot;MERCHANT_FRAUD\&quot;   - \&quot;NEVER_PAY_BUST_OUT\&quot;   - \&quot;CONFLICTING_DATA_PROVIDED\&quot;   - \&quot;MONEY_MULE\&quot;   - \&quot;FALSE_FRAUD_CLAIM\&quot;   - \&quot;FRAUDULENT_3RD_PARTY\&quot;   - \&quot;COMPANY_TAKEOVER\&quot;   - \&quot;FICTITIOUS_EMPLOYER\&quot;   - \&quot;COLLUSIVE_EMPLOYER\&quot;   - \&quot;OVER_VALUATION_OF_ASSETS\&quot;   - \&quot;FALSIFIED_EMPLOYMENT_DETAILS\&quot;   - \&quot;MANIPULATED_IDENTITY\&quot;   - \&quot;SYNDICATED_FRAUD\&quot;   - \&quot;INTERNAL_FRAUD\&quot;   - \&quot;BANK_FRAUD\&quot;   - \&quot;UNDISCLOSED_DATA\&quot;   - \&quot;FALSE_HARDSHIP\&quot;   - \&quot;SMR_REPORT_LODGED\&quot;   - \&quot;2X_SMR_REPORTS_LODGED\&quot;  | [optional] 
 **blocked_by** | **str**| Specify who is setting the entity as blacklisted.  | [optional] 
 **attribute** | **str**| Specify the blacklisted attribute. Valid values are:   - \&quot;ENTIRE_PROFILE\&quot;   - \&quot;FULL_NAME\&quot;   - \&quot;EMAIL_ADDRESS\&quot;   - \&quot;PHONE_NUMBER\&quot;   - \&quot;ID_DOCUMENT\&quot;   - \&quot;MAILING_ADDRESS\&quot;   - \&quot;RESIDENTIAL_ADDRESS\&quot;     | [optional] 
 **original_id** | **str**| Specify the Id of the matching blacklisted entity or single data-point.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **entity_monitoring**
> EntityResultObject entity_monitoring(x_frankie_customer_id, entity_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id)

Set Entity Ongoing AML Monitoring Status.

Mark the entity as being monitored or not with the '?set=' query parameter as 'true' or 'false'. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FlagApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    set = True # bool | Set the value of an entity flag. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Set Entity Ongoing AML Monitoring Status.
        api_response = api_instance.entity_monitoring(x_frankie_customer_id, entity_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of FlagApi->entity_monitoring:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlagApi->entity_monitoring: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **set** | **bool**| Set the value of an entity flag.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flag_duplicate_entity**
> EntityResultObject flag_duplicate_entity(x_frankie_customer_id, entity_id, other_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id)

Resolve Duplicate States.

Resolve the state of a pair of duplicate entities with the '?set=' query parameter as 'true' or 'false'. Setting duplicate to 'true' will make entityId invisible for most purposes and otherId will continue to function as normal. Setting duplicate to 'false' means the two entities are in fact separate but similar and they will both continue to exist independently but will no longer be identified as duplicates of eachother. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FlagApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    other_id = 'other_id_example' # str | An entityId returned previously from an earlier call to /check or /entity. Used when an operation requires two entityIds
    set = True # bool | Set the value of an entity flag. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Resolve Duplicate States.
        api_response = api_instance.flag_duplicate_entity(x_frankie_customer_id, entity_id, other_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of FlagApi->flag_duplicate_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlagApi->flag_duplicate_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **other_id** | **str**| An entityId returned previously from an earlier call to /check or /entity. Used when an operation requires two entityIds | 
 **set** | **bool**| Set the value of an entity flag.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **watchlist_entity**
> EntityResultObject watchlist_entity(x_frankie_customer_id, entity_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id, reason=reason, comment=comment)

Set Entity Watchlist State.

Mark the entity as watchlisted or not with the '?set=' query parameter as 'true' or 'false'. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FlagApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    set = True # bool | Set the value of an entity flag. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    reason = 'reason_example' # str | Set the reason for watchlisting. Valid values are:  - \"WAS_BLACKLISTED\"  (optional)
    comment = 'comment_example' # str | A comment describing the reason for a request.  (optional)

    try:
        # Set Entity Watchlist State.
        api_response = api_instance.watchlist_entity(x_frankie_customer_id, entity_id, set, x_frankie_customer_child_id=x_frankie_customer_child_id, reason=reason, comment=comment)
        print("The response of FlagApi->watchlist_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlagApi->watchlist_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **set** | **bool**| Set the value of an entity flag.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **reason** | **str**| Set the reason for watchlisting. Valid values are:  - \&quot;WAS_BLACKLISTED\&quot;  | [optional] 
 **comment** | **str**| A comment describing the reason for a request.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

