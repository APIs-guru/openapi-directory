# openapi_client.CredentialsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_credential_secret_using_post**](CredentialsApi.md#update_credential_secret_using_post) | **POST** /restv2/game/{apiKey}/config/~credentials/{credentialName}/resetSecret | Resets the secret of a credential


# **update_credential_secret_using_post**
> update_credential_secret_using_post(api_key, credential_name)

Resets the secret of a credential

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CredentialsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    credential_name = 'credential_name_example' # str | credentialName

    try:
        # Resets the secret of a credential
        api_instance.update_credential_secret_using_post(api_key, credential_name)
    except Exception as e:
        print("Exception when calling CredentialsApi->update_credential_secret_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **credential_name** | **str**| credentialName | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

