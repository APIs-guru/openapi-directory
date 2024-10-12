# openapi_client.ApplicationApi

All URIs are relative to *https://api.slideroom.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_delete_attributes_v2**](ApplicationApi.md#application_delete_attributes_v2) | **DELETE** /api/v2/application/{applicationId}/attributes | Deletes a custom attribute for an application.
[**application_get_attribute_names_v2**](ApplicationApi.md#application_get_attribute_names_v2) | **GET** /api/v2/application/attributes/names | Gets the custom application attributes used by the organization.
[**application_get_attributes_v2**](ApplicationApi.md#application_get_attributes_v2) | **GET** /api/v2/application/{applicationId}/attributes | Gets the custom attributes for an application.
[**application_post_attributes_v2**](ApplicationApi.md#application_post_attributes_v2) | **POST** /api/v2/application/{applicationId}/attributes | Updates the custom attributes for an application. API Import is available in the Advanced Plan.
[**application_request_export_by_application_id_v2**](ApplicationApi.md#application_request_export_by_application_id_v2) | **POST** /api/v2/application/{applicationId}/request-export | Requests the generation of a single application export file (tabular, pdf, zip).
[**application_request_export_v2**](ApplicationApi.md#application_request_export_v2) | **POST** /api/v2/application/request-export | Requests the generation of application export files (tabular, pdf, zip).


# **application_delete_attributes_v2**
> str application_delete_attributes_v2(application_id, name)

Deletes a custom attribute for an application.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)
    application_id = 'application_id_example' # str | The ID of the application.
    name = 'name_example' # str | The name of the attribute to be deleted.

    try:
        # Deletes a custom attribute for an application.
        api_response = api_instance.application_delete_attributes_v2(application_id, name)
        print("The response of ApplicationApi->application_delete_attributes_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_delete_attributes_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The ID of the application. | 
 **name** | **str**| The name of the attribute to be deleted. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_get_attribute_names_v2**
> List[str] application_get_attribute_names_v2()

Gets the custom application attributes used by the organization.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)

    try:
        # Gets the custom application attributes used by the organization.
        api_response = api_instance.application_get_attribute_names_v2()
        print("The response of ApplicationApi->application_get_attribute_names_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_get_attribute_names_v2: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_get_attributes_v2**
> Dict[str, str] application_get_attributes_v2(application_id)

Gets the custom attributes for an application.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)
    application_id = 'application_id_example' # str | The ID of the application.

    try:
        # Gets the custom attributes for an application.
        api_response = api_instance.application_get_attributes_v2(application_id)
        print("The response of ApplicationApi->application_get_attributes_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_get_attributes_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The ID of the application. | 

### Return type

**Dict[str, str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_post_attributes_v2**
> str application_post_attributes_v2(application_id, data)

Updates the custom attributes for an application. API Import is available in the Advanced Plan.

This method only adds or updates attributes. Null values will be updated as nulls, but not deleted.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)
    application_id = 'application_id_example' # str | The ID of the application.
    data = {'key': 'data_example'} # Dict[str, str] | The name/value pairs of the attributes.

    try:
        # Updates the custom attributes for an application. API Import is available in the Advanced Plan.
        api_response = api_instance.application_post_attributes_v2(application_id, data)
        print("The response of ApplicationApi->application_post_attributes_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_post_attributes_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The ID of the application. | 
 **data** | [**Dict[str, str]**](str.md)| The name/value pairs of the attributes. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_request_export_by_application_id_v2**
> RequestApplicationExportResultV2 application_request_export_by_application_id_v2(application_id, format=format, round_type=round_type, round_name=round_name, tab_export=tab_export, pdf_include_forms=pdf_include_forms, pdf_include_references=pdf_include_references, pdf_include_media=pdf_include_media, pdf_include_applicant_attachments=pdf_include_applicant_attachments, pdf_include_organization_attachments=pdf_include_organization_attachments, pdf_include_ratings=pdf_include_ratings, pdf_include_full_page_media=pdf_include_full_page_media, pdf_include_highlights=pdf_include_highlights, pdf_include_comments=pdf_include_comments, pdf_include_common_app=pdf_include_common_app, zip_original_media=zip_original_media, zip_include_forms=zip_include_forms, zip_include_references=zip_include_references, zip_include_media=zip_include_media, zip_include_applicant_attachments=zip_include_applicant_attachments, zip_include_organization_attachments=zip_include_organization_attachments, zip_include_ratings=zip_include_ratings, zip_include_comments=zip_include_comments, zip_include_common_app=zip_include_common_app, delivery_account=delivery_account, delivery_folder=delivery_folder)

Requests the generation of a single application export file (tabular, pdf, zip).

Exports are generated asynchronously within SlideRoom.  To retrieve the export file generated by this request, use the api/v#/export/{token} endpoint to check the progress/result of the generation process.

### Example


```python
import openapi_client
from openapi_client.models.request_application_export_result_v2 import RequestApplicationExportResultV2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)
    application_id = 'application_id_example' # str | The id of the application to export
    format = 'format_example' # str |  (optional)
    round_type = 'round_type_example' # str |  (optional)
    round_name = 'round_name_example' # str |  (optional)
    tab_export = 'tab_export_example' # str |  (optional)
    pdf_include_forms = True # bool |  (optional)
    pdf_include_references = True # bool |  (optional)
    pdf_include_media = True # bool |  (optional)
    pdf_include_applicant_attachments = True # bool |  (optional)
    pdf_include_organization_attachments = True # bool |  (optional)
    pdf_include_ratings = True # bool |  (optional)
    pdf_include_full_page_media = True # bool |  (optional)
    pdf_include_highlights = True # bool |  (optional)
    pdf_include_comments = True # bool |  (optional)
    pdf_include_common_app = True # bool |  (optional)
    zip_original_media = True # bool |  (optional)
    zip_include_forms = True # bool |  (optional)
    zip_include_references = True # bool |  (optional)
    zip_include_media = True # bool |  (optional)
    zip_include_applicant_attachments = True # bool |  (optional)
    zip_include_organization_attachments = True # bool |  (optional)
    zip_include_ratings = True # bool |  (optional)
    zip_include_comments = True # bool |  (optional)
    zip_include_common_app = True # bool |  (optional)
    delivery_account = 'delivery_account_example' # str |  (optional)
    delivery_folder = 'delivery_folder_example' # str |  (optional)

    try:
        # Requests the generation of a single application export file (tabular, pdf, zip).
        api_response = api_instance.application_request_export_by_application_id_v2(application_id, format=format, round_type=round_type, round_name=round_name, tab_export=tab_export, pdf_include_forms=pdf_include_forms, pdf_include_references=pdf_include_references, pdf_include_media=pdf_include_media, pdf_include_applicant_attachments=pdf_include_applicant_attachments, pdf_include_organization_attachments=pdf_include_organization_attachments, pdf_include_ratings=pdf_include_ratings, pdf_include_full_page_media=pdf_include_full_page_media, pdf_include_highlights=pdf_include_highlights, pdf_include_comments=pdf_include_comments, pdf_include_common_app=pdf_include_common_app, zip_original_media=zip_original_media, zip_include_forms=zip_include_forms, zip_include_references=zip_include_references, zip_include_media=zip_include_media, zip_include_applicant_attachments=zip_include_applicant_attachments, zip_include_organization_attachments=zip_include_organization_attachments, zip_include_ratings=zip_include_ratings, zip_include_comments=zip_include_comments, zip_include_common_app=zip_include_common_app, delivery_account=delivery_account, delivery_folder=delivery_folder)
        print("The response of ApplicationApi->application_request_export_by_application_id_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_request_export_by_application_id_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The id of the application to export | 
 **format** | **str**|  | [optional] 
 **round_type** | **str**|  | [optional] 
 **round_name** | **str**|  | [optional] 
 **tab_export** | **str**|  | [optional] 
 **pdf_include_forms** | **bool**|  | [optional] 
 **pdf_include_references** | **bool**|  | [optional] 
 **pdf_include_media** | **bool**|  | [optional] 
 **pdf_include_applicant_attachments** | **bool**|  | [optional] 
 **pdf_include_organization_attachments** | **bool**|  | [optional] 
 **pdf_include_ratings** | **bool**|  | [optional] 
 **pdf_include_full_page_media** | **bool**|  | [optional] 
 **pdf_include_highlights** | **bool**|  | [optional] 
 **pdf_include_comments** | **bool**|  | [optional] 
 **pdf_include_common_app** | **bool**|  | [optional] 
 **zip_original_media** | **bool**|  | [optional] 
 **zip_include_forms** | **bool**|  | [optional] 
 **zip_include_references** | **bool**|  | [optional] 
 **zip_include_media** | **bool**|  | [optional] 
 **zip_include_applicant_attachments** | **bool**|  | [optional] 
 **zip_include_organization_attachments** | **bool**|  | [optional] 
 **zip_include_ratings** | **bool**|  | [optional] 
 **zip_include_comments** | **bool**|  | [optional] 
 **zip_include_common_app** | **bool**|  | [optional] 
 **delivery_account** | **str**|  | [optional] 
 **delivery_folder** | **str**|  | [optional] 

### Return type

[**RequestApplicationExportResultV2**](RequestApplicationExportResultV2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_request_export_v2**
> RequestApplicationExportResultV2 application_request_export_v2(format=format, round_type=round_type, round_name=round_name, tab_export=tab_export, pdf_include_forms=pdf_include_forms, pdf_include_references=pdf_include_references, pdf_include_media=pdf_include_media, pdf_include_applicant_attachments=pdf_include_applicant_attachments, pdf_include_organization_attachments=pdf_include_organization_attachments, pdf_include_ratings=pdf_include_ratings, pdf_include_full_page_media=pdf_include_full_page_media, pdf_include_highlights=pdf_include_highlights, pdf_include_comments=pdf_include_comments, pdf_include_common_app=pdf_include_common_app, zip_original_media=zip_original_media, zip_include_forms=zip_include_forms, zip_include_references=zip_include_references, zip_include_media=zip_include_media, zip_include_applicant_attachments=zip_include_applicant_attachments, zip_include_organization_attachments=zip_include_organization_attachments, zip_include_ratings=zip_include_ratings, zip_include_comments=zip_include_comments, zip_include_common_app=zip_include_common_app, delivery_account=delivery_account, delivery_folder=delivery_folder, since=since, pool=pool, status=status, search_name=search_name, email=email)

Requests the generation of application export files (tabular, pdf, zip).

Exports are generated asynchronously within SlideRoom.  To retrieve the export file generated by this request, use the api/v#/export/{token} endpoint to check the progress/result of the generation process.  PDF and ZIP exports are available in the Advanced Plan.

### Example


```python
import openapi_client
from openapi_client.models.request_application_export_result_v2 import RequestApplicationExportResultV2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationApi(api_client)
    format = 'format_example' # str |  (optional)
    round_type = 'round_type_example' # str |  (optional)
    round_name = 'round_name_example' # str |  (optional)
    tab_export = 'tab_export_example' # str |  (optional)
    pdf_include_forms = True # bool |  (optional)
    pdf_include_references = True # bool |  (optional)
    pdf_include_media = True # bool |  (optional)
    pdf_include_applicant_attachments = True # bool |  (optional)
    pdf_include_organization_attachments = True # bool |  (optional)
    pdf_include_ratings = True # bool |  (optional)
    pdf_include_full_page_media = True # bool |  (optional)
    pdf_include_highlights = True # bool |  (optional)
    pdf_include_comments = True # bool |  (optional)
    pdf_include_common_app = True # bool |  (optional)
    zip_original_media = True # bool |  (optional)
    zip_include_forms = True # bool |  (optional)
    zip_include_references = True # bool |  (optional)
    zip_include_media = True # bool |  (optional)
    zip_include_applicant_attachments = True # bool |  (optional)
    zip_include_organization_attachments = True # bool |  (optional)
    zip_include_ratings = True # bool |  (optional)
    zip_include_comments = True # bool |  (optional)
    zip_include_common_app = True # bool |  (optional)
    delivery_account = 'delivery_account_example' # str |  (optional)
    delivery_folder = 'delivery_folder_example' # str |  (optional)
    since = 56 # int |  (optional)
    pool = 'pool_example' # str |  (optional)
    status = 'status_example' # str |  (optional)
    search_name = 'search_name_example' # str |  (optional)
    email = 'email_example' # str |  (optional)

    try:
        # Requests the generation of application export files (tabular, pdf, zip).
        api_response = api_instance.application_request_export_v2(format=format, round_type=round_type, round_name=round_name, tab_export=tab_export, pdf_include_forms=pdf_include_forms, pdf_include_references=pdf_include_references, pdf_include_media=pdf_include_media, pdf_include_applicant_attachments=pdf_include_applicant_attachments, pdf_include_organization_attachments=pdf_include_organization_attachments, pdf_include_ratings=pdf_include_ratings, pdf_include_full_page_media=pdf_include_full_page_media, pdf_include_highlights=pdf_include_highlights, pdf_include_comments=pdf_include_comments, pdf_include_common_app=pdf_include_common_app, zip_original_media=zip_original_media, zip_include_forms=zip_include_forms, zip_include_references=zip_include_references, zip_include_media=zip_include_media, zip_include_applicant_attachments=zip_include_applicant_attachments, zip_include_organization_attachments=zip_include_organization_attachments, zip_include_ratings=zip_include_ratings, zip_include_comments=zip_include_comments, zip_include_common_app=zip_include_common_app, delivery_account=delivery_account, delivery_folder=delivery_folder, since=since, pool=pool, status=status, search_name=search_name, email=email)
        print("The response of ApplicationApi->application_request_export_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_request_export_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**|  | [optional] 
 **round_type** | **str**|  | [optional] 
 **round_name** | **str**|  | [optional] 
 **tab_export** | **str**|  | [optional] 
 **pdf_include_forms** | **bool**|  | [optional] 
 **pdf_include_references** | **bool**|  | [optional] 
 **pdf_include_media** | **bool**|  | [optional] 
 **pdf_include_applicant_attachments** | **bool**|  | [optional] 
 **pdf_include_organization_attachments** | **bool**|  | [optional] 
 **pdf_include_ratings** | **bool**|  | [optional] 
 **pdf_include_full_page_media** | **bool**|  | [optional] 
 **pdf_include_highlights** | **bool**|  | [optional] 
 **pdf_include_comments** | **bool**|  | [optional] 
 **pdf_include_common_app** | **bool**|  | [optional] 
 **zip_original_media** | **bool**|  | [optional] 
 **zip_include_forms** | **bool**|  | [optional] 
 **zip_include_references** | **bool**|  | [optional] 
 **zip_include_media** | **bool**|  | [optional] 
 **zip_include_applicant_attachments** | **bool**|  | [optional] 
 **zip_include_organization_attachments** | **bool**|  | [optional] 
 **zip_include_ratings** | **bool**|  | [optional] 
 **zip_include_comments** | **bool**|  | [optional] 
 **zip_include_common_app** | **bool**|  | [optional] 
 **delivery_account** | **str**|  | [optional] 
 **delivery_folder** | **str**|  | [optional] 
 **since** | **int**|  | [optional] 
 **pool** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 
 **search_name** | **str**|  | [optional] 
 **email** | **str**|  | [optional] 

### Return type

[**RequestApplicationExportResultV2**](RequestApplicationExportResultV2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

