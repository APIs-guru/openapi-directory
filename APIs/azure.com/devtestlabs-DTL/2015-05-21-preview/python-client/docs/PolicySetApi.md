# openapi_client.PolicySetApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_set_evaluate_policies**](PolicySetApi.md#policy_set_evaluate_policies) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{name}/evaluatePolicies | 


# **policy_set_evaluate_policies**
> EvaluatePoliciesResponse policy_set_evaluate_policies(subscription_id, resource_group_name, lab_name, name, api_version, evaluate_policies_request)



Evaluates Lab Policy.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.evaluate_policies_request import EvaluatePoliciesRequest
from openapi_client.models.evaluate_policies_response import EvaluatePoliciesResponse
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
    api_instance = openapi_client.PolicySetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the policy set.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    evaluate_policies_request = openapi_client.EvaluatePoliciesRequest() # EvaluatePoliciesRequest | 

    try:
        api_response = api_instance.policy_set_evaluate_policies(subscription_id, resource_group_name, lab_name, name, api_version, evaluate_policies_request)
        print("The response of PolicySetApi->policy_set_evaluate_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicySetApi->policy_set_evaluate_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the policy set. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **evaluate_policies_request** | [**EvaluatePoliciesRequest**](EvaluatePoliciesRequest.md)|  | 

### Return type

[**EvaluatePoliciesResponse**](EvaluatePoliciesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

