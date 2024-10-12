# openapi_client.SecurityApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_client_security_events_2**](SecurityApi.md#get_network_appliance_client_security_events_2) | **GET** /networks/{networkId}/appliance/clients/{clientId}/security/events | List the security events for a client
[**get_network_appliance_security_events_1**](SecurityApi.md#get_network_appliance_security_events_1) | **GET** /networks/{networkId}/appliance/security/events | List the security events for a network
[**get_network_appliance_security_intrusion_1**](SecurityApi.md#get_network_appliance_security_intrusion_1) | **GET** /networks/{networkId}/appliance/security/intrusion | Returns all supported intrusion settings for an MX network
[**get_network_appliance_security_malware_1**](SecurityApi.md#get_network_appliance_security_malware_1) | **GET** /networks/{networkId}/appliance/security/malware | Returns all supported malware settings for an MX network
[**get_organization_appliance_security_events_1**](SecurityApi.md#get_organization_appliance_security_events_1) | **GET** /organizations/{organizationId}/appliance/security/events | List the security events for an organization
[**get_organization_appliance_security_intrusion_1**](SecurityApi.md#get_organization_appliance_security_intrusion_1) | **GET** /organizations/{organizationId}/appliance/security/intrusion | Returns all supported intrusion settings for an organization
[**update_network_appliance_security_intrusion_1**](SecurityApi.md#update_network_appliance_security_intrusion_1) | **PUT** /networks/{networkId}/appliance/security/intrusion | Set the supported intrusion settings for an MX network
[**update_network_appliance_security_malware_1**](SecurityApi.md#update_network_appliance_security_malware_1) | **PUT** /networks/{networkId}/appliance/security/malware | Set the supported malware settings for an MX network
[**update_organization_appliance_security_intrusion_1**](SecurityApi.md#update_organization_appliance_security_intrusion_1) | **PUT** /organizations/{organizationId}/appliance/security/intrusion | Sets supported intrusion settings for an organization


# **get_network_appliance_client_security_events_2**
> List[object] get_network_appliance_client_security_events_2(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for a client

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for a client
        api_response = api_instance.get_network_appliance_client_security_events_2(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of SecurityApi->get_network_appliance_client_security_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->get_network_appliance_client_security_events_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_security_events_1**
> List[object] get_network_appliance_security_events_1(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for a network

List the security events for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for a network
        api_response = api_instance.get_network_appliance_security_events_1(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of SecurityApi->get_network_appliance_security_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->get_network_appliance_security_events_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_security_intrusion_1**
> object get_network_appliance_security_intrusion_1(network_id)

Returns all supported intrusion settings for an MX network

Returns all supported intrusion settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an MX network
        api_response = api_instance.get_network_appliance_security_intrusion_1(network_id)
        print("The response of SecurityApi->get_network_appliance_security_intrusion_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->get_network_appliance_security_intrusion_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_security_malware_1**
> object get_network_appliance_security_malware_1(network_id)

Returns all supported malware settings for an MX network

Returns all supported malware settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns all supported malware settings for an MX network
        api_response = api_instance.get_network_appliance_security_malware_1(network_id)
        print("The response of SecurityApi->get_network_appliance_security_malware_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->get_network_appliance_security_malware_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_appliance_security_events_1**
> List[object] get_organization_appliance_security_events_1(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for an organization

List the security events for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for an organization
        api_response = api_instance.get_organization_appliance_security_events_1(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of SecurityApi->get_organization_appliance_security_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->get_organization_appliance_security_events_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_appliance_security_intrusion_1**
> object get_organization_appliance_security_intrusion_1(organization_id)

Returns all supported intrusion settings for an organization

Returns all supported intrusion settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an organization
        api_response = api_instance.get_organization_appliance_security_intrusion_1(organization_id)
        print("The response of SecurityApi->get_organization_appliance_security_intrusion_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->get_organization_appliance_security_intrusion_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_appliance_security_intrusion_1**
> object update_network_appliance_security_intrusion_1(network_id, update_network_appliance_security_intrusion_request=update_network_appliance_security_intrusion_request)

Set the supported intrusion settings for an MX network

Set the supported intrusion settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_security_intrusion_request import UpdateNetworkApplianceSecurityIntrusionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_security_intrusion_request = openapi_client.UpdateNetworkApplianceSecurityIntrusionRequest() # UpdateNetworkApplianceSecurityIntrusionRequest |  (optional)

    try:
        # Set the supported intrusion settings for an MX network
        api_response = api_instance.update_network_appliance_security_intrusion_1(network_id, update_network_appliance_security_intrusion_request=update_network_appliance_security_intrusion_request)
        print("The response of SecurityApi->update_network_appliance_security_intrusion_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->update_network_appliance_security_intrusion_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_security_intrusion_request** | [**UpdateNetworkApplianceSecurityIntrusionRequest**](UpdateNetworkApplianceSecurityIntrusionRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_appliance_security_malware_1**
> object update_network_appliance_security_malware_1(network_id, update_network_appliance_security_malware_request)

Set the supported malware settings for an MX network

Set the supported malware settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_security_malware_request import UpdateNetworkApplianceSecurityMalwareRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_security_malware_request = openapi_client.UpdateNetworkApplianceSecurityMalwareRequest() # UpdateNetworkApplianceSecurityMalwareRequest | 

    try:
        # Set the supported malware settings for an MX network
        api_response = api_instance.update_network_appliance_security_malware_1(network_id, update_network_appliance_security_malware_request)
        print("The response of SecurityApi->update_network_appliance_security_malware_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->update_network_appliance_security_malware_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_security_malware_request** | [**UpdateNetworkApplianceSecurityMalwareRequest**](UpdateNetworkApplianceSecurityMalwareRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_appliance_security_intrusion_1**
> object update_organization_appliance_security_intrusion_1(organization_id, update_organization_appliance_security_intrusion_request)

Sets supported intrusion settings for an organization

Sets supported intrusion settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_appliance_security_intrusion_request import UpdateOrganizationApplianceSecurityIntrusionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_security_intrusion_request = openapi_client.UpdateOrganizationApplianceSecurityIntrusionRequest() # UpdateOrganizationApplianceSecurityIntrusionRequest | 

    try:
        # Sets supported intrusion settings for an organization
        api_response = api_instance.update_organization_appliance_security_intrusion_1(organization_id, update_organization_appliance_security_intrusion_request)
        print("The response of SecurityApi->update_organization_appliance_security_intrusion_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityApi->update_organization_appliance_security_intrusion_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_security_intrusion_request** | [**UpdateOrganizationApplianceSecurityIntrusionRequest**](UpdateOrganizationApplianceSecurityIntrusionRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

