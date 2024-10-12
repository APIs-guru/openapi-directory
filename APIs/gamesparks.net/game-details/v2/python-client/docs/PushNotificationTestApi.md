# openapi_client.PushNotificationTestApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_push_amazon_notifications_using_post**](PushNotificationTestApi.md#test_push_amazon_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/amazon | testPushAmazonNotifications
[**test_push_apple_dev_notifications_using_post**](PushNotificationTestApi.md#test_push_apple_dev_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/apple/development | testPushAppleDevNotifications
[**test_push_apple_prod_notifications_using_post**](PushNotificationTestApi.md#test_push_apple_prod_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/apple/production | testPushAppleProdNotifications
[**test_push_google_notifications_using_post**](PushNotificationTestApi.md#test_push_google_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/google | testPushGoogleNotifications
[**test_viber_integration_notifications_using_post**](PushNotificationTestApi.md#test_viber_integration_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/viber/integration | testViberIntegrationNotifications
[**test_viber_production_notifications_using_post**](PushNotificationTestApi.md#test_viber_production_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/viber/production | testViberProductionNotifications
[**test_windows8_notifications_using_post**](PushNotificationTestApi.md#test_windows8_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/microsoft/windows8 | testWindows8Notifications
[**test_windows_phone8_notifications_using_post**](PushNotificationTestApi.md#test_windows_phone8_notifications_using_post) | **POST** /restv2/game/{apiKey}/admin/pushNotifications/test/microsoft/windowsPhone8 | testWindowsPhone8Notifications


# **test_push_amazon_notifications_using_post**
> PushNotificationTestSummaryListModel test_push_amazon_notifications_using_post(api_key, push_notification_test_model)

testPushAmazonNotifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testPushAmazonNotifications
        api_response = api_instance.test_push_amazon_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_push_amazon_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_push_amazon_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_push_apple_dev_notifications_using_post**
> PushNotificationTestSummaryListModel test_push_apple_dev_notifications_using_post(api_key, push_notification_test_model)

testPushAppleDevNotifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testPushAppleDevNotifications
        api_response = api_instance.test_push_apple_dev_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_push_apple_dev_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_push_apple_dev_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_push_apple_prod_notifications_using_post**
> PushNotificationTestSummaryListModel test_push_apple_prod_notifications_using_post(api_key, push_notification_test_model)

testPushAppleProdNotifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testPushAppleProdNotifications
        api_response = api_instance.test_push_apple_prod_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_push_apple_prod_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_push_apple_prod_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_push_google_notifications_using_post**
> PushNotificationTestSummaryListModel test_push_google_notifications_using_post(api_key, push_notification_test_model)

testPushGoogleNotifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testPushGoogleNotifications
        api_response = api_instance.test_push_google_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_push_google_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_push_google_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_viber_integration_notifications_using_post**
> PushNotificationTestSummaryListModel test_viber_integration_notifications_using_post(api_key, push_notification_test_model)

testViberIntegrationNotifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testViberIntegrationNotifications
        api_response = api_instance.test_viber_integration_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_viber_integration_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_viber_integration_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_viber_production_notifications_using_post**
> PushNotificationTestSummaryListModel test_viber_production_notifications_using_post(api_key, push_notification_test_model)

testViberProductionNotifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testViberProductionNotifications
        api_response = api_instance.test_viber_production_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_viber_production_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_viber_production_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_windows8_notifications_using_post**
> PushNotificationTestSummaryListModel test_windows8_notifications_using_post(api_key, push_notification_test_model)

testWindows8Notifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testWindows8Notifications
        api_response = api_instance.test_windows8_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_windows8_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_windows8_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_windows_phone8_notifications_using_post**
> PushNotificationTestSummaryListModel test_windows_phone8_notifications_using_post(api_key, push_notification_test_model)

testWindowsPhone8Notifications

### Example


```python
import openapi_client
from openapi_client.models.push_notification_test_model import PushNotificationTestModel
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationTestApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    push_notification_test_model = openapi_client.PushNotificationTestModel() # PushNotificationTestModel | messageDetails

    try:
        # testWindowsPhone8Notifications
        api_response = api_instance.test_windows_phone8_notifications_using_post(api_key, push_notification_test_model)
        print("The response of PushNotificationTestApi->test_windows_phone8_notifications_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PushNotificationTestApi->test_windows_phone8_notifications_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **push_notification_test_model** | [**PushNotificationTestModel**](PushNotificationTestModel.md)| messageDetails | 

### Return type

[**PushNotificationTestSummaryListModel**](PushNotificationTestSummaryListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

