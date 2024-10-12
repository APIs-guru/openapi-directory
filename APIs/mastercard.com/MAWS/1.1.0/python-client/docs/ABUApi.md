# openapi_client.ABUApi

All URIs are relative to *https://api.mastercard.com/maws*

Method | HTTP request | Description
------------- | ------------- | -------------
[**abu_post**](ABUApi.md#abu_post) | **POST** /v1/maws | Access methods for merchants to ABU program.


# **abu_post**
> AbuResponse abu_post(abu_request)

Access methods for merchants to ABU program.

<ul>   <li><p><b>Pull model:</b></p>     <br>     <p>To receive information for a given PAN, the customer sends a request and will receive a response with the most up to date information.</p>     <p>In this page, customers can execute samples of requests to explore the pattern of the API responses. However, once the customer decides to start using the SDK, it is necessary to be fully onboarded to ABU API Pull model.</p>   </li>   <br>   <li><p><b>Push model:</b></p>     <br>     <p>Customers can choose to automatically receive ABU account update notifications on a designated endpoint. This means that a customer can subscribe to each PAN in order to receive updates, so that when these PANs have any changes, the customer will receive the updates via notifications on the designated endpoint.</p>     <p>Different fields on the API are mandatory to use this model.</p><p>In order to complete a full end-to-end test scenario (including the notifications), it is necessary to be fully onboarded on ABU API Push model:</p>     <p>- An endpoint provided by the customer must be registered with Mastercard so that notifications can be pro-actively sent out to the customer.</p>     <p>- A certificate provided by Mastercard representative must be used by the customer to receive notifications on the designated endpoint.</p>     <br>     <p><b>* For customers who are already enrolled to ABU API Pull model and want to start using ABU API Push model, it is necessary to perform a technical enrollment that involves a certificate exchange and must be registered as an ABU API Push model user.</b></p>     <br>     <p>For more details on how to proceed with onboarding for ABU API push model contact abu_push_onboarding@mastercard.com.</p><p>Note: This email is for ABU API push onboarding only. For general ABU API inquiry questions contact api_support@mastercard.com and for general ABU questions contact abu_helpdesk@mastercard.com.</p>   </li> </ul>

### Example


```python
import openapi_client
from openapi_client.models.abu import ABU
from openapi_client.models.abu_response import AbuResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/maws
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/maws"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ABUApi(api_client)
    abu_request = openapi_client.ABU() # ABU | Request for ABU API

    try:
        # Access methods for merchants to ABU program.
        api_response = api_instance.abu_post(abu_request)
        print("The response of ABUApi->abu_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ABUApi->abu_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abu_request** | [**ABU**](ABU.md)| Request for ABU API | 

### Return type

[**AbuResponse**](AbuResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Possible causes: &lt;br&gt;Validation failure or System error.&lt;/br&gt; |  -  |
**401** | Possible causes:&lt;br&gt;ClientID not provisioned.&lt;br&gt; |  -  |
**500** | System error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

