# openapi_client.SharesApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_share**](SharesApi.md#add_share) | **POST** /shares | Creates a share
[**complete_direct_send**](SharesApi.md#complete_direct_send) | **POST** /shares/complete-send/{id} | Complete send files
[**delete_share_by_id**](SharesApi.md#delete_share_by_id) | **DELETE** /shares/{id} | Deactivate a share
[**get_share_by_id**](SharesApi.md#get_share_by_id) | **GET** /shares/{id} | Get a share
[**list_shares**](SharesApi.md#list_shares) | **GET** /shares | Get a list of shares
[**update_share_by_id**](SharesApi.md#update_share_by_id) | **PATCH** /shares/{id} | Update a share


# **add_share**
> ShareResponse add_share(ev_api_key, ev_access_token, add_share_request_body=add_share_request_body)

Creates a share

Creates a new share object for the given path in your account. We support three types of shares:    - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are 'live'; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.   - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are 'point in time' -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.   - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.    **How to send files from your computer using the API**:  In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:  1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` parameter to **true**. The response that is returned will include a \"meta\" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send. 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The \"/\" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header** 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**  **Setting the Share Permissions**  Only 5 different combinations of permissions are valid for the `accessMode` object:  - **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false** - **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false** - **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false** - **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false** - **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**  Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.  **Notes:**  Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).

### Example


```python
import openapi_client
from openapi_client.models.add_share_request_body import AddShareRequestBody
from openapi_client.models.share_response import ShareResponse
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
    api_instance = openapi_client.SharesApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_share_request_body = {"accessMode":{"delete":true,"download":true,"modify":true,"upload":true},"embed":false,"expiration":"2017-09-25T14:12:10Z","fileDropCreateFolders":false,"hasNotification":false,"isPublic":true,"messageBody":null,"messageSubject":"Invitation to a shared folder","name":"Shared Folder","notificationEmails":["notify@example.com","notify2@example.com"],"password":null,"recipients":[{"email":"user@example.com","type":"string"}],"requireEmail":false,"resources":["/testfolder"],"sendingLocalFiles":true,"type":"shared_folder"} # AddShareRequestBody |  (optional)

    try:
        # Creates a share
        api_response = api_instance.add_share(ev_api_key, ev_access_token, add_share_request_body=add_share_request_body)
        print("The response of SharesApi->add_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->add_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_share_request_body** | [**AddShareRequestBody**](AddShareRequestBody.md)|  | [optional] 

### Return type

[**ShareResponse**](ShareResponse.md)

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

# **complete_direct_send**
> ShareResponse complete_direct_send(ev_api_key, ev_access_token, id)

Complete send files

After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.    **How to send files from your computer using the API**:  In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:  1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` paramter to **true**. The response that is returned will include a \"meta\" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send. 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The \"/\" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header** 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token** 

### Example


```python
import openapi_client
from openapi_client.models.share_response import ShareResponse
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
    api_instance = openapi_client.SharesApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    id = 56 # int | ID of the share to trigger invitations for.

    try:
        # Complete send files
        api_response = api_instance.complete_direct_send(ev_api_key, ev_access_token, id)
        print("The response of SharesApi->complete_direct_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->complete_direct_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **id** | **int**| ID of the share to trigger invitations for. | 

### Return type

[**ShareResponse**](ShareResponse.md)

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

# **delete_share_by_id**
> EmptyResponse delete_share_by_id(id, ev_api_key, ev_access_token)

Deactivate a share

Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren't stored anywhere else in the account.  **Notes:**  - You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this. - You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.

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
    api_instance = openapi_client.SharesApi(api_client)
    id = 23241 # int | ID of the share entry
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Deactivate a share
        api_response = api_instance.delete_share_by_id(id, ev_api_key, ev_access_token)
        print("The response of SharesApi->delete_share_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->delete_share_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the share entry | 
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

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

# **get_share_by_id**
> ShareResponse get_share_by_id(id, ev_api_key, ev_access_token, include=include)

Get a share

Get the details for a specific share entry. You can use the `include` parameter to also get the details of related records, such as the owning user or the resources involved in the share.  **Notes:**  - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - To get share objects with type send, authenticated user's role must be admin or master.

### Example


```python
import openapi_client
from openapi_client.models.share_response import ShareResponse
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
    api_instance = openapi_client.SharesApi(api_client)
    id = 23241 # int | ID of the share entry
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    include = 'owner,notifications' # str | Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**. (optional)

    try:
        # Get a share
        api_response = api_instance.get_share_by_id(id, ev_api_key, ev_access_token, include=include)
        print("The response of SharesApi->get_share_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->get_share_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the share entry | 
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **include** | **str**| Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**. | [optional] 

### Return type

[**ShareResponse**](ShareResponse.md)

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

# **list_shares**
> ShareCollectionResponse list_shares(ev_api_key, ev_access_token, offset=offset, limit=limit, scope=scope, sort=sort, type=type, include=include, name=name, recipient=recipient, message=message, username=username, search=search)

Get a list of shares

Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.   **Notes:**  - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - To get share objects with type send, authenticated user's role must be admin or master.

### Example


```python
import openapi_client
from openapi_client.models.share_collection_response import ShareCollectionResponse
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
    api_instance = openapi_client.SharesApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    offset = 100 # int | Current offset of records (for pagination) (optional)
    limit = 100 # int | Limit of records to be returned (for pagination) (optional) (default to 100)
    scope = 'active' # str | Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you) (optional)
    sort = 'created' # str | What order the list of matches should be in. (optional)
    type = 'receive' # str | Limit the list of matches to only certain types of shares. (optional)
    include = 'owner,notifications' # str | Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**. (optional)
    name = 'Customer*' # str | When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\\*** to return everything starting with \"send\".  Use this parameter if you are searching for shares or receives for a specific folder name. For example **/Clients/ACME/To Be Processed**. (optional)
    recipient = 'test@example.com' # str | Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\\*@example.com** will give back entries shared with addresses ending in \"@example.com\".  (optional)
    message = 'submitted' # str | When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will always be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word \"taxes\". (optional)
    username = 'example' # str | When provided, only shares created by the user with that `username` will be included in the list. Does not support wildcard searching. (optional)
    search = 'search_example' # str | Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches. (optional)

    try:
        # Get a list of shares
        api_response = api_instance.list_shares(ev_api_key, ev_access_token, offset=offset, limit=limit, scope=scope, sort=sort, type=type, include=include, name=name, recipient=recipient, message=message, username=username, search=search)
        print("The response of SharesApi->list_shares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->list_shares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **offset** | **int**| Current offset of records (for pagination) | [optional] 
 **limit** | **int**| Limit of records to be returned (for pagination) | [optional] [default to 100]
 **scope** | **str**| Set of shares to return. (**all**&#x3D;all of them, **active**&#x3D;shares that are currently active, **curentUser**&#x3D;shares created by you) | [optional] 
 **sort** | **str**| What order the list of matches should be in. | [optional] 
 **type** | **str**| Limit the list of matches to only certain types of shares. | [optional] 
 **include** | **str**| Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**. | [optional] 
 **name** | **str**| When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\\*** to return everything starting with \&quot;send\&quot;.  Use this parameter if you are searching for shares or receives for a specific folder name. For example **/Clients/ACME/To Be Processed**. | [optional] 
 **recipient** | **str**| Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\\*@example.com** will give back entries shared with addresses ending in \&quot;@example.com\&quot;.  | [optional] 
 **message** | **str**| When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will always be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word \&quot;taxes\&quot;. | [optional] 
 **username** | **str**| When provided, only shares created by the user with that &#x60;username&#x60; will be included in the list. Does not support wildcard searching. | [optional] 
 **search** | **str**| Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches. | [optional] 

### Return type

[**ShareCollectionResponse**](ShareCollectionResponse.md)

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

# **update_share_by_id**
> ShareResponse update_share_by_id(id, ev_api_key, ev_access_token, update_share_request_body)

Update a share

Change the settings on an active share. Any changes made will affect all users that have access to the share.   When updating invitees, pass the `recipients` body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.  **Setting the Share Permissions**  Only 5 different combinations of permissions are valid for the `accessMode` object:  - **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false** - **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false** - **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false** - **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false** - **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**  Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.  **Notes:**    - Authenticated user should be the owner of the specified share.

### Example


```python
import openapi_client
from openapi_client.models.share_response import ShareResponse
from openapi_client.models.update_share_request_body import UpdateShareRequestBody
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
    api_instance = openapi_client.SharesApi(api_client)
    id = 23241 # int | ID of the share entry
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    update_share_request_body = {"accessMode":{"delete":true,"download":true,"modify":true,"upload":true},"embed":false,"expiration":"2017-09-25T14:12:10Z","fileDropCreateFolders":false,"hasNotification":false,"isPublic":true,"messageBody":null,"messageSubject":"Invitation to a shared folder","name":"Shared Folder","notificationEmails":["notify@example.com","notify2@example.com"],"password":null,"recipients":[{"email":"user@example.com","type":"string"}],"requireEmail":false,"resources":["/testfolder"],"status":0} # UpdateShareRequestBody | 

    try:
        # Update a share
        api_response = api_instance.update_share_by_id(id, ev_api_key, ev_access_token, update_share_request_body)
        print("The response of SharesApi->update_share_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->update_share_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the share entry | 
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **update_share_request_body** | [**UpdateShareRequestBody**](UpdateShareRequestBody.md)|  | 

### Return type

[**ShareResponse**](ShareResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

