# openapi_client.EmailListsApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_email_list**](EmailListsApi.md#add_email_list) | **POST** /email-lists | Create new email list
[**delete_email_list_by_id**](EmailListsApi.md#delete_email_list_by_id) | **DELETE** /email-lists/{id} | Delete an email group with given id
[**get_email_list_by_id**](EmailListsApi.md#get_email_list_by_id) | **GET** /email-lists/{id} | Get individual email group
[**get_email_lists**](EmailListsApi.md#get_email_lists) | **GET** /email-lists | Get all email groups
[**update_email_list_by_id**](EmailListsApi.md#update_email_list_by_id) | **PATCH** /email-lists/{id} | Update an email group


# **add_email_list**
> EmailListResponse add_email_list(ev_api_key, ev_access_token, add_email_list_request_body=add_email_list_request_body)

Create new email list

Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.

### Example


```python
import openapi_client
from openapi_client.models.add_email_list_request_body import AddEmailListRequestBody
from openapi_client.models.email_list_response import EmailListResponse
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
    api_instance = openapi_client.EmailListsApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_email_list_request_body = {"value":{"emails":["exavault@example.com","exavault+1@example.com"],"name":"ExaVault Test"}} # AddEmailListRequestBody |  (optional)

    try:
        # Create new email list
        api_response = api_instance.add_email_list(ev_api_key, ev_access_token, add_email_list_request_body=add_email_list_request_body)
        print("The response of EmailListsApi->add_email_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailListsApi->add_email_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_email_list_request_body** | [**AddEmailListRequestBody**](AddEmailListRequestBody.md)|  | [optional] 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_email_list_by_id**
> EmptyResponse delete_email_list_by_id(ev_api_key, ev_access_token, id)

Delete an email group with given id

Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call. 

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
    api_instance = openapi_client.EmailListsApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 56 # int | ID of the email list to delete

    try:
        # Delete an email group with given id
        api_response = api_instance.delete_email_list_by_id(ev_api_key, ev_access_token, id)
        print("The response of EmailListsApi->delete_email_list_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailListsApi->delete_email_list_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the email list to delete | 

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
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_email_list_by_id**
> EmailListResponse get_email_list_by_id(ev_api_key, ev_access_token, id, include=include)

Get individual email group

Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.

### Example


```python
import openapi_client
from openapi_client.models.email_list_response import EmailListResponse
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
    api_instance = openapi_client.EmailListsApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 56 # int | ID of the email list to return.
    include = 'include_example' # str | Related record types to include in the response. Valid option is `ownerUser` (optional)

    try:
        # Get individual email group
        api_response = api_instance.get_email_list_by_id(ev_api_key, ev_access_token, id, include=include)
        print("The response of EmailListsApi->get_email_list_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailListsApi->get_email_list_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the email list to return. | 
 **include** | **str**| Related record types to include in the response. Valid option is &#x60;ownerUser&#x60; | [optional] 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_email_lists**
> EmailListCollectionResponse get_email_lists(ev_api_key, ev_access_token, include=include)

Get all email groups

List all email groups for authenticated user

### Example


```python
import openapi_client
from openapi_client.models.email_list_collection_response import EmailListCollectionResponse
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
    api_instance = openapi_client.EmailListsApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    include = 'include_example' # str | Related record types to include in the response. Valid option is `ownerUser` (optional)

    try:
        # Get all email groups
        api_response = api_instance.get_email_lists(ev_api_key, ev_access_token, include=include)
        print("The response of EmailListsApi->get_email_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailListsApi->get_email_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **include** | **str**| Related record types to include in the response. Valid option is &#x60;ownerUser&#x60; | [optional] 

### Return type

[**EmailListCollectionResponse**](EmailListCollectionResponse.md)

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

# **update_email_list_by_id**
> EmailListResponse update_email_list_by_id(ev_api_key, ev_access_token, id, update_email_list_request_body=update_email_list_request_body)

Update an email group

Add or remove emails from an email list that can be used to send and share files with groups.   **Notes**  *This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  

### Example


```python
import openapi_client
from openapi_client.models.email_list_response import EmailListResponse
from openapi_client.models.update_email_list_request_body import UpdateEmailListRequestBody
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
    api_instance = openapi_client.EmailListsApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 56 # int | ID of the email list to update.
    update_email_list_request_body = {"emails":["test@example.com","test+1@example.com","newaddress@example.com"],"name":"Renamed Test Email List"} # UpdateEmailListRequestBody |  (optional)

    try:
        # Update an email group
        api_response = api_instance.update_email_list_by_id(ev_api_key, ev_access_token, id, update_email_list_request_body=update_email_list_request_body)
        print("The response of EmailListsApi->update_email_list_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailListsApi->update_email_list_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the email list to update. | 
 **update_email_list_request_body** | [**UpdateEmailListRequestBody**](UpdateEmailListRequestBody.md)|  | [optional] 

### Return type

[**EmailListResponse**](EmailListResponse.md)

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

