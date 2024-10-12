# openapi_client.ServiceOfferingApi

All URIs are relative to *https://cloud.redhat.com//api/catalog-inventory/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applied_inventories_tags_for_service_offering**](ServiceOfferingApi.md#applied_inventories_tags_for_service_offering) | **POST** /service_offerings/{id}/applied_inventories_tags | Invokes computing of ServiceInventories tags for given ServiceOffering
[**list_service_offering_service_instances**](ServiceOfferingApi.md#list_service_offering_service_instances) | **GET** /service_offerings/{id}/service_instances | List ServiceInstances for ServiceOffering
[**list_service_offering_service_offering_nodes**](ServiceOfferingApi.md#list_service_offering_service_offering_nodes) | **GET** /service_offerings/{id}/service_offering_nodes | List ServiceOfferingNodes for ServiceOffering
[**list_service_offering_service_plans**](ServiceOfferingApi.md#list_service_offering_service_plans) | **GET** /service_offerings/{id}/service_plans | List ServicePlans for ServiceOffering
[**list_service_offerings**](ServiceOfferingApi.md#list_service_offerings) | **GET** /service_offerings | List ServiceOfferings
[**order_service_offering**](ServiceOfferingApi.md#order_service_offering) | **POST** /service_offerings/{id}/order | Order an existing ServiceOffering
[**show_service_offering**](ServiceOfferingApi.md#show_service_offering) | **GET** /service_offerings/{id} | Show an existing ServiceOffering


# **applied_inventories_tags_for_service_offering**
> List[Tag] applied_inventories_tags_for_service_offering(id, applied_inventories_parameters_service_plan)

Invokes computing of ServiceInventories tags for given ServiceOffering

Returns an array of inventories tags

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.applied_inventories_parameters_service_plan import AppliedInventoriesParametersServicePlan
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    id = 'id_example' # str | ID of the resource
    applied_inventories_parameters_service_plan = openapi_client.AppliedInventoriesParametersServicePlan() # AppliedInventoriesParametersServicePlan | Parameters defining input data for computing inventories

    try:
        # Invokes computing of ServiceInventories tags for given ServiceOffering
        api_response = api_instance.applied_inventories_tags_for_service_offering(id, applied_inventories_parameters_service_plan)
        print("The response of ServiceOfferingApi->applied_inventories_tags_for_service_offering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->applied_inventories_tags_for_service_offering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 
 **applied_inventories_parameters_service_plan** | [**AppliedInventoriesParametersServicePlan**](AppliedInventoriesParametersServicePlan.md)| Parameters defining input data for computing inventories | 

### Return type

[**List[Tag]**](Tag.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of inventories tags for the computing result |  -  |
**400** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_service_offering_service_instances**
> ServiceInstancesCollection list_service_offering_service_instances(id, limit=limit, offset=offset, filter=filter, sort_by=sort_by)

List ServiceInstances for ServiceOffering

Returns an array of ServiceInstance objects

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.service_instances_collection import ServiceInstancesCollection
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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    id = 'id_example' # str | ID of the resource
    limit = 100 # int | The numbers of items to return per page. (optional) (default to 100)
    offset = 0 # int | The number of items to skip before starting to collect the result set. (optional) (default to 0)
    filter = None # object | Filter for querying collections. (optional)
    sort_by = None # object | The list of attribute and order to sort the result set by. (optional)

    try:
        # List ServiceInstances for ServiceOffering
        api_response = api_instance.list_service_offering_service_instances(id, limit=limit, offset=offset, filter=filter, sort_by=sort_by)
        print("The response of ServiceOfferingApi->list_service_offering_service_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->list_service_offering_service_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 
 **limit** | **int**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]
 **filter** | [**object**](.md)| Filter for querying collections. | [optional] 
 **sort_by** | [**object**](.md)| The list of attribute and order to sort the result set by. | [optional] 

### Return type

[**ServiceInstancesCollection**](ServiceInstancesCollection.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ServiceInstances collection |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_service_offering_service_offering_nodes**
> ServiceOfferingNodesCollection list_service_offering_service_offering_nodes(id, limit=limit, offset=offset, filter=filter, sort_by=sort_by)

List ServiceOfferingNodes for ServiceOffering

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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    id = 'id_example' # str | ID of the resource
    limit = 100 # int | The numbers of items to return per page. (optional) (default to 100)
    offset = 0 # int | The number of items to skip before starting to collect the result set. (optional) (default to 0)
    filter = None # object | Filter for querying collections. (optional)
    sort_by = None # object | The list of attribute and order to sort the result set by. (optional)

    try:
        # List ServiceOfferingNodes for ServiceOffering
        api_response = api_instance.list_service_offering_service_offering_nodes(id, limit=limit, offset=offset, filter=filter, sort_by=sort_by)
        print("The response of ServiceOfferingApi->list_service_offering_service_offering_nodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->list_service_offering_service_offering_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 
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
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_service_offering_service_plans**
> ServicePlansCollection list_service_offering_service_plans(id, limit=limit, offset=offset, filter=filter, sort_by=sort_by)

List ServicePlans for ServiceOffering

Returns an array of ServicePlan objects

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.service_plans_collection import ServicePlansCollection
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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    id = 'id_example' # str | ID of the resource
    limit = 100 # int | The numbers of items to return per page. (optional) (default to 100)
    offset = 0 # int | The number of items to skip before starting to collect the result set. (optional) (default to 0)
    filter = None # object | Filter for querying collections. (optional)
    sort_by = None # object | The list of attribute and order to sort the result set by. (optional)

    try:
        # List ServicePlans for ServiceOffering
        api_response = api_instance.list_service_offering_service_plans(id, limit=limit, offset=offset, filter=filter, sort_by=sort_by)
        print("The response of ServiceOfferingApi->list_service_offering_service_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->list_service_offering_service_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 
 **limit** | **int**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]
 **filter** | [**object**](.md)| Filter for querying collections. | [optional] 
 **sort_by** | [**object**](.md)| The list of attribute and order to sort the result set by. | [optional] 

### Return type

[**ServicePlansCollection**](ServicePlansCollection.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ServicePlans collection |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_service_offerings**
> ServiceOfferingsCollection list_service_offerings(limit=limit, offset=offset, filter=filter, sort_by=sort_by)

List ServiceOfferings

Returns an array of ServiceOffering objects

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.service_offerings_collection import ServiceOfferingsCollection
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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    limit = 100 # int | The numbers of items to return per page. (optional) (default to 100)
    offset = 0 # int | The number of items to skip before starting to collect the result set. (optional) (default to 0)
    filter = None # object | Filter for querying collections. (optional)
    sort_by = None # object | The list of attribute and order to sort the result set by. (optional)

    try:
        # List ServiceOfferings
        api_response = api_instance.list_service_offerings(limit=limit, offset=offset, filter=filter, sort_by=sort_by)
        print("The response of ServiceOfferingApi->list_service_offerings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->list_service_offerings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]
 **filter** | [**object**](.md)| Filter for querying collections. | [optional] 
 **sort_by** | [**object**](.md)| The list of attribute and order to sort the result set by. | [optional] 

### Return type

[**ServiceOfferingsCollection**](ServiceOfferingsCollection.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ServiceOfferings collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_service_offering**
> OrderServiceOffering200Response order_service_offering(id, order_parameters_service_offering)

Order an existing ServiceOffering

Returns a Task id

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.order_parameters_service_offering import OrderParametersServiceOffering
from openapi_client.models.order_service_offering200_response import OrderServiceOffering200Response
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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    id = 'id_example' # str | ID of the resource
    order_parameters_service_offering = openapi_client.OrderParametersServiceOffering() # OrderParametersServiceOffering | Order parameters defining the service and provider control

    try:
        # Order an existing ServiceOffering
        api_response = api_instance.order_service_offering(id, order_parameters_service_offering)
        print("The response of ServiceOfferingApi->order_service_offering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->order_service_offering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 
 **order_parameters_service_offering** | [**OrderParametersServiceOffering**](OrderParametersServiceOffering.md)| Order parameters defining the service and provider control | 

### Return type

[**OrderServiceOffering200Response**](OrderServiceOffering200Response.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a task ID for the order |  -  |
**400** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_service_offering**
> ServiceOffering show_service_offering(id)

Show an existing ServiceOffering

Returns a ServiceOffering object

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.service_offering import ServiceOffering
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
    api_instance = openapi_client.ServiceOfferingApi(api_client)
    id = 'id_example' # str | ID of the resource

    try:
        # Show an existing ServiceOffering
        api_response = api_instance.show_service_offering(id)
        print("The response of ServiceOfferingApi->show_service_offering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceOfferingApi->show_service_offering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the resource | 

### Return type

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ServiceOffering info |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

