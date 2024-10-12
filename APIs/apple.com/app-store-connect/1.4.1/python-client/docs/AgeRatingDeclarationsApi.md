# openapi_client.AgeRatingDeclarationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**age_rating_declarations_update_instance**](AgeRatingDeclarationsApi.md#age_rating_declarations_update_instance) | **PATCH** /v1/ageRatingDeclarations/{id} | 


# **age_rating_declarations_update_instance**
> AgeRatingDeclarationResponse age_rating_declarations_update_instance(id, age_rating_declaration_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.age_rating_declaration_response import AgeRatingDeclarationResponse
from openapi_client.models.age_rating_declaration_update_request import AgeRatingDeclarationUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AgeRatingDeclarationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    age_rating_declaration_update_request = openapi_client.AgeRatingDeclarationUpdateRequest() # AgeRatingDeclarationUpdateRequest | AgeRatingDeclaration representation

    try:
        api_response = api_instance.age_rating_declarations_update_instance(id, age_rating_declaration_update_request)
        print("The response of AgeRatingDeclarationsApi->age_rating_declarations_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgeRatingDeclarationsApi->age_rating_declarations_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **age_rating_declaration_update_request** | [**AgeRatingDeclarationUpdateRequest**](AgeRatingDeclarationUpdateRequest.md)| AgeRatingDeclaration representation | 

### Return type

[**AgeRatingDeclarationResponse**](AgeRatingDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AgeRatingDeclaration |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

