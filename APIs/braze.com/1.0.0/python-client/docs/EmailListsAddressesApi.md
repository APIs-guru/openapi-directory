# openapi_client.EmailListsAddressesApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_hard_bounced_emails**](EmailListsAddressesApi.md#query_hard_bounced_emails) | **GET** /email/hard_bounces | Query Hard Bounced Emails
[**query_list_of_unsubscribed_email_addresses**](EmailListsAddressesApi.md#query_list_of_unsubscribed_email_addresses) | **GET** /email/unsubscribes | Query List of Unsubscribed Email Addresses


# **query_hard_bounced_emails**
> query_hard_bounced_emails(start_date=start_date, end_date=end_date, limit=limit, offset=offset, email=email)

Query Hard Bounced Emails

This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.  > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.  ## Response  Entries are listed in descending order.  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"emails\": [     {       \"email\": \"example1@braze.com\",       \"hard_bounced_at\": \"2016-08-25 15:24:32 +0000\"     },     {       \"email\": \"example2@braze.com\",       \"hard_bounced_at\": \"2016-08-24 17:41:58 +0000\"     },     {       \"email\": \"example3@braze.com\",       \"hard_bounced_at\": \"2016-08-24 12:01:13 +0000\"     }   ],   \"message\": \"success\" } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmailListsAddressesApi(api_client)
    start_date = '2019-01-01' # str | (Optional*) String in YYYY-MM-DD format   Start date of the range to retrieve hard bounces, must be earlier than `end_date`. This is treated as midnight in UTC time by the API.  *You must provide either an `email` or a `start_date`, and an `end_date`.  (optional)
    end_date = '2019-02-01' # str | (Optional*) String in YYYY-MM-DD format  String in YYYY-MM-DD format. End date of the range to retrieve hard bounces. This is treated as midnight in UTC time by the API.  *You must provide either an `email` or a `start_date`, and an `end_date`. (optional)
    limit = '100' # str | (Optional) Integer  Optional field to limit the number of results returned. Defaults to 100, maximum is 500. (optional)
    offset = '1' # str | (Optional) Integer  Optional beginning point in the list to retrieve from. (optional)
    email = 'example@braze.com' # str | (Optional*) String  If provided, we will return whether or not the user has hard bounced.  *You must provide either an `email` or a `start_date`, and an `end_date`. (optional)

    try:
        # Query Hard Bounced Emails
        api_instance.query_hard_bounced_emails(start_date=start_date, end_date=end_date, limit=limit, offset=offset, email=email)
    except Exception as e:
        print("Exception when calling EmailListsAddressesApi->query_hard_bounced_emails: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| (Optional*) String in YYYY-MM-DD format   Start date of the range to retrieve hard bounces, must be earlier than &#x60;end_date&#x60;. This is treated as midnight in UTC time by the API.  *You must provide either an &#x60;email&#x60; or a &#x60;start_date&#x60;, and an &#x60;end_date&#x60;.  | [optional] 
 **end_date** | **str**| (Optional*) String in YYYY-MM-DD format  String in YYYY-MM-DD format. End date of the range to retrieve hard bounces. This is treated as midnight in UTC time by the API.  *You must provide either an &#x60;email&#x60; or a &#x60;start_date&#x60;, and an &#x60;end_date&#x60;. | [optional] 
 **limit** | **str**| (Optional) Integer  Optional field to limit the number of results returned. Defaults to 100, maximum is 500. | [optional] 
 **offset** | **str**| (Optional) Integer  Optional beginning point in the list to retrieve from. | [optional] 
 **email** | **str**| (Optional*) String  If provided, we will return whether or not the user has hard bounced.  *You must provide either an &#x60;email&#x60; or a &#x60;start_date&#x60;, and an &#x60;end_date&#x60;. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_list_of_unsubscribed_email_addresses**
> query_list_of_unsubscribed_email_addresses(start_date=start_date, end_date=end_date, limit=limit, offset=offset, sort_direction=sort_direction, email=email)

Query List of Unsubscribed Email Addresses

Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.  > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmailListsAddressesApi(api_client)
    start_date = '2020-01-01' # str | (Optional*) String in YYYY-MM-DD format  Start date of the range to retrieve unsubscribes, must be earlier than end_date. This is treated as midnight in UTC time by the API. (optional)
    end_date = '2020-02-01' # str | (Optional*)  String in YYYY-MM-DD format  End date of the range to retrieve unsubscribes. This is treated as midnight in UTC time by the API. (optional)
    limit = '1' # str | (Optional) Integer  Optional field to limit the number of results returned. Limit must be greater than 1. Defaults to 100, maximum is 500. (optional)
    offset = '1' # str | (Optional) Integer   Optional beginning point in the list to retrieve from (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `asc` to sort unsubscribes from oldest to newest. Pass in `desc` to sort from newest to oldest. If sort_direction is not included, the default order is newest to oldest. (optional)
    email = 'example@braze.com' # str | (Optional*) String  If provided, we will return whether or not the user has unsubscribed (optional)

    try:
        # Query List of Unsubscribed Email Addresses
        api_instance.query_list_of_unsubscribed_email_addresses(start_date=start_date, end_date=end_date, limit=limit, offset=offset, sort_direction=sort_direction, email=email)
    except Exception as e:
        print("Exception when calling EmailListsAddressesApi->query_list_of_unsubscribed_email_addresses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| (Optional*) String in YYYY-MM-DD format  Start date of the range to retrieve unsubscribes, must be earlier than end_date. This is treated as midnight in UTC time by the API. | [optional] 
 **end_date** | **str**| (Optional*)  String in YYYY-MM-DD format  End date of the range to retrieve unsubscribes. This is treated as midnight in UTC time by the API. | [optional] 
 **limit** | **str**| (Optional) Integer  Optional field to limit the number of results returned. Limit must be greater than 1. Defaults to 100, maximum is 500. | [optional] 
 **offset** | **str**| (Optional) Integer   Optional beginning point in the list to retrieve from | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;asc&#x60; to sort unsubscribes from oldest to newest. Pass in &#x60;desc&#x60; to sort from newest to oldest. If sort_direction is not included, the default order is newest to oldest. | [optional] 
 **email** | **str**| (Optional*) String  If provided, we will return whether or not the user has unsubscribed | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

