# openapi_client.DiscoveryApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discovery_exists**](DiscoveryApi.md#discovery_exists) | **POST** /discovery/exists | Discover Network Participant Existence
[**discovery_identifiers**](DiscoveryApi.md#discovery_identifiers) | **GET** /discovery/identifiers | Discover Country Identifiers ** EXPERIMENTAL
[**discovery_receives**](DiscoveryApi.md#discovery_receives) | **POST** /discovery/receives | Disover Network Participant


# **discovery_exists**
> DiscoveredParticipant discovery_exists(discoverable_participant)

Discover Network Participant Existence

Discover if a network participant exists.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.discoverable_participant import DiscoverableParticipant
from openapi_client.models.discovered_participant import DiscoveredParticipant
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
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
    api_instance = openapi_client.DiscoveryApi(api_client)
    discoverable_participant = openapi_client.DiscoverableParticipant() # DiscoverableParticipant | The participant to check

    try:
        # Discover Network Participant Existence
        api_response = api_instance.discovery_exists(discoverable_participant)
        print("The response of DiscoveryApi->discovery_exists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoverable_participant** | [**DiscoverableParticipant**](DiscoverableParticipant.md)| The participant to check | 

### Return type

[**DiscoveredParticipant**](DiscoveredParticipant.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discovery_identifiers**
> CountrySpecifications discovery_identifiers()

Discover Country Identifiers ** EXPERIMENTAL

Discover the identifiers used in each country, for routing, for legal identification as well as for tax identification purposes. We are currently testing this endpoint with selected Customers. If you would like to participate, please contact us.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.country_specifications import CountrySpecifications
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
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
    api_instance = openapi_client.DiscoveryApi(api_client)

    try:
        # Discover Country Identifiers ** EXPERIMENTAL
        api_response = api_instance.discovery_identifiers()
        print("The response of DiscoveryApi->discovery_identifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_identifiers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CountrySpecifications**](CountrySpecifications.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discovery_receives**
> DiscoveredParticipant discovery_receives(discoverable_participant)

Disover Network Participant

Discover a network participant and capabilities.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.discoverable_participant import DiscoverableParticipant
from openapi_client.models.discovered_participant import DiscoveredParticipant
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
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
    api_instance = openapi_client.DiscoveryApi(api_client)
    discoverable_participant = openapi_client.DiscoverableParticipant() # DiscoverableParticipant | The participant to check

    try:
        # Disover Network Participant
        api_response = api_instance.discovery_receives(discoverable_participant)
        print("The response of DiscoveryApi->discovery_receives:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_receives: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoverable_participant** | [**DiscoverableParticipant**](DiscoverableParticipant.md)| The participant to check | 

### Return type

[**DiscoveredParticipant**](DiscoveredParticipant.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

