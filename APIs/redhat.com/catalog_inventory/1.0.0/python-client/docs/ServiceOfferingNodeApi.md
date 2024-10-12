# openapi_client.ServiceOfferingNodeApi

All URIs are relative to *https://cloud.redhat.com//api/catalog-inventory/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_service_offering_nodes**](ServiceOfferingNodeApi.md#list_service_offering_nodes) | **GET** /service_offering_nodes | List ServiceOfferingNodes
[**show_service_offering_node**](ServiceOfferingNodeApi.md#show_service_offering_node) | **GET** /service_offering_nodes/{id} | Show an existing ServiceOfferingNode


# **list_service_offering_nodes**
> ServiceOfferingNodesCollection list_service_offering_nodes(limit=limit, offset=offset, filter=filter, sort_by=sort_by)

List ServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.service_offering_nodes_collection import ServiceOfferingNodesCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloud.redhat.com//api/catalog-inventory/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloud.redhat.com//api/catalog-inventory/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: UserSecurity
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServiceOfferingNodeApi(api_client)
    limit = 100 # int | The numbers of items to return per page. (optional) (default to 100)
    offset = 0 # int | The number of items to skip before starting to collect the result set. (optional) (default to 0)
    filter = None # object | Filter for querying collections. (optional)
    sort_by = None # object | The list of attribute and order to sort the result set by. (optional)

    try:
        # List ServiceOfferingNodes
        api_response = api_instance.list_service_offering_nodes(limit=limit, offset=offset, filter=filter, sort_by=sort_by)
        print("The response of ServiceOfferingNodeApi->list_service_offering_nodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingNodeApi->list_service_offering_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]
 **filter** | [**object**](.md)| Filter for querying collections. | [optional] 
 **sort_by** | [**object**](.md)| The list of attribute and order to sort the result set by. | [optional] 

### Return type

[**ServiceOfferingNodesCollection**](ServiceOfferingNodesCollection.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ServiceOfferingNodes collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_service_offering_node**
> ServiceOfferingNode show_service_offering_node(id)

Show an existing ServiceOfferingNode

Returns a ServiceOfferingNode object

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.service_offering_node import ServiceOfferingNode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloud.redhat.com//api/catalog-inventory/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloud.redhat.com//api/catalog-inventory/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: UserSecurity
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServiceOfferingNodeApi(api_client)
    id = 'id_example' # str | ID of the resource

    try:
        # Show an existing ServiceOfferingNode
        api_response = api_instance.show_service_offering_node(id)
        print("The response of ServiceOfferingNodeApi->show_service_offering_node:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingNodeApi->show_service_offering_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 

### Return type

[**ServiceOfferingNode**](ServiceOfferingNode.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ServiceOfferingNode info |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

