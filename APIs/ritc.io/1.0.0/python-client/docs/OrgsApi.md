# openapi_client.OrgsApi

All URIs are relative to *https://api.ritc.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_organization**](OrgsApi.md#add_organization) | **POST** /orgs | 
[**get_my_organization**](OrgsApi.md#get_my_organization) | **GET** /orgs/me | 


# **add_organization**
> List[OrgResponse] add_organization(org_object)



Create an org

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.org import Org
from openapi_client.models.org_response import OrgResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrgsApi(api_client)
    org_object = openapi_client.Org() # Org | Org information

    try:
        api_response = api_instance.add_organization(org_object)
        print("The response of OrgsApi->add_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrgsApi->add_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_object** | [**Org**](Org.md)| Org information | 

### Return type

[**List[OrgResponse]**](OrgResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An org was successfully created |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_my_organization**
> List[OrgResponse] get_my_organization()



Get org information

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.org_response import OrgResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrgsApi(api_client)

    try:
        api_response = api_instance.get_my_organization()
        print("The response of OrgsApi->get_my_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrgsApi->get_my_organization: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OrgResponse]**](OrgResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about an org |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

