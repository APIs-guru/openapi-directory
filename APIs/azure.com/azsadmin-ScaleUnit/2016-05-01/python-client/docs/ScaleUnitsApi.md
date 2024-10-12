# openapi_client.ScaleUnitsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scale_units_create_from_json**](ScaleUnitsApi.md#scale_units_create_from_json) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/createFromJson | 
[**scale_units_get**](ScaleUnitsApi.md#scale_units_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit} | 
[**scale_units_list**](ScaleUnitsApi.md#scale_units_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits | 
[**scale_units_scale_out**](ScaleUnitsApi.md#scale_units_scale_out) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/scaleOut | 


# **scale_units_create_from_json**
> scale_units_create_from_json(subscription_id, resource_group_name, location, scale_unit, api_version, creation_data)



Add a new scale unit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_from_json_scale_unit_parameters_list import CreateFromJsonScaleUnitParametersList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScaleUnitsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    scale_unit = 'scale_unit_example' # str | Name of the scale units.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    creation_data = openapi_client.CreateFromJsonScaleUnitParametersList() # CreateFromJsonScaleUnitParametersList | A list of input data that allows for creating the new scale unit.

    try:
        api_instance.scale_units_create_from_json(subscription_id, resource_group_name, location, scale_unit, api_version, creation_data)
    except Exception as e:
        print("Exception when calling ScaleUnitsApi->scale_units_create_from_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **scale_unit** | **str**| Name of the scale units. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **creation_data** | [**CreateFromJsonScaleUnitParametersList**](CreateFromJsonScaleUnitParametersList.md)| A list of input data that allows for creating the new scale unit. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scale_units_get**
> ScaleUnit scale_units_get(subscription_id, resource_group_name, location, scale_unit, api_version)



Returns the requested scale unit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scale_unit import ScaleUnit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScaleUnitsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    scale_unit = 'scale_unit_example' # str | Name of the scale units.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.scale_units_get(subscription_id, resource_group_name, location, scale_unit, api_version)
        print("The response of ScaleUnitsApi->scale_units_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScaleUnitsApi->scale_units_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **scale_unit** | **str**| Name of the scale units. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**ScaleUnit**](ScaleUnit.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scale_units_list**
> ScaleUnitList scale_units_list(subscription_id, resource_group_name, location, api_version, filter=filter)



Returns a list of all scale units at a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scale_unit_list import ScaleUnitList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScaleUnitsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.scale_units_list(subscription_id, resource_group_name, location, api_version, filter=filter)
        print("The response of ScaleUnitsApi->scale_units_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScaleUnitsApi->scale_units_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**ScaleUnitList**](ScaleUnitList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scale_units_scale_out**
> scale_units_scale_out(subscription_id, resource_group_name, location, scale_unit, api_version, scale_unit_node_parameters)



Scales out a scale unit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scale_out_scale_unit_parameters_list import ScaleOutScaleUnitParametersList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScaleUnitsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    scale_unit = 'scale_unit_example' # str | Name of the scale units.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    scale_unit_node_parameters = openapi_client.ScaleOutScaleUnitParametersList() # ScaleOutScaleUnitParametersList | A list of input data that allows for adding a set of scale unit nodes.

    try:
        api_instance.scale_units_scale_out(subscription_id, resource_group_name, location, scale_unit, api_version, scale_unit_node_parameters)
    except Exception as e:
        print("Exception when calling ScaleUnitsApi->scale_units_scale_out: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **scale_unit** | **str**| Name of the scale units. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **scale_unit_node_parameters** | [**ScaleOutScaleUnitParametersList**](ScaleOutScaleUnitParametersList.md)| A list of input data that allows for adding a set of scale unit nodes. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

