# openapi_client.CommandsApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelreservation**](CommandsApi.md#cancelreservation) | **POST** /v1/commands/cancelreservation | 
[**get_commands**](CommandsApi.md#get_commands) | **GET** /v1/commands | 
[**get_variables**](CommandsApi.md#get_variables) | **GET** /v1/commands/{id}/variables | 
[**patch_charge_station_variable**](CommandsApi.md#patch_charge_station_variable) | **PATCH** /v1/commands/{id}/variables | 
[**remotestart**](CommandsApi.md#remotestart) | **POST** /v1/commands/remotestart | 
[**remotestop**](CommandsApi.md#remotestop) | **POST** /v1/commands/remotestop | 
[**reserve**](CommandsApi.md#reserve) | **POST** /v1/commands/reserve | 
[**reset**](CommandsApi.md#reset) | **POST** /v1/commands/reset | 
[**unlockconnector**](CommandsApi.md#unlockconnector) | **POST** /v1/commands/unlockconnector | 


# **cancelreservation**
> PatchChargeStation200Response cancelreservation(cancelreservation_request)



Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.cancelreservation_request import CancelreservationRequest
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    cancelreservation_request = openapi_client.CancelreservationRequest() # CancelreservationRequest | 

    try:
        api_response = api_instance.cancelreservation(cancelreservation_request)
        print("The response of CommandsApi->cancelreservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->cancelreservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelreservation_request** | [**CancelreservationRequest**](CancelreservationRequest.md)|  | 

### Return type

[**PatchChargeStation200Response**](PatchChargeStation200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_commands**
> get_commands(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_chargestation=include_chargestation, include_driver=include_driver, include_transaction=include_transaction, include_organization=include_organization)



Get Commands data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_chargestation = True # bool | Populate chargestation (optional)
    include_driver = True # bool | Populate driver (optional)
    include_transaction = True # bool | Populate transaction (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_commands(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_chargestation=include_chargestation, include_driver=include_driver, include_transaction=include_transaction, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling CommandsApi->get_commands: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_chargestation** | **bool**| Populate chargestation | [optional] 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_transaction** | **bool**| Populate transaction | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_variables**
> get_variables(id)



Get a charge station's config variables

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    id = 'id_example' # str | The chargestation id

    try:
        api_instance.get_variables(id)
    except Exception as e:
        print("Exception when calling CommandsApi->get_variables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The chargestation id | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Cs configurations array |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_charge_station_variable**
> PatchChargeStation200Response patch_charge_station_variable(id, patch_charge_station_variable_request)



Update config variables for a chargestation

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.patch_charge_station_variable_request import PatchChargeStationVariableRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    id = 'id_example' # str | ID of charge station
    patch_charge_station_variable_request = openapi_client.PatchChargeStationVariableRequest() # PatchChargeStationVariableRequest | Charge Station Variable to set

    try:
        api_response = api_instance.patch_charge_station_variable(id, patch_charge_station_variable_request)
        print("The response of CommandsApi->patch_charge_station_variable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->patch_charge_station_variable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of charge station | 
 **patch_charge_station_variable_request** | [**PatchChargeStationVariableRequest**](PatchChargeStationVariableRequest.md)| Charge Station Variable to set | 

### Return type

[**PatchChargeStation200Response**](PatchChargeStation200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remotestart**
> Setchargingschedule201Response remotestart(remotestart_request)



Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remotestart_request import RemotestartRequest
from openapi_client.models.setchargingschedule201_response import Setchargingschedule201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    remotestart_request = openapi_client.RemotestartRequest() # RemotestartRequest | 

    try:
        api_response = api_instance.remotestart(remotestart_request)
        print("The response of CommandsApi->remotestart:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->remotestart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **remotestart_request** | [**RemotestartRequest**](RemotestartRequest.md)|  | 

### Return type

[**Setchargingschedule201Response**](Setchargingschedule201Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remotestop**
> remotestop(remotestop_request)



Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remotestop_request import RemotestopRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    remotestop_request = openapi_client.RemotestopRequest() # RemotestopRequest | Remote stop transaction info here.

    try:
        api_instance.remotestop(remotestop_request)
    except Exception as e:
        print("Exception when calling CommandsApi->remotestop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **remotestop_request** | [**RemotestopRequest**](RemotestopRequest.md)| Remote stop transaction info here. | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reserve**
> Setchargingschedule201Response reserve(reserve_request)



Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.reserve_request import ReserveRequest
from openapi_client.models.setchargingschedule201_response import Setchargingschedule201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    reserve_request = openapi_client.ReserveRequest() # ReserveRequest | 

    try:
        api_response = api_instance.reserve(reserve_request)
        print("The response of CommandsApi->reserve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->reserve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reserve_request** | [**ReserveRequest**](ReserveRequest.md)|  | 

### Return type

[**Setchargingschedule201Response**](Setchargingschedule201Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset**
> PatchChargeStation200Response reset(reset_request)



Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.reset_request import ResetRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    reset_request = openapi_client.ResetRequest() # ResetRequest | 

    try:
        api_response = api_instance.reset(reset_request)
        print("The response of CommandsApi->reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset_request** | [**ResetRequest**](ResetRequest.md)|  | 

### Return type

[**PatchChargeStation200Response**](PatchChargeStation200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlockconnector**
> Setchargingschedule201Response unlockconnector(unlockconnector_request)



Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.setchargingschedule201_response import Setchargingschedule201Response
from openapi_client.models.unlockconnector_request import UnlockconnectorRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommandsApi(api_client)
    unlockconnector_request = openapi_client.UnlockconnectorRequest() # UnlockconnectorRequest | 

    try:
        api_response = api_instance.unlockconnector(unlockconnector_request)
        print("The response of CommandsApi->unlockconnector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->unlockconnector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlockconnector_request** | [**UnlockconnectorRequest**](UnlockconnectorRequest.md)|  | 

### Return type

[**Setchargingschedule201Response**](Setchargingschedule201Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

