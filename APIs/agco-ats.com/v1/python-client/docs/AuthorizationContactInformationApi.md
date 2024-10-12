# openapi_client.AuthorizationContactInformationApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization_contact_information_get**](AuthorizationContactInformationApi.md#authorization_contact_information_get) | **GET** /api/v2/AuthorizationContactInformation | Get contact information for authorization codes.
[**authorization_contact_information_post**](AuthorizationContactInformationApi.md#authorization_contact_information_post) | **POST** /api/v2/AuthorizationContactInformation | Add contact information for authorization code.


# **authorization_contact_information_get**
> APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation authorization_contact_information_get(limit=limit, offset=offset, authorization_code=authorization_code, after_date=after_date, before_date=before_date, dealer_code=dealer_code)

Get contact information for authorization codes.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_authorization_codes_shared_models_authorization_contact_information import APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationContactInformationApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    authorization_code = 'authorization_code_example' # str | Optional. Search by authorization code. (optional)
    after_date = '2013-10-20T19:20:30+01:00' # datetime | Optional. Include only data for authorization codes created after a provided date. (optional)
    before_date = '2013-10-20T19:20:30+01:00' # datetime | Optional. Include only data for authorization codes created before a provided date. (optional)
    dealer_code = 'dealer_code_example' # str | Optional. Search by dealer code. (optional)

    try:
        # Get contact information for authorization codes.
        api_response = api_instance.authorization_contact_information_get(limit=limit, offset=offset, authorization_code=authorization_code, after_date=after_date, before_date=before_date, dealer_code=dealer_code)
        print("The response of AuthorizationContactInformationApi->authorization_contact_information_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationContactInformationApi->authorization_contact_information_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **authorization_code** | **str**| Optional. Search by authorization code. | [optional] 
 **after_date** | **datetime**| Optional. Include only data for authorization codes created after a provided date. | [optional] 
 **before_date** | **datetime**| Optional. Include only data for authorization codes created before a provided date. | [optional] 
 **dealer_code** | **str**| Optional. Search by dealer code. | [optional] 

### Return type

[**APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation**](APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_contact_information_post**
> int authorization_contact_information_post(authorization_codes_shared_models_authorization_contact_information)

Add contact information for authorization code.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_contact_information import AuthorizationCodesSharedModelsAuthorizationContactInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationContactInformationApi(api_client)
    authorization_codes_shared_models_authorization_contact_information = openapi_client.AuthorizationCodesSharedModelsAuthorizationContactInformation() # AuthorizationCodesSharedModelsAuthorizationContactInformation | A contact information.

    try:
        # Add contact information for authorization code.
        api_response = api_instance.authorization_contact_information_post(authorization_codes_shared_models_authorization_contact_information)
        print("The response of AuthorizationContactInformationApi->authorization_contact_information_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationContactInformationApi->authorization_contact_information_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_codes_shared_models_authorization_contact_information** | [**AuthorizationCodesSharedModelsAuthorizationContactInformation**](AuthorizationCodesSharedModelsAuthorizationContactInformation.md)| A contact information. | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

