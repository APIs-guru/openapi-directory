# openapi_client.ConnectorDocsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connector_docs_one**](ConnectorDocsApi.md#connector_docs_one) | **GET** /connector/connectors/{id}/docs/{doc_id} | Get Connector Doc content


# **connector_docs_one**
> str connector_docs_one(x_apideck_app_id, id, doc_id)

Get Connector Doc content

Get Connector Doc content

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorDocsApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    id = 'id_example' # str | ID of the record you are acting upon.
    doc_id = 'application_owner+oauth_credentials' # str | ID of the Doc

    try:
        # Get Connector Doc content
        api_response = api_instance.connector_docs_one(x_apideck_app_id, id, doc_id)
        print("The response of ConnectorDocsApi->connector_docs_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorDocsApi->connector_docs_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **id** | **str**| ID of the record you are acting upon. | 
 **doc_id** | **str**| ID of the Doc | 

### Return type

**str**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/markdown, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connectors |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

