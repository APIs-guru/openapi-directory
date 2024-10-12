# openapi_client.ReputationApi

All URIs are relative to *https://api.callcontrol.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reputation_report**](ReputationApi.md#reputation_report) | **POST** /api/2015-11-01/Report | Report: report spam calls received to better tune our algorithms based upon spam calls you receive
[**reputation_reputation**](ReputationApi.md#reputation_reputation) | **GET** /api/2015-11-01/Reputation/{phoneNumber} | Reputation:  Premium service which returns a reputation informaiton of a phone number via API.


# **reputation_report**
> reputation_report(call_report)

Report: report spam calls received to better tune our algorithms based upon spam calls you receive

This returns information required to perform basic call blocking behaviors<br />              Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)

### Example


```python
import openapi_client
from openapi_client.models.call_report import CallReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.callcontrol.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.callcontrol.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReputationApi(api_client)
    call_report = openapi_client.CallReport() # CallReport | [FromBody] Call Report              PhoneNumber,               Caller name(optional),               Call category(optional),               Comment or tags(free text) (optional),               Unwanted call  - yes/no(optional),

    try:
        # Report: report spam calls received to better tune our algorithms based upon spam calls you receive
        api_instance.reputation_report(call_report)
    except Exception as e:
        print("Exception when calling ReputationApi->reputation_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **call_report** | [**CallReport**](CallReport.md)| [FromBody] Call Report              PhoneNumber,               Caller name(optional),               Call category(optional),               Comment or tags(free text) (optional),               Unwanted call  - yes/no(optional), | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad request (eg. invalid phone nubmer) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reputation_reputation**
> Reputation reputation_reputation(phone_number)

Reputation:  Premium service which returns a reputation informaiton of a phone number via API.

This returns information required to perform basic call blocking behaviors<br />              Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)

### Example


```python
import openapi_client
from openapi_client.models.reputation import Reputation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.callcontrol.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.callcontrol.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReputationApi(api_client)
    phone_number = 'phone_number_example' # str | phone number to search

    try:
        # Reputation:  Premium service which returns a reputation informaiton of a phone number via API.
        api_response = api_instance.reputation_reputation(phone_number)
        print("The response of ReputationApi->reputation_reputation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReputationApi->reputation_reputation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number** | **str**| phone number to search | 

### Return type

[**Reputation**](Reputation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reputation information |  -  |
**400** | Bad request (invalid phone number) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

