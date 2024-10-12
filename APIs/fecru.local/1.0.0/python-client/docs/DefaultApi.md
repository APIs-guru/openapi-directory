# openapi_client.DefaultApi

All URIs are relative to *http://fecru.local/context*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_allowed_reviewer_group**](DefaultApi.md#add_allowed_reviewer_group) | **PUT** /rest-service-fecru/admin/projects/{key}/allowed-reviewer-groups | 
[**add_allowed_reviewer_user**](DefaultApi.md#add_allowed_reviewer_user) | **PUT** /rest-service-fecru/admin/projects/{key}/allowed-reviewer-users | 
[**add_default_reviewer_group**](DefaultApi.md#add_default_reviewer_group) | **PUT** /rest-service-fecru/admin/projects/{key}/default-reviewer-groups | 
[**add_default_reviewer_user**](DefaultApi.md#add_default_reviewer_user) | **PUT** /rest-service-fecru/admin/projects/{key}/default-reviewer-users | 
[**add_group_to_permissions**](DefaultApi.md#add_group_to_permissions) | **PUT** /rest-service-fecru/admin/repositories/{repository}/permissions/groups | 
[**add_permission_scheme_anonymous_users**](DefaultApi.md#add_permission_scheme_anonymous_users) | **PUT** /rest-service-fecru/admin/permission-schemes/{name}/anonymous-users | 
[**add_permission_scheme_group**](DefaultApi.md#add_permission_scheme_group) | **PUT** /rest-service-fecru/admin/permission-schemes/{name}/groups | 
[**add_permission_scheme_logged_users**](DefaultApi.md#add_permission_scheme_logged_users) | **PUT** /rest-service-fecru/admin/permission-schemes/{name}/logged-in-users | 
[**add_permission_scheme_review_role**](DefaultApi.md#add_permission_scheme_review_role) | **PUT** /rest-service-fecru/admin/permission-schemes/{name}/review-roles | 
[**add_permission_scheme_user**](DefaultApi.md#add_permission_scheme_user) | **PUT** /rest-service-fecru/admin/permission-schemes/{name}/users | 
[**add_repository**](DefaultApi.md#add_repository) | **POST** /rest-service-fecru/admin/repositories-v1 | 
[**allowed_reviewer_groups**](DefaultApi.md#allowed_reviewer_groups) | **GET** /rest-service-fecru/admin/projects/{key}/allowed-reviewer-groups | 
[**allowed_reviewer_users**](DefaultApi.md#allowed_reviewer_users) | **GET** /rest-service-fecru/admin/projects/{key}/allowed-reviewer-users | 
[**default_permissions**](DefaultApi.md#default_permissions) | **GET** /rest-service-fecru/admin/repositories/~defaults/permissions | 
[**default_reviewer_groups**](DefaultApi.md#default_reviewer_groups) | **GET** /rest-service-fecru/admin/projects/{key}/default-reviewer-groups | 
[**delete_allowed_reviewer_group**](DefaultApi.md#delete_allowed_reviewer_group) | **DELETE** /rest-service-fecru/admin/projects/{key}/allowed-reviewer-groups | 
[**delete_allowed_reviewer_user**](DefaultApi.md#delete_allowed_reviewer_user) | **DELETE** /rest-service-fecru/admin/projects/{key}/allowed-reviewer-users | 
[**delete_default_reviewer_group**](DefaultApi.md#delete_default_reviewer_group) | **DELETE** /rest-service-fecru/admin/projects/{key}/default-reviewer-groups | 
[**delete_default_reviewer_user**](DefaultApi.md#delete_default_reviewer_user) | **DELETE** /rest-service-fecru/admin/projects/{key}/default-reviewer-users | 
[**delete_permission_scheme_anonymous_users**](DefaultApi.md#delete_permission_scheme_anonymous_users) | **DELETE** /rest-service-fecru/admin/permission-schemes/{name}/anonymous-users | 
[**delete_permission_scheme_group**](DefaultApi.md#delete_permission_scheme_group) | **DELETE** /rest-service-fecru/admin/permission-schemes/{name}/groups | 
[**delete_permission_scheme_logged_users**](DefaultApi.md#delete_permission_scheme_logged_users) | **DELETE** /rest-service-fecru/admin/permission-schemes/{name}/logged-in-users | 
[**delete_permission_scheme_role**](DefaultApi.md#delete_permission_scheme_role) | **DELETE** /rest-service-fecru/admin/permission-schemes/{name}/review-roles | 
[**delete_permission_scheme_user**](DefaultApi.md#delete_permission_scheme_user) | **DELETE** /rest-service-fecru/admin/permission-schemes/{name}/users | 
[**delete_repository**](DefaultApi.md#delete_repository) | **DELETE** /rest-service-fecru/admin/repositories-v1/{repository}/ | 
[**disable_repository**](DefaultApi.md#disable_repository) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/disable | 
[**do_review_revision_reindex**](DefaultApi.md#do_review_revision_reindex) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/reindex-reviews | 
[**do_share_content**](DefaultApi.md#do_share_content) | **POST** /rest-service-fecru/share-content-v1/share | 
[**enable_repository**](DefaultApi.md#enable_repository) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/enable | 
[**full_incremental_index**](DefaultApi.md#full_incremental_index) | **PUT** /rest-service-fecru/admin/repositories/{repository}/full-incremental-index | 
[**get_global_pref**](DefaultApi.md#get_global_pref) | **GET** /rest-service-fecru/user-prefs-v1/{property} | 
[**get_info**](DefaultApi.md#get_info) | **GET** /rest-service-fecru/server-v1 | 
[**get_recent**](DefaultApi.md#get_recent) | **GET** /rest-service-fecru/recently-visited-v1 | 
[**get_recent_detailed**](DefaultApi.md#get_recent_detailed) | **GET** /rest-service-fecru/recently-visited-v1/detailed | 
[**get_recent_projects**](DefaultApi.md#get_recent_projects) | **GET** /rest-service-fecru/recently-visited-v1/projects | 
[**get_recent_projects_detailed**](DefaultApi.md#get_recent_projects_detailed) | **GET** /rest-service-fecru/recently-visited-v1/projects/detailed | 
[**get_recent_repositories**](DefaultApi.md#get_recent_repositories) | **GET** /rest-service-fecru/recently-visited-v1/repositories | 
[**get_recent_repositories_detailed**](DefaultApi.md#get_recent_repositories_detailed) | **GET** /rest-service-fecru/recently-visited-v1/repositories/detailed | 
[**get_recent_reviews**](DefaultApi.md#get_recent_reviews) | **GET** /rest-service-fecru/recently-visited-v1/reviews | 
[**get_recent_reviews_detailed**](DefaultApi.md#get_recent_reviews_detailed) | **GET** /rest-service-fecru/recently-visited-v1/reviews/detailed | 
[**get_recent_snippets**](DefaultApi.md#get_recent_snippets) | **GET** /rest-service-fecru/recently-visited-v1/snippets | 
[**get_recent_snippets_detailed**](DefaultApi.md#get_recent_snippets_detailed) | **GET** /rest-service-fecru/recently-visited-v1/snippets/detailed | 
[**get_recent_users**](DefaultApi.md#get_recent_users) | **GET** /rest-service-fecru/recently-visited-v1/users | 
[**get_recent_users_detailed**](DefaultApi.md#get_recent_users_detailed) | **GET** /rest-service-fecru/recently-visited-v1/users/detailed | 
[**get_repo_pref**](DefaultApi.md#get_repo_pref) | **GET** /rest-service-fecru/user-prefs-v1/{repository}/{property} | 
[**incremental_index**](DefaultApi.md#incremental_index) | **PUT** /rest-service-fecru/admin/repositories/{repository}/incremental-index | 
[**list_anonymous_users_principal_association**](DefaultApi.md#list_anonymous_users_principal_association) | **GET** /rest-service-fecru/admin/permission-schemes/{name}/anonymous-users | 
[**list_default_reviewer_users**](DefaultApi.md#list_default_reviewer_users) | **GET** /rest-service-fecru/admin/projects/{key}/default-reviewer-users | 
[**list_group_principal_association**](DefaultApi.md#list_group_principal_association) | **GET** /rest-service-fecru/admin/permission-schemes/{name}/groups | 
[**list_group_users**](DefaultApi.md#list_group_users) | **GET** /rest-service-fecru/admin/groups/{name}/users | 
[**list_logged_users_principal_association**](DefaultApi.md#list_logged_users_principal_association) | **GET** /rest-service-fecru/admin/permission-schemes/{name}/logged-in-users | 
[**list_projects**](DefaultApi.md#list_projects) | **GET** /rest-service-fecru/admin/permission-schemes/{name}/projects | 
[**list_roles_principal_association**](DefaultApi.md#list_roles_principal_association) | **GET** /rest-service-fecru/admin/permission-schemes/{name}/review-roles | 
[**list_user_groups**](DefaultApi.md#list_user_groups) | **GET** /rest-service-fecru/admin/users/{name}/groups | 
[**list_user_principal_association**](DefaultApi.md#list_user_principal_association) | **GET** /rest-service-fecru/admin/permission-schemes/{name}/users | 
[**login**](DefaultApi.md#login) | **POST** /rest-service-fecru/auth/login | 
[**move_all_reviews**](DefaultApi.md#move_all_reviews) | **PUT** /rest-service-fecru/admin/projects/{sourceProjectKey}/move-reviews/{destinationProjectKey} | 
[**permissions**](DefaultApi.md#permissions) | **GET** /rest-service-fecru/admin/repositories/{repository}/permissions | 
[**permissions_groups**](DefaultApi.md#permissions_groups) | **GET** /rest-service-fecru/admin/repositories/{repository}/permissions/groups | 
[**rebuild_search_index**](DefaultApi.md#rebuild_search_index) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/reindex-search | 
[**reindex_changeset_comments**](DefaultApi.md#reindex_changeset_comments) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/reindex-discussions | 
[**reindex_changeset_discussion**](DefaultApi.md#reindex_changeset_discussion) | **PUT** /rest-service-fecru/admin/repositories/{repository}/reindex-changeset-discussion | 
[**reindex_reviews**](DefaultApi.md#reindex_reviews) | **PUT** /rest-service-fecru/admin/repositories/{repository}/reindex-reviews | 
[**reindex_search**](DefaultApi.md#reindex_search) | **PUT** /rest-service-fecru/admin/repositories/{repository}/reindex-search | 
[**remove_group_to_permissions**](DefaultApi.md#remove_group_to_permissions) | **DELETE** /rest-service-fecru/admin/repositories/{repository}/permissions/groups | 
[**repository_updates**](DefaultApi.md#repository_updates) | **GET** /rest-service-fecru/admin/repositories/{repository}/updates | 
[**rest_service_fecru_admin_groups_get**](DefaultApi.md#rest_service_fecru_admin_groups_get) | **GET** /rest-service-fecru/admin/groups/ | 
[**rest_service_fecru_admin_groups_name_delete**](DefaultApi.md#rest_service_fecru_admin_groups_name_delete) | **DELETE** /rest-service-fecru/admin/groups/{name} | 
[**rest_service_fecru_admin_groups_name_get**](DefaultApi.md#rest_service_fecru_admin_groups_name_get) | **GET** /rest-service-fecru/admin/groups/{name} | 
[**rest_service_fecru_admin_groups_name_put**](DefaultApi.md#rest_service_fecru_admin_groups_name_put) | **PUT** /rest-service-fecru/admin/groups/{name} | 
[**rest_service_fecru_admin_groups_name_users_delete**](DefaultApi.md#rest_service_fecru_admin_groups_name_users_delete) | **DELETE** /rest-service-fecru/admin/groups/{name}/users | 
[**rest_service_fecru_admin_groups_name_users_put**](DefaultApi.md#rest_service_fecru_admin_groups_name_users_put) | **PUT** /rest-service-fecru/admin/groups/{name}/users | 
[**rest_service_fecru_admin_groups_post**](DefaultApi.md#rest_service_fecru_admin_groups_post) | **POST** /rest-service-fecru/admin/groups/ | 
[**rest_service_fecru_admin_permission_schemes_get**](DefaultApi.md#rest_service_fecru_admin_permission_schemes_get) | **GET** /rest-service-fecru/admin/permission-schemes | 
[**rest_service_fecru_admin_permission_schemes_name_delete**](DefaultApi.md#rest_service_fecru_admin_permission_schemes_name_delete) | **DELETE** /rest-service-fecru/admin/permission-schemes/{name} | 
[**rest_service_fecru_admin_permission_schemes_name_get**](DefaultApi.md#rest_service_fecru_admin_permission_schemes_name_get) | **GET** /rest-service-fecru/admin/permission-schemes/{name} | 
[**rest_service_fecru_admin_permission_schemes_name_put**](DefaultApi.md#rest_service_fecru_admin_permission_schemes_name_put) | **PUT** /rest-service-fecru/admin/permission-schemes/{name} | 
[**rest_service_fecru_admin_permission_schemes_post**](DefaultApi.md#rest_service_fecru_admin_permission_schemes_post) | **POST** /rest-service-fecru/admin/permission-schemes | 
[**rest_service_fecru_admin_projects_get**](DefaultApi.md#rest_service_fecru_admin_projects_get) | **GET** /rest-service-fecru/admin/projects | 
[**rest_service_fecru_admin_projects_key_delete**](DefaultApi.md#rest_service_fecru_admin_projects_key_delete) | **DELETE** /rest-service-fecru/admin/projects/{key} | 
[**rest_service_fecru_admin_projects_key_get**](DefaultApi.md#rest_service_fecru_admin_projects_key_get) | **GET** /rest-service-fecru/admin/projects/{key} | 
[**rest_service_fecru_admin_projects_key_put**](DefaultApi.md#rest_service_fecru_admin_projects_key_put) | **PUT** /rest-service-fecru/admin/projects/{key} | 
[**rest_service_fecru_admin_projects_post**](DefaultApi.md#rest_service_fecru_admin_projects_post) | **POST** /rest-service-fecru/admin/projects | 
[**rest_service_fecru_admin_repositories_get**](DefaultApi.md#rest_service_fecru_admin_repositories_get) | **GET** /rest-service-fecru/admin/repositories | 
[**rest_service_fecru_admin_repositories_post**](DefaultApi.md#rest_service_fecru_admin_repositories_post) | **POST** /rest-service-fecru/admin/repositories | 
[**rest_service_fecru_admin_repositories_repository_delete**](DefaultApi.md#rest_service_fecru_admin_repositories_repository_delete) | **DELETE** /rest-service-fecru/admin/repositories/{repository} | 
[**rest_service_fecru_admin_repositories_repository_get**](DefaultApi.md#rest_service_fecru_admin_repositories_repository_get) | **GET** /rest-service-fecru/admin/repositories/{repository} | 
[**rest_service_fecru_admin_repositories_repository_put**](DefaultApi.md#rest_service_fecru_admin_repositories_repository_put) | **PUT** /rest-service-fecru/admin/repositories/{repository} | 
[**rest_service_fecru_admin_repositories_repository_reindex_linecount_put**](DefaultApi.md#rest_service_fecru_admin_repositories_repository_reindex_linecount_put) | **PUT** /rest-service-fecru/admin/repositories/{repository}/reindex-linecount | 
[**rest_service_fecru_admin_repositories_repository_reindex_source_put**](DefaultApi.md#rest_service_fecru_admin_repositories_repository_reindex_source_put) | **PUT** /rest-service-fecru/admin/repositories/{repository}/reindex-source | 
[**rest_service_fecru_admin_repositories_repository_rescan_metadata_put**](DefaultApi.md#rest_service_fecru_admin_repositories_repository_rescan_metadata_put) | **PUT** /rest-service-fecru/admin/repositories/{repository}/rescan-metadata | 
[**rest_service_fecru_admin_repositories_v1_repository_get**](DefaultApi.md#rest_service_fecru_admin_repositories_v1_repository_get) | **GET** /rest-service-fecru/admin/repositories-v1/{repository} | 
[**rest_service_fecru_admin_repositories_v1_repository_reindex_linecount_post**](DefaultApi.md#rest_service_fecru_admin_repositories_v1_repository_reindex_linecount_post) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/reindex-linecount | 
[**rest_service_fecru_admin_repositories_v1_repository_reindex_source_post**](DefaultApi.md#rest_service_fecru_admin_repositories_v1_repository_reindex_source_post) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/reindex-source | 
[**rest_service_fecru_admin_repositories_v1_repository_rescan_metadata_post**](DefaultApi.md#rest_service_fecru_admin_repositories_v1_repository_rescan_metadata_post) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/rescan-metadata | 
[**rest_service_fecru_admin_users_get**](DefaultApi.md#rest_service_fecru_admin_users_get) | **GET** /rest-service-fecru/admin/users/ | 
[**rest_service_fecru_admin_users_name_delete**](DefaultApi.md#rest_service_fecru_admin_users_name_delete) | **DELETE** /rest-service-fecru/admin/users/{name} | 
[**rest_service_fecru_admin_users_name_get**](DefaultApi.md#rest_service_fecru_admin_users_name_get) | **GET** /rest-service-fecru/admin/users/{name} | 
[**rest_service_fecru_admin_users_name_groups_delete**](DefaultApi.md#rest_service_fecru_admin_users_name_groups_delete) | **DELETE** /rest-service-fecru/admin/users/{name}/groups | 
[**rest_service_fecru_admin_users_name_groups_put**](DefaultApi.md#rest_service_fecru_admin_users_name_groups_put) | **PUT** /rest-service-fecru/admin/users/{name}/groups | 
[**rest_service_fecru_admin_users_name_put**](DefaultApi.md#rest_service_fecru_admin_users_name_put) | **PUT** /rest-service-fecru/admin/users/{name} | 
[**rest_service_fecru_admin_users_post**](DefaultApi.md#rest_service_fecru_admin_users_post) | **POST** /rest-service-fecru/admin/users/ | 
[**rest_service_fecru_indexing_status_v1_status_repository_get**](DefaultApi.md#rest_service_fecru_indexing_status_v1_status_repository_get) | **GET** /rest-service-fecru/indexing-status-v1/status/{repository} | 
[**scan**](DefaultApi.md#scan) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/scan | 
[**scan_cvs**](DefaultApi.md#scan_cvs) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/scan-cvs | 
[**set_pref**](DefaultApi.md#set_pref) | **POST** /rest-service-fecru/user-prefs-v1 | 
[**start**](DefaultApi.md#start) | **PUT** /rest-service-fecru/admin/repositories/{repository}/start | 
[**start_repository**](DefaultApi.md#start_repository) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/start | 
[**stop**](DefaultApi.md#stop) | **PUT** /rest-service-fecru/admin/repositories/{repository}/stop | 
[**stop_repository**](DefaultApi.md#stop_repository) | **POST** /rest-service-fecru/admin/repositories-v1/{repository}/stop | 
[**update_default_permissions**](DefaultApi.md#update_default_permissions) | **PUT** /rest-service-fecru/admin/repositories/~defaults/permissions | 
[**update_permissions**](DefaultApi.md#update_permissions) | **PUT** /rest-service-fecru/admin/repositories/{repository}/permissions | 
[**update_repository_updates**](DefaultApi.md#update_repository_updates) | **PUT** /rest-service-fecru/admin/repositories/{repository}/updates | 


# **add_allowed_reviewer_group**
> add_allowed_reviewer_group(key)



Add group to project's allowed reviewer group list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.add_allowed_reviewer_group(key)
    except Exception as e:
        print("Exception when calling DefaultApi->add_allowed_reviewer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_allowed_reviewer_user**
> add_allowed_reviewer_user(key)



Add user to project's allowed reviewer users list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.add_allowed_reviewer_user(key)
    except Exception as e:
        print("Exception when calling DefaultApi->add_allowed_reviewer_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_default_reviewer_group**
> add_default_reviewer_group(key)



Add group to project's default reviewer group list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.add_default_reviewer_group(key)
    except Exception as e:
        print("Exception when calling DefaultApi->add_default_reviewer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_default_reviewer_user**
> add_default_reviewer_user(key)



Add user to project's default reviewer users list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.add_default_reviewer_user(key)
    except Exception as e:
        print("Exception when calling DefaultApi->add_default_reviewer_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_group_to_permissions**
> add_group_to_permissions(repository)



Note: use /rest-service-fecru/admin/repository-permissions/ endpoint for full repository permission administration functionality  Adds group to repository allowed groups

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.add_group_to_permissions(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->add_group_to_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_permission_scheme_anonymous_users**
> add_permission_scheme_anonymous_users(name)



Add anonymous-user permission [action name] to given permission scheme  List of available action names:

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.add_permission_scheme_anonymous_users(name)
    except Exception as e:
        print("Exception when calling DefaultApi->add_permission_scheme_anonymous_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_permission_scheme_group**
> add_permission_scheme_group(name)



Add group permission [group name, action name] to given permission scheme  List of available action names:

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.add_permission_scheme_group(name)
    except Exception as e:
        print("Exception when calling DefaultApi->add_permission_scheme_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_permission_scheme_logged_users**
> add_permission_scheme_logged_users(name)



Add logged-in-users permission [action name] to given permission scheme  List of available action names:

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.add_permission_scheme_logged_users(name)
    except Exception as e:
        print("Exception when calling DefaultApi->add_permission_scheme_logged_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_permission_scheme_review_role**
> add_permission_scheme_review_role(name)



Add review-role permission [role name, action name] to given permission scheme  List of available action names:     List of available role names:

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.add_permission_scheme_review_role(name)
    except Exception as e:
        print("Exception when calling DefaultApi->add_permission_scheme_review_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_permission_scheme_user**
> add_permission_scheme_user(name)



Add user permission [username, action name] to given permission scheme  List of available action names:

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.add_permission_scheme_user(name)
    except Exception as e:
        print("Exception when calling DefaultApi->add_permission_scheme_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_repository**
> add_repository()



Adds repository

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.add_repository()
    except Exception as e:
        print("Exception when calling DefaultApi->add_repository: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **allowed_reviewer_groups**
> allowed_reviewer_groups(key)



Retrieves project's allowed reviewer groups

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.allowed_reviewer_groups(key)
    except Exception as e:
        print("Exception when calling DefaultApi->allowed_reviewer_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **allowed_reviewer_users**
> allowed_reviewer_users(key)



Retrieves project's allowed reviewer users

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.allowed_reviewer_users(key)
    except Exception as e:
        print("Exception when calling DefaultApi->allowed_reviewer_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **default_permissions**
> default_permissions()



Retrieve default repository permissions properties.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.default_permissions()
    except Exception as e:
        print("Exception when calling DefaultApi->default_permissions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **default_reviewer_groups**
> default_reviewer_groups(key)



Retrieves project's default reviewer groups

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.default_reviewer_groups(key)
    except Exception as e:
        print("Exception when calling DefaultApi->default_reviewer_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_allowed_reviewer_group**
> delete_allowed_reviewer_group(key)



Delete group from project's allowed reviewer group list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.delete_allowed_reviewer_group(key)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_allowed_reviewer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_allowed_reviewer_user**
> delete_allowed_reviewer_user(key)



Remove user from project's allowed reviewer users list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.delete_allowed_reviewer_user(key)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_allowed_reviewer_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_default_reviewer_group**
> delete_default_reviewer_group(key)



Delete group from project's default reviewer group list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.delete_default_reviewer_group(key)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_default_reviewer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_default_reviewer_user**
> delete_default_reviewer_user(key)



Remove user from project's default reviewer users list

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.delete_default_reviewer_user(key)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_default_reviewer_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme_anonymous_users**
> delete_permission_scheme_anonymous_users(name)



Removes anonymous-user permission [action name] from given permission scheme

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.delete_permission_scheme_anonymous_users(name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_permission_scheme_anonymous_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme_group**
> delete_permission_scheme_group(name)



Removes group permission [group name, action name] from given permission scheme

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.delete_permission_scheme_group(name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_permission_scheme_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme_logged_users**
> delete_permission_scheme_logged_users(name)



Removes logged-in-users permission [action name] from given permission scheme

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.delete_permission_scheme_logged_users(name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_permission_scheme_logged_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme_role**
> delete_permission_scheme_role(name)



Removes review-role permission [role name, action name] from given permission scheme

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.delete_permission_scheme_role(name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_permission_scheme_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme_user**
> delete_permission_scheme_user(name)



Removes user permission [username, action name] from given permission scheme

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.delete_permission_scheme_user(name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_permission_scheme_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_repository**
> delete_repository(repository)



Deletes repository.  Warning: you can not undo this operation

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to delete

    try:
        api_instance.delete_repository(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_repository**
> disable_repository(repository)



Disables repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to disable

    try:
        api_instance.disable_repository(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->disable_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to disable | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **do_review_revision_reindex**
> do_review_revision_reindex(repository, synchronous=synchronous)



Re-indexes all the Crucible revision data (which revisions have been reviewed)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to reindex
    synchronous = False # bool | if true will wait for the indexing to finish before returning (optional) (default to False)

    try:
        api_instance.do_review_revision_reindex(repository, synchronous=synchronous)
    except Exception as e:
        print("Exception when calling DefaultApi->do_review_revision_reindex: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to reindex | 
 **synchronous** | **bool**| if true will wait for the indexing to finish before returning | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **do_share_content**
> do_share_content()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.do_share_content()
    except Exception as e:
        print("Exception when calling DefaultApi->do_share_content: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_repository**
> enable_repository(repository)



Enables repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to enable

    try:
        api_instance.enable_repository(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->enable_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to enable | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **full_incremental_index**
> full_incremental_index(repository)



Runs an full incremental repository index.  For CVS: scans the whole CVS repository for any changes since the last scan.  For other repository types will trigger an incremental index.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to scan

    try:
        api_instance.full_incremental_index(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->full_incremental_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to scan | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_global_pref**
> get_global_pref(var_property)



Getting user's global preference

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    var_property = 'var_property_example' # str | the property(preference) name

    try:
        api_instance.get_global_pref(var_property)
    except Exception as e:
        print("Exception when calling DefaultApi->get_global_pref: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_property** | **str**| the property(preference) name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_info**
> get_info()



Provides general information about the server's configuration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_info()
    except Exception as e:
        print("Exception when calling DefaultApi->get_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent**
> get_recent()



Get a list of recently visited items for the currently logged in user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_detailed**
> get_recent_detailed()



Get a list of recently visisted items for the currently logged in user, including the detailed entities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_detailed()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_detailed: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_projects**
> get_recent_projects()



Get a list of recently visited projects for the currently logged in user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_projects()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_projects: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_projects_detailed**
> get_recent_projects_detailed()



Get a list of recently visited projects for the currently logged in Project, including the detailed entities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_projects_detailed()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_projects_detailed: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_repositories**
> get_recent_repositories()



Get a list of recently visited repositories for the currently logged in user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_repositories()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_repositories: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_repositories_detailed**
> get_recent_repositories_detailed()



Get a list of recently visisted repositories for the currently logged in user, including the detailed entities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_repositories_detailed()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_repositories_detailed: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_reviews**
> get_recent_reviews()



Get a list of recently visited reviews for the currently logged in user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_reviews()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_reviews: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_reviews_detailed**
> get_recent_reviews_detailed()



Get a list of recently visited reviews for the currently logged in user, including the detailed entities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_reviews_detailed()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_reviews_detailed: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_snippets**
> get_recent_snippets()



Get a list of recently visited snippets for the currently logged in user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_snippets()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_snippets: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_snippets_detailed**
> get_recent_snippets_detailed()



Get a list of recently visited snippets for the currently logged in user, including the detailed entities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_snippets_detailed()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_snippets_detailed: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_users**
> get_recent_users()



Get a list of recently visited users for the currently logged in user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_users()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_users: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_users_detailed**
> get_recent_users_detailed()



Get a list of recently visited users for the currently logged in user, including the detailed entities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_recent_users_detailed()
    except Exception as e:
        print("Exception when calling DefaultApi->get_recent_users_detailed: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_repo_pref**
> get_repo_pref(var_property, repository)



Getting user's preference related to a certain repository

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    var_property = 'var_property_example' # str | the property(preference) name
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.get_repo_pref(var_property, repository)
    except Exception as e:
        print("Exception when calling DefaultApi->get_repo_pref: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_property** | **str**| the property(preference) name | 
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **incremental_index**
> incremental_index(repository, wait=wait)



Runs an incremental repository index.  This is the same operation as triggered by scheduled indexing.  Can be called using the REST API Token to authorize.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to stop
    wait = False # bool | if true will wait for the indexing to finish before returning (optional) (default to False)

    try:
        api_instance.incremental_index(repository, wait=wait)
    except Exception as e:
        print("Exception when calling DefaultApi->incremental_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to stop | 
 **wait** | **bool**| if true will wait for the indexing to finish before returning | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_anonymous_users_principal_association**
> list_anonymous_users_principal_association(name, action=action)



Retrieve a page of anonymous users permissions [action name] for given permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name
    action = 'action_example' # str | action name (optional)

    try:
        api_instance.list_anonymous_users_principal_association(name, action=action)
    except Exception as e:
        print("Exception when calling DefaultApi->list_anonymous_users_principal_association: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 
 **action** | **str**| action name | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_default_reviewer_users**
> list_default_reviewer_users(key)



Retrieves project's default reviewer users

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.list_default_reviewer_users(key)
    except Exception as e:
        print("Exception when calling DefaultApi->list_default_reviewer_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_group_principal_association**
> list_group_principal_association(name, name2=name2, action=action)



Retrieve a page of group permissions [group name, action name] for given permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name
    name2 = 'name_example' # str | group name (optional)
    action = 'action_example' # str | action name (optional)

    try:
        api_instance.list_group_principal_association(name, name2=name2, action=action)
    except Exception as e:
        print("Exception when calling DefaultApi->list_group_principal_association: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 
 **name2** | **str**| group name | [optional] 
 **action** | **str**| action name | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_group_users**
> list_group_users(name)



Lists group's user names

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | group name

    try:
        api_instance.list_group_users(name)
    except Exception as e:
        print("Exception when calling DefaultApi->list_group_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| group name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_logged_users_principal_association**
> list_logged_users_principal_association(name, action=action)



Retrieve a page of logged in users permissions [action name] for given permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name
    action = 'action_example' # str | action name (optional)

    try:
        api_instance.list_logged_users_principal_association(name, action=action)
    except Exception as e:
        print("Exception when calling DefaultApi->list_logged_users_principal_association: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 
 **action** | **str**| action name | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_projects**
> list_projects(name)



Retrieve a page of projects for given permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.list_projects(name)
    except Exception as e:
        print("Exception when calling DefaultApi->list_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_roles_principal_association**
> list_roles_principal_association(name, name2=name2, action=action)



Retrieve a page of review-roles permissions [role name, action name] for given permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name
    name2 = 'name_example' # str | role name (optional)
    action = 'action_example' # str | action name (optional)

    try:
        api_instance.list_roles_principal_association(name, name2=name2, action=action)
    except Exception as e:
        print("Exception when calling DefaultApi->list_roles_principal_association: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 
 **name2** | **str**| role name | [optional] 
 **action** | **str**| action name | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_groups**
> list_user_groups(name)



Lists user's group names

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | user name

    try:
        api_instance.list_user_groups(name)
    except Exception as e:
        print("Exception when calling DefaultApi->list_user_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| user name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_principal_association**
> list_user_principal_association(name, name2=name2, action=action)



Retrieve a page of user permissions [username, action name] for given permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name
    name2 = 'name_example' # str | permission scheme name (optional)
    action = 'action_example' # str | action name (optional)

    try:
        api_instance.list_user_principal_association(name, name2=name2, action=action)
    except Exception as e:
        print("Exception when calling DefaultApi->list_user_principal_association: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 
 **name2** | **str**| permission scheme name | [optional] 
 **action** | **str**| action name | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> login()



Get the user authentication token.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.login()
    except Exception as e:
        print("Exception when calling DefaultApi->login: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_all_reviews**
> move_all_reviews(source_project_key, destination_project_key)



Move reviews and snippets from source project to destination project

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    source_project_key = 'source_project_key_example' # str | project key of reviews and snippets source project
    destination_project_key = 'destination_project_key_example' # str | project key of reviews and snippets destination project

    try:
        api_instance.move_all_reviews(source_project_key, destination_project_key)
    except Exception as e:
        print("Exception when calling DefaultApi->move_all_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_project_key** | **str**| project key of reviews and snippets source project | 
 **destination_project_key** | **str**| project key of reviews and snippets destination project | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions**
> permissions(repository)



Retrieve repository permissions properties.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.permissions(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_groups**
> permissions_groups(repository)



Note: use /rest-service-fecru/admin/repository-permissions/ endpoint for full repository permission administration functionality  Lists groups allowed to access repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.permissions_groups(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rebuild_search_index**
> rebuild_search_index(repository)



Rebuilds the search index data for the given repository. This will rebuild the data used to search by path,  commit message and comitter, also used for activity streams and JIRA integration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to re-index.

    try:
        api_instance.rebuild_search_index(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rebuild_search_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to re-index. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reindex_changeset_comments**
> reindex_changeset_comments(repository)



Rebuilds the changeset discussion index for the specified repository. The index is used to display changeset  discussions in activity streams.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to perform the operation for

    try:
        api_instance.reindex_changeset_comments(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->reindex_changeset_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to perform the operation for | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reindex_changeset_discussion**
> reindex_changeset_discussion(repository)



Rebuilds the changeset discussion index for the specified repository. The index is used to display changeset  discussions in activity streams.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to perform the operation for

    try:
        api_instance.reindex_changeset_discussion(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->reindex_changeset_discussion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to perform the operation for | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reindex_reviews**
> reindex_reviews(repository)



Re-indexes all the Crucible revision data (which revisions have been reviewed)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to reindex

    try:
        api_instance.reindex_reviews(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->reindex_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to reindex | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reindex_search**
> reindex_search(repository)



Rebuilds the search index data for the given repository. This will rebuild the data used to search by path,  commit message and committer, also used for activity streams and JIRA integration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to re-index.

    try:
        api_instance.reindex_search(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->reindex_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to re-index. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_group_to_permissions**
> remove_group_to_permissions(repository)



Delete group from repository allowed groups

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.remove_group_to_permissions(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_group_to_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_updates**
> repository_updates(repository)



Retrieves repository updates properties.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | repository key

    try:
        api_instance.repository_updates(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->repository_updates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| repository key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_get**
> rest_service_fecru_admin_groups_get(prefix=prefix)



Retrieve a page of groups.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    prefix = 'prefix_example' # str | filter groups by name prefix (optional)

    try:
        api_instance.rest_service_fecru_admin_groups_get(prefix=prefix)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | **str**| filter groups by name prefix | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_name_delete**
> rest_service_fecru_admin_groups_name_delete(name)



Deletes a group by name

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | group name

    try:
        api_instance.rest_service_fecru_admin_groups_name_delete(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_name_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| group name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_name_get**
> rest_service_fecru_admin_groups_name_get(name)



Retrieve a group by name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | group name

    try:
        api_instance.rest_service_fecru_admin_groups_name_get(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| group name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_name_put**
> rest_service_fecru_admin_groups_name_put(name)



Updates an existing group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | group name

    try:
        api_instance.rest_service_fecru_admin_groups_name_put(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_name_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| group name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_name_users_delete**
> rest_service_fecru_admin_groups_name_users_delete(name)



Removes user from group

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | group name

    try:
        api_instance.rest_service_fecru_admin_groups_name_users_delete(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_name_users_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| group name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_name_users_put**
> rest_service_fecru_admin_groups_name_users_put(name)



Adds user to group

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | group name

    try:
        api_instance.rest_service_fecru_admin_groups_name_users_put(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_name_users_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| group name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_groups_post**
> rest_service_fecru_admin_groups_post()



Creates a new user group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.rest_service_fecru_admin_groups_post()
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_groups_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_permission_schemes_get**
> rest_service_fecru_admin_permission_schemes_get(name=name)



Retrieve a page of permission schemes.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name part filter, case insensitive, optional (optional)

    try:
        api_instance.rest_service_fecru_admin_permission_schemes_get(name=name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_permission_schemes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name part filter, case insensitive, optional | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_permission_schemes_name_delete**
> rest_service_fecru_admin_permission_schemes_name_delete(name)



Deletes a permission scheme by name

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.rest_service_fecru_admin_permission_schemes_name_delete(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_permission_schemes_name_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_permission_schemes_name_get**
> rest_service_fecru_admin_permission_schemes_name_get(name)



Retrieve a permission scheme by name

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.rest_service_fecru_admin_permission_schemes_name_get(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_permission_schemes_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_permission_schemes_name_put**
> rest_service_fecru_admin_permission_schemes_name_put(name)



Updates an existing permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | permission scheme name

    try:
        api_instance.rest_service_fecru_admin_permission_schemes_name_put(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_permission_schemes_name_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| permission scheme name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_permission_schemes_post**
> rest_service_fecru_admin_permission_schemes_post(copy_from=copy_from)



Creates a new permission scheme. The new permission scheme is blank or can be created from another existing permission scheme.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    copy_from = 'copy_from_example' # str | if set, the new permission scheme will be a copy of permissionSchemeName (optional)

    try:
        api_instance.rest_service_fecru_admin_permission_schemes_post(copy_from=copy_from)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_permission_schemes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **copy_from** | **str**| if set, the new permission scheme will be a copy of permissionSchemeName | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_projects_get**
> rest_service_fecru_admin_projects_get(name=name, key=key, default_repository_name=default_repository_name, permission_scheme_name=permission_scheme_name)



Retrieve a page of projects.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | project's name part filter, optional (optional)
    key = 'key_example' # str | project's key part filter, optional (optional)
    default_repository_name = 'default_repository_name_example' # str | project's default repository key part filter, optional (optional)
    permission_scheme_name = 'permission_scheme_name_example' # str | project's permission scheme pare name filter, optional (optional)

    try:
        api_instance.rest_service_fecru_admin_projects_get(name=name, key=key, default_repository_name=default_repository_name, permission_scheme_name=permission_scheme_name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_projects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| project&#39;s name part filter, optional | [optional] 
 **key** | **str**| project&#39;s key part filter, optional | [optional] 
 **default_repository_name** | **str**| project&#39;s default repository key part filter, optional | [optional] 
 **permission_scheme_name** | **str**| project&#39;s permission scheme pare name filter, optional | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_projects_key_delete**
> rest_service_fecru_admin_projects_key_delete(key, delete_project_reviews=delete_project_reviews)



Deletes a project by key (including all reviews in this project).  Use   to move reviews to another project.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key
    delete_project_reviews = False # bool | if true deletes reviews in project (optional) (default to False)

    try:
        api_instance.rest_service_fecru_admin_projects_key_delete(key, delete_project_reviews=delete_project_reviews)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_projects_key_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 
 **delete_project_reviews** | **bool**| if true deletes reviews in project | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_projects_key_get**
> rest_service_fecru_admin_projects_key_get(key)



Retrieve a project by key.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.rest_service_fecru_admin_projects_key_get(key)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_projects_key_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_projects_key_put**
> rest_service_fecru_admin_projects_key_put(key)



Updates an existing project.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | project key

    try:
        api_instance.rest_service_fecru_admin_projects_key_put(key)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_projects_key_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| project key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_projects_post**
> rest_service_fecru_admin_projects_post()



Creates a new project.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.rest_service_fecru_admin_projects_post()
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_projects_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_get**
> rest_service_fecru_admin_repositories_get(type=type, enabled=enabled, started=started)



Retrieve a page of repositories. Repository properties with default values may not be returned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    type = 'type_example' # str | filter repositories by repository type: svn, git, hg, cvs, p4, ... (optional)
    enabled = True # bool | filter repositories by enabled flag (optional)
    started = True # bool | filter repositories by started flag (optional)

    try:
        api_instance.rest_service_fecru_admin_repositories_get(type=type, enabled=enabled, started=started)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| filter repositories by repository type: svn, git, hg, cvs, p4, ... | [optional] 
 **enabled** | **bool**| filter repositories by enabled flag | [optional] 
 **started** | **bool**| filter repositories by started flag | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_post**
> rest_service_fecru_admin_repositories_post()



Creates a repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.rest_service_fecru_admin_repositories_post()
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_repository_delete**
> rest_service_fecru_admin_repositories_repository_delete(repository)



Deletes a repository by key

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.rest_service_fecru_admin_repositories_repository_delete(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_repository_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_repository_get**
> rest_service_fecru_admin_repositories_repository_get(repository)



Retrieve a repository by key. Repository properties with default values may not be returned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.rest_service_fecru_admin_repositories_repository_get(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_repository_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_repository_put**
> rest_service_fecru_admin_repositories_repository_put(repository)



Updates an existing repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.rest_service_fecru_admin_repositories_repository_put(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_repository_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_repository_reindex_linecount_put**
> rest_service_fecru_admin_repositories_repository_reindex_linecount_put(repository)



Re-indexes the linecount data used to generate the LOC graphs. The linecount data will be recalculated in daily  buckets based on the server timezone.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to re-index

    try:
        api_instance.rest_service_fecru_admin_repositories_repository_reindex_linecount_put(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_repository_reindex_linecount_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to re-index | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_repository_reindex_source_put**
> rest_service_fecru_admin_repositories_repository_reindex_source_put(repository, clone=clone)



Deletes the existing cache and re-indexes the repository from scratch.  For large or slow repositories this may take some time, during which some functionality will be unavailable.  This action will also restart the repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to reindex
    clone = False # bool | if true and the repository is a dvcs repository (git or mercurial) it will re-clone the repository before re-indexing (optional) (default to False)

    try:
        api_instance.rest_service_fecru_admin_repositories_repository_reindex_source_put(repository, clone=clone)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_repository_reindex_source_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to reindex | 
 **clone** | **bool**| if true and the repository is a dvcs repository (git or mercurial) it will re-clone the repository before re-indexing | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_repository_rescan_metadata_put**
> rest_service_fecru_admin_repositories_repository_rescan_metadata_put(repository, var_from=var_from, to=to)



Re-scans the repository metadata. Only valid for Perforce and SVN repositories.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to re-scan
    var_from = 'var_from_example' # str | the revision number to start at (optional)
    to = 'to_example' # str | the revision number to end at (optional)

    try:
        api_instance.rest_service_fecru_admin_repositories_repository_rescan_metadata_put(repository, var_from=var_from, to=to)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_repository_rescan_metadata_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to re-scan | 
 **var_from** | **str**| the revision number to start at | [optional] 
 **to** | **str**| the revision number to end at | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_v1_repository_get**
> rest_service_fecru_admin_repositories_v1_repository_get(repository)



Returns information about the status of the repository and the current indexing status

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.rest_service_fecru_admin_repositories_v1_repository_get(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_v1_repository_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_v1_repository_reindex_linecount_post**
> rest_service_fecru_admin_repositories_v1_repository_reindex_linecount_post(repository)



Re-indexes the linecount data used to generate the LOC graphs. The linecount data will be recalculated in daily  buckets based on the server timezone.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to re-index

    try:
        api_instance.rest_service_fecru_admin_repositories_v1_repository_reindex_linecount_post(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_v1_repository_reindex_linecount_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to re-index | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_v1_repository_reindex_source_post**
> rest_service_fecru_admin_repositories_v1_repository_reindex_source_post(repository, clone=clone)



Deletes the existing cache and re-indexes the repository from scratch.  For large or slow repositories this may take some time, during which some functionality will be unavailable.  This action will also restart the repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to reindex
    clone = False # bool | if true and the repository is a dvcs repository (git or mercurial) it will re-clone the repository  before re-indexing (optional) (default to False)

    try:
        api_instance.rest_service_fecru_admin_repositories_v1_repository_reindex_source_post(repository, clone=clone)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_v1_repository_reindex_source_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to reindex | 
 **clone** | **bool**| if true and the repository is a dvcs repository (git or mercurial) it will re-clone the repository  before re-indexing | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_repositories_v1_repository_rescan_metadata_post**
> rest_service_fecru_admin_repositories_v1_repository_rescan_metadata_post(repository, var_from=var_from, to=to)



Re-scans the repository metadata for SVN and Perforce repositories. Only valid for Perforce and SVN repositories.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to re-scan
    var_from = 56 # int | the revision number to start at (optional)
    to = 56 # int | the revision number to end at (optional)

    try:
        api_instance.rest_service_fecru_admin_repositories_v1_repository_rescan_metadata_post(repository, var_from=var_from, to=to)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_repositories_v1_repository_rescan_metadata_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to re-scan | 
 **var_from** | **int**| the revision number to start at | [optional] 
 **to** | **int**| the revision number to end at | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_get**
> rest_service_fecru_admin_users_get()



Retrieve a page of users.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.rest_service_fecru_admin_users_get()
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_name_delete**
> rest_service_fecru_admin_users_name_delete(name)



Deletes a user by name

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | user name

    try:
        api_instance.rest_service_fecru_admin_users_name_delete(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_name_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| user name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_name_get**
> rest_service_fecru_admin_users_name_get(name)



Retrieve a user by name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | user name

    try:
        api_instance.rest_service_fecru_admin_users_name_get(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| user name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_name_groups_delete**
> rest_service_fecru_admin_users_name_groups_delete(name)



Removes user from group

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | user name

    try:
        api_instance.rest_service_fecru_admin_users_name_groups_delete(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_name_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| user name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_name_groups_put**
> rest_service_fecru_admin_users_name_groups_put(name)



Adds user to group

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | user name

    try:
        api_instance.rest_service_fecru_admin_users_name_groups_put(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_name_groups_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| user name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_name_put**
> rest_service_fecru_admin_users_name_put(name)



Updates an existing user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | user name

    try:
        api_instance.rest_service_fecru_admin_users_name_put(name)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_name_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| user name | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_admin_users_post**
> rest_service_fecru_admin_users_post()



Creates a new user. Tries to add the user to fisheye-users and crucible-users groups if those exist.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.rest_service_fecru_admin_users_post()
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_admin_users_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rest_service_fecru_indexing_status_v1_status_repository_get**
> rest_service_fecru_indexing_status_v1_status_repository_get(repository)



Returns indexing status of given repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to get status of

    try:
        api_instance.rest_service_fecru_indexing_status_v1_status_repository_get(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->rest_service_fecru_indexing_status_v1_status_repository_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to get status of | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scan**
> scan(repository, synchronous=synchronous)



Runs an incremental repository index now.  This is the same operation as triggered by scheduled indexing.  Can be called using the REST Api Token to authorize.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to run scan for
    synchronous = False # bool | if true will wait for the indexing to finish before returning (optional) (default to False)

    try:
        api_instance.scan(repository, synchronous=synchronous)
    except Exception as e:
        print("Exception when calling DefaultApi->scan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to run scan for | 
 **synchronous** | **bool**| if true will wait for the indexing to finish before returning | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scan_cvs**
> scan_cvs(repository)



Scans the whole CVS repository for any changes since the last scan. Only valid for CVS repositories.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to scan

    try:
        api_instance.scan_cvs(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->scan_cvs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to scan | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_pref**
> set_pref()



Using POST method to set a user preference.  If repo is not set, the preference will be recognised as a global preference.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.set_pref()
    except Exception as e:
        print("Exception when calling DefaultApi->set_pref: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start**
> start(repository)



Starts repository. Does not wait for the repository to start before returning.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to start

    try:
        api_instance.start(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to start | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_repository**
> start_repository(repository)



Starts the repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to start

    try:
        api_instance.start_repository(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->start_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to start | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop**
> stop(repository)



Stops repository. Does not wait for the repository to stop before returning.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to stop

    try:
        api_instance.stop(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to stop | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_repository**
> stop_repository(repository)



Stops the repository. Does not wait for the repository to stop before returning.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to stop

    try:
        api_instance.stop_repository(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->stop_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to stop | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_default_permissions**
> update_default_permissions()



Updates default repository permissions properties.   Valid permission settings: any combination of allowAnonymous, allowLoggedIn

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.update_default_permissions()
    except Exception as e:
        print("Exception when calling DefaultApi->update_default_permissions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_permissions**
> update_permissions(repository)



Updates repository permissions properties.   Valid permission settings: any combination of useDefaults, allowAnonymous, allowLoggedIn.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository

    try:
        api_instance.update_permissions(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->update_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_repository_updates**
> update_repository_updates(repository)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://fecru.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://fecru.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | repository key

    try:
        api_instance.update_repository_updates(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->update_repository_updates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| repository key | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

