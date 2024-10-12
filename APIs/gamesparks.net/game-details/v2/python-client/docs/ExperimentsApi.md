# openapi_client.ExperimentsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_experiment_using_post**](ExperimentsApi.md#create_experiment_using_post) | **POST** /restv2/game/{apiKey}/manage/experiments | createExperiment
[**delete_experiment_using_delete**](ExperimentsApi.md#delete_experiment_using_delete) | **DELETE** /restv2/game/{apiKey}/manage/experiments/{id} | deleteExperiment
[**do_action_experiment_using_post**](ExperimentsApi.md#do_action_experiment_using_post) | **POST** /restv2/game/{apiKey}/manage/experiments/{id}/{action} | doActionExperiment
[**get_experiment_using_get**](ExperimentsApi.md#get_experiment_using_get) | **GET** /restv2/game/{apiKey}/manage/experiments/{id} | getExperiment
[**get_experiments_using_get**](ExperimentsApi.md#get_experiments_using_get) | **GET** /restv2/game/{apiKey}/manage/experiments | getExperiments
[**update_experiment_using_put**](ExperimentsApi.md#update_experiment_using_put) | **PUT** /restv2/game/{apiKey}/manage/experiments/{id} | updateExperiment


# **create_experiment_using_post**
> ExperimentModel create_experiment_using_post(api_key, experiment_model)

createExperiment

### Example


```python
import openapi_client
from openapi_client.models.experiment_model import ExperimentModel
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    experiment_model = openapi_client.ExperimentModel() # ExperimentModel | input

    try:
        # createExperiment
        api_response = api_instance.create_experiment_using_post(api_key, experiment_model)
        print("The response of ExperimentsApi->create_experiment_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->create_experiment_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **experiment_model** | [**ExperimentModel**](ExperimentModel.md)| input | 

### Return type

[**ExperimentModel**](ExperimentModel.md)

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

# **delete_experiment_using_delete**
> MessageModel delete_experiment_using_delete(api_key, id)

deleteExperiment

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
    api_instance = openapi_client.ExperimentsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    id = 56 # int | id

    try:
        # deleteExperiment
        api_response = api_instance.delete_experiment_using_delete(api_key, id)
        print("The response of ExperimentsApi->delete_experiment_using_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->delete_experiment_using_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **id** | **int**| id | 

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

# **do_action_experiment_using_post**
> ExperimentModel do_action_experiment_using_post(api_key, id, action)

doActionExperiment

### Example


```python
import openapi_client
from openapi_client.models.experiment_model import ExperimentModel
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    id = 56 # int | id
    action = 'action_example' # str | action

    try:
        # doActionExperiment
        api_response = api_instance.do_action_experiment_using_post(api_key, id, action)
        print("The response of ExperimentsApi->do_action_experiment_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->do_action_experiment_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **id** | **int**| id | 
 **action** | **str**| action | 

### Return type

[**ExperimentModel**](ExperimentModel.md)

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

# **get_experiment_using_get**
> ExperimentModel get_experiment_using_get(api_key, id)

getExperiment

### Example


```python
import openapi_client
from openapi_client.models.experiment_model import ExperimentModel
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    id = 56 # int | id

    try:
        # getExperiment
        api_response = api_instance.get_experiment_using_get(api_key, id)
        print("The response of ExperimentsApi->get_experiment_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->get_experiment_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **id** | **int**| id | 

### Return type

[**ExperimentModel**](ExperimentModel.md)

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

# **get_experiments_using_get**
> List[ExperimentModel] get_experiments_using_get(api_key)

getExperiments

### Example


```python
import openapi_client
from openapi_client.models.experiment_model import ExperimentModel
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getExperiments
        api_response = api_instance.get_experiments_using_get(api_key)
        print("The response of ExperimentsApi->get_experiments_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->get_experiments_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[ExperimentModel]**](ExperimentModel.md)

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

# **update_experiment_using_put**
> ExperimentModel update_experiment_using_put(api_key, id, experiment_model)

updateExperiment

### Example


```python
import openapi_client
from openapi_client.models.experiment_model import ExperimentModel
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    id = 56 # int | id
    experiment_model = openapi_client.ExperimentModel() # ExperimentModel | input

    try:
        # updateExperiment
        api_response = api_instance.update_experiment_using_put(api_key, id, experiment_model)
        print("The response of ExperimentsApi->update_experiment_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->update_experiment_using_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **id** | **int**| id | 
 **experiment_model** | [**ExperimentModel**](ExperimentModel.md)| input | 

### Return type

[**ExperimentModel**](ExperimentModel.md)

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

