# openapi_client.AccountApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_patch**](AccountApi.md#account_patch) | **PATCH** /account | Update account


# **account_patch**
> User account_patch(user=user)

Update account

Update account. Wrap map parameters in [user].

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.user_editable import UserEditable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    user = openapi_client.UserEditable() # UserEditable | user attributes (optional)

    try:
        # Update account
        api_response = api_instance.account_patch(user=user)
        print("The response of AccountApi->account_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**UserEditable**](UserEditable.md)| user attributes | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains user data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

