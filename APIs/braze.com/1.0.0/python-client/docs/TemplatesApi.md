# openapi_client.TemplatesApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_available_content_blocks**](TemplatesApi.md#list_available_content_blocks) | **GET** /content_blocks/list | List Available Content Blocks
[**list_available_email_templates**](TemplatesApi.md#list_available_email_templates) | **GET** /templates/email/list | List Available Email Templates
[**see_content_block_information**](TemplatesApi.md#see_content_block_information) | **GET** /content_blocks/info | See Content Block Information
[**see_email_template_information**](TemplatesApi.md#see_email_template_information) | **GET** /templates/email/info | See Email Template Information


# **list_available_content_blocks**
> list_available_content_blocks(modified_after=modified_after, modified_before=modified_before, limit=limit, offset=offset)

List Available Content Blocks

This endpoint will list existing Content Block information.  ### Successful Response Properties ```json Content-Type: application/json Authorization: Bearer YOUR_REST_API_KEY {   \"count\": \"integer\",   \"content_blocks\": [     {       \"content_block_id\": \"string\",       \"name\": \"string\",       \"content_type\": \"html or text\",       \"liquid_tag\": \"string\",       \"inclusion_count\" : \"integer\",       \"created_at\": \"time-in-iso\",       \"last_edited\": \"time-in-iso\",       \"tags\" : \"array of strings\"     }   ] } ```  ### Possible Errors - `Modified after time is invalid.` The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).  - `Modified before time is invalid.` The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).  - `Modified after time must be earlier than or the same as modified before time.`  - `Content Block number limit is invalid.` The `limit` parameter must be an integer (positive number) greater than 0.  - `Content Block number limit must be greater than 0.` The `limit` parameter must be an integer (positive number) greater than 0.  - `Content Block number limit exceeds maximum of 1000.` The `limit` parameter must be an integer (positive number) greater than 0.  - `Offset is invalid.` The `offset` parameter must be an integer (positive number) greater than 0.  - `Offset must be greater than 0.` The `offset` parameter must be an integer (positive number) greater than 0.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    modified_after = '2020-01-01T01:01:01.000000' # str | (Optional) String in ISO 8601  Retrieve only content blocks updated at or after the given time. (optional)
    modified_before = '2020-02-01T01:01:01.000000' # str | (Optional) String in ISO 8601  Retrieve only content blocks updated at or before the given time. (optional)
    limit = '100' # str | (Optional) Positive Number  Maximum number of content blocks to retrieve, default to 100 if not provided, maximum acceptable value is 1000. (optional)
    offset = '1' # str | (Optional) Positive Number  Number of content blocks to skip before returning rest of the templates that fit the search criteria. (optional)

    try:
        # List Available Content Blocks
        api_instance.list_available_content_blocks(modified_after=modified_after, modified_before=modified_before, limit=limit, offset=offset)
    except Exception as e:
        print("Exception when calling TemplatesApi->list_available_content_blocks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modified_after** | **str**| (Optional) String in ISO 8601  Retrieve only content blocks updated at or after the given time. | [optional] 
 **modified_before** | **str**| (Optional) String in ISO 8601  Retrieve only content blocks updated at or before the given time. | [optional] 
 **limit** | **str**| (Optional) Positive Number  Maximum number of content blocks to retrieve, default to 100 if not provided, maximum acceptable value is 1000. | [optional] 
 **offset** | **str**| (Optional) Positive Number  Number of content blocks to skip before returning rest of the templates that fit the search criteria. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_available_email_templates**
> list_available_email_templates(modified_after=modified_after, modified_before=modified_before, limit=limit, offset=offset)

List Available Email Templates

Use this endpoint to get a list of available templates in your Braze account.  Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.  ### Successful Response Properties ```json {   \"count\": number of templates returned   \"templates\": [template with the following properties]:     \"email_template_id\": (string) your email template's API Identifier,     \"template_name\": (string) the name of your email template,     \"created_at\": (string, in ISO 8601),     \"updated_at\": (string, in ISO 8601),     \"tags\": (array of strings) tags appended to the template }   ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    modified_after = '2020-01-01T01:01:01.000000' # str | (Optional) String in ISO 8601  Retrieve only templates updated at or after the given time. (optional)
    modified_before = '2020-02-01T01:01:01.000000' # str | (Optional) String in ISO 8601  Retrieve only templates updated at or before the given time (optional)
    limit = '1' # str | (Optional) Positive Number  Maximum number of templates to retrieve, default to 100 if not provided, maximum acceptable value is 1000. (optional)
    offset = '0' # str | (Optional) Positive Number  Number of templates to skip before returning rest of the templates that fit the search criteria. (optional)

    try:
        # List Available Email Templates
        api_instance.list_available_email_templates(modified_after=modified_after, modified_before=modified_before, limit=limit, offset=offset)
    except Exception as e:
        print("Exception when calling TemplatesApi->list_available_email_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modified_after** | **str**| (Optional) String in ISO 8601  Retrieve only templates updated at or after the given time. | [optional] 
 **modified_before** | **str**| (Optional) String in ISO 8601  Retrieve only templates updated at or before the given time | [optional] 
 **limit** | **str**| (Optional) Positive Number  Maximum number of templates to retrieve, default to 100 if not provided, maximum acceptable value is 1000. | [optional] 
 **offset** | **str**| (Optional) Positive Number  Number of templates to skip before returning rest of the templates that fit the search criteria. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **see_content_block_information**
> see_content_block_information(content_block_id=content_block_id, include_inclusion_data=include_inclusion_data)

See Content Block Information

This endpoint will call information for an existing Content Block.  ### Successful Response Properties ```json Content-Type: application/json Authorization: Bearer YOUR_REST_API_KEY {   \"content_block_id\": \"string\",   \"name\": \"string\",   \"content\": \"string\",   \"description\": \"string\",   \"content_type\": \"html or text\",   \"tags\":  \"array of strings\",   \"created_at\": \"time-in-iso\",   \"last_edited\": \"time-in-iso\",   \"inclusion_count\" : \"integer\",   \"message\": \"success\" } ```  ### Possible Errors - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.  - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.  - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.  - `Include Inclusion Data - error` - One of true or false is not provided.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    content_block_id = '{{content_block_id}}' # str | (Required) String  The Content Block ID. This can be found by either listing Content Block information or going to the Developer Console, then API Settings, then scrolling to the bottom and searching for your Content Block API Identifier. (optional)
    include_inclusion_data = 'false' # str | (Optional) Boolean  When set to ‘true’, the API returns back the Message Variation API ID of Campaigns and Canvases where this content block is included, to be used in subsequent calls. The results exclude archived or deleted Campaigns or Canvases. (optional)

    try:
        # See Content Block Information
        api_instance.see_content_block_information(content_block_id=content_block_id, include_inclusion_data=include_inclusion_data)
    except Exception as e:
        print("Exception when calling TemplatesApi->see_content_block_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_block_id** | **str**| (Required) String  The Content Block ID. This can be found by either listing Content Block information or going to the Developer Console, then API Settings, then scrolling to the bottom and searching for your Content Block API Identifier. | [optional] 
 **include_inclusion_data** | **str**| (Optional) Boolean  When set to ‘true’, the API returns back the Message Variation API ID of Campaigns and Canvases where this content block is included, to be used in subsequent calls. The results exclude archived or deleted Campaigns or Canvases. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **see_email_template_information**
> see_email_template_information(email_template_id=email_template_id)

See Email Template Information

Use to get information on your email templates.  Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.  ### Request Components - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    email_template_id = '{{email_template_id}}' # str | (Required) String  Your email template's API Identifier. (optional)

    try:
        # See Email Template Information
        api_instance.see_email_template_information(email_template_id=email_template_id)
    except Exception as e:
        print("Exception when calling TemplatesApi->see_email_template_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_template_id** | **str**| (Required) String  Your email template&#39;s API Identifier. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

