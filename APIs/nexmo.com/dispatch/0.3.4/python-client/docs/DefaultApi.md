# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/v0.1/dispatch*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workflow**](DefaultApi.md#create_workflow) | **POST** / | Create a workflow


# **create_workflow**
> Response create_workflow(create_workflow)

Create a workflow

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_workflow import CreateWorkflow
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v0.1/dispatch
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v0.1/dispatch"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    create_workflow = openapi_client.CreateWorkflow() # CreateWorkflow | Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.

    try:
        # Create a workflow
        api_response = api_instance.create_workflow(create_workflow)
        print("The response of DefaultApi->create_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_workflow** | [**CreateWorkflow**](CreateWorkflow.md)| Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute. | 

### Return type

[**Response**](Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

