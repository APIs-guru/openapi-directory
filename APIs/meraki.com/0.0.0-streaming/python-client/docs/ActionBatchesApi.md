# openapi_client.ActionBatchesApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_action_batch**](ActionBatchesApi.md#create_organization_action_batch) | **POST** /organizations/{organizationId}/actionBatches | Create an action batch
[**delete_organization_action_batch**](ActionBatchesApi.md#delete_organization_action_batch) | **DELETE** /organizations/{organizationId}/actionBatches/{actionBatchId} | Delete an action batch
[**get_organization_action_batches**](ActionBatchesApi.md#get_organization_action_batches) | **GET** /organizations/{organizationId}/actionBatches | Return the list of action batches in the organization
[**update_organization_action_batch**](ActionBatchesApi.md#update_organization_action_batch) | **PUT** /organizations/{organizationId}/actionBatches/{actionBatchId} | Update an action batch


# **create_organization_action_batch**
> object create_organization_action_batch(organization_id, create_organization_action_batch_request)

Create an action batch

Create an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_action_batch_request import CreateOrganizationActionBatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.ActionBatchesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_action_batch_request = openapi_client.CreateOrganizationActionBatchRequest() # CreateOrganizationActionBatchRequest | 

    try:
        # Create an action batch
        api_response = api_instance.create_organization_action_batch(organization_id, create_organization_action_batch_request)
        print("The response of ActionBatchesApi->create_organization_action_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionBatchesApi->create_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_action_batch_request** | [**CreateOrganizationActionBatchRequest**](CreateOrganizationActionBatchRequest.md)|  | 

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
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_action_batch**
> delete_organization_action_batch(organization_id, action_batch_id)

Delete an action batch

Delete an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.ActionBatchesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    action_batch_id = 'action_batch_id_example' # str | 

    try:
        # Delete an action batch
        api_instance.delete_organization_action_batch(organization_id, action_batch_id)
    except Exception as e:
        print("Exception when calling ActionBatchesApi->delete_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **action_batch_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_action_batches**
> List[object] get_organization_action_batches(organization_id, status=status)

Return the list of action batches in the organization

Return the list of action batches in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.ActionBatchesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    status = 'status_example' # str | Filter batches by status. Valid types are pending, completed, and failed. (optional)

    try:
        # Return the list of action batches in the organization
        api_response = api_instance.get_organization_action_batches(organization_id, status=status)
        print("The response of ActionBatchesApi->get_organization_action_batches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionBatchesApi->get_organization_action_batches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **status** | **str**| Filter batches by status. Valid types are pending, completed, and failed. | [optional] 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_action_batch**
> object update_organization_action_batch(organization_id, action_batch_id, update_organization_action_batch_request=update_organization_action_batch_request)

Update an action batch

Update an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_action_batch_request import UpdateOrganizationActionBatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.ActionBatchesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    action_batch_id = 'action_batch_id_example' # str | 
    update_organization_action_batch_request = openapi_client.UpdateOrganizationActionBatchRequest() # UpdateOrganizationActionBatchRequest |  (optional)

    try:
        # Update an action batch
        api_response = api_instance.update_organization_action_batch(organization_id, action_batch_id, update_organization_action_batch_request=update_organization_action_batch_request)
        print("The response of ActionBatchesApi->update_organization_action_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionBatchesApi->update_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **action_batch_id** | **str**|  | 
 **update_organization_action_batch_request** | [**UpdateOrganizationActionBatchRequest**](UpdateOrganizationActionBatchRequest.md)|  | [optional] 

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

