# openapi_client.IncidentsApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_incidents_ack_patch**](IncidentsApi.md#api_public_v1_incidents_ack_patch) | **PATCH** /api-public/v1/incidents/ack | Acknowledge an incident or list of incidents
[**api_public_v1_incidents_by_user_ack_patch**](IncidentsApi.md#api_public_v1_incidents_by_user_ack_patch) | **PATCH** /api-public/v1/incidents/byUser/ack | Acknowledge all incidents for which a user was paged.
[**api_public_v1_incidents_by_user_resolve_patch**](IncidentsApi.md#api_public_v1_incidents_by_user_resolve_patch) | **PATCH** /api-public/v1/incidents/byUser/resolve | Resolve all incidents for which a user was paged.
[**api_public_v1_incidents_get**](IncidentsApi.md#api_public_v1_incidents_get) | **GET** /api-public/v1/incidents | Get current incident information
[**api_public_v1_incidents_post**](IncidentsApi.md#api_public_v1_incidents_post) | **POST** /api-public/v1/incidents | Create a new incident
[**api_public_v1_incidents_reroute_post**](IncidentsApi.md#api_public_v1_incidents_reroute_post) | **POST** /api-public/v1/incidents/reroute | Reroute one or more incidents to one or more new routable destinations.
[**api_public_v1_incidents_resolve_patch**](IncidentsApi.md#api_public_v1_incidents_resolve_patch) | **PATCH** /api-public/v1/incidents/resolve | Resolve an incident or list of incidents


# **api_public_v1_incidents_ack_patch**
> AckOrResolveResponse api_public_v1_incidents_ack_patch(x_vo_api_id, x_vo_api_key, body)

Acknowledge an incident or list of incidents

The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.ack_or_resolve_request import AckOrResolveRequest
from openapi_client.models.ack_or_resolve_response import AckOrResolveResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AckOrResolveRequest() # AckOrResolveRequest | Ack/Resolve payload

    try:
        # Acknowledge an incident or list of incidents
        api_response = api_instance.api_public_v1_incidents_ack_patch(x_vo_api_id, x_vo_api_key, body)
        print("The response of IncidentsApi->api_public_v1_incidents_ack_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_ack_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AckOrResolveRequest**](AckOrResolveRequest.md)| Ack/Resolve payload | 

### Return type

[**AckOrResolveResponse**](AckOrResolveResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of each acknowledge incident action. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_incidents_by_user_ack_patch**
> AckOrResolveResponse api_public_v1_incidents_by_user_ack_patch(x_vo_api_id, x_vo_api_key, body)

Acknowledge all incidents for which a user was paged.

The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.ack_or_resolve_by_user_request import AckOrResolveByUserRequest
from openapi_client.models.ack_or_resolve_response import AckOrResolveResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AckOrResolveByUserRequest() # AckOrResolveByUserRequest | Ack/Resolve payload

    try:
        # Acknowledge all incidents for which a user was paged.
        api_response = api_instance.api_public_v1_incidents_by_user_ack_patch(x_vo_api_id, x_vo_api_key, body)
        print("The response of IncidentsApi->api_public_v1_incidents_by_user_ack_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_by_user_ack_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AckOrResolveByUserRequest**](AckOrResolveByUserRequest.md)| Ack/Resolve payload | 

### Return type

[**AckOrResolveResponse**](AckOrResolveResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of each acknowledge incident action. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_incidents_by_user_resolve_patch**
> AckOrResolveResponse api_public_v1_incidents_by_user_resolve_patch(x_vo_api_id, x_vo_api_key, body)

Resolve all incidents for which a user was paged.

The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.ack_or_resolve_by_user_request import AckOrResolveByUserRequest
from openapi_client.models.ack_or_resolve_response import AckOrResolveResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AckOrResolveByUserRequest() # AckOrResolveByUserRequest | Ack/Resolve payload

    try:
        # Resolve all incidents for which a user was paged.
        api_response = api_instance.api_public_v1_incidents_by_user_resolve_patch(x_vo_api_id, x_vo_api_key, body)
        print("The response of IncidentsApi->api_public_v1_incidents_by_user_resolve_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_by_user_resolve_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AckOrResolveByUserRequest**](AckOrResolveByUserRequest.md)| Ack/Resolve payload | 

### Return type

[**AckOrResolveResponse**](AckOrResolveResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of each resolve incident action. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_incidents_get**
> ActiveIncidentList api_public_v1_incidents_get(x_vo_api_id, x_vo_api_key)

Get current incident information

Get a list of the currently open, acknowledged and recently resolved incidents.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.active_incident_list import ActiveIncidentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get current incident information
        api_response = api_instance.api_public_v1_incidents_get(x_vo_api_id, x_vo_api_key)
        print("The response of IncidentsApi->api_public_v1_incidents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ActiveIncidentList**](ActiveIncidentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The set of incidents.  |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_incidents_post**
> CreatedIncident api_public_v1_incidents_post(x_vo_api_id, x_vo_api_key, body)

Create a new incident

Create a new incident.  This call replicates the function of our <a href=\"https://help.victorops.com/knowledge-base/manual-incident-creation/\">manual incident creation process</a>. Monitoring tools and custom integrations should be configured using our <a href=\"https://help.victorops.com/knowledge-base/victorops-restendpoint-integration/\">REST Endpoint</a>.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.create_incident_request import CreateIncidentRequest
from openapi_client.models.created_incident import CreatedIncident
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.CreateIncidentRequest() # CreateIncidentRequest | The incident details

    try:
        # Create a new incident
        api_response = api_instance.api_public_v1_incidents_post(x_vo_api_id, x_vo_api_key, body)
        print("The response of IncidentsApi->api_public_v1_incidents_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**CreateIncidentRequest**](CreateIncidentRequest.md)| The incident details | 

### Return type

[**CreatedIncident**](CreatedIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the incident created  |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_incidents_reroute_post**
> RerouteStatusResponse api_public_v1_incidents_reroute_post(x_vo_api_id, x_vo_api_key, body)

Reroute one or more incidents to one or more new routable destinations.

Reroute one or more incidents to one or more users and/or escalation policies  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.reroute_collection import RerouteCollection
from openapi_client.models.reroute_status_response import RerouteStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.RerouteCollection() # RerouteCollection | The reroute rules

    try:
        # Reroute one or more incidents to one or more new routable destinations.
        api_response = api_instance.api_public_v1_incidents_reroute_post(x_vo_api_id, x_vo_api_key, body)
        print("The response of IncidentsApi->api_public_v1_incidents_reroute_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_reroute_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**RerouteCollection**](RerouteCollection.md)| The reroute rules | 

### Return type

[**RerouteStatusResponse**](RerouteStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created reroute object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_incidents_resolve_patch**
> AckOrResolveResponse api_public_v1_incidents_resolve_patch(x_vo_api_id, x_vo_api_key, body)

Resolve an incident or list of incidents

The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.ack_or_resolve_request import AckOrResolveRequest
from openapi_client.models.ack_or_resolve_response import AckOrResolveResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AckOrResolveRequest() # AckOrResolveRequest | Ack/Resolve payload

    try:
        # Resolve an incident or list of incidents
        api_response = api_instance.api_public_v1_incidents_resolve_patch(x_vo_api_id, x_vo_api_key, body)
        print("The response of IncidentsApi->api_public_v1_incidents_resolve_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->api_public_v1_incidents_resolve_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AckOrResolveRequest**](AckOrResolveRequest.md)| Ack/Resolve payload | 

### Return type

[**AckOrResolveResponse**](AckOrResolveResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of each resolve incident action. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

