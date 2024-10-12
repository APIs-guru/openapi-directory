# openapi_client.FormulasApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formulas_create_or_update**](FormulasApi.md#formulas_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name} | 
[**formulas_delete**](FormulasApi.md#formulas_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name} | 
[**formulas_get**](FormulasApi.md#formulas_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name} | 
[**formulas_list**](FormulasApi.md#formulas_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas | 
[**formulas_update**](FormulasApi.md#formulas_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name} | 


# **formulas_create_or_update**
> Formula formulas_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, formula)



Create or replace an existing formula. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.formula import Formula
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormulasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the formula.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    formula = openapi_client.Formula() # Formula | A formula for creating a VM, specifying an image base and other parameters

    try:
        api_response = api_instance.formulas_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, formula)
        print("The response of FormulasApi->formulas_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormulasApi->formulas_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the formula. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **formula** | [**Formula**](Formula.md)| A formula for creating a VM, specifying an image base and other parameters | 

### Return type

[**Formula**](Formula.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formulas_delete**
> formulas_delete(subscription_id, resource_group_name, lab_name, name, api_version)



Delete formula.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormulasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the formula.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.formulas_delete(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling FormulasApi->formulas_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the formula. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formulas_get**
> Formula formulas_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)



Get formula.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.formula import Formula
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormulasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the formula.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=description)' (optional)

    try:
        api_response = api_instance.formulas_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)
        print("The response of FormulasApi->formulas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormulasApi->formulas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the formula. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;description)&#39; | [optional] 

### Return type

[**Formula**](Formula.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formulas_list**
> FormulaList formulas_list(subscription_id, resource_group_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List formulas in a given lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.formula_list import FormulaList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormulasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=description)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. Example: '$filter=contains(name,'myName') (optional)
    top = 56 # int | The maximum number of resources to return from the operation. Example: '$top=10' (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. Example: '$orderby=name desc' (optional)

    try:
        api_response = api_instance.formulas_list(subscription_id, resource_group_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of FormulasApi->formulas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormulasApi->formulas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;description)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. Example: &#39;$filter&#x3D;contains(name,&#39;myName&#39;) | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. Example: &#39;$top&#x3D;10&#39; | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. Example: &#39;$orderby&#x3D;name desc&#39; | [optional] 

### Return type

[**FormulaList**](FormulaList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formulas_update**
> Formula formulas_update(subscription_id, resource_group_name, lab_name, name, api_version, formula)



Allows modifying tags of formulas. All other properties will be ignored.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.formula import Formula
from openapi_client.models.formula_fragment import FormulaFragment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormulasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the formula.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    formula = openapi_client.FormulaFragment() # FormulaFragment | A formula for creating a VM, specifying an image base and other parameters

    try:
        api_response = api_instance.formulas_update(subscription_id, resource_group_name, lab_name, name, api_version, formula)
        print("The response of FormulasApi->formulas_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormulasApi->formulas_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the formula. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **formula** | [**FormulaFragment**](FormulaFragment.md)| A formula for creating a VM, specifying an image base and other parameters | 

### Return type

[**Formula**](Formula.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

