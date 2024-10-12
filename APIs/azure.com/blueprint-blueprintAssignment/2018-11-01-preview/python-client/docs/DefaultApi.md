# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignments_who_is_blueprint**](DefaultApi.md#assignments_who_is_blueprint) | **POST** /{scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}/WhoIsBlueprint | 


# **assignments_who_is_blueprint**
> WhoIsBlueprintContract assignments_who_is_blueprint(api_version, scope, assignment_name)



Get Blueprints service SPN objectId

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.who_is_blueprint_contract import WhoIsBlueprintContract
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    assignment_name = 'assignment_name_example' # str | Name of the blueprint assignment.

    try:
        api_response = api_instance.assignments_who_is_blueprint(api_version, scope, assignment_name)
        print("The response of DefaultApi->assignments_who_is_blueprint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assignments_who_is_blueprint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **assignment_name** | **str**| Name of the blueprint assignment. | 

### Return type

[**WhoIsBlueprintContract**](WhoIsBlueprintContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blueprints service SPN objectId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

