# openapi_client.TemplatesAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_template**](TemplatesAPIApi.md#delete_template) | **DELETE** /templates/{templateIdOrAlias} | Delete a Template
[**get_single_template**](TemplatesAPIApi.md#get_single_template) | **GET** /templates/{templateIdOrAlias} | Get a Template
[**list_templates**](TemplatesAPIApi.md#list_templates) | **GET** /templates | Get the Templates associated with this Server
[**send_email_batch_with_templates_0**](TemplatesAPIApi.md#send_email_batch_with_templates_0) | **POST** /email/batchWithTemplates | Send a batch of email using templates.
[**send_email_with_template_0**](TemplatesAPIApi.md#send_email_with_template_0) | **POST** /email/withTemplate | Send an email using a Template
[**templates_post**](TemplatesAPIApi.md#templates_post) | **POST** /templates | Create a Template
[**test_template_content**](TemplatesAPIApi.md#test_template_content) | **POST** /templates/validate | Test Template Content
[**update_template**](TemplatesAPIApi.md#update_template) | **PUT** /templates/{templateIdOrAlias} | Update a Template


# **delete_template**
> TemplateDetailResponse delete_template(x_postmark_server_token, template_id_or_alias)

Delete a Template

### Example


```python
import openapi_client
from openapi_client.models.template_detail_response import TemplateDetailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    template_id_or_alias = 'template_id_or_alias_example' # str | The 'TemplateID' or 'Alias' value for the Template you wish to delete.

    try:
        # Delete a Template
        api_response = api_instance.delete_template(x_postmark_server_token, template_id_or_alias)
        print("The response of TemplatesAPIApi->delete_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->delete_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **template_id_or_alias** | **str**| The &#39;TemplateID&#39; or &#39;Alias&#39; value for the Template you wish to delete. | 

### Return type

[**TemplateDetailResponse**](TemplateDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_single_template**
> TemplateDetailResponse get_single_template(x_postmark_server_token, template_id_or_alias)

Get a Template

### Example


```python
import openapi_client
from openapi_client.models.template_detail_response import TemplateDetailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    template_id_or_alias = 'template_id_or_alias_example' # str | The 'TemplateID' or 'Alias' value for the Template you wish to retrieve.

    try:
        # Get a Template
        api_response = api_instance.get_single_template(x_postmark_server_token, template_id_or_alias)
        print("The response of TemplatesAPIApi->get_single_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->get_single_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **template_id_or_alias** | **str**| The &#39;TemplateID&#39; or &#39;Alias&#39; value for the Template you wish to retrieve. | 

### Return type

[**TemplateDetailResponse**](TemplateDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_templates**
> TemplateListingResponse list_templates(x_postmark_server_token, count, offset)

Get the Templates associated with this Server

### Example


```python
import openapi_client
from openapi_client.models.template_listing_response import TemplateListingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 3.4 # float | The number of Templates to return
    offset = 3.4 # float | The number of Templates to \"skip\" before returning results.

    try:
        # Get the Templates associated with this Server
        api_response = api_instance.list_templates(x_postmark_server_token, count, offset)
        print("The response of TemplatesAPIApi->list_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->list_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **float**| The number of Templates to return | 
 **offset** | **float**| The number of Templates to \&quot;skip\&quot; before returning results. | 

### Return type

[**TemplateListingResponse**](TemplateListingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_batch_with_templates_0**
> List[SendEmailResponse] send_email_batch_with_templates_0(x_postmark_server_token, body)

Send a batch of email using templates.

### Example


```python
import openapi_client
from openapi_client.models.send_email_response import SendEmailResponse
from openapi_client.models.send_email_templated_batch_request import SendEmailTemplatedBatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.SendEmailTemplatedBatchRequest() # SendEmailTemplatedBatchRequest | 

    try:
        # Send a batch of email using templates.
        api_response = api_instance.send_email_batch_with_templates_0(x_postmark_server_token, body)
        print("The response of TemplatesAPIApi->send_email_batch_with_templates_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->send_email_batch_with_templates_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**SendEmailTemplatedBatchRequest**](SendEmailTemplatedBatchRequest.md)|  | 

### Return type

[**List[SendEmailResponse]**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_with_template_0**
> SendEmailResponse send_email_with_template_0(x_postmark_server_token, body)

Send an email using a Template

### Example


```python
import openapi_client
from openapi_client.models.email_with_template_request import EmailWithTemplateRequest
from openapi_client.models.send_email_response import SendEmailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.EmailWithTemplateRequest() # EmailWithTemplateRequest | 

    try:
        # Send an email using a Template
        api_response = api_instance.send_email_with_template_0(x_postmark_server_token, body)
        print("The response of TemplatesAPIApi->send_email_with_template_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->send_email_with_template_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**EmailWithTemplateRequest**](EmailWithTemplateRequest.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templates_post**
> TemplateRecordResponse templates_post(x_postmark_server_token, body)

Create a Template

### Example


```python
import openapi_client
from openapi_client.models.create_template_request import CreateTemplateRequest
from openapi_client.models.template_record_response import TemplateRecordResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.CreateTemplateRequest() # CreateTemplateRequest | 

    try:
        # Create a Template
        api_response = api_instance.templates_post(x_postmark_server_token, body)
        print("The response of TemplatesAPIApi->templates_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->templates_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**CreateTemplateRequest**](CreateTemplateRequest.md)|  | 

### Return type

[**TemplateRecordResponse**](TemplateRecordResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_template_content**
> TemplateValidationResponse test_template_content(x_postmark_server_token, body=body)

Test Template Content

### Example


```python
import openapi_client
from openapi_client.models.template_validation_request import TemplateValidationRequest
from openapi_client.models.template_validation_response import TemplateValidationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.TemplateValidationRequest() # TemplateValidationRequest |  (optional)

    try:
        # Test Template Content
        api_response = api_instance.test_template_content(x_postmark_server_token, body=body)
        print("The response of TemplatesAPIApi->test_template_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->test_template_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**TemplateValidationRequest**](TemplateValidationRequest.md)|  | [optional] 

### Return type

[**TemplateValidationResponse**](TemplateValidationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_template**
> TemplateRecordResponse update_template(x_postmark_server_token, template_id_or_alias, body)

Update a Template

### Example


```python
import openapi_client
from openapi_client.models.edit_template_request import EditTemplateRequest
from openapi_client.models.template_record_response import TemplateRecordResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    template_id_or_alias = 'template_id_or_alias_example' # str | The 'TemplateID' or 'Alias' value for the Template you wish to update.
    body = openapi_client.EditTemplateRequest() # EditTemplateRequest | 

    try:
        # Update a Template
        api_response = api_instance.update_template(x_postmark_server_token, template_id_or_alias, body)
        print("The response of TemplatesAPIApi->update_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->update_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **template_id_or_alias** | **str**| The &#39;TemplateID&#39; or &#39;Alias&#39; value for the Template you wish to update. | 
 **body** | [**EditTemplateRequest**](EditTemplateRequest.md)|  | 

### Return type

[**TemplateRecordResponse**](TemplateRecordResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

