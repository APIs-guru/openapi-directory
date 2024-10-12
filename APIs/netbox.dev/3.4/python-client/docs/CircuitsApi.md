# openapi_client.CircuitsApi

All URIs are relative to *https://demo.netbox.dev/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**circuits_circuit_terminations_bulk_delete**](CircuitsApi.md#circuits_circuit_terminations_bulk_delete) | **DELETE** /circuits/circuit-terminations/ | 
[**circuits_circuit_terminations_bulk_partial_update**](CircuitsApi.md#circuits_circuit_terminations_bulk_partial_update) | **PATCH** /circuits/circuit-terminations/ | 
[**circuits_circuit_terminations_bulk_update**](CircuitsApi.md#circuits_circuit_terminations_bulk_update) | **PUT** /circuits/circuit-terminations/ | 
[**circuits_circuit_terminations_create**](CircuitsApi.md#circuits_circuit_terminations_create) | **POST** /circuits/circuit-terminations/ | 
[**circuits_circuit_terminations_delete**](CircuitsApi.md#circuits_circuit_terminations_delete) | **DELETE** /circuits/circuit-terminations/{id}/ | 
[**circuits_circuit_terminations_list**](CircuitsApi.md#circuits_circuit_terminations_list) | **GET** /circuits/circuit-terminations/ | 
[**circuits_circuit_terminations_partial_update**](CircuitsApi.md#circuits_circuit_terminations_partial_update) | **PATCH** /circuits/circuit-terminations/{id}/ | 
[**circuits_circuit_terminations_paths**](CircuitsApi.md#circuits_circuit_terminations_paths) | **GET** /circuits/circuit-terminations/{id}/paths/ | 
[**circuits_circuit_terminations_read**](CircuitsApi.md#circuits_circuit_terminations_read) | **GET** /circuits/circuit-terminations/{id}/ | 
[**circuits_circuit_terminations_update**](CircuitsApi.md#circuits_circuit_terminations_update) | **PUT** /circuits/circuit-terminations/{id}/ | 
[**circuits_circuit_types_bulk_delete**](CircuitsApi.md#circuits_circuit_types_bulk_delete) | **DELETE** /circuits/circuit-types/ | 
[**circuits_circuit_types_bulk_partial_update**](CircuitsApi.md#circuits_circuit_types_bulk_partial_update) | **PATCH** /circuits/circuit-types/ | 
[**circuits_circuit_types_bulk_update**](CircuitsApi.md#circuits_circuit_types_bulk_update) | **PUT** /circuits/circuit-types/ | 
[**circuits_circuit_types_create**](CircuitsApi.md#circuits_circuit_types_create) | **POST** /circuits/circuit-types/ | 
[**circuits_circuit_types_delete**](CircuitsApi.md#circuits_circuit_types_delete) | **DELETE** /circuits/circuit-types/{id}/ | 
[**circuits_circuit_types_list**](CircuitsApi.md#circuits_circuit_types_list) | **GET** /circuits/circuit-types/ | 
[**circuits_circuit_types_partial_update**](CircuitsApi.md#circuits_circuit_types_partial_update) | **PATCH** /circuits/circuit-types/{id}/ | 
[**circuits_circuit_types_read**](CircuitsApi.md#circuits_circuit_types_read) | **GET** /circuits/circuit-types/{id}/ | 
[**circuits_circuit_types_update**](CircuitsApi.md#circuits_circuit_types_update) | **PUT** /circuits/circuit-types/{id}/ | 
[**circuits_circuits_bulk_delete**](CircuitsApi.md#circuits_circuits_bulk_delete) | **DELETE** /circuits/circuits/ | 
[**circuits_circuits_bulk_partial_update**](CircuitsApi.md#circuits_circuits_bulk_partial_update) | **PATCH** /circuits/circuits/ | 
[**circuits_circuits_bulk_update**](CircuitsApi.md#circuits_circuits_bulk_update) | **PUT** /circuits/circuits/ | 
[**circuits_circuits_create**](CircuitsApi.md#circuits_circuits_create) | **POST** /circuits/circuits/ | 
[**circuits_circuits_delete**](CircuitsApi.md#circuits_circuits_delete) | **DELETE** /circuits/circuits/{id}/ | 
[**circuits_circuits_list**](CircuitsApi.md#circuits_circuits_list) | **GET** /circuits/circuits/ | 
[**circuits_circuits_partial_update**](CircuitsApi.md#circuits_circuits_partial_update) | **PATCH** /circuits/circuits/{id}/ | 
[**circuits_circuits_read**](CircuitsApi.md#circuits_circuits_read) | **GET** /circuits/circuits/{id}/ | 
[**circuits_circuits_update**](CircuitsApi.md#circuits_circuits_update) | **PUT** /circuits/circuits/{id}/ | 
[**circuits_provider_networks_bulk_delete**](CircuitsApi.md#circuits_provider_networks_bulk_delete) | **DELETE** /circuits/provider-networks/ | 
[**circuits_provider_networks_bulk_partial_update**](CircuitsApi.md#circuits_provider_networks_bulk_partial_update) | **PATCH** /circuits/provider-networks/ | 
[**circuits_provider_networks_bulk_update**](CircuitsApi.md#circuits_provider_networks_bulk_update) | **PUT** /circuits/provider-networks/ | 
[**circuits_provider_networks_create**](CircuitsApi.md#circuits_provider_networks_create) | **POST** /circuits/provider-networks/ | 
[**circuits_provider_networks_delete**](CircuitsApi.md#circuits_provider_networks_delete) | **DELETE** /circuits/provider-networks/{id}/ | 
[**circuits_provider_networks_list**](CircuitsApi.md#circuits_provider_networks_list) | **GET** /circuits/provider-networks/ | 
[**circuits_provider_networks_partial_update**](CircuitsApi.md#circuits_provider_networks_partial_update) | **PATCH** /circuits/provider-networks/{id}/ | 
[**circuits_provider_networks_read**](CircuitsApi.md#circuits_provider_networks_read) | **GET** /circuits/provider-networks/{id}/ | 
[**circuits_provider_networks_update**](CircuitsApi.md#circuits_provider_networks_update) | **PUT** /circuits/provider-networks/{id}/ | 
[**circuits_providers_bulk_delete**](CircuitsApi.md#circuits_providers_bulk_delete) | **DELETE** /circuits/providers/ | 
[**circuits_providers_bulk_partial_update**](CircuitsApi.md#circuits_providers_bulk_partial_update) | **PATCH** /circuits/providers/ | 
[**circuits_providers_bulk_update**](CircuitsApi.md#circuits_providers_bulk_update) | **PUT** /circuits/providers/ | 
[**circuits_providers_create**](CircuitsApi.md#circuits_providers_create) | **POST** /circuits/providers/ | 
[**circuits_providers_delete**](CircuitsApi.md#circuits_providers_delete) | **DELETE** /circuits/providers/{id}/ | 
[**circuits_providers_list**](CircuitsApi.md#circuits_providers_list) | **GET** /circuits/providers/ | 
[**circuits_providers_partial_update**](CircuitsApi.md#circuits_providers_partial_update) | **PATCH** /circuits/providers/{id}/ | 
[**circuits_providers_read**](CircuitsApi.md#circuits_providers_read) | **GET** /circuits/providers/{id}/ | 
[**circuits_providers_update**](CircuitsApi.md#circuits_providers_update) | **PUT** /circuits/providers/{id}/ | 


# **circuits_circuit_terminations_bulk_delete**
> circuits_circuit_terminations_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)

    try:
        api_instance.circuits_circuit_terminations_bulk_delete()
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_bulk_partial_update**
> CircuitTermination circuits_circuit_terminations_bulk_partial_update(writable_circuit_termination)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.models.writable_circuit_termination import WritableCircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_circuit_termination = openapi_client.WritableCircuitTermination() # WritableCircuitTermination | 

    try:
        api_response = api_instance.circuits_circuit_terminations_bulk_partial_update(writable_circuit_termination)
        print("The response of CircuitsApi->circuits_circuit_terminations_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_circuit_termination** | [**WritableCircuitTermination**](WritableCircuitTermination.md)|  | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_bulk_update**
> CircuitTermination circuits_circuit_terminations_bulk_update(writable_circuit_termination)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.models.writable_circuit_termination import WritableCircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_circuit_termination = openapi_client.WritableCircuitTermination() # WritableCircuitTermination | 

    try:
        api_response = api_instance.circuits_circuit_terminations_bulk_update(writable_circuit_termination)
        print("The response of CircuitsApi->circuits_circuit_terminations_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_circuit_termination** | [**WritableCircuitTermination**](WritableCircuitTermination.md)|  | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_create**
> CircuitTermination circuits_circuit_terminations_create(writable_circuit_termination)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.models.writable_circuit_termination import WritableCircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_circuit_termination = openapi_client.WritableCircuitTermination() # WritableCircuitTermination | 

    try:
        api_response = api_instance.circuits_circuit_terminations_create(writable_circuit_termination)
        print("The response of CircuitsApi->circuits_circuit_terminations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_circuit_termination** | [**WritableCircuitTermination**](WritableCircuitTermination.md)|  | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_delete**
> circuits_circuit_terminations_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit termination.

    try:
        api_instance.circuits_circuit_terminations_delete(id)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit termination. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_list**
> CircuitsCircuitTerminationsList200Response circuits_circuit_terminations_list(id=id, term_side=term_side, port_speed=port_speed, upstream_speed=upstream_speed, xconnect_id=xconnect_id, description=description, cable_end=cable_end, created=created, last_updated=last_updated, q=q, tag=tag, cabled=cabled, occupied=occupied, circuit_id=circuit_id, site_id=site_id, site=site, provider_network_id=provider_network_id, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, term_side__n=term_side__n, port_speed__n=port_speed__n, port_speed__lte=port_speed__lte, port_speed__lt=port_speed__lt, port_speed__gte=port_speed__gte, port_speed__gt=port_speed__gt, upstream_speed__n=upstream_speed__n, upstream_speed__lte=upstream_speed__lte, upstream_speed__lt=upstream_speed__lt, upstream_speed__gte=upstream_speed__gte, upstream_speed__gt=upstream_speed__gt, xconnect_id__n=xconnect_id__n, xconnect_id__ic=xconnect_id__ic, xconnect_id__nic=xconnect_id__nic, xconnect_id__iew=xconnect_id__iew, xconnect_id__niew=xconnect_id__niew, xconnect_id__isw=xconnect_id__isw, xconnect_id__nisw=xconnect_id__nisw, xconnect_id__ie=xconnect_id__ie, xconnect_id__nie=xconnect_id__nie, xconnect_id__empty=xconnect_id__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, cable_end__n=cable_end__n, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, circuit_id__n=circuit_id__n, site_id__n=site_id__n, site__n=site__n, provider_network_id__n=provider_network_id__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuits_circuit_terminations_list200_response import CircuitsCircuitTerminationsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 'id_example' # str |  (optional)
    term_side = 'term_side_example' # str |  (optional)
    port_speed = 'port_speed_example' # str |  (optional)
    upstream_speed = 'upstream_speed_example' # str |  (optional)
    xconnect_id = 'xconnect_id_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    cable_end = 'cable_end_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    cabled = 'cabled_example' # str |  (optional)
    occupied = 'occupied_example' # str |  (optional)
    circuit_id = 'circuit_id_example' # str |  (optional)
    site_id = 'site_id_example' # str |  (optional)
    site = 'site_example' # str |  (optional)
    provider_network_id = 'provider_network_id_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    term_side__n = 'term_side__n_example' # str |  (optional)
    port_speed__n = 'port_speed__n_example' # str |  (optional)
    port_speed__lte = 'port_speed__lte_example' # str |  (optional)
    port_speed__lt = 'port_speed__lt_example' # str |  (optional)
    port_speed__gte = 'port_speed__gte_example' # str |  (optional)
    port_speed__gt = 'port_speed__gt_example' # str |  (optional)
    upstream_speed__n = 'upstream_speed__n_example' # str |  (optional)
    upstream_speed__lte = 'upstream_speed__lte_example' # str |  (optional)
    upstream_speed__lt = 'upstream_speed__lt_example' # str |  (optional)
    upstream_speed__gte = 'upstream_speed__gte_example' # str |  (optional)
    upstream_speed__gt = 'upstream_speed__gt_example' # str |  (optional)
    xconnect_id__n = 'xconnect_id__n_example' # str |  (optional)
    xconnect_id__ic = 'xconnect_id__ic_example' # str |  (optional)
    xconnect_id__nic = 'xconnect_id__nic_example' # str |  (optional)
    xconnect_id__iew = 'xconnect_id__iew_example' # str |  (optional)
    xconnect_id__niew = 'xconnect_id__niew_example' # str |  (optional)
    xconnect_id__isw = 'xconnect_id__isw_example' # str |  (optional)
    xconnect_id__nisw = 'xconnect_id__nisw_example' # str |  (optional)
    xconnect_id__ie = 'xconnect_id__ie_example' # str |  (optional)
    xconnect_id__nie = 'xconnect_id__nie_example' # str |  (optional)
    xconnect_id__empty = 'xconnect_id__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    cable_end__n = 'cable_end__n_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    circuit_id__n = 'circuit_id__n_example' # str |  (optional)
    site_id__n = 'site_id__n_example' # str |  (optional)
    site__n = 'site__n_example' # str |  (optional)
    provider_network_id__n = 'provider_network_id__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.circuits_circuit_terminations_list(id=id, term_side=term_side, port_speed=port_speed, upstream_speed=upstream_speed, xconnect_id=xconnect_id, description=description, cable_end=cable_end, created=created, last_updated=last_updated, q=q, tag=tag, cabled=cabled, occupied=occupied, circuit_id=circuit_id, site_id=site_id, site=site, provider_network_id=provider_network_id, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, term_side__n=term_side__n, port_speed__n=port_speed__n, port_speed__lte=port_speed__lte, port_speed__lt=port_speed__lt, port_speed__gte=port_speed__gte, port_speed__gt=port_speed__gt, upstream_speed__n=upstream_speed__n, upstream_speed__lte=upstream_speed__lte, upstream_speed__lt=upstream_speed__lt, upstream_speed__gte=upstream_speed__gte, upstream_speed__gt=upstream_speed__gt, xconnect_id__n=xconnect_id__n, xconnect_id__ic=xconnect_id__ic, xconnect_id__nic=xconnect_id__nic, xconnect_id__iew=xconnect_id__iew, xconnect_id__niew=xconnect_id__niew, xconnect_id__isw=xconnect_id__isw, xconnect_id__nisw=xconnect_id__nisw, xconnect_id__ie=xconnect_id__ie, xconnect_id__nie=xconnect_id__nie, xconnect_id__empty=xconnect_id__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, cable_end__n=cable_end__n, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, circuit_id__n=circuit_id__n, site_id__n=site_id__n, site__n=site__n, provider_network_id__n=provider_network_id__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of CircuitsApi->circuits_circuit_terminations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **term_side** | **str**|  | [optional] 
 **port_speed** | **str**|  | [optional] 
 **upstream_speed** | **str**|  | [optional] 
 **xconnect_id** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **cable_end** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **cabled** | **str**|  | [optional] 
 **occupied** | **str**|  | [optional] 
 **circuit_id** | **str**|  | [optional] 
 **site_id** | **str**|  | [optional] 
 **site** | **str**|  | [optional] 
 **provider_network_id** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **term_side__n** | **str**|  | [optional] 
 **port_speed__n** | **str**|  | [optional] 
 **port_speed__lte** | **str**|  | [optional] 
 **port_speed__lt** | **str**|  | [optional] 
 **port_speed__gte** | **str**|  | [optional] 
 **port_speed__gt** | **str**|  | [optional] 
 **upstream_speed__n** | **str**|  | [optional] 
 **upstream_speed__lte** | **str**|  | [optional] 
 **upstream_speed__lt** | **str**|  | [optional] 
 **upstream_speed__gte** | **str**|  | [optional] 
 **upstream_speed__gt** | **str**|  | [optional] 
 **xconnect_id__n** | **str**|  | [optional] 
 **xconnect_id__ic** | **str**|  | [optional] 
 **xconnect_id__nic** | **str**|  | [optional] 
 **xconnect_id__iew** | **str**|  | [optional] 
 **xconnect_id__niew** | **str**|  | [optional] 
 **xconnect_id__isw** | **str**|  | [optional] 
 **xconnect_id__nisw** | **str**|  | [optional] 
 **xconnect_id__ie** | **str**|  | [optional] 
 **xconnect_id__nie** | **str**|  | [optional] 
 **xconnect_id__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **cable_end__n** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **circuit_id__n** | **str**|  | [optional] 
 **site_id__n** | **str**|  | [optional] 
 **site__n** | **str**|  | [optional] 
 **provider_network_id__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**CircuitsCircuitTerminationsList200Response**](CircuitsCircuitTerminationsList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_partial_update**
> CircuitTermination circuits_circuit_terminations_partial_update(id, writable_circuit_termination)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.models.writable_circuit_termination import WritableCircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit termination.
    writable_circuit_termination = openapi_client.WritableCircuitTermination() # WritableCircuitTermination | 

    try:
        api_response = api_instance.circuits_circuit_terminations_partial_update(id, writable_circuit_termination)
        print("The response of CircuitsApi->circuits_circuit_terminations_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit termination. | 
 **writable_circuit_termination** | [**WritableCircuitTermination**](WritableCircuitTermination.md)|  | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_paths**
> CircuitTermination circuits_circuit_terminations_paths(id)



Return all CablePaths which traverse a given pass-through port.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit termination.

    try:
        api_response = api_instance.circuits_circuit_terminations_paths(id)
        print("The response of CircuitsApi->circuits_circuit_terminations_paths:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_paths: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit termination. | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_read**
> CircuitTermination circuits_circuit_terminations_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit termination.

    try:
        api_response = api_instance.circuits_circuit_terminations_read(id)
        print("The response of CircuitsApi->circuits_circuit_terminations_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit termination. | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_terminations_update**
> CircuitTermination circuits_circuit_terminations_update(id, writable_circuit_termination)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_termination import CircuitTermination
from openapi_client.models.writable_circuit_termination import WritableCircuitTermination
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit termination.
    writable_circuit_termination = openapi_client.WritableCircuitTermination() # WritableCircuitTermination | 

    try:
        api_response = api_instance.circuits_circuit_terminations_update(id, writable_circuit_termination)
        print("The response of CircuitsApi->circuits_circuit_terminations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_terminations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit termination. | 
 **writable_circuit_termination** | [**WritableCircuitTermination**](WritableCircuitTermination.md)|  | 

### Return type

[**CircuitTermination**](CircuitTermination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_bulk_delete**
> circuits_circuit_types_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)

    try:
        api_instance.circuits_circuit_types_bulk_delete()
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_bulk_partial_update**
> CircuitType circuits_circuit_types_bulk_partial_update(circuit_type)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_type import CircuitType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    circuit_type = openapi_client.CircuitType() # CircuitType | 

    try:
        api_response = api_instance.circuits_circuit_types_bulk_partial_update(circuit_type)
        print("The response of CircuitsApi->circuits_circuit_types_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **circuit_type** | [**CircuitType**](CircuitType.md)|  | 

### Return type

[**CircuitType**](CircuitType.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_bulk_update**
> CircuitType circuits_circuit_types_bulk_update(circuit_type)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_type import CircuitType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    circuit_type = openapi_client.CircuitType() # CircuitType | 

    try:
        api_response = api_instance.circuits_circuit_types_bulk_update(circuit_type)
        print("The response of CircuitsApi->circuits_circuit_types_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **circuit_type** | [**CircuitType**](CircuitType.md)|  | 

### Return type

[**CircuitType**](CircuitType.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_create**
> CircuitType circuits_circuit_types_create(circuit_type)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_type import CircuitType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    circuit_type = openapi_client.CircuitType() # CircuitType | 

    try:
        api_response = api_instance.circuits_circuit_types_create(circuit_type)
        print("The response of CircuitsApi->circuits_circuit_types_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **circuit_type** | [**CircuitType**](CircuitType.md)|  | 

### Return type

[**CircuitType**](CircuitType.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_delete**
> circuits_circuit_types_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit type.

    try:
        api_instance.circuits_circuit_types_delete(id)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit type. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_list**
> CircuitsCircuitTypesList200Response circuits_circuit_types_list(id=id, name=name, slug=slug, description=description, created=created, last_updated=last_updated, q=q, tag=tag, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, slug__n=slug__n, slug__ic=slug__ic, slug__nic=slug__nic, slug__iew=slug__iew, slug__niew=slug__niew, slug__isw=slug__isw, slug__nisw=slug__nisw, slug__ie=slug__ie, slug__nie=slug__nie, slug__empty=slug__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuits_circuit_types_list200_response import CircuitsCircuitTypesList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 'id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    slug = 'slug_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    name__n = 'name__n_example' # str |  (optional)
    name__ic = 'name__ic_example' # str |  (optional)
    name__nic = 'name__nic_example' # str |  (optional)
    name__iew = 'name__iew_example' # str |  (optional)
    name__niew = 'name__niew_example' # str |  (optional)
    name__isw = 'name__isw_example' # str |  (optional)
    name__nisw = 'name__nisw_example' # str |  (optional)
    name__ie = 'name__ie_example' # str |  (optional)
    name__nie = 'name__nie_example' # str |  (optional)
    name__empty = 'name__empty_example' # str |  (optional)
    slug__n = 'slug__n_example' # str |  (optional)
    slug__ic = 'slug__ic_example' # str |  (optional)
    slug__nic = 'slug__nic_example' # str |  (optional)
    slug__iew = 'slug__iew_example' # str |  (optional)
    slug__niew = 'slug__niew_example' # str |  (optional)
    slug__isw = 'slug__isw_example' # str |  (optional)
    slug__nisw = 'slug__nisw_example' # str |  (optional)
    slug__ie = 'slug__ie_example' # str |  (optional)
    slug__nie = 'slug__nie_example' # str |  (optional)
    slug__empty = 'slug__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.circuits_circuit_types_list(id=id, name=name, slug=slug, description=description, created=created, last_updated=last_updated, q=q, tag=tag, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, slug__n=slug__n, slug__ic=slug__ic, slug__nic=slug__nic, slug__iew=slug__iew, slug__niew=slug__niew, slug__isw=slug__isw, slug__nisw=slug__nisw, slug__ie=slug__ie, slug__nie=slug__nie, slug__empty=slug__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of CircuitsApi->circuits_circuit_types_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **slug** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **name__n** | **str**|  | [optional] 
 **name__ic** | **str**|  | [optional] 
 **name__nic** | **str**|  | [optional] 
 **name__iew** | **str**|  | [optional] 
 **name__niew** | **str**|  | [optional] 
 **name__isw** | **str**|  | [optional] 
 **name__nisw** | **str**|  | [optional] 
 **name__ie** | **str**|  | [optional] 
 **name__nie** | **str**|  | [optional] 
 **name__empty** | **str**|  | [optional] 
 **slug__n** | **str**|  | [optional] 
 **slug__ic** | **str**|  | [optional] 
 **slug__nic** | **str**|  | [optional] 
 **slug__iew** | **str**|  | [optional] 
 **slug__niew** | **str**|  | [optional] 
 **slug__isw** | **str**|  | [optional] 
 **slug__nisw** | **str**|  | [optional] 
 **slug__ie** | **str**|  | [optional] 
 **slug__nie** | **str**|  | [optional] 
 **slug__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**CircuitsCircuitTypesList200Response**](CircuitsCircuitTypesList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_partial_update**
> CircuitType circuits_circuit_types_partial_update(id, circuit_type)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_type import CircuitType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit type.
    circuit_type = openapi_client.CircuitType() # CircuitType | 

    try:
        api_response = api_instance.circuits_circuit_types_partial_update(id, circuit_type)
        print("The response of CircuitsApi->circuits_circuit_types_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit type. | 
 **circuit_type** | [**CircuitType**](CircuitType.md)|  | 

### Return type

[**CircuitType**](CircuitType.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_read**
> CircuitType circuits_circuit_types_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_type import CircuitType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit type.

    try:
        api_response = api_instance.circuits_circuit_types_read(id)
        print("The response of CircuitsApi->circuits_circuit_types_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit type. | 

### Return type

[**CircuitType**](CircuitType.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuit_types_update**
> CircuitType circuits_circuit_types_update(id, circuit_type)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit_type import CircuitType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit type.
    circuit_type = openapi_client.CircuitType() # CircuitType | 

    try:
        api_response = api_instance.circuits_circuit_types_update(id, circuit_type)
        print("The response of CircuitsApi->circuits_circuit_types_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuit_types_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit type. | 
 **circuit_type** | [**CircuitType**](CircuitType.md)|  | 

### Return type

[**CircuitType**](CircuitType.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_bulk_delete**
> circuits_circuits_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)

    try:
        api_instance.circuits_circuits_bulk_delete()
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_bulk_partial_update**
> Circuit circuits_circuits_bulk_partial_update(writable_circuit)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit import Circuit
from openapi_client.models.writable_circuit import WritableCircuit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_circuit = openapi_client.WritableCircuit() # WritableCircuit | 

    try:
        api_response = api_instance.circuits_circuits_bulk_partial_update(writable_circuit)
        print("The response of CircuitsApi->circuits_circuits_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_circuit** | [**WritableCircuit**](WritableCircuit.md)|  | 

### Return type

[**Circuit**](Circuit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_bulk_update**
> Circuit circuits_circuits_bulk_update(writable_circuit)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit import Circuit
from openapi_client.models.writable_circuit import WritableCircuit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_circuit = openapi_client.WritableCircuit() # WritableCircuit | 

    try:
        api_response = api_instance.circuits_circuits_bulk_update(writable_circuit)
        print("The response of CircuitsApi->circuits_circuits_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_circuit** | [**WritableCircuit**](WritableCircuit.md)|  | 

### Return type

[**Circuit**](Circuit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_create**
> Circuit circuits_circuits_create(writable_circuit)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit import Circuit
from openapi_client.models.writable_circuit import WritableCircuit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_circuit = openapi_client.WritableCircuit() # WritableCircuit | 

    try:
        api_response = api_instance.circuits_circuits_create(writable_circuit)
        print("The response of CircuitsApi->circuits_circuits_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_circuit** | [**WritableCircuit**](WritableCircuit.md)|  | 

### Return type

[**Circuit**](Circuit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_delete**
> circuits_circuits_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit.

    try:
        api_instance.circuits_circuits_delete(id)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_list**
> CircuitsCircuitsList200Response circuits_circuits_list(id=id, cid=cid, description=description, install_date=install_date, termination_date=termination_date, commit_rate=commit_rate, created=created, last_updated=last_updated, q=q, tag=tag, tenant_group_id=tenant_group_id, tenant_group=tenant_group, tenant_id=tenant_id, tenant=tenant, contact=contact, contact_role=contact_role, contact_group=contact_group, provider_id=provider_id, provider=provider, provider_network_id=provider_network_id, type_id=type_id, type=type, status=status, region_id=region_id, region=region, site_group_id=site_group_id, site_group=site_group, site_id=site_id, site=site, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, cid__n=cid__n, cid__ic=cid__ic, cid__nic=cid__nic, cid__iew=cid__iew, cid__niew=cid__niew, cid__isw=cid__isw, cid__nisw=cid__nisw, cid__ie=cid__ie, cid__nie=cid__nie, cid__empty=cid__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, install_date__n=install_date__n, install_date__lte=install_date__lte, install_date__lt=install_date__lt, install_date__gte=install_date__gte, install_date__gt=install_date__gt, termination_date__n=termination_date__n, termination_date__lte=termination_date__lte, termination_date__lt=termination_date__lt, termination_date__gte=termination_date__gte, termination_date__gt=termination_date__gt, commit_rate__n=commit_rate__n, commit_rate__lte=commit_rate__lte, commit_rate__lt=commit_rate__lt, commit_rate__gte=commit_rate__gte, commit_rate__gt=commit_rate__gt, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, tenant_group_id__n=tenant_group_id__n, tenant_group__n=tenant_group__n, tenant_id__n=tenant_id__n, tenant__n=tenant__n, contact__n=contact__n, contact_role__n=contact_role__n, contact_group__n=contact_group__n, provider_id__n=provider_id__n, provider__n=provider__n, provider_network_id__n=provider_network_id__n, type_id__n=type_id__n, type__n=type__n, status__n=status__n, region_id__n=region_id__n, region__n=region__n, site_group_id__n=site_group_id__n, site_group__n=site_group__n, site_id__n=site_id__n, site__n=site__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuits_circuits_list200_response import CircuitsCircuitsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 'id_example' # str |  (optional)
    cid = 'cid_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    install_date = 'install_date_example' # str |  (optional)
    termination_date = 'termination_date_example' # str |  (optional)
    commit_rate = 'commit_rate_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    tenant_group_id = 'tenant_group_id_example' # str |  (optional)
    tenant_group = 'tenant_group_example' # str |  (optional)
    tenant_id = 'tenant_id_example' # str |  (optional)
    tenant = 'tenant_example' # str |  (optional)
    contact = 'contact_example' # str |  (optional)
    contact_role = 'contact_role_example' # str |  (optional)
    contact_group = 'contact_group_example' # str |  (optional)
    provider_id = 'provider_id_example' # str |  (optional)
    provider = 'provider_example' # str |  (optional)
    provider_network_id = 'provider_network_id_example' # str |  (optional)
    type_id = 'type_id_example' # str |  (optional)
    type = 'type_example' # str |  (optional)
    status = 'status_example' # str |  (optional)
    region_id = 'region_id_example' # str |  (optional)
    region = 'region_example' # str |  (optional)
    site_group_id = 'site_group_id_example' # str |  (optional)
    site_group = 'site_group_example' # str |  (optional)
    site_id = 'site_id_example' # str |  (optional)
    site = 'site_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    cid__n = 'cid__n_example' # str |  (optional)
    cid__ic = 'cid__ic_example' # str |  (optional)
    cid__nic = 'cid__nic_example' # str |  (optional)
    cid__iew = 'cid__iew_example' # str |  (optional)
    cid__niew = 'cid__niew_example' # str |  (optional)
    cid__isw = 'cid__isw_example' # str |  (optional)
    cid__nisw = 'cid__nisw_example' # str |  (optional)
    cid__ie = 'cid__ie_example' # str |  (optional)
    cid__nie = 'cid__nie_example' # str |  (optional)
    cid__empty = 'cid__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    install_date__n = 'install_date__n_example' # str |  (optional)
    install_date__lte = 'install_date__lte_example' # str |  (optional)
    install_date__lt = 'install_date__lt_example' # str |  (optional)
    install_date__gte = 'install_date__gte_example' # str |  (optional)
    install_date__gt = 'install_date__gt_example' # str |  (optional)
    termination_date__n = 'termination_date__n_example' # str |  (optional)
    termination_date__lte = 'termination_date__lte_example' # str |  (optional)
    termination_date__lt = 'termination_date__lt_example' # str |  (optional)
    termination_date__gte = 'termination_date__gte_example' # str |  (optional)
    termination_date__gt = 'termination_date__gt_example' # str |  (optional)
    commit_rate__n = 'commit_rate__n_example' # str |  (optional)
    commit_rate__lte = 'commit_rate__lte_example' # str |  (optional)
    commit_rate__lt = 'commit_rate__lt_example' # str |  (optional)
    commit_rate__gte = 'commit_rate__gte_example' # str |  (optional)
    commit_rate__gt = 'commit_rate__gt_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    tenant_group_id__n = 'tenant_group_id__n_example' # str |  (optional)
    tenant_group__n = 'tenant_group__n_example' # str |  (optional)
    tenant_id__n = 'tenant_id__n_example' # str |  (optional)
    tenant__n = 'tenant__n_example' # str |  (optional)
    contact__n = 'contact__n_example' # str |  (optional)
    contact_role__n = 'contact_role__n_example' # str |  (optional)
    contact_group__n = 'contact_group__n_example' # str |  (optional)
    provider_id__n = 'provider_id__n_example' # str |  (optional)
    provider__n = 'provider__n_example' # str |  (optional)
    provider_network_id__n = 'provider_network_id__n_example' # str |  (optional)
    type_id__n = 'type_id__n_example' # str |  (optional)
    type__n = 'type__n_example' # str |  (optional)
    status__n = 'status__n_example' # str |  (optional)
    region_id__n = 'region_id__n_example' # str |  (optional)
    region__n = 'region__n_example' # str |  (optional)
    site_group_id__n = 'site_group_id__n_example' # str |  (optional)
    site_group__n = 'site_group__n_example' # str |  (optional)
    site_id__n = 'site_id__n_example' # str |  (optional)
    site__n = 'site__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.circuits_circuits_list(id=id, cid=cid, description=description, install_date=install_date, termination_date=termination_date, commit_rate=commit_rate, created=created, last_updated=last_updated, q=q, tag=tag, tenant_group_id=tenant_group_id, tenant_group=tenant_group, tenant_id=tenant_id, tenant=tenant, contact=contact, contact_role=contact_role, contact_group=contact_group, provider_id=provider_id, provider=provider, provider_network_id=provider_network_id, type_id=type_id, type=type, status=status, region_id=region_id, region=region, site_group_id=site_group_id, site_group=site_group, site_id=site_id, site=site, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, cid__n=cid__n, cid__ic=cid__ic, cid__nic=cid__nic, cid__iew=cid__iew, cid__niew=cid__niew, cid__isw=cid__isw, cid__nisw=cid__nisw, cid__ie=cid__ie, cid__nie=cid__nie, cid__empty=cid__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, install_date__n=install_date__n, install_date__lte=install_date__lte, install_date__lt=install_date__lt, install_date__gte=install_date__gte, install_date__gt=install_date__gt, termination_date__n=termination_date__n, termination_date__lte=termination_date__lte, termination_date__lt=termination_date__lt, termination_date__gte=termination_date__gte, termination_date__gt=termination_date__gt, commit_rate__n=commit_rate__n, commit_rate__lte=commit_rate__lte, commit_rate__lt=commit_rate__lt, commit_rate__gte=commit_rate__gte, commit_rate__gt=commit_rate__gt, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, tenant_group_id__n=tenant_group_id__n, tenant_group__n=tenant_group__n, tenant_id__n=tenant_id__n, tenant__n=tenant__n, contact__n=contact__n, contact_role__n=contact_role__n, contact_group__n=contact_group__n, provider_id__n=provider_id__n, provider__n=provider__n, provider_network_id__n=provider_network_id__n, type_id__n=type_id__n, type__n=type__n, status__n=status__n, region_id__n=region_id__n, region__n=region__n, site_group_id__n=site_group_id__n, site_group__n=site_group__n, site_id__n=site_id__n, site__n=site__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of CircuitsApi->circuits_circuits_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **cid** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **install_date** | **str**|  | [optional] 
 **termination_date** | **str**|  | [optional] 
 **commit_rate** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **tenant_group_id** | **str**|  | [optional] 
 **tenant_group** | **str**|  | [optional] 
 **tenant_id** | **str**|  | [optional] 
 **tenant** | **str**|  | [optional] 
 **contact** | **str**|  | [optional] 
 **contact_role** | **str**|  | [optional] 
 **contact_group** | **str**|  | [optional] 
 **provider_id** | **str**|  | [optional] 
 **provider** | **str**|  | [optional] 
 **provider_network_id** | **str**|  | [optional] 
 **type_id** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 
 **region_id** | **str**|  | [optional] 
 **region** | **str**|  | [optional] 
 **site_group_id** | **str**|  | [optional] 
 **site_group** | **str**|  | [optional] 
 **site_id** | **str**|  | [optional] 
 **site** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **cid__n** | **str**|  | [optional] 
 **cid__ic** | **str**|  | [optional] 
 **cid__nic** | **str**|  | [optional] 
 **cid__iew** | **str**|  | [optional] 
 **cid__niew** | **str**|  | [optional] 
 **cid__isw** | **str**|  | [optional] 
 **cid__nisw** | **str**|  | [optional] 
 **cid__ie** | **str**|  | [optional] 
 **cid__nie** | **str**|  | [optional] 
 **cid__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **install_date__n** | **str**|  | [optional] 
 **install_date__lte** | **str**|  | [optional] 
 **install_date__lt** | **str**|  | [optional] 
 **install_date__gte** | **str**|  | [optional] 
 **install_date__gt** | **str**|  | [optional] 
 **termination_date__n** | **str**|  | [optional] 
 **termination_date__lte** | **str**|  | [optional] 
 **termination_date__lt** | **str**|  | [optional] 
 **termination_date__gte** | **str**|  | [optional] 
 **termination_date__gt** | **str**|  | [optional] 
 **commit_rate__n** | **str**|  | [optional] 
 **commit_rate__lte** | **str**|  | [optional] 
 **commit_rate__lt** | **str**|  | [optional] 
 **commit_rate__gte** | **str**|  | [optional] 
 **commit_rate__gt** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **tenant_group_id__n** | **str**|  | [optional] 
 **tenant_group__n** | **str**|  | [optional] 
 **tenant_id__n** | **str**|  | [optional] 
 **tenant__n** | **str**|  | [optional] 
 **contact__n** | **str**|  | [optional] 
 **contact_role__n** | **str**|  | [optional] 
 **contact_group__n** | **str**|  | [optional] 
 **provider_id__n** | **str**|  | [optional] 
 **provider__n** | **str**|  | [optional] 
 **provider_network_id__n** | **str**|  | [optional] 
 **type_id__n** | **str**|  | [optional] 
 **type__n** | **str**|  | [optional] 
 **status__n** | **str**|  | [optional] 
 **region_id__n** | **str**|  | [optional] 
 **region__n** | **str**|  | [optional] 
 **site_group_id__n** | **str**|  | [optional] 
 **site_group__n** | **str**|  | [optional] 
 **site_id__n** | **str**|  | [optional] 
 **site__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**CircuitsCircuitsList200Response**](CircuitsCircuitsList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_partial_update**
> Circuit circuits_circuits_partial_update(id, writable_circuit)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit import Circuit
from openapi_client.models.writable_circuit import WritableCircuit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit.
    writable_circuit = openapi_client.WritableCircuit() # WritableCircuit | 

    try:
        api_response = api_instance.circuits_circuits_partial_update(id, writable_circuit)
        print("The response of CircuitsApi->circuits_circuits_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit. | 
 **writable_circuit** | [**WritableCircuit**](WritableCircuit.md)|  | 

### Return type

[**Circuit**](Circuit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_read**
> Circuit circuits_circuits_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit import Circuit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit.

    try:
        api_response = api_instance.circuits_circuits_read(id)
        print("The response of CircuitsApi->circuits_circuits_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit. | 

### Return type

[**Circuit**](Circuit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_circuits_update**
> Circuit circuits_circuits_update(id, writable_circuit)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuit import Circuit
from openapi_client.models.writable_circuit import WritableCircuit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this circuit.
    writable_circuit = openapi_client.WritableCircuit() # WritableCircuit | 

    try:
        api_response = api_instance.circuits_circuits_update(id, writable_circuit)
        print("The response of CircuitsApi->circuits_circuits_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_circuits_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this circuit. | 
 **writable_circuit** | [**WritableCircuit**](WritableCircuit.md)|  | 

### Return type

[**Circuit**](Circuit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_bulk_delete**
> circuits_provider_networks_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)

    try:
        api_instance.circuits_provider_networks_bulk_delete()
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_bulk_partial_update**
> ProviderNetwork circuits_provider_networks_bulk_partial_update(writable_provider_network)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider_network import ProviderNetwork
from openapi_client.models.writable_provider_network import WritableProviderNetwork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_provider_network = openapi_client.WritableProviderNetwork() # WritableProviderNetwork | 

    try:
        api_response = api_instance.circuits_provider_networks_bulk_partial_update(writable_provider_network)
        print("The response of CircuitsApi->circuits_provider_networks_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_provider_network** | [**WritableProviderNetwork**](WritableProviderNetwork.md)|  | 

### Return type

[**ProviderNetwork**](ProviderNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_bulk_update**
> ProviderNetwork circuits_provider_networks_bulk_update(writable_provider_network)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider_network import ProviderNetwork
from openapi_client.models.writable_provider_network import WritableProviderNetwork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_provider_network = openapi_client.WritableProviderNetwork() # WritableProviderNetwork | 

    try:
        api_response = api_instance.circuits_provider_networks_bulk_update(writable_provider_network)
        print("The response of CircuitsApi->circuits_provider_networks_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_provider_network** | [**WritableProviderNetwork**](WritableProviderNetwork.md)|  | 

### Return type

[**ProviderNetwork**](ProviderNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_create**
> ProviderNetwork circuits_provider_networks_create(writable_provider_network)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider_network import ProviderNetwork
from openapi_client.models.writable_provider_network import WritableProviderNetwork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_provider_network = openapi_client.WritableProviderNetwork() # WritableProviderNetwork | 

    try:
        api_response = api_instance.circuits_provider_networks_create(writable_provider_network)
        print("The response of CircuitsApi->circuits_provider_networks_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_provider_network** | [**WritableProviderNetwork**](WritableProviderNetwork.md)|  | 

### Return type

[**ProviderNetwork**](ProviderNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_delete**
> circuits_provider_networks_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider network.

    try:
        api_instance.circuits_provider_networks_delete(id)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider network. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_list**
> CircuitsProviderNetworksList200Response circuits_provider_networks_list(id=id, name=name, service_id=service_id, description=description, created=created, last_updated=last_updated, q=q, tag=tag, provider_id=provider_id, provider=provider, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, service_id__n=service_id__n, service_id__ic=service_id__ic, service_id__nic=service_id__nic, service_id__iew=service_id__iew, service_id__niew=service_id__niew, service_id__isw=service_id__isw, service_id__nisw=service_id__nisw, service_id__ie=service_id__ie, service_id__nie=service_id__nie, service_id__empty=service_id__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, provider_id__n=provider_id__n, provider__n=provider__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuits_provider_networks_list200_response import CircuitsProviderNetworksList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 'id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    service_id = 'service_id_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    provider_id = 'provider_id_example' # str |  (optional)
    provider = 'provider_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    name__n = 'name__n_example' # str |  (optional)
    name__ic = 'name__ic_example' # str |  (optional)
    name__nic = 'name__nic_example' # str |  (optional)
    name__iew = 'name__iew_example' # str |  (optional)
    name__niew = 'name__niew_example' # str |  (optional)
    name__isw = 'name__isw_example' # str |  (optional)
    name__nisw = 'name__nisw_example' # str |  (optional)
    name__ie = 'name__ie_example' # str |  (optional)
    name__nie = 'name__nie_example' # str |  (optional)
    name__empty = 'name__empty_example' # str |  (optional)
    service_id__n = 'service_id__n_example' # str |  (optional)
    service_id__ic = 'service_id__ic_example' # str |  (optional)
    service_id__nic = 'service_id__nic_example' # str |  (optional)
    service_id__iew = 'service_id__iew_example' # str |  (optional)
    service_id__niew = 'service_id__niew_example' # str |  (optional)
    service_id__isw = 'service_id__isw_example' # str |  (optional)
    service_id__nisw = 'service_id__nisw_example' # str |  (optional)
    service_id__ie = 'service_id__ie_example' # str |  (optional)
    service_id__nie = 'service_id__nie_example' # str |  (optional)
    service_id__empty = 'service_id__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    provider_id__n = 'provider_id__n_example' # str |  (optional)
    provider__n = 'provider__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.circuits_provider_networks_list(id=id, name=name, service_id=service_id, description=description, created=created, last_updated=last_updated, q=q, tag=tag, provider_id=provider_id, provider=provider, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, service_id__n=service_id__n, service_id__ic=service_id__ic, service_id__nic=service_id__nic, service_id__iew=service_id__iew, service_id__niew=service_id__niew, service_id__isw=service_id__isw, service_id__nisw=service_id__nisw, service_id__ie=service_id__ie, service_id__nie=service_id__nie, service_id__empty=service_id__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, provider_id__n=provider_id__n, provider__n=provider__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of CircuitsApi->circuits_provider_networks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **service_id** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **provider_id** | **str**|  | [optional] 
 **provider** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **name__n** | **str**|  | [optional] 
 **name__ic** | **str**|  | [optional] 
 **name__nic** | **str**|  | [optional] 
 **name__iew** | **str**|  | [optional] 
 **name__niew** | **str**|  | [optional] 
 **name__isw** | **str**|  | [optional] 
 **name__nisw** | **str**|  | [optional] 
 **name__ie** | **str**|  | [optional] 
 **name__nie** | **str**|  | [optional] 
 **name__empty** | **str**|  | [optional] 
 **service_id__n** | **str**|  | [optional] 
 **service_id__ic** | **str**|  | [optional] 
 **service_id__nic** | **str**|  | [optional] 
 **service_id__iew** | **str**|  | [optional] 
 **service_id__niew** | **str**|  | [optional] 
 **service_id__isw** | **str**|  | [optional] 
 **service_id__nisw** | **str**|  | [optional] 
 **service_id__ie** | **str**|  | [optional] 
 **service_id__nie** | **str**|  | [optional] 
 **service_id__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **provider_id__n** | **str**|  | [optional] 
 **provider__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**CircuitsProviderNetworksList200Response**](CircuitsProviderNetworksList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_partial_update**
> ProviderNetwork circuits_provider_networks_partial_update(id, writable_provider_network)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider_network import ProviderNetwork
from openapi_client.models.writable_provider_network import WritableProviderNetwork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider network.
    writable_provider_network = openapi_client.WritableProviderNetwork() # WritableProviderNetwork | 

    try:
        api_response = api_instance.circuits_provider_networks_partial_update(id, writable_provider_network)
        print("The response of CircuitsApi->circuits_provider_networks_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider network. | 
 **writable_provider_network** | [**WritableProviderNetwork**](WritableProviderNetwork.md)|  | 

### Return type

[**ProviderNetwork**](ProviderNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_read**
> ProviderNetwork circuits_provider_networks_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider_network import ProviderNetwork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider network.

    try:
        api_response = api_instance.circuits_provider_networks_read(id)
        print("The response of CircuitsApi->circuits_provider_networks_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider network. | 

### Return type

[**ProviderNetwork**](ProviderNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_provider_networks_update**
> ProviderNetwork circuits_provider_networks_update(id, writable_provider_network)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider_network import ProviderNetwork
from openapi_client.models.writable_provider_network import WritableProviderNetwork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider network.
    writable_provider_network = openapi_client.WritableProviderNetwork() # WritableProviderNetwork | 

    try:
        api_response = api_instance.circuits_provider_networks_update(id, writable_provider_network)
        print("The response of CircuitsApi->circuits_provider_networks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_provider_networks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider network. | 
 **writable_provider_network** | [**WritableProviderNetwork**](WritableProviderNetwork.md)|  | 

### Return type

[**ProviderNetwork**](ProviderNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_bulk_delete**
> circuits_providers_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)

    try:
        api_instance.circuits_providers_bulk_delete()
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_bulk_partial_update**
> Provider circuits_providers_bulk_partial_update(writable_provider)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.writable_provider import WritableProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_provider = openapi_client.WritableProvider() # WritableProvider | 

    try:
        api_response = api_instance.circuits_providers_bulk_partial_update(writable_provider)
        print("The response of CircuitsApi->circuits_providers_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_provider** | [**WritableProvider**](WritableProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_bulk_update**
> Provider circuits_providers_bulk_update(writable_provider)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.writable_provider import WritableProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_provider = openapi_client.WritableProvider() # WritableProvider | 

    try:
        api_response = api_instance.circuits_providers_bulk_update(writable_provider)
        print("The response of CircuitsApi->circuits_providers_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_provider** | [**WritableProvider**](WritableProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_create**
> Provider circuits_providers_create(writable_provider)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.writable_provider import WritableProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    writable_provider = openapi_client.WritableProvider() # WritableProvider | 

    try:
        api_response = api_instance.circuits_providers_create(writable_provider)
        print("The response of CircuitsApi->circuits_providers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_provider** | [**WritableProvider**](WritableProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_delete**
> circuits_providers_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider.

    try:
        api_instance.circuits_providers_delete(id)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_list**
> CircuitsProvidersList200Response circuits_providers_list(id=id, name=name, slug=slug, account=account, created=created, last_updated=last_updated, q=q, tag=tag, contact=contact, contact_role=contact_role, contact_group=contact_group, region_id=region_id, region=region, site_group_id=site_group_id, site_group=site_group, site_id=site_id, site=site, asn_id=asn_id, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, slug__n=slug__n, slug__ic=slug__ic, slug__nic=slug__nic, slug__iew=slug__iew, slug__niew=slug__niew, slug__isw=slug__isw, slug__nisw=slug__nisw, slug__ie=slug__ie, slug__nie=slug__nie, slug__empty=slug__empty, account__n=account__n, account__ic=account__ic, account__nic=account__nic, account__iew=account__iew, account__niew=account__niew, account__isw=account__isw, account__nisw=account__nisw, account__ie=account__ie, account__nie=account__nie, account__empty=account__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, contact__n=contact__n, contact_role__n=contact_role__n, contact_group__n=contact_group__n, region_id__n=region_id__n, region__n=region__n, site_group_id__n=site_group_id__n, site_group__n=site_group__n, site_id__n=site_id__n, site__n=site__n, asn_id__n=asn_id__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.circuits_providers_list200_response import CircuitsProvidersList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 'id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    slug = 'slug_example' # str |  (optional)
    account = 'account_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    contact = 'contact_example' # str |  (optional)
    contact_role = 'contact_role_example' # str |  (optional)
    contact_group = 'contact_group_example' # str |  (optional)
    region_id = 'region_id_example' # str |  (optional)
    region = 'region_example' # str |  (optional)
    site_group_id = 'site_group_id_example' # str |  (optional)
    site_group = 'site_group_example' # str |  (optional)
    site_id = 'site_id_example' # str |  (optional)
    site = 'site_example' # str |  (optional)
    asn_id = 'asn_id_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    name__n = 'name__n_example' # str |  (optional)
    name__ic = 'name__ic_example' # str |  (optional)
    name__nic = 'name__nic_example' # str |  (optional)
    name__iew = 'name__iew_example' # str |  (optional)
    name__niew = 'name__niew_example' # str |  (optional)
    name__isw = 'name__isw_example' # str |  (optional)
    name__nisw = 'name__nisw_example' # str |  (optional)
    name__ie = 'name__ie_example' # str |  (optional)
    name__nie = 'name__nie_example' # str |  (optional)
    name__empty = 'name__empty_example' # str |  (optional)
    slug__n = 'slug__n_example' # str |  (optional)
    slug__ic = 'slug__ic_example' # str |  (optional)
    slug__nic = 'slug__nic_example' # str |  (optional)
    slug__iew = 'slug__iew_example' # str |  (optional)
    slug__niew = 'slug__niew_example' # str |  (optional)
    slug__isw = 'slug__isw_example' # str |  (optional)
    slug__nisw = 'slug__nisw_example' # str |  (optional)
    slug__ie = 'slug__ie_example' # str |  (optional)
    slug__nie = 'slug__nie_example' # str |  (optional)
    slug__empty = 'slug__empty_example' # str |  (optional)
    account__n = 'account__n_example' # str |  (optional)
    account__ic = 'account__ic_example' # str |  (optional)
    account__nic = 'account__nic_example' # str |  (optional)
    account__iew = 'account__iew_example' # str |  (optional)
    account__niew = 'account__niew_example' # str |  (optional)
    account__isw = 'account__isw_example' # str |  (optional)
    account__nisw = 'account__nisw_example' # str |  (optional)
    account__ie = 'account__ie_example' # str |  (optional)
    account__nie = 'account__nie_example' # str |  (optional)
    account__empty = 'account__empty_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    contact__n = 'contact__n_example' # str |  (optional)
    contact_role__n = 'contact_role__n_example' # str |  (optional)
    contact_group__n = 'contact_group__n_example' # str |  (optional)
    region_id__n = 'region_id__n_example' # str |  (optional)
    region__n = 'region__n_example' # str |  (optional)
    site_group_id__n = 'site_group_id__n_example' # str |  (optional)
    site_group__n = 'site_group__n_example' # str |  (optional)
    site_id__n = 'site_id__n_example' # str |  (optional)
    site__n = 'site__n_example' # str |  (optional)
    asn_id__n = 'asn_id__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.circuits_providers_list(id=id, name=name, slug=slug, account=account, created=created, last_updated=last_updated, q=q, tag=tag, contact=contact, contact_role=contact_role, contact_group=contact_group, region_id=region_id, region=region, site_group_id=site_group_id, site_group=site_group, site_id=site_id, site=site, asn_id=asn_id, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, slug__n=slug__n, slug__ic=slug__ic, slug__nic=slug__nic, slug__iew=slug__iew, slug__niew=slug__niew, slug__isw=slug__isw, slug__nisw=slug__nisw, slug__ie=slug__ie, slug__nie=slug__nie, slug__empty=slug__empty, account__n=account__n, account__ic=account__ic, account__nic=account__nic, account__iew=account__iew, account__niew=account__niew, account__isw=account__isw, account__nisw=account__nisw, account__ie=account__ie, account__nie=account__nie, account__empty=account__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, contact__n=contact__n, contact_role__n=contact_role__n, contact_group__n=contact_group__n, region_id__n=region_id__n, region__n=region__n, site_group_id__n=site_group_id__n, site_group__n=site_group__n, site_id__n=site_id__n, site__n=site__n, asn_id__n=asn_id__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of CircuitsApi->circuits_providers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **slug** | **str**|  | [optional] 
 **account** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **contact** | **str**|  | [optional] 
 **contact_role** | **str**|  | [optional] 
 **contact_group** | **str**|  | [optional] 
 **region_id** | **str**|  | [optional] 
 **region** | **str**|  | [optional] 
 **site_group_id** | **str**|  | [optional] 
 **site_group** | **str**|  | [optional] 
 **site_id** | **str**|  | [optional] 
 **site** | **str**|  | [optional] 
 **asn_id** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **name__n** | **str**|  | [optional] 
 **name__ic** | **str**|  | [optional] 
 **name__nic** | **str**|  | [optional] 
 **name__iew** | **str**|  | [optional] 
 **name__niew** | **str**|  | [optional] 
 **name__isw** | **str**|  | [optional] 
 **name__nisw** | **str**|  | [optional] 
 **name__ie** | **str**|  | [optional] 
 **name__nie** | **str**|  | [optional] 
 **name__empty** | **str**|  | [optional] 
 **slug__n** | **str**|  | [optional] 
 **slug__ic** | **str**|  | [optional] 
 **slug__nic** | **str**|  | [optional] 
 **slug__iew** | **str**|  | [optional] 
 **slug__niew** | **str**|  | [optional] 
 **slug__isw** | **str**|  | [optional] 
 **slug__nisw** | **str**|  | [optional] 
 **slug__ie** | **str**|  | [optional] 
 **slug__nie** | **str**|  | [optional] 
 **slug__empty** | **str**|  | [optional] 
 **account__n** | **str**|  | [optional] 
 **account__ic** | **str**|  | [optional] 
 **account__nic** | **str**|  | [optional] 
 **account__iew** | **str**|  | [optional] 
 **account__niew** | **str**|  | [optional] 
 **account__isw** | **str**|  | [optional] 
 **account__nisw** | **str**|  | [optional] 
 **account__ie** | **str**|  | [optional] 
 **account__nie** | **str**|  | [optional] 
 **account__empty** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **contact__n** | **str**|  | [optional] 
 **contact_role__n** | **str**|  | [optional] 
 **contact_group__n** | **str**|  | [optional] 
 **region_id__n** | **str**|  | [optional] 
 **region__n** | **str**|  | [optional] 
 **site_group_id__n** | **str**|  | [optional] 
 **site_group__n** | **str**|  | [optional] 
 **site_id__n** | **str**|  | [optional] 
 **site__n** | **str**|  | [optional] 
 **asn_id__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**CircuitsProvidersList200Response**](CircuitsProvidersList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_partial_update**
> Provider circuits_providers_partial_update(id, writable_provider)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.writable_provider import WritableProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider.
    writable_provider = openapi_client.WritableProvider() # WritableProvider | 

    try:
        api_response = api_instance.circuits_providers_partial_update(id, writable_provider)
        print("The response of CircuitsApi->circuits_providers_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider. | 
 **writable_provider** | [**WritableProvider**](WritableProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_read**
> Provider circuits_providers_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider.

    try:
        api_response = api_instance.circuits_providers_read(id)
        print("The response of CircuitsApi->circuits_providers_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider. | 

### Return type

[**Provider**](Provider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **circuits_providers_update**
> Provider circuits_providers_update(id, writable_provider)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.writable_provider import WritableProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CircuitsApi(api_client)
    id = 56 # int | A unique integer value identifying this provider.
    writable_provider = openapi_client.WritableProvider() # WritableProvider | 

    try:
        api_response = api_instance.circuits_providers_update(id, writable_provider)
        print("The response of CircuitsApi->circuits_providers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CircuitsApi->circuits_providers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this provider. | 
 **writable_provider** | [**WritableProvider**](WritableProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

