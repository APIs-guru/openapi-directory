# openapi_client.TestHarnessApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_test_harness_scenario_using_post**](TestHarnessApi.md#create_test_harness_scenario_using_post) | **POST** /restv2/game/{apiKey}/admin/testHarness/scenarios | createTestHarnessScenario
[**delete_test_harness_scenario_using_delete**](TestHarnessApi.md#delete_test_harness_scenario_using_delete) | **DELETE** /restv2/game/{apiKey}/admin/testHarness/scenarios/{scenarioName} | deleteTestHarnessScenario
[**get_test_harness_scenario_using_get**](TestHarnessApi.md#get_test_harness_scenario_using_get) | **GET** /restv2/game/{apiKey}/admin/testHarness/scenarios/{scenarioName} | getTestHarnessScenario
[**get_test_harness_scenarios_using_get**](TestHarnessApi.md#get_test_harness_scenarios_using_get) | **GET** /restv2/game/{apiKey}/admin/testHarness/scenarios | getTestHarnessScenarios
[**update_test_harness_scenario_using_put**](TestHarnessApi.md#update_test_harness_scenario_using_put) | **PUT** /restv2/game/{apiKey}/admin/testHarness/scenarios/{scenarioName} | updateTestHarnessScenario


# **create_test_harness_scenario_using_post**
> TestHarnessScenarioModel create_test_harness_scenario_using_post(api_key, test_harness_scenario_model)

createTestHarnessScenario

### Example


```python
import openapi_client
from openapi_client.models.test_harness_scenario_model import TestHarnessScenarioModel
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
    api_instance = openapi_client.TestHarnessApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    test_harness_scenario_model = openapi_client.TestHarnessScenarioModel() # TestHarnessScenarioModel | testHarnessScenarioDTO

    try:
        # createTestHarnessScenario
        api_response = api_instance.create_test_harness_scenario_using_post(api_key, test_harness_scenario_model)
        print("The response of TestHarnessApi->create_test_harness_scenario_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestHarnessApi->create_test_harness_scenario_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **test_harness_scenario_model** | [**TestHarnessScenarioModel**](TestHarnessScenarioModel.md)| testHarnessScenarioDTO | 

### Return type

[**TestHarnessScenarioModel**](TestHarnessScenarioModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_test_harness_scenario_using_delete**
> MessageModel delete_test_harness_scenario_using_delete(api_key, scenario_name)

deleteTestHarnessScenario

### Example


```python
import openapi_client
from openapi_client.models.message_model import MessageModel
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
    api_instance = openapi_client.TestHarnessApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    scenario_name = 'scenario_name_example' # str | scenarioName

    try:
        # deleteTestHarnessScenario
        api_response = api_instance.delete_test_harness_scenario_using_delete(api_key, scenario_name)
        print("The response of TestHarnessApi->delete_test_harness_scenario_using_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestHarnessApi->delete_test_harness_scenario_using_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **scenario_name** | **str**| scenarioName | 

### Return type

[**MessageModel**](MessageModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_test_harness_scenario_using_get**
> TestHarnessScenarioModel get_test_harness_scenario_using_get(api_key, scenario_name)

getTestHarnessScenario

### Example


```python
import openapi_client
from openapi_client.models.test_harness_scenario_model import TestHarnessScenarioModel
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
    api_instance = openapi_client.TestHarnessApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    scenario_name = 'scenario_name_example' # str | scenarioName

    try:
        # getTestHarnessScenario
        api_response = api_instance.get_test_harness_scenario_using_get(api_key, scenario_name)
        print("The response of TestHarnessApi->get_test_harness_scenario_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestHarnessApi->get_test_harness_scenario_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **scenario_name** | **str**| scenarioName | 

### Return type

[**TestHarnessScenarioModel**](TestHarnessScenarioModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_test_harness_scenarios_using_get**
> List[TestHarnessScenarioModel] get_test_harness_scenarios_using_get(api_key)

getTestHarnessScenarios

### Example


```python
import openapi_client
from openapi_client.models.test_harness_scenario_model import TestHarnessScenarioModel
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
    api_instance = openapi_client.TestHarnessApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getTestHarnessScenarios
        api_response = api_instance.get_test_harness_scenarios_using_get(api_key)
        print("The response of TestHarnessApi->get_test_harness_scenarios_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestHarnessApi->get_test_harness_scenarios_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[TestHarnessScenarioModel]**](TestHarnessScenarioModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_test_harness_scenario_using_put**
> TestHarnessScenarioModel update_test_harness_scenario_using_put(api_key, scenario_name, test_harness_scenario_model)

updateTestHarnessScenario

### Example


```python
import openapi_client
from openapi_client.models.test_harness_scenario_model import TestHarnessScenarioModel
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
    api_instance = openapi_client.TestHarnessApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    scenario_name = 'scenario_name_example' # str | scenarioName
    test_harness_scenario_model = openapi_client.TestHarnessScenarioModel() # TestHarnessScenarioModel | testHarnessScenarioDTO

    try:
        # updateTestHarnessScenario
        api_response = api_instance.update_test_harness_scenario_using_put(api_key, scenario_name, test_harness_scenario_model)
        print("The response of TestHarnessApi->update_test_harness_scenario_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestHarnessApi->update_test_harness_scenario_using_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **scenario_name** | **str**| scenarioName | 
 **test_harness_scenario_model** | [**TestHarnessScenarioModel**](TestHarnessScenarioModel.md)| testHarnessScenarioDTO | 

### Return type

[**TestHarnessScenarioModel**](TestHarnessScenarioModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

