# openapi_client.PolicySetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_sets_evaluate_policies**](PolicySetsApi.md#policy_sets_evaluate_policies) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{name}/evaluatePolicies | 


# **policy_sets_evaluate_policies**
> EvaluatePoliciesResponse policy_sets_evaluate_policies(subscription_id, resource_group_name, lab_name, name, api_version, evaluate_policies_request)



Evaluates lab policy.

### Example

* OAuth Authentication (azure_auth):

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
    api_instance = openapi_client.PolicySetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the policy set.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    evaluate_policies_request = openapi_client.EvaluatePoliciesRequest() # EvaluatePoliciesRequest | Request body for evaluating a policy set.

    try:
        api_response = api_instance.policy_sets_evaluate_policies(subscription_id, resource_group_name, lab_name, name, api_version, evaluate_policies_request)
        print("The response of PolicySetsApi->policy_sets_evaluate_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicySetsApi->policy_sets_evaluate_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the policy set. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **evaluate_policies_request** | [**EvaluatePoliciesRequest**](EvaluatePoliciesRequest.md)| Request body for evaluating a policy set. | 

### Return type

[**EvaluatePoliciesResponse**](EvaluatePoliciesResponse.md)

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

