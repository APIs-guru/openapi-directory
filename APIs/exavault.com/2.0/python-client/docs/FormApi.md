# openapi_client.FormApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_form_message_by_id**](FormApi.md#delete_form_message_by_id) | **DELETE** /forms/entries/{id} | Delete a receive form submission
[**get_form_by_id**](FormApi.md#get_form_by_id) | **GET** /forms/{id} | Get receive folder form by Id
[**get_form_by_share_hash**](FormApi.md#get_form_by_share_hash) | **GET** /forms | Get receive folder form settings
[**get_form_entries**](FormApi.md#get_form_entries) | **GET** /forms/entries/{id} | Get form data entries for a receive
[**update_form_by_id**](FormApi.md#update_form_by_id) | **PATCH** /forms/{id} | Updates a form with given parameters


# **delete_form_message_by_id**
> EmptyResponse delete_form_message_by_id(ev_api_key, ev_access_token, id)

Delete a receive form submission

Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this.   **Notes**:  - Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete - You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation - It is not possible to un-delete data that is removed in this way 

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call. 
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 56 # int | ID of the entry to be deleted data for

    try:
        # Delete a receive form submission
        api_response = api_instance.delete_form_message_by_id(ev_api_key, ev_access_token, id)
        print("The response of FormApi->delete_form_message_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormApi->delete_form_message_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call.  | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the entry to be deleted data for | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_form_by_id**
> FormResponse get_form_by_id(id, ev_api_key, ev_access_token, include=include)

Get receive folder form by Id

Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings.   Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder.   **Note**  If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead.  

### Example


```python
import openapi_client
from openapi_client.models.form_response import FormResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormApi(api_client)
    id = 56 # int | Form unique ID number.
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = 'ev_access_token_example' # str | Access Token required to make the API call.
    include = 'share' # str | Enter \"**share**\" to get information about associated receive folder. (optional)

    try:
        # Get receive folder form by Id
        api_response = api_instance.get_form_by_id(id, ev_api_key, ev_access_token, include=include)
        print("The response of FormApi->get_form_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormApi->get_form_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Form unique ID number. | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access Token required to make the API call. | 
 **include** | **str**| Enter \&quot;**share**\&quot; to get information about associated receive folder. | [optional] 

### Return type

[**FormResponse**](FormResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_form_by_share_hash**
> FormResponse get_form_by_share_hash(ev_api_key, ev_access_token, share_hash, include=include)

Get receive folder form settings

Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.  Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.  **Note**  - If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead.  

### Example


```python
import openapi_client
from openapi_client.models.form_response import FormResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = 'ev_access_token_example' # str | Access Token required to make the API call.
    share_hash = 'share_hash_example' # str | Share hash to retrieve the form for.
    include = 'include_example' # str | Related record types to include in the response. Valid option is **share** (optional)

    try:
        # Get receive folder form settings
        api_response = api_instance.get_form_by_share_hash(ev_api_key, ev_access_token, share_hash, include=include)
        print("The response of FormApi->get_form_by_share_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormApi->get_form_by_share_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access Token required to make the API call. | 
 **share_hash** | **str**| Share hash to retrieve the form for. | 
 **include** | **str**| Related record types to include in the response. Valid option is **share** | [optional] 

### Return type

[**FormResponse**](FormResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_form_entries**
> FormEntryResponse get_form_entries(ev_api_key, ev_access_token, id, limit=limit, offset=offset)

Get form data entries for a receive

Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets. 

### Example


```python
import openapi_client
from openapi_client.models.form_entry_response import FormEntryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call. 
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 56 # int | ID of the form to retrieve entries for.
    limit = 10 # int | Limit of records to be returned (for pagination) (optional)
    offset = 100 # int | Current offset of records (for pagination) (optional)

    try:
        # Get form data entries for a receive
        api_response = api_instance.get_form_entries(ev_api_key, ev_access_token, id, limit=limit, offset=offset)
        print("The response of FormApi->get_form_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormApi->get_form_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call.  | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the form to retrieve entries for. | 
 **limit** | **int**| Limit of records to be returned (for pagination) | [optional] 
 **offset** | **int**| Current offset of records (for pagination) | [optional] 

### Return type

[**FormEntryResponse**](FormEntryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_form_by_id**
> FormResponse update_form_by_id(id, ev_api_key, ev_access_token, update_form_by_id_request_body=update_form_by_id_request_body)

Updates a form with given parameters

Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files.   **Notes**  *This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          

### Example


```python
import openapi_client
from openapi_client.models.form_response import FormResponse
from openapi_client.models.update_form_by_id_request_body import UpdateFormByIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FormApi(api_client)
    id = 56 # int | Form unique ID number.
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    update_form_by_id_request_body = {"elements":[{"name":"Name","order":0,"settings":{"description":"this is a description test","isRequired":true,"senderEmail":false,"useAsFolderName":false,"width":1},"type":"name"},{"id":2331,"name":"Email Address","order":1,"settings":{"description":null,"isRequired":true,"senderEmail":false,"useAsFolderName":false,"width":1},"type":"email"},{"id":2333,"name":"Subject","order":2,"settings":{"description":null,"isRequired":true,"senderEmail":false,"useAsFolderName":false,"width":1},"type":"text"},{"id":2335,"name":"Message","order":3,"settings":{"description":null,"isRequired":false,"senderEmail":false,"useAsFolderName":false,"width":1},"type":"textarea"},{"id":2337,"name":"Upload Area","order":4,"settings":{"description":null,"isRequired":false,"senderEmail":false,"useAsFolderName":false,"width":1},"type":"upload_area"}],"formDescription":"hello world","submitButtonText":"goodbye world","successMessage":"thank you"} # UpdateFormByIdRequestBody |  (optional)

    try:
        # Updates a form with given parameters
        api_response = api_instance.update_form_by_id(id, ev_api_key, ev_access_token, update_form_by_id_request_body=update_form_by_id_request_body)
        print("The response of FormApi->update_form_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FormApi->update_form_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Form unique ID number. | 
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **update_form_by_id_request_body** | [**UpdateFormByIdRequestBody**](UpdateFormByIdRequestBody.md)|  | [optional] 

### Return type

[**FormResponse**](FormResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

