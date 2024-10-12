# openapi_client.DefaultApi

All URIs are relative to *http://api.opendatanetwork.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_a_map**](DefaultApi.md#create_a_map) | **GET** /data/v1/map/new | Create a map
[**find_all_available_data_for_some_entities**](DefaultApi.md#find_all_available_data_for_some_entities) | **GET** /data/v1/availability/ | Find all available data for some entities
[**find_the_relatives_of_an_entity**](DefaultApi.md#find_the_relatives_of_an_entity) | **GET** /entity/v1/{relation} | Find the relatives of an entity
[**get_constraint_permutations_for_entities**](DefaultApi.md#get_constraint_permutations_for_entities) | **GET** /data/v1/constraint/{variable} | Get constraint permutations for entities
[**get_datasets**](DefaultApi.md#get_datasets) | **GET** /search/v1/dataset | Get datasets
[**get_entities**](DefaultApi.md#get_entities) | **GET** /entity/v1 | Get Entities
[**get_questions**](DefaultApi.md#get_questions) | **GET** /search/v1/question | Get questions
[**get_suggestions**](DefaultApi.md#get_suggestions) | **GET** /suggest/v1/{type} | Get suggestions
[**get_values_for_variables**](DefaultApi.md#get_values_for_variables) | **GET** /data/v1/values | Get values for variables


# **create_a_map**
> create_a_map(variable, entity_id, constraint=constraint, app_token=app_token, x_app_token=x_app_token)

Create a map



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    variable = 'demographics.population.count' # str | A single variable ID.
    entity_id = '0400000US53,0400000US08' # str | A comma separated list of entity IDs. Entities must have the same type and represent geographical regions.
    constraint = 'constraint_example' # str | Values must be specified for each constraint in the dataset. For example, to generate map data for `demographics.population.count`, you must specify a value for `year` by passing `year=2013`. (optional)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Create a map
        api_instance.create_a_map(variable, entity_id, constraint=constraint, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->create_a_map: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable** | **str**| A single variable ID. | 
 **entity_id** | **str**| A comma separated list of entity IDs. Entities must have the same type and represent geographical regions. | 
 **constraint** | **str**| Values must be specified for each constraint in the dataset. For example, to generate map data for &#x60;demographics.population.count&#x60;, you must specify a value for &#x60;year&#x60; by passing &#x60;year&#x3D;2013&#x60;. | [optional] 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_all_available_data_for_some_entities**
> find_all_available_data_for_some_entities(entity_id, app_token=app_token, x_app_token=x_app_token)

Find all available data for some entities



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    entity_id = '0100000US,0400000US53' # str | Comma separated list of entity IDs.
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Find all available data for some entities
        api_instance.find_all_available_data_for_some_entities(entity_id, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->find_all_available_data_for_some_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **str**| Comma separated list of entity IDs. | 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_the_relatives_of_an_entity**
> find_the_relatives_of_an_entity(relation, entity_id, variable_id=variable_id, limit=limit, app_token=app_token, x_app_token=x_app_token)

Find the relatives of an entity



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    relation = 'parent' # str | The type of relation to find.
    entity_id = '0400000US53' # str | ID of the target entity.
    variable_id = 'demographics.population.seattle' # str | If this parameter is included, only entities with data for the given variable will be returned. Note that this may cause the number of entities returned to be less than the specified `limit`. (optional)
    limit = 10 # float | Maximum number of entities in each group. Must be an integer from 1 to 1000. (optional) (default to 10)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Find the relatives of an entity
        api_instance.find_the_relatives_of_an_entity(relation, entity_id, variable_id=variable_id, limit=limit, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->find_the_relatives_of_an_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation** | **str**| The type of relation to find. | 
 **entity_id** | **str**| ID of the target entity. | 
 **variable_id** | **str**| If this parameter is included, only entities with data for the given variable will be returned. Note that this may cause the number of entities returned to be less than the specified &#x60;limit&#x60;. | [optional] 
 **limit** | **float**| Maximum number of entities in each group. Must be an integer from 1 to 1000. | [optional] [default to 10]
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_constraint_permutations_for_entities**
> get_constraint_permutations_for_entities(variable, entity_id, constraint, app_token=app_token, x_app_token=x_app_token)

Get constraint permutations for entities



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    variable = 'demographics.population.count' # str | Full ID of the variable to retrieve.
    entity_id = '0100000US,0400000US53' # str | Comma separated list of entity IDs.
    constraint = 'year' # str | Constraint to use.
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Get constraint permutations for entities
        api_instance.get_constraint_permutations_for_entities(variable, entity_id, constraint, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->get_constraint_permutations_for_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable** | **str**| Full ID of the variable to retrieve. | 
 **entity_id** | **str**| Comma separated list of entity IDs. | 
 **constraint** | **str**| Constraint to use. | 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_datasets**
> get_datasets(entity_id=entity_id, dataset_id=dataset_id, limit=limit, offset=offset, app_token=app_token, x_app_token=x_app_token)

Get datasets



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    entity_id = '0100000US' # str | Entities to use in formulating the query. (optional)
    dataset_id = 'demographics.population' # str | If included, the search terms of the dataset will be used in the query. (optional)
    limit = 10 # float | Maximum number of results to return. Must be an integer from 0 to 50000. (optional) (default to 10)
    offset = 3.4 # float | Number of results to skip. Used for pagination. (optional)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Get datasets
        api_instance.get_datasets(entity_id=entity_id, dataset_id=dataset_id, limit=limit, offset=offset, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->get_datasets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **str**| Entities to use in formulating the query. | [optional] 
 **dataset_id** | **str**| If included, the search terms of the dataset will be used in the query. | [optional] 
 **limit** | **float**| Maximum number of results to return. Must be an integer from 0 to 50000. | [optional] [default to 10]
 **offset** | **float**| Number of results to skip. Used for pagination. | [optional] 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_entities**
> get_entities(entity_id=entity_id, entity_name=entity_name, entity_type=entity_type, app_token=app_token, x_app_token=x_app_token)

Get Entities



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    entity_id = '0400000US53' # str | ID of the entity. (optional)
    entity_name = 'washington' # str | Name of the entity. (optional)
    entity_type = 'region.state' # str | Type of the entity. (optional)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Get Entities
        api_instance.get_entities(entity_id=entity_id, entity_name=entity_name, entity_type=entity_type, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->get_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **str**| ID of the entity. | [optional] 
 **entity_name** | **str**| Name of the entity. | [optional] 
 **entity_type** | **str**| Type of the entity. | [optional] 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_questions**
> get_questions(query, limit=limit, offset=offset, app_token=app_token, x_app_token=x_app_token)

Get questions



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'seattle' # str | String to search against.
    limit = 10 # float | Maximum number of results to return. Must be an integer from 0 to 50000. (optional) (default to 10)
    offset = 3.4 # float | Number of results to skip. Used for pagination. (optional)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Get questions
        api_instance.get_questions(query, limit=limit, offset=offset, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->get_questions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| String to search against. | 
 **limit** | **float**| Maximum number of results to return. Must be an integer from 0 to 50000. | [optional] [default to 10]
 **offset** | **float**| Number of results to skip. Used for pagination. | [optional] 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggestions**
> get_suggestions(type, query, limit=limit, variable_id=variable_id, app_token=app_token, x_app_token=x_app_token)

Get suggestions



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    type = 'entity' # str | Type of the object to find.
    query = 'seattl' # str | Query to match.
    limit = 5 # float | Maximum number of results to return. Must be an integer from 0 to 100. (optional) (default to 5)
    variable_id = 'demographics.population.count' # str | This parameter is only available when suggesting entities with `type=entity`. If it is provided, suggestions will be filtered to include only entities that have data for the given variable.  If the variable provided is invalid, no entities will be returned.  Note that this filtering will increase response time significantly, so it should only be used when necessary. (optional)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Get suggestions
        api_instance.get_suggestions(type, query, limit=limit, variable_id=variable_id, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Type of the object to find. | 
 **query** | **str**| Query to match. | 
 **limit** | **float**| Maximum number of results to return. Must be an integer from 0 to 100. | [optional] [default to 5]
 **variable_id** | **str**| This parameter is only available when suggesting entities with &#x60;type&#x3D;entity&#x60;. If it is provided, suggestions will be filtered to include only entities that have data for the given variable.  If the variable provided is invalid, no entities will be returned.  Note that this filtering will increase response time significantly, so it should only be used when necessary. | [optional] 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_values_for_variables**
> get_values_for_variables(variable, entity_id=entity_id, forecast=forecast, describe=describe, format=format, app_token=app_token, x_app_token=x_app_token)

Get values for variables



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.opendatanetwork.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.opendatanetwork.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    variable = 'demographics.population.count' # str | Comma separated list of variable IDs. Defaults to retrieving all variables. It is also possible to pass in a topic such as `demographics`, or a dataset such as `demographics.population`, which would both be equivalent to specifying `demographics.population.count` and `demographics.population.change`. Note that only variables in the same dataset are allowed.
    entity_id = '0100000US,0400000US53' # str | Comma separated list of entity IDs. Defaults to retrieving all entities. Note that since there is currently no results pagination, retrieving values for all entities may produce incomplete results. (optional)
    forecast = 3 # float | Number of steps to forecast. Must be an integer between 0 and 20. Forecasts are produced using linear extrapolation on the data. They are only available when retrieving data for a single variable across many numerical constraint options.  + Default `0` (optional)
    describe = false # bool | Whether or not to produce a description of the data. Set to `true` to produce a description. Descriptions are not available if no entities are specified.  + Default `false` (optional)
    format = 'format_example' # str | If format is set to `google`, the data frame will be formatted as a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class). If the format is not provided or invalid, then the frame will be formatted normally. (optional)
    app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). (optional)
    x_app_token = 'cQovpGcdUT1CSzgYk0KPYdAI0' # str | e.g. cQovpGcdUT1CSzgYk0KPYdAI0 (optional)

    try:
        # Get values for variables
        api_instance.get_values_for_variables(variable, entity_id=entity_id, forecast=forecast, describe=describe, format=format, app_token=app_token, x_app_token=x_app_token)
    except Exception as e:
        print("Exception when calling DefaultApi->get_values_for_variables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable** | **str**| Comma separated list of variable IDs. Defaults to retrieving all variables. It is also possible to pass in a topic such as &#x60;demographics&#x60;, or a dataset such as &#x60;demographics.population&#x60;, which would both be equivalent to specifying &#x60;demographics.population.count&#x60; and &#x60;demographics.population.change&#x60;. Note that only variables in the same dataset are allowed. | 
 **entity_id** | **str**| Comma separated list of entity IDs. Defaults to retrieving all entities. Note that since there is currently no results pagination, retrieving values for all entities may produce incomplete results. | [optional] 
 **forecast** | **float**| Number of steps to forecast. Must be an integer between 0 and 20. Forecasts are produced using linear extrapolation on the data. They are only available when retrieving data for a single variable across many numerical constraint options.  + Default &#x60;0&#x60; | [optional] 
 **describe** | **bool**| Whether or not to produce a description of the data. Set to &#x60;true&#x60; to produce a description. Descriptions are not available if no entities are specified.  + Default &#x60;false&#x60; | [optional] 
 **format** | **str**| If format is set to &#x60;google&#x60;, the data frame will be formatted as a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class). If the format is not provided or invalid, then the frame will be formatted normally. | [optional] 
 **app_token** | **str**| The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be used with your request. The &#x60;app_token&#x60; parameter is required if an app token is not passed via the &#x60;X-App-Token&#x60; HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html). | [optional] 
 **x_app_token** | **str**| e.g. cQovpGcdUT1CSzgYk0KPYdAI0 | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

