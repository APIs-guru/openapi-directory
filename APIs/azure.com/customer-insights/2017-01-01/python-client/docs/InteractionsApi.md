# openapi_client.InteractionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**interactions_create_or_update**](InteractionsApi.md#interactions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName} | 
[**interactions_get**](InteractionsApi.md#interactions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName} | 
[**interactions_list_by_hub**](InteractionsApi.md#interactions_list_by_hub) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions | 
[**interactions_suggest_relationship_links**](InteractionsApi.md#interactions_suggest_relationship_links) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}/suggestRelationshipLinks | 


# **interactions_create_or_update**
> InteractionResourceFormat interactions_create_or_update(resource_group_name, hub_name, interaction_name, api_version, subscription_id, parameters)



Creates an interaction or updates an existing interaction within a hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.interaction_resource_format import InteractionResourceFormat
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
    api_instance = openapi_client.InteractionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    interaction_name = 'interaction_name_example' # str | The name of the interaction.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.InteractionResourceFormat() # InteractionResourceFormat | Parameters supplied to the CreateOrUpdate Interaction operation.

    try:
        api_response = api_instance.interactions_create_or_update(resource_group_name, hub_name, interaction_name, api_version, subscription_id, parameters)
        print("The response of InteractionsApi->interactions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InteractionsApi->interactions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **interaction_name** | **str**| The name of the interaction. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**InteractionResourceFormat**](InteractionResourceFormat.md)| Parameters supplied to the CreateOrUpdate Interaction operation. | 

### Return type

[**InteractionResourceFormat**](InteractionResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully created the interaction. |  -  |
**202** | Accepted. The create interaction operation is accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **interactions_get**
> InteractionResourceFormat interactions_get(resource_group_name, hub_name, interaction_name, api_version, subscription_id, locale_code=locale_code)



Gets information about the specified interaction.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.interaction_resource_format import InteractionResourceFormat
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
    api_instance = openapi_client.InteractionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    interaction_name = 'interaction_name_example' # str | The name of the interaction.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    locale_code = 'en-us' # str | Locale of interaction to retrieve, default is en-us. (optional) (default to 'en-us')

    try:
        api_response = api_instance.interactions_get(resource_group_name, hub_name, interaction_name, api_version, subscription_id, locale_code=locale_code)
        print("The response of InteractionsApi->interactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InteractionsApi->interactions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **interaction_name** | **str**| The name of the interaction. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **locale_code** | **str**| Locale of interaction to retrieve, default is en-us. | [optional] [default to &#39;en-us&#39;]

### Return type

[**InteractionResourceFormat**](InteractionResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get the interaction. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **interactions_list_by_hub**
> InteractionListResult interactions_list_by_hub(resource_group_name, hub_name, api_version, subscription_id, locale_code=locale_code)



Gets all interactions in the hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.interaction_list_result import InteractionListResult
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
    api_instance = openapi_client.InteractionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    locale_code = 'en-us' # str | Locale of interaction to retrieve, default is en-us. (optional) (default to 'en-us')

    try:
        api_response = api_instance.interactions_list_by_hub(resource_group_name, hub_name, api_version, subscription_id, locale_code=locale_code)
        print("The response of InteractionsApi->interactions_list_by_hub:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InteractionsApi->interactions_list_by_hub: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **locale_code** | **str**| Locale of interaction to retrieve, default is en-us. | [optional] [default to &#39;en-us&#39;]

### Return type

[**InteractionListResult**](InteractionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get all the interactions in the hub. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **interactions_suggest_relationship_links**
> SuggestRelationshipLinksResponse interactions_suggest_relationship_links(resource_group_name, hub_name, interaction_name, api_version, subscription_id)



Suggests relationships to create relationship links.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.suggest_relationship_links_response import SuggestRelationshipLinksResponse
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
    api_instance = openapi_client.InteractionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    interaction_name = 'interaction_name_example' # str | The name of the interaction.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.interactions_suggest_relationship_links(resource_group_name, hub_name, interaction_name, api_version, subscription_id)
        print("The response of InteractionsApi->interactions_suggest_relationship_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InteractionsApi->interactions_suggest_relationship_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **interaction_name** | **str**| The name of the interaction. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SuggestRelationshipLinksResponse**](SuggestRelationshipLinksResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get suggested Relationship Links. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

