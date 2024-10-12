# openapi_client.EmailTemplatesApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_available_email_templates_0**](EmailTemplatesApi.md#list_available_email_templates_0) | **GET** /templates/email/list | List Available Email Templates
[**see_email_template_information_0**](EmailTemplatesApi.md#see_email_template_information_0) | **GET** /templates/email/info | See Email Template Information


# **list_available_email_templates_0**
> list_available_email_templates_0(modified_after=modified_after, modified_before=modified_before, limit=limit, offset=offset)

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
    api_instance = openapi_client.EmailTemplatesApi(api_client)
    modified_after = '2020-01-01T01:01:01.000000' # str | (Optional) String in ISO 8601  Retrieve only templates updated at or after the given time. (optional)
    modified_before = '2020-02-01T01:01:01.000000' # str | (Optional) String in ISO 8601  Retrieve only templates updated at or before the given time (optional)
    limit = '1' # str | (Optional) Positive Number  Maximum number of templates to retrieve, default to 100 if not provided, maximum acceptable value is 1000. (optional)
    offset = '0' # str | (Optional) Positive Number  Number of templates to skip before returning rest of the templates that fit the search criteria. (optional)

    try:
        # List Available Email Templates
        api_instance.list_available_email_templates_0(modified_after=modified_after, modified_before=modified_before, limit=limit, offset=offset)
    except Exception as e:
        print("Exception when calling EmailTemplatesApi->list_available_email_templates_0: %s\n" % e)
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

# **see_email_template_information_0**
> see_email_template_information_0(email_template_id=email_template_id)

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
    api_instance = openapi_client.EmailTemplatesApi(api_client)
    email_template_id = '{{email_template_id}}' # str | (Required) String  Your email template's API Identifier. (optional)

    try:
        # See Email Template Information
        api_instance.see_email_template_information_0(email_template_id=email_template_id)
    except Exception as e:
        print("Exception when calling EmailTemplatesApi->see_email_template_information_0: %s\n" % e)
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

