# openapi_client.ScraperTargetsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_scrapers_id**](ScraperTargetsApi.md#delete_scrapers_id) | **DELETE** /scrapers/{scraperTargetID} | Delete a scraper target
[**delete_scrapers_id_labels_id**](ScraperTargetsApi.md#delete_scrapers_id_labels_id) | **DELETE** /scrapers/{scraperTargetID}/labels/{labelID} | Delete a label from a scraper target
[**delete_scrapers_id_members_id**](ScraperTargetsApi.md#delete_scrapers_id_members_id) | **DELETE** /scrapers/{scraperTargetID}/members/{userID} | Remove a member from a scraper target
[**delete_scrapers_id_owners_id**](ScraperTargetsApi.md#delete_scrapers_id_owners_id) | **DELETE** /scrapers/{scraperTargetID}/owners/{userID} | Remove an owner from a scraper target
[**get_scrapers**](ScraperTargetsApi.md#get_scrapers) | **GET** /scrapers | List all scraper targets
[**get_scrapers_id**](ScraperTargetsApi.md#get_scrapers_id) | **GET** /scrapers/{scraperTargetID} | Retrieve a scraper target
[**get_scrapers_id_labels**](ScraperTargetsApi.md#get_scrapers_id_labels) | **GET** /scrapers/{scraperTargetID}/labels | List all labels for a scraper target
[**get_scrapers_id_members**](ScraperTargetsApi.md#get_scrapers_id_members) | **GET** /scrapers/{scraperTargetID}/members | List all users with member privileges for a scraper target
[**get_scrapers_id_owners**](ScraperTargetsApi.md#get_scrapers_id_owners) | **GET** /scrapers/{scraperTargetID}/owners | List all owners of a scraper target
[**patch_scrapers_id**](ScraperTargetsApi.md#patch_scrapers_id) | **PATCH** /scrapers/{scraperTargetID} | Update a scraper target
[**post_scrapers**](ScraperTargetsApi.md#post_scrapers) | **POST** /scrapers | Create a scraper target
[**post_scrapers_id_labels**](ScraperTargetsApi.md#post_scrapers_id_labels) | **POST** /scrapers/{scraperTargetID}/labels | Add a label to a scraper target
[**post_scrapers_id_members**](ScraperTargetsApi.md#post_scrapers_id_members) | **POST** /scrapers/{scraperTargetID}/members | Add a member to a scraper target
[**post_scrapers_id_owners**](ScraperTargetsApi.md#post_scrapers_id_owners) | **POST** /scrapers/{scraperTargetID}/owners | Add an owner to a scraper target


# **delete_scrapers_id**
> delete_scrapers_id(scraper_target_id, zap_trace_span=zap_trace_span)

Delete a scraper target

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The identifier of the scraper target.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a scraper target
        api_instance.delete_scrapers_id(scraper_target_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->delete_scrapers_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The identifier of the scraper target. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Scraper target deleted |  -  |
**0** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_scrapers_id_labels_id**
> delete_scrapers_id_labels_id(scraper_target_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a scraper target

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    label_id = 'label_id_example' # str | The label ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a scraper target
        api_instance.delete_scrapers_id_labels_id(scraper_target_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->delete_scrapers_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **label_id** | **str**| The label ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Delete has been accepted |  -  |
**404** | Scraper target not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_scrapers_id_members_id**
> delete_scrapers_id_members_id(user_id, scraper_target_id, zap_trace_span=zap_trace_span)

Remove a member from a scraper target

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    user_id = 'user_id_example' # str | The ID of member to remove.
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove a member from a scraper target
        api_instance.delete_scrapers_id_members_id(user_id, scraper_target_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->delete_scrapers_id_members_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of member to remove. | 
 **scraper_target_id** | **str**| The scraper target ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Member removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_scrapers_id_owners_id**
> delete_scrapers_id_owners_id(user_id, scraper_target_id, zap_trace_span=zap_trace_span)

Remove an owner from a scraper target

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    user_id = 'user_id_example' # str | The ID of owner to remove.
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove an owner from a scraper target
        api_instance.delete_scrapers_id_owners_id(user_id, scraper_target_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->delete_scrapers_id_owners_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of owner to remove. | 
 **scraper_target_id** | **str**| The scraper target ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Owner removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_scrapers**
> ScraperTargetResponses get_scrapers(zap_trace_span=zap_trace_span, name=name, id=id, org_id=org_id, org=org)

List all scraper targets

### Example


```python
import openapi_client
from openapi_client.models.scraper_target_responses import ScraperTargetResponses
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    name = 'name_example' # str | Specifies the name of the scraper target. (optional)
    id = ['id_example'] # List[str] | List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used. (optional)
    org_id = 'org_id_example' # str | Specifies the organization ID of the scraper target. (optional)
    org = 'org_example' # str | Specifies the organization name of the scraper target. (optional)

    try:
        # List all scraper targets
        api_response = api_instance.get_scrapers(zap_trace_span=zap_trace_span, name=name, id=id, org_id=org_id, org=org)
        print("The response of ScraperTargetsApi->get_scrapers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->get_scrapers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **name** | **str**| Specifies the name of the scraper target. | [optional] 
 **id** | [**List[str]**](str.md)| List of scraper target IDs to return. If both &#x60;id&#x60; and &#x60;owner&#x60; are specified, only &#x60;id&#x60; is used. | [optional] 
 **org_id** | **str**| Specifies the organization ID of the scraper target. | [optional] 
 **org** | **str**| Specifies the organization name of the scraper target. | [optional] 

### Return type

[**ScraperTargetResponses**](ScraperTargetResponses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All scraper targets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_scrapers_id**
> ScraperTargetResponse get_scrapers_id(scraper_target_id, zap_trace_span=zap_trace_span)

Retrieve a scraper target

### Example


```python
import openapi_client
from openapi_client.models.scraper_target_response import ScraperTargetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The identifier of the scraper target.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a scraper target
        api_response = api_instance.get_scrapers_id(scraper_target_id, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->get_scrapers_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->get_scrapers_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The identifier of the scraper target. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ScraperTargetResponse**](ScraperTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The scraper target |  -  |
**0** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_scrapers_id_labels**
> LabelsResponse get_scrapers_id_labels(scraper_target_id, zap_trace_span=zap_trace_span)

List all labels for a scraper target

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a scraper target
        api_response = api_instance.get_scrapers_id_labels(scraper_target_id, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->get_scrapers_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->get_scrapers_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of labels for a scraper target. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_scrapers_id_members**
> ResourceMembers get_scrapers_id_members(scraper_target_id, zap_trace_span=zap_trace_span)

List all users with member privileges for a scraper target

### Example


```python
import openapi_client
from openapi_client.models.resource_members import ResourceMembers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all users with member privileges for a scraper target
        api_response = api_instance.get_scrapers_id_members(scraper_target_id, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->get_scrapers_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->get_scrapers_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMembers**](ResourceMembers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of scraper target members |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_scrapers_id_owners**
> ResourceOwners get_scrapers_id_owners(scraper_target_id, zap_trace_span=zap_trace_span)

List all owners of a scraper target

### Example


```python
import openapi_client
from openapi_client.models.resource_owners import ResourceOwners
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all owners of a scraper target
        api_response = api_instance.get_scrapers_id_owners(scraper_target_id, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->get_scrapers_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->get_scrapers_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwners**](ResourceOwners.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of scraper target owners |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_scrapers_id**
> ScraperTargetResponse patch_scrapers_id(scraper_target_id, scraper_target_request, zap_trace_span=zap_trace_span)

Update a scraper target

### Example


```python
import openapi_client
from openapi_client.models.scraper_target_request import ScraperTargetRequest
from openapi_client.models.scraper_target_response import ScraperTargetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The identifier of the scraper target.
    scraper_target_request = openapi_client.ScraperTargetRequest() # ScraperTargetRequest | Scraper target update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a scraper target
        api_response = api_instance.patch_scrapers_id(scraper_target_id, scraper_target_request, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->patch_scrapers_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->patch_scrapers_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The identifier of the scraper target. | 
 **scraper_target_request** | [**ScraperTargetRequest**](ScraperTargetRequest.md)| Scraper target update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ScraperTargetResponse**](ScraperTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Scraper target updated |  -  |
**0** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_scrapers**
> ScraperTargetResponse post_scrapers(scraper_target_request, zap_trace_span=zap_trace_span)

Create a scraper target

### Example


```python
import openapi_client
from openapi_client.models.scraper_target_request import ScraperTargetRequest
from openapi_client.models.scraper_target_response import ScraperTargetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_request = openapi_client.ScraperTargetRequest() # ScraperTargetRequest | Scraper target to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a scraper target
        api_response = api_instance.post_scrapers(scraper_target_request, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->post_scrapers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->post_scrapers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_request** | [**ScraperTargetRequest**](ScraperTargetRequest.md)| Scraper target to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ScraperTargetResponse**](ScraperTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Scraper target created |  -  |
**0** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_scrapers_id_labels**
> LabelResponse post_scrapers_id_labels(scraper_target_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a scraper target

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a scraper target
        api_response = api_instance.post_scrapers_id_labels(scraper_target_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->post_scrapers_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->post_scrapers_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The newly added label |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_scrapers_id_members**
> ResourceMember post_scrapers_id_members(scraper_target_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add a member to a scraper target

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_member import ResourceMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as member
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a member to a scraper target
        api_response = api_instance.post_scrapers_id_members(scraper_target_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->post_scrapers_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->post_scrapers_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as member | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMember**](ResourceMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Member added to scraper targets |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_scrapers_id_owners**
> ResourceOwner post_scrapers_id_owners(scraper_target_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add an owner to a scraper target

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_owner import ResourceOwner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScraperTargetsApi(api_client)
    scraper_target_id = 'scraper_target_id_example' # str | The scraper target ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as owner
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add an owner to a scraper target
        api_response = api_instance.post_scrapers_id_owners(scraper_target_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of ScraperTargetsApi->post_scrapers_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScraperTargetsApi->post_scrapers_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scraper_target_id** | **str**| The scraper target ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as owner | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwner**](ResourceOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Scraper target owner added |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

